document.getElementById('getRandom').addEventListener('click', getRandom);
function getRandom() {
    fetch('https://randomuser.me/api/?results=5')
        .then((res) => res.json())
        .then((data) => {
            let author = data.results;
            let output = '<h2>Random Users:</h2>'
            console.log(data);
            author.forEach(function (user) {
                output += `
                    <div><br>
                        <ul>
                            <img src="${user.picture.thumbnail}"><br>
                            ${user.name.first} ${user.name.last}<br>
                            ${user.email}<br><br>
                        </ul>
                    </div>
                    `;
            });
            document.getElementById('output').innerHTML = output;
        })
}
