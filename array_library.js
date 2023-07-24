//  +----------------------------+
//  |                            |
//  |   Custom Array Functions   |
//  |                            |
//  +----------------------------+
//
// HOW TO USE?
//
// HTML:
// <script src="http://192.168.33.27/sites/library/array_library.js"></script>
//

Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}