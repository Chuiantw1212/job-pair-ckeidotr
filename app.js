import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { InlineEditor } from '@ckeditor/ckeditor5-editor-inline'
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
// Add custom features
import { AutoImage } from '@ckeditor/ckeditor5-image';
import { AutoLink, Link } from '@ckeditor/ckeditor5-link';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import DataFilter from '@ckeditor/ckeditor5-html-support/src/datafilter.js';
import DocumentList from '@ckeditor/ckeditor5-list/src/documentlist.js'
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';;
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
// import MediaEmbedToolbar from '@ckeditor/ckeditor5-media-embed/src/mediaembedtoolbar.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat.js';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount.js';
import EditorWatchdog from '@ckeditor/ckeditor5-watchdog/src/editorwatchdog.js';
class Editor extends ClassicEditor { }
// class Editor extends InlineEditor { }
// Plugins to include in the build.
Editor.builtinPlugins = [
    Essentials,
    Paragraph,
    Heading,
    AutoImage,
    AutoLink,
    Bold,
    DataFilter,
    DocumentList,
    Image,
    ImageUpload,
    Italic,
    Link,
    MediaEmbed,
    // MediaEmbedToolbar,
    PasteFromOffice,
    RemoveFormat,
    WordCount,
    // EditorWatchdog,
];

// Editor configuration.
Editor.defaultConfig = {
    toolbar: {
        items: [
            'heading',
            '|',
            'bold',
            'italic',
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
};
// https://stackoverflow.com/questions/50657924/getting-classiceditor-exported-on-custom-build-of-ckeditor-5
window.ClassicEditor = Editor;
// window.InlineEditor = Editor;
export default Editor;