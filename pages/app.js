// ===========================================
// IPANEMA SOL & MAR
// APP.JS
// ===========================================


// ===========================================
// INICIALIZAÇÃO
// ===========================================

document.addEventListener("DOMContentLoaded", () => {

    lucide.createIcons();

    initializeResidence();

    initializeCards();

    initializeDrawer();

    initializeNavigation();

    updateGreeting();

});


// ===========================================
// DADOS DAS RESIDÊNCIAS
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
// FAVORITOS
// ===========================================

let favorites = [];


// ===========================================
// IDENTIFICA A RESIDÊNCIA
// ===========================================

function initializeResidence() {

    const params =
        new URLSearchParams(window.location.search);

    const apt =
        params.get("apt") || "1";


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

    const hour =
        new Date().getHours();


    let greeting =
        "Boa noite 🌙";


    if (hour >= 5 && hour < 12) {

        greeting =
            "Bom dia ☀️";

    }


    if (hour >= 12 && hour < 18) {

        greeting =
            "Boa tarde ☀️";

    }


    const greetingElement =
        document.getElementById("greeting");


    if (greetingElement) {

        greetingElement.innerHTML =
            greeting;

    }

}


// ===========================================
// CARDS
// ===========================================

function initializeCards() {

    document
        .querySelectorAll(
            ".explore-card, .outline-btn"
        )
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    const page =
                        card.dataset.page;


                    if (page) {

                        openPage(page);

                    }

                }
            );

        });

}


// ===========================================
// DRAWER
// ===========================================

const drawer =
    document.getElementById("drawer");


const drawerTitle =
    document.getElementById("drawerTitle");


const drawerContent =
    document.getElementById("drawerContent");


// ===========================================
// INICIALIZA DRAWER
// ===========================================

function initializeDrawer() {

    const closeButton =
        document.getElementById(
            "closeDrawer"
        );


    if (closeButton) {

        closeButton.onclick =
            closeDrawer;

    }

}


// ===========================================
// ABRIR DRAWER
// ===========================================

function openDrawer() {

    drawer.classList.add("open");

}


// ===========================================
// FECHAR DRAWER
// ===========================================

function closeDrawer() {

    drawer.classList.remove("open");

}


// ===========================================
// ABRIR PÁGINA
// ===========================================

