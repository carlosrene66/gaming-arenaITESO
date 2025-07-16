import React from 'react';
import { supabase } from '../lib/supabaseClient';

export default function LogoutButton() {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };
  return (
    <button
      className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 text-white font-semibold mt-4"
      onClick={handleLogout}
    >
      Cerrar sesión
    </button>
  );
}
