// ターゲットの日時を2024年6月1日に設定
const targetTime = new Date('2024-05-26T22:45:00');

// タイマーの更新と表示を行う関数
function updateTimer() {
    const now = new Date();
    const timeDiff = targetTime - now;

    // 残り時間を計算
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // 残り時間を表示
    document.getElementById('days').textContent = padZero(days);
    document.getElementById('hours').textContent = padZero(hours);
    document.getElementById('minutes').textContent = padZero(minutes);
    document.getElementById('seconds').textContent = padZero(seconds);

    // タイマーが0になったら終了
    if (timeDiff <= 0) {
        clearInterval(timerInterval);
        document.getElementById('timer').textContent = "終了しました！";
    }
}

// タイマーを1秒ごとに更新
const timerInterval = setInterval(updateTimer, 1000);

// ゼロパディングのための関数
function padZero(num) {
    return (num < 10 ? '0' : '') + num;
}

// 初回表示のためにupdateTimerを実行
updateTimer();