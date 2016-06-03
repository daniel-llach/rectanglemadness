/*global define */
define([
    "backbone",
    "models/rectangle"
], function (Backbone, Rectangle) {
    "use strict";

    var Rectangles = Backbone.Collection.extend({
        model: Rectangle

    });

    return Rectangles;
});
