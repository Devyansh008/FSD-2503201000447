function Login({ onLogin, onNavigate, message }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    onLogin(formData.get('identifier'), formData.get('password'))
  }

  return (
    <main className="auth-layout">
      <section className="auth-story">
        <a className="brand" href="/login" onClick={(event) => { event.preventDefault(); onNavigate('/login') }}>
          <span className="brand-mark">A</span> Atlas
        </a>
        <div className="story-copy">
          <p className="eyebrow">Your space, in one place</p>
          <h1>Make room for what matters.</h1>
          <p className="story-description">A calmer way to keep your profile, plans, and progress together.</p>
        </div>
        <div className="story-note"><span className="note-dot" /> A little more organized, every day.</div>
        <div className="story-shape" aria-hidden="true"><span>01</span><span>02</span><span>03</span></div>
      </section>

      <section className="auth-panel">
        <div className="auth-form-wrap">
          <p className="eyebrow">Welcome back</p>
          <h2>Log in to Atlas</h2>
          <p className="form-intro">Enter your account details to continue.</p>
          {message && <p className="form-message" role="status">{message}</p>}
          <form className="auth-form" onSubmit={handleSubmit}>
            <label htmlFor="identifier">Username or email</label>
            <input id="identifier" name="identifier" autoComplete="username" placeholder="you@example.com" required />
            <div className="label-row"><label htmlFor="password">Password</label><span>Keep it private</span></div>
            <input id="password" name="password" type="password" autoComplete="current-password" placeholder="Enter your password" required />
            <button className="primary-button" type="submit">Log in <span aria-hidden="true">→</span></button>
          </form>
          <p className="auth-switch">New to Atlas? <button type="button" onClick={() => onNavigate('/signup')}>Create an account</button></p>
          <p className="auth-footnote">Your information stays in this browser for this demo.</p>
        </div>
      </section>
    </main>
  )
}

export default Login