import AuthorizationPage from "./features/authorization/authorizationPage"
import Layuot from "./pages/Layout/Layout"
import ProductsPage from "./pages/ProductsPage/ProductsPage"
import Contacts from "./pages/Contacts/Contacts"
import AboutPage from "./pages/AboutPage/AboutPage"
import { Route, Routes} from 'react-router-dom'
import { useSelector } from "react-redux"

function App() {
  const authorizationPage = useSelector(state => state.authorization.authorizationPage)

  return (
    <>
      <Routes>
        <Route path="/" element={<Layuot/>}>
          <Route index element={<ProductsPage/>}/>
          <Route path="/TodoList" element={<AboutPage/>}/>
          <Route path="/Contacts" element={<Contacts/>}/>
          <Route path="/*" element={<>FFFFFFFFFFFFFFFFF</>}/>
        </Route>
      </Routes>    
    </>
  )
}

export default App
