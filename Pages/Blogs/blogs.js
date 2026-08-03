import { allBlogPosts } from "../../AllBlogPosts.js";
// import { translateLang } from "../../Pages/About/about.js";

const translateLang = {
    en: {
        header: {
            langTitle: "EN",
            flag: "../../Image/HomePagePhoto/twemoji--flag-united-states.svg",
            navAbout: "About Us",
            navCourses: "Courses",
            navEvents: "Events",
            navBlog: "Blog",
            navContacts: "Contacts",
            getConsultation: "Get consultation",
            loginRegister: "Log in / Register",
        },

        footer: {
            footerDescription:
                "Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts. We provide relevant approaches to online learning, internships and employment in the largest companies in the country.",
            siteMap: "SITE MAP",
            courses: "COURSES",
            marketing: "Marketing",
            management: "Management",
            hrRecruting: "HR & Recruting",
            design: "Design",
            development: "Development",
            contactUs: "CONTACT US",
            signUpNewsLatter: "SIGN UP TO OUR NEWSLETTER",
            signUpNewsLatterPlaceholder: "Email address",
            signUpSubscribe:
                "*Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.",
            copyRight: "All rights reserved.",
            madeWith: "Made with by Limon IT ",
            backtoTop: "Back to top",
        },
    },
    uz: {
        header: {
            langTitle: "UZ",
            flag: "../../Image/HomePagePhoto/twemoji--flag-uzbekistan.svg",
            navAbout: "Biz haqimizda",
            navCourses: "Kurslar",
            navEvents: "Tadbirlar",
            navBlog: "Blog",
            navContacts: "Kontaktlar",
            getConsultation: "Konsultatsiya olish",
            loginRegister: "Kirish / Ro'yxatdan o'tish",
        },

        footer: {
            footerDescription:
                "Createx Onlayn Maktabi onlayn ta'lim sohasidagi yetakchilardan biridir. Biz zamonaviy ta'lim va ishga joylashish imkoniyatlarini taklif qilamiz.",
            siteMap: "SAYT XARITASI",
            courses: "KURSLAR",
            marketing: "Marketing",
            management: "Menejment",
            hrRecruting: "HR va Rekruting",
            design: "Dizayn",
            development: "Dasturlash",
            contactUs: "BOG'LANISH",
            signUpNewsLatter: "YANGILIKLARGA OBUNA BO'LING",
            signUpNewsLatterPlaceholder: "Email manzil",
            signUpSubscribe:
                "*Yangiliklar va ilk yangilanishlarni olish uchun obuna bo'ling.",
            copyRight: "Barcha huquqlar himoyalangan.",
            madeWith: "Limon IT tomonidan yaratildi",
            backtoTop: "Yuqoriga qaytish",
        },
    },
    ru: {
        header: {
            langTitle: "RU",
            flag: "../../Image/HomePagePhoto/twemoji--flag-russia.svg",
            navAbout: "О нас",
            navCourses: "Курсы",
            navEvents: "Мероприятия",
            navBlog: "Блог",
            navContacts: "Контакты",
            getConsultation: "Получить консультацию",
            loginRegister: "Войти / Зарегистрироваться",
        },

        footer: {
            footerDescription:
                "Онлайн-школа Createx — лидер в сфере онлайн-образования. Мы предлагаем современные программы обучения и помощь в трудоустройстве.",
            siteMap: "КАРТА САЙТА",
            courses: "КУРСЫ",
            marketing: "Маркетинг",
            management: "Менеджмент",
            hrRecruting: "HR и Рекрутинг",
            design: "Дизайн",
            development: "Разработка",
            contactUs: "КОНТАКТЫ",
            signUpNewsLatter: "ПОДПИШИТЕСЬ НА НОВОСТИ",
            signUpNewsLatterPlaceholder: "Email адрес",
            signUpSubscribe:
                "*Подпишитесь на нашу рассылку, чтобы получать новости и ранние обновления.",
            copyRight: "Все права защищены.",
            madeWith: "Создано Limon IT",
            backtoTop: "Наверх",
        },
    },
};

