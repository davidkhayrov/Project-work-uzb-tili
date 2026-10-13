import { useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  Check,
  CirclePlay,
  Clock3,
  Library,
  Lightbulb,
  Menu,
  Sparkles,
  Trophy,
} from 'lucide-react';

const answerText = `Rasmga diqqat bilan qarasak, bolaning oldida ikki xil tanlov turganini ko‘rishimiz mumkin. Chap tomonda futbol maydoni, o‘ng tomonda esa kutubxona tasvirlangan. Futbol maydonida bolalar birgalikda futbol o‘ynashyapti. Kutubxonaga esa maktab o‘quvchilari kitob o‘qish uchun kirib bormoqda.

Agar bola futbol maydonini tanlasa, u do‘stlari bilan vaqtini quvnoq o‘tkazadi. Sport bilan shug‘ullanish uning sog‘lig‘ini mustahkamlaydi, chaqqon va faol bo‘lishiga yordam beradi. Bundan tashqari, futbol jamoada ishlashni, bir-birini qo‘llab-quvvatlashni va g‘alaba uchun harakat qilishni o‘rgatadi. Ammo futbol o‘ynash uchun ob-havo yaxshi bo‘lishi kerak va bu mashg‘ulot faqat ma’lum vaqt davom etadi.

Agar bola kutubxonani tanlasa, u kitob o‘qib, o‘z bilimini oshirishi mumkin. Kitob insonning dunyoqarashini kengaytiradi, so‘z boyligini ko‘paytiradi va mustaqil fikrlashga o‘rgatadi. Kutubxonada bola yangi ma’lumotlar topadi, darslariga yaxshiroq tayyorlanadi va bo‘sh vaqtini foydali o‘tkazadi.

Men bolaning o‘rnida bo‘lganimda, kutubxonani tanlagan bo‘lardim. Chunki bilimli inson kelajakda o‘z maqsadlariga osonroq erishadi. Albatta, sport bilan shug‘ullanish ham juda muhim. Shuning uchun men avval kutubxonada kitob o‘qib, keyin futbol maydonida do‘stlarim bilan sport bilan shug‘ullangan bo‘lardim. Menimcha, bilim va sog‘lom turmush tarzi bir-birini to‘ldiradi.`;

