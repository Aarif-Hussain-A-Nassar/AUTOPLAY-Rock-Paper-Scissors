let scores=
JSON.parse(localStorage.getItem('scores'));

if(scores===null)
{
    scores={
        win:0,
        lose:0,
        tie:0
    };
}
updatescore();






let autoplaying=false;
let intervalId;
function autoplay() {
    if(autoplaying===false)
    {
    intervalId=setInterval(function() {
        const usermove=move();
        playermove(usermove);
    },1000)
    autoplaying=true;
   }
   else{
    clearInterval(intervalId);
    autoplaying=false;
   }

}





function playermove(usermove){
compare=move();

updatescore();

if(usermove==='paper' ){
    

    if(compare==='rock')
    {
        result='You won';
    }
    else if(compare==='scissors')
    {
        result='You lose';
    }
    else
    {
        result='Tie';
    }
}
else if(usermove==='scissors'){

     


    if(compare==='rock')
    {
        result='You lose';
    }
    else if(compare==='scissors')
    {
        result='Tie';
    }
    else
    {
        result='You won';
    }

}
else if(usermove==='rock') {
   

    if(compare==='rock')
    {
        result='Tie';
    }
    else if(compare==='scissors')
    {
        result='You won';
    }
    else
    {
        result='You lose';
    }
}

if(result==='Tie')
{
    scores.tie+=1;
}
else if(result==='You won')
{
    scores.win+=1;
}
else{
    scores.lose+=1;
}







localStorage.setItem('scores', JSON.stringify(scores) );


updatescore();
document.querySelector('.js-output').style.display = 'block';
document.querySelector('.js-result').style.display = 'block';

document.querySelector('.js-result').innerHTML= result;
document.querySelector('.js-output').innerHTML= `You <img  class="imageicon" src="${usermove}-emoji.png" > 
 &nbsp; Computer  <img  class="imageicon" src="${compare}-emoji.png" > `;


}



function move(){  
const random=Math.random();
let compare;
if(random>=0 && random<1/3)
{
compare='rock';
}
else if(random>=1/3&&random<2/3)
{
compare='scissors';
}
else
{
compare='paper';
} 
let result;
return compare;
}



function reset()
{
scores.win=0;
scores.lose=0;
scores.tie=0;

localStorage.removeItem('scores');


updatescore();


document.querySelector('.js-output').style.display = 'none';
document.querySelector('.js-result').style.display = 'none';

}





//updating scores
function updatescore() {
document.querySelector('.js-score').innerHTML=
    `Wins:${scores.win}, Lose: ${scores.lose}.Tie:${scores.tie}`;
}



//event listeners for all buttons onlcick

document.querySelector('.js-rock').addEventListener('click',() => {
    playermove('rock')
});

document.querySelector('.js-paper').addEventListener('click',() => {
    playermove('rock')
});

document.querySelector('.js-scissors').addEventListener('click',() => {
    playermove('rock')
});




//when r presssed rock playes  p for paper s for scissors

document.body.addEventListener('keydown',(event) => {
    if(event.key==='r') {
        playermove('rock');
    }
    else if(event.key==='p') {
        playermove('paper');
    }
    else if (event.key==='s') {
        playermove('scissors');
    }
});




