gsap.registerPlugin(ScrollTrigger);
import { titleAnimation } from "./titleAnimation.js";

// 헤드 네비게이션
const headerNav = () => {
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll(".header_nav li a");

  sections.forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        const currentId = section.getAttribute("id");
        navItems.forEach((item) => {
          item.parentElement.classList.remove("active");
          if (item.getAttribute("href") === `#${currentId}`) {
            item.parentElement.classList.add("active");
          }
        });
      },
      onEnterBack: () => {
        const currentId = section.getAttribute("id");
        navItems.forEach((item) => {
          item.parentElement.classList.remove("active");
          if (item.getAttribute("href") === `#${currentId}`) {
            item.parentElement.classList.add("active");
          }
        });
      },
    });
  });
};

// 숫자 카운트업 함수
const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const countUp = (element, target, duration) => {
  const start = 0;
  const increment = target / (duration / 16); // 60fps 기준
  let current = start;

  const updateNumber = () => {
    current += increment;
    if (current >= target) {
      element.textContent = numberWithCommas(target) + "+";
      return;
    }
    element.textContent = numberWithCommas(Math.floor(current)) + "+";
    requestAnimationFrame(updateNumber);
  };

  updateNumber();
};

// 홈화면
const homeAnimation = () => {
  const countElements = {
    stores: {
      element: document.querySelector(
        ".hero_contents-bottom .item:nth-child(1) strong"
      ),
      target: 78036,
    },
    users: {
      element: document.querySelector(
        ".hero_contents-bottom .item:nth-child(2) strong"
      ),
      target: 1270000,
    },
    mou: {
      element: document.querySelector(
        ".hero_contents-bottom .item:nth-child(3) strong"
      ),
      target: 169,
    },
  };

  const homeTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#hero_section",
      start: "top 70%",
      toggleActions: "play reset restart reset",
      onLeave: () => {
        // 화면을 벗어날 때 카운트 값을 0으로 초기화
        Object.values(countElements).forEach(({ element }) => {
          element.textContent = "0+";
        });
      },
      onEnterBack: () => {
        // 다시 돌아올 때도 카운트 값을 0으로 초기화
        Object.values(countElements).forEach(({ element }) => {
          element.textContent = "0+";
        });
      },
    },
  });

  homeTl.from(".hero_contents-top", {
    opacity: 0,
    y: 30,
    duration: 0.8,
  });

  // 각 아이템별로 개별 애니메이션 적용
  Object.values(countElements).forEach(({ element, target }, index) => {
    const item = element.closest(".item");
    homeTl.from(
      item,
      {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: index * 0.2,
        onComplete: () => {
          countUp(element, target, 1000);
        },
      },
      ">-0.6"
    );
  });
};

// 기대효과
const serviceAnimation = () => {
  titleAnimation(".service_title");
  const contentsTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".service_contents",
      start: "top 70%",
      toggleActions: "play reset play reverse",
    },
  });
  contentsTl.from(".service_contents li", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,
  });
};

