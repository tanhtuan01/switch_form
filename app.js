let buttonAmt = 1

function changeStatus() {
    document.querySelector(".hf").style.animation = 'textFromRight 0.5s linear forwards'
    document.querySelector(".wb").style.animation = 'textFromLeft 0.5s linear forwards'
    document.querySelector(".box-right .right-content").style.animation = ''
    document.querySelector(".box-left .left-content").style.animation = ''
    document.querySelector(".hf").classList.toggle('hidden')
    document.querySelector(".ca").classList.toggle('hidden')
    document.querySelector(".wb").classList.toggle('hidden')
    document.querySelector(".si").classList.toggle('hidden')
    document.querySelector(".box-right .right-content").classList.toggle('bcr')
    document.querySelector(".box-left .left-content").classList.toggle('bcl')

    if (buttonAmt % 2 != 0) {
        document.querySelector(".slide").classList.add("slide-to-left")
        document.querySelector(".slide").classList.remove("slide-to-right")
        setTimeout(() => {
            document.querySelector(".box-right .right-content").style.animation = 'textFromRight 0.5s linear forwards'
        }, 200)


    } else {
        document.querySelector(".slide").classList.add("slide-to-right")
        document.querySelector(".slide").classList.remove("slide-to-left")
        setTimeout(() => {
            document.querySelector(".box-left .left-content").style.animation = 'textFromLeft 0.5s linear forwards'
        }, 200)
    }
    buttonAmt++

}
