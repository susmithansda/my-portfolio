const inquiry = document.querySelector("#inquiry");

inquiry.addEventListener("submit", (event) => {
  event.preventDefault();
  const fields = new FormData(inquiry);
  const body = fields.get("message").trim() + "\r\n\r\n" +
    fields.get("name").trim() + "\r\n" + fields.get("email").trim();
  window.location.href = inquiry.action + "?subject=" +
    encodeURIComponent(fields.get("subject").trim()) + "&body=" + encodeURIComponent(body);
});

if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const reveal = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("arrive");
        reveal.unobserve(entry.target);
      }
    }
  }, { threshold: 0.08 });
  document.querySelectorAll(".projects article, .about img, .rows > div, .detail, #inquiry")
    .forEach((element) => reveal.observe(element));
}
