/**
     *   The main class containing the point of entry.
     */
// @ts-ignore
import {MfgDemo} from "./MfgDemo";

export class Mfg
    {
        /** The singleton instance of the demo. */
        public          static          demo                :MfgDemo                = null;
        /**
         *   The application's point of entry.
         */
        public static main():void
        {
            Mfg.setDocumentTitle();
            Mfg.styleHtmlBody();

            Mfg.demo = new MfgDemo();
            Mfg.demo.init();

        }

        /**
         *   Dynamically sets the document's title.
         */
        private static setDocumentTitle():void
        {
            document.title = "TypeScript Minimal Primer, (c) 2020 Mayflower GmbH, v. 1.0";
        }

        /**
         *   Dynamically applies css to the HTML body tag.
         */
        private static styleHtmlBody():void
        {
            let style:CSSStyleDeclaration = document.body.style;
            style.backgroundColor = "grey";
            style.textAlign       = "center";
            style.margin          = "25px";
        }
    }
