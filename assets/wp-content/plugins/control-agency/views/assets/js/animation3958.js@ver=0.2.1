document.addEventListener("DOMContentLoaded", function () {
    controlAgencyImageAnimationInit();
    if (document.readyState === 'complete') {        
        controlAgencyObserveAnimations();
    } else {
        document.addEventListener('readystatechange', function() {
            if (document.readyState === 'complete') {                
                controlAgencyObserveAnimations();
            }
        });
    }
    
});

function controlAgencyImageAnimationInit() {
    
    // Select all image elements with the class 'ca-image-animation'
    var images = document.querySelectorAll('.ca-image-bg');
    images.forEach(function(img) {
        // Create a wrapper div
        var wrapper = document.createElement('div');
        wrapper.className = 'ca-image-bg-wrap';

        // Get the image's dimensions and src
        var imgWidth = img.width;
        var imgHeight = img.height;
        var imgSrc = img.src;

        // Set the wrapper's styles
        wrapper.style.width = imgWidth + 'px';
        wrapper.style.height = 'auto';
        wrapper.style.backgroundImage = 'url(' + imgSrc + ')';
        wrapper.style.backgroundSize = 'cover'; // Make sure the image covers the entire div
        wrapper.style.backgroundPosition = 'center'; // Center the background image

        // Check for and add data attributes to the wrapper
        ['data-ca-animation', 'data-ca-duration', 'data-ca-delay'].forEach(function(attr) {
            if (img.hasAttribute(attr)) {
                wrapper.setAttribute(attr, img.getAttribute(attr));                
                wrapper.classList.add('ca-'+ img.getAttribute(attr)); 
            }
        });

        // Insert the wrapper before the image
        img.parentNode.insertBefore(wrapper, img);

        // Move the image inside the wrapper
        wrapper.appendChild(img);

        // Hide the original image
        img.style.visibility = 'hidden';
        
    });

    
}

function controlAgencyObserveAnimations() {
    
    const elements = document.querySelectorAll('[data-ca-animation], .ca-image-animation-wrap');
    const options = {
        rootMargin: '0px',
        threshold: 0.5
    };   
    
    elements.forEach(function(element) {
        var animationName = element.getAttribute('data-ca-animation');
        if (animationName) {
            element.classList.add('ca-'+animationName);
        }
    });

    const observer = new IntersectionObserver(function(entries, observer) { 
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animationName = element.getAttribute('data-ca-animation');
                const animationDuration = element.getAttribute('data-ca-duration');
                const animationDelay = element.getAttribute('data-ca-delay');
                
                if (animationName) {
                    element.classList.add('ca-'+animationName);
                    element.classList.add('ca-animated');
                    element.style.animationName = animationName;
                    
                    if (animationDuration) {
                        element.style.animationDuration = animationDuration;
                    }
                    
                    if (animationDelay) {
                        element.style.animationDelay = animationDelay;
                    }
                }
                
                observer.unobserve(element);
            }
        });

        

    }, options);

    
    elements.forEach(element => {
        const animationDuration = element.getAttribute('data-ca-duration');
        const animationDelay = element.getAttribute('data-ca-delay');
        
        if (element.getAttribute('data-ca-animation')) {            
            observer.observe(element);
        }
        
    });
}
