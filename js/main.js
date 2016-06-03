/*global require*/
"use strict";

// Require.js allows us to configure shortcut alias
require.config({
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
    shim: {
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: [
                "underscore",
                "jquery"
            ],
            exports: "Backbone"
        }
    },
    paths: {
        jquery: "../bower_components/jquery/jquery",
        underscore: "../bower_components/underscore/underscore",
        backbone: "../bower_components/backbone/backbone",
        text: "../bower_components/requirejs-text/text"
    }
});

require([
    "backbone",
    "collections/rectangles",
    "views/rectangleView",
    "views/shadowView",
    "models/perspective",
    "views/perspectiveView"
], function (Backbone, Rectangles, RectangleView, ShadowView, Perspective, PerspectiveView) {

    // llama json
    var models = function (url){
        $.ajax({
            dataType: "json",
            url: url,
            async: false,
            success: function(result){
                rectangles = result;
            }
        });
        return rectangles;
    }('json/rectangles.json');

    // convierte json a collection de modelos
    var rectangles = new Rectangles();
    rectangles.reset(models.rectangles);

    // itera cada modelo otorgandole una vista y lo pinta en #canvas
    rectangles.each(function(model){
        $('div#canvas').append(new RectangleView({model: model}).render().el);
    });

    // itera cada modelo otorgandole una vista SOMBRA y lo pinta en #canvas
    rectangles.each(function(model){
        $('div#canvas').append(new ShadowView({model: model}).render().el);
    });

    // perspectiveControl
    var perspective = new Perspective();
    new PerspectiveView({model:perspective});
    console.log(PerspectiveView);

});
