const phoneLottie = document.querySelector(".phone_lottie");
const addressLottie = document.querySelector(".address_lottie");
const attractionLottie = document.querySelector(".attraction_lottie");
const locationLottie = document.querySelectorAll(".location_lottie");

if (phoneLottie) {
  const phoneLottieData = {
    container: phoneLottie,
    path: "./assets/lottie/visit.json",
    renderer: "svg",
    loop: false,
    autoplay: true,
  };

  // 폰 로티 애니메이션 로드
  const phoneAnimation = lottie.loadAnimation(phoneLottieData);

  // 애니메이션 속도 조절 (0.5는 절반 속도, 2는 2배 속도)
  phoneAnimation.setSpeed(0.5);

  // 애니메이션이 완료되면 딜레이 후 다시 시작
  phoneAnimation.addEventListener("complete", () => {
    setTimeout(() => {
      phoneAnimation.goToAndPlay(0, true);
    }, 1000); // 1초(1000ms) 딜레이 후 다시 시작
  });
}
if (addressLottie) {
  const addressLottieData = {
    container: addressLottie,
    path: "./assets/lottie/address.json",
    renderer: "svg",
    loop: false,
    autoplay: true,
  };

  // 폰 로티 애니메이션 로드
  const phoneAnimation = lottie.loadAnimation(addressLottieData);

  // 애니메이션 속도 조절 (0.5는 절반 속도, 2는 2배 속도)
  phoneAnimation.setSpeed(0.5);

  // 애니메이션이 완료되면 딜레이 후 다시 시작
  phoneAnimation.addEventListener("complete", () => {
    setTimeout(() => {
      phoneAnimation.goToAndPlay(0, true);
    }, 1000); // 1초(1000ms) 딜레이 후 다시 시작
  });
}
if (attractionLottie) {
  const attractionData = {
    container: attractionLottie,
    path: "./assets/lottie/attractions.json",
    renderer: "svg",
    loop: false,
    autoplay: true,
  };

  // 폰 로티 애니메이션 로드
  const phoneAnimation = lottie.loadAnimation(attractionData);

  // 애니메이션 속도 조절 (0.5는 절반 속도, 2는 2배 속도)
  phoneAnimation.setSpeed(0.5);

  // 애니메이션이 완료되면 딜레이 후 다시 시작
  phoneAnimation.addEventListener("complete", () => {
    setTimeout(() => {
      phoneAnimation.goToAndPlay(0, true);
    }, 1000); // 1초(1000ms) 딜레이 후 다시 시작
  });
}

if (locationLottie && locationLottie.length > 0) {
  locationLottie.forEach((item) => {
    const locationLottieData = {
      container: item,
      path: "./assets/lottie/location.json",
      renderer: "svg",
      loop: true,
      autoplay: true,
    };

    // 위치 로티 애니메이션 로드
    const locationAnimation = lottie.loadAnimation(locationLottieData);
  });
}
