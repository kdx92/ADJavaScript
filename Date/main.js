//Date()是日期对象，是一个构造函数，必须使用new来调用创建我们的日期对象
var arr = new Array(); //创建一个数组对象

var obj = new Object(); //创建一个对象实例

var date = new Date(); //没有参数，返回当前系统的时间

console.log(date); //Tue Jan 19 2021 11:22:04 GMT+0800 (中国标准时间)

//常用参数
var date1 = new Date(2019, 10, 1);

console.log(date1); //Fri Nov 01 2019 00:00:00 GMT+0800 (中国标准时间)

var date2 = new Date('2019-10-1 8:8:8');

console.log(date2); //Tue Oct 01 2019 08:08:08 GMT+0800 (中国标准时间)

var date = new Date();

console.log(date.getFullYear()); 

console.log(date.getMonth() + 1); // (0-11)

console.log(date.getDate()); //日期

console.log(date.getDay()); //周几 星期日是0，星期一是1

var year = date.getFullYear();

var month = date.getMonth() + 1;

var dates = date.getDate();

var arr = ['星期日', '星期一', '星期二', '星期三', '星期四','星期五','星期六'];

var day = date.getDay();

console.log('今天是:' + year + '年' + month + '月' + dates + '日 ' + arr[day]);