
    /**
     *   The main class containing the point of entry.
     */
    export class Mfg
    {
        /**
         *   The application's point of entry.
         */
        public static main():void
        {
            Mfg.setDocumentTitle();
            Mfg.styleHtmlBody();
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
