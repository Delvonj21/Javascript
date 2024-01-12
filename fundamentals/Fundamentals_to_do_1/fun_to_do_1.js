// Fundamentals To Do 1
// OK Ninjas, use your new knowledge. Can you solve these? Make a function for each algorithm!

  
// 1. Multiples of Three – but Not All
// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

function multi_of_three()
{
  for (let i = -300; i < 0; i += 3)
  {
    if (i === -3 || i === -6) 
    {
      continue;
    }
    console.log(i);
  }
}

multi_of_three();



 // 2. Printing Integers with While
// Print integers from 2000 to 5280, using a WHILE.

function int_using_while()
{
  let num = 2000;

  while (num <= 5280)
  {
    console.log(num)
    num ++;
  }
}

 

// 3. Counting, the Dojo Way
// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".

function count_dojo_way()
{
  for (let i = 1; i <= 100; i++)
  {
    if (i % 10 == 0)
    {
      console.log("Dojo");
    }
    else if (i % 5 == 0)
    {
      console.log("Coding");
    }
    else
    {
      console.log(i);
    }
  }
}

count_dojo_way();

 

// 4. Flexible Countdown
// Given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).


function flex_countdown(lowNum, highNum, mult)
{ 
  for (let i = highNum; i >= lowNum; i-= mult)
   {
    console.log(i);
   }
}

flex_countdown(2, 9, 3);