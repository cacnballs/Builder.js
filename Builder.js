/**
 * Builder.js <https://github.com/JWhile/Builder.js>
 *
 * version 1.0.0
 */

function Builder(element)
{
	this.node = (typeof element === 'string')? document.createElement(element) : element;
}
Builder.prototype.css = function(style, value)
{
	this.node.style[style] = value;
	return this;
};
Builder.prototype.set = function(attr, value)
{
	this.node[attr] = value;
	return this;
};
Builder.prototype.attr = function(attr, value)
{
	this.node.setAttribute(attr, value);
	return this;
};
Builder.prototype.className = function(className)
{
	this.node.className = className;
	return this;
};
Builder.prototype.text = function(text)
{
	this.clear();
	this.node.appendChild(document.createTextNode(text));
	return this;
};
Builder.prototype.html = function(html)
{
	this.node.innerHTML = html;
	return this;
};
Builder.prototype.add = function(html)
{
	this.node.innerHTML += html;
	return this;
};
Builder.prototype.event = function(event, callback)
{
	if(this.node.attachEvent)
		this.node.attachEvent('on'+ event, callback);
	else
		this.node.addEventListener(event, callback, false);
	return this;
};
Builder.prototype.append = function(child)
{
	this.node.appendChild((child.nodeType)? child : child.node);
	return this;
};
Builder.prototype.insert = function(parent, before)
{
	parent = (parent.nodeType)? parent : parent.node;
	if(before)
		parent.insertBefore(this.node, (before.nodeType)? before : before.node);
	else
		parent.appendChild(this.node);
	return this;
};
Builder.prototype.remove = function()
{
	if(this.node.parentNode != null)
		this.node.parentNode.removeChild(this.node);
	return this;
};
Builder.prototype.clear = function()
{
	while(this.node.lastChild)
		this.node.removeChild(this.node.lastChild);
	return this;
};

Builder.getPos = function(element, absolute)
{
	var top = 0;
	var left = 0;

	element = (element.nodeType)? element : element.node;
	while(element && element.offsetParent)
	{
		top += element.offsetTop;
		left += element.offsetLeft;
		element = element.offsetParent;
		if(!absolute && Builder.getStyle(element, 'position') === 'relative')
			break;
	}
	return {'top': top, 'left': left};
};

Builder.getStyle = function(element, style)
{
	element = (element.nodeType)? element : element.node;
	if(style === 'top' || style === 'left')
		return Builder.getPos(element, false)[style] +'px';
	else if(document.defaultView && document.defaultView.getComputedStyle)
		return document.defaultView.getComputedStyle(element, null).getPropertyValue(style);
	else if(element.currentStyle)
		return element.currentStyle[style.replace(/\-(\w)/g, function(match, c){return c.toUpperCase()})];
	else
		return element.style[style];
};
