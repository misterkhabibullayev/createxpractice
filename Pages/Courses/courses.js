window.addEventListener("DOMContentLoaded", () => {
    // const currentLanguage = en;

    const locale = {
        en: {
            onlineCourse: {
                intro: {
                    title: "Enjoy your studying!",
                    header: "Our online courses",
                },
            },
        },
    };

    // ====================== ONLINE COURSES SECTION ======================
    // function updateOnlineCourseHeader() {}

    function updateCards() {
        const categories = document.querySelectorAll(".category");
        const people = document.querySelectorAll(".person");

       

        categories.forEach((category) => {
            category.addEventListener("click", (e) => {
                e.preventDefault();

                // active vaxti
                categories.forEach((category) => {
                    category.classList.remove("border-red-500", "text-red-500");
                    category.classList.add("border-transparent");
                });

                category.classList.remove("border-transparent");
                category.classList.add("border-red-500", "text-red-500");

                const selected = category.dataset.category;

                people.forEach((person) => {
                    person.classList.toggle(
                        "hidden",
                        selected !== "all" &&
                            person.dataset.category !== selected,
                    );
                });
            });
        });
    }

    updateCards();
});


