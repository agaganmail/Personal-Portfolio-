document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelectorAll('.content-section').forEach(section => {
                section.style.display = 'none';
            });

            document.querySelector(this.getAttribute('href')).style.display = 'flex';

            document.querySelectorAll('a.nav-link').forEach(link => {
                link.classList.remove('active');
            });

            this.classList.add('active');
        });
    });

    // Initially hide all sections except home
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });

    document.querySelector('#home').style.display = 'flex';
});
