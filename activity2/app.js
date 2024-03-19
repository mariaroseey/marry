import { sectOneFunc } from "./info.js"
import {image} from "./img.js"
import { sectTwoFunc} from "./card.js"

let sectionOneData ={
    sect1 : "Mari",
    sect1par : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laudantium voluptates consectetur doloremque cupiditate perspiciatis porro quibusdam id nobis obcaecati earum dicta Repellendus recusandae quasi nisi eum vitae nesciunt corrupti",
    imgTop : "mari.jpg",  
    buttonOne :"Contact Me",   
}

const {sect1,sect1par, imgTop, buttonOne} = sectionOneData
let sectionOne = document.getElementById("sectionOne")


let sectionTwoData ={
    sect2 : "PROJECT COMPLETED",
    par1 : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, mollitia aliquam asperiores excepturi consectetur fugit beatae ut id magnam impedit nesciunt illum facilis laborum explicabo est debitis. Repellendus, laudantium minus.",
    par2 : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, mollitia aliquam asperiores excepturi consectetur fugit beatae ut id magnam impedit nesciunt illum facilis laborum explicabo est debitis. Repellendus, laudantium minus.",
    par3 : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, mollitia aliquam asperiores excepturi consectetur fugit beatae ut id magnam impedit nesciunt illum facilis laborum explicabo est debitis. Repellendus, laudantium minus.",
    img1    : "download.jpg",
    img2    : "download.jpg",
    img3    : "download.jpg",    
    buttonTwo : "Learn More",
    buttonThree : "Learn More",
    buttonFour : "Learn More" 

}

const {sect2, img1, img2, img3, par1, par2, par3,  buttonTwo, buttonThree, buttonFour} = sectionTwoData
let sectionTwo = document.getElementById("sectionTwo")

sectionOne.append(sectOneFunc(sect1, sect1par, buttonOne))
sectionOne.append(image(imgTop))
sectionTwo.append(sectTwoFunc(sect2, img1, img2, img3, par1, par2, par3,  buttonTwo, buttonThree, buttonFour))
