function fibonacci(num) {
let num1 = 0;
	let num2 = 1;
	let numI;

	for(let i=2; i<num; i++){
		numI=num1+num2;
		num1=num2;
		num2=numI;
	}

	if(num==1){
		return num1;
	}

	if(num==2){
		return num2;
	}


	return numI;
	
}

module.exports = fibonacci;
