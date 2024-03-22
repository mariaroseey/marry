import {leftDiv} from "./info.js"
import{rightDiv} from "./img.js"

let myData ={
    title1 : "Lotus",
    title2 : "(Nelumbo nucifera)",
    par1 : "Nelumbo nucifera, also known as sacred lotus, Indian lotus, or simply lotus, is one of two extant species of aquatic plant in the family Nelumbonaceae. It is sometimes colloquially called a water lily, though this more often refers to members of the family Nymphaeaceae.",
    par2 : "The Lotus is a plant that belongs to the Nelumbo genus, and it has been connected with purity, rebirth and divinity. The lotus flower symbolizes rising from a dark place into beauty and rebirth, as this is precisely how a lotus flower grows.",
    buttonOne :"Contact Us",
    buttonTwo : "About Us",
    buttonThree : "News",
    buttonFour : "More",
    img : "lo.jpg"
}
const {title1, title2, par1, par2, buttonOne, buttonTwo, buttonThree, buttonFour, img} = myData
let container = document.getElementById("container")


container.append(leftDiv(title1, title2, par1, par2, buttonOne, buttonTwo, buttonThree, buttonFour))
container.append(rightDiv(img))