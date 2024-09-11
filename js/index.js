try {
    const scrollableContainer = document.getElementById('main-body');
    const firstSection = document.getElementById('first-section');
    const secondSection = document.getElementById('second-section');
    const thirdSection = document.getElementById('third-section');
    const headerBg = document.getElementsByClassName('illusion-header-background')[0];
    scrollableContainer.addEventListener('scroll', (event) => {
        const scrollPercentage = scrollableContainer.scrollTop / (scrollableContainer.scrollHeight - scrollableContainer.offsetHeight);
        document.body.style.setProperty(
            '--scroll-bs',
            scrollPercentage
        );
        const firstSectionTopOffset = firstSection.getBoundingClientRect().top;
        const mainToHeaderPercentage = ((windowWidthPx) => {
            if (windowWidthPx >= 1025) return 0.73
            if (1025 > windowWidthPx && windowWidthPx > 768) return 0.75
            if (768 >= windowWidthPx) return 0.82
        })(window.innerWidth)
        document.body.style.setProperty(
            '--scroll-header-bs',
            (window.innerHeight - firstSectionTopOffset) / (window.innerHeight * mainToHeaderPercentage)
        );
        const isFirstSectionOverlap = parseInt(firstSection.getBoundingClientRect().top) <= parseInt(headerBg.getBoundingClientRect().bottom)
            && parseInt(firstSection.getBoundingClientRect().bottom) >= parseInt(headerBg.getBoundingClientRect().bottom);
        const isSecondSectionOverlap = parseInt(secondSection.getBoundingClientRect().top) <= parseInt(headerBg.getBoundingClientRect().bottom)
            && parseInt(secondSection.getBoundingClientRect().bottom) >= parseInt(headerBg.getBoundingClientRect().bottom);
        const isThirdSectionOverlap = parseInt(thirdSection.getBoundingClientRect().top) <= parseInt(headerBg.getBoundingClientRect().bottom)
            && parseInt(thirdSection.getBoundingClientRect().bottom) >= parseInt(headerBg.getBoundingClientRect().bottom);
        if (isFirstSectionOverlap || isSecondSectionOverlap || isThirdSectionOverlap) {
            headerBg.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
        } else {
            headerBg.style.boxShadow = null
        }
    }, false);
} catch (error) {
    console.log(error);
}