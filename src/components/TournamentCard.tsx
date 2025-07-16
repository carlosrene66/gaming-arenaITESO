import React from 'react';

interface Tournament {
  id: number;
  name: string;
  date: string;
  description: string;
}

interface TournamentCardProps {
  tournament: Tournament;
  showInscribirse?: boolean;
}

const TournamentCard: React.FC<TournamentCardProps> = ({ tournament, showInscribirse }) => {
  return (
    <div className="bg-black rounded shadow p-6 flex flex-col gap-2">
      <h4 className="text-lg font-bold">{tournament.name}</h4>
      <p className="text-gray-600">Fecha: {tournament.date}</p>
      <p className="text-gray-700">{tournament.description}</p>
      {showInscribirse && (
        <button className="mt-4 py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700">Inscribirse</button>
      )}
    </div>
  );
};

export default TournamentCard;
