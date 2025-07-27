import Head from 'next/head';
import Header from '@/components/layout/Header';

export default function AboutPage() {
    return (
        <>
        <Head>
            <title>About | SoloForge</title>
        </Head>
        <main className="min-h-screen bg-gray-100">
            <Header />
            <div className="p-8 text-center">
            <h1 className="text-3xl font-bold">About This Project</h1>
            <p className="mt-4 text-gray-700">
                SoloForge helps you master project autonomy with Next.js, TypeScript, and Tailwind CSS.
            </p>
            </div>
        </main>
        </>
    );
}
