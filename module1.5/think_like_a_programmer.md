# Programming 101

## Why program?
Programming allows us to define the behavior of a computer. We can write up a series of steps or instructions which we would like the computer to perform and when the computer follows these steps it will perform the function that we want it to do.

  * Perform calculations
  * Save and retrieve data
  * Interact with a user

## Computer languages
Computers unfortunately do not speak or understand English. They use languages that are much more limited in vocabulary and more precise so there is no ambiguity in the instructions

  * Machine language
Native language of a computer. Written in binary (a series of 1's and 0's). While it is the only language really understood by a computer, it is not at all intelligible to the average human being.
  * Assembly code
Slightly better than machine language as far as human comprehension. There is a one-for-one correspondance between instructions in assembly and instructions in machine language. Still a very hard-core method of programming.
  * Compiled high-level code
Compiled languages are much easier to read and write for people. In order for the computer to understand the commands, they must first be compiled, which is computer-speak for translated into machine language. Examples of compiled languages include C++, Java, Pascal, Fortran. Once a program has been compiled into a particular machine language, that program can only run on the type of machine for which it was compiled.
  * Interpreted high-level code
Like compiled languages, interpreted code is also easier to read and write for people. Unlike compiled code, interpreted code, or scripts, are not translated into machine language until they are actually running. This means that scripts can be written to run on a broad spectrum of machines. Most web programs are written in scripting languages such as Javascript, Ruby, PHP.

## Programming for the Web
Programming is used to control a computer's behavior and is used widely in web development.
  * Control interaction with the user - menus, image scrollers, slidebars
  * Process data received from the user
  * Generate dynamic web pages
  * Implement web applications

## Server-side Programming
  * Languages - PHP, Ruby, Perl, ASP.Net
  * Database driven
  * E-Commerce, User logins, Web applications

## Client-side Programming
  * Language - Javascript (jquery)
  * Browser based
  * Handles interactions with user, animations, UI/UX

## What do programs look like
```
function toCelcius(f) {
    return (5/9) * (f-32);
}

document.getElementById("demo").innerHTML = toCelcius(32);
```

## Important things to remember when writing programs
  * Computers are dumb - they don't "know" anything. They will only do exactly what they are told
  * Each task must be broken into the smallest possible steps
  * Each step is executed one at a time in sequence
  * Programs store information in variables 
  * Small steps can be grouped together to form larger tasks called functions
  * Steps can be repeated over and over again using loops
  * Instructions can be optionally performed based on certain conditions

## Useful techniques for designing programs
  * [Flowcharts](IntroductionToFlowcharts.pdf)
  * Psuedocode - Check out this [handy psuedocode compiler](http://www.hendersontech.com/?page_id=33)

## Practice Thinking Like A Programmer
  * [Lightbot](http://light-bot.com/hocflash.html)
  * [Scratch](http://scratch.mit.edu)

Next section [Flowcharts](IntroductionToFlowcharts.pdf)
