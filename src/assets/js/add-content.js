/* eslint-disable */
console.log("frejuofrehuioerhfuirehureor")

// "use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ckeditor_ckeditor5_custom_classic_build_ckeditor_js__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ckeditor_ckeditor5_custom_classic_build_ckeditor_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ckeditor_ckeditor5_custom_classic_build_ckeditor_js__);

function MyCustomUploadAdapterPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = function (loader) {
        // Configure the URL to the upload script in your back-end here!
        return new MyUploadAdapter(loader);
    };
}

// Init CKEditors
var textareas = $('.textarea');
for (var i = 0; i < textareas.length; i++) {
    __WEBPACK_IMPORTED_MODULE_0__ckeditor_ckeditor5_custom_classic_build_ckeditor_js___default.a.create(textareas[i], {
        extraPlugins: [MyCustomUploadAdapterPlugin],
        toolbar: ['heading', '|', 'bold', 'italic', 'underline', 'strikethrough', 'link', '|', 'horizontalLine', 'bulletedList', 'numberedList', '|', 'indent', 'outdent', '|', 'blockQuote', 'insertTable', 'imageInsert', '|', 'undo', 'redo'],
        heading: {
            options: [{ model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' }, { model: 'heading3', view: 'h3', title: 'Heading', class: 'ck-heading_heading3' }]
        },
        placeholder: 'Inhoud van de creatie',
        image: {
            // Configure the available styles.
            styles: ['alignLeft', 'alignCenter', 'alignRight'],

            // Configure the available image resize options.
            resizeOptions: [{
                name: 'imageResize:original',
                label: 'Original',
                value: null
            }, {
                name: 'imageResize:50',
                label: '50%',
                value: '50'
            }, {
                name: 'imageResize:75',
                label: '75%',
                value: '75'
            }, {
                name: 'imageResize:100',
                label: '100%',
                value: '100'
            }],

            // You need to configure the image toolbar, too, so it shows the new style
            // buttons as well as the resize buttons.
            toolbar: ['imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight', '|', 'imageResize', '|', 'imageTextAlternative']
        }
    })
        // .then(editor => {
        //     console.log( Array.from( editor.ui.componentFactory.names() ) );
        // })
        .catch(function (error) {
            console.error(error);
        });
}