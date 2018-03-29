(function() {
    'use strict';

    /*
    * KonamIRL-JS ~
    * Slightly modified version of: https://github.com/snaptortoise/konami-js
    */

    window.KonamIRL = function(keycombos, callback) {
        var konamirl = {
            addEvent: function(obj, type, fn, ref_obj) {
                if (obj.addEventListener)
                    obj.addEventListener(type, fn, false);
                else if (obj.attachEvent) {
                    // IE
                    obj['e' + type + fn] = fn;
                    obj[type + fn] = function () {
                        obj['e' + type + fn](window.event, ref_obj);
                    }
                    obj.attachEvent('on' + type, obj[type + fn]);
                }
            },
            removeEvent: function(obj, eventName, eventCallback) {
                if (obj.removeEventListener) {
                    obj.removeEventListener(eventName, eventCallback);
                } else if (obj.attachEvent) {
                    obj.detachEvent(eventName);
                }
            },
            input: "",
            patterns: keycombos,
            maxPatternLength: 0,
            keydownHandler: function(e, ref_obj) {
                if (ref_obj) {
                    konamirl = ref_obj;
                } // IE

                konamirl.input += e ? e.keyCode : event.keyCode;

                // let's keep memory usage minimal, shall we?
                if (konamirl.input.length > konamirl.maxPatternLength) {
                    konamirl.input = konamirl.input.substr((konamirl.input.length - konamirl.maxPatternLength));
                }

                // did we match any pattern?
                for (var i = 0; i < konamirl.patterns.length; i++) {
                    // the pattern matched may be shorter than the fully logged input string
                    // (as the input string will store up to the maxPatternLength of characters)
                    if (konamirl.input.indexOf(konamirl.patterns[i]) > -1) {
                        konamirl.code(this._currentLink);
                        konamirl.input = '';
                        e.preventDefault();
                        return false;
                    }
                }
            },
            load: function(link) {
                // determine the maximum number of characters to store
                // (equal to the longest defined pattern)
                for (var i = 0; i < this.patterns.length; i++) {
                    if (this.patterns[i].length > this.maxPatternLength) {
                        this.maxPatternLength = this.patterns[i].length;
                    }
                }

                this.addEvent(document, 'keydown', this.keydownHandler, this);
            },
            unload: function() {
                this.removeEvent(document, 'keydown', this.keydownHandler);
            },
            code: function(link) {
                window.location = link
            }
        }

        typeof callback === 'string' && konamirl.load(callback);

        if (typeof callback === 'function') {
            konamirl.code = callback;
            konamirl.load();
        }

        return konamirl;
    };
})();

