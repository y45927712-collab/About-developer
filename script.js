let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river5');
let boat6 = document.getElementById('boat6');
let yousif = document.querySelector('.yo');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river5.style.top = value + 'px';
    boat6.style.top = value + 'px';
    boat6.style.left = value * 3 + 'px';
    yousif.style.fontSize = value + 'px';
    if (scrollY >= 67) {
        yousif.style.fontSize = 67 + 'px';
        yousif.style.position = 'fixed';
        if (scrollY >= 390) {
            yousif.style.display = 'none';
        }else{
            yousif.style.display = 'block';
        }
        
    }
    if(scrollY >= 100){
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)';
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)';
        }
}


const mouseGlow = document.querySelector('.mouse-glow');

if (mouseGlow) {
    document.addEventListener('mousemove', function (event) {
        mouseGlow.style.left = event.clientX + 'px';
        mouseGlow.style.top = event.clientY + 'px';
        mouseGlow.style.opacity = '1';
    });

    document.addEventListener('mouseleave', function () {
        mouseGlow.style.opacity = '0';
    });

    document.addEventListener('mouseenter', function () {
        mouseGlow.style.opacity = '1';
    });
}


let lastTrailTime = 0;

document.addEventListener('mousemove', function (event) {
    const now = performance.now();

    if (now - lastTrailTime < 25) return;

    lastTrailTime = now;

    const trail = document.createElement('div');
    trail.className = 'mouse-trail';

    trail.style.left = event.clientX + 'px';
    trail.style.top = event.clientY + 'px';

    document.body.appendChild(trail);

    trail.addEventListener('animationend', function () {
        trail.remove();
    });

    setTimeout(function () {
        trail.remove();
    }, 350);
});


const magneticElements = document.querySelectorAll(
    'header ul li a, .logo, .project-card a, .back-home'
);

magneticElements.forEach(function (element) {
    element.addEventListener('mousemove', function (event) {
        const rect = element.getBoundingClientRect();

        const x = event.clientX - (rect.left + rect.width / 2);
        const y = event.clientY - (rect.top + rect.height / 2);

        element.style.transform =
            `translate(${x * 0.18}px, ${y * 0.3}px)`;
    });

    element.addEventListener('mouseleave', function () {
        element.style.transform = '';
    });
});


const revealElements = document.querySelectorAll(
    '.project-card, .projects-content > h1, .projects-intro'
);


revealElements.forEach(function (element, index) {
    element.classList.add('reveal');

    if (element.classList.contains('project-card')) {
        element.style.setProperty(
            '--card-delay',
            (index % 4) * 120 + 'ms'
        );
    }
});


const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15 
});

revealElements.forEach(function (element) {
    revealObserver.observe(element);
});


const projectsPage = document.querySelector('.projects-page');

if (projectsPage) {
    document.addEventListener('mousemove', function (event) {
        projectsPage.style.setProperty('--mouse-x', event.clientX + 'px');
        projectsPage.style.setProperty('--mouse-y', event.clientY + 'px');
        projectsPage.classList.add('mouse-glow-active');
    });

    document.addEventListener('mouseleave', function () {
        projectsPage.classList.remove('mouse-glow-active');
    });
}

