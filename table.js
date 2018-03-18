//method that print
function printTimes(number){
	var count=1;
	while(count <= 10){
		var result= number*count;
		console.log(number + "x" + count + "=" + result);
		count++;
	}
}