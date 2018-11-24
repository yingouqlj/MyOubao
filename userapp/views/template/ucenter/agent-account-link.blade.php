@extends('l.home')

@section('title')
   链接开户
@parent
@stop

@section('scripts')
@parent
    {{ script('jscroll')}}
    {{ script('datePicker')}}
    {{ script('tab')}}
    {{ script('sliderBar')}}
    {{ script('U-groupgame')}}
@stop

@section('main')
<div class="nav-bg nav-bg-tab">
    <div class="title-normal">新增用户</div>
    <ul class="tab-title clearfix">
        <li class="current"><a href="agent-account-link.php"><span>链接开户</span></a></li>
        <li><a href="agent-account-accurate.php"><span>精准开户</span></a></li>
    </ul>
</div>
<input type="hidden" value="/////" id="J-loadGroupData-url" />
<form action="?" method="post" id="J-form">
    <input type="hidden" id="J-input-userType" value="1" />
    <input type="hidden" id="J-input-group-type" value="1" />
    <input type="hidden" id="J-input-groupid" value="" />
    <input type="hidden" id="J-input-custom-type" value="" />
    <input type="hidden" id="J-input-custom-id" value="" />

<div class="content" id="J-panel-cont">
    <div style="border:1px solid #E1E2E6">
        <table width="100%" class="table-field">
            <tbody>
                <tr>
                    <td align="right" class="w-2">用户类型：</td>
                    <td>
                        <div class="function-select-title" id="J-user-type-switch-panel">
                            <a data-userTypeId="1" class="current" href="#">玩家</a>
                            <a data-userTypeId="2" href="#">代理</a>
                        </div>

                    </td>
                </tr>
                <tr>
                    <td align="right">链接有效期：</td>
                    <td>
                        <select id="J-select-link-valid" style="display:none;">
                            <option selected="selected" value="">请选择</option>
                            <option value="1">7天</option>
                            <option value="2">30天</option>
                            <option value="3">90天</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right">推广渠道：</td>
                    <td>

                        <select id="J-select-channel-name" style="display:none;">
                            <option selected="selected" value="">请选择</option>
                            <option value="2">论坛</option>
                            <option value="3">qq群</option>
                            <option value="0">自定义</option>
                        </select>
                        &nbsp;&nbsp;
                        <input type="text" class="input w-3" value="" id="J-input-custom" style="display:none;" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <ul class="tab-title tab-title-small clearfix">
        <li class="current"><a href="javascript:;"><span>选择奖金组套餐</span></a></li>
        <li><a href="javascript:;"><span>自定义奖金组</span></a></li>
    </ul>


    <ul class="tab-panels">
        <li class="tab-panel-li">
            <div class="bonus-group">

                <script type="text/template" id="J-template-group">
                    <li>
                        <div class="bonus"><strong class="data-bonus"><#=bonus#></strong>当前奖金</div>
                        <div class="rebate"><strong class="data-feedback"><#=feedback#>%</strong>预计平均返点率</div>
                        <a href="#">查看奖金组详情</a>
                        <input type="button" class="btn button-selectGroup" value="选 择" data-groupid="<#=id#>" />
                    </li>
                </script>
                <ul class="clearfix" id="J-panel-group">


                </ul>
            </div>
        </li>


        <li class="tab-panel-li">



            <div class="bonusgroup-game-type">
                <script type="text/template" id="J-template-gametype">
                    <ul class="clearfix gametype-row">
                        <#=listloop#>
                    </ul>
                </script>
                <script type="text/template" id="J-template-gamesitem">
                    <li>
                        <a href="#" class="item-game" data-id="<#=id#>" data-itemType="game"><span class="name"><#=name#></span><span class="group"><#=bonus#></span></a>
                    </li>
                </script>
                <div id="J-group-gametype-panel">

                </div>

            </div>
            <input type="hidden" id="J-input-bonusgroup-gameid" value="" />
            <div class="bonusgroup-title">
                <table width="100%">
                    <tr>
                        <td class="last">
                            <div class="bonus-setup">
                                <div class="bonus-setup-title">
                                    <strong>设置奖金</strong>
                                    <span class="tip">奖金组一旦上调后则无法降低，请谨慎操作。</span>
                                </div>
                                <div class="bonus-setup-content">
                                    <div class="slider-range" onselectstart="return false;">

                                        <div class="slider-range-sub" id="J-slider-minDom"></div>
                                        <div class="slider-range-add" id="J-slider-maxDom"></div>

                                        <div class="slider-range-wrapper" id="J-slider-cont">
                                            <div class="slider-range-inner" style="width:0;" id="J-slider-innerbg"></div>
                                            <div class="slider-range-btn" style="left:0;" id="J-slider-handle"></div>
                                        </div>
                                        <div class="slider-range-scale">
                                            <span class="small-number" id="J-slider-num-min">1800</span>
                                            <span class="big-number" id="J-slider-num-max">1960</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>

                        <td><input type="text" class="input w-1" style="text-align:center;" value="1955" id="J-input-custom-bonus-value" />
                            <br><span class="tip">&nbsp;&nbsp;&nbsp;<a href="#">查看详情</a>&nbsp;&nbsp;&nbsp;</span>
                        </td>
                        <td class="last"><strong id="J-custom-feedback-value">4.5%</strong><br><span class="tip">预计平均返点率</span></td>
                    </tr>
                </table>
            </div>
        </li>
    </ul>

    <div class="row-lastsubmit">
        <input type="submit" class="btn" value="生成链接" id="J-button-submit" />
    </div>

</div>
</form>
@stop

@section('end')
<script>
(function(){


    //下拉框组件
    var selectDays = new bomao.Select({realDom:'#J-select-link-valid',cls:'w-2'});
    var selectChannel = new bomao.Select({realDom:'#J-select-channel-name',cls:'w-3'});
    selectChannel.addEvent('change', function(e, value, text){
        if(value == '0'){
            $('#J-input-custom').show();
        }else{
            $('#J-input-custom').hide();
        }
    });


    //表单提交
    $('#J-button-submit').click(function(){
        var userType = $.trim($('#J-input-userType').val()),
            validDays = $.trim(selectDays.getValue()),
            spreadChannel = $.trim(selectChannel.getValue()),
            spreadChannelValue = $.trim($('#J-input-custom').val()),
            //套餐还是自定义
            groupType = $.trim($('#J-input-group-type').val());


            if(validDays == ''){
                alert('请选择链接有效期');
                return false;
            }
            if(spreadChannel == ''){
                alert('请选择推广渠道');
                return false;
            }
            if(spreadChannel == '0' && spreadChannelValue == ''){
                alert('自定义推广渠道，请填写渠道名称');
                return false;
            }
            //套餐
            if(groupType == '1'){
                if($.trim($('#J-input-groupid').val()) == ''){
                    alert('请选择一个奖金组套餐');
                    return false;
                }
            }else{
                if($.trim($('#J-input-custom-type').val()) == ''){
                    alert('请选择一个游戏或者彩种进行设置');
                    return false;
                }
            }
            return true;
    });

})();
</script>
@stop