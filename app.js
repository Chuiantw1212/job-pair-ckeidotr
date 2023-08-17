/**
 * 合併不同的editor
 * https://ckeditor.com/docs/ckeditor5/latest/installation/advanced/using-two-editors.html#creating-super-builds
 */
import { ClassicEditor as ClassicEditorBase } from '@ckeditor/ckeditor5-editor-classic';
import { InlineEditor as InlineEditorBase } from '@ckeditor/ckeditor5-editor-inline';
// Add custom features
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
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
class ClassicEditor extends ClassicEditorBase { }
class InlineEditor extends InlineEditorBase { }
// Plugins to include in the build.
const builtinPlugins = [
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
    PasteFromOffice,
    RemoveFormat,
    WordCount,
]
ClassicEditor.builtinPlugins = builtinPlugins
InlineEditor.builtinPlugins = builtinPlugins

// Editor configuration.
const defaultConfig = {
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
}
ClassicEditor.defaultConfig = defaultConfig
InlineEditor.defaultConfig = defaultConfig
// https://stackoverflow.com/questions/50657924/getting-classiceditor-exported-on-custom-build-of-ckeditor-5
window.ClassicEditor = ClassicEditor;
window.InlineEditor = InlineEditor;
export default Editor;