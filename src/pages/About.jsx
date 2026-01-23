export default function About() {
  return (
    <main>
      {/* ABOUT TOP SECTION */}
      <section className="page-hero page-hero--soft">
        <div className="container about-top">
          <div className="about-top__copy">
            <h1 className="about-top__title">
              <span className="accent italics">AI For Students</span>
            </h1>

            <div className="about-top__text">
              <p>
                The purpose of AI For Students at the University of Washington is to help
                students build practical AI skills and confidence through hands-on
                workshops, project building, and mentorship.
              </p>

              <p>
                Our mission is to provide accessible pathways into AI—covering
                foundations, applied tooling, and real-world use cases—so students can
                learn responsibly and ship meaningful work.
              </p>

              <p>
                We aim to foster a community that shares knowledge, collaborates across
                disciplines, and supports members pursuing internships, research, and
                product-building in AI.
              </p>
            </div>
          </div>

          <div className="about-top__media">
            <img
              className="about-top__img"
              src="https://picsum.photos/seed/aifs-about/1200/800"
              alt="Students collaborating"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="section section--gradient">
        <div className="container">
          <h2 className="section__title">Our Team</h2>
          <div className="section__rule"></div>

          <div className="team-grid">
            <article className="team-card">
              <div className="team-card__img skeleton"></div>
              <div className="team-card__body">
                <div className="team-card__name">Place Holder</div>
                <div className="team-card__role">President</div>
              </div>
            </article>

            <article className="team-card">
              <div className="team-card__img skeleton"></div>
              <div className="team-card__body">
                <div className="team-card__name">Place Holder</div>
                <div className="team-card__role">Secretary</div>
              </div>
            </article>

            <article className="team-card">
              <div className="team-card__img skeleton"></div>
              <div className="team-card__body">
                <div className="team-card__name">Place Holder</div>
                <div className="team-card__role">Outreach</div>
              </div>
            </article>

            <article className="team-card">
              <div className="team-card__img skeleton"></div>
              <div className="team-card__body">
                <div className="team-card__name">Place Holder</div>
                <div className="team-card__role">Events</div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
