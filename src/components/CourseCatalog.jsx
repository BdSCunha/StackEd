import React from 'react';
import { CourseCard } from './CourseCard.jsx';
import { courseData } from '../components/courseData.js'

export const CourseCatalog = () => {
    return (
        <main style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {courseData.map((course, index) => (
                <CourseCard key={index} {...course} />
            ))}
        </main>
    );
}
