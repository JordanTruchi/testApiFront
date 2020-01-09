export function animationInDom() {
}

export function animationOutDom(id) {
    let tasks = document.querySelectorAll(`.containTask`);
    let title = document.querySelectorAll(`.titlePage`);
    let tl = gsap.timeline();
    tl.
    to(title, {
        y: -5000,
        opacity: 0,
        ease: "power1.inOut",
        delay: 0.350
    })
    .to(tasks, {
        y: -5000,
        opacity: 0,
        ease: "power1.inOut",
        delay: 0.350,
        onComplete: hideDom
    }, '<');  
}

export function hideDom() {
    let gContainer = document.querySelector('.globalContainer');
    gContainer.style.display = 'none';
}

export function seeDom() {
}

