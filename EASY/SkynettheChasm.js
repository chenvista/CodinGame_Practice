/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var road = parseInt(readline()); // the length of the road before the gap.
var gap = parseInt(readline()); // the length of the gap.
var platform = parseInt(readline()); // the length of the landing platform.

// game loop
while (true) {
    var speed = parseInt(readline()); // the motorbike's speed.
    var coordX = parseInt(readline()); // the position on the road of the motorbike.

    // Write an action using print()
    // To debug: printErr('Debug messages...');


    // A single line containing one of 4 keywords: SPEED, SLOW, JUMP, WAIT.
    //路分三段1：缝隙之前，2：缝隙之前的边缘，3：缝隙之后
    //要点：(控制好速度)跳的时候速度正好是gap+1，刚好跳过，跳过之后立马减速
    //控制速度
    //1：如果速度等于gap+1，则保持速度(wait)；
    //2:如果速度大于gap+1，立马减速（SLOW）；
    //3：如果小于gap+1，则加速(SPEED);
    if((speed+coordX) <= road){
        
        
   
        if (speed == (gap+1)){
            
            print('WAIT');
        }else if (speed > (gap+1)){
            print('SLOW');
            
        }else{
            
            print('SPEED');
        }
      
        
        
    }  else if((coordX)>= (road + gap)) {
        
        print('SLOW');
        
    } else {
        
          print('JUMP');
    }

    
 
}
