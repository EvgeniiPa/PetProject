import AuthorizationPage from "./features/authorization/authorizationPage"
import MainPage from "./features/mainPage/mainPage"
import { useSelector } from "react-redux"

function App() {
  const authorizationPage = useSelector(state => state.authorization.authorizationPage)

  return (
    <>
    {authorizationPage ?  <AuthorizationPage/> : <MainPage/>}
    
    </>
  )
}

export default App
