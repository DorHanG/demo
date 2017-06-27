function Guanka(callback) {
	var gk_lijin;
	gk_zjid = 0;
	gam_ditu = 0; //保存游戏地图
	this.$div = $('<div id="guanka"></div>') //大div
	this.anquan = $('<div id="anquan_guanka"></div>');
	this.guan_back = $('<div id="guan_back"></div>')
	var $ditu_div = $('<div id="ditu_div"></div>');
	var $g_1 = $('<div id="g_1" class="g"></div>') //关卡1
	var $g_2 = $('<div id="g_2" class="g"></div>') //关卡1
	var $g_3 = $('<div id="g_3" class="g"></div>') //关卡1
	var $g_4 = $('<div id="g_4" class="g"></div>') //关卡1
	var $g_5 = $('<div id="g_5" class="g"></div>') //关卡1
	var $g_6 = $('<div id="g_6" class="g"></div>') //关卡1

	this.fanfagk = function() {
		mysql_kc.transaction(function(tx) {
			tx.executeSql('select * from myguankakc where uname="' + quanju_name + '" and gkji=' + gbj_gk + '', [], function(ta, rel) {
				var l = rel.rows.length;
				for(var i = 0; i < l; i++) {
					gk_lijin = rel.rows.item(i).gsrc1;

					$(".g").eq(i).css("background", "url(" + gk_lijin + ") no-repeat center center")
				}

				$(".g").each(function(e) {
					$(this).click(function() {
						gk_zjid = e + 1; //地图id保存
						mysql_kc.transaction(function(tx) {
							tx.executeSql("select * from myguankakc where gkji=" + gbj_gk + " and gname=" + gk_zjid + " and uname='" + quanju_name + "'", [], function(ta, rel) {
								console.log(rel)
								gam_ditu = rel.rows.item(0).gamesrc; //获取游戏的地图
								var k1 = rel.rows.item(0).gsrc1;
								var k2 = rel.rows.item(0).gsrc2
								var k3 = rel.rows.item(0).gsrc3;
								if(k1 == k2 || k1 == k3) {

									callback("游戏");
								} else {
									alert("未解锁")
								}

							}, function(ta, err) {
								console.log(err.message);
							})
						})
					})
				})

			}, function(ta, err) {})
		})

	}

	$ditu_div.append($g_1, $g_2, $g_3, $g_4, $g_5, $g_6);
	this.anquan.append($ditu_div, this.guan_back);
	this.$div.append(this.anquan);
	//返回
	this.guan_back.click(function() {
		if(confirm("确认返回吗")) {
			callback("地图");
		}
	})
}