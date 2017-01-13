let equal = {
	error(type, message) {
		return console.error(type + ' : ' + message);
	},
	help(message) {
		return console.log(message);
	}
}
let createSameArray = (arr1,arr2) => {
	for(let key = 0; key < arr2.length; key++) {
		arr1[key] = arr2[key]
	}
	return arr1 ; 
}
let createSameObject = (obj1, obj2) => {
	obj1.__proto__ = obj2;
	return obj1;
}
let createElement = (el) => {
	return document.createElement(el)
}
let click = (variable, cb) => {
	variable.addEventListener('click', cb);
}
let mouseover = (variable, cb) => {
	variable.addEventListener('mouseover', cb);
}
let mouseout = (variable,cb) => {
	variable.addEventListener('mouseout', cb)
}
let dbclick = (variable,cb) => {
	variable.addEventListener('dblclick', cb);
}
let type = (value) => {
	return typeof value;
}
let hover = (variable, cb, cb2) => {
	mouseover(variable,cb())
	if(cb2) {
		mouseout(variable,cb2())
	}
}
let types = (...rest) => {
	let arr = [];
	for (let i = 0 ; i < rest.length ; i++) {
		arr.push(typeof rest[i])
	}
	return arr;
}
let log = (dc) => {
	return console.log(dc);
}
let get = (what, where) => {
	switch (what) {
		case "id":
			return document.getElementById(where)
			break;
		case "class": 
			return document.getElementsByClassName(where)
			break;
		case "tag" : 
			return document.getElementsByTagName(where)
			break;
		case "name" : 
			return document.getElementsByName(where)
		default:
			log("Error of get. Write valid string")
			break;
	}
}
let	scrolling = (value, cb, callback) => {
		window.onscroll = () => {
				if(document.body.scrollTop >= value) {
				cb()
			}
			else {
				callback()
			}
		}
	}
