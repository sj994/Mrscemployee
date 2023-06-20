

function draw() {
  const canvas = document.getElementById('canvas');
  var userinput="اسم المستخدم";
  const ctx = canvas.getContext('2d');
  let img = new Image();
  img.addEventListener("load", ()=>{
   // Draw the image at the center of the canvas
   ctx.drawImage(img,0, 0, 550, 600);
  });
  img.src = "https://i.ibb.co/mN7xnT1/images.jpg";
  img.setAttribute('crossorigin', 'anonymous'); // works for me
  img.style.objectFit = "cover";
}
function username(){
  const userName = document.getElementById('username').value;
  const ctx = canvas.getContext('2d');
  ctx.font = '30px Cairo';
  ctx.fillText(userName, 250, 500);
  // document.getElementById().innerText=name.value;
}
function downloadImage() {
  const canvas = document.getElementById('canvas');
  const dataURL = canvas.toDataURL();
  const anchor = document.createElement('a');
  anchor.href = dataURL;
  anchor.download = "mrsc.png";
  anchor.click();
}
