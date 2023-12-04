import { Link } from 'react-router-dom';


function Nav() {

  return (
    <header>
        
        <nav className="navbar">
        
        <Link key={1} className="nav-link text-light" to="/">
          Home
        </Link>
        <Link key={1} className="nav-link text-light" to="/portfolio">
          Portfolio
        </Link>


        </nav>
    </header>
    
       
  
  )
}

export default Nav
