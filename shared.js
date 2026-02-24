/**
 * QRE Privacy Toolkit — Shared Site Scripts
 * Handles: footer injection, copyright year, and theme toggle.
 */
(function () {
  /* ------------------------------------------------------------------
     1. Footer HTML
     ------------------------------------------------------------------ */
  const footerHTML = `
    <footer>
      <div class="container">
        <p>
          &copy; 2025&ndash;<span id="footer-year"></span> Project QRE.
          Last updated: <span id="footer-month"></span>
        </p>
        <div class="footer-links">
          <a href="about.html">About Us</a><span> | </span>
          <a href="https://github.com/powergr/qre-privacy-toolkit/" target="_blank" rel="noopener noreferrer">GitHub</a><span> | </span>
          <a href="https://github.com/powergr/qre-privacy-toolkit/releases" target="_blank" rel="noopener noreferrer">Releases</a><span> | </span>
          <a href="blog.html">Blog</a><span> | </span>
          <a href="contact.html">Contact</a><span> | </span>
          <a href="terms.html">Terms</a><span> | </span>
          <a href="privacy.html">Privacy</a>
        </div>
      </div>
    </footer>`;

  /* ------------------------------------------------------------------
     2. Inject Footer
     ------------------------------------------------------------------ */
  const placeholder = document.getElementById("footer-placeholder");
  if (placeholder) {
    placeholder.outerHTML = footerHTML;
  }

  /* ------------------------------------------------------------------
     3. Copyright Year & Last Updated Month
     ------------------------------------------------------------------ */
  const now = new Date();
  const yearEl = document.getElementById("footer-year");
  if (yearEl) {
    const startYear = 2025;
    const current = now.getFullYear();
    yearEl.textContent = current > startYear ? current : startYear;
  }

  const monthEl = document.getElementById("footer-month");
  if (monthEl) {
    const monthName = now.toLocaleString("en-US", { month: "long" });
    monthEl.textContent = monthName + " " + now.getFullYear();
  }

  /* ------------------------------------------------------------------
     4. Theme Toggle
     ------------------------------------------------------------------ */
  const toggleBtn = document.getElementById("theme-toggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      const html = document.documentElement;
      const newTheme =
        html.getAttribute("data-theme") === "dark" ? "light" : "dark";
      html.setAttribute("data-theme", newTheme);
      localStorage.setItem("qre_theme", newTheme);
    });
  }
})();
