document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("usernameInput");
    const addButton = document.getElementById("addButton");
    const userList = document.getElementById("userList");

    addButton.addEventListener("click", function () {
        const username = usernameInput.value.trim();

        if (username === "") {
            alert("Por favor, digite um nome de usuário.");
            return;
        }

        // Simulação de dados para exemplo
        const user = {
            name: "Git Hub",
            username: `/${username}`,
            repositories: 123,
            followers: 1234
        };

        addUserToList(user);
        usernameInput.value = "";
    });

    function addUserToList(user) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>
                <img src="https://github.com/${user.username.substring(1)}.png" alt="${user.name}" width="50" style="border-radius: 50%;">
                <span>${user.name}</span><br>
                <span>${user.username}</span>
            </td>
            <td>${user.repositories}</td>
            <td>${user.followers}</td>
            <td><button class="remove">Remover</button></td>
        `;

        row.querySelector(".remove").addEventListener("click", function () {
            userList.removeChild(row);
        });

        userList.appendChild(row);
    }
});