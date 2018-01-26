# ![icon-document](https://github.com/Gloper98/Cifrado-cesar-/raw/master/assets/images/icon-document.png "document") Cesar Cipher
![Cesar-Cipher](https://github.com/Gloper98/Cifrado-cesar-/raw/master/assets/images/decoder.gif "cipher and decipher")
>Producto Final: Cipher & decipher web page.

La presente es una web basada en el algoritmo de [Cifrado Cesar](https://en.wikipedia.org/wiki/Caesar_cipher) con el parametro de desplazamiento de **33 espacios hacia la derecha**.

## Elementos de la pagina web

* **Un input:** Donde el usuario podra colocar el mensaje a cifrar.

```diff
- Texto original: I want u to be alive.
- Texto codificado: V JNAG H GB OR NYVIR.
```

* **Un boton:** Contiene un evento que permite obtener los resultados(`decifrar o cifrar`)
* **Una etiqueta h1 y una etiqueta p:** Los resultados se visualizaran en la etiqueta h1 y el texto original en la etiqueta p.

## Branches
* **jquery**: Funciones jquery.
* **javascript-vanilla**: Funciones Javascript vanilla.
* **ECMA-6**: Funciones ECMA script 6.
* **[gh-pages](https://gloper98.github.io/Cifrado-cesar-/)**: Producto Final.
* **master**: Rama madre.

## Herramientas usadas

* **[CSS3:](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3)** Usada para dar los estilos basicos.

```diff
Cifrado-cesar->css>main.css
```

* **[HTML:](https://www.w3schools.com/html/html_elements.asp)** Usada para la estructura de la pagina.

```diff
Cifrado-cesar->index.html
```

* **[Javascript](https://www.javascript.com/), [jQuery](https://jquery.com/), [ECMA script 6:](http://es6-features.org/#Constants)** Usada para darle funcionalidad a la pagina.
```javascript
 for(var i =0;i< firstStep.length;i++){
				if(firstStep[i]*0 !== 0){
					if(firstStep.charCodeAt(i) >= 97 && firstStep.charCodeAt(i) <= 122){
					  let ascciCode =firstStep.charCodeAt(i);
					  let newAscciCode = (ascciCode-65+33)%26+65;
						let encodedString =String.fromCharCode(newAscciCode);
						newString.push(encodedString);
						console.log(ascciCode);
				  }
```

## Related Topics

* [Medium Blog:](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)Acerca de `let`, `const`y `var`.
* [MDN web docs:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) Acerca de `arrow functions`.
* [MDN web docs:](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode) Acerca de `fromCharCode()`.
* [MDN web docs:](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt) Acerca de `charCodeAt()`.
* [Definicion.de:](http://conceptodefinicion.de/ascii/) Acerca de `ASCCI code`.

>Learn more: [Youtube Tutorial](https://www.youtube.com/watch?v=QVWsTy4ZPJI);