let currentLang = localStorage.getItem("selectedLang") || "en";
// header start
const headerMain = document.querySelector("#headerMain");
headerMain.innerHTML = `
<div class="w-full max-w-[1340px] mx-auto px-5 flex justify-between items-center py-5">
    <div class="flex items-center gap-7 md:gap-10">
            <a href="/index.html">
                <img
                    src="../../Image/HomePagePhoto/logo.svg"/>
            </a>
        <nav class="hidden lg:flex items-center gap-4 xl:gap-8">
            <a href="../../Pages/About/about.html" class="font-bold text-base leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300">${translateLang[currentLang].header.navAbout}</a>
            <a href="../../Pages/Courses/courses.html"
               class="font-bold text-base leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300">
               ${translateLang[currentLang].header.navCourses}</a>
            <a href="../../Pages/Events/events.html"
               class="font-bold text-base leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300">
               ${translateLang[currentLang].header.navEvents} </a>
            <a href="../../Pages/Blogs/blogs.html"
               class="font-bold text-base leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300">${translateLang[currentLang].header.navBlog}</a>
            <a href="../../Pages/Contacts/contacts.html"
               class="font-bold text-base leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300">
               ${translateLang[currentLang].header.navContacts}</a>
        </nav>
    </div>
    <div class="flex items-center gap-3 md:gap-4">
        <div class="flex items-center gap-3 md:gap-4">
            <a href="./Pages/Contacts/contacts.html"
               class="font-bold text-[12px] lg:py-1 md:leading-6 lg:leading-4 tracking-[0.5px] text-white bg-gradient-to-r from-[#FF3F3A] to-[#F75E05] px-5 lg:px-3 rounded hidden sm:inline-block hover:bg-gradient-to-l hover:from-[#F75E05] hover:to-[#FF3F3A]">${translateLang[currentLang].header.getConsultation}</a>
            <a href="#!"
               class="hidden lg:flex gap-2 items-center font-bold text-3 lg:text-2 lg:leading-4 text-gray-800">
               <img src="../../Image/HomePagePhoto/Profile.svg"/>
                    ${translateLang[currentLang].header.loginRegister}</a>
        </div>
        <div class="hidden min-[300px]:block relative">
            <button class=" flex items-center gap-1 px-2 rounded-[20px]" id="langBtn"></button>
                <div
                    class="bg-[#F75E05] flex-col items-center gap-1.5 py-1.5 rounded-[10px] absolute top-7 w-full hidden"
                    id="langModal"></div>
        </div>
            <button class="block lg:hidden">
                <img src="../../Image/HomePagePhoto/stash--burger-classic-light.svg"/></button>
    </div>
</div>`;
// header end

// our blog start
const blog = document.querySelector("#blog");

blog.innerHTML = `
<div class="w-full max-w-[1340px] mx-auto px-5 mb-20">
    <div>
        <div class="mx-auto items-center text-center mt-10 mb-5 sm:mt-20 sm:mb-16">
            <h6 class="text-[#1E212C] font-bold text-base leading-[150%]">OUR BLOG</h6>
            <h1 class="text-[#1E212C] leading-[100%] sm:leading-[130%] text-3xl sm:text-4xl font-black">Createx School Journal</h1>
        </div>
        <div class="mb-16 lg:flex lg:justify-between">
            <div class="flex gap-3 items-center mb-5 lg:mb-0 max-[480px] overflow-x-auto  custom-scrollbar pb-2 flex-1 pr-3 xl:overflow-x-hidden xl:max-w-[100%]">
                <button class="filter-btn font-bold text-base leading-[160%] text-[#9A9CA5] py-2 px-5 hover:text-[#FF3F3A] border border-[#ffffff] hover:border-[#FF3F3A] transition-all duration-500 rounded" data-type="All">All</button>
                <a href="#" class="filter-btn flex gap-1 font-bold text-base leading-[160%] text-[#9A9CA5] py-2 px-5 hover:text-[#FF3F3A] border border-[#ffffff] hover:border-[#FF3F3A] rounded transition-all duration-500" data-type="Article">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="mt-1"><path d="M0 0h24v24H0z" fill="none" />
                    <path fill="currentColor" d="M7.5 16.5h6v-1h-6zm0-4h9v-1h-9zm0-4h9v-1h-9zM5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm0-1h12.769q.23 0 .423-.192t.192-.424V5.616q0-.231-.192-.424T18.384 5H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192M5 5v14z"/></svg>Articles
                </a>
                <a href="#" class="filter-btn flex gap-1 font-bold text-base leading-[160%] text-[#9A9CA5] py-2 px-5 hover:text-[#FF3F3A] border border-[#ffffff] hover:border-[#FF3F3A] rounded transition-all duration-500" data-type="Video">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="mt-1"><path d="M0 0h24v24H0z" fill="none" /><g fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.211 11.106L9.737 7.868A1.2 1.2 0 0 0 8 8.942v6.116a1.2 1.2 0 0 0 1.737 1.074l6.474-3.238a1 1 0 0 0 0-1.788"/><circle cx="12" cy="12" r="9" /></g>
                    </svg>Videos
                </a>
                <a href="#" class="filter-btn flex gap-1 font-bold text-base leading-[160%] text-[#9A9CA5] py-2 px-5 border border-[#ffffff] hover:text-[#FF3F3A] hover:border-[#FF3F3A] rounded transition-all duration-500" data-type="Podcast">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="mt-1"><path d="M0 0h24v24H0z" fill="none" /><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="1.5"><path d="M16 6.429C16 4.535 14.21 3 12 3S8 4.535 8 6.429v5.142C8 13.465 9.79 15 12 15s4-1.535 4-3.429z"/>
                    <path d="M5 11a7 7 0 1 0 14 0m-7 7v3m-4 0h8"/></g>
                    </svg>Podcasts
                </a>
            </div>
            <div class="sm:flex sm:gap-5 sm:items-center">
                <div>
                    <h5 class="font-bold text-base leading-[160%] text-[#424551] whitespace-nowrap">
                    Blog category</h5>
                </div>
                <select name="select" class="font-normal text-base leading-[160%] text-[#424551] border border-[#D7DADD] rounded py-2 px-4 hover:text-[#FF3F3A] hover:border-[#FF3F3A] outline-none w-full sm:w-auto mb-5 sm:mb-0">
                    <option value="All articles" aria-describedby="All articles">All articles</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Development">Development</option>
                    <option value="Design">Design</option>
                    <option value="Manegement">Management</option>
                    <option value="HR & Recruting">HR & Recruting</option>
                </select>
                <div class="flex w-full relative">
                    <input class="font-normal text-base text-[#424551] border border-[#D7DADD] rounded py-2 px-4 hover:placeholder-[#FF3F3A] hover:border-[#FF3F3A] w-full lg:w-auto" type="text" placeholder="search blog..."/>
                    <svg class="absolute right-4 top-3" xmlns="http://www.w3.org/2000/svg"
                    width="1em" height="1em" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    
    <div id="blogCardlar" class='grid grid-cols-3 gap-5'>  
    
    </div>
</div>`;

