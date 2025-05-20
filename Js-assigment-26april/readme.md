Problem 1:
Think : For first console.log , the count increments and becomes 1.
For second statement ,the count increments and 2. Because the function expression is same.
But for third console.log , the count starts working from beginning i.e, 0 , Because the function expression is different.
Pitfall : We might think that the count is dependent on one another but they are actually independent.

Problem 2:
Think : I think the expected output is "Hello, Alice!"  
"Hello, Bob!" 
"Hello, Charlie!"
Pitfall: The output I thought and the output that has come are different because the var executes after last value of i.Var is function-scoped not block-scoped. We can fix it by using let keyword which is a block-scoped.


Section:2 
Part 1:
Think: When you try to access a variable before it's declared it says undefined. Var is function coped ,it can be accessed through out the function.There are two scopes for mysteryVariable one is local and the other one is global.
Your task:
Hoisting is a behaviour of Javascript where declarations are moved to the top before executing
Ex:
console.log(a);
var a=5;
console.log(a);
let a = 5;
1. After rewriting code and using let instead of var , it throws a reference error, that is because they are in Temporal Dead Zone(TDZ).
2. Hoisting with Var: It hoists the declaration to the top and is assigned as undefined so you won't get an error but you will an output as undefined.
Hoisting with let and const:It also can be hoisted but not initialized with anything , so they stay in a state called Temporal Dead Zone(TDZ), so when you access they throw an Reference error.

Part-2:
Think: this inside setTimeout refers to "Alice". The this keyword refers to current object that is being called.
Your task:
1.Because the function inside setTimeout function, the this doesn't refer to Alice. In greetDelayed() method, this refers to user, but in setTimeout(), this is determined by how it is called.
2.Using this in a variable helps in pointing to the correct object.
3.Arrow functions use lexical this binding which means they get this from scope where they are defined.

Part-3:
1.In Javascript, when we create a function inside another function ,the inner function can access outer function's variables, this is called Closure.
Closure helps in creating independent state without using global variables. Each time we call setupCounter() , we get a new independent counter with its own count.


Part-4:
Think: When a function is called with fewer arguments, the ones which are missing are assigned as undefined.
When a function is called with more arguments, the ones extra are usually ignored ,they don't cause any errors.
The '...rest' parameter allows a function to accept many arguments as an array.
Your Task:
1. Less arguments: The arguments missed are assigned as undefined.
More arguments: More arguments are usually ignored.
2. Rest parameter helps to take multiple arguments in form of array , which makes it easier to accept many arguments.
Syntax: function fn(...rest){
    <!-- array of arguments -->
}

