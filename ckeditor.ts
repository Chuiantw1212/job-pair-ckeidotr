// The editor creator to use.
import '@ckeditor/ckeditor5-core'
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { WordCount } from '@ckeditor/ckeditor5-word-count';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Font, FontSize, FontColor } from '@ckeditor/ckeditor5-font';
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
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { Table, TableToolbar } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';



class Editor extends ClassicEditor {
    // Plugins to include in the build.
    public static override builtinPlugins = [
        Alignment,
        Autoformat,
        BlockQuote,
        Bold,
        CloudServices,
        Essentials,
        Font, FontSize, FontColor,
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
        RemoveFormat,
        Table,
        TableToolbar,
        TextTransformation,
        WordCount,
    ];

    public static override defaultConfig = {
        toolbar: {
            items: [
                'alignment',
                'heading',
                '|',
                'fontSize',
                '|',
                'bold',
                'italic',
                'underline',
                'fontColor',
                'link',
                'bulletedList',
                'numberedList',
                '|',
                'outdent',
                'indent',
                '|',
                'imageUpload',
                'insertTable',
                'mediaEmbed',
                'undo',
                'redo'
            ]
        },

        // This value must be kept in sync with the language defined in webpack.config.js.
        language: 'zh',
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
    };
}

(window as any).CKEDITOR = Editor

export default Editor;
