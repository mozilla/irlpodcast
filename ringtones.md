---
layout:     page
title:      IRL Ringtones
permalink:  /ringtones/
body_id:    ringtones
---

Better than the beep-boop sound your phone normally makes.

- [IRL Ringtone (Android)](https://assets.mozilla.net/irlringtones/irl-ringtone-android.mp3)
- [IRL Ringtone (Apple)](https://assets.mozilla.net/irlringtones/irl-ringtone-apple.m4r)

<div id="ringringring"></div>

Not quite sure how to set a custom ringtone? We've put together some instructions to help you out. (But you might need to search out additional instructions depending on your device.)

## Setting a custom IRL ringtone on your smartphone
<p></p>
### Apple iPhone

**First, start on your computer**

1. Download the file [irl-ringtone-apple.m4r](https://assets.mozilla.net/irlringtones/irl-ringtone-apple.m4r) from our site and save it somewhere from which it will be easy for you to drag and drop
2. Connect your iPhone to your computer with the lightning cable
3. In iTunes, select the iPhone from the menu bar (top left)

#### If using iTunes 12:

1. Select “Tones” in the sidebar
2. Drag and drop the file you just downloaded into this folder

#### If using an older version of iTunes:

1. Under “Summary” scroll down to Options, and check “Manually manage music and videos”
2. Go to "Tones"
3. Drag and Drop the file you just downloaded into this folder

**Now grab your iPhone**

1. Head to Settings > Sounds > Ringtone (you can unplug your phone from the computer
now)
2. The IRL Ringtone should appear - if not, you might have to hit the “Download” button

### Android

Because there are many different Android phones, there’s no “one way” to download a ringtone to your Android device. You’ll likely need some kind of file manager for this. You may want to search online for instructions that apply to your specific device. But here's one of the more straightforward ways that might work for you.

1. Download the file named [irl-ringtone-android.mp3](https://assets.mozilla.net/irlringtones/irl-ringtone-android.mp3) to your device
2. Go to Settings > Sound > Device Ringtone
3. Select the file
4. Tap the “Add”. You might need to select “Music Player” depending on how many file management apps you’ve installed
5. Select the IRL Ringtone file and tap on “Done”

<script>
(function() {
    /*
    * KonamIRL-JS ~
    * Slightly modified version of: https://github.com/snaptortoise/konami-js
    */

    var KonamIRL = function(callback) {
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
            patterns: [
                '38384040373937396665', // ↑↑↓↓←→←→ba
                '56545553514857', // 8675309
                '56484853565650514848' // 8005882300 (empiiiiiire)
            ],
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

    var kirl = KonamIRL(makeEgg);
})();
</script>
