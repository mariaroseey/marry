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
    par1 : "This is my painting in our art appreciation class. This artwork have an impact in life that's why I choose to paint it.",
    par2 : "This is a project in our Philippine History, we have an exhibit that time.",
    par3 : "This is during our final defense in Technopreneurship.",
    img1    : "ha.jpg",
    img2    : "he.jpg",
    img3    : "defense.jpg",    
    buttonTwo : "Learn More!",
    buttonThree : "Learn More!",
    buttonFour : "Learn More!" 

}

const {sect2, img1, img2, img3, par1, par2, par3,  buttonTwo, buttonThree, buttonFour} = sectionTwoData
let sectionTwo = document.getElementById("sectionTwo")

sectionOne.append(sectOneFunc(sect1, sect1par, buttonOne))
sectionOne.append(image(imgTop))
sectionTwo.append(sectTwoFunc(sect2, img1, img2, img3, par1, par2, par3,  buttonTwo, buttonThree, buttonFour))