let get$ = (what) => {
	let sliceMethod = what.slice(0,1);
	let sliceSelector = what.slice(1);
	switch(sliceMethod) {
		case "#" :
			return document.getElementById(sliceSelector)
			break;
		case "." :
			return document.getElementsByClassName(sliceSelector);
			break;
		case "%" : 
			return document.getElementsByName(sliceSelector)
		default :
			return document.getElementsByTagName(what);
			break;
	}
}
HTMLElement.prototype.appendFirst = (child) => {
	if(this.firstChild) this.insertBefore(child, this.firstChild);
	else this.appendChild(child);
}
let test = {
	width: "100px",
	height: "100px"
}
let documentWidth = document.body.width;
class Navigator {
	constructor(obj,urls,names) {
		this.width = obj.width || documentWidth;
		this.height = obj.height || 0;
		this.minheight = '50px';
		if(this.height <= 10) {
			this.height = this.minheight;
		}
		this.squares = obj.squares || false;
		this.parent = obj.parent || document.body;
		this.square = {
		}
		if(this.squares === true) {
			this.square.bgcolor = obj.square.backgroundColor;
			this.square.hoverBgcolor = obj.square.hoverBackgroundColor;
			this.square.width = obj.square.width;
			this.square.height = obj.square.height;
		}
		this.bg = obj.backgroundColor || "white";
		this.color = obj.text.color || "black";
		this.margin = obj.margin || 0;
		this.td = obj.text.textDecoration || "none";
		this.tt = obj.text.textTransform || "normal";
		this.hovercolor = obj.text.hoverColor || "black";
		this.family = obj.text.family || "Arial";
		this.position = obj.position || "relative";
		this.size = obj.text.fontSize || "16px";
		if(obj.bgColor) {
			this.bg = obj.bgColor
		}
		else if(obj.bgImage) {
			this.bg = obj.bgImage
		}
		this.padding = obj.padding || 0;
		this.urls = urls;
		this.ulmargin = obj.ul.margin || 0;
		this.ulpadding = obj.ul.padding || 0;
		this.names = names || false;
		this.overflowY = obj.overflowY || 'auto';
		if(this.position == "fixed" || this.position == "absolute") {
			this.top = obj.top || 0;
			this.left = obj.left || 0;
			this.right = obj.right || 0;
			this.bottom = obj.bottom || 0;
		}
	}
	create() {
		let nav = document.createElement('nav');
		nav.style.position = this.position;
		nav.style.width = this.width || (documentWidth);
		nav.style.minHeight = this.height || (this.height + "px");
		nav.style.backgroundColor = this.bg || "white";
		nav.style.padding = this.padding || 0;
		nav.style.margin = 0 || this.margin;
		nav.style.background = this.bg;
		if(this.overflowY == 'none' || this.overflowY == 'hidden') {
			nav.style.overflowY = this.overflowY;
		}
		this.main = nav;
		this.parent.appendChild(nav);
		let ul = document.createElement('ul');
		let arr = [];
		for(let i = 0; i < this.urls.length ; i++) {
			let a = document.createElement('a');
			let li = document.createElement('li');
			a.href = this.urls[i];
			if(this.names) {
				a.innerHTML = this.names[i];
			}
			else {
				if(this.urls[i].slice(0,5) == 'http:') {
					a.innerHTML = this.urls[i].slice(7);
				}
				else {
					a.innerHTML = this.urls[i].slice(8);
				}
			}

			a.style.marginRight = "10px" ;
			a.style.color = this.color || "blue"; 
			a.style.textTransform = this.tt || "normal";
			a.style.fontFamily = this.family || "Arial";
			a.style.textDecoration = this.td || "none";
			a.style.fontSize = this.size;

			li.style.display = "inline-block";
			li.style.listStyle = "none"
			li.style.width = this.square.width;
			li.style.height =this.square.height;
			li.style.textAlign = 'center';

			if(this.squares) {
				li.style.padding = this.square.padding || 0;
				li.style.margin = this.square.margin || 0;
				li.style.backgroundColor = this.square.bgcolor;
				li.height = this.square.height || this.minheight;
			}
			log(this.square.bgcolor)
			if(this.squares) {	
				mouseover(li, () => {
					a.style.color = this.hovercolor;
					li.style.backgroundColor = this.square.hoverBgcolor;
				})
				mouseout(li, () => {
					li.style.backgroundColor = this.square.bgcolor;
					a.style.color = this.color;
				})
			}
			else {
				mouseover(a, () => {
					a.style.color = this.hovercolor;
				})
				mouseout(a, () => {
					a.style.color = this.color;
				})
			}
			li.appendChild(a);

			arr.push(li)
		}
		this.arr = arr;
		for(let i = 0; i< arr.length; i++) {
			ul.appendChild(arr[i])
		}
		ul.style.margin = this.ulmargin || 0;
		ul.style.padding = this.ulpadding || 0;
		this.ul = ul;
		nav.appendChild(ul)
		log(nav.width)
	}
	border(side, px, color, bool, styleB) {
		let style;
		if(bool === false || bool === undefined) {
			style = "solid";
		}
		else {
			style = styleB
		}
		switch(side) {
			case "top" : 
				this.main.style.borderTop = px;
				this.main.style.borderTopColor = color;
				this.main.style.borderTopStyle = style;
				break;
			case "left" :
				this.main.style.borderLeft = px;
				this.main.style.borderLeftColor = color;
				this.main.style.borderLeftStyle = style;
				break;
			case "bottom" :
				this.main.style.borderBottom = px;
				this.main.style.borderBottomColor = color;
				this.main.style.borderBottomStyle = style;
				break;
			case "right" :
				this.main.style.borderRight = px;
				this.main.style.borderRightColor = color;
				this.main.style.borderRightStyle = style;
				break;
			default :
				this.main.style.border = 0;
				break;
		}
	}
	fixed() {
		this.main.style.width = "100%";
		this.main.style.position = 'fixed';
	}
	unfixed(value) {
		this.main.style.position = value || 'relative';
	}
	remove(value) {
		setTimeout(()=>{
			this.parent.removeChild(this.main);
		},value || 0)
	}
	hide(speed) {
		if(typeof speed == 'number'){
			setTimeout(() => {
				this.main.style.display = "none";
			},speed)
		}
		else {
			this.main.style.transition = "0.5s";
			this.main.style.transitionTimingFunction = 'ease-in-out'
			this.main.style.opacity = 0;
			setTimeout(() => {
				this.main.style.display = "none";
			},500)
		}
	}
	show(speed) {
		if(typeof speed == 'number'){
			setTimeout(() => {
				this.main.style.display = "block";
			},speed)
		}
		else {
			this.main.style.transition = "0.5s";
			this.main.style.opacity = 1;
			setTimeout(() => {
				this.main.style.display = "block";
			},600)
		}
	}
	/*setLogo(img,width,height) {
		let image = new Image();
		image.src = img;
		image.width = width || 50;
		image.height = height || 50;
		image.style.position = 'relative'
		this.ul.appendFirst(image);
	}*/
	scrollingBot(value, cb) {
		let navNow = this.main ;
		window.onscroll = () => {

			if(document.body.scrollTop >= value) {
				cb();
			}
			else {
				this.main.style.position = navNow.style.position;
			}
		}
	}
	setSearch(side, name, id) {
		let input = document.createElement('input');
		let li = document.createElement('li')
		input.type = 'search';
		input.name = name || 'search';
		input.id = id || 'search';
		input.style.cssFloat = side || 'right';
		li.style.listStyle = 'none';
		li.style.display = 'inline-block'
		li.appendChild(input)
		this.ul.appendChild(li);
	}
}
class UserWindow {
	constructor() {
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		window.onresize = () => {
			this.width = window.innerWidth;
			this.height = window.innerHeight;
		}
	}
	onresize(bool,parent,cb) {
		if(bool === true) {
			this.parent = parent;
		} else {
			return false;
		}
		this.parent.innerHTML = "Width : " + this.width + "px. Height : " + this.height + "px";
		window.onresize = () => {
			this.width = window.innerWidth;
			this.height = window.innerHeight;
			if(bool === true && parent) {
				this.parent.innerHTML = "Width : " + this.width + "px. Height : " + this.height + "px";
			} else {
				return false;
			}
		}
	}
}
class CanvasElement {
	constructor(width, height, parent, bool) {
		this.width = width || 300;
		this.height = height || 150;
		this.parent = parent || log("Error of parent element. Please write a parent element")
		this.canvas = document.createElement('canvas');
		this.canvas.width = this.width;
		this.canvas.height = this.height;
		this.ctx = this.canvas.getContext('2d');
		if(bool === true) {
			this.canvas.style.border = "1px"
			this.canvas.style.borderStyle = 'solid'
		}	
		else {
			return false
		}
	}
	create() {
		this.parent.appendChild(this.canvas)
	}
	rect(x,y,w,h,color,bool) {
		let ctx = this.ctx;
		if(bool === true) {
			ctx.fillStyle = color;
			this.ctx.fillRect(x,y,w,h);
		}
		else {
			ctx.strokeStyle = color;
			ctx.strokeRect(x,y,w,h);
			ctx.stroke();
		}
	}
}
let imageFullAction = (images) => {
	let arr = [];
	for(let key in images) {
		arr.push(images[key])
	}
	for(let i = 0 ; i < arr.length-3; i++) {
		click(arr[i], ()=> {
			let [div, close, img] = [createElement('div'), createElement('span'), new Image()]
			let parent = arr[i].parentNode;
			div.style.position = 'fixed';
			div.style.left = 0;
			div.style.top = 0;
			div.style.width = '100%';
			div.style.height = '100%'
			div.style.height = window.innerHeight;
			div.style.backgroundColor = "rgba(44,44,44,0.8)";
			div.style.textAlign = 'center'

			img.src = arr[i].src;
			img.width = arr[i].width;
			img.height = arr[i].height;
			img.style.marginTop = '100px'

			close.innerHTML = 'X'
			close.style.position = 'absolute';
			close.style.right = '1em';
			close.style.fontSize = "2em";
			close.style.fontFamily  = "Helvetica";
			close.style.top = '1em';
			close.style.color = 'white'
			close.style.cursor = 'pointer'
			mouseover(close, () => {
				close.style.color = '#e7e7e7'
			})
			mouseout(close, () => {
				close.style.color = "white"
			})

			div.appendChild(close)
			parent.appendChild(div);
			div.appendChild(img);


			click(close, () => {
				parent.removeChild(div)
			})
		})
	}
}