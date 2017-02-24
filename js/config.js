(function () {
    window.RTYConfig = {
        appName:"MarkdownD",
        appID:"com.romanysoft.app.macos.MarkdownD",
        documentTitle:"MarkdownD By Romanysoft",
        supportPlatforms:["Mac","Windows","Linux"],
        googleUA:"UA-76676167-2",
        gitHome:"//github.com/Romanysoft/MarkdownD",
        reportIssueUrl:"//github.com/Romanysoft/MarkdownD/issues",
        changeLogUrl:"//github.com/Romanysoft/MarkdownD/wiki/Changelog",
        wikiUrl:"//github.com/Romanysoft/MarkdownD/wiki",
        jumpLocation:"https://www.romanysoft.net/markdownd/",
        romanysoftHome:"//www.romanysoft.com",
        copyright:"Copyright © " + (new Date()).getFullYear() + " Romanysoft LAB."
    };
    
    if(window.RTYConfig.jumpLocation){
        window.location = window.RTYConfig.jumpLocation;
    }    
})();