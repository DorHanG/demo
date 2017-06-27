function Demoo(callback) {

	cc_time = 0; //终点获取时间
	cc_mc = 0; //终点获取名次
	var av = 0; //惯性
	var star = 0;
	count = 0; //累加金币
	var speed = 0;
	var fla = this;
	timer = null;
	timer2 = null;
	time_dsq = null;
	this.$div = $('<div></div>');
	this.$yaogan = $('<div id="yaog" style="position: absolute;top: 300px;"></div>');
	this.$ditu = $('<div id="ditu"></div>');

	var djm_div = $('<div id="djm_div"></div>') //第几名div
	var djm_div_img = $("<div id='djm_div_img'></div>"); //排名图片
	djm_div.append(djm_div_img);
	var time_div = $('<div id="time_div"></div>') //time div
	var time_div_left = $('<div id="time_div_left"></div>') //time div left
	var time_div_right = $('<div id="time_div_right">00:00:00</div>') //time div right
	time_div.append(time_div_left, time_div_right);
	var money_div = $('<div id="money_div"></div>') //钱的 div
	var zhand_div = $('<div id="zhand_div">') //暂停div
	zhand_div.css({
		"background": "url(images/pause.png) no-repeat center",
		"width": "64px",
		"height": "62px",
		"float": "left",
		"margin-left": "30px"
	})

	var music_div = $('<div id="music_div"></div>') //声音div
	var mali_div = $('<div id="mali_div"></div>') //马力div
	var nl_div = $('<div id="nl_div"></div>'); //能量
	mali_div.append(nl_div);

	this.ditu_cj = $('<div id="ditu_cj"></div>'); //地图显示时间金币等div
	this.ditu_cj.append(djm_div, time_div, money_div, zhand_div, mali_div, music_div);

	var kk = 0; //存储摇杆传出的值
	var ll = 0;
	var h = -10;
	new MyRocker(this.$yaogan, function(xx, yy) { //摇杆
		if(xx < 0) {
			xx = 0;
		}
		kk = xx / 2;
		ll = yy * 2;
		console.log("ll" + ll)
		ll = ll / 10;
		//console.log("kk"+kk)
	})
	var ddtt = new Ditu(this.$ditu, gam_ditu) //地图

	var cc = new Mycheshou(this.$div, ['"' + sheshou_img + '"', '"' + chezi_img + '"', '"' + lun1_img + '"', '"' + lun1_img + '"'], 0, 0); //车手
	var cc1 = new Mycheshou(this.$div, ["images/c6.png", "images/m3.png", "images/w1.png", "images/w1.png"], 0, -100);
	var cc2 = new Mycheshou(this.$div, ["images/c5.png", "images/m1.png", "images/w1.png", "images/w1.png"], 0, -200);

	var height = $(window).height();
	console.log(height)

	var ll1; //保存Y的值
	ll1 = ll;
	var t1 = height * 0.77 //限制下  580
	var t2 = height * 0.36 //限制上  310

	//标记
	cc.div_logo.css({
		"display": "block"
	})

	//地图名关卡名
	mysql_kc.transaction(function(tx) {
		tx.executeSql("select * from myditukc where mid=" + zjid + "", [], function(ta, rel) {
			var mname_end = rel.rows.item(0).mname;
			mysql_kc.transaction(function(tx) {
				tx.executeSql("select * from myguankakc where gid=" + gk_zjid + "", [], function(ta, rel) {
					var gname_end = rel.rows.item(0).gname;
					time_div_left.html(mname_end + gname_end)
				}, function(ta, err) {})
			})

		}, function(ta, err) {})
	})
	//开启惯性定时

	fla.gx_star = function() {
		if(av == 1) {
			if(-(ddtt.$div.offset().left) < 12000) {
				var kk = speed / 10;
				timer2 = setInterval(function() {
					if(kk <= 0) {
						kk = 0;
						clearInterval(timer2);
					}
					//console.log(kk)
					kk -= 1;
					ddtt.move(kk);

				}, 100)
			}

		}
		av = 0;
	}
	//关闭惯性定时
	fla.gx_stop = function() {
		clearInterval(timer2)
		timer2 = null;
	}

	//时间
	var min = 0;
	var second = 0;
	var msecond = 0;

	//定时方法
	fla.paly = function() {
		msecond++;
		if(msecond >= 100) {
			second = parseInt(second) + 1;
			msecond = 0
		}
		if(second >= 60) {
			min = parseInt(min) + 1;
			second = 0;
		}
		if(second < 10) {
			second = "0" + parseInt(second);
		}
		if(min < 10) {
			min = "0" + parseInt(min)
		}

		time_div_right.html(min + ":" + second + ":" + msecond)
	}
	//开启定时器
	fla.time_sj = function() {

		time_dsq = setInterval(fla.paly, 10);
		//t=111;
	}
	//关闭时间
	fla.stop = function() {
		clearInterval(time_dsq)
		time_dsq = null;
	}

	//游戏开始
	fla.timer_game = function() {

		timer = setInterval(function() {
			var sdf = 1;
			//排名
			var m_1 = Math.ceil(cc.$div.offset().left);
			var m_2 = Math.ceil(cc1.$div.offset().left);
			var m_3 = Math.ceil(cc2.$div.offset().left);
			if(m_1 > m_2 && m_1 > m_3) {
				djm_div_img.css({
					"background": "url(images/1.png) no-repeat center"
				})
				cc_mc = 1;
			} else if(m_1 > m_2 && m_1 < m_3) {
				djm_div_img.css({
					"background": "url(images/2.png) no-repeat center"
				})
				cc_mc = 2;
			} else if(m_1 < m_2 && m_1 > m_3) {
				djm_div_img.css({
					"background": "url(images/2.png) no-repeat center"
				})
				cc_mc = 2;
			} else if(m_1 < m_2 && m_1 < m_3) {
				djm_div_img.css({
					"background": "url(images/3.png) no-repeat center"
				})
				cc_mc = 3;
			}

			//碰撞
			function pzrect(x1, y1, w1, h1, x2, y2, w2, h2) {
				if(x1 >= x2 && x1 >= x2 + w2) {
					return false;
				} else if(x1 <= x2 && x1 + w1 <= x2) {
					return false;
				} else if(y1 >= y2 && y1 >= y2 + h2) {
					return false;

				} else if(y1 <= y2 && y1 + h1 <= y2) {
					return false;
				}
				return true;
			}
			//人物
			var w_rw = 45; //人物
			var h_rw = 45;
			var left_rw = Math.ceil(cc.$div4.offset().left);
			var top_rw = Math.ceil(cc.$div4.offset().top);

			var w_rw1 = 45; //机器1
			var h_rw1 = 45;
			var left_rw1 = Math.ceil(cc1.$div3.offset().left);
			var top_rw1 = Math.ceil(cc1.$div3.offset().top);

			var w_rw2 = 45; //机器2
			var h_rw2 = 45;
			var left_rw2 = Math.ceil(cc2.$div3.offset().left);
			var top_rw2 = Math.ceil(cc2.$div3.offset().top);

			pzrect(left_rw1, top_rw1, w_rw1, h_rw1, left_rw, top_rw, w_rw, h_rw)
			if(pzrect(left_rw1, top_rw1, w_rw1, h_rw1, left_rw, top_rw, w_rw, h_rw) == true) {
				kk = -5;
			}

			pzrect(left_rw2, top_rw2, w_rw2, h_rw2, left_rw, top_rw, w_rw, h_rw)
			if(pzrect(left_rw2, top_rw2, w_rw2, h_rw2, left_rw, top_rw, w_rw, h_rw) == true) {
				kk = -5;
			}

			// 金币
			$(".asw").each(function() {
				var left_coin = Math.ceil($(this).offset().left); //金币
				var top_coin = Math.ceil($(this).offset().top);
				var w_coin = 60;
				var h_coin = 60;

				var w_rw = 65; //人物
				var h_rw = 45;
				var left_rw = Math.ceil(cc.$div4.offset().left);
				var top_rw = Math.ceil(cc.$div4.offset().top);

				pzrect(left_coin, top_coin, w_coin, h_coin, left_rw, top_rw, w_rw, h_rw)
				if(pzrect(left_coin, top_coin, w_coin, h_coin, left_rw, top_rw, w_rw, h_rw) == true) {
					count++;
					$(money_div).html("+" + count)
					$(this).remove();
				}

			})
			// 水坑

			$(".wate_div").each(function() {
				var left_coin = Math.ceil($(this).offset().left); //金币
				var top_coin = Math.ceil($(this).offset().top);
				var w_coin = 254;
				var h_coin = 34;

				var w_rw = 65; //人物
				var h_rw = 45;
				var left_rw = Math.ceil(cc.$div4.offset().left);
				var top_rw = Math.ceil(cc.$div4.offset().top);
				//console.log(top_rw,top_coin)

				pzrect(left_coin, top_coin, w_coin, h_coin, left_rw, top_rw, w_rw, h_rw)
				if(pzrect(left_coin, top_coin, w_coin, h_coin, left_rw, top_rw, w_rw, h_rw) == true) {
					kk = 30
				}

			})
			// 木桶
			$(".mut_div").each(function() {
				var left_mu = Math.ceil($(this).offset().left); //木桶
				var top_mu = Math.ceil($(this).offset().top);
				var w_mu = 102;
				var h_mu = 70;

				var w_rw = 65; //人物
				var h_rw = 45;
				var left_rw = Math.ceil(cc.$div4.offset().left);
				var top_rw = Math.ceil(cc.$div4.offset().top);

				pzrect(left_mu, top_mu, w_mu, h_mu, left_rw, top_rw, w_rw, h_rw)
				if(pzrect(left_mu, top_mu, w_mu, h_mu, left_rw, top_rw, w_rw, h_rw) == true) {
					kk = 0

				}

			})

			//判断能量条
			if(kk > 0) {
				speed = speed + kk;
				if(speed >= 200) {
					speed = 200;
				}
				nl_div.animate({
					"width": speed
				}, 0);

			} else {
				speed = speed - 20;
				if(speed <= 0) {
					speed = 0
				}
				nl_div.animate({
					"width": speed
				}, 0);
			}

			// 沙地

			$(".sha_div").each(function() {
				var left_coin = Math.ceil($(this).offset().left); //金币
				var top_coin = Math.ceil($(this).offset().top);
				var w_coin = 254;
				var h_coin = 34;

				var w_rw = 65; //人物
				var h_rw = 45;
				var left_rw = Math.ceil(cc.$div4.offset().left);
				var top_rw = Math.ceil(cc.$div4.offset().top);

				pzrect(left_coin, top_coin, w_coin, h_coin, left_rw, top_rw, w_rw, h_rw)
				if(pzrect(left_coin, top_coin, w_coin, h_coin, left_rw, top_rw, w_rw, h_rw) == true) {
					console.log(1);
					kk = 12
					//判断能量条
					if(kk > 0) {
						speed = 10;
						speed = speed + kk;
						if(speed >= 200) {
							speed = 200;
						}
						nl_div.animate({
							"width": speed
						}, 0);

					} else {
						speed = speed - 20;
						if(speed < 0) {
							speed = 0
						}
						nl_div.animate({
							"width": speed
						}, 0);
					}

				}

			})

			//边界

			if(cc.zyd <= t2 || cc.zyd >= t1) {

				ll1 = 0;
				if(cc.zyd <= t2) {
					if(ll > 0) {
						ll1 = ll;
					}

				}
				if(cc.zyd >= t1) {
					if(ll < 0) {
						ll1 = ll;
					}

				}
			} else {
				ll1 = ll;
			}

			//角色大于500 让地图走

			if(-(ddtt.$div.offset().left) < 12000) //判断地图left
			{
				if(cc.$div.offset().left >= 500) {

					ddtt.move(kk)
					cc.move(0, ll1);
					cc1.move2(16 - kk);
					cc2.move2(18 - kk);

				}
				//小于500  角色走
				else {
					cc.move(kk, ll1);
					ddtt.move(0)
					cc1.move2(16);
					cc2.move2(18);
				}
			} else {
				if(cc1.$div.offset().left >= 539) {
					var cc1_time = time_div_right.html();
					//console.log(cc1_time)
					if(cc.$div.offset().left >= 539) {
						if(cc2.$div.offset().left >= 539) {
							cc.move(0, ll1);
							cc1.move2(0);
							cc2.move2(0);
						} else {
							cc.move(0, ll1);
							cc1.move2(0);
							cc2.move2(18);
						}

					} else {
						if(cc2.$div.offset().left >= 539) {
							cc.move(kk, ll1);
							cc1.move2(0);
							cc2.move2(0);
						} else {
							cc.move(kk, ll1);
							cc1.move2(0);
							cc2.move2(18);
						}

					}

				}
				if(cc.$div.offset().left >= 539) {
					cc_time = time_div_right.html();

					cfc("ttt")

					cc.move(0, ll1);
					if(cc1.$div.offset().left >= 539) {
						if(cc2.$div.offset().left >= 539) {
							cc.move(0, ll1);
							cc1.move2(0);
							cc2.move2(0);
						} else {
							cc.move(0, ll1);
							cc1.move2(0);
							cc2.move2(18);
						}

					} else {
						if(cc2.$div.offset().left >= 539) {
							cc.move(0, ll1);
							cc1.move2(16);
							cc2.move2(0);
						} else {
							cc.move(0, ll1);
							cc1.move2(16);
							cc2.move2(18);
						}
					}

				}
				if(cc2.$div.offset().left >= 539) {
					var cc2_time = time_div_right.html();
					if(cc1.$div.offset().left >= 539) {
						if(cc.$div.offset().left >= 539) {
							cc.move(0, ll1);
							cc1.move2(0);
							cc2.move2(0);
						} else {
							cc.move(kk, ll1);
							cc1.move2(0);
							cc2.move2(0);
						}

					} else {
						if(cc.$div.offset().left >= 539) {
							cc.move(0, ll1);
							cc1.move2(16);
							cc2.move2(0);
						} else {
							cc.move(kk, ll1);
							cc1.move2(10);
							cc2.move2(0);
						}
					}

				} else {
					cc.move(kk, ll1);
					cc1.move2(16);
					cc2.move2(18);
				}

			}

		}, 100);

		//惯性

		fla.$yaogan.on("mousedown", function() {

			av = 1;
		})

		//调用惯性
		$(document).on("mouseup", function() {
			fla.gx_star();
		})
	}
	//关闭游戏定时
	fla.game_stop = function() {
		clearInterval(timer);
		timer = null
	}
	//开启游戏定时
	fla.star = function() {
		fla.timer_game();
		console.log("11")
	}

	//倒计时
	this.$div_djs = $('<div class="dd_end"></div>');
	var index = 6;
	var img = new Array();
	img = ["images/1.png", "images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png"];
	this.play = function() {
		index--;
		$('.dd_end').html('<img src=' + img[index] + '>');
		if(index == 0) {

			clearInterval(timeerr);
			$(fla.$div_djs).remove()

			fla.time_sj();

			fla.star();

		}
	}

	var timeerr = setInterval(this.play, 1000)
	// 调用时间

	//暂停
	var zdj_game = 0;
	zhand_div.on("click", function() {
		if(zdj_game == 0) {
			fla.game_stop();
			fla.gx_stop();
			fla.stop();
			$(zhand_div).css({
				"background": "url(images/start.png) no-repeat center"
			});
			$("#yaog").css({
				"display": "none"
			})
			zdj_game = 1;
		} else if(zdj_game == 1) {
			fla.star();
			fla.time_sj();
			fla.gx_star();
			$(zhand_div).css({
				"background": "url(images/pause.png) no-repeat center"
			});
			$("#yaog").css({
				"display": "block"
			})
			zdj_game = 0;
		}

	})

	//音乐
	var mm = document.getElementById("music_m");
	if(mm.paused) //值为  true   flase
	{
		music_div.css({
			"background": "url(images/1223.png) no-repeat center"
		})
	} else {
		music_div.css({
			"background": "url(images/musicPlay.png) no-repeat center"
		})
	}
	music_div.on("click", function() {

		if(mm.paused) //值为  true   flase
		{
			music_div.css({
				"background": "url(images/musicPlay.png) no-repeat center"
			})
			mm.play();
			music_end = 1;
		} else {
			music_div.css({
				"background": "url(images/1223.png) no-repeat center"
			})
			mm.pause()
			music_end = 0;
		}

	})

	function cfc(ggg) {
		if(ggg == "ttt") {
			fla.game_stop();
			fla.gx_stop();
			fla.stop();
			callback("结算")
		}
	}
	var tql = 0;
	$(document).keydown(function(e) {
		if(e.keyCode == 32) {
			if(tql == 0) {
				cc.$div.addClass("tql")
				tql = 1;
			} else if(tql == 1) {
				cc.$div.removeClass("tql")
				tql = 0;
			}
		}

	})

}