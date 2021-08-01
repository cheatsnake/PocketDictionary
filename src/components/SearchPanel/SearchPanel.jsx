import React, {useState} from 'react';
import './SearchPanel.scss';

const SearchPanel = ({updateData}) => {

    const [searchWord, setSearchWord] = useState('');

    function handleChange(e) {
        setSearchWord(e.target.value);
    }

    function update(e) {
        e.preventDefault();
        updateData(searchWord);
    }

    return (
        <form onSubmit={update} className="search">
            <input onChange={handleChange} type="text" required placeholder="Type something..." />
            <button className="btn">Search</button>
        </form>
    );
};

export default SearchPanel;