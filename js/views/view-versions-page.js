(function () {
    window['UI'] = window['UI'] || {};
    window.UI.c$ = window.UI.c$ || {};
})();

(function(){
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var c$ = {};
    c$ = $.extend(window.UI.c$, {});
    
    c$.updateVersionsPage = function(){
        
        var l10n = c$.l10n["VersionPage"] || {};

        var win32Url = "images/download/win32.png",
            osxUrl = "images/download/osx.png",
            linuxUrl = "images/download/linux.png";

        var  versionList = [
            {
                version:"2.2.0",
                zipList:[
                    {osUrl:win32Url, name:"MarkdownD-v2.2.0-win32-x86-setup.exe", size:"45.5MB", downURL:"http://pan.baidu.com/s/1o7a7N9w"},
                    {osUrl:win32Url,name:"MarkdownD-v2.2.0-win32-x64-setup.exe", size:"54.4MB", downURL:"http://pan.baidu.com/s/1c0V252o"},
                    {osUrl:osxUrl,name:"MarkdownD-v2.2.0-darwin-x64.zip", size:"6.9MB", downURL:"http://pan.baidu.com/s/1c0JXm5U"},
                ]
            }
        ];        
        
        var htmlContent = template('version-content-tmpl', {labelVersion:l10n["labelVersion"] || "Version", list:versionList});
        $('#versions-content').html(htmlContent);
    };
    
    c$.MC_l10n.add(c$.updateVersionsPage);
    
    window.UI.c$ = $.extend(window.UI.c$, c$);
})();