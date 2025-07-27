import Head from 'next/head';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';

export default function HomePage() {
    return (
        <>
        <Head>
            <title>Home | SoloForge</title>
        </Head>
        <main className="min-h-screen bg-gray-50">
            <Header />
            <div className="p-8 text-center">
            <h1 className="text-3xl font-bold mb-8">Welcome to the Home Page</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
                <Card
                title="Getting Started"
                content="Learn how to set up your Next.js project with TypeScript and Tailwind CSS."
                />
                <Card
                title="Reusable Components"
                content="Build modular, scalable UI elements with React and TypeScript."
                />
                <Card
                title="API Integration"
                content="Fetch and display external data using JSONPlaceholder API."
                />
            </div>
            </div>
        </main>
        </>
    );
}
