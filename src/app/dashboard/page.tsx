import React from 'react';
import TournamentCard from '../../components/TournamentCard';
import Navbar from "../../components/Navbar";

const mockTournaments = [
  { id: 1, name: 'Torneo Valorant', date: '2025-08-01', description: 'Competencia de Valorant para equipos de 5.' },
  { id: 2, name: 'Torneo LoL', date: '2025-08-10', description: 'League of Legends 1v1.' },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white flex flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-16">
      <h2 className="text-2xl font-bold mb-6">Torneos Disponibles</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {mockTournaments.map((tournament) => (
          <TournamentCard key={tournament.id} tournament={tournament} showInscribirse />
        ))}
      </div>
      </main>
    </div>
  );
}
