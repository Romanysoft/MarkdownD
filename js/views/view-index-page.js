(function () {
    window['UI'] = window['UI'] || {};
    window.UI.c$ = window.UI.c$ || {};
})();

(function(){
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var c$ = {};
    c$ = $.extend(window.UI.c$, {});
    
    c$.updateHomePage = function(){
        
        var l10n = c$.l10nFormatObj(c$.l10n["HomePage"] || {});
        var htmlContent = "";
        
        // 更新        <h1 class="project-name"></h1>
        //             <h2 class="project-tagline"></h2>
        $('.project-name').html(window.RTYConfig.appName);
        $('.project-tagline').html(l10n["ProjectTagline"]);
        
        $('.btn-download-link').html(l10n['BtnDownload']);
        $('.btn-buy-link').html(l10n['BtnBuy']);
        
        // 更新Screents
        htmlContent = template('screen-content-tmpl', {list:l10n["Screens"]});
        $('.app-screens').html(htmlContent);
        
        // 更新Features
        htmlContent = template('features-content-tmpl', {SectionName: l10n["Features"].SectionName, list:l10n["Features"].list});
        $('.section-features').html(htmlContent);
        
        // 更新Reviews
        htmlContent = template('review-content-tmpl', {SectionName: l10n["UserReviews"].SectionName, list:l10n["UserReviews"].list});
        $('.section-reviews').html(htmlContent);
    };
    
    c$.MC_l10n.add(c$.updateHomePage);
    
    window.UI.c$ = $.extend(window.UI.c$, c$);
})();