const introintroduceAnimation = () => {
  titleAnimation(".introduce_title");
  const buttonTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".introduce_button",
      start: "top 70%",
      toggleActions: "play reset play reverse",
    },
  });
  buttonTl.from(".introduce_button", {
    opacity: 0,
    y: 30,
    duration: 0.8,
  });

  const contents = gsap.utils.toArray(".content_item");
  contents.forEach((content) => {
    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: content,
        start: "top 70%",
        toggleActions: "play reset play reverse",
      },
    });
    contentTl.from(content, {
      opacity: 0,
      y: 30,
      duration: 0.8,
    });
  });
};
const comparisonAnimation = () => {
  const reviewDatasTop = [
    {
      title: "홍길동찜닭",
      score: 5,
      content:
        "전단지 뿌리고 온라인 광고 돌려도 효과가 애매했는데, 줍줍은 방문할 때만 비용이 발생해서 너무 합리적이에요. 신규 고객이 확실히 많아졌어요!",
    },
    {
      title: "홍길동찜닭",
      score: 5,
      content:
        "전단지 뿌리고 온라인 광고 돌려도 효과가 애매했는데, 줍줍은 방문할 때만 비용이 발생해서 너무 합리적이에요. 신규 고객이 확실히 많아졌어요!",
    },
    {
      title: "홍길동찜닭",
      score: 5,
      content:
        "전단지 뿌리고 온라인 광고 돌려도 효과가 애매했는데, 줍줍은 방문할 때만 비용이 발생해서 너무 합리적이에요. 신규 고객이 확실히 많아졌어요!",
    },
    {
      title: "홍길동찜닭",
      score: 5,
      content:
        "전단지 뿌리고 온라인 광고 돌려도 효과가 애매했는데, 줍줍은 방문할 때만 비용이 발생해서 너무 합리적이에요. 신규 고객이 확실히 많아졌어요!",
    },
    {
      title: "홍길동찜닭",
      score: 5,
      content:
        "전단지 뿌리고 온라인 광고 돌려도 효과가 애매했는데, 줍줍은 방문할 때만 비용이 발생해서 너무 합리적이에요. 신규 고객이 확실히 많아졌어요!",
    },
  ];
  const reviewDatasBottom = [
    {
      title: "홍길동찜닭",
      score: 5,
      content:
        "전단지 뿌리고 온라인 광고 돌려도 효과가 애매했는데, 줍줍은 방문할 때만 비용이 발생해서 너무 합리적이에요. 신규 고객이 확실히 많아졌어요!",
    },
    {
      title: "홍길동찜닭",
      score: 5,
      content:
        "전단지 뿌리고 온라인 광고 돌려도 효과가 애매했는데, 줍줍은 방문할 때만 비용이 발생해서 너무 합리적이에요. 신규 고객이 확실히 많아졌어요!",
    },
    {
      title: "홍길동찜닭",
      score: 5,
      content:
        "전단지 뿌리고 온라인 광고 돌려도 효과가 애매했는데, 줍줍은 방문할 때만 비용이 발생해서 너무 합리적이에요. 신규 고객이 확실히 많아졌어요!",
    },
    {
      title: "홍길동찜닭",
      score: 5,
      content:
        "전단지 뿌리고 온라인 광고 돌려도 효과가 애매했는데, 줍줍은 방문할 때만 비용이 발생해서 너무 합리적이에요. 신규 고객이 확실히 많아졌어요!",
    },
    {
      title: "홍길동찜닭",
      score: 5,
      content:
        "전단지 뿌리고 온라인 광고 돌려도 효과가 애매했는데, 줍줍은 방문할 때만 비용이 발생해서 너무 합리적이에요. 신규 고객이 확실히 많아졌어요!",
    },
  ];

  const reviewItemsWrapper = document.querySelectorAll(".review_items");
  reviewItemsWrapper.forEach((data) => {
    reviewItemsWrapper[0].innerHTML = [
      ...reviewDatasTop,
      ...reviewDatasTop,
      ...reviewDatasTop,
    ]
      .map((item, index) => {
        return `
    <li>
       <h3>${item.title}</h3>
       <p>${item.content}</p>
       <div class="review_score">
            <div class="review_score-imgs">
            ${Array.from({ length: item.score })
              .map(() => `<img src="./assets/images/icons/star.png" alt="">`)
              .join("")}
            </div>
            <span>${item.score}</span>
        </div>
    </li>
    `;
      })
      .join("");

    reviewItemsWrapper[1].innerHTML = [
      ...reviewDatasBottom,
      ...reviewDatasBottom,
      ...reviewDatasBottom,
    ]
      .map((item, index) => {
        return `
    <li>
       <h3>${item.title}</h3>
       <p>${item.content}</p>
       <div class="review_score">
            <div class="review_score-imgs">
            ${Array.from({ length: item.score })
              .map(() => `<img src="./assets/images/icons/star.png" alt="">`)
              .join("")}
            </div>
            <span>${item.score}</span>
        </div>
    </li>
    `;
      })
      .join("");
  });

  titleAnimation(".comparison_title");

  const contentTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".comparison_contents",
      start: "top 70%",
      toggleActions: "play reset play reverse",
    },
  });
  contentTl.from(".comparison_contents > div", {
    opacity: 0,
    y: 30,
    duration: 0.8,
  });
};
const reviewAnimation = () => {
  titleAnimation(".review_title");
  const reviewTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".review_contents",
      start: "top 70%",
      toggleActions: "play reset play reverse",
    },
  });
  reviewTl.from(".review_contents", {
    opacity: 0,
    duration: 0.8,
  });
};
headerNav();
homeAnimation();
serviceAnimation();
introintroduceAnimation();
comparisonAnimation();
reviewAnimation();
