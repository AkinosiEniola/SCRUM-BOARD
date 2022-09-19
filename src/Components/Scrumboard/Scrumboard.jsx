import React, { Component } from 'react';
import Data from '../Static/Data';
import './Scrumboard.css'

export class Scrumboard extends Component {
    constructor() {
        super();

        this.state = {
            data: Data,
            isOpen: false,
            tasks: null
        }
    }

    openModal = () =>{
        this.setState({
            isOpen: true
        })
    }

    closeModal =() =>{
        this.setState({
            isOpen: false
        })
    }

    controlChange = (e) => {
        this.setState({
            tasks: e.target.value
        })
    }

    controlSubmit = (e) => {
        e.preventDefault()
        this.setState({
            isOpen: false
        })
    }

    

  render() {
    console.log('Logged in as', Data.fullname)
    return (
      <div className='scrumboard'>
        <nav className='navbar'>
            <h1>CHATSCRUM</h1>
            <div className='bar'>
                <p>User type: {Data.usertype}</p>
                <p>Project Name: {Data.projectname}</p>
            </div>
        </nav>
        <p id='message'>Hello {Data.fullname}, Welcome to Scrumboard</p>

        <div className="container">
            <div className="weekly box">
                <h3 className='week'>Weekly Tasks</h3> 
                <p id='box'>{this.state.tasks}</p>
            </div>
            <div className="daily box">
                <h3 className='week'>Daily Tasks</h3>
            </div>
        </div>

        <div id="modal" className={this.state.isOpen ? 'show' : 'hidden'} >
            <div className='header'>
                <h3 className='side'>Add a new task</h3>
                <h3 id='close' onClick={() => this.closeModal()}>x</h3>
            </div>

            <form onSubmit={this.controlSubmit}>
                <input type="text" onChange={this.controlChange}/>
                <button className='button two'>CONFIRM</button>
            </form>
            
        </div>
        <button className='button' onClick={() => this.openModal()}>ADD TASK</button>
      </div>
    )
  }
}

export default Scrumboard;
