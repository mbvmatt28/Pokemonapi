

var BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
var url = BASE_URL + '747';
$.ajax({
    url: url,
    method: 'GET'
}).then(function(response) {
    var name = response.name;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    $('#name').text(name);
    
 

    var sortedTypes = response.types.sort(function(a, b){
         return a.slot -b.slot;
    })

    sortedTypes.forEach(function(currentType){
        var typeEl = $('<li>').text(currentType.type.name);
        $('#types').append(typeEl);
    });
    var frontSprite = $('<img>').attr('src', response.sprites.front_default);
    $('#sprites').append(frontSprite) 
});
