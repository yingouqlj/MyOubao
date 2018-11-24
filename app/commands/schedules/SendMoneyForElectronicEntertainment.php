<?php

/**
 * 发奖金或佣金
 *
 **/
class SendMoneyForElectronicEntertainment extends MoneyBaseTask {

    protected $validTypes = ['prize','commission'];

    protected function doCommand(){
        extract($this->data,EXTR_PREFIX_ALL,'send');
//        pr($this->data);
        is_array($send_projects) or $send_projects = explode(',',$send_projects);
        if (!in_array($send_type,$this->validTypes)){
            $this->log = "ERROR: Invalid Money Type: $send_type ,Exiting";
            return self::TASK_SUCCESS;
        }

        $sMoneyType   = Str::plural($send_type);
        $sFunction    = 'send' . ucfirst($sMoneyType);
        $sGetFunction = 'getUnSent' . ucfirst($sMoneyType) . 'Projects';
        $DB          = DB::connection();
        $iTotalCount = count($send_projects);
        $iSuccCount  = $iFailCount  = 0;
        $aErrnos     = [];
        $oProjects    = ManProject::$sGetFunction($send_projects,100);
        if (!$oProjects->count()){
            $this->log = 'No Projects, Exiting ';
            return self::TASK_SUCCESS;
        }

        $iTotalCount  = count($send_projects);
        foreach ($oProjects as $oProject){
            if (($iReturn = $this->$sFunction($oProject,$DB)) > 0){
                $iSuccCount++;
            }
            else{
                $iFailCount++;
                $aErrnos[ $oProject->id ] = $iReturn;
            }
        }
        $this->log = " $iSuccCount sent, $iFailCount Didn't Sent, ";
        if ($iTotalCount == $iSuccCount){
            $this->log .= 'Finished Exiting ';
            return self::TASK_SUCCESS;
        }
        else{
            $this->log .= $iTotalCount - $iSuccCount . ' Remaining, Exiting';
            if ($iFailCount){
                $errorFiles = ['system','schedule','fund','account','lottery','issue'];
                $oMessage   = new Message($errorFiles);
                $this->log .= " Failed Projects: ";
                $aErrorMsgs = [];
                foreach ($aErrnos as $iProjectId => $iErrno){
                    $sMsg         = $oMessage->getResponseMsg($iErrno);
                    $aErrorMsgs[] = "$iProjectId $sMsg";
                }
                $this->log .= implode("\n",$aErrorMsgs);
                $this->log .= ' Exiting';
                unset($aErrorMsgs);
            }
            return self::TASK_RESTORE;
        }
    }

    /**
     * 派发奖金
     * @param Project $oProject
     * @param DB $DB
     * @return int
     */
    private function sendPrizes($oProject,$DB){
        if ($oProject->status_prize == ManProject::PRIZE_STATUS_SENT){
            return 1;
        }
//        if (!$oProject->lock(TRUE)){
//            return ManProject::ERRNO_LOCK_FAILED;
//        }
        $oAccount = Account::lock($oProject->account_id,$iLocker);
        if (empty($oAccount)){
            return Account::ERRNO_LOCK_FAILED;
        }
        $oUser = User::find($oProject->user_id);
        $oProject->setUser($oUser);
        $oProject->setAccount($oAccount);
        $DB->beginTransaction();
        if (($iReturn = $oProject->sendPrizes()) === true){
            $iReturn = $oProject->setPrizeSentStatus();
        }
//        $bSucc  = ($iCount = $oProject->sendPrizes()) && $oProject->setPrizeSentStatus();
//        file_put_contents('/tmp/sendprice',var_export($oProject->toArray(),true));
        if ($iReturn === true){
            $DB->commit();
            $this->addProfitTask('prize',$oProject->prize_sent_at,$oProject->user_id,$oProject->prize,$oProject->lottery_id,$oProject->issue);
        }
        else{
            $DB->rollback();
        }
        Account::unLock($oProject->account_id,$iLocker,false);
        $iReturn === true or $oProject->unlock(true);
        return $iReturn;
    }

    /**
     * 派发佣金
     * @param Project $oProject
     * @param DB $DB
     * @return int
     */
    private function sendCommissions($oProject,$DB){
        if ($oProject->status_commission == ManProject::COMMISSION_STATUS_SENT){
            return 1;
        }
//        if (!$oProject->lock(FALSE)){
//            return ManProject::ERRNO_LOCK_FAILED;
//        }
        $aCommissionUser = $oProject->user_forefather_ids ? $oProject->user_forefather_ids .',' . $oProject->user_id : $oProject->user_id;
        $oAccounts = Account::lockManyOfUsers($aCommissionUser,$iLocker);
        if (empty($iLocker)){
            return Account::ERRNO_LOCK_FAILED;
        }
        $aAccounts = $aUsers    = [];
        foreach ($oAccounts as $oAccount){
            $aAccounts[ $oAccount->id ] = $oAccount;
        }
        unset($oAccounts);
        $oUsers = User::getUsersByIds($aCommissionUser,['id','username','forefather_ids','is_tester']);
        foreach ($oUsers as $oUser){
            $aUsers[ $oUser->id ] = $oUser;
        }
//        pr($aUsers);
//        exit;
        unset($oUsers);
        $DB->beginTransaction();
        $aCommissions = [];

        if (($iReturn = $oProject->sendCommissions($aUsers,$aAccounts,$aCommissions)) === true){
            $iReturn = $oProject->setCommissionSentStatus();
        }
//        file_put_contents('/tmp/sendcommission',var_export($oProject->toArray(),true));
        if ($iReturn === true){
            $DB->commit();
//            pr($aCommissions);
            foreach($aCommissions as $iAgentId => $fAmount){
                $this->addProfitTask('commission',$oProject->commission_sent_at,$iAgentId,$fAmount,$oProject->lottery_id,$oProject->issue);
            }
        }
        else{
            $DB->rollback();
        }
        Account::unlockManyOfUsers($aCommissionUser,$iLocker);
        $iReturn === true or $oProject->unlock(false);

        return $iReturn;
    }

    /**
     * 向任务队列追加销售额统计任务
     * @param string $sType
     * @param date $sDate
     * @param int $iUserId
     * @param float $fAmount
     * @param int $iLotteryId
     * @param string $sIssue
     * @return bool
     */
//    protected function addProfitTask($sType, $sDate, $iUserId, $fAmount, $iLotteryId, $sIssue = null) {
//        $aTaskData = [
//            'type'    => $sType,
//            'user_id' => $iUserId,
//            'amount'  => $fAmount,
//            'date'    => substr($sDate,0,10),
//            'lottery_id' => $iLotteryId,
//            'issue'   => $sIssue,
//        ];
//        return BaseTask::addTask('StatUpdateProfit', $aTaskData, 'stat');
//    }
}
