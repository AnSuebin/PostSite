import { useState, useEffect } from 'react'
import axios from 'axios'

const List = (props) => {
  let body = {
    text: 'hello',
  }
  const [text, setText] = useState('')
  useEffect(() => {
    axios
      .post('/api/test', body)
      .then((response) => {
        // 성공 핸들링
        console.log(response)
        setText(response.data.text)
      })
      .catch((error) => {
        // 에러 핸들링

        console.log(error)
      })
  }, [])

  return (
    <div>
      <h2>List</h2>
      <h3>{text}</h3>
      {props.ContentList.map((content, idx) => {
        return (
          <div
            key={idx}
            style={{
              width: '100%',
              marginLeft: '1rem',
            }}
          >
            <hr />
            내용 : {content}
          </div>
        )
      })}
    </div>
  )
}

export default List
