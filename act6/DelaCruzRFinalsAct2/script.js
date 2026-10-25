const message = document.getElementById("message")
const Button = document.getElementById("loadBtn")
const Button2 = document.getElementById("clickkulay")

const profile = document.getElementById("profile")
const grades = document.getElementById("grades")
const schedule = document.getElementById("schedules")

Button.addEventListener("click", function(){


    message.style.color = "black"
    profile.style.color = "black"
    grades.style.color = "black"
    schedule.style.color ="black"


    message.innerHTML ="Loading Dashboard...."
    profile.innerHTML = "Profile: Waiting...."
    grades.innerHTML = "Grades: Waiting...."
    schedule.innerHTML ="Schedule: Waiting...."

    Button.style.backgroundColor = "red"
    Button2.style.backgroundColor ="green"

    const profilePromise = new Promise(function(resolve){
        setTimeout(function(){
            profile.innerHTML = "Profile: Loaded"

            resolve()
        },3000)


    })

    const gradesPromise = new Promise(function(resolve){
        setTimeout(function(){
            grades.innerHTML = "Grades: Loaded"

            resolve()
        },3000)


    })


    const schedulePromise = new Promise(function(resolve){
        setTimeout(function(){
            schedule.innerHTML = "Schedule: Loaded"

            resolve()
        },3000)


    })

    Promise.all([profilePromise, gradesPromise, schedulePromise])

    .then(function(){

        message.innerHTML = "DASHBOARD READY!!!"
    })


})

Button2.addEventListener("click", function(){

    Button.style.backgroundColor = "royalblue"
    Button2.style.backgroundColor ="royalblue"

    message.innerHTML ="Loading Po...."
    profile.innerHTML = "Profile: Wala pa...."
    grades.innerHTML = "Grades: Wala pa din...."
    schedule.innerHTML ="Schedule: Wala parin po...."

    message.style.color = "orange"
    profile.style.color = "blue"
    grades.style.color = "green"
    schedule.style.color ="black"

    const profilePromise = new Promise(function(resolve){
        setTimeout(function(){
            profile.innerHTML = "Profile: Loaded"

            resolve()
        },3000)


    })

    const gradesPromise = new Promise(function(resolve){
        setTimeout(function(){
            grades.innerHTML = "Grades: Loaded"

            resolve()
        },3000)


    })


    const schedulePromise = new Promise(function(resolve){
        setTimeout(function(){
            schedule.innerHTML = "Schedule: Loaded"

            resolve()
        },3000)


    })

    Promise.all([profilePromise, gradesPromise, schedulePromise])

    .then(function(){

        message.innerHTML = "DASHBOARD READY!!!"
    })


})

