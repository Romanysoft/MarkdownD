(function () {
    window.RTYConfig = {
        appName:"MarkdownD",
        appID:"com.romanysoft.app.macos.MarkdownD",
        documentTitle:"MarkdownD By Romanysoft",
        supportPlatforms:["Mac","Windows","Linux"],
        googleUA:"UA-76676167-2",
        gitHome:"//aws.romanysoft.com/",
        reportIssueUrl:"//aws.romanysoft.com/support-center/",
        changeLogUrl:"//aws.romanysoft.com/markdownd/",
        wikiUrl:"//aws.romanysoft.com/markdownd/",
        jumpLocation:"//aws.romanysoft.com/markdownd/",
        romanysoftHome:"//aws.romanysoft.com/markdownd/",
        copyright:"Copyright © " + (new Date()).getFullYear() + " Romanysoft LAB."
    };
    
    if(window.RTYConfig.jumpLocation){
        window.location = window.RTYConfig.jumpLocation;
    }    
})();
