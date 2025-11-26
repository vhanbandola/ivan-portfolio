function openCert(img) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    
    const tabs = document.querySelectorAll(".tab-btn");
    const panels = document.querySelectorAll("[data-tabpanel]");

    if (tabs.length > 0) { 
        tabs.forEach((btn) => {
            btn.addEventListener("click", () => {
                tabs.forEach((b) => b.classList.remove("active"));
                btn.classList.add("active");

                const target = btn.getAttribute("data-tab");

                panels.forEach((panel) => {
                    if (panel.getAttribute("data-tabpanel") === target || target === "all") {
                        panel.style.display = "grid";
                    } else {
                        panel.style.display = "none";
                    }
                });
            });
        });
    }

    const cards = document.querySelectorAll(".card");
    
    if (cards.length > 0) { 
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                rootMargin: "0px",
                threshold: 0.1,
            }
        );

        cards.forEach((card) => observer.observe(card));
    }

    const sections = document.querySelectorAll("#portfolio-page section"); 
    const navLinks = document.querySelectorAll("header.profile-container nav .btn");

    if (sections.length > 0) { 
        window.addEventListener("scroll", () => {
            let current = "";

            sections.forEach((section) => {
                if (section.offsetParent !== null) {
                    const top = section.offsetTop - 150;
                    if (window.scrollY >= top) current = section.getAttribute("id");
                }
            });

            navLinks.forEach((link) => {
                link.classList.remove("active-nav");
                if (link.getAttribute("href").includes(current)) {
                    link.classList.add("active-nav");
                }
            });
        });
    }
});