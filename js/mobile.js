/* Website template by freewebsitetemplates.com */
window.onload = function(){
			var getNavi = document.getElementById('menu');
			document.getElementById('mobile-navigation').onclick = function(){
				var a = getNavi.getAttribute('style');
				if(a){
					getNavi.removeAttribute('style');
					document.getElementById('mobile-navigation').style.backgroundImage='url(images/mobile/mobile-menu.png)';
				} else {
					getNavi.style.display='block';
					document.getElementById('mobile-navigation').style.backgroundImage='url(images/mobile/mobile-close.png)';
				}
			};
			var getElm = getNavi.getElementsByTagName("LI");
			for(var i=0;i<getElm.length;i++){
				if(getElm[i].children.length>1){
					var smenu = document.createElement("span");
					smenu.setAttribute("class","mobile-submenu");
					smenu.setAttribute("OnClick","submenu("+i+")");
					getElm[i].appendChild(smenu);
				};
			};
			submenu = function (i){
				var sub = getElm[i].children[1];
				var b = sub.getAttribute('style');
				if(b){
					sub.removeAttribute('style');
					getElm[i].lastChild.style.backgroundImage='url(images/mobile/mobile-expand.png)';
					getElm[i].lastChild.style.backgroundColor='rgba(255, 255, 255, 0.8)';
				} else {
					sub.style.display='block';
					getElm[i].lastChild.style.backgroundImage='url(images/mobile/mobile-collapse.png)';
					getElm[i].lastChild.style.backgroundColor='rgba(248, 98, 130, 0.8)';
				}
			};
		};


var countDownDate = new Date("Oct 29, 2022 09:0:0").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "expired";
  }
}, 1000);