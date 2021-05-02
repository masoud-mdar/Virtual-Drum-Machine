import React from "react"

const Display = (props) => {

    return(
        <div id="display">
          <h2>{props.display}</h2>
          <div id="light" style={props.styles}></div>
        </div>
    )

}

export default Display