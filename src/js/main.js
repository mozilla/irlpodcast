/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


if (typeof window.dataLayer === 'undefined') {
    window.dataLayer = [];
}

(function($, Mozilla, Clipboard, dataLayer, Mzp) {
    'use strict';

    var $subscribeButtons = $('.episode-subscribe');
    var $showNotesLink = $('.episode-shownotes-link');
    var $subscribeLinks = $('[data-link-type="subscribe"]');
    var $shareLinks = $('[data-link-type="social share"]');

    // set up clipboard.js
    var copylinkClipboard = new Clipboard('.js-action-copy a');

    // display related copy success message when clicking copy icon
    copylinkClipboard.on('success', function(e) {
        var $confirmation = $(e.trigger).nextAll('.episode-copy-ok').first();
        $confirmation.addClass('show');
        setTimeout(function() {
            $confirmation.removeClass('show');
        }, 2000);
    });

    // track subscribe clicks
    $subscribeLinks.on('click', function() {
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
    $shareLinks.on('click', function(e) {
        var $this = $(this);
        var $parent = $this.parents('.share-link:first');
        var service = $this.data('service');

        if (service === 'copylink') {
            e.preventDefault();
        }

        dataLayer.push({
            'data-share-network': service,
            'data-podcast-title': $parent.data('episode-title'),
            'event': 'social-share'
        });
    });

    // lazy load simplecast players
    Mozilla.LazyLoad.init();

    // open subscribe modal
    $subscribeButtons.on('click', function(e) {
        var linkId = $(e.target).attr('data-subscribe-links');
        var content = document.getElementById(linkId);
        //open modal when clicked
        Mzp.Modal.createModal(e.target, content, {
            title: 'Subscribe to IRL',
            closeText: 'Close modal',
            onCreate: function() {
                //console.log('Modal opened');
            },
            onDestroy: function() {
                //console.log('Modal closed');
            }
        });
        // content = subscribe links for this episode data-subscribe-links
    });

    // open show notes modal
    $showNotesLink.on('click', function(e) {
        e.preventDefault();
        var linkId = $(e.target).attr('data-shownotes');
        var content = document.getElementById(linkId);
        //open modal when clicked
        Mzp.Modal.createModal(e.target, content, {
            title: 'Show Notes',
            closeText: 'Close modal',
            onCreate: function() {
                //console.log('Modal opened');
            },
            onDestroy: function() {
                //console.log('Modal closed');
            }
        });
        // content = subscribe links for this episode data-subscribe-links
    });

})(window.jQuery, window.Mozilla, window.Clipboard, window.dataLayer, window.Mzp || []);
