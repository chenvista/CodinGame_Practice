/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var n = parseInt(readline()); // the number of temperatures to analyse
var temps = readline(); // the n temperatures expressed as integers ranging from -273 to 5526

// Write an action using print()
// To debug: printErr('Debug messages...');

//比较函数
function compare(a,b){    
    return a - b;    
}

//val如果在arr中，则返回true，否则不返回
function contains(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == val) {   
            return true;
        }
    }
}

//如果要分析的温度数为0则直接返回0
if (n === 0){
    print("0");
//否则则进行相关对比求值
}else{    
    //分隔得到的temps保存到列表对象中
    var b = temps.split(" "); 
    //创建新的列表用来保存取绝对值并从小到大排序
    var alist = [];
    for (var i=0;i<n;i++) {
        absv = Math.abs(b[i])
        alist.push(absv); 
    }
    //取绝对值后最小的值
    var minv =alist.sort(compare)[0];
    //判断进取绝对值之后的最小值在没取绝对值之前的列表中是否存在
    var r = contains(b,minv);
    //存在则直接打印值
    if(r === true){
        print(minv)
    //不存在则取负数
    }else{
        print("-"+minv); 
    }
}

