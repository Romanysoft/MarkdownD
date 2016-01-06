(function () {
    window['UI'] = window['UI'] || {};
    window.UI.c$ = window.UI.c$ || {};
})();

(function(){
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var c$ = {};
    c$ = $.extend(window.UI.c$, {});
    
    c$.updateTopBarUI = function(){
        var l10n = c$.l10nFormatObj(c$.l10n["TopBar"] || {});

        var  navgList = [
            {name:l10n["Home"] || "Home", url:"./index.html"},
            {name:l10n["Feature"] || "Feature", url:"./feature.html"},
            {name:l10n["Documents"] || "Documents", url:"./documents.html"},
            {name:l10n["ReleaseNotes"] || "ReleaseNotes", url:"./releasenotes.html"},
            {name:l10n["Downloads"] || "Downloads", url:"./versions.html"},
            {name:l10n["Buy"] || "Buy", url:"./buy.html"},
            {name:l10n["Roadmap"] || "Roadmap", url:"./roadmap.html"},
            {name:l10n["ReportIssue"] || "ReportIssue", url:"https://github.com/Romanysoft/MarkdownD/issues"},
            {name:l10n["Languages"] || "Languages", url:"./languages.html"},
        ];
        
        var htmlContent = template('topbar-content-tmpl', {list:navgList});
        $('.top-bar').html(htmlContent);
    };
    
    c$.MC_l10n.add(c$.updateTopBarUI);
    
    window.UI.c$ = $.extend(window.UI.c$, c$);
})();