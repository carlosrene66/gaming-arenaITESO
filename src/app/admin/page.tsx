import React from 'react';
import TournamentForm from '../../components/TournamentForm';
import TournamentCard from '../../components/TournamentCard';

const mockTournaments = [
  { id: 1, name: 'Torneo Valorant', date: '2025-08-01', description: 'Competencia de Valorant para equipos de 5.' },
  { id: 2, name: 'Torneo LoL', date: '2025-08-10', description: 'League of Legends 1v1.' },
];

export default function AdminPage() {
  return (
    <div className="min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white flex flex-col">
      <h2 className="text-2xl font-bold mb-6">Panel de Administrador</h2>
      <TournamentForm />
      <h3 className="text-xl font-semibold mt-10 mb-4">Torneos Creados</h3>
      <div className="grid gap-6 md:grid-cols-2">
        {mockTournaments.map((tournament) => (
          <TournamentCard key={tournament.id} tournament={tournament} />
        ))}
      </div>
    </div>
  );
}
