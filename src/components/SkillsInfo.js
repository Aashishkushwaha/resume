import React from 'react'

const SkillsInfo = ({data}) => {
    return (
        <div className="section">
            <h2 className="primary-heading border-b-2">Techincal Skills</h2>
            <ul className="skills-list">
                {
                    Object.entries(data)?.map(([key, value]) => (
                        <li key={key}><strong className="mr-4">{key} : </strong><span>{value?.join(", ")}</span></li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SkillsInfo
