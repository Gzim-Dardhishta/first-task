import React from 'react';

function UpdatesCard( {newCard, fixCard, improvmentCard, cardStyle, title}  ) {

  return (

    <section>
      <h2 style={cardStyle.title}> { title }</h2>
      <div style={cardStyle.cardPosition}>
        <div>
          {newCard.map((card) => (
            <div style = {cardStyle.cardBorder} key={card.id}>
              <div style={cardStyle.cardInfo}>
                <h2 style={ cardStyle.publishDate }>{ card.publishedDate }</h2>
                <span style={cardStyle.new}>{ card.types }</span>
                <span style={cardStyle.photo}>{ card.photo }</span>
                <span style={cardStyle.name}>{ card.name }</span>
                <p style={cardStyle.info}>{ card.info }</p>
                <button style={cardStyle.download}>{ card.button }</button>
              </div>
            </div>  
          ))}
        </div>

        <div>
          {fixCard.map((card) => (
            <div style = {cardStyle.cardBorder} key={card.id}>
              <div style={cardStyle.cardInfo}>
                <h2 style={ cardStyle.publishDate }>{ card.publishedDate }</h2>
                <span style={cardStyle.fix}>{ card.types }</span>
                <span style={cardStyle.photo}>{ card.photo }</span>
                <span style={cardStyle.name}>{ card.name }</span>
                <p style={cardStyle.info}>{ card.info }</p>
                <button style={cardStyle.download}>{ card.button }</button>
              </div>
            </div>  
          ))}
        </div>

        <div>
          {improvmentCard.map((card) => (
            <div style = {cardStyle.cardBorder } key={card.id}>
              <div style={cardStyle.cardInfo}>
                <h2 style={ cardStyle.publishDate }>{ card.publishedDate }</h2>
                <span style={cardStyle.improvment}>{ card.types }</span>
                <span style={cardStyle.photo}>{ card.photo }</span>
                <span style={cardStyle.name}>{ card.name }</span>
                <p style={cardStyle.info}>{ card.info }</p>
                <button style={cardStyle.download} >{ card.button }</button>
              </div>
            </div>  
          ))}
        </div>
      </div>
    </section>
  )
}

export default UpdatesCard;