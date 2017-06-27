function Login_jc(callback) {
	this.$div = $('<div id="jiemian"></div>'); //背景
	this.$div_anquan = $('<div class="anquan"></div>'); //安全框
	this.$drdiv = $('<div id="jiemian_dr"><p id="p-login">登陆游戏</p></div>'); //登入框
	this.$drdiv_zh = $('<div class="zh"></div>'); //账号框
	this.$drdiv_mima = $('<div class="zh"></div>'); //密码框
	this.$wenzi_zh = $('<div class="wenzi_zh"></div>'); //账号文字
	this.$wenzi_mima = $('<div class="wenzi_zh2"></div>'); //密码文字
	this.$input_text = $('<input id="tet" type="text"placeholder="请输入账号">'); //输入框
	this.$dr = $('<input type="button" id="dr"  />'); //登入按钮
	this.$zc = $('<input type="button" id="zc1" /><p id="p-zhuce">注册游戏</p>'); //注册按钮
	this.$mima = $('<input type="password" id="mima" placeholder="请输入密码"/>'); //密码 输入框
	this.$div_zuoze = $('<div id="input_zuoze" /></div>') //作者
	this.$div_muics = $('<div id="muics" /></div>') //音乐
	this.$drdiv_zh.append(this.$wenzi_zh, this.$input_text); //账号框拼接
	this.$drdiv_mima.append(this.$wenzi_mima, this.$mima); //密码框拼接
	this.$drdiv.append(this.$drdiv_zh, this.$drdiv_mima, this.$dr, this.$zc);
	this.$div_anquan.append(this.$drdiv, this.$div_zuoze, this.$div_muics);
	this.$div.append(this.$div_anquan);
	var f = this

	this.$div_zuoze.on("click", function() { //点击添加详情

		var quanju_name = " ";
		var quanju_money = " ";

		var $input_x = $('<input id="zuoze_x" type="button" value="x">'); //关闭x
		var $zuoze_xinxi = $('<p id="zuoze_wenzi">作者信息：郑黎航</br>游戏版本:5.01.33</p>') //作者详情
		var $div_zuozexinxi = $('<div id="zuozexinxi"></div>');

		$div_zuozexinxi.append($input_x, $zuoze_xinxi)
		f.$div_anquan.append($div_zuozexinxi)
		f.$div.append(f.$div_anquan)

		$input_x.on("click", function() { //删除
			$div_zuozexinxi.remove();
		})
	})
	this.$div_muics.on("click", function() {
		$("#audio_1").css("display", "block");
		$('#muics_qd').on("click", function() {
			$("#audio_1").css("display", "none");
		})
	})
	this.$zc.on("click", function() {
		callback("登入")
	})
	this.$dr.on("click", function() {
		var name = $('#tet').val();
		var pass = $('#mima').val();
		var i = 0;
		var l = 0;
		mysql_kc.transaction(function(tx) {
			tx.executeSql('select username,userpass,usermoney from user', [], function(ta, rel) {
				l = rel.rows.length;

				for(i = 0; i < l; i++) {
					if(name == rel.rows.item(i).username && pass == rel.rows.item(i).userpass) {

						quanju_name = name;
						quanju_money = rel.rows.item(i).usermoney;
						quanju_id = rel.rows.item(i).id;
						console.log(name, pass)

						callback("loand");

						mysql_kc.transaction(function(tx) {

							tx.executeSql("update zzzbkc set zdi1='null' where uname='" + quanju_name + "'", [], function(ta, rel) {

							}, function(ta, err) {})
							tx.executeSql("update zzzbkc set zdi2='null' where uname='" + quanju_name + "'", [], function(ta, rel) {

							}, function(ta, err) {})
							tx.executeSql("update zzzbkc set zdi3='null' where uname='" + quanju_name + "'", [], function(ta, rel) {

							}, function(ta, err) {})
							tx.executeSql("update zzzbkc set zdi4='null' where uname='" + quanju_name + "'", [], function(ta, rel) {

							}, function(ta, err) {})
						})
						break;
					}
				}
				if(i == l) {
					alert("账号或密码错误")
				}
			}, function(ra, err) {})
		})

	})

}