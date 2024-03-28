import { sectOneFunc } from "./info.js"
import {image} from "./img.js"
import { sectTwoFunc} from "./card.js"

let sectionOneData ={
    sect1 : "About Me",
    sect1par : "Hi! I'm Marry Rose Rulida.A 2nd year colleges student taking up Bachelor of Science in Information Technology at Gingoog City Colleges.I'm 19 yrs old and currently living in Brgy. Duka Medina Misamis Oriental. I'm  a curious and optimistic person who loves learning and solving problems. I enjoy working with others and believe in being kind and honest in all interactions.",
    imgTop : "mari.jpg",  
    buttonOne :"Contact Me",   
}

const {sect1,sect1par, imgTop, buttonOne} = sectionOneData
let sectionOne = document.getElementById("sectionOne")


let sectionTwoData ={
    sect2 : "ACHIEVEMENTS",
    par1 : "This artwork holds significance in my life, which is why I decided to paint it during our art appreciation class.",
    par2 : "This project is part of our study in Philippine History, where we organized an exhibit at that time.",
    par3 : "This occurred during our final presentation for Technopreneurship.",
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
