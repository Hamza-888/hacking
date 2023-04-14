function collectuseripaddress(){
    fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
    const userIP = data.ip;
    console.log("User IP address is "+userIP);
    })
   .catch(error => {
   console.error('Error collecting user IP address:', error);
   });
}
function changetext(){
    document.getElementById("btn").innerHTML = "I warned you (;";
    setTimeout(function(){
    document.getElementById('btn').innerHTML = "Don't click me"
    }, 2500);
}
