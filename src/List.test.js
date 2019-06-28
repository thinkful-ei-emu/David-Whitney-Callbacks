import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import List from './List';

configure({ adapter: new Adapter() });

describe('<List /> test suite', () => {
  // const listProps = [
  //   id={list.id},
  //   key={list.id},
  //   header={list.header},
  //   cards={list.cardIds.map(id => this.state.allCards[id])},
  //   handleDelete= {this.deleteCard},
  //   handleNewCard= {this.addCard}
  // ]

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  
})