import React from 'react'
import PrimaryHeading from './PrimaryHeading'

const EducationalInfo = ({data}) => {
    return (
        <div className="section">
            <PrimaryHeading title="Education and Qualification" />
            <ul className="skills-list">
                {
                    data?.map((item, index) => (
                        <li key={index} style={{margin: '.3rem 0'}}>
                            <h3>
                                <strong className="fs-14">{item.degree}</strong> 
                                <span className="mx-4 fs-10">({item.duration})</span>
                            </h3>
                            <span className="fs-12">{item.college}, {item.university} - {item.location}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default EducationalInfo
