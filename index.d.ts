declare module 'json-inflector' {
    import inflection = require('inflection');
    interface options {
        response:string | string[];
        request: string | string[];
    }
    function inflector(opts:options):any;
    namespace inflector {
        function inflectObject():any;
        function transform():any;
        function wrappedJson():any;
    }
    export = inflector;
}