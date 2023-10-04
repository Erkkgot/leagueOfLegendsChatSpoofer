/* Mensagem:
    <div id="message">
        <span id="time">Time(00:00)</span>
        <span id="infos">[Chat] nick (Champion)</span>
        <span id="message">message</span>
    </div>*/ 

let createnewMessage = document.getElementById('createNewMessage')
let timeInput = document.getElementById('timeInput')
let nickInput = document.getElementById('nickInput')
let messageInput = document.getElementById('messageInput')

function createNewMessage() {
    if (timeInput.value == " " && nickInput == " " && messageInput == "") {
        return true
    }
    
}

