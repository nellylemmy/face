const leftEye = document.getElementById('left-eye');
const rightEye = document.getElementById('right-eye');
const rightBall = document.getElementById('right-ball');
const leftBall = document.getElementById('left-ball');
const rightEyeDot = document.getElementById('right-eye-dot');
const leftEyeDot = document.getElementById('left-eye-dot');
const mouth = document.querySelector('.mouth');
let options = document.querySelectorAll('option');
let whiteData = document.querySelector('.white-data');
let msg = new SpeechSynthesisUtterance();

window.onload = ()=>{
    document.querySelector('.stop-talking').addEventListener('click', stopReading);
    document.querySelector('.talk').addEventListener('click', readText);

    for(let i = 0; i < options.length; i++){
        options[i].setAttribute('id',options[i].value);

        document.getElementById(options[i].id).addEventListener('click', ()=>{
            let chosen = document.querySelector('#content-header');
            chosen.innerHTML = `${options[i].id}`;
            if(options[i].id == options[i].value){
                console.log(options[i].value)

                let header = new SpeechSynthesisUtterance();
                header.volume = 10;
                header.rate = 0.81;
                header.pitch = 0;
                header.voice = speechSynthesis.getVoices().filter(function(voice){return voice.name == "Agnes";})[1];
                header.lang = "en-US";

                header.text = `you choose ${options[i].id}`;
                window.speechSynthesis.speak(header);
            }
            
        })
        
      
    }
}

msg.volume = 10;
msg.rate = 0.81;
msg.pitch = 0;
msg.voice = speechSynthesis.getVoices().filter(function(voice){return voice.name == "Agnes";})[1];
msg.lang = "en-US";
// msg.onboundary = function(event){
//     console.log(event.name + 'boundary reached after ' + event.elapsedTime + ' milliseconds');
// }

function readText(){
    
    // ajax
    
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'bitcoin.txt', true);

        xhr.onload = function(){
            if(this.status == 200){
                msg.text = `${this.responseText}`;
                window.speechSynthesis.speak(msg);
                console.log(this.responseText)
            }else if(this.status == 404){
                console.log('file not found or invalid file name')
            }
        }

        xhr.onerror = function(){
            console.log('error on request')
        }

        xhr.send();


    msg.onstart = ()=>{
        let range = [20,5,10,25];
        for(ran in range){
            let ct = [Math.floor(Math.random.call(this.ran) * 100)];
           
            let dt = new Date();

            
    
            setInterval(function(){
                if(ct > 45){
                     ct = [ct - (ct + 100)]
                }

                if(dt <= dt){
                    for(data of ct){

                        msg.addEventListener('boundary', function(event){
                            if(event.returnValue === true && event.charIndex >= event.charIndex){
                                let ul = document.createElement(`ul`);
                                let li = document.createElement(`li`);
                                
                                let txt = new SpeechSynthesisUtterance(msg);
                                whiteData.appendChild(ul);
                                ul.appendChild(li);
                                li.innerText = txt;

                            //    console.log(ul)
                                // console.log(event.elapsedTime)
       
                            mouth.style = `
                                position: absolute;
                                background:linear-gradient(rgba(0, 0, 0, 0.174), rgba(0, 0, 0, 0.494));
                                height: ${event.NONE + data}px;
                                max-height: 15px;
                                min-height: 13px;
                                width: ${event.CAPTURING_PHASE + data}px;
                                max-width: 45px;
                                min-width: 30px;
                                animation: all 0.5s ease-in-out;
                                border-radius: 20% 20% 100% 100%;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                border-top: 3px solid hsl(19, 28%, 50%);
                                border-bottom: 4px solid hsl(19, 46%, 68%);
                        `;
                            }
                            
                        })
                        
                    }
                }
            }, Math.floor(Math.random(ct)*2000))
        }
    }
}

function stopReading(){
    mouth.style = `
    position: absolute;
    top: 150px;
    background:linear-gradient(rgba(0, 0, 0, 0.174), rgba(0, 0, 0, 0.494));
    width: 45px !important;
    height: 7px !important;
    border-radius: 20% 20% 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 3px solid hsl(19, 28%, 50%);
    border-bottom: 4px solid hsl(19, 46%, 68%);
    `;
    window.speechSynthesis.cancel();
}

setInterval(function(){
    function blinkEye(array){
        for(let i = array.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]]=[array[j], array[i]]
    
            leftEye.style = `
                animation: blink ${array[j]}s infinite;
                `;

            rightEye.style = `
                animation: blink ${array[j]}s infinite;
                `;
        }
    }
    
    blinkEye([1,1.5,2,2,5,3.5,3,4.5,4,5.5,5])
    clearInterval(blinkEye([0]))

}, 800, )



// ball movement
setInterval(function(){
    function moveBall(array){
        for(let i = array.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]]=[array[j], array[i]]
    
            rightBall.style = `
                transition: all 1.5s;
                margin-left: ${array[i]}px;
                margin-bottom: ${array[j]}px;
                `;

                leftBall.style = `
                transition: all 1.5s;
                margin-left: ${array[i]}px;
                margin-bottom: ${array[j]}px;
                
                `;
        }
    }

    
    
    moveBall([1,1.5,2,2,5,3.5,3,4.5,4,5.5,5])
    clearInterval(moveBall([1,1.5,2,2,5,3.5,3,4.5,4,5.5,5]))

}, 600, )



// Dot movement
setInterval(function(){
    function moveDot(array){
        for(let i = array.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 100));
            [array[i], array[j]]=[array[j], array[i]]

                // dots
                leftEyeDot.style = `
                transition: all ${array[j]}s;
                margin:10px ${array[j]+9.5}px;
                `;

                rightEyeDot.style = `
                transition: all ${array[j]}s;
                margin:10px ${array[j]+9.5}px;
                `;
        }
    }
    
    moveDot([8,9,10,11,12,13,14,15,16])
    clearInterval(moveDot([1,2,3,4,5,6,7,8,9,10]))

}, 600, )










