
let createButton = document.getElementById('createNewMessage')
let createPingButton = document.getElementById('createNewPing')
let timeInput = document.getElementById('timeInput')
let nickInput = document.getElementById('nickInput')
let championInput = document.getElementById('championInput')
let messageInput = document.getElementById('messageInput')
let messagesDiv = document.getElementById('createdMessages')
let messagesGeralDiv = document.getElementById('messages')
let chatBackground = document.getElementById('chatBackground')
let pingType = document.getElementById('pingType')
let chatSelector = document.getElementById('selectChat')
let teamSelector = document.getElementById('selectTeam')
let messageIndex = 1
let teamSelected = 1
let chatSelected = " [Equipe] "
let pingIndex = 1

function createNewMessage() {
    //Create Message
    let time = timeInput.value
    let nick = nickInput.value
    let champion = championInput.value
    let message = messageInput.value
    let finalChat = ''
    if (time == '' || nick == '' || message == '' || champion == '') {
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
    
    if (teamSelected == 1) {
            nickSpan.textContent = chatSelected + nick + " (" + champion + "): "
    } else {
        nickSpan.textContent = " [Todos] " + nick + " (" + champion + "): "
        nickSpan.style.color = "#952c34"
    }

    messageSpan.textContent = message

    messageDiv.appendChild(timeSpan)
    messageDiv.appendChild(nickSpan)
    messageDiv.appendChild(messageSpan)
    messagesDiv.appendChild(messageDiv)

    
    messageIndex++
}

function createNewPing() {
    // Create Ping
    let time = timeInput.value
    let nick = nickInput.value
    let champion = championInput.value
    let pingText = ["sinaliza para ter cuidado", "está a caminho", "pede assistência", "sinaliza que há inimigos desaparecidos"]
    if (time == '' || nick == '' || champion == '') {
        return true
    }

    let pingDiv = document.createElement('div')
    let timeSpan = document.createElement('span')
    let nickSpan = document.createElement('span')
    let pingSpan = document.createElement('span')

    pingDiv.id = "ping" + messageIndex
    timeSpan.id = "time" + messageIndex
    nickSpan.id = "nick" + messageIndex
    pingSpan.id = "pingContent" + messageIndex

    pingDiv.className = "ping"
    timeSpan.className = "time"
    pingSpan.className = "pingContent"
    nickSpan.className = "nick"

    timeSpan.textContent = time
    nickSpan.textContent = " " + nick + " (" + champion + "): "

    if (pingType.value == 1) {
        pingSpan.textContent = pingText[Math.floor(Math.random() * pingText.length)]
    } else if (pingType.value == 2) {
        pingSpan.textContent = pingText[0]
    } else if (pingType.value == 3) {
        pingSpan.textContent = pingText[1]
    } else if (pingType.value == 4) {
        pingSpan.textContent = pingText[2]
    } else if (pingType.value == 5) {
        pingSpan.textContent = pingText[3]
    }

    pingDiv.appendChild(timeSpan)
    pingDiv.appendChild(nickSpan)
    pingDiv.appendChild(pingSpan)
    messagesDiv.appendChild(pingDiv)

    messageIndex++
}

chatBackground.addEventListener('input', () => {
    if (chatBackground.value == 1) {
        messagesGeralDiv.style.backgroundImage = " url(src/chatBackground.png)"
    } else if (chatBackground.value == 2) {
        messagesGeralDiv.style.backgroundImage = " url(src/chatBackgroundAram.png)"
    }
})

chatSelector.addEventListener('input', () => {
    if (chatSelector.value == 1) {
        chatSelected = " [Equipe] "
    } else if(chatSelector.value == 2) {
        chatSelected = " [Todos] "
    }
})

teamSelector.addEventListener('input', ()=> {
    if (teamSelector.value == 1) {
        teamSelected = 1
    } else {
        teamSelected = 2
    }
})
createButton.addEventListener('click', createNewMessage)
createPingButton.addEventListener('click', createNewPing)