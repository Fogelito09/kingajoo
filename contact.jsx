/* Kinkajoo — Contact page */

const { useState } = React;

/* ---------- contact ---------- */

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:Support@rummikub-apps.com?subject=Message from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message + '\n\n' + form.email)}`;
    setSent(true);
  };

  return (
    <section className="about-contact" id="contact">
      <div className="about-contact-inner">
        <div className="about-contact-copy">
          <div className="section-eyebrow" style={{ marginBottom: '20px' }}>
            <span>Contact</span>
          </div>
          <h2 className="section-title">Get in<br /><em>touch</em>.</h2>
          <p className="about-body" style={{ marginTop: '20px' }}>
            Whether you're looking for answers, would like to report a problem, or just want to let us know how we did — we'll help you as quickly as possible.
          </p>
          <div className="about-contact-links">
            <a href="mailto:Support@rummikub-apps.com" className="about-contact-email">
              Support@rummikub-apps.com
            </a>
          </div>
        </div>

        <form className="about-form js-reveal" onSubmit={submit}>
          {sent ? (
            <div className="form-sent">
              <span className="form-sent-icon">✓</span>
              <p>Opening your mail client…</p>
            </div>
          ) : (
            <>
              <div className="form-row">
                <label className="form-label">Name</label>
                <input className="form-input" name="name" type="text" placeholder="Your name" value={form.name} onChange={handle} required />
              </div>
              <div className="form-row">
                <label className="form-label">Email</label>
                <input className="form-input" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handle} required />
              </div>
              <div className="form-row">
                <label className="form-label">Message</label>
                <textarea className="form-input form-textarea" name="message" placeholder="What's on your mind?" value={form.message} onChange={handle} required rows={5} />
              </div>
              <button type="submit" className="btn-solid lg form-submit">Send message <span className="arr">→</span></button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

/* ---------- app ---------- */

function App() {
  return (
    <>
      <Nav activePage="contact" />
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
