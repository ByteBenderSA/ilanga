document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("nav");
  const newsletterForm = document.getElementById("newsletterForm");
  const newsletterMessage = document.getElementById("newsletterMessage");

  menuBtn.addEventListener("click", function () {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.setAttribute("aria-label", "Open menu");
    });
  });

  const detail = document.getElementById("detail");
  const detailContent = document.getElementById("detailContent");

  document.querySelectorAll("[data-detail]").forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      const template = document.getElementById("detail-" + trigger.dataset.detail);
      detailContent.replaceChildren(template.content.cloneNode(true));
      detail.showModal();
      detail.querySelector(".detail-body").scrollTop = 0;
    });
  });

  document.getElementById("detailClose").addEventListener("click", function () {
    detail.close();
  });

  // A click on the backdrop lands on the dialog itself.
  detail.addEventListener("click", function (e) {
    if (e.target === detail) detail.close();
  });

  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email");
    if (!email.value.trim()) return;
    email.value = "";
    newsletterMessage.textContent = "You’re on the list.";
  });
});
