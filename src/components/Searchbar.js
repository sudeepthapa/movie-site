import React from 'react'

const Searchbar = () =>{
    return(
    <div className="container">
        <nav>
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                    <input type="search" id = "search" required placeholder="Search Movie Here...."/>
                    <label htmlFor="search" className="label-icon"> <i className="material-icons">search</i></label>
                    </div>
                </form>
            </div>            
        </nav>
    </div>

    );
}

export default Searchbar;