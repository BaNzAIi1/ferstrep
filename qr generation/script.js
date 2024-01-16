const input = document.querySelector('input');
const btn = document.querySelector('.btn');
const qrCode = document.querySelector('#qr-code');
const qrCodeImg = document.querySelector('img');
const download = document.querySelector('.download');
btn.addEventListener('click', () => {
    btn.isDefaultNamespace = false;
    if (input.value.length < 1) return;
    if (!input.value) return;
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
    // qrCode.innerHTML = '';
    // qrCode.append(qrCodeImg);
});

download.addEventListener('click',  async () => {
    const response = await fetch(qrCodeImg.src);
    const blob = await response.blob();
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'qrcode.png';
    link.click();
})