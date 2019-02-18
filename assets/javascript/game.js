// Pseudocode
// Create dynamic header & instructions divisions
// Generate a random # between 19 - 120 as the number to match
// Show 4 crystals with hidden assigned #'s generated randomly for each game between 1 - 12
// Show the total score 0 then increment everytime a crystal is clicked by its assigned value
// If the total score equals the # to match - increment the wins counter by 1 and display "You won!"
// If the total score goes over the # to match - increment the losses score by 1 and display "You lost!"

$(document).ready(function() {

    // Make our variables global to the runtime of our application
    var userTotalNum = 0;
    var wins = 0;
    var losses = 0;
    var uniqueCrystalNum = [];
    var randomNum;

    // Add instrutional text in the html page
    instrDiv.textContent = "You will be given a random number at the start of the game.";
    $("#instrDiv").append("<p/><br>There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score.");
    $("#instrDiv").append("<p/><br>You win the game by matching your total score to random number, you lose the game if your total score goes above the random number.");
    $("#instrDiv").append("<p/><br>The value of each crystal is hidden from you until you click on it.");   
    $("#instrDiv").append("<p/><br>Each time when the game starts, the game will change the values of each crystal.");  

    // // randomMatchNum generator
    // function matchNum(min, max) {
    //     return Math.floor(Math.random() * (121 - 19)) + 19;
    // }
    // call function getRndInteger & print to html page
    var matchNum = Math.floor(Math.random() * (121 - 19)) + 19;
    $("#ranMatchNum").text(matchNum);
    
    // print wins * losses
    $("#winNumText").text("Wins: ");
    $("#lossNumText").text("Losses:");
    $("#lossNum").text(losses);
    $("#winNum").text(wins);
 
    
    function reset() {
        matchNum = Math.floor(Math.random() * (121 - 19)) + 19;
        console.log(matchNum);
        $("#ranMatchNum").text(matchNum);
        userTotalNum = 0;
    //     var uniqueCrystalNum = [];
    //     for (var i = 0; i < 4; i++) {
    //         var randomNum = Math.floor(Math.random() * 12) + 1;
    //         var current = randomNum[i];
    //         uniqueCrystalNum.push(randomNum);
    //         var compareNums = $.inArray(current, uniqueCrystalNum);
    //         if (current !== randomNum && randomNum !== compareNums ) {
    //             console.log("unique # " +uniqueCrystalNum);
    //         } 
    //     }  
    //         // assigning the crystals random values with the c
    // var crystalValue = {};
    // crystalValue[1] = uniqueCrystalNum[0];
    // crystalValue[2] = uniqueCrystalNum[1];
    // crystalValue[3] = uniqueCrystalNum[2];
    // crystalValue[4] = uniqueCrystalNum[3];
  
        $("#totalScore").text(userTotalNum);
    }
    // get 4 unique numbers to assign to crystals
    var uniqueCrystalNum = [];
    for (var i = 0; i < 4; i++) {
        var randomNum = Math.floor(Math.random() * 12) + 1;
        // turqCrystal.attr('class', current);
        var current = randomNum[i];
        // gemIndex.attr('class', current);
        // tried to enforce unique numbers - not working even with TA's assistance...
        uniqueCrystalNum.push(randomNum);
        var compareNums = $.inArray(current, uniqueCrystalNum);
        if (current !== randomNum && randomNum !== compareNums ) {
            console.log("unique # " +uniqueCrystalNum);
        } 
    }
    // assigning the crystals random values with the c
    var crystalValue = {};
    crystalValue[1] = uniqueCrystalNum[0];
    crystalValue[2] = uniqueCrystalNum[1];
    crystalValue[3] = uniqueCrystalNum[2];
    crystalValue[4] = uniqueCrystalNum[3];
    
    function getCrystalEvent(crystalKey) {
        return function () {
            userTotalNum = userTotalNum + crystalValue[crystalKey];
            console.log("new user total:" + userTotalNum);
            $("#totalScore").text(userTotalNum);
            if (userTotalNum > matchNum) {
                loser();
            } else if
                (userTotalNum === matchNum) {
                winner();
            }
            console.log("unique event # " +matchNum);
            console.log("losses " +losses);
            console.log("wins " + wins);
        }
    }

    function loser() {
        losses++;
        $("#lossNum").text(losses);
        reset()
    }
    function winner() {
        wins++;
        $("#winNum").text(wins);
        reset()
    }
    console.log("userTotalNum " +userTotalNum);
    
        $("#pinkPearCrystal").on("click", getCrystalEvent(1));
        $("#multiCrystal").on("click", getCrystalEvent(2));
        $("#turqCrystal").on("click", getCrystalEvent(3));
        $("#purpCrystal").on("click", getCrystalEvent(4));

        console.log(crystalValue[1]);
        console.log(crystalValue[2]);
        console.log(crystalValue[3]);
        console.log(crystalValue[4]);

    totalScoreText.textContent = "Your total score is:"
    $("#totalScore").text(userTotalNum);    

});