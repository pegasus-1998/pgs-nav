function copyStr(str) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(str)
        return
    }
    const eInput = document.createElement('input')
    eInput.value = str
    document.body.appendChild(eInput)
    eInput.select()
    document.execCommand('Copy')
    eInput.remove()
}

export {
    copyStr 
}