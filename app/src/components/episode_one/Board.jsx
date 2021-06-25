import * as React from 'react'

import './Board.css'

class Board extends React.Component {
    render() {

        {/*
                You will need to copy and rename all of the .css classes (this is what they are called) to reflect
                how they are named in this file.
            */}
        return <div className="custom-board">
                <div className="custom-top-row">
                    <div className="custom-elementOne"></div>
                    <div className="custom-elementTwo"></div>
                    <div className="custom-elementThree"></div>
                </div>
                <div className="custom-middle-row">
                    <div className="custom-elementFour"></div>
                    <div className="custom-elementFive"></div>
                    <div className="custom-elementSix"></div>
                </div>
                <div className="custom-bottom-row">
                    <div className="custom-elementSeven"></div>
                    <div className="custom-elementEight"></div>
                    <div className="custom-elementNine"></div>
                </div>
            </div>;
    }
}

export default Board