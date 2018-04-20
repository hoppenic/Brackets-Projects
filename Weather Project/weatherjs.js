 

$(document).ready(function(){
$("#mybutton").click(function(){
    $.getJSON('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="chicago, il")&format=json',function(jd){
        console.log(jd);
        
        $('#result').html(jd);});
    })

    
    
    
    
});