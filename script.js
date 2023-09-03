const box = document.getElementById("box")

const left = [
    "533px",
    "604px",
    "221px",
    "140px",
    "385px",
    "601px",
    "531px",
    "132px",
    "265px",
    "321px",
]
const leftIndex = 0

const tops = [
    "202px",
    "605px",
    "220px",
    "600px",
    "312px",
    "612px",
    "312px",
    "448px",
    "345px",
    "553px",
]
const topIndex = 0

box.addEventListener("mouseover", ()=>{

    const randomLeft = left[Math.floor(Math.random()*left.length)]

    const randomRight = tops[Math.floor(Math.random()*tops.length)]

    box.style.position = "absolute"
    box.style.top = randomLeft
    box.style.right = randomRight
    leftIndex++
    topIndex++
})