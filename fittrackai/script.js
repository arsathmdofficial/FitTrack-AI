/* =========================
   FITTRACK AI FRONTEND LOGIC
========================= */


/* =========================
   PAGE NAVIGATION
========================= */

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================
   LOGIN
========================= */

function loginUser(event) {

    event.preventDefault();

    const email =
        document.getElementById("loginEmail").value;

    const password =
        document.getElementById("loginPassword").value;

    if (!email || !password) {
        alert("Please enter your email and password.");
        return;
    }

    alert(
        "Login UI is working successfully!\n\n" +
        "Backend authentication will be connected later."
    );
}


/* =========================
   REGISTER
========================= */

function registerUser(event) {

    event.preventDefault();

    const name =
        document.getElementById("registerName").value;

    const email =
        document.getElementById("registerEmail").value;

    const password =
        document.getElementById("registerPassword").value;


    if (!name || !email || !password) {

        alert("Please complete all fields.");

        return;
    }


    if (password.length < 6) {

        alert(
            "Password must contain at least 6 characters."
        );

        return;
    }


    alert(
        "Account form completed successfully!\n\n" +
        "Database and authentication will be connected in the backend phase."
    );
}


/* =========================
   NAVIGATION LINKS
========================= */

document.addEventListener("DOMContentLoaded", () => {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    links.forEach(link => {

        link.addEventListener("click", function(event) {

            const target =
                this.getAttribute("href");

            if (
                target === "#" ||
                target === "#home"
            ) {
                event.preventDefault();

                showPage("home");

                return;
            }


            const element =
                document.querySelector(target);

            if (element) {

                event.preventDefault();

                element.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });

});