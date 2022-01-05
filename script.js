(async () => {
    const name = "vitoUwu";
    const user = await jQuery.getJSON(`https://api.github.com/users/${name}`);
    document.getElementById("icon").src = user.avatar_url;
    document.getElementsByClassName("fa-github")[0].href = user.html_url;
    const repos = await jQuery.getJSON(`https://api.github.com/users/${name}/repos`);
    const div = document.getElementById("repos");
    repos.filter(repo => repo.language).forEach(repo => {
        const middle = document.createElement("div");
        middle.setAttribute("class", "middle");
        middle.setAttribute("style", "");
        const link = document.createElement("a");
        link.href = repo.html_url;
        link.innerHTML = `${repo.name} - ${repo.language}`;
        link.target = "_blank";
        link.setAttribute("class", "link");
        div.appendChild(middle);
        middle.appendChild(link);
        if(repo.description) {
            const description = document.createElement("p");
            description.style.color = "#725AC1";
            description.style.margin = "10px";
            description.innerHTML = repo.description;
            middle.appendChild(description);
        }
    })
})();