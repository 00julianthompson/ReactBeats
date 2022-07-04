import "./Navbar.css";

function NavBar() {
    return (
        <div className="NavBar">
      <h1 className="Page_Title">TRUST</h1>
      
      <ul>
        <li><a href="/Home">Home</a></li>
        <li><a href="/Beats">Beats</a></li>
        <li><a href="/Loops">Loops</a></li>
        <li><a href="/Demos">Demos</a></li>
      </ul>
    </div>
    )

}


export default NavBar;