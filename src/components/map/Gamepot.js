
import React, {Component} from "react";
import CardUI from './CardUI';
import CardUI2 from './CardUI2';
import CardUI3 from './CardUI3';
import CardUI4 from './CardUI4';

import './cardmap-style.css';

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state={ };
    }
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col">
                        
                        <CardUI />
                    </div>
                    <div className="col">
                        <CardUI2 />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <CardUI3 />
                    </div>
                    <div className="col">
                        <CardUI4 />
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;