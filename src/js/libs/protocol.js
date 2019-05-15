/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


// create namespace
if (typeof Mzp === 'undefined') { // eslint-disable-line block-scoped-var
    var Mzp = {};
}

(function(doc) {
    'use strict';

    var Supports = {};

    /**
    * matchMedia
    * @return {Boolean} boolean value for if the browser supports matchMedia
    */
    Supports.matchMedia = (function() {
        return typeof window.matchMedia !== 'undefined' && window.matchMedia('all').addListener;
    }());

    /**
    * classList
    * @return {Boolean} boolean value for if the browser supports classList
    */
    Supports.classList = (function() {
        return 'classList' in document.createElement('div');
    }());

    /**
     * details
     * @return {Boolean} boolean value for if the browser supports the details/summary elements
     * - feature detection for HTML5 detail/summary support
     * - https://mathiasbynens.be/notes/html5-details-jquery#comment-35
     */
    Supports.details = (function() {
        var el = doc.createElement('details');
        var fake;
        var root;
        var diff;
        if (!('open' in el)) {
            return false;
        }
        root = doc.body || (function() {
            var de = doc.documentElement;
            fake = true;
            return de.insertBefore(doc.createElement('body'), de.firstElementChild || de.firstChild);
        }());
        el.innerHTML = '<summary>a</summary>b';
        el.style.display = 'block';
        root.appendChild(el);
        diff = el.offsetHeight;
        el.open = true;
        diff = diff !== el.offsetHeight;
        root.removeChild(el);
        if (fake) {
            root.parentNode.removeChild(root);
        }
        return diff;
    }());

    window.Mzp.Supports = Supports;
})(document);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


// create namespace
if (typeof Mzp === 'undefined') { // eslint-disable-line block-scoped-var
    var Mzp = {};
}

(function() {
    'use strict';

    var Utils = {};

    // matches() vendorfill, used by nextUntil
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }

    /**
     * nextUntil
     * @param {Object} el - Element that you want to get the siblings of
     * @param {String} selector - Selector of the element you want to stop collecting siblings before
     * @param {String} filter - Selector to filter results if you only want siblings matching this pattern
     * @return {Array} - an array of HTML elements
     * - https://gomakethings.com/how-to-get-all-sibling-elements-until-a-match-is-found-with-vanilla-javascript/
     */
    Utils.nextUntil = function (el, selector, filter) {
        // Setup siblings array
        var siblings = [];

        // Get the next sibling element
        el = el.nextElementSibling;

        // As long as a sibling exists
        while (el) {

            // If we've reached our match, bail
            if (el.matches(selector)) {
                break;
            }

            // If filtering by a selector, check if the sibling matches
            if (filter && !el.matches(filter)) {
                el = el.nextElementSibling;
                continue;
            }

            // Otherwise, push it to the siblings array
            siblings.push(el);

            // Get the next sibling element
            el = el.nextElementSibling;
        }

        return siblings;
    };

    window.Mzp.Utils = Utils;
})();

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
    'use strict';

    /**
     * This script is used to determine that JS is enabled in the browser,
     * and provides `.js` and `.no-js` styling hooks used in component CSS.
     * In order to avoid content flashing and repaints on page load, it is
     * recommended that this script should be run in the <head>, before
     * page CSS is parsed.
     */

    var doc = document.documentElement;

    // Add class to reflect javascript availability for CSS
    doc.className = doc.className.replace(/\bno-js\b/, 'js');

})();

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// create namespace
if (typeof Mzp === 'undefined') { // eslint-disable-line block-scoped-var
    var Mzp = {};
}

