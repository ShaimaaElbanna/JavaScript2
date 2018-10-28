'use strict';

 window.onload = function() {
  //2.1
  const favBooks = [
    "utopia","azazil","eat_pray_and_love","safary","ma_wara_eltabea","land_of_darkness","before_sun_rise",
    "elsnga","murder_on_the_orient_express","harry_potter_and_the_deathly_hallows"
  ];
  // Replace with your own code
  //console.log(favBooks);
//console.log(favBooks.length);

//2.3
/*
    let ul = document.createElement('ul');
    document.getElementById('myList').appendChild(ul);

    favBooks.forEach(function(favBooks){
      let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML += favBooks;
    });
  */
  
//2.4 Make an object (not an array!) containing information for each book. 
//Each property of this object should be another (i.e., nested) object with the book ID you thought up in step 
//2.1 as a key, and at least the following properties: title, language and author.
  
let booksInfo = {
    id1 : {
      "title" : "Murder on the Orient Express",
      "language" : "English",
      "author" : "Agatha Christie"
    },

    id2 : {
      "title" : "Utopia",
      "language" : "Arabic",
      "author" : "Ahmed Khaled Tawfik"
    },

    id3 : {
      "title" : "Harry Potter and the Deathly Hallows",
      "language" : "English",
      "author" : "J. K. Rowling"
    },

    id4 : {
      "title" : "Azazeel",
      "language" : "Arabic",
      "author" : "Yousef Zidan"
    },
    id5: {
      "title" : "Eat pray and love",
      "language" : "English",
      "author" : "Elizabeth Gilbert"
    },

    id6: {
      "title" : "Safari",
      "language" : "Arabic",
      "author" : "Ahmed Khaled Tawfik"
    },

    id7 : {
      "title" : "Ma wara eltabea",
      "language" : "Arabic",
      "author" : "Ahmed Khaled Tawfik"
    },

    id8 : {
      "title" : "In the rat lane",
      "language" : "Arabic",
      "author" : "Ahmed Khaled Tawfik"
    },

    id9 : {
      "title" : "Before Sunrise",
      "language" : "English",
      "author" : "Richard Linklater"
    },

    id10 : {
      "title" : "Elsnga",
      "language" : "Arabic",
      "author" : "Ahmed Khaled Tawfik"
    },
  }

let booksImg = {
  id1 : {
    "source" : "1.jpg"
  },

  id2 : {
    "source" : "utopia.jpg"
  },

  id3 : {
    "source" : "3.jpg"
  },

  id4 : {
    "source" : "4.jpg"
  },

  id5 : {
    "source" : "eat pray and love.jpg"
  },

  id6 : {
    "source" : "Safari.png"
  },

  id7 : {
    "source" : "download.jpg"
  },

  id8 : {
    "source" : "6.jpg"
  },

  id9 : {
    "source" : "7.jpg"
  },

  id10 : {
    "source" : "8.jpg" 
  }
}
//console.log(booksInfo);

  //2.5 Now change the function from step 2.3 that you used to display the book ID's in a list to take the actual
// information about the book from the object and display that. 
  //Make sure you choose the correct HTML elements for each piece of info, for instance, a heading for the title.

function booksList (){
  let booksListDiv = document.getElementById("booksListDiv");
  let ul = document.createElement("ul");

  let booksInfoArr = Object.keys(booksInfo);
  let booksImgArr = Object.keys(booksImg);

  for (let i = 0; i < booksInfoArr.length; i++){
    let li = document.createElement('li');
    let h1 = document.createElement('h1');
    let h3 = document.createElement('h3');
    let h4 = document.createElement('h4');
    let img = document.createElement("img");
    
    let bookId = booksInfoArr[i];
    const myBook = booksInfo[bookId];

    let bookidimg = booksImgArr[i];
    const myBookImg = booksImg [bookidimg];

    h1.innerHTML += myBook.title;
    h3.innerHTML += myBook.author;
    h4.innerHTML += myBook.language;
    img. src = myBookImg["source"];

    
    li.appendChild(h1);
    li.appendChild(h3);
    li.appendChild(h4);
    li.appendChild(img);

     
    ul.appendChild(li); 
    booksListDiv.appendChild(ul);  
  

  }
 };

 booksList()
}
