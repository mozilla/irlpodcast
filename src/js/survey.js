(function($) {
    'use strict';

    var cookieName = 'survey-dismiss';
    var hasCookies = typeof Mozilla.Cookies !== 'undefined' && Mozilla.Cookies.enabled();

    var $surveyBanner;

    // ensure cookies are available and the visitors has not previously dismissed the banner
    if (hasCookies && !Mozilla.Cookies.getItem(cookieName)) {
        $surveyBanner = $('#survey-banner');

        // show the banner after a 2.5 minute wait
        setTimeout(function() {
            $('#survey-dismiss').one('click', function() {
                // don't show the banner again for 7 days
                var d = new Date();
                var noShowDays = 7;

                d.setTime(d.getTime() + (noShowDays * 24 * 60 * 60 * 1000));
                Mozilla.Cookies.setItem(cookieName, true, d.toUTCString(), '/');

                $surveyBanner.removeClass('visible');
            });

            $surveyBanner.addClass('visible');
        }, 150000);
    }
})(window.jQuery);