(function(Mzp) {
    'use strict';

    var Menu = {};
    var _menuOpen = false;
    var _hoverTimeout;
    var _hoverTimeoutDelay = 150;
    var _mqWideNav;
    var _wideBreakpoint = '768px';

    var _options = {
        onMenuOpen: null,
        onMenuClose: null,
        onMenuButtonClose: null
    };

    /**
     * Opens a menu panel.
     * @param {Object} el - DOM element (`.mzp-c-menu-category.mzp-js-expandable`)
     * @param {Boolean} animate - show animation when menu panel opens.
     */
    Menu.open = function(el, animate) {
        if (animate) {
            el.classList.add('mzp-is-animated');
        }

        el.classList.add('mzp-is-selected');

        _menuOpen = true; // For checking menu state on keyup.

        el.querySelector('.mzp-c-menu-title').setAttribute('aria-expanded', true);

        if (typeof _options.onMenuOpen === 'function') {
            _options.onMenuOpen(el);
        }
    };

    /**
     * Closes all currently open menu panels.
     * Note: on small screens more than one menu can be open at the same time.
     */
    Menu.close = function() {
        var current = document.querySelectorAll('.mzp-c-menu-category.mzp-is-selected');

        for (var i = 0; i < current.length; i++) {
            // The following classes must be removed in the correct order
            // to work around a bug in bedrock's classList polyfill for IE9.
            // https://github.com/mozilla/bedrock/issues/6221 :/
            current[i].classList.remove('mzp-is-selected');
            current[i].classList.remove('mzp-is-animated');

            current[i].querySelector('.mzp-c-menu-title').setAttribute('aria-expanded', false);
        }

        _menuOpen = false; // For checking menu state on keyup.

        if (typeof _options.onMenuClose === 'function' && current.length > 0) {
            _options.onMenuClose();
        }

        return current.length > 0;
    };

    Menu.onDocumentKeyUp = function(e) {
        if (e.keyCode === 27 && _menuOpen) {
            Menu.close();
        }
    };

    /**
     * Menu panel close button `click` event handler.
     * @param {Object} e - Event object.
     */
    Menu.onCloseButtonClick = function(e) {
        e.preventDefault();

        if (typeof _options.onMenuButtonClose === 'function') {
            _options.onMenuButtonClose();
        }

        Menu.close();
    };

    /**
     * Toggles the open/closed state of a menu panel.
     * @param {Object} el - DOM element (`.mzp-c-menu-category.mzp-js-expandable`)
     */
    Menu.toggle = function(el) {
        var state = el.classList.contains('mzp-is-selected') ? true : false;

        if (!state) {
            Menu.open(el);
        } else {
            // The following classes must be removed in the correct order
            // to work around a bug in bedrock's classList polyfill for IE9.
            // https://github.com/mozilla/bedrock/issues/6221 :/
            el.classList.remove('mzp-is-selected');
            el.classList.remove('mzp-is-animated');
            el.querySelector('.mzp-c-menu-title').setAttribute('aria-expanded', false);

            if (typeof _options.onMenuClose === 'function') {
                _options.onMenuClose();
            }
        }
    };

    /**
     * Menu `mouseenter` event handler.
     * Opens the menu only when hover intent is shown.
     * Animates only if a menu panel is not already open.
     * @param {Object} e - Event object.
     */
    Menu.onMouseEnter = function(e) {
        clearTimeout(_hoverTimeout);

        _hoverTimeout = setTimeout(function() {
            var current = Menu.close();
            var animate = current ? false: true;

            Menu.open(e.target, animate);
        }, _hoverTimeoutDelay);
    };

    /**
     * Menu `mouseleave` event handler.
     * Closes the menu only when hover intent is shown.
     */
    Menu.onMouseLeave = function() {
        clearTimeout(_hoverTimeout);

        _hoverTimeout = setTimeout(function() {
            Menu.close();
        }, _hoverTimeoutDelay);
    };

    /**
     * Menu `focusout` event handler.
     * Closes the menu when focus moves to an alement outside of the currently open panel.
     */
    Menu.onFocusOut = function() {
        var self = this;

        /**
         * After an element loses focus, `document.activeElement` will always be `body` before
         * moving to the next element. A `setTimeout` of `0` circumvents this issue as it
         * re-queues the JavaScript to run at the end of the current excecution.
         */
        setTimeout(function() {
            // If the menu is open and the newly focused element is not a child, then call close().
            if (!self.contains(document.activeElement) && self.classList.contains('mzp-is-selected')) {
                Menu.close();
            }
        }, 0);
    };

    /**
     * Menu link `click` event handler for wide viewports.
     * Closes any currently open menu panels before opening the selected one.
     * @param {Object} e - Event object.
     */
    Menu.onClickWide = function(e) {
        e.preventDefault();
        Menu.close();
        Menu.open(e.target.parentNode);
    };

    /**
     * Menu link `click` event handler for small viewports.
     * Toggles the currently selected menu open open/close state.
     * @param {Object} e - Event object.
     */
    Menu.onClickSmall = function(e) {
        e.preventDefault();
        Menu.toggle(e.target.parentNode);
    };

    /**
     * Convenience function for checking `matchMedia` state.
     * @return {Boolean}
     */
    Menu.isWideViewport = function() {
        return _mqWideNav.matches;
    };

    /**
     * Toggle desktop/mobile navigation using `matchMedia` event handler.
     */
    Menu.handleState = function() {
        _mqWideNav = matchMedia('(min-width: ' + _wideBreakpoint + ')');

        _mqWideNav.addListener(function(mq) {
            Menu.close();

            if (mq.matches) {
                Menu.unbindEventsSmall();
                Menu.bindEventsWide();
            } else {
                Menu.unbindEventsWide();
                Menu.bindEventsSmall();
            }
        });

        if (Menu.isWideViewport()) {
            Menu.bindEventsWide();
        } else {
            Menu.bindEventsSmall();
        }
    };

    /**
     * Bind events for wide viewports.
     */
    Menu.bindEventsWide = function() {
        var items = document.querySelectorAll('.mzp-c-menu-category.mzp-js-expandable');
        var link;
        var close;

        for (var i = 0; i < items.length; i++) {
            items[i].addEventListener('mouseenter', Menu.onMouseEnter, false);
            items[i].addEventListener('mouseleave', Menu.onMouseLeave, false);
            items[i].addEventListener('focusout', Menu.onFocusOut, false);

            link = items[i].querySelector('.mzp-c-menu-title');
            link.addEventListener('click', Menu.onClickWide, false);

            close = items[i].querySelector('.mzp-c-menu-button-close');
            close.addEventListener('click', Menu.onCloseButtonClick, false);
        }

        // close with escape key
        document.addEventListener('keyup', Menu.onDocumentKeyUp, false);
    };

    /**
     * Unbind events for wide viewports.
     */
    Menu.unbindEventsWide = function() {
        var items = document.querySelectorAll('.mzp-c-menu-category.mzp-js-expandable');
        var link;
        var close;

        for (var i = 0; i < items.length; i++) {
            items[i].removeEventListener('mouseenter', Menu.onMouseEnter, false);
            items[i].removeEventListener('mouseleave', Menu.onMouseLeave, false);
            items[i].removeEventListener('focusout', Menu.onFocusOut, false);

            link = items[i].querySelector('.mzp-c-menu-title');
            link.removeEventListener('click', Menu.onClickWide, false);

            close = items[i].querySelector('.mzp-c-menu-button-close');
            close.removeEventListener('click', Menu.onCloseButtonClick, false);
        }

        document.removeEventListener('keyup', Menu.onDocumentKeyUp, false);
    };

    /**
     * Bind events for small viewports.
     */
    Menu.bindEventsSmall = function() {
        var items = document.querySelectorAll('.mzp-c-menu-category.mzp-js-expandable .mzp-c-menu-title');

        for (var i = 0; i < items.length; i++) {
            items[i].addEventListener('click', Menu.onClickSmall, false);
        }
    };

    /**
     * Unbind events for small viewports.
     */
    Menu.unbindEventsSmall = function() {
        var items = document.querySelectorAll('.mzp-c-menu-category.mzp-js-expandable .mzp-c-menu-title');

        for (var i = 0; i < items.length; i++) {
            items[i].removeEventListener('click', Menu.onClickSmall, false);
        }
    };

    /**
     * Set initial ARIA menu panel states.
     */
    Menu.setAria = function() {
        var items = document.querySelectorAll('.mzp-c-menu-category.mzp-js-expandable .mzp-c-menu-title');

        for (var i = 0; i < items.length; i++) {
            items[i].setAttribute('aria-expanded', false);
        }
    };

    /**
     * Enhances the menu for 1st class JS support.
     */
    Menu.enhanceJS = function() {
        var menu = document.querySelectorAll('.mzp-c-menu');

        for (var i = 0; i < menu.length; i++) {
            menu[i].classList.remove('mzp-is-basic');
            menu[i].classList.add('mzp-is-enhanced');
        }
    };

    /**
     * Basic feature detect for 1st class menu JS support.
     */
    Menu.isSupported = function() {
        if (typeof Mzp.Supports !== 'undefined') {
            return Mzp.Supports.matchMedia && Mzp.Supports.classList;
        } else {
            return false;
        }
    };

    /**
     * Initialise menu.
     * @param {Object} options - configurable options.
     */
    Menu.init = function(options) {
        if (typeof options === 'object') {
            for (var i in options) {
                if (options.hasOwnProperty(i)) {
                    _options[i] = options[i];
                }
            }
        }

        if (Menu.isSupported()) {
            Menu.handleState();
            Menu.setAria();
            Menu.enhanceJS();
        }
    };

    window.Mzp.Menu = Menu;

})(window.Mzp);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// create namespace
if (typeof Mzp === 'undefined') { // eslint-disable-line block-scoped-var
    var Mzp = {};
}

