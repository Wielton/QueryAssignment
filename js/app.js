/* Add some simple content in your HTML (this can be anything) with some classes and id's
In you app.js show your knowledge of each of the following selectors:
querySelector()----------------
querySelectorAll()-------------
getElementById()---------------
getElementsByClassName()-----------
getElementsByTagName-----------
createElement()----------------
classList add(), remove(), toggle()------------
You must show each method by changing the page somehow! Not simply console.log anymore.
*/


const player1Button = document.getElementById('player1-btn');
const player2Button = document.getElementById('player2-btn');
const player1Display = document.getElementById('player1-display');
const player2Display = document.getElementById('player2-display');
let btn = document.getElementById('div1').querySelectorAll('button');
console.log(btn);




let displayBoard = document.getElementById('div1').querySelectorAll('span');
console.log(displayBoard);


let headerClass = document.getElementById('div1').querySelector('h1');
console.log(headerClass);
headerClass.classList.add('h1-tag');






//const scoreTotal = document.getElementsByTagName();
const scoreReset = document.getElementById('reset-btn');
const newElParent = document.getElementById('newElBlock');

function newEl() {
    let pBlock = document.createElement('p');
    pBlock.innerText = 'This is a bunch of jibberish about the game.';
    pBlock.classList.add('noVisibility', 'visibility');
    pBlock.classList.toggle('noVisibility', true);
    pBlock.classList.toggle('visibility', false);
    newElBlock.append(pBlock);
    
}


function elAppear(){
    let newP = document.getElementById('newElBlock').lastElementChild;
    newP.classList.toggle('noVisibility', false);
    newP.classList.toggle('visibility', true);
}
// The below function will not clear the p element a 2nd time
// Must refresh page for full functionality
function elReset(){
    let remP = document.getElementById('newElBlock').querySelector('p');
    remP.classList.remove('visibility');
    remP.classList.toggle('noVisibility', true);
    
}
//  Now I will make the click function add 1 to the score of the corresponding player
//  and set my score values


let player1Score = 0;
let player2Score = 0;
let winningScore = 5;
let isGameOver = false;



function p1Score() {
    if(player1Score !== winningScore) {
        player1Score += 1;
        player1Display.textContent = player1Score;
        
    } else{
        isGameOver = true;
    }
}
function p2Score() {
    if(player2Score !== winningScore) {
        player2Score += 1;
        player2Display.textContent = player2Score;
        
    } else{
        isGameOver = true;
    }
}



function resetScore() {
    isGameOver = false;
    player1Score = 0;
    player1Display.textContent = player1Score;
    player2Score = 0;
    player2Display.textContent = player2Score;
    console.log('The score has been reset');
}