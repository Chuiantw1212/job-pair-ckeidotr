import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
// Add custom features
import { AutoImage } from '@ckeditor/ckeditor5-image';
import { AutoLink, Link } from '@ckeditor/ckeditor5-link';
import DataFilter from '@ckeditor/ckeditor5-html-support/src/datafilter.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import MediaEmbedToolbar from '@ckeditor/ckeditor5-media-embed/src/mediaembedtoolbar.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat.js';
import SelectAll from '@ckeditor/ckeditor5-select-all/src/selectall.js';
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
            Image,
            Link, 
            List, 
            MediaEmbed, 
            MediaEmbedToolbar,
            PasteFromOffice,
            RemoveFormat,
            SelectAll,
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
    })
    .then(editor => {
        console.log('Editor was initialized', editor);
    })
    .catch(error => {
        console.error(error.stack);
    });