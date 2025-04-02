import React from 'react';

const patchNotes = [
  {
    date: "2025-04-01",
    title: "Patch 0.1.1",
    changes: [
      "Добавлены модули маскировки",
      "Исправлены баги с системой наведения",
      "Новая анимация гиперпрыжка"
    ],
  },
  {
    date: "2025-03-25",
    title: "Patch 0.1.0",
    changes: [
      "Первая сборка игры",
      "Добавлены лазеры и щиты",
      "Начальный баланс боевых систем"
    ],
  },
];

function App() {
  return (
    <div className="bg-black text-white font-sciFi min-h-screen px-6 py-8 space-y-16">
      <header className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-purple-400">Gaze of Void</h1>
        <p className="text-lg text-gray-300">Погляди в Бездну — и она взглянет в ответ</p>
      </header>

      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl text-cyan-400 mb-4">О игре</h2>
        <p className="text-gray-400">
          Gaze of Void — это мультиплеерная sci-fi игра с динамическими боями, физикой движения и модульными кораблями. 
          Исследуй космос, строй флот, сражайся в глубинах бездны!
        </p>
      </section>

      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl text-cyan-400 text-center mb-8">Патчноуты</h2>
        <div className="space-y-6">
          {patchNotes.map((note, idx) => (
            <div key={idx} className="border border-gray-700 rounded-lg p-6 bg-gray-900">
              <h3 className="text-xl text-purple-300">{note.title} <span className="text-gray-500 text-sm">({note.date})</span></h3>
              <ul className="list-disc list-inside mt-2 text-gray-300">
                {note.changes.map((change, i) => (
                  <li key={i}>{change}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-gray-600 mt-20">
        © 2025 Gaze of Void | Контакты: void@gaze.dev
      </footer>
    </div>
  );
}

export default App;