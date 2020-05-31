const INPUT = document.querySelector('#search');
const SEARCH_GIPHY = document.querySelector('#searchGiphy');
const REMOVE_IMAGES = document.querySelector('#removeImages');
const SHOWCASE = document.querySelector('#showcase');

// INPUT.addEventListener('input', function(event) {
//     console.log(event.target.value);    
// });

SEARCH_GIPHY.addEventListener('click', function() {
    // var textParam = INPUT.value;
    // var giphyKey = 'Cv6aetekJHl327kdbExe67KTmrVEfAmV';
    // var urlSearh = `https://api.giphy.com/v1/gifs/search?q=${textParam}&rating=g&api_key=${giphyKey}`;   
    
    // // console.log(textParam);
    // // console.log(urlSearh);

    // INPUT.value = '';
    
    // fetch(urlSearh)
    // .then(function(response) {
    //     return response.json();
    // })
    // .then(function(giphyPics) {
    //     var randomNumber = Math.floor(Math.random() * 25);
    //     var dataPicSelected = giphyPics.data[randomNumber];
    //     var urlPic = dataPicSelected.images.downsized.url;
    //     var altTextPic = dataPicSelected.slug;

    //     // console.log(randomNumber);
    //     // console.log(dataPicSelected);

    //     // console.log(urlPic);
    //     // console.log(altTextPic);

    //     SHOWCASE.innerHTML += `<img src="${urlPic}" alt="${altTextPic}">`;
    // });

    executePic();   
});

INPUT.addEventListener('keypress', function(event) {
    if(event.key === 'Enter'){
        executePic();
    }
})

REMOVE_IMAGES.addEventListener('click', function() {
    SHOWCASE.innerHTML = '';
});

// =================================================

function executePic() {
    var textParam = INPUT.value;
    var giphyKey = 'Cv6aetekJHl327kdbExe67KTmrVEfAmV';
    var urlSearh = `https://api.giphy.com/v1/gifs/search?q=${textParam}&rating=g&api_key=${giphyKey}`;

    // console.log(textParam);
    // console.log(urlSearh);

    INPUT.value = '';

    fetch(urlSearh)
        .then(function (response) {
            return response.json();
        })
        .then(function (giphyPics) {
            var randomNumber = Math.floor(Math.random() * 25);
            var dataPicSelected = giphyPics.data[randomNumber];
            var urlPic = dataPicSelected.images.downsized.url;
            var altTextPic = dataPicSelected.slug;

            // console.log(randomNumber);
            // console.log(dataPicSelected);

            // console.log(urlPic);
            // console.log(altTextPic);

            SHOWCASE.innerHTML += `<img src="${urlPic}" alt="${altTextPic}">`;
        });
}