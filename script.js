// ===============================
// The New Generation Website
// By Elijah Ombogo Ondieki
// ===============================

// -------------------------------
// Reading Progress Bar
// -------------------------------
const progressBar = document.createElement('div');
progressBar.id = 'progress-bar';
progressBar.style.position = 'fixed';
progressBar.style.top = '0';
progressBar.style.left = '0';
progressBar.style.width = '0%';
progressBar.style.height = '4px';
progressBar.style.background = '#d4af37';
progressBar.style.zIndex = '2000';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
const scrollTop = document.documentElement.scrollTop;
const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
const progress = (scrollTop / scrollHeight) * 100;
progressBar.style.width = progress + '%';
});

// -------------------------------
// Dark / Light Mode Toggle
// -------------------------------
const themeButton = document.createElement('button');
themeButton.innerHTML = '🌙';
themeButton.style.position = 'fixed';
themeButton.style.bottom = '20px';
themeButton.style.left = '20px';
themeButton.style.width = '50px';
themeButton.style.height = '50px';
themeButton.style.borderRadius = '50%';
themeButton.style.border = 'none';
themeButton.style.background = '#d4af37';
themeButton.style.color = '#111';
themeButton.style.fontSize = '20px';
themeButton.style.cursor = 'pointer';
themeButton.style.zIndex = '1000';
document.body.appendChild(themeButton);

themeButton.addEventListener('click', () => {
document.body.classList.toggle('light-mode');

if (document.body.classList.contains('light-mode')) {
    themeButton.innerHTML = '☀️';
    localStorage.setItem('theme', 'light');
} else {
    themeButton.innerHTML = '🌙';
    localStorage.setItem('theme', 'dark');
}

});

if (localStorage.getItem('theme') === 'light') {
document.body.classList.add('light-mode');
themeButton.innerHTML = '☀️';
}

// -------------------------------
// Daily Motivational Quote
// -------------------------------
const quotes = [
'Discipline creates freedom.',
'Your future is built by today’s choices.',
'Growth begins with honesty.',
'Consistency defeats talent when talent lacks discipline.',
'Never stop learning.',
'Purpose gives direction to life.',
'Resilience turns pain into power.',
'Small daily improvements create extraordinary results.',
'Protect your peace and protect your future.',
'Be the person your younger self would be proud of.'
];

const quoteBox = document.createElement('div');
quoteBox.id = 'quote-box';
quoteBox.style.position = 'fixed';
quoteBox.style.top = '80px';
quoteBox.style.right = '20px';
quoteBox.style.maxWidth = '280px';
quoteBox.style.padding = '15px';
quoteBox.style.background = '#161616';
quoteBox.style.border = '1px solid #d4af37';
quoteBox.style.borderRadius = '12px';
quoteBox.style.color = '#f5f5f5';
quoteBox.style.fontSize = '14px';
quoteBox.style.zIndex = '1000';

const day = new Date().getDate();
quoteBox.innerHTML = "<strong>Daily Motivation</strong><br><br>${quotes[day % quotes.length]}";

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
topButton.innerHTML = '↑';
topButton.style.position = 'fixed';
topButton.style.bottom = '20px';
topButton.style.right = '20px';
topButton.style.width = '50px';
topButton.style.height = '50px';
topButton.style.borderRadius = '50%';
topButton.style.border = 'none';
topButton.style.background = '#d4af37';
topButton.style.color = '#111';
topButton.style.fontSize = '22px';
topButton.style.cursor = 'pointer';
topButton.style.display = 'none';
topButton.style.zIndex = '1000';

document.body.appendChild(topButton);

window.addEventListener('scroll', () => {
if (window.scrollY > 400) {
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
// Copy Payment Details
// -------------------------------
function addCopyButtons() {

const supportBox = document.querySelector('.support-box');
if (!supportBox) return;

const paymentData = [
    { label: 'M-Pesa', value: '0723429627' },
    { label: 'PayPal', value: 'elijahombogo2004@gmail.com' },
    { label: 'Binance ID', value: '1085789642' },
    { label: 'Airtel Money', value: '0104882369' },
    { label: 'Paybill', value: '542542' },
    { label: 'Account', value: '02009711006050' }
];

supportBox.innerHTML = '';

paymentData.forEach(item => {

    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.justifyContent = 'space-between';
    row.style.alignItems = 'center';
    row.style.margin = '10px 0';

    const text = document.createElement('span');
    text.textContent = `${item.label}: ${item.value}`;

    const button = document.createElement('button');
    button.textContent = 'Copy';
    button.style.background = '#d4af37';
    button.style.border = 'none';
    button.style.padding = '6px 12px';
    button.style.borderRadius = '8px';
    button.style.cursor = 'pointer';

    button.addEventListener('click', () => {
        navigator.clipboard.writeText(item.value);
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = 'Copy';
        }, 1500);
    });

    row.appendChild(text);
    row.appendChild(button);

    supportBox.appendChild(row);
});

}

addCopyButtons();

// -------------------------------
// Reading Time Estimate
// -------------------------------
const sections = document.querySelectorAll('.section');

sections.forEach(section => {

const text = section.innerText;
const words = text.trim().split(/\\s+/).length;
const minutes = Math.max(1, Math.ceil(words / 200));

const time = document.createElement('div');
time.style.color = '#d4af37';
time.style.fontSize = '14px';
time.style.marginTop = '10px';
time.style.textAlign = 'center';
time.innerHTML = `⏱ Estimated reading time: ${minutes} min`;

section.appendChild(time);

});

// -------------------------------
// Welcome Message
// -------------------------------
window.addEventListener('load', () => {
console.log('Welcome to The New Generation Project');
console.log('Author: Elijah Ombogo Ondieki');
console.log('Kisii, Kenya | Kenya Highlands University');
});
