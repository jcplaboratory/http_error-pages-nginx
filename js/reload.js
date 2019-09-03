function countdown(remaining) {
            if(remaining <= 0)
		        location.reload(true);
		        document.getElementById('countdown').innerHTML = remaining;
		    	setTimeout(function(){ countdown(remaining - 1); }, 1000);
            }