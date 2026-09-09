import { useState } from 'react'
import logoKantor from './assets/logo-kantor.jpg'
import fotoUser from './assets/foto-user.jpg'
import fotoKantor1 from './assets/foto-kantor-1.jpg'
import fotoKantor2 from './assets/foto-kantor-2.jpeg'
import fotoKantor3 from './assets/foto-kantor-3.jpg'
import fotoKantor4 from './assets/foto-kantor-4.jpg'
import './App.css'


function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="website">

      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="nav-container">
          <a href="#beranda" className="brand">
            <img
              src={logoKantor}
              alt="Logo Deddy Suwardy Surachman S.H., M.H. & Partners"
              className="brand-logo"
           />

           <span className="brand-text">
             <strong>Deddy Suwardy Surachman</strong>
           <small>S.H., M.H. & Partners</small>
         </span>
       </a>

          <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            <a href="#beranda">Beranda</a>
            <a href="#tentang">Tentang Kami</a>
            <a href="#advokat">Advokat</a>
            <a href="#layanan">Layanan</a>
            <a href="#artikel">Artikel</a>
            <a href="#galeri">Galeri</a>
            <a href="#lokasi">Lokasi</a>
            <a href="#kontak">Kontak</a>
          </nav>
          <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Buka menu navigasi"
        >
          ☰
        </button>

          <a
            href="https://wa.me/6285852840892"
            target="_blank"
            rel="noreferrer"
            className="nav-button"
          >
            Konsultasi
          </a>
        </div>
      </header>


      <main>

        {/* ================= HERO ================= */}
        <section id="beranda" className="hero-section">
          <div className="hero-overlay"></div>

          <div className="container hero-content">
            <div className="hero-badge">
              KANTOR HUKUM & ADVOKAT DI GARUT
            </div>

            <h1>
              Deddy Suwardy Surachman
              <span>S.H., M.H. & Partners</span>
            </h1>

            <p className="hero-description">
              Pendampingan dan layanan hukum secara profesional di Garut
              dengan pendekatan yang mengutamakan kepentingan
              serta kebutuhan klien.
           </p>

            <div className="hero-actions">
              <a
                href="https://wa.me/6285852840892?text=Halo%20Pak%20Deddy%2C%20saya%20ingin%20berkonsultasi%20mengenai%20permasalahan%20hukum.%20Mohon%20informasi%20dan%20arahannya.%20Terima%20kasih."
                target="_blank"
                rel="noreferrer"
                className="button button-gold"
              >
                Konsultasi via WhatsApp
              </a>

              <a href="#layanan" className="button button-outline">
                Lihat Layanan
              </a>
            </div>

            <div className="hero-location">
              <span>●</span> Garut, Jawa Barat
            </div>
          </div>
        </section>


        {/* ================= INTRO ================= */}
        <section className="intro-section">
          <div className="container intro-grid">

            <div className="intro-title">
              <span className="section-label">PROFESIONAL & TERPERCAYA</span>
              <h2>
                Pendampingan Hukum
                <span> untuk Kebutuhan Anda</span>
              </h2>
            </div>

            <div className="intro-text">
              <p>
                Deddy Suwardy Surachman, S.H., M.H. & Partners
                hadir sebagai kantor hukum yang menyediakan informasi
                dan layanan hukum bagi masyarakat serta pihak yang
                membutuhkan pendampingan hukum.
              </p>

              <a href="#tentang" className="text-link">
                Mengenal Kantor Kami →
              </a>
            </div>

          </div>
        </section>


        {/* ================= TENTANG ================= */}
        <section id="tentang" className="section about-section">
          <div className="container">

            <div className="section-heading">
              <span className="section-label">TENTANG KAMI</span>
              <h2>Profesional dalam Setiap Pendampingan</h2>
              <p>
                Mengenal lebih dekat kantor hukum dan layanan hukum yang
                kami hadirkan untuk kebutuhan masyarakat di Garut dan sekitarnya.
             </p>
            </div>

            <div className="about-grid">

              <div className="about-card">
                <div className="card-number">01</div>
                <h3>Profesional</h3>
                <p>
                  Mengutamakan sikap profesional dalam memberikan
                  informasi dan pendampingan hukum.
                </p>
              </div>

              <div className="about-card featured">
                <div className="card-number">02</div>
                <h3>Berintegritas</h3>
                <p>
                  Menempatkan integritas dan tanggung jawab sebagai
                  bagian penting dalam pelayanan hukum.
                </p>
              </div>

              <div className="about-card">
                <div className="card-number">03</div>
                <h3>Berorientasi pada Klien</h3>
                <p>
                  Memahami kebutuhan setiap klien dan memberikan
                  penjelasan hukum secara jelas dan terarah.
                </p>
              </div>

            </div>
          </div>
        </section>


        {/* ================= ADVOKAT ================= */}
        <section id="advokat" className="section lawyer-section">
          <div className="container">

            <div className="section-heading left-heading">
              <span className="section-label">PROFIL ADVOKAT</span>
              <h2>Deddy Suwardy Surachman</h2>
              <p>
                S.H., M.H. — Advokat
              </p>
            </div>

            <div className="lawyer-content">

              <div className="lawyer-photo">
                <img
                  src={fotoUser}
                  alt="Deddy Suwardy Surachman, S.H., M.H."
                  className="lawyer-image"
                />
              </div>

              <div className="lawyer-info">
                <span className="gold-line"></span>

                <h3>
                  Deddy Suwardy Surachman,
                  <br />
                  S.H., M.H.
                </h3>

                <p className="lawyer-position">
                  Selaku Advokat
                </p>

                <p>
                   Deddy Suwardy Surachman, S.H., M.H. selaku Advokat
                   memberikan layanan dan pendampingan hukum bagi
                   masyarakat sesuai dengan kebutuhan dan permasalahan
                   hukum yang dihadapi klien.
              </p>

                <div className="lawyer-details">
                  <div>
                    <strong>Alamat Kantor</strong>
                    <span>
                      Jln Panday No. 1, Desa Cimanganten,
                      Kec. Tarogong Kaler, Kab. Garut
                    </span>
                  </div>

                  <div>
                    <strong>Email</strong>
                    <span>
                      deddy.suwardy@yahoo.com
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ================= LAYANAN ================= */}
        <section id="layanan" className="section services-section">
          <div className="container">

            <div className="section-heading">
              <span className="section-label">LAYANAN HUKUM</span>
              <h2>Bidang Layanan Hukum</h2>
              <p>
                Informasi layanan hukum yang tersedia di kantor
                Deddy Suwardy Surachman, S.H., M.H. & Partners.
              </p>
            </div>

            <div className="services-grid">

              <article className="service-card">
                <span className="service-number">01</span>
                <div className="service-icon">§</div>
                <h3>Hukum Perdata</h3>
                <p>
                  Layanan dan pendampingan hukum perdata untuk membantu
                  menangani berbagai perkara serta permasalahan hukum
                  bagi masyarakat di Garut dan sekitarnya.
               </p>
                <a href="#kontak">Konsultasikan →</a>
              </article>

              <article className="service-card">
                <span className="service-number">02</span>
                <div className="service-icon">⚖</div>
                <h3>Hukum Pidana</h3>
                <p>
                  Pendampingan dan konsultasi hukum pidana untuk membantu
                  menangani berbagai permasalahan serta perkara hukum
                  bagi masyarakat di Garut dan sekitarnya.
              </p>
                <a href="#kontak">Konsultasikan →</a>
              </article>

              <article className="service-card">
                <span className="service-number">03</span>
                <div className="service-icon">◇</div>
                <h3>Hukum Keluarga</h3>
                <p>
                  Konsultasi dan pendampingan hukum keluarga untuk membantu
                  menangani berbagai persoalan hukum keluarga bagi
                  masyarakat di Garut dan sekitarnya.
               </p>
                <a href="#kontak">Konsultasikan →</a>
              </article>

              <article className="service-card">
                <span className="service-number">04</span>
                <div className="service-icon">⌂</div>
                <h3>Pertanahan</h3>
                <p>
                  Konsultasi dan pendampingan hukum pertanahan untuk membantu
                  menangani berbagai persoalan tanah dan sengketa pertanahan
                  di Garut dan sekitarnya.
                </p>
                <a href="#kontak">Konsultasikan →</a>
              </article>

            </div>
          </div>
        </section>


        {/* ================= CTA ================= */}
        <section className="cta-section">
          <div className="container cta-content">
            <div>
              <span className="section-label">KONSULTASI HUKUM</span>
              <h2>Memiliki persoalan hukum?</h2>
              <p>
                Konsultasikan kebutuhan hukum Anda bersama advokat
                di Garut melalui WhatsApp untuk mendapatkan informasi
                dan pendampingan sesuai kebutuhan.
             </p>
            </div>

            <a
              href="https://wa.me/6285852840892"
              target="_blank"
              rel="noreferrer"
              className="button button-gold"
            >
              Hubungi Kami
            </a>
          </div>
        </section>


        {/* ================= ARTIKEL ================= */}
        <section id="artikel" className="section articles-section">
          <div className="container">

            <div className="section-heading">
              <span className="section-label">BERITA & ARTIKEL</span>
              <h2>Informasi Hukum</h2>
              <p>
                Ruang untuk berbagi informasi, edukasi, dan artikel hukum
                yang bermanfaat bagi masyarakat di Garut dan sekitarnya.
             </p>
            </div>

            <div className="articles-grid">

              <article className="article-card">
                <div className="article-image">
                  ARTIKEL HUKUM
                </div>
                <div className="article-body">
                  <span>EDUKASI HUKUM</span>
                  <h3>
                    Mengenal Hukum Perdata dan Permasalahan yang Dapat Dikonsultasikan
                 </h3>
                  <p>
                    Informasi umum mengenai hukum perdata dan berbagai
                    permasalahan yang dapat dikonsultasikan kepada advokat.
                  </p>
                  <a href="#artikel">Baca Selengkapnya →</a>
                </div>
              </article>

              <article className="article-card">
                <div className="article-image">
                  HUKUM PIDANA
                </div>
                <div className="article-body">
                  <span>EDUKASI HUKUM</span>
                  <h3>Memahami Hukum Pidana dan Pentingnya Pendampingan Hukum</h3>
                   <p>
                    Informasi mengenai hukum pidana dan pentingnya
                    pendampingan hukum bagi masyarakat.
                  </p>
                  <a href="#artikel">Baca Selengkapnya →</a>
                </div>
              </article>

              <article className="article-card">
                 <div className="article-image">
                  PERTANAHAN
                 </div>
                <div className="article-body">
                  <span>INFORMASI HUKUM</span>
                  <h3>Hal yang Perlu Diperhatikan dalam Permasalahan Pertanahan</h3>
                  <p>
                    Informasi umum mengenai permasalahan pertanahan
                    dan hal-hal yang perlu diperhatikan dalam proses
                    penanganannya.
                 </p>
                  <a href="#artikel">Baca Selengkapnya →</a>
                </div>
              </article>

            </div>
          </div>
        </section>


        {/* ================= GALERI ================= */}
        <section id="galeri" className="section gallery-section">
          <div className="container">

            <div className="section-heading">
              <span className="section-label">GALERI</span>
              <h2>Dokumentasi Kantor</h2>
              <p>
                Dokumentasi kantor dan kegiatan akan ditampilkan
                pada bagian ini.
              </p>
            </div>

            <div className="gallery-grid">
              <div className="gallery-item large">
                <img
                  src={fotoKantor1}
                  alt="Tampak luar Kantor Deddy Suwardy Surachman"
                />
              </div>

              <div className="gallery-item">
                <img
                  src={fotoKantor2}
                  alt="Dokumentasi Kantor Deddy Suwardy Surachman"
                />
              </div>

              <div className="gallery-item">
                <img
                 src={fotoKantor3}
                 alt="Kegiatan Kantor Deddy Suwardy Surachman"
               />
             </div>

              <div className="gallery-item">
                <img
                  src="/papan-kantor-tegak.jpg"
                  alt="Papan nama Kantor Hukum Deddy Suwardy Surachman di Garut"
                />
              </div>
            </div>

          </div>
        </section>


        {/* ================= GOOGLE MAPS ================= */}
