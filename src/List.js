import React from 'react';
import Card from './Card'
import './List.css';

export default function List(props) {
  console.log("List Props is next!")
  console.log(props.present)
  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {props.cards.map((card) =>
          <Card

            key={card.id}
            title={card.title}
            content={card.content}
            present={props.present}
          />
        )}
        <button
          type='button'
          className='List-add-button'
          onClick= {props.newCard}
        >
          + Add Random Card
        </button>
      </div>
    </section>
  )
}
