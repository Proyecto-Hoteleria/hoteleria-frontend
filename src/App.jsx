import { AuthPage } from "./pages/AuthPage/AuthPage"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <>
    <AuthPage/>
    <Toaster position="bottom-rigth" reverseOrder={false} />
    </>
  )
}

export default App
