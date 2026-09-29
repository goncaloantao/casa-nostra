/* =========================
   CONFIGURAÇÃO
========================= */

/*
    IMPORTANTE:

    Troca este número pelo número real
    da barbearia.

    Deve ter:
    indicativo do país + número
    SEM espaços e SEM sinal +

    Portugal:
    351 + número

    Exemplo:
    351912345678
*/

const numeroWhatsApp = "351926022274";


/* =========================
   HEADER AO FAZER SCROLL
========================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================
   MENU MOBILE
========================= */

const botaoMenu = document.getElementById("menu-mobile");

const nav = document.getElementById("nav");


botaoMenu.addEventListener("click", () => {

    nav.classList.toggle("aberto");

});


const linksMenu = nav.querySelectorAll("a");


linksMenu.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("aberto");

    });

});


/* =========================
   DATA MÍNIMA = HOJE
========================= */

const campoData = document.getElementById("data");

const hoje = new Date();

const ano = hoje.getFullYear();

const mes = String(
    hoje.getMonth() + 1
).padStart(2, "0");

const dia = String(
    hoje.getDate()
).padStart(2, "0");

campoData.min = `${ano}-${mes}-${dia}`;


/* =========================
   FORMULÁRIO
========================= */

const formulario = document.getElementById(
    "form-marcacao"
);


formulario.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const nome =
            document
                .getElementById("nome")
                .value
                .trim();


        const telefone =
            document
                .getElementById("telefone")
                .value
                .trim();


        const servico =
            document
                .getElementById("servico")
                .value;


        const data =
            document
                .getElementById("data")
                .value;


        const hora =
            document
                .getElementById("hora")
                .value;


        const observacoes =
            document
                .getElementById("mensagem")
                .value
                .trim();


        if (
            !nome ||
            !telefone ||
            !servico ||
            !data ||
            !hora
        ) {

            alert(
                "Preenche todos os campos obrigatórios."
            );

            return;
        }


        const dataFormatada =
            formatarData(data);


        let mensagemWhatsApp =
`Olá! Gostaria de fazer uma marcação na Barbearia Prime.

Nome: ${nome}
Telefone: ${telefone}
Serviço: ${servico}
Data: ${dataFormatada}
Hora: ${hora}`;


        if (observacoes) {

            mensagemWhatsApp +=
`\nObservações: ${observacoes}`;

        }


        mensagemWhatsApp +=
`\n\nPodem confirmar se este horário está disponível?`;


        const urlWhatsApp =
            `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
                mensagemWhatsApp
            )}`;


        window.open(
            urlWhatsApp,
            "_blank"
        );

    }
);


/* =========================
   FORMATAR DATA
========================= */

function formatarData(data) {

    const partes =
        data.split("-");

    return `${partes[2]}/${partes[1]}/${partes[0]}`;

}


/* =========================
   WHATSAPP FLUTUANTE
========================= */

const whatsappFlutuante =
    document.getElementById(
        "whatsapp-flutuante"
    );


whatsappFlutuante.addEventListener(
    "click",
    function (event) {

        event.preventDefault();


        const texto =
            "Olá! Gostaria de obter mais informações sobre a Barbearia Prime.";


        const url =
            `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
                texto
            )}`;


        window.open(
            url,
            "_blank"
        );

    }
);


/* =========================
   ANO DO FOOTER
========================= */

document.getElementById(
    "ano"
).textContent =
    new Date().getFullYear();