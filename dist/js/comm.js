const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);

gsap.to(".company_info-wrap", {
  scrollTrigger: {
    trigger: "#company_info", //객체기준범위
    start: "0% 60%", //시작 지점
    end: "10% 50%", //끝 지점
    // end: "+=500"//시작 부분부터 500px까지 스크롤 한 후종료
    scrub: 1, //부드러운 스크러빙
    markers: false, //개발가이드선
  },
  backgroundScale: 10,
  borderRadius: 0,
  duration: 0.9,
});

// "pen153" 요소를 가져옵니다.

let scrollTrigger = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".pen",
      start: "top top",
      // end: "+=200",
      end: "90% 90%",
      markers: false, // 개발 가이드선
      scrub: true,
      pin: true,
      // pin: true,
    },
    duration: 1, // 전체 애니메이션의 지속 시간을 4초로 설정
  })
  .to(".bhead", { x: "872px", duration: 2 })
  .to(".bbody", { x: "-1891px", duration: 2 })
  .to(".bre", { x: "-102px", duration: 2 });

// ScrollTrigger가 시작되면 start와 end 값을 동적으로 변경

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("section").forEach((item) => {
  let color = item.getAttribute("data-bgcolor");

  ScrollTrigger.create({
    trigger: item,
    start: "top 50%",
    end: "bottom 5%",
    markers: false,

    onEnter: () =>
      gsap.to("body", {
        backgroundColor: color,
        duration: 0.4,
      }),
    onEnterBack: () =>
      gsap.to("body", {
        backgroundColor: color,
        duration: 0.4,
      }),
  });
});

AOS.init();

VanillaTilt.init(document.querySelectorAll(".card-element"), {
  max: 25,
  speed: 400,
});

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".change_number",
  start: "top 100",
  end: "bottom top+=300",
  pin: ".main-number",
  markers: false,
  pinSpacing: false,
  onLeave: function () {
    gsap.to(".main-number", { autoAlpha: 0, duration: 0.5, overwrite: "auto" });
  },
  onEnterBack: function () {
    gsap.to(".main-number", { autoAlpha: 1, duration: 0.5, overwrite: "auto" });
  },
});

let contents = document.querySelectorAll(".content");

contents.forEach((content, i) => {
  let number = content.querySelector(".secondary-number");
  ScrollTrigger.create({
    trigger: content,
    start: "top 100",
    end: "+=" + (content.offsetHeight - 15),
    pin: number,
    markers: false,
    pinSpacing: false,
    onLeave: function () {
      gsap.to(number, { autoAlpha: 0, duration: 0.3, overwrite: "auto" });
    },
    onEnterBack: function () {
      gsap.to(number, { autoAlpha: 1, duration: 0.3, overwrite: "auto" });
    },
  });
});

gsap.registerPlugin(ScrollTrigger);

const headingTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#history-intro",
    markers: true,
    start: "30% 50%",
    end: "50% 50%",
    scrub: 5,
    duration: 2,
    pin: false,
    pinSpacing: false,
    repeat: -1,
    repeatDelay: 2,
    yoyo: true,
  },
});

headingTl
  .from(".heading", {
    duration: 1,
    scaleX: 0,
    transformOrigin: "left",
    ease: "expo.inOut",
  })
  .from(
    ".heading h1",
    {
      y: "100%",
      duration: 0.8,
      ease: "expo.out",
    },
    "-=0.2"
  )
  .from(
    ".heading",
    {
      css: { borderBottom: "4px solid black" },
      duration: 2,
      transformOrigin: "right",
      ease: "none",
    },
    "-=1"
  )
  .from(
    ".heading h1",
    {
      duration: 2,
      transformOrigin: "right",
      ease: "none",
      css: { color: "black" },
    },
    "-=2"
  );
