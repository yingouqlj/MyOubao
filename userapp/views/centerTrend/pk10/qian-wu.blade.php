@extends('l.thome')

@section('title')
    {{ $sLotteryName . '-' . $sTrendTypeName }}-走势图
@parent
@stop


@section ('container')
    @include('centerTrend.ssc.ssc-ways')

    <!-- Star 五星 -->
    <div class="chart-section chart-container-main" id="J-chart-area">
        <table class="chart-table" id="J-chart-table">
            <thead class="thead">
                <tr class="title-text">
                    <th rowspan="2" colspan="3" class="border-bottom border-right">期号</th>
                    <th rowspan="2" colspan="3" class="border-right">开奖号码</th>
                    <th colspan="12" class="border-right border-bottom">冠军</th>
                    <th colspan="12" class="border-right border-bottom">亚军</th>
                    <th colspan="12" class="border-right border-bottom">第三名</th>
                    <th colspan="12" class="border-right border-bottom">第四名</th>
                    <th colspan="12" class="border-right border-bottom">第五名</th>
                    <th colspan="5" rowspan="2" class="border-right border-bottom">大小形态</th>
                    <th colspan="6" rowspan="2" class="border-right border-bottom">单双形态</th>
                    <th colspan="6" rowspan="2" class="border-right border-bottom">升平降形态</th>
                </tr>
                <tr class="title-number">

                    <th class="ball-none border-bottom-header td-bg"></th>

                    <th class="border-bottom-header td-bg"><i class="ball-noraml">1</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">2</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">3</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">4</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">5</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">6</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">7</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">8</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">9</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">10</i></th>
                    <th class="ball-none border-bottom-header border-right td-bg"></th>
                    <th class="ball-none border-bottom-header td-bg"></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">1</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">2</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">3</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">4</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">5</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">6</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">7</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">8</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">9</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">10</i></th>
                    <th class="ball-none border-bottom-header border-right td-bg"></th>
                    <th class="ball-none border-bottom-header td-bg"></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">1</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">2</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">3</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">4</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">5</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">6</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">7</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">8</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">9</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">10</i></th>
                    <th class="ball-none border-bottom-header border-right td-bg"></th>
                    <th class="ball-none border-bottom-header td-bg"></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">1</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">2</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">3</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">4</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">5</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">6</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">7</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">8</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">9</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">10</i></th>
                    <th class="ball-none border-bottom-header border-right td-bg"></th>
                    <th class="ball-none border-bottom-header td-bg"></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">1</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">2</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">3</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">4</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">5</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">6</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">7</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">8</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">9</i></th>
                    <th class="border-bottom-header td-bg"><i class="ball-noraml">10</i></th>
                    <th class="ball-none border-bottom-header border-right td-bg"></th>
                </tr>
            </thead>
            <tbody id="J-chart-content" class="chart table-guides">
                <tr></tr>
            </tbody>

            <tbody id="J-ball-content" class="tbody">

            </tbody>

            <tbody class="tbody tbody-footer-header">
                <tr class="auxiliary-area title-number">
                    <td rowspan="2" colspan="3" class="border-right border-bottom">期号</td>
                    <td rowspan="2" colspan="3" class="border-right border-bottom" >开奖号码</td>
                    <td class="ball-none border-bottom td-bg"></td>
                    
                    <td class="border-bottom td-bg"><i class="ball-noraml">1</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">2</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">3</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">4</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">5</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">6</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">7</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">8</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">9</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">10</i></td>
                    <td class="ball-none border-right border-bottom td-bg"></td>
                    <td class="ball-none border-bottom td-bg"></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">1</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">2</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">3</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">4</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">5</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">6</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">7</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">8</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">9</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">10</i></td>
                    <td class="ball-none border-right border-bottom td-bg"></td>
                    <td class="ball-none border-bottom td-bg"></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">1</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">2</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">3</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">4</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">5</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">6</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">7</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">8</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">9</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">10</i></td>
                    <td class="ball-none border-right border-bottom td-bg"></td>
                    <td class="ball-none border-bottom td-bg"></td>
                     <td class="border-bottom td-bg"><i class="ball-noraml">1</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">2</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">3</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">4</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">5</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">6</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">7</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">8</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">9</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">10</i></td>
                    <td class="ball-none border-right border-bottom td-bg"></td>
                    <td class="ball-none border-bottom td-bg"></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">1</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">2</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">3</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">4</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">5</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">6</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">7</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">8</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">9</i></td>
                    <td class="border-bottom td-bg"><i class="ball-noraml">10</i></td>
                    <td class="ball-none border-right border-bottom td-bg"></td>

                    <td colspan="6" class="border-bottom border-right"></td>
                    <td colspan="6" class="border-bottom border-right"></td>
                    <td colspan="6" class="border-bottom border-right"></td>
                </tr>
                <tr class="auxiliary-area title-text">
                    <th colspan="12" class="border-right border-bottom">冠军</th>
                    <th colspan="12" class="border-right border-bottom">亚军</th>
                    <th colspan="12" class="border-right border-bottom">第三名</th>
                    <th colspan="12" class="border-right border-bottom">第四名</th>
                    <th colspan="12" class="border-right border-bottom">第五名</th>
                    <th colspan="6" rowspan="2" class="border-right border-bottom">大小形态</th>
                    <th colspan="6" rowspan="2" class="border-right border-bottom">单双形态</th>
                    <th colspan="6" rowspan="2" class="border-right border-bottom">升平降形态</th>
                </tr>

            </tbody>


        </table>


    </div>
    <!-- End 五星 -->
