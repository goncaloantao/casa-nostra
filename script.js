* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

:root {
    --creme: #f3ede3;
    --creme-claro: #faf7f1;
    --verde: #19372d;
    --verde-claro: #285245;
    --vinho: #8a2e2e;
    --dourado: #bd9362;
    --texto: #242424;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: var(--creme-claro);
    color: var(--texto);
    overflow-x: hidden;
}


/* HEADER */

header {
    height: 85px;
    width: 100%;
    padding: 0 7%;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 1000;

    display: flex;
    align-items: center;
    justify-content: space-between;

    transition: 0.3s;
}

header.scrolled {
    background: rgba(20, 39, 32, 0.97);
    box-shadow: 0 5px 25px rgba(0,0,0,0.18);
}

.logo {
    color: white;
    text-decoration: none;
    font-weight: bold;
    letter-spacing: 3px;
    font-size: 20px;

    display: flex;
    flex-direction: column;
}

.logo span {
    font-size: 8px;
    letter-spacing: 4px;
    color: #ddd;
    margin-top: 4px;
}

nav {
    display: flex;
    gap: 32px;
}

nav a {
    color: white;
    text-decoration: none;
    font-size: 14px;
    transition: 0.25s;
}

nav a:hover {
    color: var(--dourado);
}

.btn-header {
    background: var(--vinho);
    color: white;

    padding: 12px 20px;

    text-decoration: none;
    font-weight: bold;

    border-radius: 2px;

    transition: 0.25s;
}

.btn-header:hover {
    background: #a13b3b;
}

.menu-mobile {
    display: none;

    background: none;
    border: none;

    color: white;

    font-size: 29px;
    cursor: pointer;
}


/* HERO */

.hero {
    min-height: 100vh;

    position: relative;

    display: flex;
    align-items: center;

    padding: 130px 8% 70px;

    background:
        url("https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1800&q=85");

    background-size: cover;
    background-position: center;
}

.hero-overlay {
    position: absolute;
    inset: 0;

    background:
        linear-gradient(
            90deg,
            rgba(15, 29, 24, 0.95),
            rgba(15, 29, 24, 0.70),
            rgba(15, 29, 24, 0.25)
        );
}

.hero-conteudo {
    position: relative;
    z-index: 2;

    max-width: 700px;

    color: white;
}

.etiqueta {
    color: var(--dourado);

    font-size: 12px;
    font-weight: bold;

    letter-spacing: 4px;

    margin-bottom: 18px;
}

.hero h1 {
    font-family: Georgia, serif;

    font-size: clamp(55px, 7vw, 92px);

    line-height: 0.96;

    font-weight: normal;

    margin-bottom: 28px;
}

.hero-texto {
    max-width: 530px;

    font-size: 19px;

    line-height: 1.7;

    color: #eee;

    margin-bottom: 35px;
}

.hero-botoes {
    display: flex;
    gap: 15px;
}

.btn-principal,
.btn-secundario {
    padding: 15px 25px;

    text-decoration: none;
    font-weight: bold;

    transition: 0.25s;
}

.btn-principal {
    background: var(--vinho);
    color: white;
}

.btn-principal:hover {
    background: #a13b3b;
}

.btn-secundario {
    border: 1px solid white;
    color: white;
}

.btn-secundario:hover {
    background: white;
    color: #111;
}


/* INTRO */

.intro {
    padding: 90px 8%;

    text-align: center;

    background: var(--creme);
}

.intro > p {
    color: var(--vinho);

    font-size: 11px;
    font-weight: bold;

    letter-spacing: 4px;

    margin-bottom: 18px;
}

.intro h2 {
    font-family: Georgia, serif;

    font-size: clamp(34px, 5vw, 52px);

    font-weight: normal;

    margin-bottom: 20px;
}

.intro span {
    display: block;

    max-width: 650px;

    margin: auto;

    color: #666;

    line-height: 1.7;

    font-size: 17px;
}


/* TITULOS */

.titulo-secao {
    max-width: 700px;

    text-align: center;

    margin: 0 auto 60px;
}

.titulo-secao > p {
    color: var(--vinho);

    font-size: 12px;
    font-weight: bold;

    letter-spacing: 4px;

    margin-bottom: 12px;
}

.titulo-secao h2 {
    font-family: Georgia, serif;

    font-size: clamp(38px, 5vw, 54px);

    font-weight: normal;

    margin-bottom: 15px;
}

.titulo-secao span {
    color: #777;
}


/* MENU */

.menu {
    padding: 110px 8%;

    background: var(--creme-claro);
}

