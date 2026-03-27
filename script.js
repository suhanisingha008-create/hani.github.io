document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', function() {
        alert('You clicked: ' + this.textContent);
    });

    box.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            alert('You activated: ' + this.textContent);
        }
    });
});