// Danh sách số để quay
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
    50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66
];

let history = [];
let lotteryInterval;

// Khởi tạo sự kiện khi nhấn nút "Quay số"
document.getElementById('start-button').addEventListener('click', startLottery);

function startLottery() {
    if (numbers.length === 0) {
        document.getElementById('random-number').innerText = 'Không còn số để quay!';
        return;
    }

    // Thêm hiệu ứng khi quay số
    const randomNumberElement = document.getElementById('random-number');
    randomNumberElement.classList.add('animate');

    // Xoay qua các số
    let index = 0;
    lotteryInterval = setInterval(() => {
        randomNumberElement.innerText = numbers[index];
        index = (index + 1) % numbers.length;
    }, 100); // 100ms giữa các lần hiển thị số

    // Sau 3 giây, dừng việc quay số và hiển thị số cuối cùng
    setTimeout(() => {
        clearInterval(lotteryInterval);
        randomNumberElement.classList.remove('animate');
        getRandomNumber();
    }, 3000); // Thay đổi thời gian quay số ở đây
}

function getRandomNumber() {
    if (numbers.length === 0) {
        document.getElementById('random-number').innerText = 'Không còn số để quay!';
        return;
    }

    // Chọn một số ngẫu nhiên từ mảng và loại bỏ số đó khỏi mảng
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const randomNumber = numbers[randomIndex];
    document.getElementById('random-number').innerText = randomNumber;
    addToHistory(randomNumber);

    // Loại bỏ số đã quay khỏi mảng
    numbers.splice(randomIndex, 1);

    // Phát âm thanh quay số
    const audio = new Audio('fanfare-winner.mp3');
    audio.play();
}

function addToHistory(number) {
    history.push(number);
    const historyList = document.getElementById('history-list');
    const li = document.createElement('li');
    li.textContent = number;
    historyList.appendChild(li);
}