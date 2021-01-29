import React from 'react';
import Card from '../Card/Card';

const CardContainer = ({removeIdea, ideas}) => {

  const displayCard = ideas.map((idea) => <Card removeIdea={removeIdea} idea={idea} key={idea.id}/> )

  return (
    <div>
      {displayCard}
    </div>
  )
}

export default CardContainer;
