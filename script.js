// Get modal element
const modal = document.getElementById('walletModal');

// Get open modal button
const openModalBtn = document.getElementById('openModal');

// Get close button
const closeModalBtn = document.getElementById('closeModal');

// Listen for open click
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Listen for close click
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Listen for outside click
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


// Handle wallet ID form submission
document.getElementById('startNow').addEventListener('click', () => {
    window.location.href = 'enter-wallet-id.html';
});



// Sample transaction data for demonstration
const transactions = [
    { date: '2024-09-20', amount: '0.5 ETH', status: 'Completed', id: 'tx12345' },
    { date: '2024-09-15', amount: '1.2 ETH', status: 'Pending', id: 'tx12346' },
    { date: '2024-09-10', amount: '0.75 ETH', status: 'Failed', id: 'tx12347' },
    // You can add more transactions here
];

// Get the transactions section
const transactionsSection = document.getElementById('transactionsSection');

// Get the transactions button
const transactionsBtn = document.querySelector('.transactions-btn');

// Listen for click on transactions button
transactionsBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    // Toggle the display of the transactions section
    if (transactionsSection.style.display === 'none' || transactionsSection.style.display === '') {
        transactionsSection.style.display = 'block';
    } else {
        transactionsSection.style.display = 'none';
    }
});


// Function to simulate going to the wallet home page after entering Wallet ID
function enterWalletId() {
    const walletIdInput = document.getElementById('walletIdInput'); // Replace with your input ID
    const walletId = walletIdInput.value; // Get the wallet ID from the input
    localStorage.setItem('walletId', walletId); // Store it in local storage
    window.location.href = 'wallet-home.html'; // Redirect to the wallet home page
}

// On the wallet home page, retrieve and display the wallet ID
document.addEventListener('DOMContentLoaded', () => {
    const walletId = localStorage.getItem('walletId');
    if (walletId) {
        document.getElementById('walletId').textContent = walletId; // Display the wallet ID
    }
});

document.getElementById('startNow').addEventListener('click', enterWalletId);


// Placeholder functions for button actions
function makeTransaction() {
    alert('Redirecting to the transaction page...');
    // Implement the transaction logic or navigation here
}

function viewTransactions() {
    alert('Redirecting to view transactions...');
    // Implement the view transactions logic or navigation here
}

function checkStatus() {
    alert('Checking status...');
    // Implement the check status logic or navigation here
}

function logout() {
    localStorage.removeItem('walletId'); // Clear the wallet ID
    window.location.href = 'index.html'; // Redirect to the home page
}



document.getElementById('setPasswordBtn').addEventListener('click', function() {
    const password = document.getElementById('walletPassword').value;
    const reenterPassword = document.getElementById('reenterPassword').value;

    if (password && reenterPassword) {
        if (password === reenterPassword) {
            const walletId = generateWalletId();
            // Redirect to the wallet created confirmation page with the wallet ID
            window.location.href = `wallet_created.html?walletId=${walletId}`; // Ensure this matches the file name
        } else {
            document.getElementById('passwordMessage').innerText = 'Passwords do not match.';
        }
    } else {
        document.getElementById('passwordMessage').innerText = 'Please enter both passwords.';
    }
});

// Function to generate a random wallet ID (for demonstration)
function generateWalletId() {
    return '0x' + Math.random().toString(16).slice(2, 42); // Simulated wallet ID
}

<button onclick="location.href='enter-wallet-id.html'">Next</button>


//profile
// Get the modal and button elements
const profileModal = document.getElementById('profileModal');
const profileBtn = document.getElementById('profileBtn');
const closeProfileModal = document.getElementById('closeProfileModal');

// Open the modal when the Profile button is clicked
profileBtn.addEventListener('click', function() {
    profileModal.style.display = 'block';
});

// Close the modal when the close button is clicked
closeProfileModal.addEventListener('click', function() {
    profileModal.style.display = 'none';
});

// Close the modal if the user clicks outside the modal content
window.addEventListener('click', function(event) {
    if (event.target === profileModal) {
        profileModal.style.display = 'none';
    }
});





 



