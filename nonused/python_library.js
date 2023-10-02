//  +------------------------------+
//  |                              |
//  |   Python Library Functions   |
//  |                              |
//  +------------------------------+
//
// HOW TO USE?
//
// <script src="http://192.168.33.27/sites/library/python_library.js"></script>
//



function print(str, sep = '') {
    if (Array.isArray(str)) {
        var s = '';
        str.forEach(element => s += element);
        console.log(s);
    } else {
        console.log(str);
    }
}

function type() {
    
}