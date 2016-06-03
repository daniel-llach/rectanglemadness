/*global define*/
define([
    "backbone",
    "text!templates/rectangle.html"
], function (Backbone, rectangleTemplate) {
    "use strict";

    var RectangleView = Backbone.View.extend({

        tagName: 'div',

        className: 'rectangle',

        template: _.template(rectangleTemplate),

        events: {
            'mouseenter': 'move'
        },

        initialize: function(){
            this.listenTo(this.model,'change:position',this.setCurrentPosition);
            this.listenTo(this.model,'change:success', this.successRectangle);
        },

        render: function(){
            this.$el.html(this.template(this.model.toJSON()));
            this.setDimensions();
            this.setPosition();
            this.setColor();
            return this;
        },

        setDimensions: function(){
            this.$el.css({
                width: this.model.get('width') + '%',
                height: this.model.get('height') + 'px'
            });
        },

        setPosition: function(){
            var position = this.model.get('position');
            this.$el.css({
                left: parseInt(position.x) + '%',   // percent
                top: position.y // px
            });
        },

        setColor: function(){
            this.$el.css('background-color',this.model.get('color'));
        },

        move: function(){
            this.model.move(); // mueve rectangulo
            this.model.changeposition(); // verifica coincidencia con sombra
        },

        setCurrentPosition: function(){
            var currentPosX = this.model.get('position').x + '%';
            this.$el.css('left', currentPosX); // mueve a nueva posición en X
            this.$el.html( this.template(this.model.toJSON()) ); // actualiza información del template
        },

        successRectangle: function(){
            var success = this.model.get('success');
            if(success){
                var colorSuccess = this.model.get('color');
                this.$el.addClass('success');
                this.$el.css({
                    '-moz-box-shadow' : '0px 0px 30px ' + colorSuccess,
                    '-webkit-box-shadow' : '0px 0px 30px ' + colorSuccess,
                    'box-shadow' : '0px 0px 30px ' + colorSuccess
                });
            }

        }

    });

    return RectangleView;

});
