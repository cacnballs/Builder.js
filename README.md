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
