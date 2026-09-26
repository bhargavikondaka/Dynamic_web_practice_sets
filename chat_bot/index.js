let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let chatContainerEl = document.getElementById("chatContainer");
let useripEl = document.getElementById("userInput");
let useripId = 0;

let sendBtnEl = document.getElementById("sendMsgBtn");
sendBtnEl.onclick = function() {
    let userip = useripEl.value;
    let userMessageCont = document.createElement('div');
    userMessageCont.textContent = userip;

    userMessageCont.classList.add("msg-to-chatbot-container", "msg-to-chatbot");
    let chatBotMessageel = document.createElement("div");

    chatBotMessageel.textContent = chatbotMsgList[useripId];
    useripId = useripId + 1;
    chatBotMessageel.classList.add("msg-from-chatbot-container", "msg-from-chatbot");

    useripEl.value = "";

    chatContainerEl.appendChild(userMessageCont);
    chatContainerEl.appendChild(chatBotMessageel);
}