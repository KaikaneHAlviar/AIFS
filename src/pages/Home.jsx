import EventCard from "../components/EventCard.jsx";
import { events } from "../data/events.js";

export default function Home() {
  return (
    <main id="top">
      {/* HERO / HOME */}
      <section className="hero" id="home">
        <div className="hero__bg" aria-hidden="true"></div>

        <div className="hero__content">
          <div className="hero__copy">
            <p className="eyebrow">EST. 2026</p>
            <h1 className="hero__title">
              AI For Students <span className="accent">@ UW</span>
            </h1>

            <p className="hero__subtitle">
              A workshop-style community helping students learn practical AI skills through
              hands-on sessions, mentorship, and real projects.
            </p>

            <a
              className="btn btn--primary"
              href="https://forms.gle/ab3zQtZ24h9JKmpHA"
              target="_blank"
              rel="noreferrer"
            >
              Our Interest Form <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="section section--gradient" id="events">
        <div className="container">
          <h2 className="section__title">Upcoming Events</h2>

          <div className="cards">
            {events.map((e) => (
              <EventCard key={`${e.title}-${e.date}`} event={e} />
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section" id="gallery">
        <div className="container">
          <h2 className="section__title">Gallery</h2>

          <div className="gallery">
            <img src="https://picsum.photos/seed/aifs-1/900/600" alt="Club event photo 1" loading="lazy" />
            <img src="https://picsum.photos/seed/aifs-2/900/600" alt="Club event photo 2" loading="lazy" />
            <img src="https://picsum.photos/seed/aifs-3/900/600" alt="Club event photo 3" loading="lazy" />
            <img src="https://picsum.photos/seed/aifs-4/900/600" alt="Club event photo 4" loading="lazy" />
            <img src="https://picsum.photos/seed/aifs-5/900/600" alt="Club event photo 5" loading="lazy" />
            <img src="https://picsum.photos/seed/aifs-6/900/600" alt="Club event photo 6" loading="lazy" />
            <img src="https://picsum.photos/seed/aifs-7/900/600" alt="Club event photo 7" loading="lazy" />
          </div>
        </div>
      </section>
    </main>
  );
}
