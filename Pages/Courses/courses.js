window.addEventListener("DOMContentLoaded", () => {
    const currentLanguage = en;

    const locale = {
        en: {
            onlineCourse: {
                intro: {
                    title: "Enjoy your studying!",
                    header: "Our online courses",
                },
            },

            testimonials: {
                intro: {
                    badge: "TESTIMONIALS",
                    title: "What our students say",
                },

                comment: {
                    opinion:
                        "Suleyman's online course is an absolute game-changer! The material is presented in a very clear, structured way, and the practical assignments help you master the concepts quickly. He is an incredibly supportive tutor who always answers questions promptly. I highly recommend this course to everyone",
                    image: "",
                    name: "Eleanor Pena",
                    completedCourse: "Position, Course",
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

    function testimonialHeader() {
        const intro = locale


        const badge = document.getElementById("testimonials-badge");
        const description = document.getElementById("testimonials-description");
    }

    testimonialHeader();
});
