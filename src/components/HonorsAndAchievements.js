import React from 'react'

const HonorsAndAchievements = ({data}) => {
    return (
        <div className="section">
            <h2 className="primary-heading border-b-2">Honors and Achievements</h2>
            <ul className="skills-list">
                {
                    data?.map((item, index) => (
                        <li key={index}>
                            <span className="fs-12">{item}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default HonorsAndAchievements
