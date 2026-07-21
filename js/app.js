// ===========================================
// IPANEMA SOL & MAR
// APP.JS
// ===========================================

document.addEventListener("DOMContentLoaded", () => {

    // Inicializa os ícones Lucide
    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }

    initializeResidence();

    initializeCards();

    initializeDrawer();

    initializeNavigation();

    updateGreeting();

});


// ===========================================
// DADOS DOS APARTAMENTOS
// ===========================================

const residences = {

    1: {

        name: "Ipanema Sol & Mar Residence I",

        wifi: {

            network: "IPANEMA_SOL_MAR_I",

            password: "12345678"

        }

    },

    2: {

        name: "Ipanema Sol & Mar Residence II",

        wifi: {

            network: "IPANEMA_SOL_MAR_II",

            password: "87654321"

        }

    }

};


// ===========================================
// RESIDÊNCIA ATUAL
// ===========================================

let currentResidence = residences[1];


// ===========================================
// ELEMENTOS DO DRAWER
// ===========================================

const drawer = document.getElementById("drawer");

const drawerTitle = document.getElementById("drawerTitle");

const drawerContent = document.getElementById("drawerContent");


// ===========================================
// IDENTIFICA O APARTAMENTO
// ===========================================

function initializeResidence() {

    const params = new URLSearchParams(
        window.location.search
    );

    const apt = params.get("apt") || "1";

    // Se o apartamento não existir,
    // utiliza Residence I como padrão.

    currentResidence =
        residences[apt] || residences[1];

    const residenceElement =
        document.getElementById("residence");

    if (residenceElement) {

        residenceElement.innerHTML =
            currentResidence.name;

    }

}


// ===========================================
// SAUDAÇÃO
// ===========================================

function updateGreeting() {

    const hour = new Date().getHours();

    let greeting = "Boa noite";

    if (hour >= 5 && hour < 12) {

        greeting = "Bom dia";

    }

    else if (hour >= 12 && hour < 18) {

        greeting = "Boa tarde";

    }

    const greetingElement =
        document.getElementById("greeting");

    if (greetingElement) {

        greetingElement.innerHTML =
            `${greeting} 👋`;

    }

}


// ===========================================
// CARDS DA HOME
// ===========================================

function initializeCards() {

    document
        .querySelectorAll(".card")
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    const page =
                        card.dataset.page;

                    openPage(page);

                }
            );

        });

}


// ===========================================
// DRAWER
// ===========================================

function initializeDrawer() {

    const closeButton =
        document.getElementById("closeDrawer");

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeDrawer
        );

    }

}


// ===========================================
// ABRIR DRAWER
// ===========================================

function openDrawer() {

    if (drawer) {

        drawer.classList.add("open");

        document.body.style.overflow =
            "hidden";

    }

}


// ===========================================
// FECHAR DRAWER
// ===========================================

function closeDrawer() {

    if (drawer) {

        drawer.classList.remove("open");

        document.body.style.overflow =
            "";

    }

}


// ===========================================
// ABRIR CONTEÚDO
// ===========================================

function openPage(page) {

    switch (page) {

        case "wifi":

            showWifi();

            break;


        case "house":

            showHouse();

            break;


        case "restaurants":

            showRestaurants();

            break;


        case "beaches":

            showBeaches();

            break;


        case "markets":

            showMarkets();

            break;


        case "transport":

            showTransport();

            break;


        case "map":

            showMap();

            break;


        case "favorites":

            showFavorites();

            break;


        case "contact":

            showContact();

            break;


        case "whatsapp":

            openWhatsApp();

            break;


        default:

            console.warn(
                "Página não encontrada:",
                page
            );

    }

}


// ===========================================
// MENU INFERIOR
// ===========================================

function initializeNavigation() {

    document
        .querySelectorAll(".nav-item")
        .forEach(item => {

            item.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(".nav-item")
                        .forEach(nav => {

                            nav.classList.remove(
                                "active"
                            );

                        });

                    item.classList.add(
                        "active"
                    );

                    const page =
                        item.dataset.page;

                    if (page !== "home") {

                        openPage(page);

                    }

                    else {

                        closeDrawer();

                        window.scrollTo({

                            top: 0,

                            behavior: "smooth"

                        });

                    }

                }
            );

        });

}


