# Crystal Challenge Game

## Contributors
@missybarringer
____________________________________
## Technology
* CSS3, HTML5, Javascript, Bootstrap, jQuery
* [GitHub Repository Link](https://github.com/missybarringer/unit-4-game.git)
* [Website published here](https://missybarringer.github.io/unit-4-game/)
____________________________________
### Problem - to create the following Game

1. The player will have to guess the number answer with numbers assigned with each crystal. 
2. Here's how the app works:
   * There will be four crystals displayed as buttons on the page with a random hidden value between 1 - 12..
   * The player will be shown a random number between 19 - 120 at the start of the game.
   * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
     * Your game will hide this amount until the player clicks a crystal.
     * When they do click one, update the player's score counter.
   * The player wins if their total score matches the random number from the beginning of the game.
   * The player loses if their score goes above the random number.
   * The game restarts whenever the player wins or loses.
     * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
   * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

### Solution

* Create dynamic header & instructions divisions
* Generate a random # between 19 - 120 as the number to match
* Show 4 crystals with hidden assigned #'s generated randomly for each game between 1 - 12
* Show the total score 0 then increment everytime a crystal is clicked by its assigned value
* If the total score equals the # to match - increment the wins counter by 1 and display "You won!"
* If the total score goes over the # to match - increment the losses score by 1 and display "You lost!"

### Approach

* set up the mobile responsive divisions with specific id's
* create the 4 crystals & appended to the appropriate div
* get random numbers to assign to each crystal based on their index
* created the on click event to get the current value & add the crystal clicked's value
* created functions to handle all current, wins, & losses totals
____________________________________
#### Contributors
* Vector crystals came from [Freepik](https://www.freepik.com/)
____________________________________
## License
*This product is licensed under the MIT License (MIT).
____________________________________
## Contributing Guidelines
All contributions and suggestions are welcome!
For direct contributions, please fork the repository and file a pull request.
____________________________________
## Contact
* e-mail: barringer.margaret@gmail.com
* Twitter: @WebWabiSabi
* Instagram: @WebWabiSabi
* Added to [Personal Portfolio webpage](https://missybarringer.github.io/)

