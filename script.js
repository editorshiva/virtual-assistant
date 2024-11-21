let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang="hi-IN"
    window.speechSynthesis.speak(text_speak)
} 
function wishMe() {
    let day = new Date()
    let hours = day.getHours()
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir")
    }
    else if (hours >= 12 && hours < 16) {
        speak("Good afternoon Sir")
    }
    else {
        speak("Good Evening Sir")
    }
}
window.addEventListener('load', () => {
    wishMe()
})
let speechRecognition= window.speechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex 
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello")||message.includes("hey")){
        speak("हलो सर, मैं आपकी क्या मदद कर सकती हूँ")
    }  
    else if(message.includes("who are you")||message.includes("tum kaun ho")||message.includes("tumhen kisne banaya hai")){
        speak("मैं किट्टी हूँ, मुझे शिवा सर ने बनाया हे ")
    }
    else if(message.includes("how are you")||message.includes("tum kaisi ho")||message.includes("kaisi ho")){
        speak("मैं अच्छी हूँ, आप बताइये सर ")
    }
    else if(message.includes("shayari")||message.includes("shayari sunao")){
        speak("शायरी प्रस्तुत है इरशाद कीजिये ")
        speak("बदल जाओ वक्त के साथ   या फिर वक्त बदलना सीखो   मजबूरियों को मत कोसो   हर हाल में चलना सीखो ")
    }
    else if(message.includes("open youtube")||message.includes("youtube kholo")){
        speak("opening youtube...")
        window.open("https://www.youtube.com/","_blank")
    }
    else if(message.includes("open google")||message.includes("google kholo")){
        speak("opening google...")
        window.open("https://www.google.com/","_blank")
    }
    else if(message.includes("open facebook")||message.includes("facebook kholo")){
        speak("opening facebook...")
        window.open("https://www.facebook.com/","_blank")
    }
    else if(message.includes("open instagram")||message.includes("instagram kholo")){
        speak("opening instagram...")
        window.open("https://www.instagram.com/","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator...")
        window.open("calculator://")
    }
    else if(message.includes("time")){
    let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if(message.includes("date")){
    let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
    }
    else if(message.includes("say i love you")||message.includes("i love you bolo")){
        speak("i love you")
    }
    else if(message.includes("kitty")){
        speak("यस बॉस ")
    }
    else{
        let finalText="मुझे गूगल पर ये मिला " + message.replace("kitty","")||message.replace("kirti","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("kitty,","")||message.replace("kirti","")}`,"_blank")}
}
