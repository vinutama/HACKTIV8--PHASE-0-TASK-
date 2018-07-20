var array = ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!']
var result = '';
function balikString(result) {
  for (var i = array.length - 1; i >= 0; i--) {
    result = result + array[i];
  }
  return result;
}

console.log(balikString(result));