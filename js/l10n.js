
(function () {
    window['UI'] = window['UI'] || {};
    window.UI.c$ = window.UI.c$ || {};
})();


(function(){
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var c$ = {};
    c$ = $.extend(window.UI.c$, {});
    
    c$.l10n = {}; // 多语言对象
    c$.MC_l10n = $.Callbacks();
    
    c$.loadL10n = function(){
        try{
           //加载默认语言
            $.getJSON("l10n/en-US.json", function(data){
                c$.l10n = data;
                c$.MC_l10n.fire();

               //根据浏览器的语言标识进行加载
                $.getJSON("l10n/" + navigator.language + ".json", function (data) {
                    c$.l10n = data;
                    c$.MC_l10n.fire();
                });
            });

        }catch(e){}
    };
    
    window.UI.c$ = $.extend(window.UI.c$, c$);
})();