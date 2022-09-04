import { Route, Routes } from 'react-router-dom'
import Heading from './Component/Heading'
import List from './Component/List'
import Upload from './Component/Upload'
import { useState } from 'react'

function App() {
  const [ContentList, setContentList] = useState([])

  return (
    <>
      <Heading />
      <Routes>
        <Route
          path="/Upload"
          element={
            <Upload ContentList={ContentList} setContentList={setContentList} />
          }
        />
        <Route
          path="/List"
          element={
            <List ContentList={ContentList} setContentList={setContentList} />
          }
        />
      </Routes>
    </>
  )
}

export default App
