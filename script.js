gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");


gsap.to(sections, {
  xPercent: -66 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=3500",
  }
});




const Scrollbar = window.Scrollbar;
const app = document.getElementById("app")


const options = {
  damping: 0.03,
}

Scrollbar.init(app, options);


const faqs = document.querySelectorAll('.faqq');

faqs.forEach(faq => {
  const answer = faq.querySelector('.faq-answer');

  faq.addEventListener('click', () => {
    answer.classList.toggle('faq-answer--show');
  });
});


const back2Top = document.querySelector(".back2top")

back2Top.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
})