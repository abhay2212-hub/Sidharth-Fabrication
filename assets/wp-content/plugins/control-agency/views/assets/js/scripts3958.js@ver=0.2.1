function controlAgency_loadAllImages() {
    const images = document.querySelectorAll('img[data-src]');

    images.forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        img.addEventListener('load', function() {
            img.classList.add('ca-lazy-loaded');
        });
    });
}

function controlAgency_addClassToActiveParents() {
    document.querySelectorAll('.nav-item').forEach(function(navItem) {
        var dropdownMenu = navItem.querySelector('.dropdown-menu');
        if (dropdownMenu) {
            var activeLink = dropdownMenu.querySelector('a.active');
            if (activeLink) {
                navItem.querySelector('a').classList.add('active');
            }
        }
    });
}




const observer = new MutationObserver(controlAgency_addClassToActiveParents);
observer.observe(document, { childList: true, subtree: true });
// Initial call in case the elements are already present
controlAgency_addClassToActiveParents();


// Lazy load
document.addEventListener("DOMContentLoaded", function () {
    if (document.readyState === 'complete') {
        controlAgency_loadAllImages();
    } else {
        document.addEventListener('readystatechange', function() {
            if (document.readyState === 'complete') {
                controlAgency_loadAllImages();
            }
        });
    }
    
});




