import React from 'react';
import p5 from 'p5';

class Invert extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }


    Sketch = (p) => {
        let capture

        p.setup = () => {
            p.createCanvas(550, 350);
            capture = p.createCapture(p.VIDEO);
            capture.size(850, 650);
            capture.hide();
        }

        p.draw = () => {
            p.background(255);
            p.image(capture, 0, 0, 550, 350);
            p.filter(p.INVERT);
        }
    }

    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current);
    }

    render() {
        return (
            <div>
                <h1>Look at you!!!</h1>

                <div ref={this.myRef}>

                </div>
            </div>
        )
    }
}

export default Invert;