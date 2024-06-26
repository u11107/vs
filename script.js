document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

document.getElementById('contactForm')
    .addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('responseMessage')
        .textContent = "Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.";
    this.reset();
});
