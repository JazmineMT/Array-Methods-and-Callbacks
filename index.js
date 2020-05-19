import { fifaData } from './fifa.js';
console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

const worldCupFinal2014 = fifaData.filter((game) =>{
    return game.Year === 2014 && game.Stage === 'Final'});

    
console.log(worldCupFinal2014);
console.log(worldCupFinal2014[0]["Home Team Name"]);
console.log(worldCupFinal2014[0]["Away Team Name"]);
console.log(worldCupFinal2014[0]["Home Team Goals"]);
console.log(worldCupFinal2014[0]["Away Team Goals"]);
console.log(worldCupFinal2014[0]["Win conditions"]);




/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */


// function getFinals (game) {
//     let finals  = game.filter((object) =>{
//     return object.Stage === "Final"});
//     return finals;
// }
// console.log(getFinals(fifaData));


const getFinals = fifaData.filter((object) =>{
    return object.Stage === "Final"});


console.log(getFinals);

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

// function getYears (data) {
//      let years =  data.map((game) =>{
//     return {'Year': game.Year}
//     });
//     return years;
// }


function getYears (getFinals) {
let years = getFinals.map((game) =>{
return ` ${game.Year}`;});
return years;
  
};



console.log(getYears(getFinals));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(getFinals) {

    let winners = getFinals.map((game) =>{
    if( game["Home Team Goals"] >= game["Away Team Goals"]){

        return `${game["Home Team Name"]}` 
    };
    if( game["Home Team Goals"] <= game["Away Team Goals"]){
         return `${game["Away Team Name"]}`; 
    };
 });
   
    return winners;
};



console.log(getWinners(getFinals));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */




function getWinnersByYear(getWinners, getYears ) {

let winners = getWinners(getFinals);
let years = getYears(getFinals);   

return years.map((item, index) =>{
    return `In ${item}, ${winners[index]} won the world cup! `;
});
};

console.log(getWinnersByYear(getWinners, getYears));



/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
 let averageHomeGoals = data.reduce((total, goals)=>{
     return total += goals["Home Team Goals"];
 }, 0)/data.length;

 let averageAwayGoals = data.reduce((total, goals)=>{
    return total += goals["Away Team Goals"];
}, 0)/ data.length;

console.log(`The average number of home team goals is ${averageHomeGoals}`);
console.log(`The average number of away team goals is ${averageAwayGoals}`);
};	

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 
Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */




function getCountryWins( data , teamInitials) {


    /* code here */	    /* code here */


};



/* STRETCH 2: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* STRETCH 3: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
