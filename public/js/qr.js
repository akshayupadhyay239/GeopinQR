function link(){
    const baseLink = "http://maps.google.com/maps?q="
    var lat = document.getElementById('Lat').value
    var long = document.getElementById('Long').value
    const link = baseLink+lat+","+long
    var linkdiv = document.getElementById("link")
    linkdiv.href = link
}