const Navbar = () => {
    return (  
        <nav className="navbar">
            <h2> The best website for duruus</h2>
<div className="links">
<a href="/"> Home </a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '7px',

                }}> New file </a>

</div>
        </nav>
    );
}
 
export default Navbar;