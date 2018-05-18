//object constructor
function Canvas2D() {
    this._canvas = document.getElementById("screen");
    this._canvasContext = this._canvas.getContext("2d");
}

//clear the canvas added as a method to Canvas2D
Canvas2D.prototype.clear = function () {
    this._canvasContext.clearRect(0, 0, this._canvas.width, this._canvas.height);
}

//draw the image on the canvas added as a method to Canvas2D
Canvas2D.prototype.drawImage = function (image, position) {
    this._canvasContext.drawImage(image, position.x, position.y);
}

let Canvas = new Canvas2D();
