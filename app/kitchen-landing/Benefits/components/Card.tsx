import React from 'react'

interface CardProps {
    img: string
    title: string
}

const Card: React.FC<CardProps> = ({ img, title }) => {
    return (
        <div className="flex flex-col p-6 bg-white rounded-lg shadow-md">
            <img src={img} alt="logo" className="h-100 mb-4 object-cover" />
            <h1>{title}</h1>
        </div>
    )
}

export default Card
