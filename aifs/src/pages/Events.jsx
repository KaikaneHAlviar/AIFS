export default function Events() {
  return (
    <main>
      <section className="page-hero page-hero--gradient">
        <div className="container">
          <h1 className="page-title">Events</h1>

          <div className="event-list">
            <article className="event-row">
              <div className="event-row__thumb">
                <img
                  src="https://picsum.photos/seed/aifs-e1/300/300"
                  alt="Event poster 1"
                  loading="lazy"
                />
              </div>
              <div className="event-row__name">Careers in AI Panel</div>
              <div className="event-row__date">2026-01-21</div>
              <div className="event-row__time">05:30PM</div>
              <a className="event-row__cta" href="#" aria-label="Open event details">
                +
              </a>
            </article>

            <article className="event-row">
              <div className="event-row__thumb">
                <img
                  src="https://picsum.photos/seed/aifs-e2/300/300"
                  alt="Event poster 2"
                  loading="lazy"
                />
              </div>
              <div className="event-row__name">Build Night: Your First AI App</div>
              <div className="event-row__date">2026-02-27</div>
              <div className="event-row__time">05:30PM</div>
              <a className="event-row__cta" href="#" aria-label="Open event details">
                +
              </a>
            </article>

            <article className="event-row">
              <div className="event-row__thumb">
                <img
                  src="https://picsum.photos/seed/aifs-e3/300/300"
                  alt="Event poster 3"
                  loading="lazy"
                />
              </div>
              <div className="event-row__name">
                Workshop: Prompting + Evaluation
              </div>
              <div className="event-row__date">2026-03-14</div>
              <div className="event-row__time">05:30PM</div>
              <a className="event-row__cta" href="#" aria-label="Open event details">
                +
              </a>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
