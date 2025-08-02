// components/common/UserCard.tsx

import { type UserProps } from '@/interfaces';

export default function UserCard({ name, email, address }: UserProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{email}</p>
        <p className="text-gray-500 text-sm mt-2">
            {address.street}, {address.suite}, {address.city}, {address.zipcode}
        </p>
        </div>
    );
}
