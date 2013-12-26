# Builder.js

Créer et préparer un élément HTML à la chaine.

### Example

```js
var div = new Builder('div')
    .text('Example ')
    .append(new Builder('a')
        .text('test')
        .event('click', function()
        {
            alert('click !');
        }))
        .css('color', 'red')
    .insert(document.body);

div.remove().clear();
```

### Références

###### Propriétés

* `.node` _(HTMLElement)_ L'élément HTML.

###### Methodes

* `.css(style, valeur)` _@Chainable_ Ajoute le style css à `node`.
* `.attr(attribut, valeur)` _@Chainable_ Ajoute l'attribut à `node`.
* `.className(class)` _@Chainable_ Défini l'attribut className.
* `.text(text)` _@Chainable_ Insère le texte dans `node`.
* `.event(type, callback)` _@Chainable_ Ajoute un event à `node`.
* `.append(child)` _@Chainable_ Insère un autre élément dans `node`.
* `.insert(parent)` _@Chainable_ Insère `node` dans un autre élément.
* `.remove()` _@Chainable_ Retire `node` du DOM. _(`node` n'est pas supprimé!)_
* `.clear()` _@Chainable_ Retire les éléments contenus dans `node`.