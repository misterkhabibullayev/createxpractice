import { allCourses } from "../../../AllCourses.js";

window.addEventListener("DOMContentLoaded", () => {
    const currentLanguage = "en";

    const locale = {
        en: {
            hero: {
                info: {
                    badge: "course",
                    title: "User Experience. Principles of Human-Centered Design",
                },

                decoration: {
                    dec1: "../../../Image/course-images/hero/arrow-right.png",
                    dec2: "../../../Image/course-images/hero/circles.png",
                    dec3: "../../../Image/course-images/hero/dots.png",
                    dec4: "../../../Image/course-images/hero/up.png",
                },
            },
            aboutTheCourse: {
                title: "About the course",
                description:
                "Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at elementum. Tellus maecenas libero est tempus sit cras at malesuada diam. Consequat senectus dictumst non hac dignissim montes, pretium, egestas molestie. Sed magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus nunc tincidunt tortor, mi nulla pellentesque",
                
            },
        },
    };

    // *************** Hero section ***************
    const heroContainer = document.getElementById("hero-container");

    function updateHero() {
        const heroData = locale[currentLanguage].hero.info;
        const heroDecorationData = locale[currentLanguage].hero.decoration;

        const badge = document.getElementById("hero-badge");
        const title = document.getElementById("hero-title");
        badge.className =
            "text-center text-[#FF3F3A] font-bold uppercase leading-[150%] tracking-[1px] mb-3 pt-[120px]";
        title.className =
            "font-black text-[#1E212C] text-5xl text-center leading-[130%] pb-[120px]";

        badge.innerHTML = heroData.badge;
        title.innerHTML = heroData.title;

        heroContainer.appendChild(badge);
        heroContainer.appendChild(title);

        const dec1 = document.createElement("div");
        const dec2 = document.createElement("div");

        const dec3 = document.createElement("div");
        const dec4 = document.createElement("div");

        // i will give position absolute for containers

        dec1.className = "absolute top-[120px] left-[10px]";
        dec2.className = "absolute bottom-0 -left-[85px]";
        dec3.className = "absolute top-[120px] -right-[85px]";
        dec4.className = "absolute bottom-0 right-[200px]";

        const decImage1 = document.createElement("img");
        const decImage2 = document.createElement("img");
        const decImage3 = document.createElement("img");
        const decImage4 = document.createElement("img");

        dec1.appendChild(decImage1);
        dec2.appendChild(decImage2);
        dec3.appendChild(decImage3);
        dec4.appendChild(decImage4);

        decImage1.src = heroDecorationData.dec1;
        decImage2.src = heroDecorationData.dec2;
        decImage3.src = heroDecorationData.dec3;
        decImage4.src = heroDecorationData.dec4;

        heroContainer.appendChild(dec1);
        heroContainer.appendChild(dec2);
        heroContainer.appendChild(dec3);
        heroContainer.appendChild(dec4);
    }
    updateHero();
    // *************** Hero section ***************

    // *************** About the course section ***************
    const aboutTheCourse = document.getElementById("aboutTheCourse");
    console.log(aboutTheCourse);

    function updateAboutTheCourse() {
        const aboutTheCourseTop = document.createElement("div");
    }
    updateAboutTheCourse();
    // *************** About the course section ***************
});
