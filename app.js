document.querySelector('.newsletter form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const emailInput = this.querySelector('input[type="email"]');
    const messageDiv = document.createElement('div');
    messageDiv.style.marginTop = '10px'; 

   
    if (this.lastChild === messageDiv) {
        this.removeChild(this.lastChild);
    }

    if (!emailInput.value) {
       
        messageDiv.textContent = 'Please enter an email address.';
        messageDiv.style.color = 'red'; 
        this.appendChild(messageDiv);
    } else if (!emailInput.checkValidity()) {
       
        messageDiv.textContent = 'Please enter a valid email address.';
        messageDiv.style.color = 'red'; 
        this.appendChild(messageDiv);
    } else {
       
        console.log('Subscribing email:', emailInput.value); 

        
        messageDiv.textContent = 'Thank you for subscribing!';
        messageDiv.style.color = 'green';
        this.appendChild(messageDiv);

        emailInput.value = ''; 
    }
});

