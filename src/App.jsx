import './App.css'

function App() {
  const apps = [
    {
      date: '2025-01-31',
      name: 'Portfolio Hub',
      description: 'A central hub for my 30 apps in 30 days challenge. Mobile-responsive home page with links to all my projects.',
      url: '#'
    }
    // Add more apps here as you build them
  ]

  return (
    <div className="container">
      <header className="header">
        <h1>30 Apps in 30 Days</h1>
        <p className="subtitle">My journey learning modern web development</p>
      </header>

      <main className="main">
        <div className="apps-grid">
          {apps.map((app, index) => (
            <a
              key={index}
              href={app.url}
              className="app-card"
              target={app.url !== '#' ? '_blank' : '_self'}
              rel="noopener noreferrer"
            >
              <div className="app-number">#{index + 1}</div>
              <div className="app-date">{app.date}</div>
              <h2 className="app-name">{app.name}</h2>
              <p className="app-description">{app.description}</p>
            </a>
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>Built with React + Vite | Deployed on Vercel</p>
      </footer>
    </div>
  )
}

export default App
