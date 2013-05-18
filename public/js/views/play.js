define([
    'jquery',
    'underscore',
    'backbone',
    'text!../../templates/play.html',
    'jquery.mobile'
], function ( $, _, Backbone, playTemplate ) {
    var Play = Backbone.View.extend({
        template: _.template(playTemplate),

        render: function () {
            this.$el.html(this.template());
            return this;
        }
    });

    return Play;
});