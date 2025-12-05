function hover(){
    var audio = new Audio
    audio.src = '../sounds/select.wav'
    audio.play().catch(e => alert("Error" + e.message))
}

function click(){
    var audio = new Audio
    audio.src = '../sounds/done.wav'
    audio.play()
}
document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a')
    links.forEach(link => {
        link.addEventListener('mouseover', hover)
        link.addEventListener('click', click)
    })
})
