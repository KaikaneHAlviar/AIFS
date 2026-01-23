export default function EventCard({ event }) {
  return (
    <article className="card">
      <div className="card__media">
        <img src={event.image} alt={`${event.title} poster`} loading="lazy" />
      </div>

      <div className="card__body">
        <h3 className="card__title">{event.title}</h3>

        <ul className="card__meta">
          <li>📅 {event.date}</li>
          <li>🕒 {event.time}</li>
          <li>📍 {event.location}</li>
        </ul>

        <a className="btn btn--secondary" href={event.url}>
          More Info →
        </a>
      </div>
    </article>
  );
}
