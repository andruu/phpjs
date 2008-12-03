function getdate(timestamp) {
    // http://kevin.vanzonneveld.net
    // +   original by: Paulo Ricardo F. Santos
    // *     example 1: getdate(1055901520);
    // *     returns 1: {'seconds': 40, 'minutes': 58, 'hours': 21, 'mday': 17, 'wday': 2, 'mon': 6, 'year': 2003, 'yday': 167, 'weekday': 'Tuesday', 'month': 'June', '0': 1055901520}

    var _w = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var _m = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var d = (typeof timestamp == 'number') ? new Date(timestamp * 1000) : new Date();
    var w = d.getDay();
    var m = d.getMonth();
    var y = d.getFullYear();
    var r = {};

    r['seconds'] = d.getSeconds();
    r['minutes'] = d.getMinutes();
    r['hours'] = d.getHours();
    r['mday'] = d.getDate();
    r['wday'] = w;
    r['mon'] = m + 1;
    r['year'] = y;
    r['yday'] = Math.floor((d - (new Date(y, 0, 1))) / 86400000);
    r['weekday'] = _w[w];
    r['month'] = _m[m];
    r['0'] = parseInt(d.getTime() / 1000);

    return r;
}