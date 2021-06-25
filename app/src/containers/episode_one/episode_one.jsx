import * as React from 'react'
import { FaTimes, FaCircle } from "react-icons/fa";

import X from '../../components/episode_one/X.jsx';
import O from '../../components/episode_one/O.jsx';
import Board from '../../components/episode_one/Board.jsx';
import './episode_one.css'

class EpisodeOne extends React.Component {
    render() {
        return (
            <div>
                <h1>Creating basic elements - part 1</h1>
                <div>
                    <h2>You will create an X for the users below, please uncomment the line below</h2>
                    <div className="icon">
                        {/* <FaTimes /> */}
                    </div>
                    <h2>You will create an O by using the FaCircle as defined on line 2 in your code. Imitate how we are showing the X via "FaTimes" on line 11 in the code.</h2>
                    <div className="icon">
                        {/* Insert code below */}

                        {/* Insert code above */}
                    </div>
                </div>

                <h1>Creating basic elements - part 2</h1>
                <div>
                    <h2>Now that you have created a basic element, we will create a file for each of your elements.</h2>
                    <X />
                    <O />
                </div>

                <h1>We will now create a border around some of our elements.</h1>
                {/*
                    As you can see on the page, there is a border around the entirety of the top-row. (Note that some of them vary sizes!)
                    Go into the .css file (episode_one.css), and add a border to the relevant components.
                    The following are possible attributes you will need to add:
                    - border-top: 2px solid black;
                    - border-bottom: 2px solid black;
                    - border-right: 2px solid black;
                    - border-left: 2px solid black;
                */}
                <div className="board">
                    <div className="top-row">
                        <div className="elementOne"></div>
                        <div className="elementTwo"></div>
                        <div className="elementThree"></div>
                    </div>
                    <div className="middle-row">
                        <div className="elementFour"></div>
                        <div className="elementFive"></div>
                        <div className="elementSix"></div>
                    </div>
                    <div className="bottom-row">
                        <div className="elementSeven"></div>
                        <div className="elementEight"></div>
                        <div className="elementNine"></div>
                    </div>
                </div>

                <h1>After you have created the board, you will create your own Board component. Copy the relevant code into our components/episode_one/Board.jsx and components/episode_one/Board.css files!</h1>
                <Board />
            </div>
        )
    }
}

export default EpisodeOne