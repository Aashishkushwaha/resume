import React from 'react'

const PersonalInfo = ({data}) => {
    const { personalInfo, github, linkedIn } = data
    return (
        <div className="section">
            <h2 className="primary-heading border-b-2">Personal Information</h2>
            <ul className="skills-list">
                {
                    linkedIn && (
                        <li>
                            <strong className="mr-4 fs-12">LinkedIn : </strong>
                            <span>
                                <a className="email" target="_blank" rel="noreferrer" href={linkedIn?.url}>{linkedIn?.username}</a> ({linkedIn?.url})
                            </span>
                        </li>        
                    )
                }
                {
                    github && (
                        <li>
                            <strong className="mr-4 fs-12">Github : </strong>
                            <span>
                                <a className="email" target="_blank" rel="noreferrer" href={github?.url}>{github?.username}</a> ({github?.url})
                            </span>
                        </li>
                    )
                }
                {
                    Object.entries(personalInfo)?.map(([key, value]) => (
                        <li key={key}>
                            <strong className="mr-4 fs-12">{key} : </strong>
                            <span>{value}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default PersonalInfo
