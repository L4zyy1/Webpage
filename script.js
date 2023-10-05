"use strict"

/* 
    selectors: 
    - document.getElementById("id")
    - document.querySelector("#id")

    references to elements:
    - let referencevariable = document.getElementById("id")

    event listeners:
    - element.addEventListener()
    -click, change, focus, blur, submit,...

    coontent:
    - element.innerText //only numbers and texts
    - element.innerHTML

    attributes:
    - element.attribute

    neww elements:
    let referencevariable = document.createElement("element")
    element.appendChild(newelement)
*/

//1. to access elements and their attributes on the web page (DOM = Document Object Model)
//document.getElementById("id") or document.querySelector("#id")

//alert(document.getElementById("today").innertext)
//document.querySelector("#today").innertext = "4th October 2023"
let cel = document.getElementById("celsius")
let sta = document.getElementById("station")

document.querySelector("#today").innertext = new Date().toLocaleDateString("fi")
let link = document.createElement("a")
link.style.color="red"
link.href = "https://novia.fi"
link.target = "_blank"
link.innerText = "Novia"
//document.getElementById("body").appendChild(link)
//document.getElementById("body").insertBefore(link,document.getElementById("today"))

//2. adding events
//events: click, change, focus, blur, submit

document.getElementById("add").addEventListener("click", () => {
    //3. accessing attributes
    let c = parseFloat(cel.value)
    if (c <= -50 || c >= 50) {
        alert("Illegal celsius value")
    }
    else {
        let s = sta.value
        let k = c + 273.15
        let f = (c* 1.8 + 32).toFixed(2)
        //4. updating elements
        document.getElementById("kelvin").innertext = k
        document.getElementById("fahrenheit").innertext = f
        let color="red"
        document.getElementById("image").src = "./images/hot.jpg"
        if (c < 0) {
            color="blue"
            document.getElementById("image").src = "./images/cold.jpg"
        }
        else if (c < 20) {
            color="orange"
            document.getElementById("image").src = "./images/warm.jpg"
        }
        document.getElementById("kelvin").style.color=color
        document.getElementById("fahrenheit").style.color=color
        
        document.getElementById("measures").innerHTML =+ "<li>" + s + ": " + c + "°C</li>"
        //alert("you clicked me")
    }
})

document.getElementById("station").addEventListener("change", () => {
    document.getElementById("currentstation").innerText = sta.value
    //alert("you selected a station")
})

cel.addEventListener("focus", () => {
    cel.style.backgroundColor="yellow"
    //alert("celsius has focus")
})

cel.addEventListener("blur", () => {
    cel.style.backgroundColor="white"
    //alert("celsius lost focus")
}) 

document.getElementById("form").addEventListener("submit", (e) => { //buttons are not submitted but forms are!!
    //e.preventDefault()
    alert("submitting...")
    //normal submitting code...
})

