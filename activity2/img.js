const image = (imgTop) => {
    let div = document.createElement("div")
    div.className = "profile"
    div.innerHTML = `<img src="${imgTop}">
                     
    `
    return div
}
export {image}
