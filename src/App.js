import React, { Component } from 'react';
import List from './List'
import './App.css';

class App extends Component {
  static defaultProps = {
    state: {
      lists: [],
      allCards: {},
    }
  };

  state = {
    lists: [
      {
        id: '1',
        header: 'First list',
        cardIds: [ 'a', 'b',],
      },
      {
        id: '2',
        header: 'Second list',
        cardIds: ['b', 'c', 'd'],
      },
      {
        id: '3',
        header: 'Third list',
        cardIds: [ 'a', 'b', 'c', 'd'],
      },
      {
        id: '4',
        header: 'Fourth list',
        cardIds: [ 'c', 'd' ],
      },
    ],
    allCards: {
      'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
      'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
      'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
      'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
    },
  }

  deleteCard = (cardId) => {
    console.log('deleteCardRan')
    console.log(id)
    this.SetState({
      lists: this.state.lists.filter(
        list => list.cardIds !== id 
      )})  
  }

  newRandomCard = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }

  render() {
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.state.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => this.state.allCards[id])}
              present= {this.deleteCard}
              newCard= {this.newRandomCard}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
