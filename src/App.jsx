import AuthorizationPage from "./features/authorization/authorizationPage"
import Layuot from "./pages/Layout/Layout"
import ProductsPage from "./pages/ProductsPage/ProductsPage"
import Contacts from "./pages/Contacts/Contacts"
import TodoList from "./pages/TodoList/TodoList"
import { Route, Routes} from 'react-router-dom'
import { useSelector } from "react-redux"

function App() {
  const authorizationPage = useSelector(state => state.authorization.authorizationPage)

  return (
    <>
      <Routes>
        <Route path="/" element={<Layuot/>}>
          <Route index element={<ProductsPage/>}/>
          <Route path="/TodoList" element={<TodoList/>}/>
          <Route path="/Contacts" element={<Contacts/>}/>
          <Route path="/*" element={<></>}/>
        </Route>
      </Routes>    
    </>
  )
}

export default App
