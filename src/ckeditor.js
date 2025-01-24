// The editor creator to use.
import { ClassicEditor as ClassicEditorBase } from '@ckeditor/ckeditor5-editor-classic';
import { InlineEditor as InlineEditorBase } from '@ckeditor/ckeditor5-editor-inline';

// Plugins
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Heading } from '@ckeditor/ckeditor5-heading';
import {
    Image,
    ImageCaption,
    ImageStyle,
    ImageToolbar,
    ImageUpload
} from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { Table, TableToolbar } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';

class ClassicEditor extends ClassicEditorBase { }
class InlineEditor extends InlineEditorBase { }

const plugins = [
    Alignment,
    Autoformat,
    BlockQuote,
    Bold,
    CloudServices,
    Essentials,
    Heading,
    Image,
    ImageCaption,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    Indent,
    Italic,
    Link,
    List,
    MediaEmbed,
    Paragraph,
    PasteFromOffice,
    Table,
    TableToolbar,
    TextTransformation,
]

ClassicEditor.builtinPlugins = plugins;
InlineEditor.builtinPlugins = plugins;

const config = {
    toolbar: {
        items: [
            'alignment',
            'heading',
            '|',
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            '|',
            'outdent',
            'indent',
            '|',
            'imageUpload',
            'blockQuote',
            'insertTable',
            'mediaEmbed',
            'undo',
            'redo'
        ]
    },

    // This value must be kept in sync with the language defined in webpack.config.js.
    language: 'zh_TW',
    image: {
        toolbar: [
            'imageTextAlternative',
            'toggleImageCaption',
            'imageStyle:inline',
            'imageStyle:block',
            'imageStyle:side'
        ]
    },
    table: {
        contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells'
        ]
    }
}

ClassicEditor.defaultConfig = config;
InlineEditor.defaultConfig = config;

export default {
    ClassicEditor, InlineEditor
};
