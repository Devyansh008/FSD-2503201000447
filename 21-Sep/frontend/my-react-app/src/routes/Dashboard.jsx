function Dashboard({ user, onLogout }) {
  const initials = user.name.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase()
  const joinedDate = user.joinedAt
    ? new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(new Date(user.joinedAt))
    : 'Today'

  return (
    <main className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <a className="brand" href="/dashboard"><span className="brand-mark">A</span> Atlas</a>
        <p className="sidebar-label">Workspace</p>
        <a className="sidebar-link active" href="/dashboard"><span aria-hidden="true">⌂</span> Overview</a>
        <a className="sidebar-link" href="#profile"><span aria-hidden="true">◎</span> My profile</a>
        <div className="sidebar-bottom">
          <div className="sidebar-user"><span className="avatar small-avatar">{initials}</span><span><strong>{user.name}</strong><small>@{user.username}</small></span></div>
          <button className="logout-button" type="button" onClick={onLogout}>Log out <span aria-hidden="true">↗</span></button>
        </div>
      </aside>

      <section className="dashboard-main">
        <header className="dashboard-topbar"><span>Workspace / Overview</span><span className="today-label">{new Intl.DateTimeFormat('en', { weekday: 'long', month: 'short', day: 'numeric' }).format(new Date())}</span></header>
        <div className="dashboard-content">
          <div className="welcome-row">
            <div><p className="eyebrow">Your personal workspace</p><h1>Welcome, {user.name.split(' ')[0]}.</h1><p className="welcome-copy">Here is your space, ready for whatever comes next.</p></div>
            <span className="avatar welcome-avatar">{initials}</span>
          </div>

          <div className="dashboard-grid">
            <article className="welcome-card">
              <div className="welcome-card-top"><span className="card-kicker">YOUR ATLAS</span><span className="online-mark"><span /> Account active</span></div>
              <h2>A good place to begin.</h2>
              <p>Your profile is set up. Keep your details current and make this workspace your own.</p>
              <a href="#profile" className="text-link">View your profile <span aria-hidden="true">→</span></a>
              <div className="card-orbit" aria-hidden="true"><span>A</span></div>
            </article>
            <article className="info-card" id="profile">
              <div className="card-heading"><div><p className="eyebrow">Your details</p><h2>Profile</h2></div><span className="profile-status">Complete</span></div>
              <dl className="profile-details">
                <div><dt>Name</dt><dd>{user.name}</dd></div>
                <div><dt>Username</dt><dd>@{user.username}</dd></div>
                <div><dt>Email</dt><dd>{user.email}</dd></div>
                <div><dt>Mobile</dt><dd>{user.mobile}</dd></div>
                <div><dt>About</dt><dd>{user.about}</dd></div>
              </dl>
            </article>
            <article className="info-card account-card">
              <p className="eyebrow">Account snapshot</p>
              <div className="snapshot-line"><span>Member since</span><strong>{joinedDate}</strong></div>
              <div className="snapshot-line"><span>Workspace</span><strong>Personal</strong></div>
              <div className="snapshot-line"><span>Profile status</span><strong className="status-active"><span /> Active</strong></div>
            </article>
          </div>
          <footer className="dashboard-footer"><span>Atlas / Personal workspace</span><span>Made for your next chapter.</span></footer>
        </div>
      </section>
    </main>
  )
}

export default Dashboard