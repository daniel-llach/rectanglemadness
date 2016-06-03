/*global define*/
define([
    "backbone",
    "text!templates/shadow.html"
], function (Backbone, shadowTemplate) {
    "use strict";

    var ShadowView = Backbone.View.extend({

        tagName: 'div',

        className: 'shadow',

        template: _.template(shadowTemplate),

        events: {
            // 'mouseenter': 'move'
        },

        // initialize: function(){
        //     this.listenTo(this.model,'change:position',this.setCurrentPosition);

        // },

        render: function(){
            this.$el.html(this.template(this.model.toJSON()));
            this.setDimensions();
            this.setPosition();
            return this;
        },

        setDimensions: function(){
            this.$el.css({
                width: this.model.get('width') + '%',
                height: this.model.get('height') + 'px'
            });
        },

        setPosition: function(){
            var finalposition = this.model.get('finalposition');
            this.$el.css({
                left: parseInt(finalposition.x) + '%',   // percent
                top: finalposition.y // px
            });
        },

        // move: function(){
        //     this.model.move();
        //     this.rotateCanvas();
        // },

        // setCurrentPosition: function(){
        //     var currentPosX = this.model.get('position').x + '%';
        //     this.$el.css('left', currentPosX); // mueve a nueva posición en X
        //     this.$el.html( this.template(this.model.toJSON()) ); // actualiza información del template
        // },

        // rotateCanvas: function(){
        //     // gira el canvas en ejeY
        //     var randomDeg = Math.floor( (Math.random()*90) - 45 ) + 'deg';
        //     $('#canvas').css('transform', 'perspective(2000px) rotateY(' + randomDeg + ')');
        // }

    });

    return ShadowView;

});
