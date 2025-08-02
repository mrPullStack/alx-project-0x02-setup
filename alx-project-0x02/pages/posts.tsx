import Head from 'next/head';
import Header from '@/components/layout/Header';
import { useEffect, useState } from 'react';
import PostCard from '@/components/common/PostCard';
import { type PostProps } from '@/interfaces';

export default function PostsPage() {
    const [posts, setPosts] = useState<PostProps[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then((res) => res.json())
        .then((data) => {
            setPosts(data);
            setLoading(false);
        });
    }, []);

    return (
        <>
        <Head>
            <title>Posts | SoloForge</title>
        </Head>
        <main className="min-h-screen bg-gray-100">
            <Header />
            <div className="p-8 text-center">
            <h1 className="text-3xl font-bold">Posts Page</h1>
            <p className="mt-4 text-gray-700">This page displays posts fetched from an external API.</p>
            </div>
            <div className="px-8">
            {loading ? (
                <p className="text-center text-gray-500">Loading posts...</p>
            ) : (
                posts.map((post) => <PostCard key={post.id} {...post} />)
            )}
            </div>
        </main>
        </>
    );
}
