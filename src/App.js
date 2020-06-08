import React from 'react';
import shortid from 'shortid';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import cards from './data/cards';
import './App.css';

export default function App() {
  return (<>
  <Header />
      { cards.map((o) => 
        <Card img={o.img} key={shortid.generate()}>
          {<h5 className="card-title">{o.title || 'Card title'}</h5>}
          {o.text && <p className="card-text">{o.text}</p>}
          {<a href={o.btnHref || '#'} className="btn btn-primary">{o.btnText || 'Go somewere'}</a>}
        </Card>
      ) }
    </>
  );
}