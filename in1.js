





var messagesRef = firebase.database().ref().child("messages1");
	messagesRef.on("child_added", snap=> {
		///alert(snap.val());
		var name=snap.child("name").val();
	
		var message=snap.child("message").val();
		
		
		$("#table_body").append("<tr><td>" + name + "</td><td>" + message+"</td></tr>");
	});