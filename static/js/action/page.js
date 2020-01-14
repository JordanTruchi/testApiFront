export function animationInDom(gContainer) {
    let tl = gsap.timeline();
    tl.
    to(gContainer, 
    {
        x: 0,
        opacity: 1,
        ease: "power3.inOut",
        delay: 0.850,
        onStart: () => {
            gContainer.style.display = 'block';
        }
    });
}

export function animationOutDom(gContainer) {
    let tl = gsap.timeline();
    tl.
    to(gContainer, 
    {
        x: '100%',
        opacity: 0,
        ease: "power3.inOut",
        delay: 0.350,
        onComplete: () => {
            gContainer.style.display = 'none';
        }
    });  
}

export function animationMenuToCross(circleMenu, bar1, bar2, bar3) {
    let tl = gsap.timeline();
    tl.
    to(circleMenu, 
    {
        background: 'rgba(255, 255, 255, 0)',
        boxShadow: 'none',
        ease: "power1.in",
        delay: 0.350
    })
    .to(bar1, 
    {
        background: '#3e50b4',
        ease: "power1.in",
        rotate: -45,
        delay: 0.350
    }, '<')
    .to(bar2, 
    {
        background: 'rgba(255, 255, 255, 0)',
        ease: "power1.in",
        delay: 0.350
    }, '<')
    .to(bar3, 
    {
        background: '#3e50b4',
        ease: "power1.in",
        rotate: 45,
        delay: 0.350
    }, '<');
}

export function animationCrossToMenu(circleMenu, bar1, bar2, bar3) {
    let tl = gsap.timeline();
    tl.
    to(circleMenu, 
    {
        background: 'rgba(255, 255, 255, 0.87)',
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        ease: "power1.in",
        delay: 0.350
    })
    .to(bar1, 
    {
        background: '#3e50b4',
        ease: "power1.in",
        rotate: 0,
        delay: 0.350
    }, '<')
    .to(bar3, 
    {
        background: '#3e50b4',
        ease: "power1.in",
        rotate: 0,
        delay: 0.350
    }, '<')
    .to(bar2, 
        {
            background: '#3e50b4',
            ease: "power1.in",
            delay: 0.350
    }, '<');
}


