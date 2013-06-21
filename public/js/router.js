define([
    'jquery',
    'underscore',
    'backbone',
    'jquery.mobile'
], function ( $, _, Backbone ) {

    var Router = Backbone.Router.extend({     
        routes: {
            "": "home",
            "play": "play",
            "settings": "settings"
        },
     
        home: function () {
            var self = this;
            require(['views/home', 'views/install'], function (Home, Install) {
                if(window.navigator.standalone) {
                    self.changePage(new Home());
                } else {
                    self.changePage(new Install());
                }
            });
        },

        play: function () {
            var self = this;
            require(['views/play'], function (Play) {
                self.changePage(new Play());
            });
        },

        changePage: function (page) {
            $(page.el).attr('data-role', 'page');
            page.render();
            $('body').append($(page.el));
            $.mobile.changePage($(page.el), { changeHash: false });
        }
    });

    var initialize = function () {
        var app = new Router();
        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});