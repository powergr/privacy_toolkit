/**
 * QRE Privacy Toolkit — Shared Site Scripts
 * Handles: footer injection, copyright year, and theme toggle.
 */
(function () {
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
