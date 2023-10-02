//  +---------------------------+
//  |                           |
//  |   Custom Math Functions   |
//  |                           |
//  +---------------------------+
//
// HOW TO USE?
//
// HTML:
// <script src="http://192.168.33.27/sites/library/math_library.js"></script>
//

Math.chance = function (chance) {
    if (chance == 100) return true;
    var i = Math.random();
    return i < parseFloat('0.' + chance)
}


Math.plcTime = function (year_start = '20', ym, dh, ms) {
    var year = year_start + formatNumber0(parseInt(ym).toString(16), 4).substring(0, 2);

    var month = formatNumber0(parseInt(ym).toString(16), 4).substring(2, 4);
    var day = formatNumber0(parseInt(dh).toString(16), 4).substring(0, 2);

    var hour = formatNumber0(parseInt(dh).toString(16), 4).substring(2, 4);
    var minutes = formatNumber0(parseInt(ms).toString(16), 4).substring(0, 2);
    var second = formatNumber0(parseInt(ms).toString(16), 4).substring(2, 4);

    var YMD = year + '-' + month + '-' + day;
    var HMS = hour + ':' + minutes + ':' + second;
    return YMD + ' ' + HMS;
}