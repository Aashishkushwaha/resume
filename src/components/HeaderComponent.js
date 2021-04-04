import React from 'react'

const HeaderComponent = ({data}) => {
    const { name = '', contact = [], email = '', address = '', selfInfo} = data
    return (
        <>
            <h1 className="title-primary center">{name}</h1>
            <div className="contact-info center">
                <span>
                    <i className="fas fa-home icon" />
                    <span>{address}</span>
                </span>
                <span>
                    <i className="fas fa-phone-alt icon" />
                    <span><a className="email" href={`tel:${contact}`}>{contact}</a></span>
                </span>
                <span>
                    <i className="fas fa-envelope icon" />
                    <a className="email" href={`mailto:${email}`}>{email}</a>
                </span>
            </div>
            <div className="self-info">{selfInfo}</div>
        </>
    )
}

export default HeaderComponent
