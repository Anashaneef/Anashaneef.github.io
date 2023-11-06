// Function to set colour style according to user preference
function setColorPicked(styleTitle) {
    const links = document.querySelectorAll('link[rel*="stylesheet"]');
    let styleFound = false;

    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        if (link.getAttribute('title')) {
            link.disabled = true;
            if (link.getAttribute('title') === styleTitle) {
                link.disabled = false;
                styleFound = true;
            }
        }
    }

    // If a colour style is not found, use the default colour style
    if (!styleFound) {
        document.querySelector('link[rel="stylesheet"]').disabled = false;
    }

    // Save user colour preferences in local storage
    localStorage.setItem('preferredColor', styleTitle);
}

// Check the saved colour preferences and set the colour style when the page loads
window.addEventListener('load', () => {
    const preferredColor = localStorage.getItem('preferredColor');
    if (preferredColor) {
        setColorPicked(preferredColor);
    }
});

// Call setColourPicked when the page loads
setColorPicked(localStorage.getItem('preferredColor'));