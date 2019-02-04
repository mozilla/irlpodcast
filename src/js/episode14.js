(function(KonamIRL) {
    'use strict';

    var artworkElement = document.querySelector('.episode-image img');

    function layEgg() {
        // stop capturing keyboard input
        kirl.unload();

        // update image
        artworkElement.src = '/images/episodes/14/artwork-alt.jpg';
        artworkElement.srcset = '/images/episodes/14/artwork-alt-high-res.jpg 2x';
    }

    var keycombos = [
        '16738276', // IRL
        '738276' // irl
    ];

    var kirl = new KonamIRL(keycombos, layEgg);
})(window.KonamIRL);
