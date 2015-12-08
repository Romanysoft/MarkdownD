(function() {

    var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
    document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));

    $(document).ready(function() {
        try {
            var pageTracker = _gat._getTracker("UA-43238484-4");
            pageTracker._trackPageview();
        } catch (err) {
            console.error(err);
        }
    })


})();