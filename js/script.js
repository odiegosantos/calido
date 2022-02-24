window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  header.classList.toggle("sticky", window.scrollY > 0)
});

function toggleMenu() {
  const menuToggle = document.querySelector('.menuToggle');
  const navigation = document.querySelector('.navigation');
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
}

function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  if (sections.length) {
    const windowSection = window.innerHeight * 0.4;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowSection) < 0;
        if (isSectionVisible)
          section.classList.add('active');
        else
          section.classList.remove('active');
      })
    }
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
initAnimacaoScroll();