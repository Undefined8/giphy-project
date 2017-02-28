var searchTerm;

$("#search").click(function(){
    searchTerm = $("input").val();
    console.log(encodeURIComponent(searchTerm.toLowerCase()));
    $.getJSON("https://api.giphy.com/v1/gifs/search?q="+searchTerm.toLowerCase()+"&api_key=dc6zaTOxFJmzC",
    function(response){
        console.log(response);
    });
});

