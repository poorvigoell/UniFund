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




//how it works
document.getElementById('closeHowItWorks').addEventListener('click', function() {
    window.close(); // Closes the current window (if opened as a new window)
});
