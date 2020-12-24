import {Component} from 'react';

class Word extends Component {
   handleDelete = () => {
      this.props.removeWord(this.props.id);
   }

   render() {
      const {word} = this.props;
      return(
         <div>
            <div>{word.voca}</div>
            <div>{word.meaning}</div>
            <button onClick={this.handleDelete}>delete</button>
         </div>
      )
   }
}

export default Word;