import React {Component}from 'react';

class TextFielddAndButton extends Component{
  contructor(props){
    super{props}
    this.state = {fullName: ''}
  }
  handleSubmitButton = (event) => {
    event.preventDefault()
    const data = this.state
    console.log("The name submitted is", data)
  }

  handleInput = (event) => {
    event.preventDefault()
    this.setState({[event.target.name]: event.target.value})
  }
  render(){
    const {fullName} =this.state
    return(
      <div>
        <h1>Text Field and Button</h1>
        <p>Your name is: {fullName}</p>
        <form onSubmit = {this.handleSubmitButton}>
        <input type = 'text' placeholder='Enter your name' name = 'fullName' onChange ={this.handleInput} />
        <button>Submit</button>
        </form>
      </div>
    )
  }

}

export default TextFielddAndButton;