@stop

@section('end')
    @parent
   <script>
        var CHART;
        (function($){

            var sysConfig = {{ $sConfigs }};

            CHART = new bomao.GameCharts({currentGameType:'cqssc', currentGameMethod: 'Wuxing', expands:{
                getDataUrl:function(){
                    var dt1 = Date.parse(new Date($('#J-date-star').val())),
                        dt2 = Date.parse(new Date($('#J-date-end').val()));
                    dt1 = isNaN(dt1) ? '' : dt1/1000;
                    dt2 = isNaN(dt2) ? '' : dt2/1000;
                    var param = {
                        'lottery_id':sysConfig.lotteryId,
                        'num_type':sysConfig.wayId,
                        'count':30,
                        'begin_time':dt1,
                        'end_time':dt2
                    },
                    arr = [sysConfig.queryBaseUrl + '?'],
                    p;

                    for(p in param){
                        if(param.hasOwnProperty(p)){
                            arr.push(p + '=' + param[p]);
                        }
                    }
                    return arr.join('&');
                },
                reBuildData:function(data){
                    var arrMain = [],
                        newArr = [],
                        timesData = data['statistics'][0],
                        ballData = data['data'],
                        loseBar = data['omissionBarStatus'],
                        loseFlag = new Array(50);
                        tempArr = [],
                        i2 = 0,
                        i3 = 0;

                    $.each([0, 1, 2, 3, 4], function(i){
                        arrMain[i] = [];
                        $.each([0,1,2,3,4,5,6,7,8,9], function(j){
                            // [times, index]
                            arrMain[i][j] = [timesData[i*10+j], j];
                        });
                        arrMain[i].sort(function(a, b){
                            return b[0] - a[0];
                        });
                        $.each(arrMain[i], function(k){
                            //cold 1
                            //hot 3
                            //other 2
                            if(k < 3){
                                newArr[i*10+arrMain[i][k][1]] = 3;
                            }else if(k > 6){
                                newArr[i*10+arrMain[i][k][1]] = 1;
                            }else{
                                newArr[i*10+arrMain[i][k][1]] = 2;
                            }
                        });

                    });
                    $.each(ballData, function(i){
                        i2 = 0;
                        $.each(this, function(j){
                            i3 = 0;
                            if(i2 > 1 && i2 < 7){
                                $.each(this, function(){
                                    if(this[0] == 0){
                                        this[2] = newArr[(i2 - 2)*10 + i3];
                                    }
                                    //loseBar
                                    if(loseBar[(i2 - 2)*10 + i3] < 0){
                                        loseFlag[(i2 - 2)*10 + i3] = true;
                                    }
                                    if(!loseFlag[(i2 - 2)*10 + i3]){
                                        this[3] = 0;
                                    }else{
                                        this[3] = 1;
                                    }
                                    if(loseBar[(i2 - 2)*10 + i3] == i){
                                        loseFlag[(i2 - 2)*10 + i3] = true;
                                    }
                                    i3++;
                                });
                            }
                            i2++;
                        });
                    });
                    return data;
                },
                cqsscWuxingRender: function(data, currentNum) {
                    var td1, td2, td3, td4, td5, td6,
                        current,
                        me = this,
                        styleName = currentNum % me.getSeparateNum() == 0 ? ' border-bottom' : '',
                        htmlTextArr = new Array(),
                        allowCount = me.getRenderLength(),
                        parentDom = document.createElement('tr');

                    td1 = document.createElement('td');
                    td1.className = "ball-none  border-bottom " + styleName;
                    parentDom.appendChild(td1);

                    //期号号码
                    td2 = document.createElement('td');
                    td2.className = "issue-numbers  border-bottom " + styleName;
                    td2.innerHTML = data[0];
                    parentDom.appendChild(td2);

                    td3 = document.createElement('td');
                    td3.className = "ball-none border-right border-bottom " + styleName;
                    parentDom.appendChild(td3);

                    td4 = document.createElement('td');
                    td4.className = "ball-none  border-bottom " + styleName;
                    parentDom.appendChild(td4);

                    //期号号码
                    td5 = document.createElement('td');
                    td5.className = styleName + ' border-bottom ';
                    td5.innerHTML = '<span class="lottery-numbers">' + data[1] + '</span>';
                    parentDom.appendChild(td5);

                    td6 = document.createElement('td');
                    td6.className = 'ball-none border-right border-bottom ' + styleName;
                    parentDom.appendChild(td6);

                    //万位
                    parentDom.appendChild(me.singleLotteryBall(data[2], styleName));
                    //千位
                    parentDom.appendChild(me.singleLotteryBall(data[3], styleName));
                    //百位
                    parentDom.appendChild(me.singleLotteryBall(data[4], styleName));
                    //十位
                    parentDom.appendChild(me.singleLotteryBall(data[5], styleName));
                    //个位
                    parentDom.appendChild(me.singleLotteryBall(data[6], styleName));
                    //号码分布
                    //parentDom.appendChild(me.layoutLotteryBall(data[7], styleName));





                    //大小
                    var flagHash1 = {
                        '1':'大',
                        '0':'小',
                        '3':'单',
                        '2':'双'
                    };
                    var i = 0;
                    for(i = 0; i < 5; i++){
                        td = document.createElement('td');
                        td.className = styleName + (i == 4 ? ' border-right  border-bottom ' : ' border-bottom ');
                        td.innerHTML = flagHash1['' + data[8][i]];
                        parentDom.appendChild(td);
                    }
                    //单双
                    td = document.createElement('td');
                    td.className = "ball-none  border-bottom " + styleName;
                    parentDom.appendChild(td);
                    for(i = 0; i < 5; i++){
                        td = document.createElement('td');
                        td.className = styleName + (i == 4 ? ' border-right  border-bottom ' : ' border-bottom ');
                        td.innerHTML = flagHash1['' + data[9][i]];
                        parentDom.appendChild(td);
                    }
                    

                    //升平降
                    var flagHash2 = {
                        '1':'升',
                        '2':'平',
                        '3':'降'
                    };
                    td = document.createElement('td');
                    td.className = "ball-none  border-bottom " + styleName;
                    parentDom.appendChild(td);
                   for(i = 0; i < 5; i++){
                        td = document.createElement('td');
                        td.className = styleName + (i == 4 ? ' border-right  border-bottom ' : ' border-bottom ');
                        td.innerHTML = flagHash2['' + data[10][i]];
                        parentDom.appendChild(td);
                    }


                    //返回完整的单行TR结构
                    return parentDom;
                },
                singleLotteryBall: function(ballsData, styleName) {
                    var td1, td2, td3,
                        me = this,
                        htmlData = document.createDocumentFragment(),
                        borderStyleText = styleName,
                        lostBallstyle = '',
                        ballStyleText = '';

                    //左边界
                    td1 = document.createElement('td');
                    td1.className = 'ball-none border-bottom ' + borderStyleText;
                    htmlData.appendChild(td1);

                    for (var i = 0, current; i < ballsData.length; i++) {
                        current = ballsData[i];
                        lostBallstyle = 'l-' + current[3];
                        ballStyleText = 'c-' + current[0] + '-' + current[2];

                        td2 = document.createElement('td');
                        td2.className = borderStyleText + '  border-bottom  ' + lostBallstyle;
                        td2.innerHTML = '<i data-info="' + current.join(',') + '" class="ball-noraml ' + ballStyleText + '">' + (current[0] == 0 ? current[1] : current[0]) + '</i>'
                        htmlData.appendChild(td2);
                    };

                    td3 = document.createElement('td');
                    td3.className = 'ball-none border-right  border-bottom ' + borderStyleText;
                    htmlData.appendChild(td3);

                    return htmlData;
                },
                cqsscWuxingRenderStatistics: function(data) {
                    var me = this,
                        index = 0,
                        i = 0,
                        len = 0,
                        j = 0,
                        len2 = 0,
                        n = 0,
                        tdstr = '<td class="ball-none border-right"></td><td class="ball-none"></td>',
                        frame1 = [],
                        frame2 = [],
                        frame3 = [],
                        frame4 = [];
                    frame1.push('<tr class="auxiliary-area"><td class="ball-none border-bottom"></td><td class="border-bottom border-top">出现总次数</td><td class="ball-none border-right border-bottom"></td><td class="ball-none  border-bottom"></td><td class="border-bottom"></td><td class="ball-none border-right border-bottom"></td><td class="ball-none border-bottom"></td>');
                    frame2.push('<tr class="auxiliary-area"><td class="ball-none border-bottom"></td><td class="border-bottom">平均遗漏值</td><td class="ball-none border-right border-bottom"></td><td class="ball-none border-bottom"></td><td class="border-bottom"></td><td class="ball-none border-right border-bottom"></td><td class="ball-none border-bottom"></td>');
                    frame3.push('<tr class="auxiliary-area"><td class="ball-none border-bottom"></td><td class="border-bottom">最大遗漏值</td><td class="ball-none border-right border-bottom"></td><td class="ball-none border-bottom"></td><td class="border-bottom"></td><td class="ball-none border-right border-bottom"></td><td class="ball-none border-bottom"></td>');
                    frame4.push('<tr class="auxiliary-area"><td class="ball-none border-bottom"></td><td class="border-bottom">最大连出值</td><td class="ball-none border-right border-bottom"></td><td class="ball-none border-bottom"></td><td class="border-bottom"></td><td class="ball-none border-right border-bottom"></td><td class="ball-none border-bottom"></td>');


                    for (i = 0, len = 50; i < len; i++) {
                        tdstr = ((i + 1) % 10 == 0) ? '<td class="ball-none border-right border-bottom"></td><td class="ball-none border-bottom"></td>' : '';
                        tdstr = (i == (len - 1)) ? '<td class="ball-none border-bottom border-right"></td>' : tdstr;
                        frame1.push('<td class="border-bottom"><i class="ball-noraml">' + data[0][i] + '</i></td>' + tdstr);
                        frame2.push('<td class="border-bottom"><i class="ball-noraml">' + data[1][i] + '</i></td>' + tdstr);
                        frame3.push('<td class="border-bottom"><i class="ball-noraml">' + data[2][i] + '</i></td>' + tdstr);
                        frame4.push('<td class="border-bottom"><i class="ball-noraml">' + data[3][i] + '</i></td>' + tdstr);
                    }
                     for (i = 0, len = 5; i < len; i++) {
                        tdstr = ((i + 1) % 5 == 0) ? '<td class="ball-none border-right border-bottom"></td><td class="ball-none border-bottom"></td>' : '';
                        tdstr = (i == (len - 1)) ? '<td class="ball-none border-bottom border-right"></td>' : tdstr;
                        frame1.push('<td class="border-bottom"><i class="ball-noraml"></i></td>' + tdstr);
                        frame2.push('<td class="border-bottom"><i class="ball-noraml"></i></td>' + tdstr);
                        frame3.push('<td class="border-bottom"><i class="ball-noraml"></i></td>' + tdstr);
                        frame4.push('<td class="border-bottom"><i class="ball-noraml"></i></td>' + tdstr);
                    }
                     for (i = 0, len = 5; i < len; i++) {
                        tdstr = ((i + 1) % 5 == 0) ? '<td class="ball-none border-right border-bottom"></td><td class="ball-none border-bottom"></td>' : '';
                        tdstr = (i == (len - 1)) ? '<td class="ball-none border-bottom border-right"></td>' : tdstr;
                        frame1.push('<td class="border-bottom"><i class="ball-noraml"></i></td>' + tdstr);
                        frame2.push('<td class="border-bottom"><i class="ball-noraml"></i></td>' + tdstr);
                        frame3.push('<td class="border-bottom"><i class="ball-noraml"></i></td>' + tdstr);
                        frame4.push('<td class="border-bottom"><i class="ball-noraml"></i></td>' + tdstr);
                    }
                     for (i = 0, len = 4; i < len; i++) {
                        tdstr = ((i + 1) % 5 == 0) ? '<td class="ball-none border-right border-bottom"></td><td class="ball-none border-bottom"></td>' : '';
                        tdstr = (i == (len - 1)) ? '<td class="ball-none border-bottom border-right"></td>' : tdstr;
                        frame1.push('<td class="border-bottom"><i class="ball-noraml"></i></td>' + tdstr);
                        frame2.push('<td class="border-bottom"><i class="ball-noraml"></i></td>' + tdstr);
                        frame3.push('<td class="border-bottom"><i class="ball-noraml"></i></td>' + tdstr);
                        frame4.push('<td class="border-bottom"><i class="ball-noraml"></i></td>' + tdstr);
                    }

                    frame1.push('</tr>');
                    frame2.push('</tr>');
                    frame3.push('</tr>');
                    frame4.push('</tr>');
                    $(me.getBallContainer()).append($(frame1.join(''))).append($(frame2.join(''))).append($(frame3.join(''))).append($(frame4.join('')));
                }

            }});
            CHART.addEvent('afterRenderChartHtml', function(){
                var me = this,tds = $(me.getContainer()).find('tr:last').children();
                tds.addClass('border-bottom');
            });
            CHART.show();

            CHART.sysConfig = sysConfig;


        })(jQuery);
    </script>

@stop