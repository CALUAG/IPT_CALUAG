

    // Add scroll animations
    window.addEventListener('scroll', () => {
        document.querySelectorAll('.animate').forEach((el) => {
          const pos = el.getBoundingClientRect().top;
          if (pos < window.innerHeight - 100) {
            el.classList.add('visible');
          }
        });
      });
    
  
