// Script to toggle light/dark theme
const themeToggle = document.getElementById('themeToggle');

// Add event listener for theme toggle button
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    // Update button text based on theme
    if (document.body.classList.contains('dark-theme')) {
        themeToggle.textContent = '切換至亮色主題';
    } else {
        themeToggle.textContent = '切換至深色主題';
    }
});

// Script to change input field background color based on input length
const inputField = document.getElementById('inputField');

inputField.addEventListener('input', () => {
    if (inputField.value.length > 5) {
        inputField.style.backgroundColor = '#ff91a4'; // 顏色變為粉紅
    } else {
        inputField.style.backgroundColor = '#fff'; // 還原背景顏色
    }
});
function submitRating(ratingId) {
    var rating = document.getElementById(ratingId).value;
    document.getElementById("ratingResult" + ratingId.charAt(ratingId.length - 1)).innerHTML = "您的評分是：" + rating + " 星";
}