function openPage(page) {

    switch (page) {


        // ================================
        // WIFI
        // ================================

        case "wifi":

            showWifi();

            break;


        // ================================
        // HOSPEDAGEM
        // ================================

        case "house":

            showHouse();

            break;


        // ================================
        // RESTAURANTES
        // ================================

        case "restaurants":

            showRestaurants();

            break;


        // ================================
        // CAFÉS
        // ================================

        case "cafes":

            showCafes();

            break;


        // ================================
        // BARES
        // ================================

        case "bars":

            showBars();

            break;


        // ================================
        // PRAIAS
        // ================================

        case "beaches":

            showBeaches();

            break;


        // ================================
        // MERCADOS
        // ================================

        case "markets":

            showMarkets();

            break;


        // ================================
        // FARMÁCIAS
        // ================================

        case "pharmacies":

            showPharmacies();

            break;


        // ================================
        // ACADEMIAS
        // ================================

        case "gyms":

            showGyms();

            break;


        // ================================
        // TRANSPORTE
        // ================================

        case "transport":

            showTransport();

            break;


        // ================================
        // MAPA
        // ================================

        case "map":

            showMap();

            break;


        // ================================
        // FAVORITOS
        // ================================

        case "favorites":

            showFavorites();

            break;


        // ================================
        // CONTATO
        // ================================

        case "contact":

            showContact();

            break;


        // ================================
        // WHATSAPP
        // ================================

        case "whatsapp":

            window.open(
                "https://wa.me/5521999999999"
            );

            break;

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
                        .querySelectorAll(
                            ".nav-item"
                        )
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


                    if (
                        page !== "home"
                    ) {

                        openPage(page);

                    } else {

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

            <h3>📶 Rede</h3>

            <div class="value">

                ${currentResidence.wifi.network}

            </div>

        </div>


        <div class="info-card">

            <h3>🔐 Senha</h3>

            <div class="value password">

                ${currentResidence.wifi.password}

            </div>

        </div>


        <button
            class="gold-btn"
            onclick="copyWifiPassword()"
        >

            Copiar senha

        </button>

    `;


    openDrawer();

}


// ===========================================
// COPIAR SENHA WIFI
// ===========================================

function copyWifiPassword() {

    navigator.clipboard.writeText(

        currentResidence.wifi.password

    );


    showToast(
        "Senha copiada!"
    );

}


// ===========================================
// HOSPEDAGEM
// ===========================================

function showHouse() {

    drawerTitle.innerHTML =
        "🏠 Sua Hospedagem";


    drawerContent.innerHTML = `

        <div class="info-card">

            <h3>📍 Endereço</h3>

            <p>

                Rua Prudente de Morais, XXX<br>

                Ipanema - Rio de Janeiro

            </p>


            <button
                class="gold-btn"
                onclick="
                window.open(
                'https://maps.google.com/?q=Rua Prudente de Morais Ipanema'
                )
                "
            >

                Abrir no Google Maps

            </button>

        </div>


        <div class="info-card">

            <h3>🕒 Check-in</h3>

            <p>

                A partir das <b>15:00</b>

            </p>

        </div>


        <div class="info-card">

            <h3>🧳 Check-out</h3>

            <p>

                Até <b>11:00</b>

            </p>

        </div>


        <div class="info-card">

            <h3>📋 Regras da Casa</h3>

            <ul>

                <li>
                    🚭 Não é permitido fumar.
                </li>

                <li>
                    🔇 Silêncio após 22h.
                </li>

                <li>
                    🐶 Não são permitidos animais.
                </li>

                <li>
                    💡 Apague luzes e
                    ar-condicionado ao sair.
                </li>

                <li>
                    🔐 Feche portas e janelas.
                </li>

            </ul>

        </div>


        <div class="info-card">

            <h3>☎ Emergência</h3>

            <p>

                Alexandre<br>

                +55 21 99999-9999

            </p>


            <button
                class="gold-btn"
                onclick="
                window.open(
                'https://wa.me/5521999999999'
                )
                "
            >

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
        "🍽 Restaurantes";


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
                onclick="
                window.open(
                'https://maps.google.com/?q=Zaza+Bistro+Ipanema'
                )
                "
            >

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
                onclick="
                window.open(
                'https://maps.google.com/?q=Gurume+Ipanema'
                )
                "
            >

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
                onclick="
                window.open(
                'https://maps.google.com/?q=Frontera+Ipanema'
                )
                "
            >

                Abrir no Google Maps

            </button>

        </div>

    `;


    openDrawer();

}


// ===========================================
// CAFÉS
// ===========================================

function showCafes() {

    drawerTitle.innerHTML =
        "☕ Cafés";


    drawerContent.innerHTML = `

        <div class="place">

            <h3>
                Café do Alto
            </h3>

            <p>
                Café brasileiro e ambiente acolhedor.
            </p>


            <button
                class="gold-btn"
                onclick="
                window.open(
                'https://maps.google.com/?q=Cafe+do+Alto+Ipanema+Rio+de+Janeiro'
                )
                "
            >

                Abrir no Google Maps

            </button>

        </div>


        <div class="place">

            <h3>
                Gringo Café
            </h3>

            <p>
                Café da manhã e brunch.
            </p>


            <button
                class="gold-btn"
                onclick="
                window.open(
                'https://maps.google.com/?q=Gringo+Cafe+Ipanema+Rio+de+Janeiro'
                )
                "
            >

                Abrir no Google Maps

            </button>

        </div>


        <div class="place">

            <h3>
                The Bakers
            </h3>

            <p>
                Padaria, cafés e doces.
            </p>


            <button
                class="gold-btn"
                onclick="
                window.open(
                'https://maps.google.com/?q=The+Bakers+Ipanema+Rio+de+Janeiro'
                )
                "
            >

                Abrir no Google Maps

            </button>

        </div>

    `;


    openDrawer();

}


// ===========================================
// BARES
// ===========================================

function showBars() {

    drawerTitle.innerHTML =
        "🍹 Bares";


    drawerContent.innerHTML = `

        <div class="place">

            <h3>
                Bar Belmonte
            </h3>

            <p>
                Boteco carioca clássico.
            </p>


            <button
                class="gold-btn"
                onclick="
                window.open(
                'https://maps.google.com/?q=Bar+Belmonte+Ipanema'
                )
                "
            >

                Abrir no Google Maps

            </button>

        </div>


        <div class="place">

            <h3>
                Bar Garota de Ipanema
            </h3>

            <p>
                Um dos bares mais tradicionais do bairro.
            </p>


            <button
                class="gold-btn"
                onclick="
                window.open(
                'https://maps.google.com/?q=Garota+de+Ipanema+bar'
                )
                "
            >

                Abrir no Google Maps

            </button>

        </div>


        <div class="place">

            <h3>
                Bar do Mineiro
            </h3>

            <p>
                Comida brasileira e ambiente descontraído.
            </p>


            <button
                class="gold-btn"
                onclick="
                window.open(
                'https://maps.google.com/?q=Bar+do+Mineiro+Ipanema'
                )
                "
            >

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
        "🏖 Praias";


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
                onclick="
                window.open(
                'https://maps.google.com/?q=Praia+de+Ipanema'
                )
                "
            >

                Ver no Google Maps

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
                onclick="
                window.open(
                'https://maps.google.com/?q=Praia+do+Arpoador'
                )
                "
            >

                Ver no Google Maps

            </button>

        </div>


        <div class="place">

            <h3>
                Praia de Copacabana
            </h3>

            <p>
                Aproximadamente 15 minutos.
            </p>


            <button
                class="gold-btn"
                onclick="
                window.open(
                'https://maps.google.com/?q=Praia+de+Copacabana'
                )
                "
            >

                Ver no Google Maps

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
        "🛒 Mercados";


    drawerContent.innerHTML = `

        <div class="place">

            <h3>
                Zona Sul
            </h3>

            <p>
                Mercado próximo à residência.
            </p>


            <button
                class="gold-btn"
                onclick="
                window.open(
                'https://maps.google.com/?q=Supermercado+Zona+Sul+Ipanema'
                )
                "
            >

                Abrir no Google Maps

            </button>

        </div>


        <div class="place">

            <h3>
                Pão de Açúcar
            </h3>

            <p>
                Supermercado completo.
            </p>


            <button
                class="gold-btn"
                onclick="
                window.open(
                'https://maps.google.com/?q=Pao+de+Acucar+Ipanema+Rio+de+Janeiro'
                )
                "
            >

                Abrir no Google Maps

            </button>

        </div>


        <div class="place">

            <h3>
                Hortifruti
            </h3>

            <p>
                Frutas, legumes e produtos frescos.
            </p>


            <button
                class="gold-btn"
                onclick="
                window.open(
                'https://maps.google.com/?q=Hortifruti+Ipanema+Rio+de+Janeiro'
                )
                "
            >

                Abrir no Google Maps

            </button>

        </div>

    `;


    openDrawer();

}


// ===========================================
// FARMÁCIAS
// ===========================================

function showPharmacies() {

    drawerTitle.innerHTML =
        "💊 Farmácias";


    drawerContent.innerHTML = `

        <div class="place">

            <h3>
                Drogasil
            </h3>

            <p>
                Farmácia e produtos de saúde.
            </p>


            <button
                class="gold-btn"
                onclick="
                window.open(
                'https://maps.google.com/?q=Drogasil+Ipanema+Rio+de+Janeiro'
                )
                "
            >

                Abrir no Google Maps

            </button>

        </div>


        <div class="place">

            <h3>
                Pacheco
            </h3>

            <p>
                Farmácia próxima à residência.
            </p>


            <button
                class="gold-btn"
                onclick="
                window.open(
                'https://maps.google.com/?q=Drogarias+Pacheco+Ipanema'
                )
                "
            >

                Abrir no Google Maps

            </button>

        </div>


        <div class="place">

            <h3>
                Drogaria Venancio
            </h3>

            <p>
                Farmácia e conveniência.
            </p>


            <button
                class="gold-btn"
                onclick="
                window.open(
                'https://maps.google.com/?q=Drogaria+Venancio+Ipanema'
                )
                "
            >

                Abrir no Google Maps

            </button>

        </div>

    `;


    openDrawer();

}


// ===========================================
// ACADEMIAS
// ===========================================

function showGyms() {

    drawerTitle.innerHTML =
        "🏋 Academias";


    drawerContent.innerHTML = `

        <div class="place">

            <h3>
                Bodytech Ipanema
            </h3>

            <p>
                Academia completa e moderna.
            </p>


            <button
                class="gold-btn"
                onclick="
                window.open(
                'https://maps.google.com/?q=Bodytech+Ipanema'
                )
                "
            >

                Abrir no Google Maps

            </button>

        </div>


        <div class="place">

            <h3>
                Smart Fit Ipanema
            </h3>

            <p>
                Academia com acesso diário.
            </p>


            <button
                class="gold-btn"
                onclick="
                window.open(
                'https://maps.google.com/?q=Smart+Fit+Ipanema'
                )
                "
            >

                Abrir no Google Maps

            </button>

        </div>

    `;


    openDrawer();

}


// ===========================================
// TRANSPORTE
// ===========================================

function showTransport() {

    drawerTitle.innerHTML =
        "🚇 Transporte";


    drawerContent.innerHTML = `

        <div class="info-card">

            <h3>
                🚇 Metrô Nossa Senhora da Paz
            </h3>

            <p>
                Aproximadamente 450 metros.
            </p>

        </div>


        <div class="info-card">

            <h3>
                🚗 Uber
            </h3>

            <p>
                Disponível 24 horas.
            </p>

        </div>


        <div class="info-card">

            <h3>
                🚕 Táxi
            </h3>

            <p>
                Pontos disponíveis nas principais ruas de Ipanema.
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
        "🗺 Mapa";


    drawerContent.innerHTML = `

        <iframe

            src="
            https://www.google.com/maps?q=Ipanema,Rio+de+Janeiro&output=embed
            "

            width="100%"

            height="450"

            style="
                border:0;
                border-radius:18px;
            "

            loading="lazy"

        ></iframe>

    `;


    openDrawer();

}


// ===========================================
// FAVORITOS
// ===========================================

function showFavorites() {

    drawerTitle.innerHTML =
        "❤️ Favoritos";


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
        "📞 Contato";


    drawerContent.innerHTML = `

        <div class="info-card">

            <h3>
                Ipanema Sol & Mar
            </h3>

            <p>

                Estamos disponíveis
                para ajudar durante sua estadia.

            </p>


            <button
                class="gold-btn"
                onclick="
                window.open(
                'https://wa.me/5521999999999'
                )
                "
            >

                💬 Falar pelo WhatsApp

            </button>

        </div>

    `;


    openDrawer();

}


// ===========================================
// TOAST
// ===========================================

function showToast(message) {


    let toast =
        document.getElementById(
            "toast"
        );


    if (!toast) {


        toast =
            document.createElement(
                "div"
            );


        toast.id =
            "toast";


        document.body.appendChild(
            toast
        );

    }


    toast.innerHTML =
        message;


    toast.classList.add(
        "show"
    );


    setTimeout(() => {

        toast.classList.remove(
            "show"
        );

    }, 2500);

}
