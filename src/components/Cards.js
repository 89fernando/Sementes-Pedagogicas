import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Quem Somos</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {/* <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul> */}
          <ul className='cards__items'>
            <CardItem
              src='images/laura-perfil.jpeg'
              text='Professora Pós Graduada em Pedagogia Educação Infantil'
              label='Laura'
              path='/about'
            />
            <CardItem
              src='images/josi-perfil.jpeg'
              text='Professora e Graduanda em Educação Infantil'
              label='Josi'
              path='/about'
            />
            <CardItem
              src='images/elis-perfil.jpeg'
              text='Professora e Pós Graduada em Psicopedagogia'
              label='Elis'
              path='/about'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
