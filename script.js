document.getElementById('add-to-cart-btn').addEventListener('click', function() {
    const notification = document.getElementById('cart-notification');
    notification.classList.remove('hidden');
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 3000);
});
