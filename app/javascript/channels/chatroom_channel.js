import consumer from "channels/consumer";

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    var element = document.getElementById("message-container");
    element.innerHTML += data.mod_message;
    // alert(data.foo);
    // Called when there's incoming data on the websocket for this channel
  },
});
