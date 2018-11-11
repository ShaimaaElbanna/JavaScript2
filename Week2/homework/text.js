//Assignment: Your friend Gudrun owns a "livs" kiosk. She needs help avoiding food waste and financial loss.
// Write a Javascript function which, given a list of items sorts them by 1) best before date (ascending) and 2)
// price (descending). In other words, the item with the earliest best before date first, 
//and in the case of same date, higher price first.
// If items have bot equal best before date and price, 
//their order does not matter.
//The input list is given as a text string, in a JSON format 
//demonstrated by this example:
let list = [
  {
    "product": "egg 1L carton",
    "best_before": "2018-10-04",
    "price": 70.5
  },
  {
    "product": "orange 1L carton",
    "best_before": "2018-10-20",
    "price": 15.5
  },
  {
    "product": "Milk 1L carton",
    "best_before": "2018-10-04",
    "price": 15.5
  },
  {
    "product": "Milk 1L carton",
    "best_before": "2018-10-04",
    "price": 15.5
  },
  {
    "product": "Eggs 12pcs",
    "best_before": "2018-10-04",
    "price": 35.0
  },
  {
    "product": "Swedish meatballs",
    "best_before": "2018-10-25",
    "price": 22.0
  }
]

let newList = list.sort(function(a, b) {
  return parseFloat(a.best_before) - parseFloat(b.best_before);
});

//list.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
console.log(newList)


//newList2 = JSON.parse(list)
function custom_sort(a, b) {
    return new Date(a.best_before).getTime() - new Date(b.best_before).getTime() || a["price"] - b["price"];
}


function Sort(list){
let newList = list.sort(custom_sort);
console.log(newList);
}


Sort(list);

//The function should return a text string containing the sorted list,
//in the same format as the input. You can assume that the input is always valid and in the same format, 
//and its length isn't more than a few hundreds items. Only "vanilla" Javascript is allowed, ie. no external libraries.
