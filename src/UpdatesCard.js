import React from 'react';

function UpdatesCard( { cards, title}  ) {

  return (
    <section>
      <h2 className='title'> { title }</h2>
      <div className='card-position'>
          {cards.map((card) => (
            <div className='card-border' key={card.id}>
              <div className='card-info'>
                <h2 className='publish-date'>{ card.publishedDate }</h2>
                <span className={`types ${card.class}`}>{ card.types }</span>
                <span className='photo'>{ card.photo }</span>
                <span className='name'>{ card.name }</span>
                <p className='info'>{ card.info }</p>
                <button className='download'>{ card.button }</button>
              </div>
            </div>  
          ))}
      </div>
    </section>
  )
}

export default UpdatesCard;