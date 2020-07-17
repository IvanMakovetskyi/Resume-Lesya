(() => {
    const langBtnRef = document.querySelector("[data-lang-button]");
    const globalMenuRef = document.querySelector("[data-global-lang]");
    const langMenuRef = document.querySelector("[data-lang]");
  
    langBtnRef.addEventListener("click", () => {
      const expanded =
        langBtnRef.getAttribute("aria-expanded") === "true" || false;
  
      langBtnRef.classList.toggle("is-open");
      langBtnRef.setAttribute("aria-expanded", !expanded);
  
      globalMenuRef.classList.toggle("is-open");
      langMenuRef.classList.toggle("is-open");
    });
  })();