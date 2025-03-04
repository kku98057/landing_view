gsap.registerPlugin(ScrollTrigger);
import { activePopupHandler } from "./popup.js";
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
      title: "속초 ***횟집",
      score: 4,
      content:
        "평소 단골손님 위주였는데, 이제는 검색하고 찾아오는 손님이 늘었어요! 활어회 주문이 많아지면서 더 신선한 생선을 준비하게 됐죠.",
    },
    {
      title: "양평 ***한정식",
      score: 5,
      content:
        "평일에는 한산했는데, 요즘은 네이버 검색 덕분인지 꾸준한 손님이 찾아와요! 예약 전화도 점점 늘어나고 있어서 너무 만족스럽습니다.",
    },
    {
      title: "속초 ***순대국",
      score: 5,
      content:
        "처음엔 온라인 노출이 얼마나 도움이 될까 싶었는데, 이제는 테이블 회전율이 확 달라졌어요. 검색하고 저장해둔 손님들이 많이 찾아오네요!",
    },
    {
      title: "가평 ***해장국",
      score: 4,
      content:
        "플레이스 순위가 오른 이후로 아침부터 손님이 줄을 서는 날이 많아졌어요! 주말뿐만 아니라 평일 점심 장사도 훨씬 활기를 띠고 있습니다.",
    },
    {
      title: "홍천 ***한우",
      score: 5,
      content:
        "강원도까지 일부러 찾아오는 손님이 이렇게 많아질 줄 몰랐어요. 네이버 상위 노출 덕분에 예약률이 눈에 띄게 증가했습니다!",
    },
    {
      title: "포천 ***쭈꾸미",
      score: 5,
      content:
        "순위 상승이 이렇게까지 효과가 클 줄은 몰랐어요! 지나가다 검색한 손님들이 쉽게 찾을 수 있어 점심, 저녁 가리지 않고 손님이 많아졌어요.",
    },
    {
      title: "강남 ***레스토랑",
      score: 4,
      content:
        "리뷰와 플레이스 저장이 쌓이면서 가게 신뢰도가 높아졌어요. 덕분에 예약 문의도 늘고, 손님들의 방문 목적도 확실해졌습니다",
    },
    {
      title: "평창 ***한우",
      score: 5,
      content:
        "강원도 여행 오면 꼭 들러야 하는 맛집으로 유명해졌어요! 덕분에 평일에도 예약이 계속 차고, 손님 응대에 더 신경 쓰고 있습니다.",
    },
  ];
  const reviewDatasBottom = [
    {
      title: "단양 ***한정식",
      score: 5,
      content:
        "지역 명소 근처지만 손님 유입이 어려웠는데, 이제는 네이버 검색만 해도 우리 가게가 상위에 떠요! 덕분에 주말마다 만석이에요",
    },
    {
      title: "구리 ***칼국수",
      score: 4,
      content:
        "비 오는 날이면 사람들이 ‘구리 칼국수 맛집’ 검색해서 방문하는 경우가 많아졌어요! 플레이스 노출 덕분에 가게를 더 쉽게 찾는 것 같아요.",
    },
    {
      title: "성남 ***한식뷔페",
      score: 5,
      content:
        "근처 직장인들만 오던 곳이었는데, 이제는 멀리서 일부러 찾아오는 손님도 생겼어요. 온라인 영향력이 이렇게 클 줄 몰랐어요!",
    },
    {
      title: "아산 ***초밥",
      score: 5,
      content:
        "네이버 검색 유입이 많아지면서 손님 연령층도 다양해졌어요! SNS보다 네이버 플레이스 효과가 훨씬 빠르고 확실한 것 같습니다.",
    },
    {
      title: "강남 ***장어",
      score: 5,
      content:
        "장어요리 전문점이라 단골손님 위주였는데, 최근엔 검색 유입이 많아졌어요. 상위 노출되니 자연스럽게 예약도 늘어났어요!",
    },
    {
      title: "전주 ***국수",
      score: 4,
      content:
        "전주 한옥마을 맛집 검색하면 상위에 뜨면서 유입이 눈에 띄게 늘었어요. 점심시간 피크 타임에는 줄 서는 날이 더 많아졌어요!",
    },
    {
      title: "강릉 ***두부 강릉점",
      score: 5,
      content:
        "예전엔 관광객보다 지역 주민이 많았는데, 요즘은 네이버 검색 후 찾아오는 여행객 비중이 훨씬 커졌어요! 전국구 맛집으로 자리 잡는 중이에요.",
    },
    {
      title: "나주 ***곰탕",
      score: 5,
      content:
        "로컬 맛집이라 생각했는데, 플레이스 저장 기능 덕분인지 타지에서도 손님들이 일부러 찾아와요! 덕분에 하루 매출이 꾸준히 상승 중이에요.",
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
              .map(() => `<img src="/assets/images/icons/star.png" alt="">`)
              .join("")}
              ${Array.from({ length: 5 - item.score })
                .map(
                  () => `<img src="/assets/images/icons/star_off.png" alt="">`
                )
                .join("")}
            </div>
            <span>${item.score}.0</span>
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
              .map(() => `<img src="/assets/images/icons/star.png" alt="">`)
              .join("")}
              ${Array.from({ length: 5 - item.score })
                .map(
                  () => `<img src="/assets/images/icons/star_off.png" alt="">`
                )
                .join("")}
            </div>
            <span>${item.score}.0</span>
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

const handleCs = () => {
  const csMutate = async (data) => {
    try {
      pendingText(true);
      const res = await fetch(
        "https://dev.api.joopjoop.co.kr/api/partner-contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (res.ok) {
        return alert("가맹문의가 완료되었습니다.");
      } else {
        // HTTP 오류 상태 코드 처리
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || `요청 실패: ${res.status}`);
      }
    } catch (error) {
      console.error("API 호출 오류:", error);
      alert("요청 처리 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      pendingText(false);
    }
  };
  const form = document.querySelector("#cs_form");
  const phoneInput = document.querySelector(".phone_input");
  phoneInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    if (!data.is_privacy_agreed || data.is_privacy_agreed !== "on") {
      alert("개인정보 수집 / 이용 / 취급 위탁동의에 체크해주세요.");
      return;
    }

    csMutate({
      ...data,
      is_privacy_agreed: data.is_privacy_agreed === "on" ? 1 : 0,
    });
  });
};

const pendingText = (isPending) => {
  const pendingText = document.querySelector(".cs_bar_form-btn");
  if (isPending) {
    pendingText.textContent = "접수중..";
  } else {
    pendingText.textContent = "문의접수";
  }
};
const introduceDetailPopup = () => {
  activePopupHandler(
    ".mission_detail_modal",
    ".mission_detail_btn",
    ".close_btn"
  );
};
introduceDetailPopup();
pendingText();
handleCs();
headerNav();
homeAnimation();
serviceAnimation();
introintroduceAnimation();
comparisonAnimation();
reviewAnimation();
