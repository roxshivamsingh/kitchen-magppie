import React from 'react'

interface CardProps {
    img: string
}

const Card: React.FC<CardProps> = ({ img }) => {
    return (
        <div className="flex flex-col p-6 bg-white rounded-lg shadow-md">
            <img src={img} alt="logo" className="h-100 mb-4 object-cover" />
        </div>
    )
}

export default Card
