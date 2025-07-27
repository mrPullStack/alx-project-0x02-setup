import Head from 'next/head';
import Header from '@/components/layout/Header';

export default function Home() {
  return (
      <>
        <Head>
          <title>SoloForge</title>
          <meta name="description" content="Welcome to SoloForge!" />
        </Head>
        <main className='min-h-screen bg-gray-50'>
          <Header />
          <div className="p-8 text-center">
            <h2 className='text-2xl font-semibold'>Welcometo SoloForge: Mastering Project Autonomy</h2>
            <p className='mt-4 text-gray-700'>Your journey into Next.js, TypeScript, and Tailwind CSS starts here.</p>
          </div>
        </main>
      </>
  );
}