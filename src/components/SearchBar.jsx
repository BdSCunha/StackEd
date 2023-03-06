import './SearchBar.css'
import { FaSearch } from 'react-icons/fa';

export const SearchBar = (props) => {
    const handleInputChange = (event) => {
        const query = document.getElementById('search-text').value;
        const category = document.getElementById('category-select').value;
        props.onSearch(query, category);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleInputChange();
        }
    };

    return (
        <div className="search-bar">
            <select id="category-select">
                <option value="">All categories</option>
                <option value="Front End">Front End</option>
                <option value="Back End">Back End</option>
                <option value="DevOps">DevOps</option>
                <option value="Agile Methodologies">Agile Methodologies</option>
            </select>
            <input id="search-text" type="search" placeholder="Search courses" onKeyDown={handleKeyDown} />
            <button type="submit" onClick={handleInputChange}><FaSearch className="icon" /></button>
        </div>
    );
};
