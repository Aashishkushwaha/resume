import React from 'react'

const WorkExperience = ({data}) => {
    return (
        <div className="section">
            <h2 className="primary-heading border-b-2">Work Experience</h2>
            {
                data.map((item, index) => (
                    <div key={index} className="experience-info">
                        <h3 className="company-title">
                            <i className="fas fa-building icon fs-16" /> 
                                <span>{item.companyName}</span>
                            <span className="company-joining-info">
                                <span className="mx-4 fs-12">( {item?.startDate} - {item.endDate} )</span>
                                <span className="fs-12">( {item.location} )</span>
                            </span>
                        </h3>
                        <ul className="experience-description-list">
                            {
                                item?.experienceInfo?.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}

export default WorkExperience
