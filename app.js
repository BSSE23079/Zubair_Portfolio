document.addEventListener("DOMContentLoaded", function () {
    //    1. PROJECT FILTERING
    let filterButtons = document.querySelectorAll(".filter-btn");
    let projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {

            // Remove active class from all buttons
            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            // Add active class to clicked button
            button.classList.add("active");

            let filter = button.getAttribute("data-filter");

            // Show / hide projects
            projectCards.forEach(function (card) {
                let category = card.getAttribute("data-category");

                if (filter === "all" || category === filter) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });

        });
    });


    // TYPING EFFECT
    let subtitle = document.querySelector("header h2");

    if (subtitle) {
        let text = subtitle.innerText;
        subtitle.innerText = "";
        let index = 0;

        function typeText() {
            if (index < text.length) {
                subtitle.innerText += text[index];
                index++;
                setTimeout(typeText, 80);
            }
        }

        typeText();
    }

});
