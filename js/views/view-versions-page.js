(function(){
    var  versionList = [
        {
            version:"2.2.0",
            zipList:[
                {name:"MarkdownD-v2.2.0-win32-x86-setup.exe", size:"45.5MB", downURL:"http://pan.baidu.com/s/1o7a7N9w"},
                {name:"MarkdownD-v2.2.0-win32-x64-setup.exe", size:"54.4MB", downURL:"http://pan.baidu.com/s/1c0V252o"},
                {name:"MarkdownD-v2.2.0-darwin-x64.zip", size:"6.9MB", downURL:"http://pan.baidu.com/s/1c0JXm5U"},
            ]
        }
    ];
    
    
    
    $(document).ready(function(){
        var htmlContent = template('version-content-tmpl', {list:versionList});
        $('#versions-content').html(htmlContent);
    })
})();