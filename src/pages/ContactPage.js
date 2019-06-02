import React from 'react';
import '../styles/ContactStyles.css';
import {Prompt} from 'react-router-dom';

class ContactPage extends React.Component {
    
    state = {
        value: "",
        isEmpty: true,
    }

    handleSubmit = (e) => {
        //zeby sie nie odswiezala strona preventDefault()
        e.preventDefault();
        this.setState({
            value: ""
        })
    }
    handleChange = (e) => {
        if(e.target.value.length > 0) {
        this.setState({
           value: e.target.value,
           isEmpty: true,
        }) 
    } else {
    this.setState({
        value: e.target.value,
        isEmpty: true
     }) 
    }
    }
    render() {
        return ( 
            <div className="contact">
                <form onSubmit = {this.handleSubmit}>
                    <h3>Napisz do nas</h3>
                    <textarea value={this.state.value} onChange={this.handleChange} placeholder="Wpisz wiadomosc"></textarea>
                     <button>Wyslij</button>
                </form>
                <Prompt
                    when={this.state.isEmpty} 
                    message="Masz niewypelniony formularz. Czy na pewni chcesz oposcic te strone"
                />
            </div>
        );
    }
}
 
export default ContactPage;