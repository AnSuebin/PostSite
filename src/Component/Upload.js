import { useState } from 'react'

const Upload = (props) => {
  const [Content, setContent] = useState('')

  const onSubmit = () => {
    let tempArr = [...props.ContentList]
    tempArr.push(Content)
    props.setContentList([...tempArr])
    setContent('')
  }

  return (
    <div>
      <input
        type="text"
        value={Content}
        onChange={(event) => {
          setContent(event.currentTarget.value)
        }}
      />
      <button
        onClick={() => {
          onSubmit()
        }}
        style={{ marginBottom: '1rem' }}
      >
        제출!
      </button>
    </div>
  )
}

export default Upload