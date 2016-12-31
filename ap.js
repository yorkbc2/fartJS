let elId ;
function type(el) {
    return typeof el;
}
function types(...els) {
    let arr = [];
    for(var i = 0 ; i < els.length; i++) {
        arr.push(typeof els[i]);
    }
    return arr;
}
class Loader {
    constructor(id, color, speed) {
        if(type(speed) === undefined || type(id) === undefined || type(color) === undefined) {
            this.id = 'loader';
            this.speed = 1;
            this.color = "red";
        }
       else 
        {
        this.id = id;
        this.speed = speed;
        this.color = color;
        }
        elId = document.getElementById(this.id);
    }  
    showConfArguments() {
        return types(this.id, this.color, this.speed);
    }
    showConf(arg) {
        switch(arg) {
            case "console" :
                console.log(this);
                break;
            case "alert" :
                alert("Id : " + this.id + " Color : " + this.color + " Speed : " + this.speed);
                break;
            case "doc" : 
                document.write("Id : " + this.id + "<br> Color : " + this.color + "<br> Speed : " + this.speed);
                break;
            default :
                console.log(this);
                break;
        }
    }
    addText(text, tcolor,tfont) {
        if(type(text) == 'string' && type(tcolor) == "string") {
            this.text = text;
        }
        if (text === true || text === false){
            this.text = "Loading";
        }
        this.tcolor = tcolor;
        this.tfont = tfont;
        elId.style.color = this.tcolor;
        elId.style.fontSize = this.tfont;
        elId.innerHTML = this.text;
    }
    create() {
        elId.style.position = "absolute";
        elId.style.width = 100 + "%";
        elId.style.height = 100 + "%";
        elId.style.top = 0;
        elId.style.left = 0;
        elId.style.zIndex = 3123;
        elId.style.backgroundColor = this.color;
    }
} 