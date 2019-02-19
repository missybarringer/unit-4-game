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
    $("#instrDiv").appendTo("#instrDivHeader");
    instrDiv.textContent = "You will be given a random number at the start of the game.";
    $("#instrDiv").append("<p/><br>There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score.");
    $("#instrDiv").append("<p/><br>You win the game by matching your total score to random number, you lose the game if your total score goes above the random number.");
    $("#instrDiv").append("<p/><br>The value of each crystal is hidden from you until you click on it.");   
    $("#instrDiv").append("<p/><br>Each time when the game starts, the game will change the values of each crystal.");  

    // call function getRndInteger & print to html page
    $("#ranMatchNumText").text("Number to Match");
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
        var uniqueCrystalNum = [];
        while(uniqueCrystalNum.length < 4) {
        var random = Math.floor(Math.random() * 12) +1;
        if (uniqueCrystalNum.indexOf(random) === -1) uniqueCrystalNum.push(random);
                    console.log("unique # " +uniqueCrystalNum);
    }
        // assigning the crystals new random values
        crystalValue = [];
        crystalValue[1] = uniqueCrystalNum[0];
        crystalValue[2] = uniqueCrystalNum[1];
        crystalValue[3] = uniqueCrystalNum[2];
        crystalValue[4] = uniqueCrystalNum[3];
        // printing the users Total score to html page       
        $("#totalScore").text(userTotalNum);
    }
    
    // get 4 unique numbers to assign to crystals
    var uniqueCrystalNum = [];
    while(uniqueCrystalNum.length < 4) {
        var random = Math.floor(Math.random() * 12) +1;
        if (uniqueCrystalNum.indexOf(random) === -1) uniqueCrystalNum.push(random);
                    console.log("unique # " +uniqueCrystalNum);
    }
    // assigning the crystals random values with the c
    var crystalValue = {};
    crystalValue[1] = uniqueCrystalNum[0];
    crystalValue[2] = uniqueCrystalNum[1];
    crystalValue[3] = uniqueCrystalNum[2];
    crystalValue[4] = uniqueCrystalNum[3];
    
    $("#pinkPearCrystal").on("click", getCrystalEvent(1));
    $("#multiCrystal").on("click", getCrystalEvent(2));
    $("#turqCrystal").on("click", getCrystalEvent(3));
    $("#purpCrystal").on("click", getCrystalEvent(4));
    
    function getCrystalEvent(crystalKey) {
        return function () {
            console.log(crystalValue[1]);
            console.log(crystalValue[2]);
            console.log(crystalValue[3]);
            console.log(crystalValue[4]);
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
        $("#winLoss").text("You lost !!!");
        reset()
    }
    function winner() {
        wins++;
        $("#winNum").text(wins);
        $("#winLoss").text("You WIN !!!!");
        reset()
    }
    console.log("userTotalNum " +userTotalNum);
    


    totalScoreText.textContent = "Your total score is:"
    $("#totalScore").text(userTotalNum);    

});