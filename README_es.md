# Intro

El objetivo de este ejercicio es el que te familiarizes con Angular.

Tomaremos como punto de entrada una aplicación que muestra una lista de miembros
que pertenece a la organización Lemoncode de Github (esto está harcodeado), añadiremos
un _input_ que permite al usuario cambiar dicho nombre de grupo y elegir el que quiera,
por ejemplo _quiero ver los miembros de la organización Microsoft_

# Ejercicio

- Arranca con el proyecto que se encuentra en la carpeta *00_start*.

- Instala las dependencias.

```bash
npm install
```

- Arranca la aplicación y comprueba que funciona correctamente..

```bash
npm start
```

- La implementación actual muestra una lista de miembros que pertenecen a la organización 
_lemoncode_, esta no esta mal, pero nos gustaría que el usuario pudiera teclear el nombre
de organización que quisiera, y al pulsar el botón pudiera ver la lista de miembros de la
organización que hubiera tecleado (ejemplo de organizacines validas: microsoft, facebook)

- Pistas:

  - Create una nueva propiedad en MembersTableComponent y que por defecto valga _lemoncode_.
  - Crea un input al lado del botón de carga, este botón mostrarar la orgainzación actual elegida (propiedad  creada en paso anterior).
  - Enlaza la propiedad organización. Utiliza la directiva ngModel (two way binding) para tal fin.
  - Cuando el usuario pulso en el botón de cargar, en vez de pasar el valor harcodeado _lemoncode_ que pase el 
  valor de la propiedad.