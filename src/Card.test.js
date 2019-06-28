import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Card from './Card';

configure({ adapter: new Adapter() });

describe('Card Component', () => {
  const cardProp = [
    id={card.id}, 
    key={card.id}, 
    title={card.title}, 
    content={card.content}, 
    handleDelete={props.handleDelete}
  ]

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('removes from page when delete is pressed', () => {
    const wrapper = shallow(<Card />)
    console.log(wrapper.find('button').debug());
    expect(toJson(wrapper)).toMatchSnapshot()
  })

})