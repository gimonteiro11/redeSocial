document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // ELEMENTOS
    // =========================

    const likeBtn = document.querySelector(".like-btn");
    const likesCountSpan = document.querySelector(".likes-count");
    const postMedia = document.querySelector(".post-media");
    const bookmarkBtn = document.querySelector(".bookmark-btn");


    // Se o botão de curtida não existir,
    // encerra o código.
    if (!likeBtn) return;


    // =========================
    // ESTADO INICIAL
    // =========================

    let isLiked = false;

    // O valor inicial mostrado é 1.2K
    // Portanto, internamente usamos 1200.
    let baseLikes = 1200;


    // =========================
    // FORMATAR CURTIDAS
    // =========================

    function formatLikes(num) {

        if (num >= 1000) {

            return (num / 1000).toFixed(1) + "K";

        }

        return num.toString();
    }


    // =========================
    // ATUALIZAR CONTADOR
    // =========================

    function updateLikes() {

        if (likesCountSpan) {

            likesCountSpan.textContent = formatLikes(baseLikes);

        }

    }


    // =========================
    // ANIMAÇÃO DO CORAÇÃO
    // =========================

    function animateHeart() {

        const svg = likeBtn.querySelector("svg");

        if (!svg) return;


        svg.style.transform = "scale(1.4)";


        setTimeout(() => {

            svg.style.transform = "scale(1)";

        }, 150);

    }


    // =========================
    // CURTIR
    // =========================

    function addLike() {

        // Impede adicionar várias curtidas
        // se o usuário já curtiu.
        if (isLiked) return;


        isLiked = true;

        baseLikes++;


        // Adiciona a classe que deixa
        // o coração vermelho.
        likeBtn.classList.add("liked");


        updateLikes();

        animateHeart();

    }


    // =========================
    // DESCURTIR
    // =========================

    function removeLike() {

        if (!isLiked) return;


        isLiked = false;

        baseLikes = Math.max(0, baseLikes - 1);


        // Remove a cor vermelha.
        likeBtn.classList.remove("liked");


        updateLikes();

    }


    // =========================
    // CLIQUE NO CORAÇÃO
    // =========================

    likeBtn.addEventListener("click", (event) => {

        event.stopPropagation();


        if (isLiked) {

            removeLike();

        } else {

            addLike();

        }

    });


    // =========================
    // CLIQUE NA FOTO
    // =========================

    if (postMedia) {

        postMedia.addEventListener("click", (event) => {

            event.stopPropagation();


            // A foto só adiciona uma curtida
            // se ainda não estiver curtida.
            addLike();

        });

    }


    // =========================
    // BOTÃO SALVAR
    // =========================

    if (bookmarkBtn) {

        let isBookmarked = false;


        bookmarkBtn.addEventListener("click", (event) => {

            event.stopPropagation();


            isBookmarked = !isBookmarked;


            bookmarkBtn.classList.toggle(
                "bookmarked",
                isBookmarked
            );


            const svg = bookmarkBtn.querySelector("svg");


            if (svg) {

                svg.style.transform = "scale(1.2)";


                setTimeout(() => {

                    svg.style.transform = "scale(1)";

                }, 150);

            }

        });

    }

});