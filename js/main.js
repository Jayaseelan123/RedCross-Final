document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     MOBILE NAVIGATION (BURGER + DROPDOWN)
  ====================================================== */
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("navLinks");
  const hasDropdowns = document.querySelectorAll(".has-dropdown");

  if (burger && navLinks) {
    burger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      burger.classList.toggle("toggle");

      // lock / unlock background scroll
      if (navLinks.classList.contains("active")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    });
  }

  // Handle dropdowns on mobile
  hasDropdowns.forEach(item => {
    const toggle = item.querySelector(".dropdown-toggle");
    if (toggle) {
      toggle.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          
          // Close other dropdowns
          hasDropdowns.forEach(other => {
            if (other !== item) {
              other.classList.remove("active");
            }
          });

          // Toggle current
          item.classList.toggle("active");
        }
      });
    }
  });

  // Close menu when clicking a link (on mobile)
  document.querySelectorAll(".nav-link:not(.dropdown-toggle)").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove("active");
        burger.classList.remove("toggle");
        document.body.style.overflow = "auto";
      }
    });
  });

  /* =====================================================
     CONTACT FORM
  ====================================================== */
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Your message has been received. We will contact you soon.");
      contactForm.reset();
    });
  }

  /* =====================================================
     JOIN NOW & TRAINING BUTTONS
  ====================================================== */
  window.joinNow = function () {
    alert("Thank you for your interest! Redirecting to membership page.");
    window.location.href = "membership.html";
  };

  window.registerTraining = function () {
    alert("Upcoming NHQ training details will be announced soon.");
  };

  /* =====================================================
     CARD SCROLL FADE ANIMATION
  ====================================================== */
  const cards = document.querySelectorAll(
    ".card, .program-card, .activity-card, .mv-card, .csr-project-card"
  );

  cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease";
  });

  const revealOnScroll = () => {
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  /* =====================================================
     PROGRAM LIST (TABS)
  ====================================================== */
  const programs = [
    {
      title: "Our Program And Activities",
      text: "A comprehensive overview of our humanitarian efforts across the nation.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
    },
    {
      title: "Disaster Management",
      text: "Immediate relief during disasters including rescue and shelters.",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433"
    },
    {
      title: "Blood Services",
      text: "Managing one of the largest blood bank networks in India.",
      image: "https://images.unsplash.com/photo-1615461066841-6116ecaaba30"
    },
    {
      title: "Livelihood Program",
      text: "Empowered developed by thousands through vocational training.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      completed: true
    }
  ];

  const programList = document.getElementById("programList");
  const programTitle = document.getElementById("programTitle");
  const programText = document.getElementById("programText");
  const programImage = document.getElementById("programImage");
  const completedBadge = document.getElementById("completedBadge");

  if (programList && programTitle && programText && programImage) {

    const loadProgram = (index) => {
      const p = programs[index];

      programTitle.textContent = p.title;
      programText.textContent = p.text;
      programImage.src = p.image;

      if (completedBadge) {
        completedBadge.style.display = p.completed ? "block" : "none";
      }

      const buttons = programList.querySelectorAll("button");
      buttons.forEach(btn => btn.classList.remove("active"));
      if (buttons[index]) buttons[index].classList.add("active");
    };

    programList.innerHTML = ""; // Clear existing
    programs.forEach((program, index) => {
      const btn = document.createElement("button");
      btn.textContent = program.title;
      btn.addEventListener("click", () => loadProgram(index));
      programList.appendChild(btn);
    });

    loadProgram(0);
  }

  /* =====================================================
     REPORT FILTER (YEAR)
  ====================================================== */
  const yearFilter = document.getElementById("yearFilter");
  const reportItems = document.querySelectorAll(".report-item");

  if (yearFilter) {
    yearFilter.addEventListener("change", () => {
      const selectedYear = yearFilter.value;

      reportItems.forEach(item => {
        const year = item.getAttribute("data-year");
        item.style.display =
          selectedYear === "all" || year === selectedYear
            ? "flex"
            : "none";
      });
    });
  }

});

function openTab(evt, tabId) {
  const contents = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-btn');

  contents.forEach(c => c.classList.remove('active'));
  buttons.forEach(b => b.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  evt.currentTarget.classList.add('active');
}


