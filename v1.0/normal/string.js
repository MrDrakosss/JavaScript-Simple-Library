//  +-----------------------------+
//  |                             |
//  |   Custom String Functions   |
//  |                             |
//  +-----------------------------+
//
// HOW TO USE?
//
// HTML:
// <script src="http://192.168.33.27/sites/library/string_library.js"></script>
//

// Format the text so that the first letter is always in upper case.
function capitalizeFirstLetter(string) {
    return formatNumberInString(string.charAt(0).toUpperCase() + string.slice(1));
}

// Add a space before each number
function formatSpaceBeforeNumber(string) {
    let newstring = "";
    for (let i = 0; i < string.length; i++) {
        let splitted = string.split('');
        if (containsNumbers(splitted[i])) {
            newstring += " ";
            newstring += splitted[i];
        } else {
            newstring += splitted[i];
        }
    }
    return newstring;
}

// Checking whether there is a number in the text
function containsNumbers(string) {
    return /[0-9]/.test(string);
}


const Separator = {
    POINT: ".",
    COMMA: ",",
    SPACE: " ",
    DASH: "-"
}

// Formatting numbers. If the number has 4 digits or more every 3rd character is followed by a comma
function formatNumber(int, separator = Separator.COMMA) {
    int = int.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(int))
        int = int.replace(pattern, "$1" + separator + "$2");
    return int;
}


function formatTime() {
    var d = Date.now();
    var d = new Date(d);
    var d = d.getFullYear() + '-' + format0(d.getMonth(), plus = 1) + '-' + format0(d.getDate()) + ' ' + format0(d.getHours()) + ':' + format0(d.getMinutes()) + ':' + format0(d.getSeconds());

    return d;
}



function format0(v, plus = 0) {
    return (v + plus < 10 ? '0' + (v + plus) : (v + plus))
}