export const titleAnimation = (target) => {
  const titleTl = gsap.timeline({
    scrollTrigger: {
      trigger: target,
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  });

  titleTl
    .from(`${target} h3`, {
      opacity: 0,
      y: 30,
      duration: 0.8,
    })
    .from(
      `${target} p`,
      {
        opacity: 0,
        y: 30,
        duration: 0.8,
      },
      ">-0.6"
    );
};
