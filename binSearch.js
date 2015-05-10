var nums = []; for(var i=0;i<100;++i){
   nums[i] = Math.floor(Math.random() * 101);
}

nums.sort(function(a, b){
	return a - b;
});
console.log(nums);

var val = 40;

var retVal = binSearch(nums, val); 
if (retVal >= 0) {
  	console.log("Found " + val + " at position " + retVal);
}
else {
	console.log(val + " is not in array.");
}

function binSearch(arr, data) {
	var upperBound = arr.length-1; 
	var lowerBound = 0;
	while (lowerBound <= upperBound) {
		var mid = Math.floor((upperBound + lowerBound) / 2); 
		if (arr[mid] < data) {
			lowerBound = mid + 1;
		} else if (arr[mid] > data) { 
			upperBound = mid - 1;
		} else {
			return mid; 
		}
	}
	return -1; 
}