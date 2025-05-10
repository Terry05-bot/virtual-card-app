function updateCard() {
    const name = document.getElementById('nameInput').value;
    const message = document.getElementById('messageInput').value;
  
    document.getElementById('cardName').textContent = name || "Your Name";
    document.getElementById('cardMessage').textContent = message || "Your message here";
  }
  
  function downloadAsImage() {
    html2canvas(document.getElementById("card")).then(canvas => {
      let link = document.createElement("a");
      link.download = "virtual_card.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  }
  
  function downloadAsPDF() {
    const { jsPDF } = window.jspdf;
    html2canvas(document.getElementById("card")).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 10, 10, 180, 120); // adjust size as needed
      pdf.save("virtual_card.pdf");
    });
  }
  
  document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (!file) return;
  
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = document.getElementById('uploadedImage');
      img.src = e.target.result;
      img.style.display = 'block';
    };
    reader.readAsDataURL(file);
  });

  function changeCardSize(size) {
    const card = document.getElementById('card');
    if (size === 'small') {
      card.style.width = '300px';
      card.style.height = '200px';
    } else if (size === 'medium') {
      card.style.width = '500px';
      card.style.height = '300px';
    } else if (size === 'large') {
      card.style.width = '700px';
      card.style.height = '400px';
    }
  }

  function shareOnTwitter() {
    const text = encodeURIComponent("Check out this awesome card I made!");
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank");
  }
  
  function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
  }

  document.getElementById('bgUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (!file) return;
  
    const reader = new FileReader();
    reader.onload = function(e) {
      const card = document.getElementById('card');
      card.style.backgroundImage = `url(${e.target.result})`;
      card.style.backgroundSize = 'cover';
      card.style.backgroundPosition = 'center';
    };
    reader.readAsDataURL(file);
  });
  function changeFontStyle(font) {
    const card = document.getElementById('card');
    card.style.fontFamily = font;
  }
  function changeFontColor(color) {
    document.getElementById('cardName').style.color = color;
    document.getElementById('cardMessage').style.color = color;
  }
      