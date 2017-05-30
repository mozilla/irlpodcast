(function(Mozilla) {
    'use strict';

    var episodeList = document.getElementById('episode-list');
    var subscribeLinksHome = document.getElementById('subscribe-links-home');
    var subscribeLinksCoords = subscribeLinksHome.getBoundingClientRect();

    episodeList.addEventListener('click', function(e) {
        if (e.target.classList.contains('subscribe-link')) {
            e.preventDefault();

            Mozilla.smoothScroll({
                top: subscribeLinksCoords.top - 40
            });
        }

        if (e.target.classList.contains('transcript-link')) {
            e.preventDefault();

            Mozilla.Modal.createModal(e.target, $('#' + e.target.dataset.transcript), {
                title: 'Transcript'
            });
        }

        e.stopPropagation();
    });
})(window.Mozilla);
