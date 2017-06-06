/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function(Mozilla) {
    'use strict';

    var episodeList = document.getElementById('episode-list');

    if (episodeList) {
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
    }
})(window.Mozilla);
