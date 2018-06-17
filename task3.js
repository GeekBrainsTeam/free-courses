var t1=+process.argv[2];
var t2=+process.argv[3];
var total=t1+t2;
var hrs, min, sec;
var output="";

function End(t) {
    t = t % 100;
    if(t >= 10 && t <= 20){
        return end = 2;
    }else if(((t % 10) >= 5) || ((t % 10) == 0)){
        return end = 2;
    }else if((t % 10) == 1){
        return end = 0;
    }else {
    	return end = 1;
    }
}

	if (total >= 3600) {
		hrs = Math.floor(total / 3600);
		total -= (hrs * 3600);
		if (End(hrs) == 2){
			output = output + hrs + " часов ";
		}else if (End(hrs) == 0){
			output = output + hrs + " чаc ";
		}else {
			output = output + hrs + " чаcа ";
		}

	}
	if (total >= 60) {
		min = Math.floor(total / 60);
		total -= (min * 60);
		if (End(min) == 2){
			output = output + min + " минут ";
		}else if (End(min) == 0){
			output = output + min + " минута ";
		}else {
			output = output + min + " минуты ";
		}
	}
	if (total>0) {
		sec=total;
		if (End(sec) == 2){
			output = output + sec + " секунд ";
		}else if (End(sec) == 0){
			output = output + sec + " секунда ";
		}else {
			output = output + sec + " секунды ";
		}
	}
} 

process.stdout.write(output);
