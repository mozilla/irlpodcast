(function(Mozilla) {
    'use strict';

    var episodeList = document.getElementById('episode-list');

    episodeList.addEventListener('click', function(e) {
        var targetClass = e.target.classList;

        if (targetClass.contains('episode-subscribe-link')) {
            e.preventDefault();

            Mozilla.Modal.createModal(e.target, $('#' + e.target.dataset.subscribeLinks), {
                title: 'Subscribe'
            });
        } else if (targetClass.contains('episode-share-link')) {
            e.preventDefault();

            Mozilla.Modal.createModal(e.target, $('#' + e.target.dataset.shareLinks), {
                title: 'Share'
            });
        } else if (targetClass.contains('episode-transcript-link')) {
            e.preventDefault();

            Mozilla.Modal.createModal(e.target, $('#' + e.target.dataset.transcript), {
                title: 'Transcript'
            });
        }

        e.stopPropagation();
    });
})(window.Mozilla);
