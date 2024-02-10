
/* ..]]]]]]]]]]]]]]]]..The break statement..]]]]]]]]]]]]]]]
- Imagine you have 10 boxes and there is a ball in one of them. If you find it in the 5th box, 
you don't need to check the other 5 boxes, right? After getting the ball you will just stop searching because
you've already gotten what you need.
- The break statement does the same thing in the switch statement. 
It stops the execution of other cases when there is a match and the program just goes out from 
the switch statement. CODE PLAYGROUND: JS */

                let choice = 2;
            switch(choice){
            case 1:
                console.log("Sports");
                break;
            case 2://match
                console.log("Business");
                break;//stop
            case 3:
                console.log("Technology");
                break;
            }