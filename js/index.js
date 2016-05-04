window.onload=function(){
	var topBtn=$(".top-cont-cd");
	var top=$(".top-cont li");
	topBtn.click(function(){
		top.slideToggle();
	})
	var user=$(".top-cont-cd1");
	//console.log(user)
	var center=$(".center");
	var login=$(".login");
	var centerT=$(".center-title");
	var centerF=$(".center-flight");
	var fix=$(".fix-login");
	var ab=$(".ab-login");
	var flag=false;
	user.click(function(){
		if(flag){
			login.animate({position:"static",width:"50%",margin:"0 auto",marginTop:"50%"});

			login.slideUp(function(){
				centerF.css({opacity:"1"});
				centerT.css({opacity:"1"});
				center.css({left:30});
				fix.css({height: "auto",width: "auto",position:"static"});
				ab.css({width:"1000px"});
			});
			return flag=false;
		}
		centerF.css({opacity:"0.1"});
		centerT.css({opacity:"0.1"});
		center.css({left:0});
		fix.css({height: "100%",width: "100%",position:"fixed",zIndex:"6666",top:"60px"});
		ab.css({width:"100%"});
		login.css({position:"absolute",width:"50%",margin:"0 auto",marginTop:"50%",outlineWidth:"1000px",outlineStyle:"solid",outlineColor:"rgba(0,0,0,0.6)",top:"-10%",right:"25%"});

		login.slideDown();
		flag=true;
	});
	/*.fix-login{*/
	/*!*height: 100%;*!*/
	/*!*width: 100%;*!*/
	/*}*/
};



