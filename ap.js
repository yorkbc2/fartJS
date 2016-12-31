class Loader {
    constructor(speed) {
        if(speed === null) {
            this.speed = 0;
        }
        else {
            this.speed = speed;
        }
        this.color = 'orange';
        this.align = 'center';
    }
    configure(color, speed) {
        this.color = color;
        this.speed = speed;
    }
    setColor(color) {
        this.color = color;
    }
    setSpeed(speed) {
        this.speed = speed;
    }
    create(align) {
        let loaderDiv = document.createElement('div');
        loaderDiv.width = innerWidth;
        loaderDiv.height = innerHeight;
        loaderDiv.style.backgroundColor = this.color;
        switch(this.align) {
            case "center" :
                loaderDiv.style.textAlign = "center";
                loaderDiv.style.display = "flex";
                loaderDiv.style.justifyContent = "center";
                loaderDiv.style.flexDirection = "column",
        }
    }
} 