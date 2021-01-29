import React from 'react';

const Card = ({removeIdea, idea}) => {
  return(
    <div>
      <h3>{idea.title}</h3>
      <p>{idea.body}</p>
      <button onClick={() => removeIdea(idea.id)}>x</button>
    </div>
  )
}

export default Card;