Mzp.Modal = (function(w) { // eslint-disable-line block-scoped-var
    'use strict';

    var open = false;
    var body = w.document.body;
    var html = w.document.documentElement;
    var options = {};
    var pageContentParent;
    var pageContent;
    var modal;

    /*
    origin: element that triggered the modal
    content: content to display in the modal
    options: object of optional params:
        title: title to display at the top of the modal.
        className: optional CSS class name to apply to the modal window.
        onCreate: function to fire after modal has been created.
        onDestroy: function to fire after modal has been closed.
        allowScroll: boolean - allow/restrict page scrolling when modal is open.
        closeText: string to use for close button a11y.
    */
    var _createModal = function(origin, content, opts) {
        options = opts;

        var isSmallViewport = window.innerWidth < 760;

        // Make sure modal is closed (if one exists)
        if (open) {
            _closeModal();
        }

        // Create new modal
        var title = (options && options.title) ? options.title : '';
        var className = (options && options.className) ? options.className : '';
        var closeText = (options && options.closeText) ? options.closeText : '';

        var modalFragment =
            '<div class="mzp-c-modal ' + className + '" role="dialog" aria-labelledby="' + origin.getAttribute('id') + '" tabindex="-1">' +
            '  <div class="mzp-c-modal-window">' +
            '    <div class="mzp-c-modal-inner">' +
            '      <header><h2>' + title + '</h2></header>' +
            '      <div class="mzp-c-modal-close">' +
            '        <button type="button" class="mzp-c-modal-button-close">' + closeText + '</button>' +
            '      </div>' +
            '    </div>' +
            '  </div>' +
            '</div>';

        if ((options && !options.allowScroll) || isSmallViewport) {
            html.classList.add('mzp-is-noscroll');
        } else {
            html.classList.remove('mzp-is-noscroll');
        }

        // Add modal to page
        body.insertAdjacentHTML('beforeend', modalFragment);

        modal = document.querySelector('.mzp-c-modal');

        pageContent = content;
        pageContentParent = content.parentNode;

        var modalInner = document.querySelector('.mzp-c-modal-inner');
        modalInner.appendChild(content);

        content.classList.add('mzp-c-modal-overlay-contents');

        // close modal on clicking close button or background.
        var closeButton = document.querySelector('.mzp-c-modal-button-close');
        closeButton.addEventListener('click', _closeModal, false);
        closeButton.setAttribute('title', closeText);

        // close modal on clicking the background (but not bubbled event).
        document.querySelector('.mzp-c-modal .mzp-c-modal-window').addEventListener('click', function (e) {
            if (e.target === this) {
                _closeModal();
            }
        }, false);

        modal.focus();

        // close with escape key
        document.addEventListener('keyup', _onDocumentKeyUp, false);

        // prevent focusing out of modal while open
        document.addEventListener('focus', _onDocumentFocus, false);

        // remember which element opened the modal for later focus
        origin.classList.add('mzp-c-modal-origin');

        open = true;

        // execute (optional) open callback
        if (options && typeof(options.onCreate) === 'function') {
            options.onCreate();
        }
    };

    var _onDocumentKeyUp = function(e) {
        if (e.keyCode === 27 && open) {
            _closeModal();
        }
    };

    var _onDocumentFocus = function(e) {
        // .contains must be called on the underlying HTML element, not the jQuery object
        if (open && !modal.contains(e.target)) {
            e.stopPropagation();
            modal.focus();
        }
    };

    var _closeModal = function(e) {
        if (e) {
            e.preventDefault();
        }

        // return modal content to the page
        pageContentParent.appendChild(pageContent);

        // remove modal from the page
        modal.parentNode.removeChild(modal);

        // allow page to scroll again
        html.classList.remove('mzp-is-noscroll');

        // restore focus to element that opened the modal
        var origin = document.querySelector('.mzp-c-modal-origin');
        origin.focus();
        origin.classList.remove('mzp-c-modal-origin');

        open = false;

        // unbind document listeners
        document.removeEventListener('focus', _onDocumentFocus, false);

        // execute (optional) callback
        if (options && typeof(options.onDestroy) === 'function') {
            options.onDestroy();
        }

        // free up options
        options = {};
    };

    return {
        createModal: function(origin, content, opts) {
            _createModal(origin, content, opts);
        },
        closeModal: function() {
            _closeModal();
        }
    };
})(window);

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// create namespace
if (typeof Mzp === 'undefined') { // eslint-disable-line block-scoped-var
    var Mzp = {};
}

