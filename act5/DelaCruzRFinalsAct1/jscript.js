
const var1 = document.getElementById("rain")
console.log(var1)

const var2 = document.getElementById("h2")
console.log(var2)

const var3 = document.getElementById("BSIT")
console.log(var3)


const btn1 = document.getElementById("Button1")
console.log(btn1)

const btn2 = document.getElementById("Button2")
console.log(btn2)

const input = document.getElementById("input1")
console.log(input)

const btn3 = document.getElementById("Button3")
console.log(btn3)

btn1.addEventListener(
    "click", function(){
        var1.innerHTML="CLICKKKKKKK"
        var1.style.backgroundColor="green"
    }
)


btn2.addEventListener(
    "dblclick", function(){
        var1.innerHTML="DOUBLE CLICKKKKKK"
        var1.style.backgroundColor="orange"
    }
)


btn3.addEventListener(
    "mousedown", function(){
        var2.innerHTML= "Mouse is being pressed"
        var2.style.backgroundColor="red"
        var2.style.color="white"
    }
)

btn3.addEventListener(
    "mouseup", function(){
        var2.innerHTML= "Mouse is not being pressed"
        var2.style.backgroundColor="cornflowerblue"
        var2.style.color="white"
    }
)


input.addEventListener(
    "focus", function(){
        input.style.backgroundColor="green"
        input.style.color="black"
    }
)
input.addEventListener(
    "blur", function(){
        input.style.backgroundColor="White"
    }
)

input.addEventListener(
    "change", function(){
        var1.innerHTML="Hello:" + input.value + "!"
    }
)

input.addEventListener(
    "input", function(){
        var2.innerHTML= input.value + "!"
        var2.style.color="Pink"
    }
)

var1.addEventListener(
    "mouseover", function(){
        var1.style.backgroundColor="red"
    }
)

var1.addEventListener(
    "mouseout", function(){
        var1.style.backgroundColor="cornflowerblue"
    }
)

var3.addEventListener(
    "mouseover", function(){
        var3.style.backgroundColor="red"
    }
)

var3.addEventListener(
    "mouseout", function(){
        var3.style.backgroundColor="cornflowerblue"
    }
)





