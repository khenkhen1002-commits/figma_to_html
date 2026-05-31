// Tìm nút bấm có id là "myButton"
const button = document.getElementById('myButton');

// Khi click vào nút thì hiện thông báo
button.addEventListener('click', () => {
    alert('Tuyệt vời! File JavaScript đã liên kết thành công rồi nè!');
});


const circle = document.getElementById('circle');
let mouseX = 0,
    mouseY = 0; // vị trí chuột
let circleX = 0,
    circleY = 0; // vị trí hiện tại của hình tròn
const speed = 0.1; // tốc độ dí theo (0.1 = chậm, 0.3 = nhanh hơn)

document.addEventListener('mousemove', (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

function animate() {
    // di chuyển dần dần về vị trí chuột
    circleX += (mouseX - circleX) * speed;
    circleY += (mouseY - circleY) * speed;

    circle.style.left = circleX + 'px';
    circle.style.top = circleY + 'px';

    requestAnimationFrame(animate);
}

animate();