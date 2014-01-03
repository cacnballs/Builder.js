
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
    this.node[attr] = value;

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
// function add(String html):@Chainable
Builder.prototype.add = function(html)
{
    this.node.innerHTML += html;

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

// function getPos(HTMLElement|Builder element, boolean absolute):Object{top:int, left:int}
Builder.getPos = function(element, absolute)
{
    element = (element.nodeType)? element : element.node;

    var top = 0;
    var left = 0;

    while(element && element.offsetParent)
    {
        top += element.offsetTop;
        left += element.offsetLeft;

        element = element.offsetParent;

        if(!absolute && Builder.getStyle(element, 'position') === 'relative')
        {
            break;
        }
    }

    return {'top': top, 'left': left};
};
// function getStyle(HTMLElement|Builder element, String style):String
Builder.getStyle = function(element, style)
{
    element = (element.nodeType)? element : element.node;

    if(style === 'top' || style === 'left')
    {
        return Builder.getPos(element, false)[style] +'px';
    }
    else if(document.defaultView && document.defaultView.getComputedStyle)
    {
        return document.defaultView.getComputedStyle(element, null).getPropertyValue(prop);
    }
    else if(element.currentStyle)
    {
        style = style.replace(/\-(\w)/g, function(match, c1){return c1.toUpperCase()});

        return element.currentStyle[style];
    }
    else
    {
        return element.style[style];
    }
};
