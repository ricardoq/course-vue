export default {
  created: (el, bin) => {
    el.classList.add('loading');
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((imageEntries, observer) => {
        imageEntries.forEach((imageEntry) => {
          if (imageEntry.isIntersecting) {
            el.setAttribute('src', bin.value);
            el.classList.remove('loading');
            observer.unobserve(el);
          }
        });
      });
      imageObserver.observe(el);
    }
  }
};
