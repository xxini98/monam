// 부드럽게 하는 효과
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// pen 조립
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

// AOS 효과

AOS.init();

// timeline 효과

gsap.registerPlugin(ScrollTrigger);

let contentNum = document.querySelectorAll(".chapter");

contentNum.forEach((content, i) => {
  let mainNum = content.querySelector(".main-number");
  ScrollTrigger.create({
    trigger: content,
    start: "top 100",
    // end: "bottom top+=300",
    // end: "bottom 50%",
    end: "+=" + (content.offsetHeight - 250),
    pin: mainNum,
    markers: false,
    pinSpacing: false,
    onLeave: function () {
      gsap.to(mainNum, {
        autoAlpha: 1,
        duration: 0.1,
        overwrite: "auto",
      });
    },
    onEnterBack: function () {
      gsap.to(mainNum, {
        autoAlpha: 1,
        duration: 0.1,
        overwrite: "auto",
      });
    },
  });
});

let contents = document.querySelectorAll(".content");

contents.forEach((content, i) => {
  let number = content.querySelector(".sec-text");
  ScrollTrigger.create({
    trigger: content,
    start: "top 100",
    end: "+=" + (content.offsetHeight - 100),
    // end: "bottom 100",
    pin: number,
    // pin: false,
    scrub: true,
    markers: false,
    onLeave: function () {
      number.classList.remove("active");
      gsap.to(number, {
        autoAlpha: 0.1,
        opacity: 0,
        duration: 0.1,
        overwrite: "auto",
      });
    },
    onLeaveBack: function () {
      number.classList.remove("active");
      gsap.to(number, {
        autoAlpha: 0.2,
        opacity: 0.2,
        duration: 0.1,
        overwrite: "auto",
      });
    },
    onEnter: function () {
      number.classList.add("active");
      gsap.to(number, {
        autoAlpha: 1,
        opacity: 1,
        duration: 0.1,
        overwrite: "auto",
      });
    },
    onEnterBack: function () {
      number.classList.add("active");
      gsap.to(number, {
        autoAlpha: 1,
        opacity: 1,
        duration: 0.1,
        overwrite: "auto",
      });
    },
  });
});

// 연혁 제목 나오는 효과

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".history-timeline-head",
    start: "-150% 50%",
    // end: "+=200",
    end: "150% 50%%",
    markers: false, // 개발 가이드선
    scrub: true,
    pin: false,
    // pin: true,
  },
});

tl.to(".history_bline", {
  width: "240px",
  duration: 3,
  ease: "Power1.easeInOut",
});
tl.to(".history_title", {
  y: "0",
  duration: 10,
  ease: "Power1.easeInOut",
});

// 이미지 Fade in (left & right) 효과

const projectTriggers = document.querySelectorAll(".ht_content");

projectTriggers.forEach(addTimeline);

function addTimeline(project, index) {
  const image = project.querySelector(".ht-img");
  const text = project.querySelectorAll(".ht-tit-wrap");

  const timeline = gsap
    .timeline({
      scrollTrigger: {
        trigger: project,
        start: "center bottom",
        end: "-10% top",
        ease: "power2",
        scrub: true,
        markers: false,
        toggleActions: "play none none reverse",
      },
    })
    .from(image, {
      x: -100,
      opacity: 0,
      duration: 1,
    })
    .from(
      text,
      {
        x: 100,
        opacity: 0,
        stagger: 1,
      },
      "-=0.5"
    );
}

  new daum.roughmap.Lander({
  timestamp: "1697207317247",
  key: "2ggzs",
  mapHeight: "648",
}).render();
