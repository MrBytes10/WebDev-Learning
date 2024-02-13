
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]

..]]]]]]]]]]]]]]]]..Returning from functions ..]]]]]]]]]]]]]]]
Returning from functions
- The methods we have seen so far output their result.
- In some cases, we do not need to output the result but need to assign it to a variable, 
  to work with it in our program.
- In these cases, we need our method to return the result value:
    js CODE:
        function add(x,y){
        return x+y;
        }
    Click to run

..]]]]]]]]]]]]]]]]..QUIZ:-The return statement; ..]]]]]]]]]]]]]]]
CHOICES: 
    outputs the result
    returns the resulted value which can be used throughout the program ===========
    returns to the previous lane of the code

..]]]]]]]]]]]]..We can use our function and assign the result to a variable:..]]]]]]]]]]]]]]]
Returning from Functions
- Now we can use our function and assign the result to a variable:
    CODE PLAYGROUND: JS
        function add(x,y){
        return x+y;
        }
        let result = add(5,6);
        console.log(result);
    Click to run
- Returning is useful when you don't need to output the result of the function, but need to use it in your code.
EXPLANATION: 
    If we run the code:
        function add(x, y) {
        return x + y;
        }

        let result = add(5, 6);
        console.log(result);
        //The output printed to the console will be:11
/*
    The explanation is:
        - The `add()` function takes two parameters, `x` and `y`
        - Inside the function, we use the `return` keyword to return the sum of `x + y` back to where the function 
        was called
        - We call `add(5, 6)`, passing 5 and 6 as the arguments
        - This assigns the returned value from `add()` to the `result` variable 
        - Therefore, `result` now contains the value 11 (5 + 6)
        - When we console.log(`result`), it prints 11
    So the key point is that `return x + y` allows a function to return a value, which we then store in the `result` 
    variable and print out.
*/


..]]]]]]]]]]]]]]]]..QUIZ:-- ..]]]]]]]]]]]]]]]
- Drag and drop to return the result from the avg function, assign it to the res variable and output it to the console.
CODE:
    function avg(x,y,z){
    return (x+y+z)/3;
    }
    let res=avg(5,6,7);
    console.log(res);
    /*
        To explain:
    - The avg() function calculates the average of three numbers
    - It uses return to return the calculated average value back to the calling code
    - We call avg(5, 6, 7) and assign the returned result to the res variable
    - Finally, we print out the res variable with console.log() to output the average value
    - Using return allows us to assign the value that a function calculates to a variable, store it, 
    and use it elsewhere in our code.
    */

..]]]]]]]]]]]]]]]]..The return statement ends the function execution ..]]]]]]]]]]]]]]]
- The return statement ends the function execution, which means that everything after it inside the function will be ignored - the program just goes on from the scope of the function.
    JS CODE:
            function add(x,y){
                return x+y;
                //the code below will be ignored
                console.log('Done!');
            }
    Click to run

..]]]]]]]]]]]]]]]]..Fill in the blanks to calculate and return the multiplication of x and y values. ..]]]]]]]]]]]]]]]
      The js code:
            function multiply(x,y){
                return x*y;
            }

..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
Lesson Takeaways
You did it Amazing job!Here is the summary:
    💡the return statement ends function execution and returns the resulting value
    💡you can use that value throughout the program, which is the advantage of the return statement
    💡within the scope of function everything after the return statement will be ignored
Your last Code Coach exercise is waiting for you below. See you in your next course!

Practice:
Area Of a Rectangle
Calculate and return the area of the rectangle.

Practice
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
- Here is the code to complete the practice challenge of writing a function to calculate and return the 
  area of a rectangle:
        // Define function to calculate rectangle area
        function calculateArea(width, height) {
        // Calculate area
        let area = width * height;
        // Return the area value
        return area; 
        }
        // Get the area value by calling the function
        let rectArea = calculateArea(5, 3);
        // Print the returned area value 
        console.log(rectArea); 
/*
The key points:
    - Define parameters for width and height  
    - Calculate area by multiplying width * height
    - Return area value to be used in calling code
    - Call function to store returned area value 
    - Print the area value
Using return allows us to take the result of the function calculation and use it programmatically.
*/


..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]