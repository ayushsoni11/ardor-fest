import React from 'react'

const Domain = ({ img, title, icon }) => {
    return (

        <div className="card">
            <img className="background" src={img} alt="" />

            <div className="card-content">
                <div className="profile-image">
                {icon}
                </div>

                <h3 className="title">{title}</h3>
            </div>
            <div className="backdrop"></div>
        </div>

    )
}

export default Domain
