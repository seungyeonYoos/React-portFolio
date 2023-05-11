function Nav(props) {

    return (
        <div className='nav'>
            <div className="navbar">
                <div className='logo'>SEUNGYEON'S WEB</div>
                <div className="navbarR">
                    <div onClick={props.handleClick}>ABOUT</div>
                    <div onClick={props.projectClick}>PROJECT</div>
                    <div onClick={props.contactClick}>CONTACT</div>
                </div>
            </div>
        </div>
    )
}

export default Nav;