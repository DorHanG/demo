function Main(callback) {
	this.$div = $('<div id="main_face"></div>'); //主界面
	this.$anquan = $('<div class="anquan_main"></div>'); //安全框
	this.div_1 = $('<div id="anquan_1"></div>'); //上部分div
	this.div_1_1 = $('<div id="shezhi"></div>'); //设置
	this.div_1_2 = $('<div id="div_1_back"></div>'); //返回
	this.div_2 = $('<div id="anquan_2"></div>'); //下部分框
	this.div_2_1 = $('<div id="div_2_1"></div>'); //单人游戏
	this.div_2_2 = $('<div id="div_2_2"></div>'); //多人游戏
	this.div_2_3 = $('<div id="div_2_3"></div>'); //商城
	var height = $(document).height();

	this.$anquan.css({
		"width": "1000px",
		"height": "" + height + "",
		"margin": "0 auto"
	})
	this.div_1.append(this.div_1_1, this.div_1_2);
	this.div_2.append(this.div_2_1, this.div_2_2, this.div_2_3);
	this.$anquan.append(this.div_1, this.div_2);
	this.$div.append(this.$anquan);
	var f = this;
	//多人按钮
	this.div_2_2.on("click", function() {
		var $input_x = $('<input id="zuoze_x" type="button" value="x">'); //关闭x
		var $zuoze_xinxi = $('<p id="zuoze_wenzi">暂未开通</br>尽情期待</p>') //作者详情
		var $div_zuozexinxi = $('<div id="tishi"></div>');

		$div_zuozexinxi.append($input_x, $zuoze_xinxi)
		f.$anquan.append($div_zuozexinxi)
		f.$div.append(f.$anquan)

		$input_x.on("click", function() { //删除
			$div_zuozexinxi.remove();
		});
	})
	//设置
	this.div_1_1.on("click", function() {
		$("#audio_1").css("display", "block");
		$('#muics_qd').on("click", function() {
			$("#audio_1").css("display", "none");
			console.log(quanju_name, quanju_money);
		});
	})
	//返回
	this.div_1_2.on("click", function() {
		if(confirm("确认返回吗")) {
			callback("注册");
		}
	})
	this.div_2_3.on("click", function() {
		callback("商城");
	})
	this.div_2_1.on('click', function() {
		callback("地图");
	})

}