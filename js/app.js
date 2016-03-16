
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
    
    /* Global Variables */
    
    var Randum
    var NumInput = $('#form').find('#userGuess');
    var GuessedNum
    
    NewGame();
    
});
    
    function NewGame() {
      GenerateRandNum();  
    }; 
     
    
    
    /* generate random whole number between 1 and 100 * ans store in variable*/ 
    function GenerateRandNum(){
        RandNum = Math.floor(Math.random() * 100) + 1;
        console.log(RandNum);
    };
    
    
    
    /* Add number user guessed to guessList */
    $('#form').submit(function(event) {
        event.preventDefault();
        GetGuess();
    });
    
    
    
    /* Compare NumInput to RandNum and give response */
    function CompareNum() {
        /*  for returned response */
        if (RandNum == NumInput) {
          console.log('Winner'); 
        };
    };


/* Get the user guess */
    function GetGuess(){
        GuessedNum = NumInput.val;
        NumInput.val('');
        CompareNum();
    }

