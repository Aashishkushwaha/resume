import React from 'react'

const EducationalInfo = ({data}) => {
    return (
        <div className="section">
            <h2 className="primary-heading border-b-2">Education</h2>
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
