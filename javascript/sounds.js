function hover(){
    var audio = new Audio
    audio.src = '../sounds/select.wav'
    audio.play().catch(e => alert("Error" + e.message))
}
document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a')
    links.forEach(link => {
        link.addEventListener('mouseover', hover)
    })
})
