const leftDiv = (title1, title2, par1, par2, buttonOne, buttonTwo, buttonThree, buttonFour) => {
    let div = document.createElement("div")
    div.className = "leftClass"
    div.innerHTML = `<h1>${title1}</h1> 
                    <h1>${title2}</h1> 
                    <p>${par1}</p>
                    <p>${par2}</p>
                    <button>${buttonOne}</button>
                    <button>${buttonTwo}</button>
                    <button>${buttonThree}</button>
                    <button>${buttonFour}</button>
                    `
    return div
}
export {leftDiv}