 

$(document).ready(function(){
$("#mybutton").click(function(){
    $.getJSON('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="chicago, il")&format=json',function(jd){
        console.log(jd);
        
      var myCity=jd.query.results.channel.location.city;
            document.write(myCity + " ");
        
    var myRegion=jd.query.results.channel.location.region;
            document.write(myRegion + " ");
        
        
     for(var i = 0; i < jd.query.results.channel.item.forecast.length; i++){        var highTemp= jd.query.results.channel.item.forecast[i].high;                 document.write("high of "+highTemp+ " ");
       
      }
        
        for(var i = 0; i < jd.query.results.channel.item.forecast.length; i++){        var lowTemp= jd.query.results.channel.item.forecast[i].low;                 document.write("low of "+lowTemp+ " ");
       
      }
              
       
       
        
        
        $('#result').html(jd);});
    
    
    })

    
    
    
    
});