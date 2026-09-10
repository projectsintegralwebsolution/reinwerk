/**
 * REINWERK Cleanroom & Plant Engineering - Starter UI Script
 */

document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  // Toast Notification
  window.showToast = function (message, type = "success") {
    let toast = document.getElementById("appToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "appToast";
      toast.className = "toast";
      document.body.appendChild(toast);
    }

    toast.className = `toast toast-${type} show`;
    toast.textContent = message;

    setTimeout(() => {
      toast.className = "toast";
    }, 4500);
  };

  // Contact Form AJAX Handler
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector("button[type=submit]");
      const originalText = submitBtn ? submitBtn.textContent : "Send Message";

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";
      }

      try {
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());

        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok && result.success) {
          window.showToast(result.message, "success");
          contactForm.reset();
        } else {
          window.showToast(result.message || "Failed to send message.", "error");
        }
      } catch (err) {
        console.error("Submission error:", err);
        window.showToast("Could not send message. Please try again.", "error");
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }
      }
    });
  }
});
