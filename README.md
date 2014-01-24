# Builder.js

Créer et préparer un élément HTML à la chaine.

### Exemple

```js
var div = new Builder('div')
    .html('<b>Exemple</b> ')
    .attr('title', 'Exemple !')
    .append(new Builder('a')
        .text('test')
        .event('click', function()
        {
            alert('click !');
        }))
        .css('color', 'red')
    .insert(document.body);
```

Créer `<div title="Exemple !"><b>Exemple</b> <a style="color:red">test</a></div>` dans `<body>`.

### Références

##### class Builder

###### Propriétés

* `.node` _(HTMLElement)_ L'élément HTML.

###### Methodes

Toutes les méthodes sont `chainable` _(elles retournent l'instance d'où elles sont exécutées)_.

* `.css(style, valeur)` Ajoute le style css à `node`.
* `.set(attribut, valeur)` Ajoute l'attribut à `node`. _(Conseillé pour `value`, `id`, `className`, `href`)_
* `.attr(attribut, valeur)` Ajoute l'attribut à `node` avec la méthode native `node.setAttribute()`.
* `.className(class)` Défini l'attribut className.
* `.text(text)` Insère le texte dans `node`.
* `.html(html)` Insère le html dans `node`.
* `.add(html)` Ajoute le html dans `node` après ce qu'il contient déjà.
* `.event(type, callback)` Ajoute un event à `node`.
* `.append(child)` Insère un autre élément dans `node`.
* `.insert(parent)` Insère `node` dans un autre élément.
* `.remove()` Retire `node` du DOM. _(`node` n'est pas supprimé!)_
* `.clear()` Retire les éléments contenus dans `node`.

###### Fonctions

* `Builder.getPos(element, absolute = false)` _(Object)_ Si `absolute` est `true`, retourne les positions `x` et `y` par rapport à la page sinon retourne les position `top` et `left` de `element`.
* `Builder.getStyle(element, style)` _(String)_ Retourne la valeur du `style` CSS de `element`.

### License

> The MIT License (MIT)
> 
> Copyright (c) 2013 juloo
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of
> this software and associated documentation files (the "Software"), to deal in
> the Software without restriction, including without limitation the rights to
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
> the Software, and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
> FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
> COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
> IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
