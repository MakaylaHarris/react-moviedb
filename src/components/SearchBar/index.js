import React, { useState, useEffect, useRef } from 'react';
//Image
import searchIcon from '../../images/search-icon.svg';
//Styles
import { Wrapper, Content } from './SearchBar.Styles';

const SearchBar = ({ setSearchTerm }) => {
    const [state, setState] = useState('');

    // function handleChange(event) {
    //     setState(event.currentTarget.value);
    // }

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon'/>
                <input
                    type='text'
                    placeholder='Search Movie'
                    // onChange{handleChange}
                    value={state}
                />
            </Content>
        </Wrapper>
    );
};

export default SearchBar;
