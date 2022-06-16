// Add your code here

const body = document.getElementById('body')
let message = 'Unauthorized Access'


function submitData(name, email){
    // alert('submit')
    let body = document.querySelector('body')
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: "Steve",
            email:"steve@steve.com"
          }),
      };
    fetch('http://localhost:3000/users', configurationObject)
    .then(function (response) {
        return response.json();
      })
      .then(function (object) {
          console.log(object)
        let p = document.createElement('p')
        p.textContent = object.id
        body.appendChild(p)
      })
      .catch( function ( error ) {
        const p = document.createElement("p");
        document.body.append(p)
        p.textContent = error.message
    
      } )
}

submitData()