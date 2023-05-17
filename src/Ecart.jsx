import { Header } from "./components/Header/Header"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"

export const Ecart = () => {

  const greeting = 'Bienvenidos a E-CART....'

  return (
    <>
    <Header/>
    <ItemListContainer greeting={greeting}/>
    </>
  )
}
