
var highlight_keyword = function(context, keyword) {
    $('.' + context).jmHighlight(keyword, {
         // Optional
        "filter": [
            ".noHighlight",
            ".ignore"
        ],
        // Optional. Default is "span"
        "element": "span",
        "separateWordSearch": true,
        // Optional. Default is "highlight"
        "className": "customHighlight",
        // Optional: If your search keyword is more than one word
        // separeted with a blank, you can define this property with true
        // if you want a separeted search for the keywords. If you define
        // nothing the default value is false, so it will be searched
        // for the complete term
        "separateWordSearch": true,
        // if diacritics should be matched too
        "diacritics": true, // default true
        // match e.g. "1" and also "one".
        // This can also be used to match dissolved umlauts like ä and ae
        "synonyms": {
            "one": "1",
            "ä": "ae"
        },
        // set "debug" to true if you want to see console logs
        "debug": true,
        // set a custom log object if "debug" is true
        "log": window.console
    });
};

var square = function(x) {
    return x * x;
};
