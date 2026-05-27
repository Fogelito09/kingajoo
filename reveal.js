(function () {
  var io;
  var seen = new WeakSet();

  function observe(el) {
    if (seen.has(el)) return;
    seen.add(el);

    var siblings = Array.from(el.parentNode.querySelectorAll('.js-reveal'));
    if (siblings.length > 1) {
      siblings.forEach(function (s, i) {
        if (!s.style.transitionDelay) s.style.transitionDelay = (i * 0.07) + 's';
      });
    }

    io.observe(el);
  }

  function init() {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

    document.querySelectorAll('.js-reveal').forEach(observe);

    new MutationObserver(function (mutations) {
      mutations.forEach(function (m) {
        m.addedNodes.forEach(function (node) {
          if (node.nodeType !== 1) return;
          if (node.classList && node.classList.contains('js-reveal')) observe(node);
          if (node.querySelectorAll) node.querySelectorAll('.js-reveal').forEach(observe);
        });
      });
    }).observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
