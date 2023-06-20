import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
// Add custom features
import { AutoImage } from '@ckeditor/ckeditor5-image';
import { AutoLink, Link } from '@ckeditor/ckeditor5-link';
import DataFilter from '@ckeditor/ckeditor5-html-support/src/datafilter.js';
import DocumentList from '@ckeditor/ckeditor5-list/src/documentlist.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import MediaEmbedToolbar from '@ckeditor/ckeditor5-media-embed/src/mediaembedtoolbar.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat.js';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount.js';
import EditorWatchdog from '@ckeditor/ckeditor5-watchdog/src/editorwatchdog.js';
ClassicEditor
    .create(document.querySelector('#editor'), {
        plugins: [
            Essentials,
            Paragraph,
            Heading,
            AutoImage,
            AutoLink,
            DataFilter,
            DocumentList,
            Image,
            Link,
            MediaEmbed,
            MediaEmbedToolbar,
            PasteFromOffice,
            RemoveFormat,
            WordCount,
            EditorWatchdog,
        ],
        toolbar: {
            items: [
                'heading',
                '|',
                'link',
                'bulletedList',
                'numberedList',
                '|',
                'imageUpload',
                'mediaEmbed',
                'undo',
                'redo',
                '|',
                'removeFormat'
            ]
        },
        language: 'zh',
    })
    .then(editor => {
        console.log('Editor was initialized', editor);
    })
    .catch(error => {
        console.error(error.stack);
    });
// https://stackoverflow.com/questions/50657924/getting-classiceditor-exported-on-custom-build-of-ckeditor-5
window.ClassicEditor = ClassicEditor;
export default ClassicEditor;