<section id="lokasi" className="section maps-section">
  <div className="container">

    <div className="section-heading">
      <span className="section-label">LOKASI KANTOR</span>
      <h2>Temukan Kantor Kami</h2>
      <p>
        Kunjungi kantor Deddy Suwardy Surachman, S.H., M.H. & Partners
        di Garut untuk mendapatkan informasi dan konsultasi hukum.
      </p>
    </div>

    <div className="maps-wrapper">
      <iframe
        src="https://www.google.com/maps?q=Jalan+Panday+No.1,+Cimanganten,+Tarogong+Kaler,+Garut&output=embed"
        width="100%"
        height="420"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        title="Lokasi Kantor Deddy Suwardy Surachman"
      ></iframe>
    </div>

    <div className="maps-action">
      <a
        href="https://maps.app.goo.gl/1z4qgq7rcUC36YkTA"
        target="_blank"
        rel="noreferrer"
        className="button button-gold"
      >
        Buka di Google Maps
      </a>
    </div>

  </div>
</section>
        
        {/* ================= KONTAK ================= */}
        <section id="kontak" className="section contact-section">
          <div className="container">

            <div className="contact-grid">

              <div className="contact-intro">
                <span className="section-label">HUBUNGI KAMI</span>
                <h2>Butuh Konsultasi Hukum?</h2>
                <p>
                  Hubungi kantor hukum kami di Garut untuk mendapatkan
                  informasi mengenai konsultasi, pendampingan, dan
                  layanan hukum sesuai kebutuhan Anda.
               </p>

                <a
                  href="https://wa.me/6285852840892?text=Halo%20Pak%20Deddy%2C%20saya%20ingin%20berkonsultasi%20mengenai%20permasalahan%20hukum.%20Mohon%20informasi%20dan%20arahannya.%20Terima%20kasih."
                  target="_blank"
                  rel="noreferrer"
                  className="button button-gold"
                >
                  WhatsApp Kami
                </a>
              </div>

              <div className="contact-info">

                <div className="contact-item">
                  <span className="contact-icon">⌂</span>
                  <div>
                    <strong>Alamat</strong>
                    <p>
                      Jln Panday No. 1, Desa Cimanganten,
                      Kec. Tarogong Kaler, Kab. Garut
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-icon">✉</span>
                  <div>
                    <strong>Email</strong>
                    <p>
                      deddy.suwardy@yahoo.com
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-icon">☎</span>
                  <div>
                    <strong>WhatsApp</strong>
                    <p>
                      +62 858-5284-0892
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

      </main>


      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="container footer-grid">

          <div className="footer-brand">
            <img
              src={logoKantor}
              alt="Logo Deddy Suwardy Surachman S.H., M.H. & Partners"
              className="footer-logo"
           />
            <div>
              <strong>Deddy Suwardy Surachman</strong>
              <span>S.H., M.H. & Partners</span>
            </div>
          </div>

          <div className="footer-links">
            <a href="#beranda">Beranda</a>
            <a href="#tentang">Tentang Kami</a>
            <a href="#layanan">Layanan</a>
            <a href="#artikel">Artikel</a>
            <a href="#kontak">Kontak</a>
          </div>

          <div className="footer-bottom">
            © 2026 Deddy Suwardy Surachman, S.H., M.H. & Partners
          </div>

        </div>
      </footer>

    </div>
  )
}

export default App