(function() {
    'use strict';

    var Navigation = {};
    var navItemsLists;
    var _options = {
        onNavOpen: null,
        onNavClose: null
    };

    /**
     * Event handler for navigation menu button `click` events.
     */
    Navigation.onClick = function(e) {
        var thisNavItemList = e.target.parentNode.querySelector('.mzp-c-navigation-items');

        e.preventDefault();

        // Update button state
        e.target.classList.toggle('mzp-is-active');

        // Update menu state
        thisNavItemList.classList.toggle('mzp-is-open');

        // Update aria-expended state on menu.
        var expanded = thisNavItemList.classList.contains('mzp-is-open') ? true : false;
        thisNavItemList.setAttribute('aria-expanded', expanded);

        if (expanded) {
            if (typeof _options.onNavOpen === 'function') {
                _options.onNavOpen(thisNavItemList);
            }
        } else {
            if (typeof _options.onNavClose === 'function') {
                _options.onNavClose(thisNavItemList);
            }
        }
    };

    /**
     * Set initial ARIA navigation states.
     */
    Navigation.setAria = function() {
        for (var i = 0; i < navItemsLists.length; i++) {
            navItemsLists[i].setAttribute('aria-expanded', false);
        }
    };

    /**
     * Bind navigation event handlers.
     */
    Navigation.bindEvents = function() {
        navItemsLists = document.querySelectorAll('.mzp-c-navigation-items');
        if (navItemsLists.length > 0) {
            var navButtons = document.querySelectorAll('.mzp-c-navigation-menu-button');
            for (var i = 0; i < navButtons.length; i++) {
                navButtons[i].addEventListener('click', Navigation.onClick, false);
            }
            Navigation.setAria();
        }
    };

    /**
     * Initialise menu.
     * @param {Object} options - configurable options.
     */
    Navigation.init = function(options) {
        if (typeof options === 'object') {
            for (var i in options) {
                if (options.hasOwnProperty(i)) {
                    _options[i] = options[i];
                }
            }
        }

        Navigation.bindEvents();
    };

    window.Mzp.Navigation = Navigation;

})();
