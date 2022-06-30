<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bob the Chatbot</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
</head>
<body>
    <h1 class="w3-sans-serif"><b><center>Welcome to Bob the Chatbot</center></b></h1>
    <hr class="new">
    <div id="container" class="container">
        <img src="https://cdn.pixabay.com/photo/2020/01/02/16/38/chatbot-4736275_960_720.png" height="350vh" alt="Chatbot clipart">
        <div id="chat" class="chat">
        <div id="messages" class="messages"></div>
            <input id="input" type="text" placeholder="Write something..." autocomplete="off" autofocus="true" />
            <button id="sub" onclick="mySub()">Submit</button>
        </div>
        
    </div>
    
    
    
</body>
    <script>
        
    function mySub () {
            let text = document.getElementById("input").value;
            let result = text.includes('?');
            
            // document.getElementById("input").innerHTML = result;
            if (result == true){
                document.getElementById("messages").innerHTML = "Sure.";
            } else {
                let text = document.getElementById("input").value;
                let result = text.includes("!");

                document.getElementById("input").innerHTML = result;
                if (result == true){
                document.getElementById("messages").innerHTML = "Whoa, chill out!";
                }    
            }
        }</script>
</html>