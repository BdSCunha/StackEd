import React from 'react';
import PropTypes from 'prop-types';
import { FaRegClock } from 'react-icons/fa'
import './CourseCard.css'

export const CourseCard = (props) => {
    const { image, name, category, description, time } = props;

    return (
        <div className="card">
            <img src={image} alt={name} className="card-icon" />
            <div className="card-body">
                <h2>{name}</h2>
                {/* <p>Category: {category}</p> */}
                <p>{description}</p>
                <p className='clock'><FaRegClock /> {time} hours</p>
            </div>
        </div>
    );
}

CourseCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
};
