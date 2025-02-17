document.addEventListener("DOMContentLoaded", function () {
    const posts = [
        { title: "Meu primeiro post", content: "Este é um blog simples feito com HTML, CSS e JavaScript!" },
        { title: "Como funciona?", content: "Os posts são carregados dinamicamente usando JavaScript puro." }
    ];

    const postsContainer = document.getElementById("posts");

    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
        postsContainer.appendChild(postElement);
    });
});
