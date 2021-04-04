import React from 'react'
import PrimaryHeading from './PrimaryHeading'

const HonorsAndAchievements = ({data}) => {
    return (
        <div className="section">
            <PrimaryHeading title="Honors and Achievements" />
            <ul className="skills-list">
                {
                    data?.map((item, index) => (
                        <li key={index}>
                            <span>{item}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default HonorsAndAchievements
