import Head from 'next/head';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import { useState } from 'react';

export default function HomePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [posts, setPosts] = useState([
        {
        title: 'Getting Started',
        content: 'Learn how to set up your Next.js project with TypeScript and Tailwind CSS.',
        },
        {
        title: 'Reusable Components',
        content: 'Build modular, scalable UI elements with React and TypeScript.',
        },
        {
        title: 'API Integration',
        content: 'Fetch and display external data using JSONPlaceholder API.',
        },
    ]);

    const handleAddPost = (post: { title: string; content: string }) => {
        setPosts([post, ...posts]);
    };

    return (
        <>
        <Head>
            <title>Home | SoloForge</title>
        </Head>
        <main className="min-h-screen bg-gray-50">
            <Header />
            <div className="p-8 text-center">
            <h1 className="text-3xl font-bold mb-6">Welcome to the Home Page</h1>
            <button
                onClick={() => setIsModalOpen(true)}
                className="mb-8 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Add New Post
            </button>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
                {posts.map((post, index) => (
                <Card key={index} title={post.title} content={post.content} />
                ))}
            </div>
            </div>
            <PostModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleAddPost}
            />
        </main>
        </>
    );
}
