function Loand(callback) {
	this.$div_loand = $('<div id="loand"></div>') //大div
	this.$loand_anquan = $('<div id="loand_anquan"></div>'); //安全框
	this.$loand_car = $('<div id="loand_car"></div>'); //车
	this.$loand_tiao = $('<div id="loand_tiao"></div>') //进度调框
	this.$loand_power = $('<div id="loand_power"></div>') //能量条
	this.$loand_tiao.append(this.$loand_power);
	this.$loand_anquan.append(this.$loand_car, this.$loand_tiao);
	this.$div_loand.append(this.$loand_anquan);

	//跳转主页面
	setTimeout(function() {
		callback("主页面");
	}, 5000)

}