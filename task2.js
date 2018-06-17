var a=process.argv[2].split("");
var b=process.argv[3].split("");


var left_shift=0;
var right_shift=0;
var f=true;

function Comparison(mas1, mas2){
	for (var i=0;i<=mas1.length-1;i++){
		if (mas1[i]!=mas2[i]) {
			f=false;
			break;
		}
	}
	return f;
}

function LeftShift(mas){
	var t=mas[0];
	for(var i=0;i<=mas.length-2;i++){
		mas[i]=mas[i+1];
	}
	mas[mas.length-1]=t;
	return mas;
}

function RightShift(mas){
	var t=mas[mas.length-1];
	for(var i=mas.length-1;i>0;i--){
		mas[i]=mas[i-1];
	}
	mas[0]=t;
	return mas;
}

if (Comparison(a,b)==false){
	new_a=process.argv[2].split("");

	do{
		new_a=LeftShift(new_a);
		left_shift++;
		f=true;
		if(left_shift>new_a.length-1){
			left_shift=-1;
			break;
		}
	} while(Comparison(new_a,b)==false);

	new_a=process.argv[2].split("");

	do{
		new_a=RightShift(new_a);
		right_shift++;
		f=true;
		if(right_shift>new_a.length-1){
			right_shift=-1;
			break;
		}
	} while(Comparison(new_a,b)==false);
}
process.stdout.write(Math.min(left_shift,right_shift));
