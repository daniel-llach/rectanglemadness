/*global define*/
define([
    "backbone"
], function (Backbone) {
    "use strict";

        var PerspectiveView = Backbone.View.extend({

            el: 'body',

            events: {
                'mousemove': 'mouseposition'
            },

            mouseposition: function(){
                this.model.mouseposition();
            }

    });

    return PerspectiveView;

});
