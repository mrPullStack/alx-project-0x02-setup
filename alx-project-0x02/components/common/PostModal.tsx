import React, { useState } from 'react';

interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (post: { title: string; content: string }) => void;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim() && content.trim()) {
        onSubmit({ title, content });
        setTitle('');
        setContent('');
        onClose();
    }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
            <h2 className="text-xl font-bold mb-4">Add New Post</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Content</label>
                <textarea
                className="w-full border border-gray-300 rounded px-3 py-2"
                rows={4}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                />
            </div>
            <div className="flex justify-end gap-2">
                <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                >
                Cancel
                </button>
                <button
                type="submit"
                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                >
                Submit
                </button>
            </div>
            </form>
        </div>
        </div>
    );
};

export default PostModal;
