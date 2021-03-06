

//dice
(function(host, $, undefined){


	//初始化桌面下注区域配置
	var areasConfig = [
		//空区域元素
		{empty:'duizi-left',width: 115,height: 157,left: 311,top: 67,prize_odds:10, oddsPos:[50,0], helpPos:[7, 0],helpHtml:'<p>可选择一个或多个对子进行投注，开奖骰子包含所选对子即中奖（顺序不限）</p>'},
		{empty:'duizi-right',width: 115,height: 157,left: 817,top: 67,prize_odds:10, oddsPos:[50,0]},
		{empty:'baozi',width: 373,height: 78,left: 435,top: 68, prize_odds:180, oddsPos:[175,0], helpPos:[10, 0],helpHtml:'<p>可选择一个或多个豹子进行投注，开奖骰子为所选豹子即中奖</p>'},
		//{empty:'baozi-n',width: 373,height: 75,left: 435,top: 157, prize_odds:1, oddsPos:[175,0], helpPos:[10, 0],helpHtml:'<p>开奖号码为大</p>'},
		{empty:'erma',width: 993,height: 97,left: 125,top: 301, prize_odds:5, oddsPos:[40,10], helpPos:[10, 10],helpHtml:'<p>可选择一个或多个双骰进行投注，开奖号码包含所选双骰（不限顺序）即中奖</p>'},
		{empty:'yima',width: 993,height: 80,left: 125,top: 407, prize_odds:1, oddsPos:[40,10], helpPos:[10, 10],helpHtml:'<p>可选择一个或多个单骰进行投注，</p><p>若开奖号码包含一个所选单骰（顺序不限），则赔率为1赔1</p><p>若开奖号码包含一对所选单骰（即对子，顺序不限），则赔率为1赔2</p><p>若开奖号码包含三个所选单骰（即豹子，顺序不限），则赔率为1赔3</p>'},

		//可下注元素
		{	
			//玩法id
			id:1,
			//玩法英文名
			name_en:'big',
			//玩法中文名
			name_cn:'大',
			//最高投注金额
			bet_max:10000.00,
			//赔率
			prize_odds:1,

			//宽高坐标
		    width: 177,
		    height: 100,
		    left: 125,
		    top: 67,
		    oddsPos:[40,50],
			//帮助图标坐标
			helpPos:[10, 10],
			//帮助文字内容
			helpHtml:'<p>大：开奖骰子三个号和值为11至17即中奖</p><p>小：开奖骰子三个号和值为4至10即中奖</p><p>豹子(即111, 222，333，444，555, 666）除外</p>'
		},
		{id:2, name_en:'small', name_cn:'小', bet_max:10000.00, prize_odds:1, width: 177, height: 100, left: 941,top: 67, oddsPos:[115,50]},
		{id:2, name_en:'odd', name_cn:'单', bet_max:10000.00, prize_odds:1, width: 177, height: 48, left: 125,top: 175, oddsPos:[41,16], helpPos:[10,16], helpHtml:'<p>单：开奖骰子三个号和值为单数即中奖</p><p>双：开奖骰子三个号和值为双数即中奖</p><p>豹子（即111, 222，333，444，555, 666）除外</p>'},
		{id:2, name_en:'even', name_cn:'双', bet_max:10000.00, prize_odds:1, width: 177, height: 48, left: 941,top: 175, oddsPos:[115,16]},
		
		{id:2, name_en:'duizi-66', name_cn:'对子六', bet_max:10000.00, prize_odds:10, width: 101, height: 40, left: 318,top: 86},
		{id:2, name_en:'duizi-55', name_cn:'对子五', bet_max:10000.00, prize_odds:10, width: 101, height: 40, left: 318,top: 132},
		{id:2, name_en:'duizi-44', name_cn:'对子四', bet_max:10000.00, prize_odds:10, width: 101, height: 40, left: 318,top: 178},
		{id:2, name_en:'duizi-33', name_cn:'对子三', bet_max:10000.00, prize_odds:10, width: 101, height: 40, left: 824,top: 86},
		{id:2, name_en:'duizi-22', name_cn:'对子二', bet_max:10000.00, prize_odds:10, width: 101, height: 40, left: 824,top: 132},
		{id:2, name_en:'duizi-11', name_cn:'对子一', bet_max:10000.00, prize_odds:10, width: 101, height: 40, left: 824,top: 178},
		
		{id:2, name_en:'baozi-666', name_cn:'豹子六', bet_max:10000.00, prize_odds:180, width: 53, height: 53, left: 442,top: 88},
		{id:2, name_en:'baozi-555', name_cn:'豹子五', bet_max:10000.00, prize_odds:180, width: 53, height: 53, left: 504,top: 88},
		{id:2, name_en:'baozi-444', name_cn:'豹子四', bet_max:10000.00, prize_odds:180, width: 53, height: 53, left: 566,top: 88},
		{id:2, name_en:'baozi-333', name_cn:'豹子三', bet_max:10000.00, prize_odds:180, width: 53, height: 53, left: 627,top: 88},
		{id:2, name_en:'baozi-222', name_cn:'豹子二', bet_max:10000.00, prize_odds:180, width: 53, height: 53, left: 688,top: 88},
		{id:2, name_en:'baozi-111', name_cn:'豹子一', bet_max:10000.00, prize_odds:180, width: 53, height: 53, left: 749,top: 88},
		{id:2, name_en:'baozi-n', name_cn:'任意豹子号', bet_max:10000.00, prize_odds:30, width: 373, height: 71, left: 435,top: 153,oddsPos:[176,2], helpPos:[7,3], helpHtml:'对所有豹子进行投注，开奖骰子为豹子即中奖'},
		
		{id:2, name_en:'hezhi-17', name_cn:'和值17', bet_max:10000.00, prize_odds:60, width: 62, height: 60, left: 126,top: 232,oddsPos:[19,41], helpPos:[7, 0],helpHtml:'<p>可选择一个或多个和值进行投注，所选和值与开奖的3个骰子的和值相同即中奖</p>'},
		{id:2, name_en:'hezhi-16', name_cn:'和值16', bet_max:10000.00, prize_odds:30, width: 62, height: 60, left: 197,top: 232,oddsPos:[21,41]},
		{id:2, name_en:'hezhi-15', name_cn:'和值15', bet_max:10000.00, prize_odds:18, width: 62, height: 60, left: 268,top: 232,oddsPos:[19,41]},
		{id:2, name_en:'hezhi-14', name_cn:'和值14', bet_max:10000.00, prize_odds:12, width: 62, height: 60, left: 339,top: 232,oddsPos:[19,41]},
		{id:2, name_en:'hezhi-13', name_cn:'和值13', bet_max:10000.00, prize_odds:8, width: 62, height: 60, left: 410,top: 232,oddsPos:[21,41]},
		{id:2, name_en:'hezhi-12', name_cn:'和值12', bet_max:10000.00, prize_odds:6, width: 62, height: 60, left: 481,top: 232,oddsPos:[22,41]},
		{id:2, name_en:'hezhi-11', name_cn:'和值11', bet_max:10000.00, prize_odds:6, width: 63, height: 60, left: 552,top: 232,oddsPos:[21,41]},
		{id:2, name_en:'hezhi-10', name_cn:'和值10', bet_max:10000.00, prize_odds:6, width: 63, height: 60, left: 624,top: 232,oddsPos:[22,41]},
		{id:2, name_en:'hezhi-9', name_cn:'和值9', bet_max:10000.00, prize_odds:6, width: 63, height: 60, left: 696,top: 232,oddsPos:[20,41]},
		{id:2, name_en:'hezhi-8', name_cn:'和值8', bet_max:10000.00, prize_odds:8, width: 63, height: 60, left: 768,top: 232,oddsPos:[21,41]},
		{id:2, name_en:'hezhi-7', name_cn:'和值7', bet_max:10000.00, prize_odds:12, width: 63, height: 60, left: 840,top: 232,oddsPos:[18,41]},
		{id:2, name_en:'hezhi-6', name_cn:'和值6', bet_max:10000.00, prize_odds:18, width: 62, height: 60, left: 912,top: 232,oddsPos:[18,41]},
		{id:2, name_en:'hezhi-5', name_cn:'和值5', bet_max:10000.00, prize_odds:30, width: 63, height: 60, left: 983,top: 232,oddsPos:[18,41]},
		{id:2, name_en:'hezhi-4', name_cn:'和值4', bet_max:10000.00, prize_odds:60, width: 63, height: 60, left: 1055,top: 232,oddsPos:[18,41]},


		{id:2, name_en:'erma-56', name_cn:'二码46', bet_max:10000.00, prize_odds:5, width: 44, height: 85, left: 231,top: 307},
		{id:2, name_en:'erma-46', name_cn:'二码36', bet_max:10000.00, prize_odds:5, width: 44, height: 85, left: 284,top: 307},
		{id:2, name_en:'erma-45', name_cn:'二码45', bet_max:10000.00, prize_odds:5, width: 44, height: 85, left: 337,top: 307},
		{id:2, name_en:'erma-36', name_cn:'二码36', bet_max:10000.00, prize_odds:5, width: 44, height: 85, left: 390,top: 307},
		{id:2, name_en:'erma-35', name_cn:'二码35', bet_max:10000.00, prize_odds:5, width: 44, height: 85, left: 443,top: 307},
		{id:2, name_en:'erma-34', name_cn:'二码34', bet_max:10000.00, prize_odds:5, width: 44, height: 85, left: 496,top: 307},
		{id:2, name_en:'erma-26', name_cn:'二码26', bet_max:10000.00, prize_odds:5, width: 44, height: 85, left: 549,top: 307},
		{id:2, name_en:'erma-25', name_cn:'二码25', bet_max:10000.00, prize_odds:5, width: 44, height: 85, left: 602,top: 307},
		{id:2, name_en:'erma-24', name_cn:'二码24', bet_max:10000.00, prize_odds:5, width: 44, height: 85, left: 655,top: 307},
		{id:2, name_en:'erma-23', name_cn:'二码23', bet_max:10000.00, prize_odds:5, width: 44, height: 85, left: 708,top: 307},
		{id:2, name_en:'erma-16', name_cn:'二码16', bet_max:10000.00, prize_odds:5, width: 44, height: 85, left: 761,top: 307},
		{id:2, name_en:'erma-15', name_cn:'二码15', bet_max:10000.00, prize_odds:5, width: 44, height: 85, left: 814,top: 307},
		{id:2, name_en:'erma-14', name_cn:'二码14', bet_max:10000.00, prize_odds:5, width: 44, height: 85, left: 867,top: 307},
		{id:2, name_en:'erma-13', name_cn:'二码13', bet_max:10000.00, prize_odds:5, width: 44, height: 85, left: 920,top: 307},
		{id:2, name_en:'erma-12', name_cn:'二码12', bet_max:10000.00, prize_odds:5, width: 44, height: 85, left: 973,top: 307},


		{id:2, name_en:'yima-6', name_cn:'一码6', bet_max:10000.00, prize_odds:1, width: 82, height: 63, left: 252,top: 415},
		{id:2, name_en:'yima-5', name_cn:'一码5', bet_max:10000.00, prize_odds:1, width: 82, height: 63, left: 386,top: 415},
		{id:2, name_en:'yima-4', name_cn:'一码4', bet_max:10000.00, prize_odds:1, width: 82, height: 63, left: 520,top: 415},
		{id:2, name_en:'yima-3', name_cn:'一码3', bet_max:10000.00, prize_odds:1, width: 82, height: 63, left: 654,top: 415},
		{id:2, name_en:'yima-2', name_cn:'一码2', bet_max:10000.00, prize_odds:1, width: 82, height: 63, left: 788,top: 415},
		{id:2, name_en:'yima-1', name_cn:'一码1', bet_max:10000.00, prize_odds:1, width: 82, height: 63, left: 922,top: 415}

	];

	var audioConfig = [
		// 筹码音效名称以及对应的音效地址
		{'name':'chipToPlayer','url':"/assets/images/game/table/dice/chipToPlayer.mp3"},
		{'name':'chipToTable','url':"/assets/images/game/table/dice/chipToTable.mp3"},
		{'name':'timeoutTips','url':"/assets/images/game/table/dice/timeoutTips.mp3"},
		{'name':'diceRolling','url':"/assets/images/game/table/dice/diceRolling.mp3"}
	];





	//游戏实例
	var game = new host.TableGame.Dice();
	game.setConfig(global_game_config);
	// game.updateConfig();

	game.getRealTimeGameInfo();

	(function(){
		var event_area_addchip_after = function(e, chip){
			var area = this,
				areaDom = Manager.deskTop.find('[data-name="'+ area.getName() +'"]'),
				newChip = Manager.makeChipDom(chip),
				topi = 0,
				left = 0,
				id = 0,
				chipsNum = area.getChipsNum();

			topi = (area.getChipsNum() - 1) * -3;


			game.update();

			var money = area.getResult()["money"];
			if(money<10){
				left = 15;
			}else if(money>=10 && money<100){
				left = 12;
			}else if(money>=100 && money<1000){
				left = 9;
			}else if(money>=1000 && money<10000){
				left = 6;
			}else if(money>=10000 && money<100000){
				left = 3;
			}else if(money>=1000000){
				left = 0;
			}

			newChip.appendTo(areaDom);

			newChip.css({
				left:areaDom.width()/2 - newChip.width()/2,
				top:areaDom.height()/2 - newChip.height()/2 + topi
			});
			chip = area.getLastChip();
			
			if(!!!chip){
				return;
			}

			// chipDom =$('[data-id="'+chip.id+'"]');
			// moneyTip.setText(money);
			// moneyTip.show(left,-30,chipDom);
			
		};

		var event_cancel_one_chip = function(e, chip){
			var money = chip.getMoney(),
				id = chip.getId(),
				sourceDom = Manager.deskTop.find('[data-id="'+ id +'"]'),
				sourceOffset = sourceDom.offset(),
				targetDom = Manager.chipsBar.find('[data-money="'+ money +'"]'),
				targetOffset = targetDom.offset(),
				moveChipDom = Manager.makeChipDom(money);

			moveChipDom.css({
				left:sourceOffset.left,
				top:sourceOffset.top
			});
			moveChipDom.animate({
				left:targetOffset.left,
				top:targetOffset.top
			}, function(){
				game.update();
			});

		};

		var event_area_compensateChip_after = function(e, chip){
			
		};

		 


		game.initDeskTop(areasConfig);

		$.each(game.getAreas(), function(){
			var area = this;
			//区域增加投注筹码后添加投注动画
			area.addEvent('addchip_after', event_area_addchip_after);

			area.addEvent("compensateChip_after",event_area_compensateChip_after);
		});


		//游戏桌面数据发生变化触发界面更新
		game.addEvent('update_after', function(){

			var me = this,
				betResult = me.getResult(),
				betMoney = betResult['money'];

			$('#J-money-bet').text(Manager.formatMoneyCN(betMoney));
			
		});

		game.addEvent("cancelAll_after",function(e,money){
			userBalance.setUserBalance(money);
		})

		game.addEvent('getRealTimeGameInfo_after',function(e,data){
			var me = this,
				status = parseInt(data['status']),
				leftTime = data['leftTime'],
				currentNumber = data['currNumber'],
				betCount = parseInt(data["bet_count"]),
				currNumber = data["currNumber"],
				betPrize = data["bet_prize"],
				keepReqGameInfoTimer1,
				keepReqGameInfoTimer2,
				isReturn = false,
				reqRate = 2*1000,
				winNumber = data['win_number'],
				balls = [],
				kaijiang_balance = Math.floor(data['balance']),
				winPrize=data["win_amount"],
				cnumber = currNumber;

			if(winNumber){
				balls = winNumber.split('');
			}

			me.setCurrNumber(currentNumber);

			cnumber = cnumber.substr(cnumber.length - 4);

			// 更新当前期号
			$('#J-current-number').text(cnumber);


			// 可投注状态下
			if(status == 1){
				// 启动倒计时
				Manager.clockTimeStart(leftTime);


				// 解锁桌面
				Manager.unlockTable();

				Manager.hideNotice();

				// 当前用户已下注
				if(betCount != 0){
					var money = game.getResult()['money'];
					if(money == 0){
						Manager.restoreChips(global_last_bet_history);
						Manager.lockTable();
					}

					// 还原骰盅
					cup.wait(function(){
						Manager.showNotice("买定离手，等待开骰...");
					})
				}
			}

			// 不可投注，尚未完成派奖
			if(status == 2){

				var money = game.getResult()['money'];

				if(betCount!=0){
					if(money==0){
						Manager.restoreChips(global_last_bet_history);
					}
				}

				// 无论用户是否刷新都需要锁定桌面
				Manager.lockTable();

				// 还原骰盅，并摇骰中
				if(cup.status == 2){
					cup.play();
					Manager.playAudio("diceRolling");
				}else if(cup.status == 4){
					cup.wait(function(){
						cup.play();
						Manager.showNotice("即将开骰，祝您好运!");
						Manager.playAudio("diceRolling");
					})
				}

				keepReqGameInfoTimer1 = setTimeout(function(){
					game.getRealTimeGameInfo();
				},reqRate);
			}

			// 后台已经完成派奖，等待前台完成派奖动画
			if(status == 3){
				//console.log(leftTime);
				Manager.lockTable();
				Manager.updateBet();
				if(leftTime<=5){
					if(betCount!=0){
						if(winPrize==0){
							Manager.showNotice("加油，祝您下次好运!</br>"+leftTime+"秒后，进入新奖期");
						}else{
							Manager.showNotice("<font style='font-size:14px'>恭喜您中了<br/><font class='win-prize-in-tips' style='color:#F7CD1F;font-size:22px'>"+Manager.formatMoneyCN(winPrize)+"!</font></br>"+leftTime+"秒后，进入新奖期");
						}
					}else{
						Manager.showNotice(leftTime+"秒后，进入新奖期");
					}
					setTimeout(function(){
						me.getRealTimeGameInfo();
					},1000)
					
				}else{
					var	bet_prize = data['bet_prize'],
						content,
						ct,
						areas,
						balanceBeforeSettlement,
						result=[],
						shineAreas=[],
						luckyAreas = [],
						unluckyAreas = [];

					for(var way_id in bet_prize){
						if(bet_prize.hasOwnProperty(way_id)){
							content = bet_prize[way_id];
							for(var cnt in content){
								if(content.hasOwnProperty(cnt)){
									var ct="";
									switch(parseInt(way_id)){
										case 238:
											ct = "yima-"+cnt;
											break;
										case 239:
											ct = "baozi-"+cnt;
											break;
										case 240:
											ct = "erma-"+cnt;
											break;
										case 241:
											ct = "duizi-"+cnt;
											break;
										case 242:
											ct = "hezhi-"+cnt;
											break;
										case 243:
											switch(parseInt(cnt)){
												case 1:
													ct = "big";
													break
												case 0:
													ct= "small";
													break;
												case 2:
													ct = "even";
													break;
												case 3:
													ct = "odd";
													break;
											};
											break;
										case 244:
											ct = "baozi-n";
											break;
									}
									var isWin = content[cnt]["is_win"],
									    betAmount = content[cnt]["bet_amount"],
									    winAmount = content[cnt]["win_amount"]; 

									result.push({"name_en":ct,"is_win":isWin,"bet_amount":betAmount,"win_amount":winAmount});
								}
							}
						}
					};

					for(var m = 0; m<result.length;m++){

						if(result[m]["is_win"]==1){
							// 中奖的玩法(无论用户是否下注)
							shineAreas.push(result[m]);

							// 用户下注且中奖的玩法
							if(!!result[m]["bet_amount"]&&result[m]["bet_amount"] != 0){
								luckyAreas.push(result[m]);
							}
						};

						// 用户下注但未中奖的玩法
						if(!result[m]["is_win"] && !!result[m]["bet_amount"]){
							unluckyAreas.push(result[m]);
						};
					};

					// 用户下注了
					if(betCount!=0){

						// 桌面金额
						var money = game.getResult()['money'];
						
						if(money==0){
							// 桌面没筹码说明，用户刷新了界面
							

							switch(leftTime){
								case 13:
								case 12:
								case 11:
								case 10:
									Manager.restoreChips(global_last_bet_history);

									// 1秒后奖区闪动，持续3.5秒
									setTimeout(function(){
										Manager.areaShine(shineAreas);
									},1000)
									
									// 等待4.5秒+执行动画3秒=7.5秒
									setTimeout(function(){
										// 停止闪动并保持
										Manager.areaStopShine(shineAreas);

							 			// 庄家得
							 			// 等待0秒+耗时1秒
										Manager.bankerWin(unluckyAreas);

										// 玩家得
										// 等待1秒+耗时2秒=3秒
										setTimeout(function(){
											Manager.playerWin(luckyAreas);
											// 设置用户余额
											if(winPrize>0){
												Manager.bonusAnimate(winPrize,kaijiang_balance);
											}else{
												userBalance.initUserBalance(kaijiang_balance);
											}
											Manager.rebetOrDouble();
										},1000);
									},4500);

									setTimeout(function(){
										Manager.areaClearShine(shineAreas);
										game.getRealTimeGameInfo();
									},7500);
									break;
								case 9:
								case 8:
								case 7:
									Manager.restoreChips(global_last_bet_history);
									Manager.areaHight(shineAreas);
									// 等待1秒+动画3秒=4秒
									setTimeout(function(){
							 			// 庄家得
							 			// 等待0秒+耗时1秒
										Manager.bankerWin(unluckyAreas);

										// 玩家得
										// 等待1秒+耗时2秒=3秒
										setTimeout(function(){
											Manager.playerWin(luckyAreas);
											if(winPrize>0){
												Manager.bonusAnimate(winPrize,kaijiang_balance);
											}else{
												userBalance.initUserBalance(kaijiang_balance);
											}
											Manager.rebetOrDouble();
										},1000);
									},3500);

									setTimeout(function(){
										Manager.areaClearShine(shineAreas);
										game.getRealTimeGameInfo();
									},4000);
									break;
								case 6:
									Manager.areaHight(shineAreas);
									// 动画持续时间2秒
									if(winPrize>0){
											Manager.bonusAnimate(winPrize,kaijiang_balance);
									}else{
										userBalance.initUserBalance(kaijiang_balance);
									}
									Manager.rebetOrDouble();
									setTimeout(function(){
										Manager.areaClearShine(shineAreas);
										game.getRealTimeGameInfo();
									},2000);
									break;
								case 5:
								case 4:
								case 3:
								case 2:
								case 1:
									game.getRealTimeGameInfo();
									break;
							}
							
						}else{
							// 桌面有筹码，说明用户未刷新，连贯执行派奖动画
							
							// 动画A：0秒
							// 骰盅停摆（本身消耗的时间忽略不计）
							cup.stop(balls,function(){
								Manager.stopAudio("diceRolling");
								Manager.showNotice("开奖号码为：" + balls.join(" "));
								history.addRecord({
									'issue':currNumber,
									'nums':balls
								});
							});


							// 动画B：4.5秒
							// 骰盅归位，奖区闪动(等待的时间1秒+动画的时间3.5秒=4.5秒)
							setTimeout(function(){
								cup.hide(function(){
						 			Manager.hideNotice();
									Manager.areaShine(shineAreas);
								});
							},1000);
							
							
							// 动画C：等待时间4.5秒+动画时间3秒=7.5秒
							// 区域停止闪动并保持，执行派奖
							setTimeout(function(){
								// 停止闪动并保持
								Manager.areaStopShine(shineAreas);

					 			// 庄家得
					 			// 等待0秒+耗时1秒
								Manager.bankerWin(unluckyAreas);

								// 玩家得
								// 等待1秒+耗时2秒=3秒
								setTimeout(function(){
									Manager.playerWin(luckyAreas);

									// 设置用户余额
									if(winPrize>0){
										Manager.bonusAnimate(winPrize,kaijiang_balance);
									}else{
										userBalance.initUserBalance(kaijiang_balance);
									}
									Manager.rebetOrDouble();
								},1000);
							},4500);

							// 7.5秒
							setTimeout(function(){
								Manager.areaClearShine(shineAreas);
								game.getRealTimeGameInfo();
							},7500);
						}
					}


					// 如果用户未下注
					if(betCount==0){
						switch(leftTime){
                                                                                                                            case 29:
                                                                                                                            case 28:
                                                                                                                            case 27:
                                                                                                                            case 25:
                                                                                                                            case 24:
                                                                                                                            case 23:
                                                                                                                            case 22:
                                                                                                                            case 21:
                                                                                                                            case 20:
                                                                                                                            case 19:
                                                                                                                            case 18:
                                                                                                                            case 17:
                                                                                                                            case 16:
                                                                                                                            case 15:
                                                                                                                            case 14:
							case 13:
							case 12:
							case 11:
							case 10:
								if(cup.status == 4){
									cup.wait()
									setTimeout(function(){
										cup.stop(balls,function(){
											Manager.stopAudio("diceRolling");
											Manager.showNotice("开奖号码为：" + balls.join(" "));
											history.addRecord({
												'issue':currNumber,
												'nums':balls
											});
										});
									},400)
								}else{
									cup.stop(balls,function(){
										Manager.stopAudio("diceRolling");
										Manager.showNotice("开奖号码为：" + balls.join(" "));
										history.addRecord({
											'issue':currNumber,
											'nums':balls
										});
									});
								}
								

								// 2秒后骰盅归位
								setTimeout(function(){
									cup.hide(function(){
							 			Manager.hideNotice();
										Manager.areaShine(shineAreas);
									});
								},2000);

								// 
								setTimeout(function(){
									Manager.areaStopShine(shineAreas);
								},5500)

								// 9秒后停止闪动
								setTimeout(function(){
									Manager.areaClearShine(shineAreas);
									game.getRealTimeGameInfo();
								},8000);
								break;
							case 9:
							case 8:
							case 7:
								Manager.areaHight(shineAreas);
								setTimeout(function(){
									Manager.areaClearShine(shineAreas);
									game.getRealTimeGameInfo();
								},4000);
								break;
							case 6:
								Manager.areaHight(shineAreas);
								setTimeout(function(){
									Manager.areaClearShine(shineAreas);
									game.getRealTimeGameInfo();
								},2000);
								break;
							case 4:
							case 5:
							case 3:
							case 2:
							case 1:
								game.getRealTimeGameInfo();
								break;
						}
					}
				}
			}

			// 奖期取消
			if(status == 4){
				// 骰盅正在摇动
				if(cup.status==2){
					// 停止并隐藏
					cup.stop([1,2,3],function(){
						cup.hide();
					});
				}

				Manager.cancelAll();
				
				Manager.showNotice("本奖期取消，系统已撤单<br/>"+leftTime+"秒后，进入新奖期!");

				setTimeout(function(){
					game.getRealTimeGameInfo();
				},500);
				

			}
		});


		//清桌动作
		game.addEvent('cancelAll_before', function(){
			var me = this,
				chips = me.getAllChips();
			$.each(chips, function(){
				Manager.cancelChipAnimate(this);
			});
		});

		// 用户获得筹码以后
		game.addEvent('playerGet_after',function(e,chips){
			var me = this;

			if(chips.length>=120){
				chips = chips.slice(0,120);
			}
			$.each(chips,function(){
				Manager.playerGetChipAnimate(this);
			})
		})



		//提交之前
		game.addEvent('submit_before', function(){
			
			
		});
		//获得注单提交结果
		game.addEvent('success_after', function(e, data){
			cup.wait(function(){
				Manager.showNotice('买定离手，等待开骰...');
				Manager.lockTable();
				Manager.updateBet();
			});
			
		});


	})();


	//色盅
	var cup = new host.TableGame.Cup();





	//管理器
	var Manager = {
		doc:$(document),
		body:$(document.body),
		deskTop:$('#J-desktop'),
		chipsBar:$('#J-chip-group-cont'),
		mask:$('#J-table-mask-lock'),
		//可投注区右键菜单
		rightMenu:new host.TableGame.ContextMenu(),
		//桌面其他区域右键菜单
		tableMenu:new host.TableGame.ContextMenu(),
		// notice:$('#J-panel-notice'),
		notice:$("#J-panel-notice"),
		resultNotice:$('#J-panel-result'),
		playMethod:$('#J-panel-notice2'),
		clockNumbers:$('#J-clock-number .num'),
		sand:$(".table-game-sand"),
		init:function(){
			var me = this;
			me.timer_clock = null;
			me.initEvent();
			me.updateBet();
		},
		initEvent:function(){
			var me = this,
				deskDom = $('#J-desktop'),
				tip = new bomao.Tip({cls:'j-ui-tip-t j-ui-tip-play-help'});
				moneyTip = new bomao.Tip({cls:'j-ui-tip-b j-ui-tip-money'});
				hotColdTips = new bomao.Tip({cls:'j-ui-tip-l j-ui-tip-hot-cold'});
			//监听桌面事件
			deskDom.on('click', '.area', function(e){
				var el = $(this),
					action = el.attr('data-action');
				if(action){
					me.action(action, el);
				}
			});

			deskDom.on('mouseover','.area',function(){
				var el = $(this),
					areaname = el.attr('data-name'),
					area,
					chips,
					id,
					money,
					intMoney,
					chipDom,
					left,
					chipsNum=0;

				if(!!!areaname){
					return;
				}

				area = game.getArea(areaname);

				chipsNum = area.getChipsNum();

				money = area.getResult()["money"];
				if(money<10){
					left = 15;
				}else if(money>=10 && money<100){
					left = 12;
				}else if(money>=100 && money<1000){
					left = 9;
				}else if(money>=1000 && money<10000){
					left = 6;
				}else if(money>=10000 && money<100000){
					left = 3;
				}else if(money>=1000000){
					left = 0;
				}
				
				chip = area.getLastChip();
				
				if(!!!chip){
					return;
				}
				
				chipDom =$('[data-id="'+chip.id+'"]');
				moneyTip.setText(money);
				moneyTip.show(left,-30,chipDom);

			}).on("mouseout",'.area',function(){
				moneyTip.hide();
			})

			deskDom.on("mouseenter",".help",function(e){
				var el=$(this);
				var helpText = el.attr("helpText");
				tip.setText(helpText);
    			tip.show(-210, 25, el);
			});

		    deskDom.on("mouseout",".help",function(e){
		    	tip.hide();
			});

			deskDom.on("mouseover",".table-hot-cold",function(e){
				var areas = game.getAreas(),
					hot_cold = [];
					hotColdNum = !!$("#hot-cold-txt").val()?$("#hot-cold-txt").val():30;
				$(".appearance-time").css("display","block");
				$.ajax({
					url:'/bets/history-count/'+game.getConfig("gameId")+'/'+hotColdNum,
					dataType:'JSON',
					success:function(data){
						for(var way in data){
							if(data.hasOwnProperty(way)){
								var areaname,time,cls;
								switch(parseInt(way)){
									case 238:
										for(var content in data[way]){
											if(data[way].hasOwnProperty(content)){
												$('[data-name="yima-'+content+'"] > .appearance-time').removeClass("hot").removeClass("cold").addClass(Manager.getClass(data[way][content]['is_hot']));
											}
										};
										break;
									case 239:
										for(var content in data[way]){
											if(data[way].hasOwnProperty(content)){
												$('[data-name="baozi-'+content+'"] > .appearance-time').removeClass("hot").removeClass("cold").addClass(Manager.getClass(data[way][content]['is_hot']));
											}
										};
										break;
									case 240:
										for(var content in data[way]){
											if(data[way].hasOwnProperty(content)){
												$('[data-name="erma-'+content+'"] > .appearance-time').removeClass("hot").removeClass("cold").addClass(Manager.getClass(data[way][content]['is_hot']));
											}
										};
										break;
									case 241:
										for(var content in data[way]){
											if(data[way].hasOwnProperty(content)){
												$('[data-name="duizi-'+content+'"] > .appearance-time').removeClass("hot").removeClass("cold").addClass(Manager.getClass(data[way][content]['is_hot']));
											}
										};
										break;
									case 242:
										for(var content in data[way]){
											if(data[way].hasOwnProperty(content)){
												$('[data-name="hezhi-'+content+'"] > .appearance-time').removeClass("hot").removeClass("cold").addClass(Manager.getClass(data[way][content]['is_hot']));
											}
										};
										break;
									case 243:
										for(var content in data[way]){
											switch(parseInt(content)){
												case 0:
													$('[data-name="small"] > .appearance-time').removeClass("hot").removeClass("cold").addClass(Manager.getClass(data[way][content]['is_hot']));
													break;
												case 1:
													$('[data-name="big"] > .appearance-time').removeClass("hot").removeClass("cold").addClass(Manager.getClass(data[way][content]['is_hot']));
													break;
												case 2:
													$('[data-name="even"] > .appearance-time').removeClass("hot").removeClass("cold").addClass(Manager.getClass(data[way][content]['is_hot']));
													break;
												case 3:
													$('[data-name="odd"] > .appearance-time').removeClass("hot").removeClass("cold").addClass(Manager.getClass(data[way][content]['is_hot']));
											}
										}
										
										// area = game.getArea(area_name);
										break;
									case 244:
										$('[data-name="baozi-n"] > .appearance-time').text(data[way]['is_hot']);
										break;
								}
							}
						}
					},
					error:function(xhr, type){
						Manager.showNotice("未能获取冷热号信息，请刷新重试！")
					},
					complete:function(){
						
					}
				});
				
				
			}).on("mouseout",".table-hot-cold",function(e){
				$(".appearance-time").css("display","none")
			});




			//清桌
			$('#J-button-clearall').click(function(){
				me.cancelAll();
			});



			//添加右键菜单
			me.rightMenu.addItem({'title':'撤销', 'action':'area-cancel'});
			me.rightMenu.addItem({'title':'清空', 'action':'area-clear'});
			me.rightMenu.addItem({'title':'翻倍x2', 'action':'area-x2'});
			me.rightMenu.addItem({'title':'ALL IN', 'action':'area-allin'});
			me.deskTop.on('contextmenu', '[data-action="addchip"]', function(e){
				var el = $(this),
					areaname = el.attr('data-name'),
					area = game.getArea(areaname);
				me.rightMenu.setData({'areaname':areaname});
				me.rightMenu.show(e.clientX, e.clientY);
				e.stopPropagation();
				e.preventDefault();
			});
			me.rightMenu.addEvent('click', function(e, action, dom){
				var me = this;
				switch(action){
					//区域单步撤销
					case 'area-cancel':
						Manager.action('areacancel', me.getData());
					break;
					//区域全部撤销
					case 'area-clear':
						Manager.action('areaclear', me.getData());
					break;
					//翻倍
					case 'area-x2':
						Manager.action('areax2', me.getData());
					break;
					//all in
					case 'area-allin':
						Manager.action('areaallin', me.getData());
					break;
					default:
					break;
				}
				me.hide();
			});
			me.tableMenu.addItem({'title':'撤销操作', 'action':'desk-cancel'});
			me.tableMenu.addItem({'title':'恢复操作', 'action':'desk-recovery'});
			me.tableMenu.addItem({'title':'确认投注', 'action':'desk-submit'});
			me.deskTop.on('contextmenu', function(e){
				// me.tableMenu.show(e.clientX, e.clientY);
				e.preventDefault();
			});



			//提交
			$('#J-button-submit').click(function(){

				if(!game.getResult().money==0){
					game.submit();

				}else{
					Manager.showNotice("尚未下注！");
					setTimeout(function(){
						Manager.hideNotice();
					},1000);
				}
			});

			$("#J-button-rebet").click(function(){
				var	lastBetInfo = game.getLastBetInfo()?game.getLastBetInfo():global_last_bet_history,
					balls = lastBetInfo.balls,
					i = 0,
					j = 0,
					bets = [],
					area_name = "",
					area,
					money = 0,
					chips;

				money = game.getResult()['money'];

				if(lastBetInfo.isFinish){
					for(;i<balls.length;i++){
						chips = chipsGroup.moneyToChips(balls[i]["multiple"]*2/100);
						switch(parseInt(balls[i].wayId)){
							case 238:
								area = game.getArea("yima-"+balls[i]["ball"]);
								break;
							case 239:
								area = game.getArea("baozi-"+balls[i]["ball"]);
								break;
							case 240:
								area = game.getArea("erma-"+balls[i]["ball"]);
								break;
							case 241:
								area = game.getArea("duizi-"+balls[i]["ball"]);
								break;
							case 242:
								area = game.getArea("hezhi-"+balls[i]["ball"]);
								break;
							case 243:
								switch(parseInt(balls[i]["ball"])){
									case 0:
										area_name = "small";
										break;
									case 1:
										area_name = "big";
										break;
									case 2:
										area_name = "even";
										break;
									case 3:
										area_name = "odd";
								}
								area = game.getArea(area_name);
								break;
							case 244:
								area = game.getArea("baozi-n");
								break;
						}
						bets.push({"area":area,"chips":chips});
					}

					Manager.rebet(bets);
				}else{
					Manager.showNotice("未获得往期押注数据，不可重押！");

					setTimeout(function(){
						Manager.hideNotice();
					},1000)
				}
				
			});

			$("#J-button-double").click(function(){
				var money = game.getResult()['money'];
				if(money*2>userBalance.getUserBalance()){
					Manager.balanceNotice();
					return;
				}else{
					$.each(game.getAreas(),function(){
						var area = this;

						if(area.getResult()['money']!=0){
							var data = {'areaname':area.name};
							Manager.action_areax2(data);
						}
					});
				}
			})

			$("#hot-cold-txt").hover(function(){
				hotColdTips.setText("冷热号的统计期数<br/>点击可设置(5至200期)");
				hotColdTips.show(40,-11,$(this));
			}).mouseout(function(){
				hotColdTips.hide();
			}).focus(function(){
				$(this).attr('placeholder',"");
			}).blur(function(){
				$(this).attr('placeholder',"30");
			});

			$("#hot-cold-txt").on('input',function(){
				
				var reg = /^[0-9]*[1-9][0-9]*$/,
					hotColdNum = $(this).val();
				if(!hotColdNum.match(reg)){
					$(this).val("");
				}
				if(parseInt(hotColdNum)>200){
					$(this).val("");
				}
			}).on('change',function(){
				var hotColdNum = $(this).val();
				if(parseInt(hotColdNum)<5){
					$(this).val("");
				}
			}).on("mouseout",function(){
				var hotColdNum = $(this).val();
				if(parseInt(hotColdNum)<5){
					$(this).val("");
				}
			})
		},
		action:function(type, data){
			var me = this;
			if($.isFunction(me['action_' + type])){
				me['action_' + type](data);
			}
		},
		action_addchip:function(dom){
			var me = this,
				name = dom.attr('data-name'),
				area = game.getArea(name),
				chip = chipsGroup.getSelectedChip(),
				balance = userBalance.getUserBalance();

			if(chip.getMoney()>balance){
				me.balanceNotice();
				return;
			}

			me.addChipAnimate(chip, area);
			userBalance.setUserBalance(parseInt(0-chip.getMoney()));

		},
		action_areacancel:function(data){
			var me = this,
				name = data['areaname'],
				area = game.getArea(name),
				chip = area.cancelChip();
			if(chip){
				me.cancelChipAnimate(chip);
				game.update();
				userBalance.setUserBalance(chip.getMoney());
			}
		},
		action_areaclear:function(data){
			var me = this,
				name = data['areaname'],
				area = game.getArea(name),
				money = area.getResult()["money"];
				chips = area.clearAll();

			$.each(chips, function(){
				me.cancelChipAnimate(this);
			});
			game.update();
			userBalance.setUserBalance(money);
		},
		action_areax2:function(data){
			var me = this,
				name = data['areaname'],
				area = game.getArea(name),
				chips = area.getChipsCase(),
				balance = userBalance.getUserBalance(),
				money = area.getResult()["money"];

			if(Number(money)*2 > balance){
				me.balanceNotice();
				return;
			}

			userBalance.setUserBalance(0-Number(money));
			$.each(chips, function(){
				me.addChipAnimate(this, area);
			});
		},
		action_areaallin:function(data){
			var me = this,
				name = data['areaname'],
				area = game.getArea(name),
				minChip = chipsGroup.getMinChip(),
				balance = userBalance.getUserBalance(),
				allchips = chipsGroup.moneyToChips(balance),
				i = 0,
				len = 0;

			if(balance < minChip.getMoney()){
				me.balanceNotice();
				return;
			}


			userBalance.setUserBalance(0-balance);

			$.each(allchips, function(){
				for(i = 0; i < this['num']; i++){
					me.addChipAnimate(chipsGroup.getChip(this['money']), area);	
				}
			});

		},
		rebet:function(bets){
			var me = this,
				area,
				chip,
				balance = userBalance.getUserBalance(),
				money = 0,
				area,
				chips;

			for(var i = 0; i < bets.length; i ++){
				area = bets[i].area;
				chips = bets[i].chips;
				for(var j = 0; j < chips.length; j ++){
					money += chips[j].money*chips[j].num;
				}
			}

			if(money > global_balance){
				me.balanceNotice();
				return;
			}

			for(var i = 0; i < bets.length; i ++){
				area = bets[i].area;
				chips = bets[i].chips;
				$.each(chips, function(){
					var cp = this;
					c = chipsGroup.getChip(cp.money);
					for(var j=0;j<cp.num;j++){
						me.addChipAnimate(c, area);
					}
				});
				
			}
		
			userBalance.setUserBalance(0 - money);

		},

		resetChips:function(bets){
			var me = this,
				area,
				chip,
				balance = userBalance.getUserBalance(),
				money = 0,
				area,
				chips;

			for(var i = 0; i < bets.length; i ++){
				area = bets[i].area;
				chips = bets[i].chips;
				$.each(chips, function(){
					var cp = this;
					c = chipsGroup.getChip(cp.money);
					for(var j=0;j<cp.num;j++){
						me.addChipAnimate(c, area);
					}
				});
				
			}
		},

		// 恢复筹码
		restoreChips:function(lastBetInfo){
			var me = this,
				balls = lastBetInfo.balls,
				bets = [],
				i = 0;
			// 还原筹码
			for(;i<balls.length;i++){
				
				chips = chipsGroup.moneyToChips(balls[i]["multiple"]*2/100);
				switch(parseInt(balls[i].wayId)){
					case 238:
						area = game.getArea("yima-"+balls[i]["ball"]);
						break;
					case 239:
						area = game.getArea("baozi-"+balls[i]["ball"]);
						break;
					case 240:
						area = game.getArea("erma-"+balls[i]["ball"]);
						break;
					case 241:
						area = game.getArea("duizi-"+balls[i]["ball"]);
						break;
					case 242:
						area = game.getArea("hezhi-"+balls[i]["ball"]);
						break;
					case 243:
						switch(parseInt(balls[i]["ball"])){
							case 0:
								area_name = "small";
								break;
							case 1:
								area_name = "big";
								break;
							case 2:
								area_name = "even";
								break;
							case 3:
								area_name = "odd";
						}
						area = game.getArea(area_name);
						break;
					case 244:
						area = game.getArea("baozi-n");

						break;
				}
				bets.push({"area":area,"chips":chips});
			}

			me.resetChips(bets);
		},

		//拷贝一个筹码
		copyChip:function(money){
			var me = this,
				dom = $('<i data-money="'+ money +'" class="chip move-chip chip-'+ money +'" ></i>');
			return dom;
		},
		//生成一个投注筹码
		makeChipDom:function(chip, isHtml){
			var me = this,
				html = '<i id="J-chip-'+ chip.getId() +'" data-id="'+ chip.getId() +'" data-money="'+ chip.getMoney() +'" class="chip move-chip chip-'+ chip.getMoney() +'" ></i>';
			
			if(isHtml){
				return html;
			}

			return $(html);
		},
		//清桌
		cancelAll:function(){
			var me = this;
			game.cancelAll();
		},

		playerGet:function(){
			var me = this;
			game.playerGet();
		},
		bankerAddChipAnimate:function(topi,chip,area){
			var me = this,
				sourceDom = $(".mm"),
				sourceOffset = sourceDom.offset(),
				targetDom = $('#J-desktop').find('[data-name="'+ area.getName() +'"]'),
				targetOffset = targetDom.offset(),
				// moveChipDom = me.copyChip(chip.getMoney());
				newChip = new host.TableGame.Chip({money:chip.getMoney()}),
				moveChipDom = me.makeChipDom(newChip),
				chipsNum = area.getChipsNum(),
				soruceTop = 0,
				targetTop = 0;

			// 所有的chip加到内存中
			area.compensateChip(newChip);

			// 前端界面上的chip只加到120个
			if(chipsNum<120){

				soruceTop=(topi- 1) * -3;
				targetTop=(chipsNum - 1) * -3;
				moveChipDom.appendTo(me.body);
				moveChipDom.css({
					left:sourceDom.width()/2 - moveChipDom.width()/2,
					top:sourceDom.height()/2 - moveChipDom.height()/2 + soruceTop
				});
				
				moveChipDom.animate({
					left:targetOffset.left + targetDom.width()/2 - moveChipDom.width()/2 + 2,
					top:(targetOffset.top + targetDom.height()/2 - moveChipDom.height()/2 + 1)+targetTop
				}, 1000,function(){
					// me.playAudio("chipToPlayer");
					// moveChipDom.remove();
				});
			}


		},
		bankerGetChipAnimate:function(chip,callback){
			var me = this,
				id = chip.getId(),
				money = chip.getMoney(),
				sourceDom = $('#J-chip-' + id),
				targetDom = $('.mm'),
				sourceOffset = sourceDom.offset(),
				targetOffset = targetDom.offset(),
				moveDom = me.makeChipDom(chip);

			sourceDom.remove();
			moveDom.css({
				left:sourceOffset.left,
				top:sourceOffset.top
			});
			moveDom.appendTo(me.body);
			moveDom.animate({
				left:targetOffset.left,
				top:targetOffset.top
			},1000, function(){
				// me.playAudio("chipToPlayer");
				moveDom.remove();
				if(callback){
					callback.call(me);
				}
			});

		},
		playerGetChipAnimate:function(chip,callback){
			var me = this,
				id = chip.getId(),
				money = chip.getMoney(),
				sourceDom = $('#J-chip-' + id),
				targetDom = Manager.chipsBar.find('[data-money="'+ money +'"]'),
				sourceOffset = sourceDom.offset(),
				targetOffset = targetDom.offset(),
				moveDom = me.makeChipDom(chip);

			sourceDom.remove();
			moveDom.css({
				left:sourceOffset.left,
				top:sourceOffset.top
			});

			moveDom.appendTo(me.body);
			moveDom.animate({
				left:targetOffset.left,
				top:targetOffset.top
			},1000, function(){
				me.playAudio("chipToPlayer");
				me.rebetOrDouble();
				moveDom.remove();
				if(callback){
					callback.call(me);
				}
			});

		},
		addChipAnimate:function(chip, area){

			var me = this,
				sourceDom = $('#J-chip-group-cont').find('[data-money="'+ chip.getMoney() +'"]'),
				sourceOffset = sourceDom.offset(),
				targetDom = $('#J-desktop').find('[data-name="'+ area.getName() +'"]'),
				targetOffset = targetDom.offset(),
				moveChipDom = me.copyChip(chip.getMoney()),
				newChip = new host.TableGame.Chip({money:chip.getMoney()});

			moveChipDom.appendTo(me.body)

			moveChipDom.css({
				left:sourceOffset.left,
				top:sourceOffset.top
			});
			moveChipDom.animate({
				left:targetOffset.left + targetDom.width()/2 - moveChipDom.width()/2 + 2,
				top:targetOffset.top + targetDom.height()/2 - moveChipDom.height()/2 + 1
			}, function(){
				me.playAudio("chipToTable");
				area.addChip(newChip);
				me.rebetOrDouble();
				moveChipDom.remove();
			});
		},
		cancelChipAnimate:function(chip, callback){
			var me = this,
				id = chip.getId();
			var	money = chip.getMoney(),
				sourceDom = $('#J-chip-' + id),
				targetDom = Manager.chipsBar.find('[data-money="'+ money +'"]'),
				sourceOffset = sourceDom.offset();
			var	targetOffset = targetDom.offset(),
				moveDom = me.makeChipDom(chip);

			sourceDom.remove();
			moveDom.css({
				left:sourceOffset.left,
				top:sourceOffset.top
			});

			moveDom.appendTo(me.body);
			moveDom.animate({
				left:targetOffset.left,
				top:targetOffset.top
			}, function(){
				me.playAudio("chipToPlayer");
				me.rebetOrDouble();
				moveDom.remove();
				if(callback){
					callback.call(me);
				}
			});

			

		},
		//锁定桌面禁止操作
		lockTable:function(){
			var me = this;
			me.mask.show();
		},
		unlockTable:function(){
			var me = this;
			me.mask.hide();
		},
		showNotice:function(msg){
			var me = this;
			me.resultNotice.html(msg).removeClass("table-notice2").addClass("table-notice1");
			me.resultNotice.show();
		},
		hideNotice:function(){
			var me = this;
			me.resultNotice.hide();
		},
		showResultNotice:function(msg){
			var me = this;
			me.resultNotice.html(msg)
			me.resultNotice.show();
		},
		hideResultNotice:function(){
			var me = this;
			me.resultNotice.hide();
		},
		hideResult:function(){

		},
		clock:function(time){
			var me = this,
				// h = Math.floor(time/3600),
				// m = Math.floor(time%3600/60),
				m = (time-time%60)/60,
				s = time%60;
			// h = h < 10 ? '0' + h : h;
			m = m < 10 ? '0' + m : m;
			s = s < 10 ? '0' + s : s;

			if(time==10){
				me.playAudio("timeoutTips");
			}

			me.clockNumbers[0].innerHTML = m;
			me.clockNumbers[1].innerHTML = s;
		},
		sandClock:function(time,totalTime){
			var me = this,
				totalTime = 1*45,
				pastTime = totalTime-time,
				pastPer = pastTime/totalTime*100;
			me.sand.css("height",pastPer+"%");
		},

		// 从后台获取剩余时间，并以此作为总时间进行倒计时
		clockTimeStart:function(time){
			var me = this,
				now_start = new Date(),
				num,
				now;

			clearInterval(me.timer_clock);
			me.timer_clock = setInterval(function(){
				now = new Date();
				num = time - Math.floor((now - now_start)/1000);

				if(num < 0){
					clearInterval(me.timer_clock);
					game.getRealTimeGameInfo();
					me.sand.css("height",0);
					cup.wait(function(){
						Manager.showNotice("即将开骰，祝您好运!");
						cup.play();
						Manager.playAudio("diceRolling");
						Manager.lockTable();
					})
				}else{
					me.clock(num);
					me.sandClock(num);
				}
			}, 1000);
		},

		balanceNotice:function(){
			$("#J-money-user-balance").animate({fontSize:"20px"},100);
			$("#J-money-user-balance").animate({fontSize:"14px"},100);
			$("#J-money-user-balance").animate({fontSize:"20px"},100);
			$("#J-money-user-balance").animate({fontSize:"14px"},100);
			$("#J-money-user-balance").animate({fontSize:"20px"},100);
			$("#J-money-user-balance").animate({fontSize:"14px"},100);
		},
		// 区域闪烁
		// 每个循环耗时1秒
		areaShine:function(areas){
			var me = this;
			me.lightTimer = setInterval(function(){
                $.each(areas, function(){
 					$('[data-name='+this["name_en"]+']').css("backgroundColor","rgba(255, 218, 64, 0.3)");
                });

                me.darkTimer = setTimeout(function(){
                	$.each(areas, function(){
                		$('[data-name='+this["name_en"]+']').css("backgroundColor","transparent");
                	});
                },500)

            }, 1000);
		},
		areaClearShine:function(areas){
			$.each(areas, function(){
                $('[data-name='+this["name_en"]+']').css("backgroundColor","transparent").hover(function(e) {
  					$(this).css("background-color",e.type === "mouseenter"?"rgba(255, 218, 64, 0.3)":"transparent");
				});
            });
		},
		areaHight:function(areas){
			$.each(areas, function(){
                $('[data-name='+this["name_en"]+']').css("backgroundColor","rgba(255, 218, 64, 0.3)");
            });
		},
		areaStopShine:function(areas){
			var me = this;
			clearTimeout(me.lightTimer);
			clearTimeout(me.darkTimer);
		},
		// 筹码流向庄家，共耗时1秒
		bankerWin:function(areas){
			var area,me = this;
			// 庄家得
			for(var i = 0;i < areas.length;i ++){
				area = game.getArea(areas[i]["name_en"]);
				$.each(area.getChipsCase(),function(){
					me.bankerGetChipAnimate(this,function(){
						
					});
				})
				area.clearAll();
			}
		},
		// 筹码流向玩家,共耗时1+1=2秒
		playerWin:function(areas){
			var me = this,
				area1,
				chipsNum,
				odds;


			// 庄家赔
			for(var i = 0;i < areas.length;i ++){
				var topi = 0;

				area1 = game.getArea(areas[i]["name_en"]);
				prize_odds = area1.getOdds();

				$.each(area1.getChipsCase(),function(z){
					for(var j = 1;j < prize_odds+1;j++){

						topi=z*j;
						me.bankerAddChipAnimate(topi,this,area1);
					}
				});	

			};

			// 玩家得
			setTimeout(function(){
				me.playerGet();
			},1000)
		},
		formatMoneyCN:function(num){
			var num = Number(num),
            re = /(-?\d+)(\d{3})/;
            num = '' + num;
	        while (re.test(num)) {
	            num = num.replace(re, "$1,$2")
	        }
	        return num + "元";
		},
		rebetOrDouble:function(){
			var money = game.getResult()['money'];

			if(money == 0){
				$('#J-button-rebet').css('display','inline-block');
				$('#J-button-double').css('display','none');
			}else{
				$('#J-button-rebet').css('display','none');
				$('#J-button-double').css('display','inline-block');

			}
		},
		bonusAnimate:function(winPrize,balanceAfter){

			$('.table-bar > .win-bonus-container > .win-bonus-txt').text(winPrize);
		 	$('.table-bar > .win-bonus-container').css({display:'block'},{top:'-75px'}).animate({
		 		'top':'-25px'
		 	},2000,function(){
		 		$(this).css("display",'none');
		 		userBalance.initUserBalance(balanceAfter);
		 	});
		 	Manager.hideNotice();
		},
		updateBet:function(){
			$.ajax({
				url:game.getConfig('pollBetInfoUrl')+"/"+game.getConfig('gameId'),
				dataType:'JSON',
				success:function(data){
					if(Number(data['isSuccess']) == 1){
						for(var i=0;i<data['data'].length;i++){

							if(data['data'][i]['type']=='bets'){
								betHistory.updateBet(data['data'][i]['data']);
							}
						}
						
					}else{
						if(!!console && console.log){
							console.log('后台数据错误:' + me.getConfig('pollBetInfoUrl'));
						}
						//alert('更新数据失败，请刷页面重试 ' + data['msg']);
					}
				},
				error:function(xhr, type){
					//alert('更新数据失败，请刷页面重试 ' + type);
				},
				complete:function(){
				}
			});
		},
		getClass:function(num){
			var cls;
			switch(num){
				case 0:
					cls = 'cold';
					break;
				case 1:
					cls = "warm"
					break;
				case 2:
					cls = "hot";
					break;
			}
			return cls;
		},
		playAudio:function(name){
			for(var i=0;i<audioConfig.length;i++){
				if(audioConfig[i].name == name){
					$("#dice-tips-audio").attr("src",audioConfig[i].url);
					document.getElementById('dice-tips-audio').play();
				}
			}
		},
		stopAudio:function(name){
			for(var i=0;i<audioConfig.length;i++){
				if(audioConfig[i].name == name){
					if($("#dice-tips-audio").attr("src") == audioConfig[i].url){
						document.getElementById('dice-tips-audio').pause();
					}
				}
			}
			
		}

	};

	var betHistory = new bomao.TableGame.BetHistory();
	
	var historyRecords = game.getConfig('historyNumbers').reverse(),
		records = [];

	for(var t = 0; t < historyRecords.length; t++){
			var nums = historyRecords[t]['code'].toString().split("");
			records.push({issue:historyRecords[t]["number"],nums:nums});
	};
	//历史记录
	var history = new bomao.TableGame.History({
	    records: records
	});

	(function(){
		var addHistoryRecordAfter = function(){
			
		}

		history.addEvent("addHistoryRecord_after",addHistoryRecordAfter);
	})()

	// 桌面设定
	var max_prize = game.getConfig('max_prize'),
		cycle = game.getConfig("cycle");
		table_num = 1,
		table_name = "娱乐场",
		background_image ="dice/low-bg.png";


	switch(cycle){
		case 45:
			table_num = 1;
			break;
		case 60:
			table_num = 2;
			break;
		case 75:
			table_num = 3;
			break;
	}

	switch(max_prize){
		case 5:
			background_image = "/assets/images/game/table/dice/low-bg.jpg";
			table_name = "娱乐场";
			break;
		case 10:
			background_image = "/assets/images/game/table/dice/normal-bg.jpg";
			table_name = "普通场";
			break;
		case 20:
			table_name = "高级场";
			background_image = "/assets/images/game/table/dice/high-bg.jpg";
			break;
	}

	$("#max-prize").text(max_prize);
	$("#table-num").text(table_num);
	$("#table-name").text(table_name);
	$(".table-layout").css("backgroundImage","url("+background_image+")");

    




	//筹码组实例
	//初始化时根据余额设定状态
	var chipsGroup = new host.TableGame.ChipsGroup();



	(function(){

		var chipsCfg = [1, 2, 5, 10, 50, 100 ,1000];
		switch(max_prize){
			case 5:
				chipsCfg = [1, 2, 5, 10, 50, 100 ,1000];
				break;
			case 10:
				chipsCfg = [100, 200, 300, 500, 600, 800, 1000];
				break;
			case 20:
				chipsCfg = [1000, 2000, 3000, 5000, 6000, 8000, 10000];
				break;
		}
		
		var	html = [],
			groupDom = $('#J-chip-group-cont'),
			CLS = 'active';


		$.each(chipsCfg, function(){
			var value = Number(this),
				chip = new host.TableGame.Chip({money:value}),
				chipDom = Manager.makeChipDom(chip,true);
				html.push(chipDom);

			chip.addEvent("setStatus_after",function(e,isAvaliable){
				var jChipDom = $("#J-chip-" + this.getId());
				if(isAvaliable){
					jChipDom.unbind();
					jChipDom.bind('mousedown',function(){
						chipsGroup.select(value);
					});
				}else{
					jChipDom.unbind();
					jChipDom.bind('mousedown',function(){
						Manager.balanceNotice();
					});
					jChipDom.removeClass(CLS).animate({
						top:0
					}, 150);
				}
			})
			chipsGroup.addChip(chip);
		});
		groupDom.html(html.join(''));


		chipsGroup.addEvent('change_after', function(e, chip){
			groupDom.find('.chip').removeClass(CLS).animate({
				top:0
			}, 150);
			groupDom.find('[data-money="'+ chip.getMoney() +'"]').addClass(CLS).animate({
				top:-30
			}, 150);
		});
		chipsGroup.select(chipsCfg[0]);

	})();


	// 余额实例
	var userBalance = new host.TableGame.UserBalance();
	(function(){
		userBalance.addEvent("setUserBalance_after",function(e,balance){
			$("#J-money-user-balance").text(Manager.formatMoneyCN(balance));
			$(".J-text-money-value").text(host.util.formatMoney(balance));
			chipsGroup.setChipsStatus(balance);

		});
	})();


	userBalance.setUserBalance(parseFloat(global_balance));
	


	Manager.init();




























/**
	//辅助游戏编辑
	(function(){
		var panel = $('#J-desktop'),
			doc = $(document),
			isDraging = false,
			oX,
			oY,
			iX,
			iY;

		panel.on('mousedown', '.area', function(e){
			var el = $(this);
			if(e.button != 0){
				return false;
			}
			isDraging = true;
			oX = e.clientX - this.offsetLeft;
			oY = e.clientY - this.offsetTop;
			this.setCapture && this.setCapture();
			doc.on('mousemove.drag', function(e){
				if(!isDraging){
					return false;
				}
				iX = e.clientX - oX;
				iY = e.clientY - oY;
				el.css({
					left:iX,
					top:iY
				});
			});
			doc.on('mouseup.drag', function(){
				isDraging = false;
				doc.off('mousemove.drag');
			});
		});

		panel.on('click', '.area', function(){
			var el  = $(this),CLS = 'selected';
			panel.find('.area').removeClass(CLS);
			el.addClass(CLS);
		});

		doc.on('keyup', function(e){
			var el = panel.find('.selected');
			//console.log(e.keyCode);
			if(el.size() < 1){
				return;
			}
			switch(e.keyCode){
				//上
				case 38:
					el.css({
						top:parseInt(el.css('top')) - 1
					});
				break;
				//下
				case 40:
					el.css({
						top:parseInt(el.css('top')) + 1
					});
				break;
				//左
				case 37:
					el.css({
						left:parseInt(el.css('left')) - 1
					});
				break;
				//右
				case 39:
					el.css({
						left:parseInt(el.css('left')) + 1
					});
				break;
				//+ width
				case 187:
					el.css({
						width:el.width() + 1
					});
				break;
				//- width
				case 189:
					el.css({
						width:el.width() - 1
					});
				break;
				//+ height
				case 221:
					el.css({
						height:el.height() + 1
					});
				break;
				//- height
				case 219:
					el.css({
						height:el.height() - 1
					});
				break;
				default:
				break;
			}

			var left = parseInt(el.css('left')),
				top = parseInt(el.css('top')),
				width = el.width(),
				height = el.height();

			console.log("{id:2, name_en:'erma-56', name_cn:'二码56', bet_max:10000.00, prize_odds:1, width: "+width+", height: "+height+", left: "+left+",top: "+top+",oddsPos:[23,41]}");

		});


	})();

**/	

	//更新界面显示内容
	var checkUserTimeout = function(data){
		if(data['type'] == 'loginTimeout'){
			// var msgwd = Games.getCurrentGameMessage();
			// msgwd.hide();
			// msgwd.show({
			// 	mask:true,
			// 	confirmIsShow:true,
			// 	confirmText:'关 闭',
			// 	confirmFun:function(){
			// 		location.href = "/";
			// 	},
			// 	closeFun:function(){
			// 		location.href = "/";
			// 	},
			// 	content:'<div class="pop-waring"><i class="ico-waring"></i><h4 class="pop-text">登录超时，请重新登录平台！</h4></div>'
			// });
			return false;
		}
		return true;
	};

	// var sideTip = bomao.SideTip.getInstance();
	
	//读取账户金额开始 ========================================
	var accountCache = {'recharge':{}, 'withdrawals':{}};
	(function(){
		var balanceDoms = $('#J-balls-statistics-balance, #J-user-amount-num, #J-top-user-balance'),balanceCache = 0;
		var updateBalance = function(balance){
			if(balance != balanceCache){
				balanceDoms.text(bomao.util.formatMoney(balance));
				balanceCache = balance;
			}
		};
        // var updateRecharge = function(data){
        //     var has = accountCache['recharge'],
        //         lastId = '' + $.cookie('user-recharge-id'),
        //         id = '' + data['id'],
        //         num = Number(data['amount']);

        //     if(has[id]){
        //         return;
        //     }
        //     if(!!lastId && lastId == id){
        //         return;
        //     }
        //     $.cookie('user-recharge-id', id);
        //     sideTip.setTitle('充值到账提醒');
        //     sideTip.setContent('<div class="row">您有一笔金额为 <span class="num">' + bomao.util.formatMoney(num) + '</span> 元的充值已到账。</div>');
        //     sideTip.show();
        //     has[id] = data;
        // };
        // var updateWithdrawals = function(data){
        //     var has = accountCache['withdrawals'],
        //         lastId = '' + $.cookie('user-withdrawals-id'),
        //         id = '' + data['id'],
        //         num = Number(data['amount']);
        //     if(has[id]){
        //         return;
        //     }
        //     if(!!lastId && lastId == id){
        //         return;
        //     }
        //     $.cookie('user-withdrawals-id', id);
        //     sideTip.setTitle('提现转账提醒');
        //     sideTip.setContent('<div class="row">您有一笔金额为 <span class="num">' + bomao.util.formatMoney(num) + '</span> 元的提现已处理完毕，请注意查收。</div>');
        //     sideTip.show();
        //     has[id] = data;
        // };
		//消息监听部分
		var MSG = new bomao.Alive({
				url: game.getConfig('pollUserAccountUrl'),
				cache:false,
				dataType:'json',
				method:'get',
				looptime:10 * 1000
		});
		MSG.getParams = function(){
			return {'params':[{'type':'account'}]};
		};
		MSG.addEvent('afterSuccess', function(e, data){
			var me = this,cfg = me.defConfig;
				if(!checkUserTimeout(data)){
					return;
				}
				//updateBalance(2000);
				if(Number(data['isSuccess']) == 1){
					var results = data['data'],list,it;
					$.each(results, function(){
						switch(this['type']){
							case 'account':
								list = this['data'];
								$.each(list, function(){
									it = this;
									switch(it['type']){
										//更新余额
										case 'balance':
											//it['data'] = 34745.12;
											updateBalance(Number(it['data']));
										break;
										//充值到账
										case 'recharge':
											// updateRecharge(it['data']);
										break;
										//提现消息
										case 'withdrawals':
											// updateWithdrawals(it['data']);
										break;
										default:
										break;
									}
								});
							break;
							default:
							break;
						}
					});
				}
		});
		/**
		if(userRole != 'agent'){
			MSG.start();
		}
		**/
		MSG.start();
	})();
	//读取账户金额结束 ========================================


})(bomao, jQuery);







