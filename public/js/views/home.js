define([
    'jquery',
    'underscore',
    'backbone',
    'text!../../templates/home.html',
    'jquery.mobile'
], function ( $, _, Backbone, homeTemplate ) {
    var Home = Backbone.View.extend({
        template: _.template(homeTemplate),
        
        events: {
            "click #play-btn": "play",
            "click #settings-btn": "settings"
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        },

        play: function ( event ) {
            window.location.href = "#play";
        },

        settings: function () {
            window.location.href = "#settings";
        }
    });

    return Home;
});