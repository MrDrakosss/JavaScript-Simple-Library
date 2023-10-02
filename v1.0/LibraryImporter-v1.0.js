class LibraryImporter {
    constructor() {

    }

    setup(obj) {
        this.jquery = false;

        if (window.jQuery) {
            console.log('jQuery already loaded');
            this.jquery = !this.jquery;
        } else {
            console.info('jQuery not found');
            console.info('jQuery loading..')
            var script = document.createElement("SCRIPT");
            script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
            script.type = 'text/javascript';
            document.getElementsByTagName("head")[0].appendChild(script);
            console.info('jQuery successfully imported');

            
            script = document.createElement("SCRIPT");
            script.src = 'https://raw.githubusercontent.com/MrDrakosss/JavaScript-Simple-Library/main/v1.0/jQuery/array.js';
            script.type = 'text/javascript';
            document.getElementsByTagName("head")[0].appendChild(script);

            script = document.createElement("SCRIPT");
            script.src = 'https://raw.githubusercontent.com/MrDrakosss/JavaScript-Simple-Library/main/v1.0/jQuery/math.js';
            script.type = 'text/javascript';
            document.getElementsByTagName("head")[0].appendChild(script);

            script = document.createElement("SCRIPT");
            script.src = 'https://raw.githubusercontent.com/MrDrakosss/JavaScript-Simple-Library/main/v1.0/jQuery/string.js';
            script.type = 'text/javascript';
            document.getElementsByTagName("head")[0].appendChild(script);
        }

        if (!window.jQuery) {
            console.error('Failed to install jQuery ');
            console.info('SimpleLibrary version setup: Normal version');

            var script = document.createElement("SCRIPT");
            script.src = 'https://raw.githubusercontent.com/MrDrakosss/JavaScript-Simple-Library/main/v1.0/normal/array.js';
            script.type = 'text/javascript';
            document.getElementsByTagName("head")[0].appendChild(script);

            script = document.createElement("SCRIPT");
            script.src = 'https://raw.githubusercontent.com/MrDrakosss/JavaScript-Simple-Library/main/v1.0/normal/math.js';
            script.type = 'text/javascript';
            document.getElementsByTagName("head")[0].appendChild(script);

            script = document.createElement("SCRIPT");
            script.src = 'https://raw.githubusercontent.com/MrDrakosss/JavaScript-Simple-Library/main/v1.0/normal/string.js';
            script.type = 'text/javascript';
            document.getElementsByTagName("head")[0].appendChild(script);

        } else {
            console.error('SimpleLibrary version setup: jQuery version');
        }
    }
}

new LibraryImporter().setup();
