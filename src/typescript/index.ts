
    import { Mfg } from './Mfg';

    /** ****************************************************************************************************************
    *   Being invoked when the page is loaded completely.
    *******************************************************************************************************************/
    window.onload = () : void  =>
    {
        Mfg.main();
    };

    /** ****************************************************************************************************************
    *   Being invoked when the page is left.
    *******************************************************************************************************************/
    window.onunload = () : void  =>
    {
        // no actions required on leaving website
    };
