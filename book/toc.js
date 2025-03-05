// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="index.html">@DigitalP2PBot</a></li><li class="chapter-item expanded "><a href="faq.html"><strong aria-hidden="true">1.</strong> FAQ</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="what-is-digitalp2pbot.html"><strong aria-hidden="true">1.1.</strong> ¿Qué es DigitalP2PBot?</a></li><li class="chapter-item expanded "><a href="what-is-polygon-network.html"><strong aria-hidden="true">1.2.</strong> ¿Qué es la red Polygon?</a></li><li class="chapter-item expanded "><a href="what-do-i-need-to-use-digitalp2pbot.html"><strong aria-hidden="true">1.3.</strong> ¿Qué necesito para usar @DigitalP2PBot?</a></li><li class="chapter-item expanded "><a href="how-do-i-initialize-the-bot.html"><strong aria-hidden="true">1.4.</strong> ¿Cómo inicializo el bot?</a></li><li class="chapter-item expanded "><a href="what-are-the-channels-to-make-exchanges-on-telegram.html"><strong aria-hidden="true">1.5.</strong> ¿Cuáles son los canales para realizar intercambios en telegram?</a></li><li class="chapter-item expanded "><a href="do-i-need-to-fill-out-any-user-registration-or-KYC.html"><strong aria-hidden="true">1.6.</strong> ¿Necesito llenar algún registro o verificación de identidad?</a></li><li class="chapter-item expanded "><a href="what-type-of-information-do-you-collect-from-each-user.html"><strong aria-hidden="true">1.7.</strong> ¿Qué tipo de información recopilan de cada usuario?</a></li><li class="chapter-item expanded "><a href="how-does-the-user-reputation-system-work.html"><strong aria-hidden="true">1.8.</strong> ¿Cómo funciona el sistema de reputación de usuario?</a></li><li class="chapter-item expanded "><a href="how-do-i-create-a-sell-order.html"><strong aria-hidden="true">1.9.</strong> ¿Cómo creo una orden de venta?</a></li><li class="chapter-item expanded "><a href="how-do-i-create-a-buy-order.html"><strong aria-hidden="true">1.10.</strong> ¿Cómo creo una orden de compra?</a></li><li class="chapter-item expanded "><a href="how-do-i-find-and-accept-an-offer-to-buy-or-sell.html"><strong aria-hidden="true">1.11.</strong> ¿Cómo busco y acepto una oferta de compra o venta?</a></li><li class="chapter-item expanded "><a href="how-do-i-cancel-a-posted-order.html"><strong aria-hidden="true">1.12.</strong> ¿Cómo cancelo una orden publicada?</a></li><li class="chapter-item expanded "><a href="is-there-a-limit-on-the-amounts-i-can-trade.html"><strong aria-hidden="true">1.13.</strong> ¿Hay límites mínimos o máximos en las cantidades que puedo transar?</a></li><li class="chapter-item expanded "><a href="how-long-does-it-take-to-finalize-a-transaction.html"><strong aria-hidden="true">1.14.</strong> ¿Cuánto tiempo toma concretar una transacción?</a></li><li class="chapter-item expanded "><a href="fees-and-commissions.html"><strong aria-hidden="true">1.15.</strong> ¿Qué tarifas y comisiones debo pagar?</a></li><li class="chapter-item expanded "><a href="what-exchange-rate-does-the-bot-use.html"><strong aria-hidden="true">1.16.</strong> ¿Qué tasa de cambio utiliza el bot?</a></li><li class="chapter-item expanded "><a href="in-which-countries-is-it-available.html"><strong aria-hidden="true">1.17.</strong> ¿En qué países está disponible?</a></li><li class="chapter-item expanded "><a href="recommended-wallets.html"><strong aria-hidden="true">1.18.</strong> Wallets recomendadas</a></li><li class="chapter-item expanded "><a href="common-problems-and-solutions.html"><strong aria-hidden="true">1.19.</strong> Problemas comunes y soluciones</a></li><li class="chapter-item expanded "><a href="how-do-i-know-if-seller-released.html"><strong aria-hidden="true">1.20.</strong> ¿Cómo sé si el vendedor realmente liberó los USDT-USDC?</a></li><li class="chapter-item expanded "><a href="i-cant-receive.html"><strong aria-hidden="true">1.21.</strong> No he podido recibir los USDT-USDC por mi compra</a></li><li class="chapter-item expanded "><a href="support.html"><strong aria-hidden="true">1.22.</strong> Soporte</a></li><li class="chapter-item expanded "><a href="contact-with-developers.html"><strong aria-hidden="true">1.23.</strong> Contacto con desarrolladores</a></li><li class="chapter-item expanded "><a href="i-am-a-developer-and-i-want-to-contribute.html"><strong aria-hidden="true">1.24.</strong> Soy desarrollador y quiero contribuir</a></li><li class="chapter-item expanded "><a href="trust.html"><strong aria-hidden="true">1.25.</strong> Confianza</a></li><li class="chapter-item expanded "><a href="benevolent-dictator.html"><strong aria-hidden="true">1.26.</strong> Dictador Benevolente</a></li><li class="chapter-item expanded "><a href="what-is-a-solver.html"><strong aria-hidden="true">1.27.</strong> ¿Qué es un Solver</a></li><li class="chapter-item expanded "><a href="resolving-disputes.html"><strong aria-hidden="true">1.28.</strong> Resolviendo disputas-**</a></li><li class="chapter-item expanded "><a href="settle-order.html"><strong aria-hidden="true">1.29.</strong> Completando una orden-**</a></li><li class="chapter-item expanded "><a href="cancel-order.html"><strong aria-hidden="true">1.30.</strong> Cancelando una orden-**</a></li><li class="chapter-item expanded "><a href="removing-disputes.html"><strong aria-hidden="true">1.31.</strong> Eliminando disputas-**</a></li><li class="chapter-item expanded "><a href="ban-user-community.html"><strong aria-hidden="true">1.32.</strong> Expulsar a un usuario de la comunidad</a></li><li class="chapter-item expanded "><a href="safe-trades-on-digitalp2pbot.html"><strong aria-hidden="true">1.33.</strong> Intercambios seguros en @DigitalP2PBot</a></li><li class="chapter-item expanded "><a href="scam-attempts.html"><strong aria-hidden="true">1.34.</strong> Intentos de estafas</a></li><li class="chapter-item expanded "><a href="tips-to-avoid-scams.html"><strong aria-hidden="true">1.35.</strong> Consejos para evitar estafas</a></li><li class="chapter-item expanded "><a href="account-triangulation-scams.html"><strong aria-hidden="true">1.36.</strong> Estafas por triangulación de cuentas o estafas puente</a></li><li class="chapter-item expanded "><a href="prevention-of-account-triangulation-scams.html"><strong aria-hidden="true">1.37.</strong> Prevención de estafas puente</a></li><li class="chapter-item expanded "><a href="contribute.html"><strong aria-hidden="true">1.38.</strong> Cómo colaborar</a></li><li class="chapter-item expanded "><a href="how-translate-the-bot.html"><strong aria-hidden="true">1.39.</strong> Cómo traducir el bot</a></li><li class="chapter-item expanded "><a href="how-colaborate-with-documentation-translation.html"><strong aria-hidden="true">1.40.</strong> Cómo traducir y colaborar con la documentación</a></li><li class="chapter-item expanded "><a href="development.html"><strong aria-hidden="true">1.41.</strong> Desarrollo-**</a></li><li class="chapter-item expanded "><a href="bugs-report.html"><strong aria-hidden="true">1.42.</strong> Reportar errores</a></li><li class="chapter-item expanded "><a href="improvement-propose.html"><strong aria-hidden="true">1.43.</strong> Proponer mejoras</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
