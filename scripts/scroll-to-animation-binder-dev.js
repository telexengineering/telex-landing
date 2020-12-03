var hasFullWindowScrolled = false;
  window.addEventListener('scroll', () => {
      windowScrollPercentage = Math.min(1, window.pageYOffset / window.innerHeight);
      if (hasFullWindowScrolled) {
        windowScrollPercentage = 1;
      }

      if (windowScrollPercentage == 1) {
        hasFullWindowScrolled = true;
      }

    document.documentElement.style.setProperty('--scroll', windowScrollPercentage);
  }, false);