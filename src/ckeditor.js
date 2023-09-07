// The editor creators to use.
import { ClassicEditor as ClassicEditorBase } from '@ckeditor/ckeditor5-editor-classic';
import { InlineEditor as InlineEditorBase } from '@ckeditor/ckeditor5-editor-inline';
// Plugins
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { DataFilter, GeneralHtmlSupport } from '@ckeditor/ckeditor5-html-support';
import { Heading } from '@ckeditor/ckeditor5-heading';
import {
    Image,
} from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';

class ClassicEditor extends ClassicEditorBase { }
class InlineEditor extends InlineEditorBase { }

// Plugins to include in the build.
const plugins = [
    Alignment,
    Bold,
    DataFilter,
    Essentials,
    GeneralHtmlSupport,
    Heading,
    Image,
    Indent,
    Italic,
    Link,
    List,
    MediaEmbed,
    Paragraph,
    PasteFromOffice,
];

ClassicEditor.builtinPlugins = plugins;
InlineEditor.builtinPlugins = plugins;

// Editor configuration.
const config = {
    toolbar: {
        items: [
            'undo',
            'redo',
            '|',
            'heading',
            '|',
            'fontSize',
            '|',
            'bold',
            'italic',
            'fontColor',
            '|',
            'link',
            'imageUpload',
            'mediaEmbed',
            '|',
            'alignment',
            'bulletedList',
            'numberedList',
            '|',
            'removeFormat'
        ]
    },
    language: 'zh',
    // // https://ckeditor.com/docs/ckeditor5/latest/features/html/general-html-support.html
    // allow: [
    //     {
    //         name: /.*/,
    //         attributes: true,
    //         classes: true,
    //         styles: true
    //     }
    // ],
};

ClassicEditor.defaultConfig = config;
InlineEditor.defaultConfig = config;

export default {
    ClassicEditor, InlineEditor
};
