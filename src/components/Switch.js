import React from "react"

const Switch = (props) => {

    return(
        <div id="onoff">
            <div className="btn">
                <label className="switch">
                    <input type="checkbox" onClick={props.handleOn} />
                    <span className="slider round"></span>
                </label>
            </div>

        </div>
    )
}

export default Switch