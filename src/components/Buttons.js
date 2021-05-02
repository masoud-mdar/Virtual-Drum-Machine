import React from "react"

const Buttons = (props) => {

    return(

        <div id="button-wrapper">
          <button className="drum-pad" id="Kick" value="Q" onClick={props.handleClick} >Q
            <audio src={props.tone.Q.source} className="clip" id="Q"></audio>
          </button>
          <button className="drum-pad" id="Closed HH" value="W" onClick={props.handleClick} >W
            <audio src={props.tone.W.source} className="clip" id="W"></audio>
          </button>
          <button className="drum-pad" id="Kick n Hat" value="E" onClick={props.handleClick} >E
            <audio src={props.tone.E.source} className="clip" id="E"></audio>
          </button>
          <button className="drum-pad" id="Open HH" value="A" onClick={props.handleClick} >A
            <audio src={props.tone.A.source} className="clip" id="A"></audio>
          </button>
          <button className="drum-pad" id="Clap" value="S" onClick={props.handleClick} >S
            <audio src={props.tone.S.source} className="clip" id="S"></audio>
          </button>
          <button className="drum-pad" id="Heater 4" value="D" onClick={props.handleClick} >D
            <audio src={props.tone.D.source} className="clip" id="D"></audio>
          </button>
          <button className="drum-pad" id="Heater 3" value="Z" onClick={props.handleClick} >Z
            <audio src={props.tone.Z.source} className="clip" id="Z"></audio>
          </button>
          <button className="drum-pad" id="Heater 2" value="X" onClick={props.handleClick} >X
            <audio src={props.tone.X.source} className="clip" id="X"></audio>
          </button>
          <button className="drum-pad" id="Heater 1" value="C" onClick={props.handleClick} >C
            <audio src={props.tone.C.source} className="clip" id="C"></audio>
          </button>
        </div>
    )
}

export default Buttons