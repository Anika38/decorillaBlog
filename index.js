 
  
  firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user.uid);
    if (user.uid == "FKQNKf97yUMa81FnjsebZaRXO7C3") {
      createTable();
    } else {
      document.location.href = "./contact1.html?invalid_action_from_inbox";
    }
	  
  }
else {
      document.location.href = "./contact1.html?invalid_action_from_inbox";  
}
});

var refUser = "admin";
var userRef = firebase.database().ref(refUser);

function createTable() {
var messagesRef = firebase.database().ref().child("messages");
	messagesRef.on("child_added", snap=> {
		///alert(snap.val());
		var name=snap.child("name").val();
		var email=snap.child("email").val();
		var phone=snap.child("phone").val();
		var company=snap.child("company").val();
		var message=snap.child("message").val();
		
		
		$("#table_body").append("<tr><td>" + name + "</td><td>" + email+"</td><td>"+phone+"</td><td>"+company+"</td><td>"+message+"</td></tr>");
	});
}

