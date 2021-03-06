/*
 * Create a list that holds all of your cards
 */
icons=["fa fa-diamond", "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-paper-plane-o", 
"fa fa-anchor", "fa fa-anchor", "fa fa-bolt", "fa fa-bolt", "fa fa-cube", "fa fa-cube",
 "fa fa-leaf", "fa fa-leaf", "fa fa-bicycle", "fa fa-bicycle", "fa fa-bomb", "fa fa-bomb" ]

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

//Cards container
const cardsContainer = document.querySelector(".deck");

//create some type of array that puts two of the selected cards and compares them
let flipUpCards = [];

//for reset
let matchedCards=[];

 //Create our cards
for(let i=0; i <icons.length; i++) {
	const card = document.createElement("div");
	card.classList.add("card");
	card.innerHTML = `<i class="${icons[i]}"></i>`;//template literals
	cardsContainer.appendChild(card); //adding the card class to dynamicallly generate


	//card click event
	card.addEventListener("click", function() {

		//existing fliped up card
		if(flipUpCards.length === 1) {

				const currentCard = this; //to shorten it
				const previousCard = flipUpCards[0];

			card.classList.add("open", "show");
			flipUpCards.push(this); //<this> refers to card from card.addEventListener...
			

				//comparing our 2 opened cards
				if(currentCard.innerHTML === previousCard.innerHTML){

					currentCard.classList.add("match");
					previousCard.classList.add("match");

					matchedCards.push(currentCard, previousCard); //match cards go straight to matchedCards array
					
					//so far when we click on 2 matched cards with the displayed message
					//the cards display it once, wether its matched again, or
					//not matching, so we have to create a way for the flipped up cards 
					//to be reset again once there is a match or no match. 
					flipUpCards = []; //empty array to reset the card

					//Check if the came is over!
					gameWon();

					console.log("Yay! it matched!");
				} else {
					currentCard.classList.remove("open", "show");
					previousCard.classList.remove("open", "show");
					console.log("Doesn't match, try again!");
					flipUpCards = [];//empty array to reset the card
				}

		} else {
			card.classList.add("open", "show");
			flipUpCards.push(this); //this refers to card from card.addEventListener...
			
		}
	
	});
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


//Game resets
//if the number of the matched = to the number of the original icons
function gameWon() {
	if(matchedCards.length === icons.length) {
	alert("YOU WON THE GAME!!!! CONGRATULATIONS!!!");
}
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
