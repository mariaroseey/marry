const rightDiv = (img) => {
    let div = document.createElement("div")
    div.className = "rightClass"
    div.innerHTML = `<img src="${img}">`
    return div
}
export {rightDiv}