.menu-grid {
    max-width: 1200px;

    margin: auto;

    display: grid;
    grid-template-columns: repeat(3, 1fr);

    gap: 25px;
}

.prato {
    background: white;

    box-shadow:
        0 10px 35px rgba(0,0,0,0.06);

    overflow: hidden;

    transition: 0.3s;
}

.prato:hover {
    transform: translateY(-7px);
}

.prato-imagem {
    height: 240px;

    background-size: cover;
    background-position: center;
}

.prato-1 {
    background-image:
        url("https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85");
}

.prato-2 {
    background-image:
        url("https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85");
}

.prato-3 {
    background-image:
        url("https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=900&q=85");
}

.prato-4 {
    background-image:
        url("https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=900&q=85");
}

.prato-5 {
    background-image:
        url("https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=85");
}

.prato-6 {
    background-image:
        url("https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=85");
}

.prato-conteudo {
    padding: 25px;
}

.prato-topo {
    display: flex;

    justify-content: space-between;

    gap: 20px;

    margin-bottom: 13px;
}

.prato-topo h3 {
    font-family: Georgia, serif;

    font-size: 20px;
}

.prato-topo strong {
    color: var(--vinho);

    white-space: nowrap;
}

.prato-conteudo p {
    color: #777;

    line-height: 1.6;

    font-size: 14px;
}


/* SOBRE */

.sobre {
    min-height: 720px;

    display: grid;

    grid-template-columns: 1fr 1fr;

    background: var(--verde);

    color: white;
}

.sobre-imagem {
    min-height: 720px;

    background:
        url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85");

    background-size: cover;

    background-position: center;
}

.sobre-conteudo {
    padding: 90px 10%;

    display: flex;

    flex-direction: column;

    justify-content: center;
}

.sobre h2 {
    font-family: Georgia, serif;

    font-size: clamp(40px, 5vw, 58px);

    font-weight: normal;

    line-height: 1.05;

    margin-bottom: 25px;
}

.sobre-conteudo > p:not(.etiqueta) {
    color: #d8ddd9;

    line-height: 1.8;

    margin-bottom: 15px;

    font-size: 16px;
}

.sobre-dados {
    display: flex;

    gap: 40px;

    margin: 35px 0;
}

.sobre-dados div {
    display: flex;

    flex-direction: column;
}

.sobre-dados strong {
    color: var(--dourado);

    font-size: 30px;
}

.sobre-dados span {
    color: #b9c2bd;

    font-size: 12px;

    margin-top: 4px;
}

.btn-sobre {
    width: fit-content;

    padding: 15px 24px;

    background: var(--vinho);

    color: white;

    text-decoration: none;

    font-weight: bold;
}


/* FRASE */

.frase {
    min-height: 350px;

    padding: 80px 10%;

    display: flex;

    align-items: center;

    justify-content: center;

    text-align: center;

    background:
        linear-gradient(
            rgba(0,0,0,0.55),
            rgba(0,0,0,0.55)
        ),
        url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=85");

    background-size: cover;

    background-position: center;

    background-attachment: fixed;
}

.frase p {
    max-width: 850px;

    color: white;

    font-family: Georgia, serif;

    font-style: italic;

    font-size: clamp(30px, 5vw, 50px);

    line-height: 1.3;
}


/* RESERVA */

.reservar {
    padding: 110px 8%;

    display: grid;

    grid-template-columns: 0.8fr 1.2fr;

    gap: 80px;

    background: var(--creme);
}

.reserva-info {
    display: flex;

    flex-direction: column;

    justify-content: center;
}

.reserva-info h2 {
    font-family: Georgia, serif;

    font-size: clamp(40px, 5vw, 58px);

    font-weight: normal;

    margin-bottom: 20px;
}

.reserva-info > p:not(.etiqueta) {
    color: #666;

    line-height: 1.7;
}

.horarios {
    margin-top: 35px;

    border-top: 1px solid #d6cec2;
}

.horarios div {
    display: flex;

    justify-content: space-between;

    gap: 20px;

    padding: 16px 0;

    border-bottom: 1px solid #d6cec2;
}

.horarios span {
    color: #777;
}

.form-reserva {
    background: white;

    padding: 40px;

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 20px;

    box-shadow:
        0 15px 40px rgba(0,0,0,0.07);
}

.campo {
    display: flex;

    flex-direction: column;

    gap: 8px;
}

.campo-largo {
    grid-column: 1 / -1;
}

.campo label {
    font-size: 13px;

    font-weight: bold;
}

