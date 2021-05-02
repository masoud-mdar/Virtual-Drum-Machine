import React from "react";
import Buttons from "./Buttons"
import Display from "./Display"
import Switch from "./Switch"


class Drum extends React.Component{
  constructor(props){
    super(props);
    this.state={
      light:"rgba(255,255,255,.75)",
      isOn:false,
      display:"",
      lightDisplay: "block",
      tone: { Q:
        {
          id:"Q",
          name:"Kick",
          keyCode:81,
          source:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
        },
        W:
        {
          id:"W",
          name:"Closed HH",
          keyCode:87,
          source:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
        },
        E:
        {
          id:"E",
          name:"Kick n Hat",
          keyCode:69,
          source:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
        },
        A:
        {
          id:"A",
          name:"Open HH",
          keyCode:65,
          source:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
        },
        S:
        {
          id:"S",
          name:"Clap",
          keyCode:83,
          source:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
        },
        D:
        {
          id:"D",
          name:"Heater 4",
          keyCode:68,
          source:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
        },
        Z:
        {
          id:"Z",
          name:"Heater 3",
          keyCode:90,
          source:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
        },
        X:
        {
          id:"X",
          name:"Heater 2",
          keyCode:88,
          source:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
        },
        C:
        {
          id:"C",
          name:"Heater 1",
          keyCode:67,
          source:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        }
      }
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleOn = this.handleOn.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKey = this.handleKey.bind(this);
  };



  handleKeyPress(event){
    switch(event.keyCode){
      case 81:
        this.handleKey("Q")
        break
      case 87:
        this.handleKey("W")
        break
      case 69:
        this.handleKey("E")
        break
      case 65:
        this.handleKey("A")
        break
      case 83:
        this.handleKey("S")
        break
      case 68:
        this.handleKey("D")
        break
      case 90:
        this.handleKey("Z")
        break
      case 88:
        this.handleKey("X")
        break
      case 67:
        this.handleKey("C")
        break
      
    }
    
  }

  handleKey(i){
    const x = document.getElementById(i);
    const name = this.state.tone[i].name;
    const on = this.state.isOn;
    if (on){
      this.setState({
        display:name,
      })
      x.play();
    }
    
  }

  handleClick(event){
    const i = event.target.value;
    const name = this.state.tone[i].name;
    const x = document.getElementById(i);
    const on = this.state.isOn;
    if (on){
      this.setState({
        display:name
      })
      x.play()
    }
  }

  handleOn(){
    this.setState(state =>{
      if (state.isOn){
        return {
          isOn:false,
          display:"",
          light:"rgba(255,255,255,.75)",
          lightDisplay: "none"
        }
      } else {
        return {
          isOn:true,
          light:"orange",
          lightDisplay: "none"
        }
      }
    })
    setTimeout(() => {
      this.setState({
        lightDisplay: "block"
      })
    }, 1)
  }

  componentDidMount(){
    document.addEventListener("keydown",this.handleKeyPress)
  }

  componentWillUnmount(){
    document.removeEventListener("keydown",this.handleKeyPress)
    clearTimeout()
  }

  render(){
    
    return(
      <div id="drum-machine">

        <Display
          display={this.state.display}
          styles={{background:this.state.light, display: this.state.lightDisplay}}
        />

        <Buttons
          handleClick={this.handleClick}
          tone={this.state.tone}
        />

        <Switch
          handleOn = {this.handleOn}
        />

      </div>
    )
  }
}

export default Drum;
