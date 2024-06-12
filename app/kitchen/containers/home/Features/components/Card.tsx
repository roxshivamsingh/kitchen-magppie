import React from 'react'

interface CardProps {
    icon: string
    title: string
    description: string
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col items-start text-start p-6 bg-white rounded-lg shadow-md">
            <img src={icon} alt={title} className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    )
}

export default Card
