import React, { useState } from 'react'

const Form = ({addIdea}) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

 const submit = (e) => {
    e.preventDefault()
    const idea = {title: title, body: body, id: Date.now()}
    addIdea(idea)
    setTitle('')
    setBody('')
  }

  return(
    <form>
      <input
        placeholder='Idea Name'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        placeholder='Idea'
        onChange={(e) => setBody(e.target.value)}
        value={body}
      />
      <button onClick={submit}>Submit</button>

    </form>

  )



}

export default Form
