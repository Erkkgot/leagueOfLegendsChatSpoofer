
let createButton = document.getElementById('createNewMessage')
let timeInput = document.getElementById('timeInput')
let nickInput = document.getElementById('nickInput')
let championInput = document.getElementById('championInput')
let messageInput = document.getElementById('messageInput')
let messagesDiv = document.getElementById('createdMessages')
let messagesGeralDiv = document.getElementById('messages')
let chatBackground = document.getElementById('chatBackground')
let messageIndex = 1

function createNewMessage() {
    //Create Message
    let time = timeInput.value
    let nick = nickInput.value
    let champion = championInput.value
    let message = messageInput.value
    let finalChat = ''
    if (time == '' || nick == '' || message == '') {
        return true
    }

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
    nickSpan.textContent = " [Equipe] " + nick + " (" + champion + "): "
    messageSpan.textContent = message

    messageDiv.appendChild(timeSpan)
    messageDiv.appendChild(nickSpan)
    messageDiv.appendChild(messageSpan)
    messagesDiv.appendChild(messageDiv)

    
    messageIndex++
}

chatBackground.addEventListener('input', () => {
    if (chatBackground.value == 1) {
        messagesGeralDiv.style.backgroundImage = " url(src/chatBackground.png)"
    }
    else if (chatBackground.value == 2) {
        messagesGeralDiv.style.backgroundImage = " url(src/chatBackgroundAram.png)"
    }
})
createButton.addEventListener('click', createNewMessage)