//获得Date总的毫秒数，距离1970年1月1日过了多少毫秒数——时间（可以使用时间戳加密）

//1.通过valueOf() getTime()
var date = new Date();
console.log(date.valueOf()); //1611121836401
console.log(date.getTime()); //1611121836401

//2.化简写法 最常用
var date1 = +new Date();
console.log(date1); //1611121836402

//3.H5新增的获得总的毫秒数，会有不兼容的情况发生
console.log(Date.now()); ////1611121836402
