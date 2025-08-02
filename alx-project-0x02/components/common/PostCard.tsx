import { type PostProps } from '@/interfaces';
import React from 'react';

const PostCard: React.FC<PostProps> = ({ title, body, userId }) => {
    return (
        <div className="border p-4 rounded-md shadow-md bg-white mb-4">
        <h2 className="text-lg font-semibold text-blue-600">{title}</h2>
        <p className="text-gray-700">{body}</p>
        <span className="text-sm text-gray-500">User ID: {userId}</span>
        </div>
    );
};

export default PostCard;
