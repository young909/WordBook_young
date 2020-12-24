import {Component} from 'react';

class AddWord extends Component {
   constructor(props) {
      super(props);
      this.initialState = {
         voca:'',
         meaning:''
      }
      this.state = this.initialState;
   }
   handleChange = e => {
      this.setState({
         [e.target.name]: e.target.value
      })
   }
   handleFormSubmit = e => {
      e.preventDefault();
      this.props.handleAddWord(this.state);
      this.setState(this.initialState);
   }
   render() {
      return(
         <div>
            <form onSubmit = {this.handleFormSubmit}>
               <input 
                  type="text"
                  name="voca"
                  value={this.state.voca}
                  onChange={this.handleChange}
               />
               <input 
                  type="text"                
                  name="meaning"
                  value={this.state.meaning}
                  onChange={this.handleChange}
               />
               <button type="submit">Add</button>
            </form>
         </div>
      )
   }
}

export default AddWord;