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

  //Provided by checkpoint
  omit (obj, keyToOmit) {
    return Object.entries(obj).reduce(
      (newObj, [key, value]) =>
          key === keyToOmit ? newObj : {...newObj, [key]: value},
      {}
    );
  }

  //Deletes all instances of the card selected in lists, removes from allCards, updates state
  deleteCard = (cardId) => {
    //Removes all instances of selected card from all lists
    const newLists = this.state.lists.map(list => ({
      id: list.id,
      header: list.header,
      cardIds: list.cardIds.filter(id => id !== cardId)
    }));

    //Removes selected card from allCards
    const newAllCards = this.omit(this.state.allCards, cardId)

    //updates state
    this.setState({
        lists: newLists,
        allCards: newAllCards
    })
  }

  //Provided by checkpoint
  newRandomCard = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }

  //generates new random card, adds cardId to correct list, adds card to allCards, updates state
  addCard = (id) => {
    //generates new random card
    const newCard = this.newRandomCard();
    console.log(newCard);

    //adds card to correct list
    const addedNewCardLists = this.state.lists.map(list => {
      if (list.id === id) {
        return {
          id: list.id,
          header: list.header,
          cardIds: [...list.cardIds, newCard.id] //list.cardIds.append(newCard.id)
        }
      }
      return list; // DON'T FORGET TO RETURN THE LIST!
    })
    //console.log(addedNewCardLists);


    //update state
    this.setState({
      lists: addedNewCardLists,
      allCards: {
        ...this.state.allCards,
        //adds card to allCards
        [newCard.id]: newCard
      }
    })
  }



  render() {
    console.log(this.state.allCards);

    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.state.lists.map(list => (
            <List
              id={list.id}
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => this.state.allCards[id])}
              handleDelete= {this.deleteCard}
              handleNewCard= {this.addCard}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
