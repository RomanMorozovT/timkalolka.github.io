document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});
function scrollToOrder() {
    const orderSection = document.getElementById('order-section');
    if (orderSection) {
        orderSection.scrollIntoView({ 
            behavior: 'smooth' 
        });
    }
}
document.addEventListener('DOMContentLoaded', function() {
});
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery-image');
    images.forEach(img => {
        img.loading = 'lazy';
    });
});
function scrollToBottom() {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
    });
}
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const backToTop = document.querySelector('.back-to-top');
е
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const fadeElements = document.querySelectorAll('.text-section, .image-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'visible');
            }
        });
    }, {
        threshold: 0.1
    });

    fadeElements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', function() {

    const productCards = document.querySelectorAll('.product-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    productCards.forEach(card => {
        observer.observe(card);
    });

    const productImages = document.querySelectorAll('.product-image');
    productImages.forEach(img => {
        img.loading = 'lazy';
    });

    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {

            console.log('Buy button clicked');
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });

    const productsLink = document.createElement('a');
    productsLink.href = '#products-section';
    productsLink.textContent = 'Товары';
    productsLink.classList.add('nav-link');

    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.appendChild(productsLink);
    }


    const promotionsSection = document.querySelector('.promotions-section');
    if (promotionsSection) {
        promotionsSection.id = 'products-section';
    }

    function scrollToOrder() {
        const orderSection = document.getElementById('order-section');
        if (orderSection) {
            orderSection.scrollIntoView({ 
                behavior: 'smooth' 
            });
        }
    }

    const images = document.querySelectorAll('.gallery-image');
    images.forEach(img => {
        img.loading = 'lazy';
    });

    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    
    const fadeElements = document.querySelectorAll('.text-section, .image-section');
    const productCards = document.querySelectorAll('.product-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'visible');
            }
        });
    }, {
        threshold: 0.1
    });

    fadeElements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });

    productCards.forEach(card => {
        observer.observe(card);
    });

 
    const productImages = document.querySelectorAll('.product-image');
    productImages.forEach(img => {
        img.loading = 'lazy';
    });

    // Buy buttons click handlers
    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Buy button clicked');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {

    const navLinks = document.querySelector('.nav-links');
    const advantagesLink = document.querySelector('a[href="#advantages"]');


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {

    function smoothScrollTo(targetElement) {
        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }

 
    const navLinks = document.querySelector('.nav-links');
    const advantagesLink = document.querySelector('a[href="#advantages-section"]'); 
    
    if (!advantagesLink && navLinks) {
        const newLink = document.createElement('a');
        newLink.href = '#advantages-section'; 
        newLink.textContent = 'Преимущества';
        navLinks.appendChild(newLink);
    }

  
    const advantagesSection = document.querySelector('.advantages-section');
    if (advantagesSection) {
        advantagesSection.id = 'advantages-section'; 
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            smoothScrollTo(targetElement);
        });
    });

});
ocument.addEventListener('DOMContentLoaded'), function() {
    function smoothScrollTo(targetElement) {
        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
document.addEventListener('DOMContentLoaded', function() {
    function smoothScrollTo(targetElement) {
        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
    const navLinks = document.querySelector('.nav-links');
    const reviewsLink = document.querySelector('a[href="#advantages-section"]');
    
    if (!reviewsLink && navLinks) {
        const newLink = document.createElement('a');
        newLink.href = '#advantages-section';
        newLink.textContent = 'Отзывы';
        navLinks.appendChild(newLink);
    }

    const advantagesSection = document.querySelector('.advantages-section');
    if (advantagesSection) {
        advantagesSection.id = 'advantages-section';
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            smoothScrollTo(targetElement);
        });
    })})}
    document.addEventListener('DOMContentLoaded', function() {
        function smoothScrollTo(targetElement) {
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
        const mainBuyButton = document.querySelector('.hero-content .cta-button');
        if (mainBuyButton) {
            mainBuyButton.addEventListener('click', function(e) {
                e.preventDefault();
                const promotionsSection = document.querySelector('#products-section');
                smoothScrollTo(promotionsSection);
            });
        }
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                smoothScrollTo(targetElement);
            });
        });
    });