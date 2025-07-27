import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter();
    const isActive = (path: string) =>
        router.pathname === path ? 'text-white underline' : 'text-gray-300';
    return (
        <header className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">SoloForge</h1>
        <nav className="space-x-4">
            <Link href="/home" className={isActive('/home')}>Home</Link>
            <Link href="/about" className={isActive('/about')}>About</Link>
            <Link href="/posts" className={isActive('/posts')}>Posts</Link>
        </nav>
        </header>
    );
};

export default Header;
