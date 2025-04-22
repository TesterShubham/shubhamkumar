document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const percent = entry.target.getAttribute('data-percent');
                entry.target.style.width = percent;
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => observer.observe(bar));
});