import Nav from "../Nav/Nav"
import styles from "./Header.module.css"
const Header = () =>{
   return (
       <header  className={styles.header}>
           <Nav href="/">Main</Nav>
           <Nav href="/todo">Todo list</Nav>
           <Nav href="/swapi">Swapi</Nav>
       </header>
   )
}


export default Header