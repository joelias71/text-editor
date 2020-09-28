function updateText() {
    const text = document.getElementById('text-input').value
    document.getElementById('text-output').innerText = text
}

function makeBold(elem) {
    elem.classList.toggle('active')
    document.getElementById('text-output').classList.toggle('bold')
}

function makeItalic(elem) {
    elem.classList.toggle('active')
    document.getElementById('text-output').classList.toggle('italic')
}

function makeUnderline(elem) {
    elem.classList.toggle('active')
    //easy way use toggle
    //document.getElementById('text-output').classList.toggle('underline')
    const formattedText = document.getElementById('text-output')
    if(formattedText.classList.contains('underline')) {
        formattedText.classList.remove('underline')
    } else {
        formattedText.classList.add('underline')
    }

}

function alignText(elem, alignType) {
    document.getElementById('text-output').style.textAlign = alignType
    let btnList = document.getElementsByClassName('align')
    for(btn of btnList) {
        btn.classList.remove('active')
    }
    elem.classList.add('active')
}