// ===========================================
// WIFI
// ===========================================

function showWifi() {

    drawerTitle.innerHTML =
        "Wi-Fi";

    drawerContent.innerHTML = `

        <div class="info-card">

            <h3>Rede</h3>

            <div class="value">

                ${currentResidence.wifi.network}

            </div>

        </div>


        <div class="info-card">

            <h3>Senha</h3>

            <div class="value password">

                ${currentResidence.wifi.password}

            </div>

        </div>


        <button
            class="gold-btn"
            onclick="copyWifiPassword()">

            Copiar senha

        </button>

    `;

    openDrawer();

}


// ===========================================
// COPIAR SENHA WIFI
// ===========================================

function copyWifiPassword() {

    const password =
        currentResidence.wifi.password;

    if (
        navigator.clipboard &&
        navigator.clipboard.writeText
    ) {

        navigator.clipboard
            .writeText(password)
            .then(() => {

                showToast(
                    "Senha copiada!"
                );

            })
            .catch(() => {

                showToast(
                    "Não foi possível copiar."
                );

            });

    }

    else {

        showToast(
            "Copie a senha manualmente."
        );

    }

}


// ===========================================
// HOSPEDAGEM
// ===========================================

function showHouse() {

    drawerTitle.innerHTML =
        "Sua Hospedagem";

    drawerContent.innerHTML = `

        <div class="info-card">

            <h3>Endereço</h3>

            <p>

                Rua Visconde de Pirajá, 240/502<br>

                Ipanema - Rio de Janeiro

            </p>


            <button
                class="gold-btn"
                onclick="openMaps(
                    'Rua Visconde de Pirajá, 240 Ipanema Rio de Janeiro'
                )">

                Abrir no Google Maps

            </button>

        </div>


        <div class="info-card">

            <h3>Check-in</h3>

            <p>

                A partir das <b>15:00</b>

            </p>

        </div>


        <div class="info-card">

            <h3>Check-out</h3>

            <p>

                Até <b>11:00</b>

            </p>

        </div>


        <div class="info-card">

            <h3>Regras da Casa</h3>

            <ul>

                <li>Não é permitido fumar.</li>

                <li>Silêncio após 22h.</li>

                <li>Não são permitidos animais.</li>

                <li>
                    Apague as luzes ao sair.
                </li>

                <li>
                    Feche portas e janelas.
                </li>

            </ul>

        </div>


        <div class="info-card">

            <h3>Emergência</h3>

            <p>

                Vivian<br>

                +55 21 98521-1001

            </p>


            <button
                class="gold-btn"
                onclick="openWhatsApp()">

                WhatsApp

            </button>

        </div>

    `;

    openDrawer();

}


// ===========================================
// RESTAURANTES
// ===========================================

function showRestaurants() {

    drawerTitle.innerHTML =
        "Restaurantes";

    drawerContent.innerHTML = `

        <div class="place">

            <h3>
                Zazá Bistrô Tropical
            </h3>

            <p>
                ⭐ 4.8 • 350 m
            </p>

            <button
                class="gold-btn"
                onclick="openMaps(
                    'Zazá Bistrô Ipanema Rio de Janeiro'
                )">

                Abrir no Google Maps

            </button>

        </div>


        <div class="place">

            <h3>
                Gurumê Ipanema
            </h3>

            <p>
                ⭐ 4.7 • 450 m
            </p>

            <button
                class="gold-btn"
                onclick="openMaps(
                    'Gurumê Ipanema Rio de Janeiro'
                )">

                Abrir no Google Maps

            </button>

        </div>


        <div class="place">

            <h3>
                Frontera
            </h3>

            <p>
                ⭐ 4.5 • 500 m
            </p>

            <button
                class="gold-btn"
                onclick="openMaps(
                    'Frontera Ipanema Rio de Janeiro'
                )">

                Abrir no Google Maps

            </button>

        </div>

    `;

    openDrawer();

}


// ===========================================
// PRAIAS
// ===========================================

