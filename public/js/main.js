requirejs.config({
    paths: {
        'jquery':  'libs/jquery-1.9.1',
        'jqm-config': 'jqm-config',
        'jquery.mobile': 'libs/jquery.mobile-1.3.1',
        'underscore': 'libs/underscore',
        'backbone': 'libs/backbone',
        'text': 'libs/text',
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'jqm-config': ['jquery'],
        'jquery.mobile': ['jquery', 'jqm-config']
    }
});

require([
    'jquery',
    'router',
    'backbone',
    'jquery.mobile'
], function ( $, Router, Backbone ) {
    $(function () {
        Router.initialize();
    });
});