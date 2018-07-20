import React, { Component } from 'react';

import { getProvince, telephoneRegex } from './phone';


class App extends Component {
  constructor() {
    super()
    this.state = {
      messages: [],
      author: '',
      message: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onInput = this.onInput.bind(this)
  }

  onInput(e) {
   this.setState({
     ...this.state,
     [e.target.name]: e.target.value
   })
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      messages: [...this.state.messages, {message: this.state.message, author: this.state.author}],
      message: '',
      author: ''
    })
  }

  render() {
    return (
        <section>
          <h1>Mensajes</h1>
          {
            this.state.messages.map(({author, message}) => {
              
              return <div><h2>Desde { getProvince(author) }</h2><p>{message.replace(telephoneRegex, '******')}</p></div>
            }
          )}
          <form onSubmit={this.onSubmit} class="form">
            <fieldset>
              <legend>Dejanos un mensaje</legend>
              <label>Phone Number: </label>
              <input pattern="(\+?54)?\s?(9)?\s?((\d){2,4})?\s?(15)?\s?(\d{8})" name="author" onInput={this.onInput} value={this.state.author} type="text"/><br />
              <textarea name="message" onInput={this.onInput} value={this.state.message}></textarea><br />
              <button>Enviar Mensaje</button>
            </fieldset>
          </form>
        </section>
    );
  }
}

export default App;
