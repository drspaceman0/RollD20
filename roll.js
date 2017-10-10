$(function() { 
    console.log("starting roll.js script");
    $("#diceimg").on('click', function() {
        console.log("rolling dice...");
        if( $('#myIframe').length ){
            $("#myIframe").remove();
        }
        $("#startmessage").css('visibility','visible')
        $("#startmessage").text("Rolling dice...") 
        $('.printednum').css("display", "none")
        // show the dice image without the blank
        $("#diceimg")
            .attr("src","dice.jpg")
            .rotate(
            {
                duration:400,
                angle:360,
                animateTo:200
            }
        );
        // wait a bit for dramatic pause
        setTimeout(function() {
            $("#startmessage").css('visibility','hidden')
            // get a new random number
            $('.printednum')
            .text(function() { 
                var n = Math.floor(Math.random() * 20)+1;
                return n;
             })
             .css("display", "inline")
             .trigger('change');
        }, 400);  
        // show the dice image with the blank
        $("#diceimg").attr("src","images/dice_with_blank.png");
    });
    // show video
    $('.printednum').change(function(){
        if($('.printednum').text()==1){
            $( ".container" ).append( "<iframe id=\"myIframe\" src=\"https://www.youtube.com/embed/LukyMYp2noo?autoplay=1\"  width=\"300\" height=\"200\"></iframe>" );
        } else if($('.printednum').text()==20){
            $( ".container" ).append( "<iframe id=\"myIframe\" src=\"https://www.youtube.com/embed/fvtQYsckLxk?start=65&autoplay=1\"  width=\"300\" height=\"200\"></iframe>" );
        } 
    })
    

    console.log("reached end of roll.js script");
});