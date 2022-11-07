let tl = gsap.timeline({
  delay: 0.5,
  defaults: {
    duration: 0.5,
    ease: 'power1.inOut',
  },
});
let tlLights = gsap.timeline({
  delay: 3.2,
  defaults: {
    duration: 3.5,
    ease: 'none',
  },
  repeat: -1,
  yoyo: true
});

tl.fromTo('#leftX', { x: -(window.innerWidth / 2) - 100, opacity: 0, scale: 0.8 }, { x: 0, opacity: 1 });
tl.fromTo('#rightX', { opacity: 0, scale: 0.8 }, { opacity: 1 }, '<');

tl.to('#rightX', { scale: 1.2, ease: 'none', duration: 2 });
tl.to('#leftX', { scale: 1.2, ease: 'none', duration: 2 }, '<');
tl.to('#rightX', { scale: 1, ease: 'power4.in', duration: 0.3 });
tl.to('#leftX', { scale: 1, ease: 'power4.in', duration: 0.3 }, '<');
tl.fromTo('#light1', { opacity: 0, transformOrigin: 'bottom', rotate: -90 }, { opacity: 1 }, );
tl.fromTo('#light2', { opacity: 0, transformOrigin: 'bottom', rotate: 90 }, { opacity: 1 }, '<');
tl.fromTo('#logo', {opacity: 0}, {opacity: 1}, '<')
tl.fromTo('#seats', {opacity: 0}, {opacity: 1}, '<')
tl.fromTo('#text', {opacity: 0}, {opacity: 1}, '<')

tlLights.to('#light1', { transformOrigin: 'bottom', rotate: 90 });
tlLights.to('#light2', { transformOrigin: 'bottom', rotate: -90 }, '<');