const blogCardlar = document.querySelector("#blogCardlar");

function hammaBlog(posts) {
    blogCardlar.innerHTML = posts
        .map((post) => {
            let classes = "";

            if (post.id === 4) {
                classes = "col-span-2";
            }

            return `
             <div class="${classes}">
            <div class="w-full h-auto rounded relative mb-4 overflow-hidden">
                <a href="#!" class="inline-block w-full h-full overflow-hidden rounded">
                    <img src="${post.img}" class="w-full h-full min-h-[350px] object-cover rounded group-hover:scale-110 transition-all duration-300"/>
                    <div class="py-[1px] px-2 bg-white rounded flex items-center gap-1 absolute top-3 left-3">
                        <img src="${post.en.type === "Podcast" ? "../../Image/HomePagePhoto/microphone.svg" : post.en.type === "Article" ? "../../Image/HomePagePhoto/article.svg" : "../../Image/HomePagePhoto/videoType.svg"}"/>
                        <span>${post[currentLang].type}</span>
                    </div>
                </a>
            </div>
            <div>
                <div class="flex flex-wrap gap-3 mb-2">
                    <span class="flex items-center font-bold text-[14px] leading-[150%] text-[#787A80]">${post[currentLang].category}
                        <span class="inline-block w-[1px] h-3 bg-[#787A80] rounded-[1px] ml-3"></span></span>
                    <div class="flex items-center gap-2">
                        <img src="../../Image/HomePagePhoto/Calendar.svg" />
                        <span class="flex items-center whitespace-nowrap font-bold text-sm leading-[150%] text-[#787A80]">${post[currentLang].date}
                            <span class="inline-block w-[1px] h-3 bg-[#787A80] rounded-[1px] ml-3"></span></span>
                    </div>
                    <span class="flex items-center gap-2 whitespace-nowrap font-bold text-sm leading-[150%] text-[#787A80]">
                        <img src="../../Image/HomePagePhoto/Clock.svg"/>
                            ${post[currentLang].duration} </span>
                </div>
                <div>
                    <a href="#" class="font-bold text-xl leading-[150%] text-[#1E212C] hover:text-[#ff3f3a] transition-all duration-300">${post[currentLang].title}
                    </a>
                    <p class="line-clamp-2 font-normal text-base leading-[160%] text-[#424551] mt-2 mb-4">${post[currentLang].description}</p>
                    <a href="../../Pages/Blogs/blog/blog.html" class="font-bold text-base leading-[160%] text-[#1E212C] hover:text-[#ff3f3a] transition-all duration-300 flex items-center gap-2 hover:gap-4">${post[currentLang].action}
                    <img src="../../Image/HomePagePhoto/right.svg"/>
                    </a>
                </div>
            </div>
        </div>
            `;
        })
        .join(" ");
}

hammaBlog(allBlogPosts);

const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        const type = btn.dataset.type;

        const filterlangan =
            type === "All"
                ? allBlogPosts
                : allBlogPosts.filter((post) => post.en.type === type);

        hammaBlog(filterlangan);
    });
});
// our blog end

// subscribe start
// const subscribe = document.querySelector("#subscribe");
// subscribe.innerHTML = `
// div
// `
// subscribe end
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
