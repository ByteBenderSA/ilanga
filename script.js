document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("nav");
  const cartCount = document.getElementById("cartCount");
  const cartButton = document.getElementById("cartButton");
  const toast = document.getElementById("toast");
  const newsletterForm = document.getElementById("newsletterForm");
  const newsletterMessage = document.getElementById("newsletterMessage");

  let cart = 0;
  let toastTimer;

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

  function notify(message) {
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add("show");
    toastTimer = setTimeout(function () {
      toast.classList.remove("show");
    }, 1800);
  }

  document.querySelectorAll("[data-product]").forEach(function (button) {
    button.addEventListener("click", function () {
      cart += 1;
      cartCount.textContent = cart;
      notify((button.dataset.product || "Product") + " added to cart");
    });
  });

  cartButton.addEventListener("click", function () {
    notify(cart ? "Cart has " + cart + " item" + (cart === 1 ? "" : "s") : "Your cart is empty");
  });

  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email");
    if (!email.value.trim()) return;
    email.value = "";
    newsletterMessage.textContent = "You’re on the list.";
  });
});
