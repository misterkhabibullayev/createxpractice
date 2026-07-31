import { translateLang } from "../../Pages/About/about.js";
const allBlog = [
    {
        id: 1,
        type: "Podcast",
        image: "../../Image/aboutUs-photo/mic.svg",
        mainImg: "../../Image/aboutUs-photo/girl-image.png",
        cardType: "Marketing",
        dateImg: "../../Image/aboutUs-photo/Vector (Stroke).svg",
        cardDate: `${translateLang[currentLang].section8.september} 4, 2020`,
        cardTime: `36  ${translateLang[currentLang].section8.min}`,
        timeImg: "../../Image/aboutUs-photo/Union.svg",
        cardTitle: translateLang[currentLang].section8.section8_card1_title,
        cardText: translateLang[currentLang].section8.section8_card1_text,
    },
];
let currentLang = localStorage.getItem("selectedLang") || "en";
// header start
const headerMain = document.querySelector("#headerMain");
headerMain.innerHTML = `
<div class="container mx-auto px-5 md:px-10 lg:px-15 flex justify-between items-center py-5">
    <div class="flex items-center gap-7 md:gap-10">
            <a href="/index.html">
                <img
                    src="../../Image/HomePagePhoto/logo.svg" alt="logo image"/>
            </a>
        <nav class="hidden lg:flex items-center gap-4 xl:gap-8">
            <a href="../../Pages/About/about.html" class="font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300">${translateLang[currentLang].header.navAbout}</a>
            <a href="../../Pages/Courses/courses.html"
               class="font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300">
               ${translateLang[currentLang].header.navCourses}</a>
            <a href="../../Pages/Events/events.html"
               class="font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300">
               ${translateLang[currentLang].header.navEvents} </a>
            <a href="../../Pages/Blogs/blogs.html"
               class="font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300">${translateLang[currentLang].header.navBlog}</a>
            <a href="../../Pages/Contacts/contacts.html"
               class="font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300">
               ${translateLang[currentLang].header.navContacts}</a>
        </nav>
    </div>
    <div class="flex items-center gap-3 md:gap-4">
        <div class="flex items-center gap-3 md:gap-4">
            <a href="./Pages/Contacts/contacts.html"
               class="font-bold text-[12px] lg:py-1 md:leading-6 lg:leading-4 tracking-[0.5px] text-white bg-gradient-to-r from-[#FF3F3A] to-[#F75E05] px-5 lg:px-3 rounded-[4px] hidden sm:inline-block hover:bg-gradient-to-l hover:from-[#F75E05] hover:to-[#FF3F3A]">${translateLang[currentLang].header.getConsultation}</a>
            <a href="#!"
               class="hidden lg:flex gap-2 items-center font-bold text-3 lg:text-2 lg:leading-4 text-gray-800">
               <img src="../../Image/HomePagePhoto/Profile.svg"/>
                    ${translateLang[currentLang].header.loginRegister}</a>
        </div>
        <div class="hidden min-[300px]:block relative">
            <button class=" flex items-center gap-1 px-2 rounded-[20px]" id="langBtn"></button>
                <div
                    class="bg-[#F75E05] flex-col items-center gap-1.5 py-1.5 rounded-[10px] absolute top-[30px] w-full hidden"
                    id="langModal"></div>
        </div>
            <button class="block lg:hidden">
                <img src="../../Image/HomePagePhoto/stash--burger-classic-light.svg"/></button>
    </div>
</div>`;
// header end

// LANGUAGE BUTTON
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 300) {
        header.classList.add(
            "fixed",
            "top-0",
            "left-0",
            "bg-white",
            "shadow-[0px_8px_8px_0px_rgba(0,0,0,0.1)]",
        );
        header.classList.remove("bg-transparent");
    } else {
        header.classList.remove(
            "fixed",
            "top-0",
            "left-0",
            "bg-white",
            "shadow-[0px_8px_8px_0px_rgba(0,0,0,0.1)]",
        );
        header.classList.add("bg-transparent");
    }
});

const langBtn = document.querySelector("#langBtn");
const langModal = document.querySelector("#langModal");

const selectedLang = localStorage.getItem("selectedLang");

if (!localStorage.getItem("selectedLang")) {
    localStorage.setItem("selectedLang", currentLang);
}
mainLangButton();

function updateLangModal() {
    langModal.innerHTML = "";

    Object.keys(translateLang).forEach((langKey) => {
        if (langKey !== currentLang) {
            const targetLang = langKey;

            const langModalOption = document.createElement("button");
            langModalOption.className =
                "w-full flex items-center justify-center gap-1.5 group hover:bg-[#FF3F3A] rounded transition-all duration-300";
            langModalOption.innerHTML = `
            <img src="${translateLang[targetLang].header.flag}" />
            <span class="text-white text-[12px]">${translateLang[targetLang].header.langTitle}<span>`;

            langModalOption.addEventListener("click", () => {
                localStorage.setItem("selectedLang", targetLang);
                currentLang = targetLang;
                mainLangButton();
                updateLangModal();
                window.location.reload();
            });
            langModal.appendChild(langModalOption);
        }
    });
}
function mainLangButton() {
    langBtn.innerHTML = `
        <img src="${translateLang[currentLang].header.flag}"/>
        <span class="downSpan transition-all duration-300">
            <img src="../../Image/HomePagePhoto/icon-park-solid--down-one.svg"/>
        </span>`;
}

langBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const downSpan = document.querySelector(".downSpan");
    langModal.classList.toggle("hidden");
    langModal.classList.toggle("flex");
    downSpan.classList.toggle("rotate-180");
});
document.addEventListener("click", () => {
    langModal.classList.add("hidden");
    langModal.classList.remove("flex");
    const downSpan = document.querySelector(".downSpan");
    if (downSpan) downSpan.classList.remove("rotate-180");
});
updateLangModal();
