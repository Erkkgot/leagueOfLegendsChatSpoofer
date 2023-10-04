/* Mensagem:
    <div id='message[i]'>
        <span id='time'>Time(00:00)</span>
        <span id='infos'>[Chat] nick (Champion)</span>
        <span id='messageContent'>message</span>
    </div>*/

 

let createButton = document.getElementById('createNewMessage')
let timeInput = document.getElementById('timeInput')
let nickInput = document.getElementById('nickInput')
let messageInput = document.getElementById('messageInput')
let messagesDiv = document.getElementById('messages')
let messageIndex = 1

function createNewMessage() {
    //Create Message
    let time = timeInput.value
    let nick = nickInput.value
    let message = messageInput.value
    let finalChat = ''
    if (time == '' || nick == '' || message == '') {
        return true
    }
    finalChat = time + " [Equipe] " + nick + " (Varus): " + message

    // Attach message to page

    let messageDiv = document.createElement('div')
    let timeSpan = document.createElement('span')
    let nickSpan = document.createElement('span')
    let messageSpan = document.createElement('span')

    messageDiv.id = "message" + messageIndex
    timeSpan.id = "time" + messageIndex
    nickSpan.id = "nick" + messageIndex
    messageSpan.id = "messageContent" + messageIndex

    messageDiv.className = "message"
    timeSpan.className = "time"
    nickSpan.className = "nick"
    messageSpan.className = "messageContent"

    timeSpan.textContent = time
    nickSpan.textContent = " [Equipe] " + nick + " (Varus): "
    messageSpan.textContent = message

    messageDiv.appendChild(timeSpan)
    messageDiv.appendChild(nickSpan)
    messageDiv.appendChild(messageSpan)
    messagesDiv.appendChild(messageDiv)

    console.log(finalChat)
    messageIndex++
}

createButton.addEventListener('click', createNewMessage)