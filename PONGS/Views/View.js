/**
 * Created by dillo_000 on 1/13/2017.
 */
function View(_model) {
    const TO_RADIANS = Math.PI/180;
    let pattern = null;
    let model = _model;
    let image = null;

    let curSpin = 0;
    let maxSpin = 0;
    let isSpinning = false;


    (function init(_fileName, _isPattern) {
        image = new Image();
        image.src = 'res\\SPRITE_SHEETS\\wall.png';//_fileName;

        // if(_isPattern) {
        //     pattern = this.ctx.createPattern(image, 'repeat');
        // }
    })();

    this.render = function() {
        this.draw( model.getX(), model.getY(), model.getWidth(), model.getHeight() );
    };

    this.draw = function (_x, _y, _width, _height) {
        if(!_width || !_height) {
            if(image) {
                _width = image.width;
                _height = image.height;
            }
        }

        if(!isSpinning) {
            this.ctx.drawImage(image, _x, _y, _width, _height);
        } else {
            if(curSpin >= maxSpin) {
                this.rotate(_x, _y, ++curSpin);
            } else {
                curSpin = 0;
                maxSpin = 0;
                isSpinning = false;
            }
        }
    };

    this.rotate = function (_x, _y, _angle) {
        this.ctx.save(); //save context state

        this.ctx.translate(_x, _y); //move rotating origin point of context to x and y
        this.ctx.rotate(_angle * TO_RADIANS);
        this.ctx.drawImage( image, -(image.width/2), -(image.height/2) ); //draw from that origin point so that when it spins it spins from the center

        this.ctx.restore();
    };

    this.spin = function (_degreesToSpin) {
        isSpinning = true;
        maxSpin = _degreesToSpin;
    }
}
