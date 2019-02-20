// Pseudocode
// Create dynamic header & instructions divisions
// Generate a random # between 19 - 120 as the number to match
// Show 4 crystals with hidden assigned #'s generated randomly for each game between 1 - 12
// Show the total score 0 then increment everytime a crystal is clicked by its assigned value
// If the total score equals the # to match - increment the wins counter by 1 and display "You won!"
// If the total score goes over the # to match - increment the losses score by 1 and display "You lost!"
// Added to portfolio page at https://missybarringer.github.io/

$(document).ready(function() {

    // Make our variables global to the runtime of our application
    var userTotalNum = 0;
    var wins = 0;
    var losses = 0;
    var uniqueCrystalNum = [];

    // load the 4 crystals into the appropriate divs & give alt tags
    var imgPinkPearCrystal = $("<img />", {
        src: "assets/images/pinkPearCrystal.png", alt: "Pink Pear Crystal", width: 100, height: 100
        });
    imgPinkPearCrystal.appendTo($("#pinkPearCrystal"));

    var imgMultiCrystal = $("<img />", {
        src: "assets/images/multiCrystal.png", alt: "Multi-colored Crystal", width: 100, height:100
        });
    imgMultiCrystal.appendTo($("#multiCrystal"));

    var imgTurqCrystal = $("<img />", {
        src: "assets/images/turqCrystal.png", alt: "Turquoise Crystal", width: 100, height:100
        });
    imgTurqCrystal.appendTo($("#turqCrystal"));

    var imgPurpCrystal = $("<img />", {
        src: "assets/images/purpCrystal.png", alt: "Purple Crystal", width: 100, height:100
        });
    imgPurpCrystal.appendTo($("#purpCrystal"));

    // get random # between 19 - 120 & print to html page
    $("#ranMatchNumText").text("Number to Match");
    var matchNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#ranMatchNum").text(matchNum);
    
    // print wins * losses
    $("#winNumText").text("Wins: ");
    $("#lossNumText").text("Losses:");
    $("#lossNum").text(losses);
    $("#winNum").text(wins);
    
    // reset function gets a new random # for the # to match
    function reset() {
        matchNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        console.log(matchNum);
        $("#ranMatchNum").text(matchNum);
        //reset the user's total number
        userTotalNum = 0;
        // get 4 new unique random #'s for each crystal
        var uniqueCrystalNum = [];
            while(uniqueCrystalNum.length < 4) {
                var random = Math.floor(Math.random() * 12) + 1;
                if (uniqueCrystalNum.indexOf(random) === -1) uniqueCrystalNum.push(random);
                    console.log("unique # " + uniqueCrystalNum);
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
    
    // get 4 unique numbers to assign to each crystal
    var uniqueCrystalNum = [];
        while(uniqueCrystalNum.length < 4) {
            var random = Math.floor(Math.random() * 12) + 1;
            if (uniqueCrystalNum.indexOf(random) === -1) uniqueCrystalNum.push(random);
                    console.log("unique # " +uniqueCrystalNum);
        }
    // assigning the crystals random values based on their index
    var crystalValue = {};
    crystalValue[1] = uniqueCrystalNum[0];
    crystalValue[2] = uniqueCrystalNum[1];
    crystalValue[3] = uniqueCrystalNum[2];
    crystalValue[4] = uniqueCrystalNum[3];
    
    // on click event goes to the getCrystalEvent function with the crystals value each time a crystal is clicked
    $("#pinkPearCrystal").on("click", getCrystalEvent(1));
    $("#multiCrystal").on("click", getCrystalEvent(2));
    $("#turqCrystal").on("click", getCrystalEvent(3));
    $("#purpCrystal").on("click", getCrystalEvent(4));
 
    // function adds the crystalValue to the user total number
    function getCrystalEvent(crystalKey) {
        return function () {
            console.log(crystalValue[1]);
            console.log(crystalValue[2]);
            console.log(crystalValue[3]);
            console.log(crystalValue[4]);
            userTotalNum = userTotalNum + crystalValue[crystalKey];
            console.log("new user total:" + userTotalNum);
            $("#totalScore").text(userTotalNum);
            // if users total number is greater than the number to match it goes to the loser function
            if (userTotalNum > matchNum) {
                loser();
                } 
            // if not greater than the number to match and is equal to the number to match it goes to the winner function
            else if
                (userTotalNum === matchNum) {
                winner();
                }
            console.log("unique event # " +matchNum);
            console.log("losses " +losses);
            console.log("wins " + wins);
        }
    }
    // increments losses total & prints new # and You lost !!! message
    function loser() {
        losses++;
        $("#lossNum").text(losses);
        $("#winLoss").text("You lost !!!");
        reset()
        }
    // increments wins total & prints new # and You WIN !!!! message
    function winner() {
        wins++;
        $("#winNum").text(wins);
        $("#winLoss").text("You WIN !!!!");
        reset()
        }
    console.log("userTotalNum " +userTotalNum);
    // prints the users total number
    totalScoreText.textContent = "Your total score is:"
    $("#totalScore").text(userTotalNum);    

});