import {Component} from 'react';
import AddWord from '../Component/AddWord';
import WordList from '../Component/Body/WordList';

class WordBookPage extends Component {
   constructor(props) {
      super(props);
      this.state = {
         wordList: [
            {
               voca: 'banana',
               meaning: '바나나'
            }
         ],
      }
   }

   handleAddWord = newWord => {
      this.setState({
         wordList: [...this.state.wordList, newWord]
      });
   }
   removeWord = index => {
      let newWordList = this.state.wordList.filter((word, i) => {
         return i !== index
      })
      this.setState({
         wordList: newWordList
      })      
   }

   render() {
      return(
         <div>
            <h1>The Great Word Book</h1>
            <AddWord handleAddWord={this.handleAddWord}/>
            <WordList 
               wordList={this.state.wordList}
               removeWord = {this.removeWord}
            />
         </div>
      )
   }
}

export default WordBookPage