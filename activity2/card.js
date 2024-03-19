
const sectTwoFunc = (sect2, img1, img2, img3, par1, par2, par3,  buttonTwo, buttonThree, buttonFour) => {
    let div = document.createElement("div")
    
    div.innerHTML = `<div class="container">
                        <div class="box">
                             
                            <img src="${img1}"></img>
                            <p>${par1}</p>
                            <button>${buttonTwo}</button>
                        </div>
                        <div class="box">
                            <img src="${img2}"></img>
                            <p>${par2}</p>
                            <button>${buttonThree}</button>
                        </div>
                        <div class="box">
                            <img src="${img3}"></img>
                            <p>${par3}</p>
                            <button>${buttonFour}</button>
                    </div>
                    `
    return div
}
export {sectTwoFunc}