function showBeaches() {

    drawerTitle.innerHTML =
        "Praias";

    drawerContent.innerHTML = `

        <div class="place">

            <h3>
                Praia de Ipanema
            </h3>

            <p>
                350 metros
            </p>

            <button
                class="gold-btn"
                onclick="openMaps(
                    'Praia de Ipanema Rio de Janeiro'
                )">

                Ver no mapa

            </button>

        </div>


        <div class="place">

            <h3>
                Praia do Arpoador
            </h3>

            <p>
                900 metros
            </p>

            <button
                class="gold-btn"
                onclick="openMaps(
                    'Praia do Arpoador Rio de Janeiro'
                )">

                Ver no mapa

            </button>

        </div>


        <div class="place">

            <h3>
                Praia de Copacabana
            </h3>

            <p>
                Aproximadamente 15 minutos
            </p>

            <button
                class="gold-btn"
                onclick="openMaps(
                    'Praia de Copacabana Rio de Janeiro'
                )">

                Ver no mapa

            </button>

        </div>

    `;

    openDrawer();

}


// ===========================================
// MERCADOS
// ===========================================

function showMarkets() {

    drawerTitle.innerHTML =
        "Mercados";

    drawerContent.innerHTML = `

        <div class="place">

            <h3>
                Zona Sul
            </h3>

            <p>
                250 metros
            </p>

        </div>


        <div class="place">

            <h3>
                Pão de Açúcar
            </h3>

            <p>
                450 metros
            </p>

        </div>


        <div class="place">

            <h3>
                Hortifruti
            </h3>

            <p>
                500 metros
            </p>

        </div>

    `;

    openDrawer();

}


// ===========================================
// TRANSPORTE
// ===========================================

function showTransport() {

    drawerTitle.innerHTML =
        "Transporte";

    drawerContent.innerHTML = `

        <div class="info-card">

            <h3>
                Metrô Nossa Senhora da Paz
            </h3>

            <p>
                450 metros
            </p>

        </div>


        <div class="info-card">

            <h3>
                Uber
            </h3>

            <p>
                Disponível 24 horas.
            </p>

        </div>


        <div class="info-card">

            <h3>
                Táxi
            </h3>

            <p>
                Ponto na Rua Visconde
                de Pirajá.
            </p>

        </div>

    `;

    openDrawer();

}


// ===========================================
// MAPA
// ===========================================

function showMap() {

    drawerTitle.innerHTML =
        "Mapa";

    drawerContent.innerHTML = `

        <iframe

            src="https://www.google.com/maps?q=Ipanema,Rio+de+Janeiro&output=embed"

            width="100%"

            height="450"

            style="
                border:0;
                border-radius:18px;
            "

            loading="lazy">

        </iframe>

    `;

    openDrawer();

}


// ===========================================
// FAVORITOS
// ===========================================

function showFavorites() {

    drawerTitle.innerHTML =
        "Favoritos";

    drawerContent.innerHTML = `

        <div class="info-card">

            <h3>
                Seus favoritos
            </h3>

            <p>

                Você ainda não adicionou
                nenhum lugar aos favoritos.

            </p>

        </div>

    `;

    openDrawer();

}


// ===========================================
// CONTATO
// ===========================================

function showContact() {

    drawerTitle.innerHTML =
        "Contato";

    drawerContent.innerHTML = `

        <div class="info-card">

            <h3>
                Precisa de ajuda?
            </h3>

            <p>

                Estamos à disposição
                para ajudar durante
                sua estadia.

            </p>

            <button
                class="gold-btn"
                onclick="openWhatsApp()">

                Falar pelo WhatsApp

            </button>

        </div>

    `;

    openDrawer();

}


// ===========================================
// WHATSAPP
// ===========================================

function openWhatsApp() {

    const phone =
        "5521999999999";

    window.open(
        `https://wa.me/${phone}`,
        "_blank",
        "noopener,noreferrer"
    );

}


// ===========================================
// GOOGLE MAPS
// ===========================================

function openMaps(place) {

    const url =
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`;

    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}


// ===========================================
// TOAST
// ===========================================

function showToast(message) {

    let toast =
        document.getElementById("toast");

    if (!toast) {

        toast =
            document.createElement("div");

        toast.id =
            "toast";

        document.body.appendChild(toast);

    }

    toast.textContent =
        message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove(
            "show"
        );

    }, 2500);

}
