function getJSON(){
    fetch('users.json')
    .then ((res) => res.json())
    .then((data) => {
        console.log(data)
    })
}