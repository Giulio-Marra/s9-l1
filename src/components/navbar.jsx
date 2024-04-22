const Navbar = props => (
    <nav className={props.className}>
      <div className="navLogo">
        <img src={props.logoSrc} alt="Logo" className="logo"/>
      </div>
      <div className="navLink">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Altro</a>
      </div>
    </nav>
  );

  export default Navbar;