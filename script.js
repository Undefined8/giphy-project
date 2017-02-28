var searchTerm;

$("#search").click(function(){
    searchTerm = $("input").val();
    $.getJSON("https://api.giphy.com/v1/gifs/search?q="+encodeURIComponent(searchTerm.toLowerCase())+"&api_key=dc6zaTOxFJmzC",
    function(response){
        $("#results").html("");
        for(var i in response.data)
            $("#results").append("<img src='"+response.data[i].images.original.url+"'/>");
    });
});
$("#input").keyup(function(event){
    if(event.keyCode == 13){
        $("#search").click();
    }/*else if(event.keyCode >= 49 && event.keyCode <= 90){
        $("#search").click();
    }*/
});
$("#reset").click(function(){
   $("input").val("");
   $("#results").html("");
});
