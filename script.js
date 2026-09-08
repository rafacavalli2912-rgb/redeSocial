document.addEventListener("DOMContentLoaded", () => {

```
// ==============================
// ELEMENTOS
// ==============================

const likeBtn = document.querySelector(".like-btn");
const postMedia = document.querySelector(".post-media");
const likesCount = document.querySelector(".likes-count");
const othersCount = document.querySelector(".others-count");
const bookmarkBtn = document.querySelector(".bookmark-btn");


// ==============================
// ESTADO INICIAL
// ==============================

let isLiked = false;

// Quantidade inicial
let baseLikes = 1200;


// ==============================
// FORMATAR CURTIDAS
// ==============================

function formatLikes(num) {

    if (num >= 1000) {
        return (num / 1000).toFixed(1) + "K";
    }

    return num.toString();
}


// ==============================
// ATUALIZAR A TELA
// ==============================

function updateLikes() {

    // Atualiza o número ao lado do coração
    if (likesCount) {
        likesCount.textContent = formatLikes(baseLikes);
    }

    // Atualiza o texto abaixo da foto
    if (othersCount) {

        const others = Math.max(0, baseLikes - 1);

        othersCount.textContent = others;
    }

    // Atualiza visual do coração
    if (likeBtn) {
        likeBtn.classList.toggle("liked", isLiked);
    }
}


// ==============================
// ANIMAR CORAÇÃO
// ==============================

function animateLike() {

    if (!likeBtn) return;

    const svg = likeBtn.querySelector("svg");

    if (!svg) return;

    svg.style.transform = "scale(1.4)";

    setTimeout(() => {
        svg.style.transform = "scale(1)";
    }, 150);
}


// ==============================
// ADICIONAR CURTIDA
// ==============================

function addLike() {

    // Não adiciona duas vezes
    if (isLiked) return;

    baseLikes++;
    isLiked = true;

    updateLikes();
    animateLike();
}


// ==============================
// REMOVER CURTIDA
// ==============================

function removeLike() {

    if (!isLiked) return;

    baseLikes = Math.max(0, baseLikes - 1);
    isLiked = false;

    updateLikes();
}


// ==============================
// CLIQUE NO CORAÇÃO
// ==============================

if (likeBtn) {

    likeBtn.addEventListener("click", (event) => {

        event.stopPropagation();

        if (isLiked) {
            removeLike();
        } else {
            addLike();
        }

    });
}


// ==============================
// CLIQUE NA FOTO
// ==============================

if (postMedia) {

    postMedia.addEventListener("click", (event) => {

        event.stopPropagation();

        addLike();

    });
}


// ==============================
// BOTÃO SALVAR
// ==============================

if (bookmarkBtn) {

    let isBookmarked = false;

    bookmarkBtn.addEventListener("click", (event) => {

        event.stopPropagation();

        isBookmarked = !isBookmarked;

        bookmarkBtn.classList.toggle(
            "bookmarked",
            isBookmarked
        );


        // Animação do botão salvar
        const svg = bookmarkBtn.querySelector("svg");

        if (svg) {

            svg.style.transform = "scale(1.2)";

            setTimeout(() => {

                svg.style.transform = "scale(1)";

            }, 150);
        }

    });
}


// ==============================
// INICIALIZAÇÃO
// ==============================

updateLikes();
```

});
