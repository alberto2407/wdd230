// Banner
const banner = document.getElementById('banner');
const closeBtn = document.getElementById('closeBtn');

const current_date = new Date();
const dayOfWeek = current_date.getDay();
if (dayOfWeek >= 1 && dayOfWeek <= 3) {
    banner.style.display = 'block';
}

closeBtn.addEventListener('click', () => {
    banner.style.display = 'none';
});