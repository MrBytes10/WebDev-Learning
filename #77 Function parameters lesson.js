..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]

..]]]]]]]]]]]]]]]]..Parameters ..]]]]]]]]]]]]]]]
- Functions can have parameters.
- The parameters are defined in the parentheses and can be used like variables in the function.
- For example, let's add a user parameter to our login() function:
    CODE:
        function login(user) {
        console.log("Hi, "+user);
        }


..]]]]]]]]]]]]]]]]..Fill in the blanks to create a function that takes a number as its parameter and outputs its double. ..]]]]]]]]]]]]]]]
CODE:
    function double(num) {  
        console.log(num*2);
    }

..]]]]]]]]]]]]]]]]..When calling the function, we need to pass it a value for the parameter inside the parentheses. ..]]]]]]]]]]]]]]]
- Now, when calling the function, we need to pass it a value for the parameter inside the parentheses.
        CODE PLAYGROUND: JS
            login("james");
            login("bob");
        Click to run
- This way, we can call our function with different parameters and generate different results based on them.
- Functions can take multiple parameters. To do so, we simply need to separate them using commas,
 for example, login(user, passcode).
==..............................................................................................
A BETTER EXAMPLE: 
- Here is an example function that takes multiple parameters and uses them:
        // Define function with multiple parameters 
        function registerUser(firstName, lastName, username, email) {
        // Display registration confirmation message using parameters
        console.log("User registration successful!");
        console.log("Details:");
        console.log("First Name: " + firstName);
        console.log("Last Name: " + lastName);  
        console.log("Username: " + username);
        console.log("Email: " + email);
        }
        // Call function passing arguments for all parameters
        registerUser("John", "Doe", "john123", "john@email.com");

        The answer is: .................................................................
    User registration successful!
    Details:
    First Name: John
    Last Name: Doe
    Username: john123
    Email: john@email.com
/*
The key points:
    - Define multiple parameters separated by commas in the function definition 
    - Use the parameter variables inside the function body
    - Pass arguments for each parameter when calling the function, in the same order
This allows the function to accept multiple inputs and use them dynamically in the function body.
*/

..]]]]]]]]]]]]]]]]..Fill in the blanks to create a function outputting the sum of the two parameters. ..]]]]]]]]]]]]]]]
    Code:
        function add(x,y){ 
        console.log(x+y);
        }

..]]]]]]]]]]]]]]]]..You can use variables created outside the function as parameters:..]]]]]]]]]]]]]]]
- You can use variables created outside the function as parameters:
    js CODE:
        function login(user) {
        console.log("Hi, "+user);
        }
        let myUser = "Bob";
        login(myUser);
    Click to run, and the answer is: Hi Blob.
..The Same explained: 
- If we run the code snippet you provided:
        function login(user) {
        console.log("Hi, "+user); 
        }
        let myUser = "Bob";
        login(myUser);

// The output will be: Hi, Bob
Here is the explanation:
/*
    - We first define a `login()` function that takes one parameter called `user`
    - Inside the function, we print "Hi, " plus the `user` value to the console
    - Outside the function, we create a variable called `myUser` and set it to "Bob"  
    - When we call `login(myUser)`, we pass the `myUser` variable as the argument for the `user` parameter
    - So inside `login()`, `user` will be equal to "Bob"
    - Therefore, it prints `"Hi, Bob"`
    So this demonstrates how we can use external variables as arguments when calling a function. 
    The value gets passed in and used inside the function body.
*/

..]]]]]]]]]]]]]]]].. ANOTHER EXAMPLE of using variables created outside the function as parameters::..]]]]]]]]]]]]]]]
- Here is another example to demonstrate passing variables as arguments to a function:
    CODE:
        // Function to display a personalized message
        function greet(name, age) {
        console.log("Hello " + name + ", you are " + age + " years old!");
        }
        // Variables defined outside the function 
        let personName = "Sarah";
        let personAge = 23;
        // Call the function, passing the variables as arguments
        greet(personName, personAge); 
        // Call again with different arguments
        greet("Michael", 30);