function App() {
  const [videoAvailable, setVideoAvailable] = useState(true);
  const [copied, setCopied] = useState(false);

  const copyAnswer = async () => {
    await navigator.clipboard.writeText(answerText);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main className="site-shell">
      <nav className="topbar page-width">
        <a className="brand" href="#top" aria-label="Nutq javobi bosh sahifasi">
          <span className="brand-mark"><BookOpen size={20} strokeWidth={2.5} /></span>
          <span>Nutq <strong>javobi</strong></span>
        </a>
        <div className="topbar-links">
          <a href="#javob">Tayyor javob</a>
          <a href="#video">Video</a>
          <a className="nav-button" href="#javob">Boshlash <ArrowRight size={16} /></a>
        </div>
        <button className="menu-button" aria-label="Menyuni ochish"><Menu size={22} /></button>
      </nav>

      <section id="top" className="hero page-width">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={15} /> 8-sinf · 2-BSB · Og‘zaki nutq</div>
          <h1>Har bir tanlov<br /><em>o‘z hikoyasini</em> yaratadi.</h1>
          <p className="hero-description">Rasm asosida tayyorlangan, ravon va ishonchli nutq. Videongizni papkaga joylang va javobingizni tomosha qiling.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#video">Videoni ko‘rish <ArrowRight size={17} /></a>
            <a className="text-button" href="#javob">Javobni o‘qish <span>↓</span></a>
          </div>
          <div className="hero-note"><span className="note-dot" /> Taxminiy davomiylik <strong>3 daqiqa</strong></div>
        </div>
        <div className="hero-art" aria-label="Futbol maydoni va kutubxona tanlovi">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="choice-card choice-library">
            <div className="choice-icon"><Library size={27} /></div>
            <span>Bilim</span>
            <strong>Kutubxona</strong>
            <div className="choice-line"><span /></div>
          </div>
          <div className="choice-card choice-sport">
            <div className="choice-icon"><Trophy size={27} /></div>
            <span>Harakat</span>
            <strong>Futbol maydoni</strong>
            <div className="choice-line"><span /></div>
          </div>
          <div className="hero-spark spark-a"><Sparkles size={18} /></div>
          <div className="hero-spark spark-b"><Sparkles size={12} /></div>
          <div className="center-arrow"><ArrowRight size={23} /></div>
        </div>
      </section>

      <section className="intro-strip page-width">
        <div className="strip-label">Topshiriq</div>
        <p>Rasmda tasvirlangan bolaning oldidagi ikki imkoniyat haqida gapiring, har bir tanlovning mumkin bo‘lgan natijasini ayting va o‘z tanlovingizni asoslang.</p>
        <div className="strip-time"><Clock3 size={16} /> 03:00</div>
      </section>

      <section id="video" className="video-section page-width">
        <div className="section-heading">
          <div><span className="section-kicker">01 / Sizning chiqishingiz</span><h2>Javobingizni<br /><em>videoda ko‘ring.</em></h2></div>
          <p>Siz joylagan video shu yerda chiqadi. Uni faqat ko‘rish va tinglash mumkin — tashrif buyuruvchi boshqa video qo‘sha olmaydi.</p>
        </div>
        <div className="video-stage has-video">
          {videoAvailable ? (
            
<video
  className="video-player"
  controls
  playsInline
  preload="metadata"
  controlsList="nodownload"
  disablePictureInPicture
  onError={() => setVideoAvailable(false)}
>
  <source src="/videos/answer.mp4" type="video/mp4" />
  Ваш браузер не поддерживает воспроизведение этого видео.
</video>

          ) : (
            <div className="video-empty">
              <div className="play-circle"><CirclePlay size={38} strokeWidth={1.5} /></div>
              <h3>Video hali joylanmagan</h3>
              <p>public/videos papkasiga answer.mp4 faylini qo‘ying</p>
            </div>
          )}
          <div className="video-caption"><span><span className="live-dot" /> Mening nutqim</span><span>2–3 daqiqa</span></div>
        </div>
        <div className="video-folder-note"><Check size={16} /> Video papkadan avtomatik yuklanadi: <strong>public/videos/answer.mp4</strong></div>
      </section>

      <section id="javob" className="answer-section page-width">
        <div className="answer-sidebar">
          <span className="section-kicker">02 / Tayyor matn</span>
          <h2>Ravon<br /><em>gapiring.</em></h2>
          <p>Shoshilmasdan, aniq talaffuz bilan o‘qing. Muhim so‘zlarga urg‘u bering va fikringizni o‘z so‘zlaringiz bilan yetkazing.</p>
          <div className="tip-card"><Lightbulb size={20} /><div><strong>Maslahat</strong><span>Avval bir marta ovoz chiqarib mashq qiling.</span></div></div>
        </div>
        <article className="answer-card">
          <div className="answer-card-top"><div className="answer-tag"><span /> Nutq uchun namuna</div><button className="copy-button" onClick={copyAnswer}>{copied ? <><Check size={15} /> Nusxalandi</> : <>Matnni nusxalash</>}</button></div>
          <div className="answer-content">
            <p>Rasmga diqqat bilan qarasak, bolaning oldida ikki xil tanlov turganini ko‘rishimiz mumkin. Chap tomonda futbol maydoni, o‘ng tomonda esa kutubxona tasvirlangan. Futbol maydonida bolalar birgalikda futbol o‘ynashyapti. Kutubxonaga esa maktab o‘quvchilari kitob o‘qish uchun kirib bormoqda.</p>
            <p>Agar bola futbol maydonini tanlasa, u do‘stlari bilan vaqtini quvnoq o‘tkazadi. Sport bilan shug‘ullanish uning sog‘lig‘ini mustahkamlaydi, chaqqon va faol bo‘lishiga yordam beradi. Bundan tashqari, futbol jamoada ishlashni, bir-birini qo‘llab-quvvatlashni va g‘alaba uchun harakat qilishni o‘rgatadi. Ammo futbol o‘ynash uchun ob-havo yaxshi bo‘lishi kerak va bu mashg‘ulot faqat ma’lum vaqt davom etadi.</p>
            <p>Agar bola kutubxonani tanlasa, u kitob o‘qib, o‘z bilimini oshirishi mumkin. Kitob insonning dunyoqarashini kengaytiradi, so‘z boyligini ko‘paytiradi va mustaqil fikrlashga o‘rgatadi. Kutubxonada bola yangi ma’lumotlar topadi, darslariga yaxshiroq tayyorlanadi va bo‘sh vaqtini foydali o‘tkazadi.</p>
            <p>Men bolaning o‘rnida bo‘lganimda, kutubxonani tanlagan bo‘lardim. Chunki bilimli inson kelajakda o‘z maqsadlariga osonroq erishadi. Albatta, sport bilan shug‘ullanish ham juda muhim. Shuning uchun men avval kutubxonada kitob o‘qib, keyin futbol maydonida do‘stlarim bilan sport bilan shug‘ullangan bo‘lardim. Menimcha, bilim va sog‘lom turmush tarzi bir-birini to‘ldiradi.</p>
          </div>
          <div className="answer-card-bottom"><span><Clock3 size={15} /> Taxminan 3 daqiqalik nutq</span><span className="progress-dots"><i /><i /><i /></span></div>
        </article>
      </section>

      <footer className="footer page-width"><div className="brand"><span className="brand-mark"><BookOpen size={17} strokeWidth={2.5} /></span><span>Nutq <strong>javobi</strong></span></div><span>O‘ylang. Tanlang. Gapiring.</span><span>8-sinf · O‘zbek tili</span></footer>
    </main>
  );
}

export default App;
