..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]

..]]]]]]]]]]]]]]]]..Variables..]]]]]]]]]]]]]]]
- Hey!👋 Happy to see you here, at the next step of your coding journey! 
- In apps, we usually need to store some values and work with them throughout the program to make accessing them much more convenient.
- We do this by using variables, which are containers for storing values.
- Variables are created using the let keyword:
        CODE: 
            let name;
name is the name of our variable.

..]]]]]]]]]]]]]]]]..Variables are ..]]]]]]]]]]]]]]]
CHOICES: 
    values
    containers for storing values ========
    functions

..]]]]]]]]]]]]]]]]..After creating the variable,we can give it a value. This is called initialization. ..]]]]]]]]]]]]]]]
Variables
- After creating the variable we can give it a value. This is called initialization.
- For example:
        let name;
        name = "James";
- Now the variable name has the value "James", which is text data.
- The equal sign = is used to assign a value to our variable.

..]]]]]]]]]]..Drag and drop to create a variable message and assign it the value "You are fantastic!". ..]]]]]]]]]]]]]]]
ANSWER: 
    let message;
    message="You are fantastic!";

..]]]]]]]]]]]]]]]]..You can also assign your variable a value during the creation: ..]]]]]]]]]]]]]]]
Variables
- JavaScript can make it even easier!
- You can also assign your variable a value during the creation:
    Js CODE: 
        let name = "James";
        let age = 42;
- Remember, that we need to enclose text values in quotes.

..]]]]]]]]]]]]]]]]..Declare a variable called score and assign to it the value 14. ..]]]]]]]]]]]]]]]
ANSWER:
let score=14;

..]]]]]]]]]]..After initializing a variable, we can output its value: ..]]]]]]]]]]]]]]]
Variables
- After initializing a variable, we can output its value:
    JS CODE:
        let name = "Augastine";
        console.log(name);
Click to run
- Open the Code Playground, modify the code to assign your name to the variable and output it.

..]]]]]]]]]]]]]]]]..QUIZ:-Create a variable called price, initialize it to 42, then output it to the console. ..]]]]]]]]]]]]]]]
ANSWER: 
    let price = 42;
    console.log(price);

..]]]]]]]]]]]]]]]]..Variables can change their value during the program.  ..]]]]]]]]]]]]]]]
Variables
- Variables can change their value during the program. That's why they are called variables 😀!
- For example:
    JS CODE:
        let age = 17;
        //after 1 year
        age = 18;
        console.log(age);
    Click to run
- Updating the value of a variable can be done as many times as needed.

..]]]]]]]]]]]]]]]]..QUIZ:-What is the output of this code?..]]]]]]]]]]]]]]]
CODE:
    let num = 5;
    num = 8;
    //num = 7;
    console.log(num);
CHOICES:
    5
    8=======
    7

..]]]]]]]]]]]]]]]]..In older versions of JavaScript, the var keyword was used instead of let, to declare variables: ..]]]]]]]]]]]]]]]
Variables
- In older versions of JavaScript, the var keyword was used instead of let, to declare variables:
    CODE PLAYGROUND: JS
        var name = 'James';
    Click to run
- let is the modern way of declaring variables and has a number of advantages over var.
- For example, var allows you to re-declare variables with the same name, while let results in an error, which makes the code safer.
- It is recommended to use let instead of var, when declaring variables.

..]]]]]]]]]]]]]]]]..QUIZ:-Which keyword is recommended to use when declaring variables? ..]]]]]]]]]]]]]]]
CODE: 
    let

..]]]]]]]]]]]]]]]]..Constants..]]]]]]]]]]]]]]]
- There can be cases when you need to tell the program that the variable can't change its value throughout the 
program. Here come constants!
- Constants are similar to variables and are declared using the const keyword:
- JS CODE:
    const color = 'red';
    console.log(color);
    color = 'yellow'; //this will result in error
Click to run
- Constants must have a value when declared and they cannot change their value.
- Constants are very useful. If you use const, it tells anyone looking at your code that this variable will 
never be assigned to a different value.

..]]]]]]]]]]]]]]]]..Create a constant named "message" and assign it the given text value. ..]]]]]]]]]]]]]]]
    CODE: 
        const message= "I'll reach my goals!";


..]]]]]]]]]]]]]]]]..Rules of Naming Variables ..]]]]]]]]]]]]]]]
- Let's talk about names.
- There are several naming rules that you need to follow in JavaScript:
    a. variable names must begin with a letter, an underscore _ or a dollar sign $
    b. variable names cannot contain spaces
    c. variable names can only contain letters, numbers, underscores, or dollar signs.
    d. variable names are case-sensitive, which means that, for example, Name and name variables are different
JS CODE:
    //results in error because of the *
    let name* = "James";
Click to run

..]]]]]]]]]]]]]]]]..Is the name of the given variable valid? ..]]]]]]]]]]]]]]]
    CODE: 
        let 1age = 15;
CHOICES:
    Yes
    No, the name can't start with a number =========

..]]]]]]]]]]]]]]]]..PRACTICE ..]]]]]]]]]]]]]]]
        Lesson Takeaways
        Fantastic job!🚀 Variables are in your coding arsenal!

        Let's summarize the stuff:

        💡variables are containers for storing values

        💡variables are created with the let keyword and can change their values

        💡constants are created with the const keyword. They are similar to variables, but can't change their values after initialization.

        What's next?
        In the next lesson, you will learn what the difference is between 5 and "5", and what is true and false in programming. Can you guess? Data types!

        widgetImg
        Area of Rectangle
        Complete the program to calculate the area of the given rectangle.
        XP
        +5
        Practice
..]]]]]]]]]]]]]]]]..PRACTICE ..]]]]]]]]]]]]]]]

..]]]]]]]]]]]]]]]]..START OF PRACTICE..]]]]]]]]]]]]]]]
        Area of Rectangle
         Problem:
        Variables
            - We have a rectangle with a length of 14 and a width of 8.
            - The given program should calculate and output the area of the rectangle, but the "width" variable is missing.

            Task
            - Complete the program by creating the "width" variable with the value of 8.
            - Use the let keyword to create the variable.

            ANSWER CODE: 
    //My code goes here
    let length=14;
    let width = 8;
    console.log(length*width);

..]]]]]]]]]]]]]]]]..END OF PRACTICE ..]]]]]]]]]]]]]]]

..]]]]]]]]]]]]]]]]..OTHER AI test ..]]]]]]]]]]]]]]]
- Drag and drop to output the value of variable future.
   CODE:
    future = "Coding";
    console.log(future);

- Choose the right statement:
    Variable names must begin with a number or a letter.
    Variable names must begin with a dot.
    Variable names must begin with a letter, an underscore or a dollar sign.    =============

- Fill in the blanks to create the variable fun, and assign the value "Learning JavaScript" to it.
    CODE: 
        let fun = "Learning JavaScript";

- Rearrange the symbols in the following order:
    Addition == +
    Multiplication== *
    Subtraction== -
    Division== /

-Which of the following can be variable names.
    Select 2 options.
    Select all correct answers.
    $Variable======
    _Variable======
    New Variable
    1Variable


..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]