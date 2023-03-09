import './App.css'; 

function Header(prop) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-space-between">
            <a className="navbar-brand" href="/">{prop.content}</a>
        
            <div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>  
  
    )
}
  
export default Header;