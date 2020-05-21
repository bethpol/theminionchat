var socket = io()

var message = document.getElementById("message")
var handle = prompt("Select your minion name:")
var button = document.getElementById("send")
var output = document.getElementById("output")

$("#namespace").append(handle);

$(button).click(() => {
  console.log("Sending")
  socket.emit("chat", {
    message: message.value,
    handle: handle
  })
})




socket.on("chat", (data) => {
  console.log("Recieved")
  $(output).prepend("<p class = 'message'><strong>" + data.handle + "</strong>: " + data.message + "</p>");
})