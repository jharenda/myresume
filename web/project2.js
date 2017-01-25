$(document).ready(function (e) {
    // set  global vars for user and computer wins. if they aren't outside of the main click event that triggers the game, disater strikes. (they will reset every click/
    // not update correctly. 
        var cWin = 0;
        var fuWin = 0;

    // defining a click function on the #show div, which is the text you click on to see the video instead of the rpsls (#rulePic) image that is normally displayed
    // when you click on it, it hides the main picture slowly and then shows (slowly) the video. 
    // also displays previously hidden div #showAgain, which is the text that is diplayed below the video to change back to original image 
        $("#show").click(function () {
        $("#rulePic").hide(1000); 
        $("#video").show(1000);
        $("#showAgain").fadeIn(2000);
        });
    
        // click function on the #showAgain div to hide the video and the #showAgain text/ div itself and replace it with the orginal picture that the video hide. 
        //  Moving  them slowly 
        $("#showAgain").click(function (){
        $("#video").hide(1000);
        $("#showAgain").hide(1000);
        $("#rulePic").show(1000);
        });

        // define a variable for the #h1 div and then animate the div via the var, altering height, width and opacity of the div as well as the speed of the animations 
       // directly in document.ready function  so it occurs immediately on page load and at no other time 
    var div1 = $("h1");
        div1.animate({height: '0px', opacity: '0.4', }, "fast");
        div1.animate({width: '0px', opacity: '0.2', }, "fast");
        div1.animate({width: '825px', opacity: '0.2', }, "slow");
        div1.animate({height: '0px', opacity: '0.4', }, "slow");
        div1.animate({width: '825px', opacity: '0.2', }, "slow");
        div1.animate({height: '0px', opacity: '0.4', }, "fast");
        div1.animate({height: '0px', opacity: '0.4', }, "fast");
        div1.animate({width: '425px', opacity: '0.2', }, "fast");
        div1.animate({height: '5px', opacity: '0.4',}, "fast");
        div1.animate({height: '15px', opacity: '0.4',}, "fast");
        div1.animate({height: '25px', opacity: '0.4', }, "fast");
        div1.animate({height: '35px', opacity: '0.4',}, "fast");
        div1.animate({width: '625px', opacity: '0.9',}, "fast");
        div1.animate({height: '50px', opacity: '0.9', }, "fast");
    
    // click event on the play class (the photos that are the actual game, triggering the game)
    $('.play').click(function(){
        
    // this is an animation function that occurs when a click event happens
    // http://stackoverflow.com/questions/10307505/jquery-animate-but-then-come-back-to-normal. I only very slightly modified this. 
    // I have tried to explain to the best of my ability what it all does, but i defintely wouldn't yet be able to come up with this on my own.     
    //http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_stop_params  (about the true,true parameters. More for personal reference)  
    // sets up the function to exectute the animations defined below it and then  stop. 
   $(".play").stop(true, true).animate({
            opacity: '0.5',
            height: '150px',
            width: '150px',
       // 900 parameter controls how quickly the height and width change as just indicated 
       // also sets up a new inner function which enacapsulates/ groups together 2 further different animation functions. 
}, 900, function() {
           
//The setTimeout() method calls the function after a specified amount of time (the 100 parameters on line 75 (ish) )
   setTimeout(function() { 
// this is the  animation that 'shrinks' the pictures.
        $(".play").animate({
            opacity: '0.2',
           height: '0px',
           width: '0px',
       });
// this is the what the settings of the settimeout function 'toggle' with, and is the 
//ending state of the animation- which returns all elements of the play class ( the photos) back to their initial state
       $(".play").animate({ 
           opacity: '1',
            height: '120px',
            width: '120px',
// this 300  parameter of this  inner play .animate controls how quickly the animation  'toggles' and returns back to normal
       }, 300);
// this parameter of the settimeoutfunction controls how long the function waits before running
   }, 100);
// end of play class click event animation 
});

 // assign variable to  match what the user clicked on 
    var uChoice = this.id;

       // create a var for the computer and then assign it to a random nubmer
var cChoice = Math.floor(Math.random() * 5);
        
        // case statment to assign the randomly generated number to one of the choices 
    switch (cChoice) {
    case 0:
        cChoice = "rock";
        break;
    case 1:
        cChoice = "lizard";
        break;
    case 2:
        cChoice = "scissors";
        break;
    case 3:
        cChoice = "paper";
        break;
    case 4:
        cChoice = "spock";
        break;
    }
 
        // create a var for the #display id and animate the area where the results are dislayed after each click. Changes/ toggles height, width, opacity AND HERE the             //color to hide the text during the animation. Using the color here required the jqeury UI plugin https://jqueryui.com/
 var div = $("#display");
        div.animate({height: '0px', opacity: '0.4', color: '#5bcf6a'}, "fast");
        div.animate({width: '0px', opacity: '0.2', color: '#5bcf6a'}, "fast");
        div.animate({height: '0px', opacity: '0.4', color: '#5bcf6a'}, "fast");
        div.animate({width: '0px', opacity: '0.2', color: '#5bcf6a'}, "fast");
        div.animate({height: '25px', opacity: '0.4', color: '#5bcf6a'}, "fast");
        div.animate({width: '25px', opacity: '0.2', color: '#5bcf6a'}, "fast");
        div.animate({height: '100px', opacity: '0.8', color: '#5bcf6a'}, "fast");
        div.animate({width: '550px', opacity: '0.4', color: '#5bcf6a'}, "fast");
        div.animate({height: '100px', opacity: '0.8', color: '#5bcf6a'}, "fast");
        div.animate({width: '600px', opacity: '0.4', color: 'black'}, "fast");
        div.animate({height: '100px', opacity: '0.4'}, "fast");
        div.animate({height: '100px', opacity: '0.8'}, "fast");
        div.animate({width: '600px', opacity: '0.4'}, "fast");
        div.animate({height: '100px', opacity: '0.8'}, "fast");
        div.animate({width: '600px', opacity: '1.00'}, "fast");
  
        
        //show the initially hidden #display div
        $('#display').show(); 
        // ad text to html-  what choice the computer and the user picked. 
    $('#result1').html("You picked" + " " + uChoice + ", " + "The Computer picked" + " " + cChoice + ". ");
        
        
      
        //  the main logic of the game. if statments evaluating all the combinations and then displaying the result of the combination 
        // also assigning win points to the appropriate variable 
        // see if they are equal first to avoid evaluating all the statments when they are equal
        // after that, there are 4 main else if clauses that grab the user choice and then only evualtes the appropraite block of code
        //  this is a lot of code, but I think it's about as efficient as possible. At the most, it will have to evualate 9 statment to find the correct one
        // first checks for a tie so it doesn't have to check anything else if it is. 
        if(uChoice === cChoice) {
            $('#result').html ("This round is a tie. No points are awarded.");
        } 
        // evaluates this code if the user picks rock. Should skip over this and move to next else if if the user did not choose rock. 
        else if (uChoice === "rock") {
            if (cChoice === "scissors") {
               $('#result').html ("Rock crushes Scissors!");
                  fuWin = fuWin + 1; 
            } else if (cChoice === "paper") {
                $('#result').html ("Paper covers Rock!");
                  cWin = cWin+ 1; 
            } else if (cChoice === "spock") {
           $('#result').html ("Spock vaporizes Rock!");
                  cWin = cWin+ 1; 
            } else if (cChoice === "lizard") {
             $('#result').html ("Rock crushes Lizard!");
                  fuWin = fuWin + 1; 
            }
            // end of else if for the user choosing rock 
        }
        // Would start here if the user did not pick rock. goes through this block if the user picked paper. If not, moves on to next else if
        else if (uChoice === "paper") {
            if (cChoice === "scissors") {
               $('#result').html ("Scissors cuts Paper!");
                  cWin = cWin+ 1; 
            } else if (cChoice === "rock") {
               $('#result').html ("Paper covers Rock!");
                  fuWin = fuWin + 1; 
            } else if (cChoice === "spock") {
              $('#result').html("Paper disproves Spock");
                  fuWin = fuWin + 1; 
            } else if (cChoice === "lizard") {
              $('#result').html("Lizard eats Paper!");
                  cWin = cWin+ 1; 
            }
            // end of code for user picking paper
        }
        // would start here if the user did not pick rock or paper. if the user picks scissors, it goes through this block of statements. Should skip if did not pick scissors.
        else if (uChoice === "scissors") {
            if (cChoice === "rock") {
                $('#result').html("Rock crushes Scissors!");
                  cWin = cWin+ 1; 
            } else if (cChoice === "paper") {
               $('#result').html("Scissors cuts Paper!");
                  fuWin = fuWin + 1; 
            } else if (cChoice === "spock") {
                $('#result').html("Spock smashes Scissors!");
                  cWin = cWin+ 1; 
            } else if (cChoice === "lizard") {
              $('#result').html("Scissors decapitates Lizard!");
                  fuWin = fuWin + 1; 
            }
            // end of user picking rock block  
        }
        // would start here if user did not pick rock, paper or scissors. if the user picked lizard, then checks this block 
        else if (uChoice === "lizard") {
            if (cChoice === "scissors") {
               $('#result').html("Scissors decapitates Lizard!");
                  cWin = cWin+ 1; 
            } else if (cChoice === "rock") {
               $('#result').html("Rock crushes Lizard!");
                  cWin = cWin+ 1; 
            } else if (cChoice === "spock") {
              $('#result').html("Lizard poisons Spock!");
                  fuWin = fuWin + 1; 
            } else if (cChoice === "paper") {
                $('#result').html("Lizard eats Paper!");
                  fuWin = fuWin + 1; 
            }
            // end of if  the user picked lizard
        } 
        // if none of the previous are true, the user picked spock and evaluates here. 
        else {
            if (cChoice === "rock") {
                $('#result').html("Spock vaporizes Rock!");
                  fuWin = fuWin + 1; 
            } else if (cChoice === "paper") {
                $('#result').html("Paper disproves Spock!");
                  cWin = cWin+ 1; 
            } else if (cChoice === "lizard") {
               $('#result').html("Lizard poisons Spock!");
                  cWin = cWin+ 1; 
            } else if (cChoice === "scissors") {
                $('#result').html("Spock smashes Scissors!");
                  fuWin = fuWin + 1; 
                // end of spock 
            }
            
        }
        
        // counter variable to keep track of how many qualifying rounds have been played
        var total = cWin + fuWin; 
        //  code block to be executed when the total var reaches 3. Ends the game and shows final results
        
    // displays score count  in the appropriate divs   
$('#user').html( "YOUR SCORE: " + fuWin)
   $('#computer').html( "OPPONENT SCORE: " + cWin)
        
        //  define animated loop functions that animate the 2 different score displays for the user and the computer.  Moves them up and down. 
       function loop(){
   $('#user')
     .animate({marginTop:30},1000)
     .animate({marginTop:-20},1000, loop);
  } 
        // immediately calling the function on the onclick event. Defined animation never stops because nothing ever happens to end this function call
          loop();
         // function loop2 is the same as function loop
  function loop2(){
   $('#computer')
     .animate({marginTop:-25},1000)
     .animate({marginTop:25},1000, loop2);
  }
  
  loop2();
        
    // defining a  function that animates the #hidden div (the picture that is displayed only when the game is over. 
    //changes size and opacity of picture and moves it horizontally. Called it loop because the animation just goes looping on forever, never ending. 
    // have to put it before the game is actually over, otherwise it is really, really slow to move in when the event that shows it actually occurs 
    // (which is the game ending)   
                   function loop3(){
   $('#hidden')
   .animate({height: '0px', opacity: '0.0' }, "fast")
   .animate({height: '0px', opacity: '0.0' }, "fast")
   .animate({height: '0px', opacity: '0.0' }, "fast")
   .animate({height: '75px', opacity: '1' }, "fast")
   .animate({marginTop:8},500)
   .animate({marginLeft:20},1000)
   .animate({marginLeft:815},1000)
   .animate({marginTop:10},1000, loop3);
  }


    //calling the  just defined function. THe function continues running until the click event on the picture occurs and reloads the page
        loop3();
        
   // if statement that runs when the total var becomes 3 that 'ends' the game
        if (total == 3) {
     // hides the play class(the pictures) so the user cannot play anymore
             $('.play').hide(1000);
            //outputs result of final round 
        $('result1').html("You picked" + " " + uChoice + ", " + "The Computer picked" + " " + cChoice + ". " ); 
          // if statement which executes inside the if total is 3 if statement. if at that point, the user has no wins, or if 
            //the computer has 2 wins, this will run telling the user that they lost
        // also hides the #list and #greeting divs and #rulepic divs to make room for the showing of the #hidden div
        // speeds used with some of the hiding and showing for effect. Also changes css background and text colors. 
            if (fuWin == 0 || cWin == 2 )   { 
                 $('#list').hide(1000); 
                $('#greeting').hide();
                $('#rulePic').hide();
                $('fieldset').hide();
                 $('fieldset').css({color: '#BF00FF'});
                 $('fieldset').css({backgroundColor: '#BF00FF'});
                
              $('fieldset').fadeIn(9000); 
                 $('fieldset').html(" You lose! The computer won " +  (cWin) + " out of " + (cWin + fuWin) + " rounds. Click on Sheldon to try again.");
                $('fieldset').css({backgroundColor: '#BF00FF'});
                $('fieldset').css({color: '#5bcf6a'});
                $("#hidden").show();  
            }
         
            // this is the else if all the wins between the user and computer total 3 and if the previous if was not true. If the computer has 0 wins, or if 
            // the user has two wins, then this tells them they won. Same hiding and showing of page elements as just explained for first if. 
          else  if (cWin == 0 || fuWin == 2 ) { 
               $('#list').hide(1000);
        $('#greeting').hide(); 
        $('#rulePic').hide();
              $('fieldset').hide();
               $('fieldset').css({color: '#BF00FF'});
               $('fieldset').css({backgroundColor: '#BF00FF'});
              
              $('fieldset').fadeIn(9000); 
              $('fieldset').html(" You win! " + (fuWin) + " out of " + ( fuWin + cWin ) + " rounds. Click on Sheldon to play again.");  
        $('fieldset').css({color: '#5bcf6a'});
        $("#hidden").show(); 
       
        }
                // end of this entire if statment for when game 'ends'
        }
            
 
    
        
    // when you click on the  animated sheldon picture after the game ends, it reloads the page to initial state so user can play again 
       $('#hidden').click(function () {
    location.reload();
   });
    


// end of click function- end of all the events/ code that occurs as soon as user clicks on a photo beginning the game 
});
// end of document.ready
}); 
