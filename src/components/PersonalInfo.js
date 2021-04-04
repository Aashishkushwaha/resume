import React from 'react'
import PrimaryHeading from './PrimaryHeading'

const PersonalInfo = ({data}) => {
    const { personalInfo, github, linkedIn } = data
    return (
        <div className="section">
            <PrimaryHeading title="Personal Information" />
            <ul className="skills-list">
                {
                    linkedIn && (
                        <li>
                            <strong className="mr-4">LinkedIn : </strong>
                            <span>
                                <a className="email" target="_blank" rel="noreferrer" href={linkedIn?.url}>{linkedIn?.username}</a> ({linkedIn?.url})
                            </span>
                        </li>        
                    )
                }
                {
                    github && (
                        <li>
                            <strong className="mr-4">Github : </strong>
                            <span>
                                <a className="email" target="_blank" rel="noreferrer" href={github?.url}>{github?.username}</a> ({github?.url})
                            </span>
                        </li>
                    )
                }
                {
                    Object.entries(personalInfo)?.map(([key, value]) => (
                        <li key={key}>
                            <strong className="mr-4">{key} : </strong>
                            <span>{value}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default PersonalInfo
