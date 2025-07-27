import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">SoloForge</h1>
        <nav className="space-x-4">
            <Link href="/home" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contactus" className="hover:underline">Contact Us</Link>
        </nav>
        </header>
    );
};

export default Header;
