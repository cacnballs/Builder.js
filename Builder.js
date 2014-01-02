
/**
 * class Builder(String|HTMLElement element)
 */
function Builder(element)
{
    this.node = (typeof element === 'string')? document.createElement(element) : element;
}
// function css(String style, String value):@Chainable
Builder.prototype.css = function(style, value)
{
    this.node.style[style] = value;

    return this;
};
// function set(String attr, String value):@Chainable
Builder.prototype.set = function(attr, value)
{
    this[attr] = value;

    return this;
};
// function attr(String attr, String value):@Chainable
Builder.prototype.attr = function(attr, value)
{
    this.node.setAttribute(attr, value);

    return this;
};
// function className(String className):@Chainable
Builder.prototype.className = function(className)
{
    this.node.className = className;

    return this;
};
// function text(String text):@Chainable
Builder.prototype.text = function(text)
{
    this.node.innerText = text;

    return this;
};
// function html(String html):@Chainable
Builder.prototype.html = function(html)
{
    this.node.innerHTML = html;

    return this;
};
// function event(String event, function callback):@Chainable
Builder.prototype.event = function(event, callback)
{
    if(this.node.attachEvent)
    {
        this.node.attachEvent('on'+ event, callback);
    }
    else
    {
        this.node.addEventListener(event, callback, false);
    }

    return this;
};
// function append(HTMLElement|Builder child):@Chainable
Builder.prototype.append = function(child)
{
    this.node.appendChild((child.nodeType)? child : child.node);

    return this;
};
// function insert(HTMLElement|Builder parent, HTMLElement|Builder before):@Chainable
Builder.prototype.insert = function(parent, before)
{
    parent = (parent.nodeType)? parent : parent.node;

    if(before)
    {
        parent.insertBefore(this.node, (before.nodeType)? before : before.node);
    }
    else
    {
        parent.appendChild(this.node);
    }

    return this;
};
// function remove():@Chainable
Builder.prototype.remove = function()
{
    this.node.parentNode.removeChild(this.node);

    return this;
};
// function clear():@Chainable
Builder.prototype.clear = function()
{
    while(this.node.lastChild)
    {
        this.node.removeChild(this.node.lastChild);
    }

    return this;
};
