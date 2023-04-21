function Nav() {
    document.addEventListener('click', function() {
        console.log(11)
      });
    return (
        <div className='nav'>
            <div className="navbar">
                <div className='logo'>Seungyeon's space</div>
                <div className="navbarR">
                    <div>abou</div>
                    <div>project</div>
                    <div>contact</div>
                </div>
            </div>
        </div>
    )
}

export default Nav;