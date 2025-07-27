import Head from 'next/head';
import Header from '@/components/layout/Header';

export default function PostsPage() {
    return (
        <>
        <Head>
            <title>Posts | SoloForge</title>
        </Head>
        <main className="min-h-screen bg-gray-100">
            <Header />
            <div className="p-8 text-center">
            <h1 className="text-3xl font-bold">Posts Page</h1>
            <p className="mt-4 text-gray-700">This page will display posts fetched from an external API.</p>
            </div>
        </main>
        </>
    );
}
