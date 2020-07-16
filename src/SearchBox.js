import React, { Fragment } from 'react';

const SearchBox = ({searchChange}) => {
    return(
        <Fragment>
            <div className="pa2 white">
                <input 
                className="pa3 ba b--green bg-black" 
                type='search' 
                placeholder='Search Movies'
                onChange={searchChange}
                ></input>
            </div>
        </Fragment>
    );
}

export default SearchBox;