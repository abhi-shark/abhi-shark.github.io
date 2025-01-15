//Contact Form Javascript to send an email to my inbox

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    emailjs.sendForm('service_484chpm', 'template_31s2ibx', this)
        .then(() => {
            console.log('SUCCESS!');
            // Clear form or show success message
        }, (error) => {
            console.log('FAILED...', error);
            // Show error message
        });
});


//Event listener for clicks on the timeline cards
//to highlight them for mobile users

document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove 'selected' class from all cards
            projectCards.forEach(c => c.classList.remove('selected'));
            
            // Add 'selected' class to clicked card
            card.classList.add('selected');
        });
    });
});