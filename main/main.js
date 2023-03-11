const btn = document.querySelector('button')
let container = document.querySelector('.container')

gsap.registerPlugin(ScrollTrigger);

const Animation = (ref, op1, op2, x1, x2, y1, y2,scrub1,scrub2) => {

    gsap.fromTo(
        ref,
        {
            opacity: op1,
            x: x1,
            y: y1,
            duration: 1 ,
            scrub: scrub1,
        },
        {
            scrollTrigger: {
                trigger: ref,
                start: "center 90%",
            },
            opacity: op2,
            x: x2,
            y: y2,
            scrub: scrub2,
        }
    );

};
Animation('.container', 0, 1, 0, 0, 10, 0,)
Animation('.Contact_Us', 0, 1, 0, -70, 0, 0, 0.5,1),
Animation('.icon', 0, 1, -70, 0, 0, 0,0.5,1),
Animation('.name', 0, 1, 0, 0, -70, 0),
Animation('.name-bee', 0, 1, 0, 0, -60, 0)
Animation('ul', 0, 1, 0, 0, -60, 0)
Animation('.text-us', 0, 1, 0, -60, 0, 0)
Animation('.img-text', 0, 1, 0, 60, 0, 0)

Animation('.img-us', 0, 1, 0, -60, 0, 0)
Animation('.mini-name-bee', 0, 1, 0, 0, -60, 0)
Animation('#c', 0, 1, -60, 0, -70, 0)
Animation('#u', 0, 1, 0, 0, 60, 0)
Animation('#cavid', 0, 1, 60, 0, 0, 0)
Animation('.text1', 0, 1, 60, 0, 0, 0)
Animation('.text2', 0, 1, 60, 0, 0, 0)
Animation('.button', 0, 1, 60, 0, 0, 0)
Animation('.img', 0, 1, 0, 0, -30, 0)
Animation('.cars>h1', 0, 1, 0, 0, -30, 0)
Animation('.cars>h6', 0, 1, 0, 0, -30, 0)
Animation('.cars>a', 0, 1, 0, 0, -30, 0)
Animation('.txt-vidio', 0, 1, 0, 0, -60, 0)
Animation('.b', 0, 1, 0, -60, 0, 0)
Animation('.map-input2', 0, 1, 0, -60, 0, 0)
Animation('.map-txt', 0, 1, 0, 60, 0, 0)
