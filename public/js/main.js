console.log('JS Connected')

const loginformHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#loginusername').value;
    console.log(username)
    const password = document.querySelector('#loginpassword').value;
    console.log(password)

    if (username && password) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/user/login', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });
        console.log("request sent")
    
        if (response.ok) {
          console.log('successful');
          // If successful, redirect the browser to the profile page
          document.location.assign('/');
        } else {
          console.log("fail");
          alert(response.statusText);
    
        }
    }
}

document
  .querySelector('#loginbtn')
  .addEventListener('click', loginformHandler);