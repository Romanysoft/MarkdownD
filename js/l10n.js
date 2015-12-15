
(function () {
    window['UI'] = window['UI'] || {};
    window.UI.c$ = window.UI.c$ || {};
})();


(function(){
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var c$ = {};
    c$ = $.extend(window.UI.c$, {});
    
    c$.l10n = {}; // 多语言对象
    c$.l10nPre = "app_";
    c$.MC_l10n = $.Callbacks();
    
    c$.loadL10n = function(){
        try{
           //加载默认语言
            var defaultL10n = c$.l10nPre  + "en-us.json";
            $.getJSON("l10n/" + defaultL10n, function(data){
                c$.l10n = data;
                c$.MC_l10n.fire();

               //根据浏览器的语言标识进行加载
                $.getJSON("l10n/" +  c$.l10nPre  + navigator.language.toLowerCase() + ".json", function (data) {
                    c$.l10n = data;
                    c$.MC_l10n.fire();
                });
            });

        }catch(e){}
    };
    
    window.UI.c$ = $.extend(window.UI.c$, c$);
})();