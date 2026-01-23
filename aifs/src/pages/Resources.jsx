export default function Resources() {
  return (
    <main>
      <section className="page-hero page-hero--gradient">
        <div className="container">
          <h1 className="page-title">Resources</h1>
          <p className="page-subtitle">
            Here are some resources to get you started on your AI learning journey.
            This is not exhaustive—explore more!
          </p>

          {/* Resource block 1 */}
          <article className="resource-card">
            <div className="resource-card__media">
              <img
                src="https://picsum.photos/seed/aifs-r1/1000/700"
                alt="Resource image 1"
                loading="lazy"
              />
            </div>

            <div className="resource-card__content">
              <h2 className="resource-card__title">AI Foundations</h2>

              <a
                className="resource-link"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Intro to Machine Learning{" "}
                <span className="resource-link__arrow">▶</span>
              </a>

              <a
                className="resource-link"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Neural Networks (Beginner){" "}
                <span className="resource-link__arrow">▶</span>
              </a>

              <a
                className="resource-link"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Prompting + Evaluation Basics{" "}
                <span className="resource-link__arrow">▶</span>
              </a>
            </div>
          </article>

          {/* Resource block 2 (mirrored layout) */}
          <article className="resource-card resource-card--flip">
            <div className="resource-card__media">
              <img
                src="https://picsum.photos/seed/aifs-r2/1000/700"
                alt="Resource image 2"
                loading="lazy"
              />
            </div>

            <div className="resource-card__content">
              <h2 className="resource-card__title">Projects + Portfolios</h2>

              <a
                className="resource-link"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Starter Project Ideas{" "}
                <span className="resource-link__arrow">▶</span>
              </a>

              <a
                className="resource-link"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Building an AI Demo App{" "}
                <span className="resource-link__arrow">▶</span>
              </a>
            </div>
          </article>

          {/* Resource block 3 */}
          <article className="resource-card">
            <div className="resource-card__media">
              <img
                src="https://picsum.photos/seed/aifs-r3/1000/700"
                alt="Resource image 3"
                loading="lazy"
              />
            </div>

            <div className="resource-card__content">
              <h2 className="resource-card__title">Responsible AI</h2>

              <a
                className="resource-link"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Data Privacy Basics{" "}
                <span className="resource-link__arrow">▶</span>
              </a>

              <a
                className="resource-link"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Bias + Fairness Concepts{" "}
                <span className="resource-link__arrow">▶</span>
              </a>

              <a
                className="resource-link"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Safety + Evaluation Checklists{" "}
                <span className="resource-link__arrow">▶</span>
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