.campo input,
.campo select,
.campo textarea {
    width: 100%;

    padding: 14px;

    border: 1px solid #ddd;

    background: #fafafa;

    outline: none;

    font-size: 15px;
}

.campo input:focus,
.campo select:focus,
.campo textarea:focus {
    border-color: var(--vinho);
}

.campo textarea {
    resize: vertical;
}

.btn-reserva {
    border: 0;

    padding: 16px;

    background: var(--vinho);

    color: white;

    font-size: 15px;

    font-weight: bold;

    cursor: pointer;

    transition: 0.25s;
}

.btn-reserva:hover {
    background: #a13b3b;
}

.nota {
    text-align: center;

    color: #888;

    font-size: 12px;
}


/* CONTACTOS */

.contactos {
    padding: 100px 8%;

    background: var(--creme-claro);
}

.contactos-grid {
    max-width: 1000px;

    margin: auto;

    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 25px;
}

.contacto {
    text-align: center;

    padding: 35px;

    background: white;

    border: 1px solid #e6ded2;
}

.contacto > span {
    display: block;

    font-size: 28px;

    margin-bottom: 17px;
}

.contacto h3 {
    font-family: Georgia, serif;

    font-size: 21px;

    margin-bottom: 12px;
}

.contacto p {
    color: #777;

    line-height: 1.7;
}


/* WHATSAPP */

.whatsapp {
    width: 56px;

    height: 56px;

    position: fixed;

    right: 25px;

    bottom: 25px;

    z-index: 900;

    border-radius: 50%;

    display: flex;

    justify-content: center;

    align-items: center;

    background: #25d366;

    color: white;

    text-decoration: none;

    font-size: 22px;

    box-shadow:
        0 7px 25px rgba(0,0,0,0.25);
}


/* FOOTER */

footer {
    padding: 55px 8% 25px;

    background: #10261f;

    color: white;
}

.footer-topo {
    padding-bottom: 40px;

    display: flex;

    justify-content: space-between;

    gap: 40px;
}

.footer-topo h3 {
    letter-spacing: 3px;

    margin-bottom: 6px;
}

.footer-topo p {
    color: #aaa;
}

.footer-links {
    display: flex;

    gap: 25px;

    flex-wrap: wrap;
}

.footer-links a {
    color: #ccc;

    text-decoration: none;
}

.footer-links a:hover {
    color: var(--dourado);
}

.footer-bottom {
    padding-top: 25px;

    border-top: 1px solid #29443b;

    text-align: center;

    color: #84968f;

    font-size: 12px;
}


/* MOBILE */

@media (max-width: 850px) {

    header {
        height: 72px;

        padding: 0 5%;
    }

    nav {
        display: none;

        position: absolute;

        top: 72px;

        left: 0;

        width: 100%;

        padding: 25px 5%;

        background: var(--verde);

        flex-direction: column;

        align-items: flex-start;
    }

    nav.aberto {
        display: flex;
    }

    .btn-header {
        display: none;
    }

    .menu-mobile {
        display: block;
    }


    .hero {
        min-height: 90vh;

        padding: 120px 6% 70px;

        background-position: 62% center;
    }

    .hero h1 {
        font-size: clamp(48px, 14vw, 65px);
    }

    .hero-botoes {
        flex-direction: column;

        align-items: flex-start;
    }


    .intro,
    .menu,
    .contactos {
        padding-left: 6%;
        padding-right: 6%;
    }


    .menu-grid {
        grid-template-columns: 1fr;
    }


    .sobre {
        grid-template-columns: 1fr;
    }

    .sobre-imagem {
        min-height: 430px;
    }

    .sobre-conteudo {
        padding: 70px 6%;
    }

    .sobre-dados {
        flex-wrap: wrap;
    }


    .frase {
        background-attachment: scroll;
    }


    .reservar {
        padding: 80px 6%;

        grid-template-columns: 1fr;

        gap: 45px;
    }

    .form-reserva {
        padding: 25px;

        grid-template-columns: 1fr;
    }

    .campo-largo {
        grid-column: auto;
    }


    .contactos-grid {
        grid-template-columns: 1fr;
    }


    .footer-topo {
        flex-direction: column;
    }

    .footer-links {
        flex-direction: column;
    }

}


@media (max-width: 450px) {

    .logo {
        font-size: 16px;
    }

    .hero h1 {
        font-size: 45px;
    }

    .sobre-dados {
        flex-direction: column;
    }

    .horarios div {
        flex-direction: column;

        gap: 5px;
    }

}