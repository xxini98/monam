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

AOS.init();

VanillaTilt.init(document.querySelectorAll(".card-element"), {
  max: 25,
  speed: 400,
});

// gsap.registerPlugin(ScrollTrigger);

// let contentNum = document.querySelectorAll(".chapter");

// contentNum.forEach((content, i) => {
//   let mainNum = content.querySelector(".main-number");
//   ScrollTrigger.create({
//     trigger: content,
//     start: "top 100",
//     // end: "bottom top+=300",
//     // end: "bottom 50%",
//     end: "+=" + (content.offsetHeight - 250),
//     pin: mainNum,
//     markers: true,
//     pinSpacing: false,
//     onLeave: function () {
//       gsap.to(mainNum, {
//         autoAlpha: 0,
//         duration: 0.1,
//         overwrite: "auto",
//       });
//     },
//     onEnterBack: function () {
//       gsap.to(mainNum, {
//         autoAlpha: 1,
//         duration: 0.1,
//         overwrite: "auto",
//       });
//     },
//   });
// });

// let contents = document.querySelectorAll(".content");

// contents.forEach((content, i) => {
//   let number = content.querySelector(".sec-text");
//   let colors = content.querySelectorAll(".secondary-number");
//   ScrollTrigger.create({
//     trigger: content,
//     start: "top 100",
//     end: "+=" + (content.offsetHeight - 100),
//     pin: number,
//     markers: true,
//     pinSpacing: false,
//     onLeave: function () {
//       gsap.to(number, {
//         autoAlpha: 0,
//         opacity: 0,
//         duration: 0.1,
//         overwrite: "auto",
//       });
//     },
//     onEnterBack: function () {
//       gsap.to(number, {
//         autoAlpha: 1,
//         opacity: 1,
//         duration: 0.1,
//         color: colors,
//         overwrite: "auto",
//       });
//     },
//     opacity: 1,
//   });
// });

// Timeline

gsap.registerPlugin(ScrollTrigger);

function initTimeline() {
  let parent_container = document.getElementById("section-timeline");
  let timeline_container = parent_container.querySelector(
    ".timeline-container"
  );
  var sections = timeline_container.querySelectorAll(".year");

  const vh = (coef) => window.innerHeight * (coef / 100);

  let parentST = ScrollTrigger.create({
    id: "parent-timeline",
    trigger: parent_container,
    start: "top top",
    toggleClass: "started",
    pin: true,
    markers: true,
    end: () => "+=" + (sections.length - 1) * vh(50),
  });

  let currentSection;

  function goto(section, i) {
    if (currentSection !== section) {
      // if the section is the currentSection, skip
      // move the container
      gsap.to(timeline_container, {
        y: -48 * i,
        duration: 0.6,
        overwrite: true,
      });
      let tl = gsap.timeline({ defaults: { overwrite: true } });
      // animate OUT the current section (if there is one)
      if (currentSection) {
        tl.to(currentSection.querySelector("h2"), {
          fontSize: "2rem",
          fontColor: "red",
        });
        tl.to(
          currentSection,
          {
            maxHeight: "3rem",
            fontColor: "red",
          },
          0
        );
        tl.to(
          currentSection.querySelectorAll("p"),
          {
            opacity: 0,
            duration: 0.25,
            maxHeight: "0%",
          },
          0
        );
      }
      currentSection = section;
      // animate IN the new section (if there is one)
      if (section) {
        tl.to(
          section.querySelector("h2"),
          {
            fontSize: "10rem",
            fontColor: "red",
          },
          0
        );
        tl.to(
          section,
          {
            maxHeight: "80vh",
          },
          0
        );
        tl.fromTo(
          section.querySelectorAll("p"),
          { maxHeight: "0%" },
          {
            opacity: 1,
            maxHeight: "100%",
          }
        );
      }
    }
  }

  sections.forEach((sct, i) => {
    let sct_index = sct.getAttribute("data-count");

    ScrollTrigger.create({
      start: () => parentST.start + i * window.innerHeight * 0.4,
      end: () => "+=" + window.innerHeight * 0.4,
      markers: true,
      onLeaveBack: () => i || goto(null, 0),
      onToggle: (self) => self.isActive && goto(sct, sct_index),
    });
  });
}

initTimeline();






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
        markers: true,
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


