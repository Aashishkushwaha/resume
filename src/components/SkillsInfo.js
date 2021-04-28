import React from 'react'
import PrimaryHeading from './PrimaryHeading'

const SkillsInfo = ({data}) => {
    return (
        <div className="section">
            <PrimaryHeading title="Technical Skills" />
            <ul className="skills-list">
                {
                    Object.entries(data)?.map(([key, value]) => (
                        <li key={key}><strong className="mr-4 my-6 inline-block">{key} : </strong>
                            {
                                value.map(item => (
                                    <span key={item} className="skill-item m-2 py-2 px-6 rounded inline-block">{item}</span>
                                ))
                            }                            
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SkillsInfo
