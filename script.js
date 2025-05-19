const sections = document.querySelectorAll("section");
    const revealOnScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;

      sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < triggerBottom) {
          sec.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    window.addEventListener("load", revealOnScroll);