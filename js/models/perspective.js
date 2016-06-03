/*global define*/
define([
    "backbone"
], function (Backbone) {
    "use strict";

    var Perspective = Backbone.Model.extend({

        mouseposition: function(e){
                var mpX = event.pageX;
                this.rotateCanvas(mpX); // gira aleatoriamente el canvas en 3d
            },

        rotateCanvas: function(mpX){
            var currentPos = mpX;
            var anchoTotal = $(document).width();

            if(currentPos > anchoTotal*0.8){
                var deg = 45 + 'deg';
                $('#canvas').css('transform', 'perspective(2000px) rotateY(' + deg + ')');
            }else if(currentPos < anchoTotal*0.2){
                var deg = -45 + 'deg';
                $('#canvas').css('transform', 'perspective(2000px) rotateY(' + deg + ')');
            }else{

            }



        }
    });

    return Perspective;

});
