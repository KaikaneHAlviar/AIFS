export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>Keep in touch with us to see our upcoming events!</p>
        <div className="footer__social">
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="LinkedIn">in</a>
        </div>
        <small>© {year} AI For Students</small>
      </div>
    </footer>
  );
}