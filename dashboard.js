
// Add JavaScript functionality
document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', function() {
        const coffeeName = this.parentElement.querySelector('.coffee-name').textContent;
        alert(`You've ordered a ${coffeeName}! Your order has been added to the cart.`);
    });
});

// Logout functionality
document.querySelector('.logout-btn').addEventListener('click', function() {
    if(confirm('Are you sure you want to logout?')) {
        // In a real app, you would handle the logout process here
        alert('You have been logged out successfully!');
        // window.location.href = 'login.html';
    }
});
