import React from 'react';

export default function LoginPage() {
  return (
    <div className="min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white flex flex-col">
      <div className="w-full max-w-md p-8 space-y-6 bg-black rounded shadow">
        <h2 className="text-2xl font-bold text-center">Iniciar Sesión</h2>
        <form className="space-y-4">
          <input type="email" placeholder="Correo electrónico" className="w-full px-3 py-2 border bg-gray-700 rounded focus:outline-none focus:ring focus:border-blue-300" />
          <input type="password" placeholder="Contraseña" className="w-full px-3 py-2 border bg-gray-700 rounded focus:outline-none focus:ring focus:border-blue-300" />
          <button type="submit" className="w-full py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700">Entrar</button>
        </form>
      </div>
    </div>
  );
}
