import './App.css'
import profileImage from './assets/profile.png'

function App() {
  return (
    <>
      {/* 6.2 Tab ile Gezinme: Ana içeriğe atla */}
      <a href="#main-content" className="skip-link">Ana içeriğe atla</a>

      {/* 3 Semantik HTML5 Etiketleri: header, nav */}
      <header>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      {/* 3 Semantik HTML5 Etiketleri: main */}
      <main id="main-content">
        {/* 5.1 Heading Hiyerarşisi: h1 tek olmalı */}
        <h1>Zehra Nur Kutan - Kişisel Portfolyo</h1>

        {/* 3 Semantik HTML5 Etiketleri: section */}
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          {/* 5.2 Alt Metin ve figure/figcaption */}
          <figure>
            <img
              src={profileImage}
              alt="Zehra Nur Kutan'ın vesikalık fotoğrafı"
              className="profile-img"
            />
            <figcaption>Zehra Nur Kutan - Web Geliştirici Adayı</figcaption>
          </figure>
          <p><strong>Öğrenci No:</strong> [Öğrenci Numarası]</p>
          <p>Merhaba! Bu portfolyo sayfası Web Tasarımı ve Programlama dersi LAB-2 kapsamında, Semantik HTML5 ve Erişilebilirlik (a11y) prensiplerine sadık kalınarak sıfırdan oluşturulmuştur.</p>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          {/* 3 Semantik HTML5 Etiketleri: article */}
          <article>
            <h3>LAB-1: Geliştirme Ortamı ve Git</h3>
            <p>Vite, React ve Git akışının temellerinin atıldığı ilk laboratuvar çalışması.</p>
          </article>
          <article>
            <h3>LAB-2: Semantik ve Erişilebilir Web</h3>
            <p>Anlamlı HTML5 etiketleri, ARIA öznitelikleri ve klavye navigasyonu üzerine uygulama.</p>
          </article>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          {/* 7 & 8 Form Doğrulama ve Label İlişkisi */}
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select id="subject" name="subject" required aria-describedby="subject-error">
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      {/* 3 Semantik HTML5 Etiketleri: footer */}
      <footer>
        <p>&copy; 2025 Zehra Nur Kutan. Tüm hakları saklıdır.</p>
      </footer>
    </>
  )
}

export default App
