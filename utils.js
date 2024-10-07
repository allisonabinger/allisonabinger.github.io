function changeOrbit(divID) {
    // Remove 'active' class from all divs
    var divs = document.querySelectorAll('.orbit');
    divs.forEach(function(div){
        div.classList.remove('active');
    });

    // Add 'active' class to the selected div
    var selectedDiv = document.getElementById(divID);
    if (selectedDiv) {
        selectedDiv.classList.add('active');
    }

    // Remove 'active' class from all nav links
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.classList.remove('active');
    });

    // Add 'active' class to the clicked nav link
    var activeNavLink = document.querySelector(`[aria-controls="${divID}"]`);
    if (activeNavLink) {
        activeNavLink.classList.add('active');
    }
}

function smallScreen(threshhold) {
    const sections = document.querySelectorAll('.non-mobile');
    
    function getViewport() {
        if (window.innerWidth < threshhold) {
            sections.forEach(section => section.classList.add('hidden'));
            
        } else {
            sections.forEach(section => section.classList.remove('hidden'));
        }
    }
    getViewport();

    window.addEventListener('resize', getViewport)
}

document.addEventListener('DOMContentLoaded', function(){
    changeOrbit('langapp-orbit');
    smallScreen(1075)
});
