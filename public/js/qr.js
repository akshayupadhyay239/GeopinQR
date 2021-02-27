function link() {
  const baseLink = "http://maps.google.com/maps?q=";
  var lat = document.getElementById("Lat").value;
  var long = document.getElementById("Long").value;
  const link = baseLink + lat + "," + long;
  var linkdiv = document.getElementById("link");
  linkdiv.href = link;

  //Generate QR
  let qrContainerEl = document.getElementById("qrimg");
  qrContainerEl.innerHTML = "";
  let qrCode = new QRCode(qrContainerEl);
  qrCode.makeCode(link);

  //Download Button
  // let dataURL = qrContainerEl.firstChild.toDataURL();
  let dataURL;

  window.scrollTo(0, 0);
  html2canvas(document.querySelector(".qr-template"), {
    height: 487.35,
    width: 316,
  }).then(function (canvas) {
    btnDownload.setAttribute("href", canvas.toDataURL("image/png", 0.9));
  });

  let btnDownload = document.querySelector(".button-download");
  btnDownload.classList.remove("hidden");
}
