function Regi_jc(callback) {
	this.$div = $('<div id="jiemian"></div>'); //背景
	this.$div_anquan = $('<div class="anquan"></div>'); //安全框
	this.$div_back = $('<div id="zc_back"></div>');
	this.$drdiv = $('<div id="jiemian_dr"></div>'); //登入框
	this.$drdiv_zh = $('<div class="zh"></div>'); //账号框
	this.$drdiv_mima = $('<div class="zh"></div>'); //密码框
	this.$drdiv_mima2 = $('<div class="zh"></div>'); //密码框
	this.$zc = $('<input type="submit" id="zc" value=" "/><p id="p-reg">注册游戏</p>'); //注册按钮
	this.$form = $('<form></form>'); //form表单
	this.$input_text = $('<input id="tet1" name="user" type="text"placeholder="请输入账号">'); //输入框
	this.$mima = $('<input type="password" name="pass1" id="mima1" placeholder="请输入密码"/>'); //密码 输入框
	this.$mima2 = $('<input type="password" name="pass2" id="mima2" placeholder="请再次输入密码"/>'); //密码 输入框

	this.$drdiv_zh.append(this.$input_text); //账号框拼接
	this.$drdiv_mima.append(this.$mima); //密码框拼接
	this.$drdiv_mima2.append(this.$mima2);
	this.$form.append(this.$drdiv_zh, this.$drdiv_mima, this.$drdiv_mima2, this.$zc);
	this.$drdiv.append(this.$form);
	this.$div_anquan.append(this.$drdiv, this.$div_back);
	this.$div.append(this.$div_anquan);
	//校验
	this.$form.validate({
		rules: {
			user: {
				required: true,

			},
			pass1: {
				required: true,
				rangelength: [6, 12]

			},
			pass2: {
				required: true,
				rangelength: [6, 12],
				equalTo: "#mima1"
			}
		},
		messages: {
			user: {
				required: "请填写账号"

			},
			pass1: {
				required: "密码未设置",
				rangelength: "密码长度在{0}到{1}个位",
			},
			pass2: {
				required: "密码未设置",
				rangelength: "密码长度在{0}到{1}个位",
				equalTo: "密码不一致"
			}
		},
		submitHandler: function() {

			var name = $('#tet1').val();
			var paswd = $("#mima1").val();
			console.log(name, paswd)
			var l = 0;
			var i = 0;
			mysql_kc.transaction(function(tx) {
				tx.executeSql('select username from user', [],
					function(ta, rel) {
						l = rel.rows.length;
						for(i = 0; i < l; i++) {
							if(rel.rows.item(i).username == name) {
								alert("账号已存在");
								break;
							}
						}
					},
					function(ta, err) {})
			});
			mysql_kc.transaction(function(tx) {
				if(i == l) {
					tx.executeSql('insert into user(username,userpass,usermoney)values("' + name + '","' + paswd + '",10000)', [], function(ta, rel) {
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into zzzbkc(uname)values("' + name + '")', [], function(ta, rel) {}, function(ta, err) {
								console.log(err.message)
							})
						})
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myditukc(uname,mid,mname,msrc1,msrc2,gamesrc,jiesuo)values(' +
								'"' + name + '",1,"雪山","images/match01.png","images/match01.png","images/map01.jpg",1)', [],
								function(ta, rel) {
									console.log(rel)
									console.log("22")
								},
								function(ta, err) {
									console.log(err.messages)
								})
						})
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myditukc(uname,mid,mname,msrc1,msrc2,gamesrc,jiesuo)values(' +
								'"' + name + '",2,"小溪","images/match02_y.png","images/match02.png","images/map02.jpg",0)')
						})
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myditukc(uname,mid,mname,msrc1,msrc2,gamesrc,jiesuo)values(' +
								'"' + name + '",3,"山川","images/match03_y.png","images/match03.png","images/map03.jpg",0)')
						})
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myditukc(uname,mid,mname,msrc1,msrc2,gamesrc,jiesuo)values(' +
								'"' + name + '",4,"冰谷","images/match04_y.png","images/match04.png","images/map04.jpg",0)')
						})
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myditukc(uname,mid,mname,msrc1,msrc2,gamesrc,jiesuo)values(' +
								'"' + name + '",5,"夜空","images/match05_y.png","images/match05.png","images/map05.jpg",0)')
						})
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myditukc(uname,mid,mname,msrc1,msrc2,gamesrc,jiesuo)values(' +
								'"' + name + '",6,"埃及","images/match06_y.png","images/match06.png","images/map06.jpg",0)')
						})
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myditukc(uname,mid,mname,msrc1,msrc2,gamesrc,jiesuo)values(' +
								'"' + name + '",7,"从林","images/match07_y.png","images/match07.png","images/map07.jpg",0)')
						})
						//关卡
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myguankakc(uname,gkji,gname,gsrc1,gsrc2,gsrc3,gamesrc,gjiesuo)values(' +
								'"' + name + '",1,"1","images/map1-1-0.png","images/map1-1-3.png","images/map1-1-0.png","images/map01.jpg",1)')
						})
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myguankakc(uname,gkji,gname,gsrc1,gsrc2,gsrc3,gamesrc,gjiesuo)values(' +
								'"' + name + '",1,"2","images/lockin.png","images/map1-1-3.png","images/map1-1-0.png","images/map02.jpg",0)')
						})
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myguankakc(uname,gkji,gname,gsrc1,gsrc2,gsrc3,gamesrc,gjiesuo)values(' +
								'"' + name + '",1,"3","images/lockin.png","images/map1-1-3.png","images/map1-1-0.png","images/map03.jpg",0)')
						})
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myguankakc(uname,gkji,gname,gsrc1,gsrc2,gsrc3,gamesrc,gjiesuo)values(' +
								'"' + name + '",1,"4","images/lockin.png","images/map1-1-3.png","images/map1-1-0.png","images/map01.jpg",0)')
						})
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myguankakc(uname,gkji,gname,gsrc1,gsrc2,gsrc3,gamesrc,gjiesuo)values(' +
								'"' + name + '",1,"5","images/lockin.png","images/map1-1-3.png","images/map1-1-0.png","images/map02.jpg",0)')
						})
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myguankakc(uname,gkji,gname,gsrc1,gsrc2,gsrc3,gamesrc,gjiesuo)values(' +
								'"' + name + '",1,"6","images/lockin.png","images/map1-1-3.png","images/map1-1-0.png","images/map03.jpg",0)')
						})

						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myguankakc(uname,gkji,gname,gsrc1,gsrc2,gsrc3,gamesrc,gjiesuo)values(' +
								'"' + name + '",2,"1","images/map1-1-0.png","images/map1-1-3.png","images/map1-1-0.png","images/map01.jpg",1)')
						})
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myguankakc(uname,gkji,gname,gsrc1,gsrc2,gsrc3,gamesrc,gjiesuo)values(' +
								'"' + name + '",2,"2","images/lockin.png","images/map1-1-3.png","images/map1-1-0.png","images/map02.jpg",0)')
						})
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myguankakc(uname,gkji,gname,gsrc1,gsrc2,gsrc3,gamesrc,gjiesuo)values(' +
								'"' + name + '",2,"3","images/lockin.png","images/map1-1-3.png","images/map1-1-0.png","images/map03.jpg",0)')
						})
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myguankakc(uname,gkji,gname,gsrc1,gsrc2,gsrc3,gamesrc,gjiesuo)values(' +
								'"' + name + '",2,"4","images/lockin.png","images/map1-1-3.png","images/map1-1-0.png","images/map01.jpg",0)')
						})
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myguankakc(uname,gkji,gname,gsrc1,gsrc2,gsrc3,gamesrc,gjiesuo)values(' +
								'"' + name + '",2,"5","images/lockin.png","images/map1-1-3.png","images/map1-1-0.png","images/map02.jpg",0)')
						})
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myguankakc(uname,gkji,gname,gsrc1,gsrc2,gsrc3,gamesrc,gjiesuo)values(' +
								'"' + name + '",2,"6","images/lockin.png","images/map1-1-3.png","images/map1-1-0.png","images/map03.jpg",0)')
						})

						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myguankakc(uname,gkji,gname,gsrc1,gsrc2,gsrc3,gamesrc,gjiesuo)values(' +
								'"' + name + '",3,"1","images/map1-1-0.png","images/map1-1-3.png","images/map1-1-0.png","images/map01.jpg",1)')
						})
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myguankakc(uname,gkji,gname,gsrc1,gsrc2,gsrc3,gamesrc,gjiesuo)values(' +
								'"' + name + '",3,"2","images/lockin.png","images/map1-1-3.png","images/map1-1-0.png","images/map02.jpg",0)')
						})
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myguankakc(uname,gkji,gname,gsrc1,gsrc2,gsrc3,gamesrc,gjiesuo)values(' +
								'"' + name + '",3,"3","images/lockin.png","images/map1-1-3.png","images/map1-1-0.png","images/map03.jpg",0)')
						})
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myguankakc(uname,gkji,gname,gsrc1,gsrc2,gsrc3,gamesrc,gjiesuo)values(' +
								'"' + name + '",3,"4","images/lockin.png","images/map1-1-3.png","images/map1-1-0.png","images/map01.jpg",0)')
						})
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myguankakc(uname,gkji,gname,gsrc1,gsrc2,gsrc3,gamesrc,gjiesuo)values(' +
								'"' + name + '",3,"5","images/lockin.png","images/map1-1-3.png","images/map1-1-0.png","images/map02.jpg",0)')
						})
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myguankakc(uname,gkji,gname,gsrc1,gsrc2,gsrc3,gamesrc,gjiesuo)values(' +
								'"' + name + '",3,"6","images/lockin.png","images/map1-1-3.png","images/map1-1-0.png","images/map03.jpg",0)')
						})

						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myguankakc(uname,gkji,gname,gsrc1,gsrc2,gsrc3,gamesrc,gjiesuo)values(' +
								'"' + name + '",4,"1","images/map1-1-0.png","images/map1-1-3.png","images/map1-1-0.png","images/map01.jpg",1)')
						})
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myguankakc(uname,gkji,gname,gsrc1,gsrc2,gsrc3,gamesrc,gjiesuo)values(' +
								'"' + name + '",4,"2","images/lockin.png","images/map1-1-3.png","images/map1-1-0.png","images/map02.jpg",0)')
						})
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myguankakc(uname,gkji,gname,gsrc1,gsrc2,gsrc3,gamesrc,gjiesuo)values(' +
								'"' + name + '",4,"3","images/lockin.png","images/map1-1-3.png","images/map1-1-0.png","images/map03.jpg",0)')
						})
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myguankakc(uname,gkji,gname,gsrc1,gsrc2,gsrc3,gamesrc,gjiesuo)values(' +
								'"' + name + '",4,"4","images/lockin.png","images/map1-1-3.png","images/map1-1-0.png","images/map01.jpg",0)')
						})
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myguankakc(uname,gkji,gname,gsrc1,gsrc2,gsrc3,gamesrc,gjiesuo)values(' +
								'"' + name + '",4,"5","images/lockin.png","images/map1-1-3.png","images/map1-1-0.png","images/map02.jpg",0)')
						})
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myguankakc(uname,gkji,gname,gsrc1,gsrc2,gsrc3,gamesrc,gjiesuo)values(' +
								'"' + name + '",4,"6","images/lockin.png","images/map1-1-3.png","images/map1-1-0.png","images/map03.jpg",0)')
						})

						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myguankakc(uname,gkji,gname,gsrc1,gsrc2,gsrc3,gamesrc,gjiesuo)values(' +
								'"' + name + '",5,"1","images/map1-1-0.png","images/map1-1-3.png","images/map1-1-0.png","images/map01.jpg",1)')
						})
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myguankakc(uname,gkji,gname,gsrc1,gsrc2,gsrc3,gamesrc,gjiesuo)values(' +
								'"' + name + '",5,"2","images/lockin.png","images/map1-1-3.png","images/map1-1-0.png","images/map02.jpg",0)')
						})
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myguankakc(uname,gkji,gname,gsrc1,gsrc2,gsrc3,gamesrc,gjiesuo)values(' +
								'"' + name + '",5,"3","images/lockin.png","images/map1-1-3.png","images/map1-1-0.png","images/map03.jpg",0)')
						})
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myguankakc(uname,gkji,gname,gsrc1,gsrc2,gsrc3,gamesrc,gjiesuo)values(' +
								'"' + name + '",5,"4","images/lockin.png","images/map1-1-3.png","images/map1-1-0.png","images/map01.jpg",0)')
						})
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myguankakc(uname,gkji,gname,gsrc1,gsrc2,gsrc3,gamesrc,gjiesuo)values(' +
								'"' + name + '",5,"5","images/lockin.png","images/map1-1-3.png","images/map1-1-0.png","images/map02.jpg",0)')
						})
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myguankakc(uname,gkji,gname,gsrc1,gsrc2,gsrc3,gamesrc,gjiesuo)values(' +
								'"' + name + '",5,"6","images/lockin.png","images/map1-1-3.png","images/map1-1-0.png","images/map03.jpg",0)')
						})

						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myguankakc(uname,gkji,gname,gsrc1,gsrc2,gsrc3,gamesrc,gjiesuo)values(' +
								'"' + name + '",6,"1","images/map1-1-0.png","images/map1-1-3.png","images/map1-1-0.png","images/map01.jpg",1)')
						})
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myguankakc(uname,gkji,gname,gsrc1,gsrc2,gsrc3,gamesrc,gjiesuo)values(' +
								'"' + name + '",6,"2","images/lockin.png","images/map1-1-3.png","images/map1-1-0.png","images/map02.jpg",0)')
						})
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myguankakc(uname,gkji,gname,gsrc1,gsrc2,gsrc3,gamesrc,gjiesuo)values(' +
								'"' + name + '",6,"3","images/lockin.png","images/map1-1-3.png","images/map1-1-0.png","images/map03.jpg",0)')
						})
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myguankakc(uname,gkji,gname,gsrc1,gsrc2,gsrc3,gamesrc,gjiesuo)values(' +
								'"' + name + '",6,"4","images/lockin.png","images/map1-1-3.png","images/map1-1-0.png","images/map01.jpg",0)')
						})
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myguankakc(uname,gkji,gname,gsrc1,gsrc2,gsrc3,gamesrc,gjiesuo)values(' +
								'"' + name + '",6,"5","images/lockin.png","images/map1-1-3.png","images/map1-1-0.png","images/map02.jpg",0)')
						})
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into myguankakc(uname,gkji,gname,gsrc1,gsrc2,gsrc3,gamesrc,gjiesuo)values(' +
								'"' + name + '",6,"6","images/lockin.png","images/map1-1-3.png","images/map1-1-0.png","images/map03.jpg",0)')
						})
						//结算
						mysql_kc.transaction(function(tx) {
							tx.executeSql('insert into Settlementkc(uname)values("' + name + '")')
						})
					}, function(ta, err) {
						console.log(err.message);
					});
					alert("注册成功")
					callback("注册")
				}
			})
		}

	})
	this.$div_back.on("click", function() {
		if(confirm("确认返回吗")) {
			callback("注册");
		}
	})
}