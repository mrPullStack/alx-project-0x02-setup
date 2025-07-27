import React from 'react';
import { type CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-600">{content}</p>
        </div>
    );
};

export default Card;
