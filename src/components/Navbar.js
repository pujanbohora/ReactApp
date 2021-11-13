import React from 'react' //rfc => function base component
import PropTypes from 'prop-types' //impt
// import { Link } from 'react-router-dom'


export default function Navbar(props) {
    return (
        <div>
           <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
                <a className="navbar-brand" href="#">{props.title}</a>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li className="nav-item">
                        {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/about">{props.AboutText}</Link>
                    </li> */}
                    </ul>
                    {/* <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" type="checkbox" onClick={props.toogleMode} role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div>
                    <div className={`form-check form-switch text-${props.mode==='dark'?'danger':'dark'}`}>
                        <input className="form-check-input" onClick={props.RedMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">{props.redText}</label>
                    </div>
                </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    //title: PropTypes.string.isRequired,
    AboutText: PropTypes.string}

Navbar.defaultProps = {
    title: 'Set title here',
    AboutText: 'About text here'
}    
