import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white flex flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">Bienvenido a GamingArena</h1>
        <p className="text-lg md:text-xl mb-10 text-center max-w-2xl">
          Plataforma para gestionar y participar en torneos gamer. Regístrate, inicia sesión, crea y únete a torneos de tus juegos favoritos.
        </p>
        <div className="flex flex-col md:flex-row gap-6">
          <Link href="/register" className="px-6 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition">Registro</Link>
          <Link href="/login" className="px-6 py-3 bg-gray-700 rounded-lg font-semibold hover:bg-gray-800 transition">Iniciar sesión</Link>
          <Link href="/dashboard" className="px-6 py-3 bg-green-600 rounded-lg font-semibold hover:bg-green-700 transition">Ver Torneos</Link>
          <Link href="/admin" className="px-6 py-3 bg-purple-600 rounded-lg font-semibold hover:bg-purple-700 transition">Admin</Link>
        </div>
      </main>
      <footer className="text-center py-4 text-gray-400 text-sm">
        © 2025 GamingArena. Todos los derechos reservados.
      </footer>
    </div>
  );
}