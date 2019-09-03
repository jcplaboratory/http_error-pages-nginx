function countdown(remaining) {
            if(remaining <= 0)
		        window.history.back();
		        document.getElementById('countdown').innerHTML = remaining;
		    	setTimeout(function(){ countdown(remaining - 1); }, 1000);
            }