

//后三组选和值
(function(host, GameMethod, undefined){
	var defConfig = {
		name:'housan.zuxuan.hezhi'
		
	},
	Games = host.Games,
	SSC = Games.D3.getInstance();
	
	
	//定义方法
	var pros = {
		init:function(cfg){
			var me = this;
			
		},
		//时时彩复式结构为5行10列
		//复位选球数据
		rebuildData:function(){
			var me = this;
			me.balls = [
						[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
						];
		},
		buildUI:function(){
			var me = this;
			me.container.html(html_all.join(''));
		},
		//检测选球是否完整，是否能形成有效的投注
		//并设置 isBallsComplete 
		checkBallIsComplete: function(){
			var me = this,
				ball = me.getBallData()[0],
				i = 0,
				len = ball.length,
				num = 0;
			for(;i < len;i++){
				if(ball[i] > 0){
					num++;
				}
			}
			//console.log(num);
			if(num >= 1){
				return me.isBallsComplete = true;
			}
			return me.isBallsComplete = false;
		},
		formatViewBalls:function(original){
			var me = this,
				result = [],
				len = original.length,
				i = 0;
			for (; i < len; i++) {
				result = result.concat(original[i].join('|'));
			}
			return result.join('|');
		},
		makePostParameter: function(original){
			var me = this,
				result = [],
				len = original.length,
				i = 0;
			//console.log(original);
			for (; i < len; i++) {
				result = result.concat(original[i].join('|'));
			}
			return result.join('|');
		},
		//获取组合结果
		getLottery: function(){
			var me = this,
				ball = me.getBallData()[0],
				i = 0,
				len = ball.length,
				arr = [],
				resultNum = [];
			
			for(;i < len;i++){
				if(ball[i] > 0){
					arr.push(i);
				}
			}
			//校验当前的面板
			//获取选中数字
			if(me.checkBallIsComplete()){
				for(var j=0;j < arr.length;j++){
					resultNum = resultNum.concat(me.mathResult(arr[j], 0, 9));
				}
				return resultNum;
			}
			return [];
		},
		//去重处理
		removeSame: function(num, data) {
			var i = 0, result, me = this,
				numLen = this.getBallData()[0].length;
				len = data.length;
			result = Math.floor(Math.random() * numLen + 1);
			for(;i<data.length;i++){
				if(result == data[i]){
					return arguments.callee.call(me, num, data);
				}
			}
			return result;
		},
		//检测结果重复
		checkResult: function(data, array){
			//检查重复
			for (var i = array.length - 1; i >= 0; i--) {
				if(array[i].join('') == data){
					return false;
				}
			};
			return true;
		},
		//计算各种结果
		mathResult: function(sum, nBegin, nEnd){
			var me = this,
				arr = [],
				checkArray = [],
				x,y,z;
				
			for (x=nBegin;x<=nEnd ;x++ ){
				for (y=nBegin;y<=nEnd ;y++ ){
					for (z=nBegin;z<=nEnd ;z++ ){
						if(x+y+z==sum && me.arrIndexOf(x, [x,y,z]) != 3){
							var postArray = [x,y,z].sort(function(a, b){
								return a-b;
							});
							if(me.checkResult(postArray.join(''), checkArray)){
								checkArray.push(postArray)
								arr.push([x,y,z]);
							}
						}
					}
				}
			}
			return arr;
		},
		originalData: function(data){
			var me = this,
				v = [];
			for(var i=0;i < data.length;i++){
			    for(var j=0;j<data[i].length;j++){
			        v[j] = v[j] || [];
			        if(!me.arrIndexOf(data[i][j], v[j])){
			            v[j].push(data[i][j]);
			        }
			    }
			}
			return v;
		},
		//限制随机投注重复
		checkRandomBets: function(hash,times){
			var me = this,
				allowTag = typeof hash == 'undefined' ? true : false,
				hash = hash || {},
				current = [],
				times = times || 0,
				num = '',
				allArr = [],
				current2 = [],
				len = me.getBallData().length,
				rowLen = me.getBallData()[0].length,
				order = Games.getCurrentGameOrder().getTotal()['orders'];
			
			current[0] = Math.ceil(Math.random() * (rowLen-1));
			//如果大于限制数量
			//则直接输出
			if(Number(times) > Number(me.getRandomBetsNum())){
				return current;
			}
			//建立索引
			if(allowTag){
				for (var i = 0; i < order.length; i++) {
					if(order[i]['type'] == me.defConfig.name){
						var name = order[i]['original'].join('');
						hash[name] = name;
					}
				};
			}
			//对比结果
			if(hash[current.join('')]){
				times++;
				return arguments.callee.call(me, hash, times);
			}

			return current;
		},
		//获取随机数
		randomNum:function(){
			var me = this,
				i = 0, 
				current = [], 
				currentNum, 
				ranNum,
				lotterys = [],
				order = null,
				dataNum = me.getBallData(),
				len = me.getBallData()[0].length,
				name = me.defConfig.name;				

			current = me.checkRandomBets();
			lotterys = me.mathResult(current[0], 0, 9);
			order = {
				'type':  Games.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
				'original':[current],
				'lotterys': lotterys,
				'moneyUnit': Games.getCurrentGameStatistics().getMoneyUnit(),
				'multiple': Games.getCurrentGameStatistics().getMultip(),
				'onePrice': Games.getCurrentGameStatistics().getOnePrice(),
				'num': lotterys.length
			};
			order['amountText'] = Games.getCurrentGameStatistics().formatMoney(order['num'] * order['moneyUnit'] * order['multiple'] * order['onePrice']);
			return order;
		},


		miniTrend_createHeadHtml:function(){
			var me = this,
				html = [];
			html.push('<table width="100%" class="bet-table-trend" id="J-minitrend-trendtable-'+ me.getId() +'">');
				html.push('<thead><tr>');
				html.push('<th><span class="number">奖期</span></th>');
				html.push('<th><span class="balls">开奖</th>');
				html.push('<th><span>和值</span></th>');
				html.push('</tr></thead>');
				html.push('<tbody>');
			return html.join('');
		},
		miniTrend_createRowHtml:function(){
			var me = this,
				data = me.miniTrend_getBallsData(),
				dataLen = data.length,
				trcls = '',
				currCls = 'curr',
				item,
				html = [],
				xtText = '';

			$.each(data, function(i){
				item = this;
				trcls = '';
				trcls = i == 0 ? 'first' : trcls;
				trcls = i == dataLen - 1 ? 'last' : trcls;
				html.push('<tr class="'+ trcls +'">');
					html.push('<td><span class="number">'+ item['number'].substr(2) +' 期</span></td>');
					html.push('<td><span class="balls">');
					$.each(item['balls'], function(j){
						if(j > -1){
							currCls = 'curr';
						}else{
							currCls = '';
						}
						html.push('<i class='+ currCls +'>' + this + '</i>');
					});
					html.push('</span></td>');
					xtText = item['balls'][0] + item['balls'][1] + item['balls'][2];
					html.push('<td>'+ xtText +'</td>');
				html.push('</tr>');
			});
			return html.join('');
		}
		
		
	};
	



	//html模板
	var html_head = [];
		//头部
		html_head.push('<div class="number-select-title balls-type-title clearfix"><div class="number-select-link"><a href="#" class="pick-rule">选号规则</a><a href="#" class="win-info">中奖说明</a></div><div class="function-select-title"></div></div>');
		html_head.push('<div class="number-select-content" style="padding:0 70px;">');
		html_head.push('<ul class="ball-section">');
		//每行
	var html_row = [];
			html_row.push('<li>');
			html_row.push('<div class="ball-title" style="display:none;"><strong><#=title#>位</strong><span></span></div>');
			html_row.push('<ul class="ball-content">');
			$.each([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26], function(i){
				if(i == 0){
					html_row.push('<li style="display:none"><a href="javascript:void(0);" data-param="action=ball&value='+ this +'&row=<#=row#>"  class="ball-number ball-number-small">'+this+'</a></li>');
				}else{
					html_row.push('<li><a href="javascript:void(0);" data-param="action=ball&value='+ this +'&row=<#=row#>" class="ball-number ball-number-small">'+this+'</a></li>');
				}
			});
			
			html_row.push('</ul>');
		html_row.push('</li>');
	var html_bottom = [];
		html_bottom.push('</ul>');
		html_bottom.push('</div>');
		//拼接所有
	var html_all = [],rowStr = html_row.join('');
		html_all.push(html_head.join(''));
		$.each([''], function(i){
			html_all.push(rowStr.replace(/<#=title#>/g, this).replace(/<#=row#>/g, i));
		});
		html_all.push(html_bottom.join(''));
		
		
	
	
	//继承GameMethod
	var Main = host.Class(pros, GameMethod);
		Main.defConfig = defConfig;
	//将实例挂在游戏管理器实例上
	SSC.setLoadedHas(defConfig.name, new Main());
	
})(bomao, bomao.GameMethod);

