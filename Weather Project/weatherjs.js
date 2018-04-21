 

$(document).ready(function(){
$("#mybutton").click(function(){
    $.getJSON('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="chicago, il")&format=json',function(jd){
        console.log(jd);
        
    var myCity=jd.query.results.channel.location.city;
            document.write("The ten day forecast for "+myCity + ",");
        
    var myRegion=jd.query.results.channel.location.region;
            document.write(myRegion + ": "+"<br>");
        
    for(var i=0;i<jd.query.results.channel.item.forecast.length;i++){
        var today = jd.query.results.channel.item.forecast[i];        document.write("Day: " + today.date+ " ");
         document.write("high of "+today.high + " ");
         document.write("low of "+today.low + " <br>");
    }
        
        
       
      
                                                                              
            
        
    }
        
              
       
       
        
        
        //$('#result').html(jd);});
    
    
    )})
});