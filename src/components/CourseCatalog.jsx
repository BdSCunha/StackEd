import React from 'react';
import { CourseCard } from './CourseCard.jsx';

export const CourseCatalog = (props) => {
    return (
        <main style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {props.courses.map((course, index) => (
                <CourseCard key={index} {...course} />
            ))}
        </main>
    );
}
