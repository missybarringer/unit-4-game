// Pseudocode
// Create dynamic header & instructions divisions
// Generate a random # between 19 - 120 as the number to match
// Show 4 crystals with hidden assigned #'s generated randomly for each game between 1 - 12
// Show the total score 0 then increment everytime a crystal is clicked by its assigned value
// If the total score equals the # to match - increment the wins counter by 1 and display "You won!"
// If the total score goes over the # to match - increment the losses score by 1 and display "You lost!"

$(document).ready(function() {
    // Add a header div into the empty-div in the html page
    var gameHeaderDiv = document.getElementById("empty-div");
    // Add the text & attributes to the header
    gameHeaderDiv.textContent = "CrystalsCollector!";
    gameHeaderDiv.setAttribute("id", "gameHeader");
    // Add a 2nd div to the page by appending it to the gameHeaderDiv
    var instrDiv = document.createElement("div");
    instrDiv.setAttribute("id", "instrDiv");
    instrDiv.textContent = "You will be given a random number at the start of the game.";
    gameHeaderDiv.append(instrDiv);
    $("#instrDiv").append("<p/><br>There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score.");
    $("#instrDiv").append("<p/><br>You win the game by matching your total score to random number, you lose the game if your total score goes above the random number.");
    $("#instrDiv").append("<p/><br>The value of each crystal is hidden from you until you click on it.");   
    $("#instrDiv").append("<p/><br>Each time when the game starts, the game will change the values of each crystal.");  
    
    // Add the randomMatchNum div
    var ranMatchNum = document.createElement("div");
    ranMatchNum.setAttribute("id", "ranMatchNum");
    ranMatchNum.textContent = "placeholer for random match #";
    instrDiv.after(ranMatchNum);

    var winLossNums = document.createElement("span");
    winLossNums.setAttribute("id", "winLossNums");
    winLossNums.textContent = "wins/losses";
    ranMatchNum.append(winLossNums);
    
    var pinkPearCrystal = document.createElement("span");
    pinkPearCrystal.setAttribute("id", "pinkPearCrystal");
    pinkPearCrystal.setAttribute("class", "image");
    ranMatchNum.after(pinkPearCrystal);

    var turqCrystal = document.createElement("span");
    turqCrystal.setAttribute("id", "turqCrystal");
    turqCrystal.setAttribute("class", "image");
    pinkPearCrystal.after(turqCrystal);

    var multiCrystal = document.createElement("span");
    multiCrystal.setAttribute("id", "multiCrystal");
    multiCrystal.setAttribute("class", "image");
    turqCrystal.after(multiCrystal);

    var purpCrystal = document.createElement("span");
    purpCrystal.setAttribute("id", "purpCrystal");
    purpCrystal.setAttribute("class", "image");
    multiCrystal.after(purpCrystal);

    var totalScoreText = document.createElement("span");
    totalScoreText.setAttribute("id", "totalScoreText");
    totalScoreText.textContent = "Your total score is";
    purpCrystal.after(totalScoreText);

    var totalScore = document.createElement("span");
    totalScore.setAttribute("id", "totalScore");
    totalScore.setAttribute("class", "clearfix");
    totalScore.textContent = "score placeholder";
    totalScoreText.after(totalScore);
});