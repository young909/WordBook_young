import {Component} from 'react';
import Word from './Word';

class WordList extends Component {
   render() {
      const {wordList, removeWord} = this.props;
      let i=0;
      return(
         <div>
            {wordList.map((word, index) => (
               <Word 
                  word={word} 
                  key={index}
                  id={i++}
                  removeWord = {removeWord}
               />
            ))}
         </div>
      )
   }
}

export default WordList;