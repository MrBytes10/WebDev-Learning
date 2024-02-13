..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]

..]]]]]]]]]]]]]]]]..Functions..]]]]]]]]]]]]]]]
- A function is a block of code designed to perform a particular task.
- For example, our app can have functions like login(), logout(), convert(), etc.
- The purpose of a function is to create it once and call it multiple times when needed to perform particular tasks.

..]]]]]]]]]]]]]]]]..Defining a Function ..]]]]]]]]]]]]]]]
Defining a Function
- To define a function, use the function keyword, followed by a name, followed by a set of parentheses ().
- The code to be executed by the function is placed inside curly brackets {}.
    CODE SYNTAX:
        function name() {
        //code to be executed
        }

..]]]]]]]]]]]]]]]].. QUIZ:..]]]]]]]]]]]]]]]
- True or False: A function can be used only once in the program.
True
False ==============

..]]]]]]]]]]]]]]]]..create a function called login which outputs a simple message. ..]]]]]]]]]]]]]]]
- Let's create a function called login which outputs a simple message.
    CODE:
        function login() {
        console.log("Hi!");
        }
NOTE:- Do not forget the parentheses after the function name.

..]]]]]]]]]]]]]]]]..QUIZ:-Fill in the blanks to create a function named test. ..]]]]]]]]]]]]]]]
    Code answer:
        function test() {
            // some code
        }

..]]]]]]]]]]]]]]]]..Calling a Function in Js..]]]]]]]]]]]]]]]
Calling a Function
- After defining our function, we can call it in our program as many times as we want.
- To call a function, start with the name of the function, then follow it with parentheses. 
- Let's call our login() function twice:
CODE PLAYGROUND: JS
    login();
    login();
Click to run, and the answer is 2 "Hi!" messages will be printed in the console:
===AN EXPLAINED ANSWER:.........................................................................
- Here is the code to define the login() function and call it twice:
            CODE: 
                // Define the function
                function login() {
                console.log("Hi!"); 
                }
                // Call the function twice
                login();
                login(); 
/*
    - To define the login() function, we use the `function` keyword followed by the name `login`, parentheses `()`,
    and curly braces `{}` with the function code inside.
    - Then to call the function, we simply type the name `login()` with parentheses. This will execute the 
    code inside the function.
    - I called it twice by writing `login();` on two separate lines. So this will print "Hi!" to the console two times.
*/


..]]]]]]]]]]]]]]]]..   QUIZ:-- ..]]]]]]]]]]]]]]]
- Fill in the required symbols to call the start() function.
    start ();

..]]]]]]]]]]]]]]]]..Lesson Takeaways..]]]]]]]]]]]]]]]
Lesson Takeaways
Great job! Here are the main points to remember when defining your own methods:
        💡methods are reusable, we define them once and can call them multiple times
        💡to define a function, use the function keyword, followed by a name, followed by a set of parentheses ()
        💡to call a method, use its name, followed by parentheses
In the next lesson, we will learn how to pass parameters to functions.

widgetImg
Welcome, Sololearner!
Redesign the given function so that it will take the given input as the name of the user and output the welcome message with it.
XP+5
Practice

..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
Here is the code to redesign the function to take an input parameter for the user's name:
CODE:-
    // Original function
    function welcome() {
    console.log("Welcome guest!");
    }
        // Redesigned function
        function welcome(name) {
        console.log("Welcome " + name + "!");  
        }
        // Call the function
        welcome("John"); 
/*
The key changes:
    - Define the function with a parameter - `function welcome(name)` 
    - Use that parameter inside the function body to customize the message
    - Pass the actual name value when calling the function - `welcome("John");`
This allows us to reuse the `welcome()` function for any name input!
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