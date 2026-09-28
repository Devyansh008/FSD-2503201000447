function Signup({ onSignup, onNavigate, message }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const password = formData.get('password')

    if (password !== formData.get('confirmPassword')) {
      event.currentTarget.elements.confirmPassword.setCustomValidity('Passwords do not match.')
      event.currentTarget.reportValidity()
      return
    }

    event.currentTarget.elements.confirmPassword.setCustomValidity('')
    onSignup({
      name: formData.get('name').trim(),
      username: formData.get('username').trim(),
      about: formData.get('about').trim(),
      email: formData.get('email').trim(),
      mobile: formData.get('mobile').trim(),
      password,
      joinedAt: new Date().toISOString(),
    })
  }

  return (
    <main className="auth-layout signup-layout">
      <section className="auth-story">
        <a className="brand" href="/login" onClick={(event) => { event.preventDefault(); onNavigate('/login') }}>
          <span className="brand-mark">A</span> Atlas
        </a>
        <div className="story-copy">
          <p className="eyebrow">A fresh start</p>
          <h1>Build a space that feels like yours.</h1>
          <p className="story-description">Set up your profile and bring your next chapter into focus.</p>
        </div>
        <div className="story-note"><span className="note-dot" /> Start with the details that make you, you.</div>
        <div className="story-shape" aria-hidden="true"><span>01</span><span>02</span><span>03</span></div>
      </section>

      <section className="auth-panel signup-panel">
        <div className="auth-form-wrap">
          <p className="eyebrow">Create your profile</p>
          <h2>Join Atlas</h2>
          <p className="form-intro">A few details and you are on your way.</p>
          {message && <p className="form-message" role="status">{message}</p>}
          <form className="auth-form signup-form" onSubmit={handleSubmit}>
            <div className="field-pair">
              <div><label htmlFor="name">Full name</label><input id="name" name="name" autoComplete="name" placeholder="Your name" required /></div>
              <div><label htmlFor="username">Username</label><input id="username" name="username" autoComplete="username" placeholder="Choose a username" minLength="3" required /></div>
            </div>
            <label htmlFor="about">About you</label>
            <textarea id="about" name="about" placeholder="A few words about yourself" rows="3" maxLength="240" required />
            <div className="field-pair">
              <div><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></div>
              <div><label htmlFor="mobile">Mobile number</label><input id="mobile" name="mobile" type="tel" autoComplete="tel" placeholder="Your phone number" required /></div>
            </div>
            <div className="field-pair">
              <div><label htmlFor="password">Password</label><input id="password" name="password" type="password" autoComplete="new-password" minLength="6" placeholder="At least 6 characters" required /></div>
              <div><label htmlFor="confirmPassword">Confirm password</label><input id="confirmPassword" name="confirmPassword" type="password" autoComplete="new-password" minLength="6" placeholder="Repeat your password" required /></div>
            </div>
            <button className="primary-button" type="submit">Create account <span aria-hidden="true">→</span></button>
          </form>
          <p className="auth-switch">Already registered? <button type="button" onClick={() => onNavigate('/login')}>Log in</button></p>
          <p className="auth-footnote">Your information stays in this browser for this demo.</p>
        </div>
      </section>
    </main>
  )
}

export default Signup