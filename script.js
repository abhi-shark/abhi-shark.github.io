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
