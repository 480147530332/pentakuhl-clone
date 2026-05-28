import "../../index.css";


const Footer = () => {
  return (
    <footer className="footer">
     

      {/* Footer bar */}
      <div className="footer-bar">
        <p className="footer-copy">
          © 2026 Penta Freight. All Rights Reserved Developed by Nipralo
        </p>
        <div className="footer-bar-center">
          <a href="https://linkedin.com" className="footer-linkedin" target="_blank" rel="noreferrer">
            in
          </a>
        </div>
        <div className="footer-bar-links">
          <a href="#">Privacy Policy</a>
          <span className="footer-dot">•</span>
          <a href="#">Terms and Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;