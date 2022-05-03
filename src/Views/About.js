import React from 'react';
import PropTypes from 'prop-types';

const About = props => {
    return (
        <div>
            <h1 className='font-bold text-2xl mb-3'>My About Page</h1>
            <div>
                This is the About Page content
            </div>
        </div>
    );
};

About.propTypes = {};

export default About;
