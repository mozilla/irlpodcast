(function() {
    'use strict';

    var gifs = [
        'https://media.giphy.com/media/RHlm0r4VlDCgg/giphy.gif',
        'https://media.giphy.com/media/Rspfpv1Rop50k/giphy.gif',
        'https://media.giphy.com/media/vYME0QCGRJl6g/giphy.gif',
        'https://media.giphy.com/media/l41lVsYDBC0UVQJCE/giphy.gif',
        'https://media.giphy.com/media/3o7TKILKwQCtphbl7y/giphy.gif'
    ];

    var eggContainer = document.getElementById('ringringring');

    function makeEgg() {
        // stop capturing keyboard input
        kirl.unload();

        // choose a random gif from above
        var theGif = gifs[Math.floor(Math.random() * gifs.length)];

        var theEgg = document.createElement('img');
        theEgg.src = theGif;

        // inject an image into the page
        eggContainer.appendChild(theEgg);
    }

    var keycombos = [
        '38384040373937396665', // ↑↑↓↓←→←→ba
        '56545553514857', // 8675309
        '56484853565650514848' // 8005882300 (empiiiiiire)
    ];

    var kirl = KonamIRL(keycombos, makeEgg);
})();