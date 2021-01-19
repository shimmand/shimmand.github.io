javascript:(function(){
    let matches = location.href.match(/[^/]+/g);

    try {
        if (matches.length <= 4) throw 'Not available on this page.';
        if (matches[1].indexOf('github.com') == -1) throw 'Not available on this page.';
        if (matches.indexOf('blob') == -1) throw 'Not available on this page.';

        let begin = matches.indexOf('blob') + 2;
        let rest = '';

        for (i = begin; i < matches.length; i++){
            rest += `/${matches[i]}`;
        };
        window.open(`https://${matches[2]}.github.io/${matches[3]}${rest}`);
        
    } catch (e) {
        window.alert(e);
    }
})();
