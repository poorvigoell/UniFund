document.getElementById('transactionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the selected cryptocurrency and amount
    const crypto = document.getElementById('cryptoSelect').value;
    const amount = document.getElementById('amountInput').value;

    // Show confirmation message
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.classList.remove('hidden');
    confirmationMessage.innerHTML = `You have confirmed the transfer of ${amount} ${crypto}.`;
    
    // Reset form fields
    this.reset();
});
