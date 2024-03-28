
const sectTwoFunc = (sect2, img1, img2, img3, par1, par2, par3,  buttonTwo, buttonThree, buttonFour) => {
    let div = document.createElement("div")
    
    div.innerHTML = `<div class="container">
                        <div class="box">
                             
                            <img src="${img1}"></img> <br>
                            <p>${par1}</p> <br> <br> <br> <br>
                            <button>${buttonTwo}</button>
                        </div>
                        <div class="box">
                            <img src="${img2}"></img> <br>
                            <p>${par2}</p> <br>
                            <button>${buttonThree}</button>
                        </div>
                        <div class="box">
                            <img src="${img3}"></img> <br>
                            <p>${par3}</p> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
                            <button>${buttonFour}</button>
                    </div>
                    `
    return div
}
export {sectTwoFunc}