/*
In this example:
    - The `greet()` function expects two parameters - `name` and `age` 
    - We define two variables outside the function - `personName` and `personAge`
    - In the first function call, we pass those variables as the arguments
    - In the second call, we pass literal string and number values directly instead
= This shows that a function's parameters act as placeholders for whatever values you pass in when calling it. 
This allows flexibility to call the same function with different data.
= Within the function, you can then utilize those parameters without worrying about how they are created or what values are ultimately passed.
*/
Let me know if this helps explain the concept further! Please provide another example or let me know any other questions.

..]]]]]]]]]]]]]]]]..Function for giving Discount when buying/billing..]]]]]]]]]]]]]]]
Parameters
- Again, let's remember our discount case - if the total amount is equal to or above 1500 it will be discounted by 15%.
- So as to not write the same code multiple times, we can just create a function that will perform the same calculation, then call it on each customer.
- Here it is:
     js CODE:
            function discount(purchase){
                if (purchase>=1500){
                    purchase*=0.85;
                }
                console.log(purchase);
            }
            discount(1900);//discount
            discount(1200);//no discount
        Click to run, The output will be:
        1615
        1200
    /*
        Let's break this down:
    - We define a discount() function that takes one parameter called purchase
    - Inside the function, we check if purchase is greater than or equal to 1500
    - If so, we give a 15% discount by multiplying the purchase amount by 0.85
    - We print out the final purchase amount with console.log()
    - When we call with discount(1900), 1900 is >= 1500, so 1900 * 0.85 = 1615
        
        - When we call with discount(1200), 1200 is < 1500, so no discount is given. 1200 is printed.
        - So this function lets us easily apply the discount logic to any purchase amount. 
        We get 1615 and 1200 printed based on whether the values passed meet the discount criteria or not.
        
        Let me know if this helps explain the output!
    */

..]]]]]]]]]]]]]]]]..Lesson Takeaways..]]]]]]]]]]]]]]]
Great job! Here is our summary:
    💡functions can have parameters, which can be used in their code
    💡the parameters are defined in the parentheses
    💡multiple parameters need to be separated by commas
    💡when calling a method, you need to provide its parameters in the same order, as defined
You will learn how to return values in the next lesson.
        PRACTICE:-
        Feet to Inches Converter
        You need to make a method that converts a foot value to inches.
        XP+5
        Practice

..]]]]]]]]]]]]]]]].. ANSWER TO THE PRACTICE..]]]]]]]]]]]]]]]
Here is the code to complete the practice challenge of creating a feetToInches() method to convert from feet to inches:
CODE:
    // Define feetToInches function with one parameter for feet 
    function feetToInches(feet) {
    // Calculate inches value
    let inches = feet * 12;
    // Print output conversion
    console.log(feet + "feet equals to" + inches + "inches.");
    }
    // Call function to convert 3 feet 
    feetToInches(3);
/*
    The key points:
        - Define one parameter called `feet` to take input feet value
        - Multiply feet by 12 to calculate inches (1 foot = 12 inches)
        - Print conversion message using string concatenation 
        - Call function to convert 3 feet and print result
*/
..]]]]]]]]]]]]]]]].......END TO THE PRACTICE ..]]]]]]]]]]]]]]]

..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]


- Here is another code to complete the practice challenge of creating a feetToInches() converter method:
        CODE: 
            // Define feetToInches function to take feet as a parameter
            function feetToInches(feet) {
            // Calculate inches from feet by multiplying by 12  
            let inches = feet * 12;  
            // Return the inches
            return inches; 
            }
            // Example usages
            let totalInches = feetToInches(5);
            console.log(totalInches); // Logs 60
            totalInches = feetToInches(10);
            console.log(totalInches); // Logs 120
/*
    The key points:
    - Define `feetToInches()` function with `feet` parameter 
    - Convert feet to inches by multiplying by 12
    - Use `return` to return calculated inches value
    - Call function while passing in feet values 
    - Store return value to calculate further or display

    Let me know if you have any other questions!
*/
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]