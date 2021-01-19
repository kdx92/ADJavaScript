var date = new Date();

console.log(date.getHours()); 

console.log(date.getMinutes());

console.log(date.getSeconds());

//封装一个函数，00:00:00

function getTimer() {

  var time = new Date();

  var h = time.getHours();

  h = h < 10 ? '0' + h : h;

  var m = time.getMinutes();

  m = m < 10 ? '0' + m : m;

  var s = time.getSeconds();

  s = s < 10 ? '0' + s : s;

  return h + ':' + m + ':' + s;
}

console.log(getTimer());