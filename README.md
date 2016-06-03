# rectangleMadness

DEMO: http://daniel-llach.github.io/rectanglemadness/

Tomando la rama *master* de *backboneStart* y el ejercicio **rectangles** de [codeacademy] (https://www.youtube.com/watch?v=vPW1inIsln4&list=PLQUMc4-0pHw6_vUL1ty11EvDIgydBI_BL&index=6) creé este ejercicio llamado **backboneMadness** en el cual nombré *rectangleView* a **appView** y separé el modelo *Rectangle* en un archivo independiente dentro de una nueva carpeta *models*. 

Además el llamado a la app **rectangle** la dejé en el archivo *main.js* en el cual llama a la función *RectangleView*  pasandole la lista de objetos *models* con los datos de los **rectangles** por medio de un **each** de **underscore**.

Respecto al estilo, trabajé un poco el archivo *style.less* para mejorar la gráfica por medio de clases dinámicas de **less** incluyendo un contexto 3d otorgándole la clases *perspective* y *rotateY* a *canvas*.

Por último modifiqué la función **move** de *rectangleView* haciendo que le aumente o disminuya la posición x de cada *rectangle* y que además rote de manera aleatoria y dentro de un rango de -45 a 45º la perspectiva del *canvas* que contiene los objetos *rectangles* al hacer un mouseenter(no click) sobre cualquiera de los **rectangles**.

___

Ahora función *move* esta en el modelo y en la vista se llama asi **this.model.move();** al inicializar la vista por medio de un *change* ejecuta la función *setCurrentPosition* la cual toma el atributo *position.x* del objeto *rectangle* (el cual ya fue modificado por la función move) y lo setea agregándole un *%* y luego moviendo la pieza a su nueva posicion por medio de *jquery* (esto es animado mediante *css3*).
