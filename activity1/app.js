import {leftDiv} from "./info.js"
import{rightDiv} from "./img.js"

let myData ={
    title1 : "Tulip",
    title2 : "Tulips",
    par1 : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laudantium voluptates consectetur doloremque cupiditate perspiciatis porro quibusdam id nobis obcaecati earum dicta Repellendus recusandae quasi nisi eum vitae nesciunt corrupti",
    par2 : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, mollitia aliquam asperiores excepturi consectetur fugit beatae ut id magnam impedit nesciunt illum facilis laborum explicabo est debitis. Repellendus, laudantium minus.",
    buttonOne :"Contact Us",
    buttonTwo : "About Us",
    buttonThree : "News",
    buttonFour : "More",
    img : "tulips.jpg"
}
const {title1, title2, par1, par2, buttonOne, buttonTwo, buttonThree, buttonFour, img} = myData
let container = document.getElementById("container")


container.append(leftDiv(title1, title2, par1, par2, buttonOne, buttonTwo, buttonThree, buttonFour))
container.append(rightDiv(img))