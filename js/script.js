/******************************************
 * Nguyen Nguyen 300338267
 * CSIS 3380
 * AS1
*****************************************/

/*** 
 * `quotes` array 
***/
// Creating the empty quotes array and 5 empty quote objects, then add all five objects to the array 
let quotes = [];
let quote1 = {};
let quote2 = {};
let quote3 = {};
let quote4 = {};
let quote5 = {};
quotes.push(quote1,quote2,quote3,quote4,quote5);
let control = -1;

//Setting the properties for the 5 quote object
quote1.quote = "Success is not final, failure is not fatal: it is the courage to continue that counts.";
quote1.source = "Winston Churchill";

quote2.quote = "It is nothing to die; it is dreadful not to live.";
quote2.source = "Victor Hugo";
quote2.citation = "Les Miserables";

quote3.quote = "Great men are not born great, they grow great.";
quote3.source = "Mario Puzo";
quote3.year = "1972";

quote4.quote = "After all, tomorrow is another day!";
quote4.source = "Scarlett Ohara";
quote4.citation = "Gone With the Wind";
quote4.year = "1939";

quote5.quote = "The way to get started is to quit talking and begin doing.";
quote5.source = "Walt Disney";

//Testing the quotes array
console.log(quotes);

//Testing the getRandomQuote function
//console.log(getRandomQuote());

//Testing the printQuote function
//console.log(printQuote());




/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
    // 1. Create a variable that generates a random number
    // between zero and the last index in the `quotes` array
    let randomNumber = Math.floor(Math.random() * 5);
    
    //Using while loop and a control variable to make sure the randomQuote is not repeating with the previous
    while (randomNumber==control){
        randomNumber = Math.floor(Math.random() * 5);
    }
    control = randomNumber;

    // 2. Use the random number variable and bracket notation
    // to grab a random object from the `quotes` array, and
    // store it in a variable
    let randomQuote = quotes[randomNumber];
    
    // 3. Return the variable storing the random quote object
    return randomQuote;
}



/***
 * `printQuote` function
***/
function printQuote(){
    //call the getRandomQuote function and store the result in a variable
    let randomQuote = getRandomQuote();
    console.log(randomQuote);
    console.log(randomQuote.quote);
    console.log(randomQuote.source);

    //create the html tag for just the quote and the source
    let PtoHTML1 = `<p class="quote">` + randomQuote.quote + `</p>` + `<p class="source">` + randomQuote.source;

    //condition statements for the citation and year if exists
    if (randomQuote.hasOwnProperty('citation')) {
        PtoHTML1 = PtoHTML1 + `<span class="citation">` + randomQuote.citation + `</span>`;
        console.log(randomQuote.citation);
    }

    if (randomQuote.hasOwnProperty('year')) {
        PtoHTML1 = PtoHTML1 + `<span class="year">` + randomQuote.year + `</span>`;
        console.log(randomQuote.year);
    }

    //Concate the ending p tag
    PtoHTML1 = PtoHTML1 + `</p>`;
    console.log(PtoHTML1);

    //set the innerHTML of quoteBox to randomQuote result
    document.getElementById('quote-box').innerHTML = PtoHTML1;
}



/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById('load-quote').addEventListener("click",printQuote);