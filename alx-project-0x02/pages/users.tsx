
import Head from 'next/head';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { type UserProps } from '@/interfaces';

interface UsersPageProps {
    users: UserProps[];
}

export default function UsersPage({ users }: UsersPageProps) {
    return (
        <>
        <Head>
            <title>Users | SoloForge</title>
        </Head>
        <main className="min-h-screen bg-gray-100">
            <Header />
            <div className="p-8 text-center">
            <h1 className="text-3xl font-bold">Users Page</h1>
            <p className="mt-4 text-gray-700">List of users fetched from an external API.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 pb-12">
            {users.map((user) => (
                <UserCard key={user.id} {...user} />
            ))}
            </div>
        </main>
        </>
    );
    }

    export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: UserProps[] = await res.json();

    return {
        props: {
        users,
        },
    };
}
