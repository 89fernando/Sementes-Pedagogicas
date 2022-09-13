import React from 'react';
import './CardsProduct.css';
import CardItem from './CardItem';

function CardsProduct() {
  return (
    <div className='cards'>
      <h1>Conheça nossos E-Books</h1>
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
              src='images/artesanato.jpeg'
              text='Artesanato para crianças'
              label='Artesanato'
              path='/products'
            />
            <CardItem
              src='images/brincadeiras-musicais.jpeg'
              text='Brincadeiras musicais para crianças'
              label='Musicas'
              path='/products'
            />
            <CardItem
              src='images/brincadeiras-teatrais.jpeg'
              text='Brincadeiras Teatrais para crianças'
              label='Teatro'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsProduct;
