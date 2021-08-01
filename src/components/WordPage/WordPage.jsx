import React, {useState} from 'react';
import './WordPage.scss';
import Loading from '../Loading/Loading';

const WordPage = ({data, updateData}) => {

    const [searchWord, setSearchWord] = useState('');
    const [load, setLoad] = useState(false);

    let keygen = 0;

    function handleChange(e) {
        setSearchWord(e.target.value);
    }

    async function update(e) {
        e.preventDefault();
        setLoad(true);
        await updateData(searchWord);
        setLoad(false);
    }

    function renderInfo(arr) {
        return arr.map((item) => {
            return (
            <div key={keygen++}>
                <h2 key={keygen++} className="word__part">{item.type}</h2>
                <div key={keygen++} className="word__definitions">{item.definition}</div>
                <div key={keygen++} className="word__examples">{item.example}</div>
            </div>
            )
        });
    }

    const content = renderInfo(data.definitions);

    if (load) {
        return <Loading/>
    }

    return (
        <div className="word">
            <form onSubmit={update} className="word__search">
                <input 
                    name="search"
                    type="text"
                    onChange={handleChange}
                    required 
                    placeholder="Type something..." />
                <button>OK</button>
            </form>
            <div className="word__intro">
                <h1 className="word__title">{data.word}</h1>
                <h3 className="word__pronun">[ {data.pronunciation ? data.pronunciation : data.word} ]</h3>
            </div>
            <div className="word__info">
                {content}
            </div>

        </div>
    );
};

export default WordPage;