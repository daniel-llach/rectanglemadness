/*global define*/
define([
    "backbone"
], function (Backbone) {
    "use strict";

    var Rectangle = Backbone.Model.extend({

        move: function(){
            var success = this.get('success');

            if(!success){
                var position = this.get('position');  // toma atributo posicion del modelo
                var currentPosX = parseInt(position.x) + Math.floor( (Math.random()*30) - 15 ) ; // calcula nueva posición y setea en porcentajes
                var currentPosY = parseInt(position.y); // mantiene nueva posición en eje y en pixeles

                //console.log(this.cid, JSON.stringify( this.toJSON() )); // muestra identificador único y atributos en formato JSON
                this.set('position', { x: currentPosX, y: currentPosY } ); // actualiza atributos X e Y en modelo
            }else{
                // si esta calzado (success) no mueva el rectangulo
            }

        },

        changeposition: function(){
            var position = this.get('position');
            var finalposition = this.get('finalposition');

            if(position.x == finalposition.x){
                this.set('success',true);
            }
        }

    });



    return Rectangle;

});
