(function () {
  window['UI'] = window['UI'] || {};
  window.UI.c$ = window.UI.c$ || {};
})();


(function () {
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var c$ = {};
  c$ = $.extend(window.UI.c$, {});

  c$.l10n = {}; // 多语言对象
  c$.l10nFormatObj = function (obj) { // 带有
    var transalteObj = null;

    if ($.type(obj) === "array") {
      transalteObj = [];
      $.each(obj, function (idx, ele) {
        transalteObj.push(c$.l10nFormatObj(ele));
      })
    }

    if ($.type(obj) === "object") {
      var json = obj;
      transalteObj = {};
      for (var x in json) {
        var ele = json[x];
        transalteObj[x] = c$.l10nFormatObj(ele);
      }
    }

    if ($.type(obj) === "string") {
      var org = obj;
      org = org.replace(/(%){2,}/, "");
      org = org.replace(/({){2,}/, "");
      org = org.replace(/(}){2,}/, "");
      transalteObj = org;
    }

    if ($.type(obj) === "number"
        || $.type(obj) === "date"
        || $.type(obj) === "function"
        || $.type(obj) === "boolean"
        || $.type(obj) === "regexp") {

      transalteObj = obj;
    }

    return transalteObj;
  };

  c$.l10nPre = "app_";
  c$.languageMap = {};
  c$.MC_l10n = $.Callbacks();

  c$.LoadLanguageMap = function(url, next){
    $.ajax({
      url: url,
      dataType: "json",
      jsonp: false,
      error: function () {
        next && next();
      },
      success: function (data) {
        console.log('----- load LoadLanguageMap .... ' + url);
        c$.languageMap = data;
        next && next();
      }
    })
  };

  c$.setUserCustomLanguage = function(langID){
    var localKey = RTYConfig.appID+"+userConfig";
    var userConfig = null;
    userConfig = (userConfig = localStorage.getItem(localKey)) && JSON.parse(userConfig);
    userConfig = userConfig || {};

    userConfig["lang"] = langID;
    localStorage.setItem(localKey, JSON.stringify(userConfig));
  };

  c$.getUserCustomLanguage = function(){
    var localKey = RTYConfig.appID+"+userConfig";
    var userConfig = null;
    userConfig = (userConfig = localStorage.getItem(localKey)) && JSON.parse(userConfig);
    userConfig = userConfig || {};

    return userConfig["lang"];
  };

  c$.LoadAppLanguage = function (languageList) {
    function trySetLocal(url, next) {
      $.ajax({
        url: url,
        dataType: "json",
        jsonp: false,
        error: function () {
          next && next();
        },
        success: function (data) {
          console.log('----- load 110n .... ' + url);
          c$.l10n = data;
          c$.MC_l10n.fire();
        }
      })
    }

    function gotoTry(langArray) {
      if ($.isArray(langArray) && langArray.length > 0) {
        trySetLocal(langArray[0], function () {
          var newArray = langArray.splice(1);
          gotoTry(newArray);
        })
      }
    }

    gotoTry(languageList);
  };

  c$.getPreTryLangList = function(){
    var navLang = navigator.language;
    var tryLangList = [
      "l10n/" + c$.l10nPre + navLang + ".json",
      "l10n/" + c$.l10nPre + navLang.split('-')[0] + ".json",
      "l10n/" + c$.l10nPre + "en-US.json",
      "l10n/" + c$.l10nPre + "en.json"
    ];

    var userLang = this.getUserCustomLanguage();
    if(userLang){
      tryLangList =["l10n/" + c$.l10nPre + userLang + ".json"].concat(tryLangList);
    }

    return tryLangList;
  };

  c$.loadL10n = function () {
    try {
      c$.LoadLanguageMap("l10n/lang.json", function(){
        /// 启动翻译尝试
        c$.LoadAppLanguage(c$.getPreTryLangList());
      });


    } catch (e) {
    }
  };

  window.UI.c$ = $.extend(window.UI.c$, c$);
})();