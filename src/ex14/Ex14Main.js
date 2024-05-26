/* eslint-disable react/jsx-pascal-case */
import Nav from './Component/Nav'
import { Route, Routes } from 'react-router-dom'
import Addlist from './Component/Addlist'
import Getlist from './Component/Getlist'
import Editlist from './Component/Editlist'
import Context_TodoList from './Context_Api/Context_TodoList'


const Ex14Main = () => {
  
  return (
    <div>
      <Context_TodoList>
        <Nav />
        <Routes>
          <Route path='/' element={<Getlist/>}/>
          <Route path='/add' element={<Addlist/>}/>
          <Route path='/edit/:id' element={<Editlist/>}/>
        </Routes>
      </Context_TodoList>
    </div>
  )
}

export default Ex14Main
