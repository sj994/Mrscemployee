
function draw() {
    const canvas = document.getElementById('canvas');
    var userinput="اسم المستخدم";
    const ctx = canvas.getContext('2d');
    let img = new Image();
    img.addEventListener("load", ()=>{
      ctx.drawImage(img,70,70,700,500);
    });
    img.src = "https://i.ibb.co/mN7xnT1/images.jpg";
    img.setAttribute('crossorigin', 'anonymous'); // works for me
    img.style.objectFit = "contain";
  }
  function username(){
    const userName = document.getElementById('username').value;
    const ctx = canvas.getContext('2d');
    ctx.font = '30px Cairo';
    ctx.fillText(userName, 350, 390);
    // document.getElementById().innerText=name.value;
  }
  function downloadImage() {
    const canvas = document.getElementById('canvas');
    const dataURL = canvas.toDataURL();
    const anchor = document.createElement('a');
    anchor.href = dataURL;
    anchor.download = "mrsc.jpg";
    anchor.click();
  }