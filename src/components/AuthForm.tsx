'use client'
import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

interface AuthFormProps {
  initialView?: 'login' | 'register';
}

export default function AuthForm({ initialView = 'login' }: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [view, setView] = useState<'login' | 'register'>(initialView);
  const [message, setMessage] = useState('');

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');
    try {
      if (view === 'login') {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        setMessage('¡Inicio de sesión exitoso! Redirigiendo...');
        setTimeout(() => {
          window.location.href = '/';
        }, 2000);
      } else {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        setMessage('¡Registro exitoso! Revisa tu correo para confirmar tu cuenta.');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-800 rounded-lg shadow-md mt-8">
      <h2 className="text-xl font-bold mb-4 text-center">
        {view === 'login' ? 'Iniciar Sesión' : 'Registro'}
      </h2>
      <form onSubmit={handleAuth} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Correo electrónico"
          className="px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        {error && <div className="text-red-400 text-sm">{error}</div>}
        {message && <div className="text-green-400 text-sm">{message}</div>}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 text-white font-semibold disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Procesando...' : view === 'login' ? 'Entrar' : 'Registrarse'}
        </button>
      </form>
      <div className="mt-4 text-center">
        {view === 'login' ? (
          <span>
            ¿No tienes cuenta?{' '}
            <button className="text-blue-400 underline" onClick={() => setView('register')}>
              Regístrate
            </button>
          </span>
        ) : (
          <span>
            ¿Ya tienes cuenta?{' '}
            <button className="text-blue-400 underline" onClick={() => setView('login')}>
              Inicia sesión
            </button>
          </span>
        )}
      </div>
    </div>
  );
}
