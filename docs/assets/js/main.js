/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function($, Mozilla, dataLayer) {
    'use strict';

    var $episodeLinks = $('.episode-links');
    var $subscribeLinks = $('.subscribe-links');
    var $socialShareLinks = $('.social-share-links');

    function copyShareLink(inputElement, $noticeElement) {
        if (inputElement) {
            inputElement.select();

            try {
                document.execCommand('copy');
                inputElement.blur();

                $noticeElement.addClass('show');
            } catch(e) {}
        }
    }

    // open modals for subscribe/show notes/share
    $episodeLinks.on('click', function(e) {
        e.preventDefault();
        var $target = $(e.target);

        if ($target.hasClass('episode-subscribe-link')) {
            Mozilla.Modal.createModal(e.target, $('#' + $target.data('subscribeLinks')), {
                title: 'Subscribe'
            });
        } else if ($target.hasClass('episode-share-link')) {
            Mozilla.Modal.createModal(e.target, $('#' + $target.data('shareLinks')), {
                title: 'Share'
            });
        } else if ($target.hasClass('episode-shownotes-link')) {
            Mozilla.Modal.createModal(e.target, $('#' + $target.data('shownotes')), {
                title: 'Show Notes'
            });
        }
    });

    // track subscribe clicks
    $subscribeLinks.on('click', 'a', function(e) {
        var $this = $(this);
        var $parent = $this.parents('.subscribe-links:first');
        var service = $this.data('service');

        dataLayer.push({
            'data-listen-platform': service,
            'data-podcast-title': $parent.data('episode-title'),
            'event': 'listen-with'
        });
    });

    // track share clicks
    $socialShareLinks.on('click', 'a', function(e) {
        var $this = $(this);
        var $parent = $this.parents('.social-share-links:first');
        var service = $this.data('service');

        if (service === 'copylink') {
            e.preventDefault();

            var inputElement = document.getElementById($this.data('input-element'));
            var $noticeElement = $parent.find('.copy-ok:first');

            copyShareLink(inputElement, $noticeElement);
        }

        dataLayer.push({
            'data-share-network': service,
            'data-podcast-title': $parent.data('episode-title'),
            'event': 'social-share'
        });
    });
})(window.jQuery, window.Mozilla, window.dataLayer || []);
