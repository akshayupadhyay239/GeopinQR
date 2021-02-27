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
  let dataURL = qrContainerEl.firstChild.toDataURL();

  let buttonHTML = `<a href="${dataURL}" target="_blank" download="image.png">Download QR</a>`;

  qrContainerEl.insertAdjacentHTML("afterend", buttonHTML);
}
