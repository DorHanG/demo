function MyRocker($div, callback) {
	var nx = 0;
	var ny = 0;
	var $cv = $("<canvas></canvas>");
	$div.append($cv)
	var self = this;
	$cv.css({
		"border-radius": "100px",
		"border": "2px sliod black",
		"background": "rgba(255,255,254,0.2)"
	});
	$cv[0].width = 150;
	$cv[0].height = 150;
	//context
	var ctx = $cv[0].getContext("2d");
	this.drawCircle = function(xx, yy) {
		ctx.beginPath();
		ctx.clearRect(0, 0, 150, 150);

		ctx.arc(75, 75, 75, 0, 2 * Math.PI);
		ctx.stroke();
		ctx.closePath();

		ctx.beginPath();
		ctx.fillStyle = "rgba(97,100,247,0.8)"
		ctx.arc(75 + xx, 75 + yy, 30, 0, 2 * Math.PI);
		ctx.fill();
		ctx.closePath();
	}
	this.drawCircle(0, 0);

	var bol = false; //not press
	$cv.on("mousedown", function(e) {
		e.preventDefault();
		bol = true;
	})

	$(document).on("mousemove", function(e) {
		e.preventDefault();
		if(bol) { //已经按下
			var mousex = e.clientX; //鼠标
			var mousey = e.clientY;
			//圆心
			var circlex = $cv.offset().left + 75;
			var circley = $cv.offset().top + 75;
			var mx = mousex - circlex; //mx  my  ml
			var my = mousey - circley;
			ml = Math.sqrt(mx * mx + my * my);

			if(ml + 30 > 75) { //园外
				var c = 75 - 30;
				nx = c * mx / ml;
				ny = c * my / ml;
			} else { //园内
				nx = mx;
				ny = my;
			}
			callback(nx, ny);
			self.drawCircle(nx, ny);

		}
	})

	$(document).on("mouseup", function() {
		bol = false;
		self.drawCircle(0, 0)

		callback(0, 0);
	})
}