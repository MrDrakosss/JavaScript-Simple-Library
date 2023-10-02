class LibraryImporter {
    constructor() {

    }

    setup(obj) {
        this.jquery = false;

        if (window.jQuery) {
            console.log('jQuery already loaded');
            this.jquery = !this.jquery;
        } else {
            console.info('[LibraryImporter] jQuery not found');
            console.info('[LibraryImporter] jQuery loading..')
            var script = document.createElement("SCRIPT");
            script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
            script.type = 'text/javascript';
            document.getElementsByTagName("head")[0].appendChild(script);
            console.info('[LibraryImporter] jQuery successfully imported');
        }

        if (window.jQuery) {
            var script = document.createElement("SCRIPT");
            script.src = 'https://raw.githubusercontent.com/MrDrakosss/JavaScript-Simple-Library/main/v1.0/array.js';
            script.type = 'text/javascript';
            document.getElementsByTagName("head")[0].appendChild(script);

            script = document.createElement("SCRIPT");
            script.src = 'https://raw.githubusercontent.com/MrDrakosss/JavaScript-Simple-Library/main/v1.0/math.js';
            script.type = 'text/javascript';
            document.getElementsByTagName("head")[0].appendChild(script);

            script = document.createElement("SCRIPT");
            script.src = 'https://raw.githubusercontent.com/MrDrakosss/JavaScript-Simple-Library/main/v1.0/string.js';
            script.type = 'text/javascript';
            document.getElementsByTagName("head")[0].appendChild(script);
        } else {
            console.log('[LibraryImporter] jQuery not loaded!');
            return;
        }
    }
}

new LibraryImporter().setup();
