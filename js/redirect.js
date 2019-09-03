function countdown(remaining) {
	var	myCountdown;

            if(remaining <= 0) {
            	window.location.replace("http://jcplaboratory.org");
		       	clearTimeout(myCountdown);
            }else {
            	document.getElementById('countdown').innerHTML = remaining;
		    	myCountdown = setTimeout(function(){ countdown(remaining - 1); }, 1000);
            }
        }