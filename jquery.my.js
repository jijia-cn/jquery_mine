//HTML DOM javascript方法
function getElementById(id)
{
	return document.getElementById(id);
}

function getElementByName(name)
{
	return document.getElementsByName(name);
}

function getElementByTagName(tagName)
{
	return document.getElementsByTagName(tagName);
}

//
function MyObject(node)
{
	var inNode = node;
	this.getNode = function(){
		return inNode;
	}

	//访问集合元素
	function validIndex(ind,inNode)
	{
		if(ind<0 || ind > inNode.length-1)
			return false;
		else
			return true;
	}
	var index = 0;
	this.first = function(){
		if(!validIndex(index,inNode))
			return null;
		return inNode[index];
	}
	this.next = function(){
		if(!validIndex(index,inNode))
			return null;
		return inNode[++index];
	}
	this.pre = function()
	{
		if(!validIndex(index,inNode))
			return null;
		return inNode[--index];
	}
	this.last = function()
	{
		if(!validIndex(index,inNode))
			return null;
		index = inNode.length-1;
		return inNode[index];
	}
}

var $ = function(name)
{
	var ch = name.charAt(0);
	var key = name.substr(1,name.length-1);
	// alert(ch+" "+id);
	if('#' == ch)
		return new MyObject(getElementById(key));
	else if('*' == ch)
		return new MyObject(getElementByName(key));
	else
		return new MyObject(getElementByTagName(name));
}

MyObject.prototype.click = function(fn)
{
	setTimeout(fn,0);
}
