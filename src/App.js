import React, {useEffect, useState} from 'react';
import './App.css';
import Form from './Form/Form';
import CardContainer from './CardContainer/CardContainer';


const App = () => {
  const [ideas, setIdeas] = useState([])

  const addIdea = (idea) => {
    setIdeas([...ideas, idea])
  }

  const removeIdea = (id) => {
    console.log('ideas', ideas)
    console.log('id',id)
    const filteredIdeas = ideas.filter((idea) => idea.id !== id)
    console.log('filteredIdeas',filteredIdeas)
    setIdeas(filteredIdeas)
    console.log('ideas resaved', ideas)
  }

  return (
    <div className="App">
      <header className="App-header">
        Idea Box with Hooks
      </header>
      <Form addIdea={addIdea} />
      <CardContainer ideas={ideas} removeIdea={removeIdea} />
    </div>
  )
}

export default App;
