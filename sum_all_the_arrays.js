function arraySum(arr) {
  let total = 0;
  for(var i = 0; i < arr.length; i++) {
    if(typeof arr[i] === 'number'){
      total += arr[i]; 
    } else if(typeof arr[i] == 'object') {
      total += arraySum(arr[i]);
    }
  }
  return total
}
