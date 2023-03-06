import React from 'react';
import { CourseCard } from './CourseCard.jsx';

export const CourseCatalog = (props) => {
    return (
        <main style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '1425px', alignItems: 'center', margin: 'auto'}}>
            {props.courses.map((course, index) => (
                <CourseCard key={index} {...course} />
            ))}
        </main>
    );
}
