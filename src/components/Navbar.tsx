import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold tracking-tight">GamingArena</Link>
      <div className="flex gap-4">
        <Link href="/register" className="hover:underline">Registro</Link>
        <Link href="/login" className="hover:underline">Iniciar sesión</Link>
        <Link href="/dashboard" className="hover:underline">Torneos</Link>
        <Link href="/admin" className="hover:underline">Admin</Link>
      </div>
    </nav>
  );
}
