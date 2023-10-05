const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// gsap.to(".company-wrap", {
//   scrollTrigger: {
//     trigger: "#company-info", //객체기준범위
//     start: "0% 60%", //시작 지점
//     end: "10% 50%", //끝 지점
//     // end: "+=500"//시작 부분부터 500px까지 스크롤 한 후종료
//     scrub: 1, //부드러운 스크러빙
//     markers: false, //개발가이드선
//   },
//   backgroundScale: 10,
//   borderRadius: 0,
//   duration: 0.9,
// });

// "pen153" 요소를 가져옵니다.

let scrollTrigger = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".pen",
      start: "top top",
      // end: "800 700",
      end: "100% 90%",
      markers: true, // 개발 가이드선
      scrub: true,
      pin: true,
      // pin: true,
    },
    duration: 1, // 전체 애니메이션의 지속 시간을 4초로 설정
  })
  .to(".bhead", { x: "+=192", duration: 2 }, )
  .to(".bre", { x: "-=108", duration: 2 }, )
  // .to(".bbody", { x: "-=1222", duration: 2 }, 1000);
  .to(".bbody", { x: "-=872", duration: 2 }, );

// ScrollTrigger가 시작되면 start와 end 값을 동적으로 변경
