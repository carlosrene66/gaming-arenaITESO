import React from 'react';

export default function TournamentForm() {
  return (
    <form className="bg-black rounded shadow p-6 max-w-lg mx-auto mb-8">
      <h4 className="text-lg font-bold mb-4">Crear Nuevo Torneo</h4>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Nombre del torneo"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <input
          type="date"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Descripción"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700"
      >
        Crear Torneo
      </button>
    </form>
  );
}
