import { useState } from 'react';
import { Navbar } from '../components/Navbar.jsx'
import { CourseCatalog } from '../components/CourseCatalog.jsx'
import { Footer } from '../components/Footer.jsx'
import { SearchBar } from '../components/SearchBar.jsx';
import { courseData } from '../components/courseData.js'

export const Home = () => {
    const [courses, setCourses] = useState(courseData);

    const handleSearch = (query, category) => {
        // Filter the courses based on the search query and category
        const filteredCourses = courseData.filter((course) =>
            (course.name.toLowerCase().includes(query.toLowerCase()) ||
                course.category.toLowerCase().includes(query.toLowerCase()) ||
                course.description.toLowerCase().includes(query.toLowerCase())) &&
            (category === "" || course.category === category)
        );
        setCourses(filteredCourses);
    };

    return (
        <div className="wrapper">
            <Navbar />
            <SearchBar onSearch={handleSearch} />
            <CourseCatalog courses={courses} />
            <Footer />
        </div>
    );
};
