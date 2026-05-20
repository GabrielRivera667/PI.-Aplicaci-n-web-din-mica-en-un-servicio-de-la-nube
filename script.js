let data = JSON.parse(localStorage.getItem("db")) || [];

function render() {
    const list = document.getElementById("list");
    list.innerHTML = "";

    data.forEach((item, index) => {
        list.innerHTML += `
        <div class="card">
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
            <a href="${item.link}" target="_blank">Abrir recurso</a>
            <button class="delete" onclick="removeItem(${index})">Eliminar</button>
        </div>
        `;
    });

    localStorage.setItem("db", JSON.stringify(data));
}

function addItem() {
    const title = document.getElementById("title").value;
    const desc = document.getElementById("desc").value;
    const link = document.getElementById("link").value;

    if (!title || !link) {
        alert("Completa al menos título y enlace");
        return;
    }

    data.push({ title, desc, link });

    document.getElementById("title").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("link").value = "";

    render();
}

function removeItem(index) {
    data.splice(index, 1);
    render();
}

render();