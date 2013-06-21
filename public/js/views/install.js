define([
    'jquery',
    'underscore',
    'backbone',
    'text!../../templates/install.html',
    'jquery.mobile'
], function ( $, _, Backbone, installTemplate ) {
    var Home = Backbone.View.extend({
        template: _.template(installTemplate),
      
        render: function () {
            this.$el.html(this.template());
            return this;
        },

    });

    return Home;
});