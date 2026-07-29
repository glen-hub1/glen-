// =======================================
// The New Generation Website
// By Elijah Ombogo Ondieki
// =======================================

// -------------------------------
// Reading Progress Bar
// -------------------------------
const progressBar = document.createElement('div');
progressBar.style.position = 'fixed';
progressBar.style.top = '0';
progressBar.style.left = '0';
progressBar.style.height = '4px';
progressBar.style.width = '0%';
progressBar.style.background = '#d4af37';
progressBar.style.zIndex = '2000';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
const scrollTop = document.documentElement.scrollTop;
const scrollHeight =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const progress = (scrollTop / scrollHeight) * 100;
progressBar.style.width = progress + '%';

});

// -------------------------------
// Dark / Light Mode Button
// -------------------------------
const themeButton = document.createElement('button');
themeButton.textContent = '🌙';
themeButton.style.position = 'fixed';
themeButton.style.bottom = '20px';
themeButton.style.left = '20px';
themeButton.style.width = '50px';
themeButton.style.height = '50px';
themeButton.style.borderRadius = '50%';
themeButton.style.border = 'none';
themeButton.style.cursor = 'pointer';
themeButton.style.background = '#d4af37';
themeButton.style.color = '#111';
themeButton.style.fontSize = '20px';
themeButton.style.zIndex = '1000';

document.body.appendChild(themeButton);

themeButton.addEventListener('click', () => {
document.body.classList.toggle('light-mode');

if (document.body.classList.contains('light-mode')) {
    themeButton.textContent = '☀️';
} else {
    themeButton.textContent = '🌙';
}

});

// -------------------------------
// Daily Motivation Box
// -------------------------------
const quoteBox = document.createElement('div');
quoteBox.style.position = 'fixed';
quoteBox.style.top = '80px';
quoteBox.style.right = '20px';
quoteBox.style.maxWidth = '260px';
quoteBox.style.padding = '14px';
quoteBox.style.background = '#161616';
quoteBox.style.border = '1px solid #d4af37';
quoteBox.style.borderRadius = '12px';
quoteBox.style.color = '#f5f5f5';
quoteBox.style.zIndex = '1000';

const quotes = [
'Discipline creates freedom.',
'Your future is built by today’s choices.',
'Growth begins with honesty.',
'Consistency defeats talent when talent lacks discipline.',
'Never stop learning.',
'Purpose gives direction to life.',
'Resilience turns pain into power.',
'Small daily improvements create extraordinary results.'
];

const day = new Date().getDate();
quoteBox.innerHTML =
'<strong>Daily Motivation</strong><br><br>' +
quotes[day % quotes.length];

document.body.appendChild(quoteBox);

// -------------------------------
// Animate Chapter Cards
// -------------------------------
const cards = document.querySelectorAll('.chapter-card');

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.style.opacity = '1';
entry.target.style.transform = 'translateY(0)';
}
});
}, { threshold: 0.2 });

cards.forEach(card => {
card.style.opacity = '0';
card.style.transform = 'translateY(30px)';
card.style.transition = '0.6s ease';
observer.observe(card);
});

// -------------------------------
// Back To Top Button
// -------------------------------
const topButton = document.createElement('button');
topButton.textContent = '↑';
topButton.style.position = 'fixed';
topButton.style.bottom = '20px';
topButton.style.right = '20px';
topButton.style.width = '50px';
topButton.style.height = '50px';
topButton.style.borderRadius = '50%';
topButton.style.border = 'none';
topButton.style.cursor = 'pointer';
topButton.style.background = '#d4af37';
topButton.style.color = '#111';
topButton.style.fontSize = '22px';
topButton.style.display = 'none';
topButton.style.zIndex = '1000';

document.body.appendChild(topButton);

window.addEventListener('scroll', () => {
if (window.scrollY > 300) {
topButton.style.display = 'block';
} else {
topButton.style.display = 'none';
}
});

topButton.addEventListener('click', () => {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
});

// -------------------------------
// Welcome Message
// -------------------------------
window.addEventListener('load', () => {
console.log('Welcome to The New Generation Website');
console.log('Author: Elijah Ombogo Ondieki');
console.log('Kisii, Kenya | Kenya Highlands University');
});
