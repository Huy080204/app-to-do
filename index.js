function isEven(number) {
	return number % 2 == 0;
}

function isOdd(number) {
	return number % 2 !== 0;
}

module.exports = { isEven, isOdd };
