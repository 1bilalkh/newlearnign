import React from 'react'
import Allprops from './Allprops.jsx'
import { Row} from 'antd';
import './App.css'
import TodoApp from './Todolist.jsx';



function App() {
 
  return (
    <>
    <Row gutter={[16, 16]}>
    
      <Allprops heading="Graphics Designing" content="this is a Graphics Designing Content Section" />
      <Allprops heading="Web Designing" content="this is a Web Designing Content Section" />
      <Allprops heading="Search Engine Optimization" content="this is a Search Engine Optimization Content Section" />
    </Row>
      <TodoApp />
    </>
  )
}

export default App
