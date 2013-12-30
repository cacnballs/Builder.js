# Builder.js

Créer et préparer un élément HTML à la chaine.

### Exemple

```js
var div = new Builder('div')
    .text('Exemple ')
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

Créer `<div title="Exemple !">Exemple <a style="color:red">test</a></div>` dans `<body>`.

### Références

##### class Builder

###### Propriétés

* `.node` _(HTMLElement)_ L'élément HTML.

###### Methodes

Toutes les méthodes sont `chainable` _(elles retournent l'instance d'où elles sont exécutées)_.

* `.css(style, valeur)` Ajoute le style css à `node`.
* `.attr(attribut, valeur)` Ajoute l'attribut à `node`.
* `.className(class)` Défini l'attribut className.
* `.text(text)` Insère le texte dans `node`.
* `.event(type, callback)` Ajoute un event à `node`.
* `.append(child)` Insère un autre élément dans `node`.
* `.insert(parent)` Insère `node` dans un autre élément.
* `.remove()` Retire `node` du DOM. _(`node` n'est pas supprimé!)_
* `.clear()` Retire les éléments contenus dans `node`.
