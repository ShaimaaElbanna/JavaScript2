'use strict';

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];

const tasks = monday.concat(tuesday);

// Add your code here

//Map the tasks to durations in hours.

tasks.map(tasks => tasks.duration /= 60);

//Filter out everything that took less than two hours (i.e., remove from the collection)
let durationAfterFilter = tasks.filter(task => task.duration >= 2);
//console.log(durationAfterFilter) ;


//Multiply the each duration by a per-hour rate for billing 
//(you can decide yourself what Maartje should earn per hour) and sum it all up $5/hour 

durationAfterFilter.map(tasks => tasks.duration *= 5)
let billing  =  durationAfterFilter.map(task => task.duration)
let finalBilling = billing.reduce((x , y) => x + y);
console.log("this is the new array")
console.log(finalBilling);

//Output a formatted Euro amount, rounded to Euro cents, e.g: € 12.34.
let priceInEuro = "€" + (finalBilling * .88).toFixed(2)
console.log(priceInEuro);

//Choose variable and parameters names that most accurately describe 
//their contents or purpose. When naming an array, use a plural form,
//e.g. durations. For a single item, use a singular form, e.g. duration.
// For details, see Naming Conventions.
//Don't forget to use =>.
