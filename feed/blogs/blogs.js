import { allBlogPosts } from "../../AllBlogPosts.js";

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
        ourBlog: {
            ourBlog: "OUR BLOG",
            title: "Createx School Journal",
            allBtn: "All",
            articlesBtn: "Articles",
            videosbtn: "Videos",
            podcastsBtn: "Podcasts",
            blogCategory: "Blog category",
            allArticles: "All articles",
            searchBlog: "search blog...",
            loader: "Load more",
        },
        subscribe: {
            subTitle:
                "Want to get the best articles weekly? Subscribe to our newsletter!",
            placeholder: "Your working email",
            subButton: "Subscribe",
            checkbox:
                "I agree to receive communications from Createx Online School",
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
        ourBlog: {
            ourBlog: "BIZNING BLOG",
            title: "Createx School Jurnali",
            allBtn: "Barchasi",
            articlesBtn: "Maqolalar",
            videosBtn: "Videolar",
            podcastsBtn: "Podkastlar",
            blogCategory: "Blog kategoriyasi",
            allArticles: "Barcha maqolalar",
            searchBlog: "Blogdan qidirish...",
            loader: "Ko`proq yuklash",
        },
        subscribe: {
            subTitle:
                "Har hafta eng yaxshi maqolalarni olishni xohlaysizmi? Axborot gazetamizga obuna bo'ling!",
            placeholder: "Ishchi elektron pochtangiz",
            subButton: "Obuna bo'lish",
            checkbox: "Men Createx Online School'dan xabarlar olishga roziman",
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
        ourBlog: {
            ourBlog: "НАШ БЛОГ",
            title: "Журнал школы Createx",
            allBtn: "Все",
            articlesBtn: "Статьи",
            videosBtn: "Видео",
            podcastsBtn: "Подкасты",
            blogCategory: "Категория блога",
            allArticles: "Все статьи",
            searchBlog: "Поиск по блогу...",
            loader: "Загрузить ещё",
        },
        subscribe: {
            subTitle:
                "Хотите получать лучшие статьи каждую неделю? Подпишитесь на нашу рассылку!",
            placeholder: "Ваш рабочий email",
            subButton: "Подписаться",
            checkbox:
                "Я согласен(на) получать сообщения от Createx Online School",
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
            <a href="../../feed/about/about.html" class="font-bold text-base leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300">${translateLang[currentLang].header.navAbout}</a>
            <a href="../../feed/courses/courses.html"
               class="font-bold text-base leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300">
               ${translateLang[currentLang].header.navCourses}</a>
            <a href="../../feed/events/events.html"
               class="font-bold text-base leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300">
               ${translateLang[currentLang].header.navEvents} </a>
            <a href="../../feed/blogs/blogs.html"
               class="font-bold text-base leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300">${translateLang[currentLang].header.navBlog}</a>
            <a href="../../feed/contacts/contacts.html"
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
                    id="langModal">
                </div>
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
            <h6 class="text-[#1E212C] font-bold text-base leading-[150%]">${translateLang[currentLang].ourBlog.ourBlog}</h6>
            <h1 class="text-[#1E212C] leading-[100%] sm:leading-[130%] text-3xl sm:text-4xl font-black">${translateLang[currentLang].ourBlog.title}</h1>
        </div>
        <div class="mb-16 lg:flex lg:justify-between">
            <div class="flex gap-3 items-center mb-5 lg:mb-0 max-[480px] overflow-x-auto  custom-scrollbar pb-2 flex-1 pr-3 xl:overflow-x-hidden xl:max-w-[100%]">
                <button class="filter-btn font-bold text-base leading-[160%] text-[#9A9CA5] py-2 px-5 hover:text-[#FF3F3A] border border-[#ffffff] hover:border-[#FF3F3A] transition-all duration-500 rounded" data-type="All">${translateLang[currentLang].ourBlog.allBtn}</button>
                <a href="#" class="filter-btn flex gap-1 font-bold text-base leading-[160%] text-[#9A9CA5] py-2 px-5 hover:text-[#FF3F3A] border border-[#ffffff] hover:border-[#FF3F3A] rounded transition-all duration-500" data-type="Article">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="mt-1"><path d="M0 0h24v24H0z" fill="none" />
                    <path fill="currentColor" d="M7.5 16.5h6v-1h-6zm0-4h9v-1h-9zm0-4h9v-1h-9zM5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm0-1h12.769q.23 0 .423-.192t.192-.424V5.616q0-.231-.192-.424T18.384 5H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192M5 5v14z"/></svg>${translateLang[currentLang].ourBlog.articlesBtn}
                </a>
                <a href="#" class="filter-btn flex gap-1 font-bold text-base leading-[160%] text-[#9A9CA5] py-2 px-5 hover:text-[#FF3F3A] border border-[#ffffff] hover:border-[#FF3F3A] rounded transition-all duration-500" data-type="Video">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="mt-1"><path d="M0 0h24v24H0z" fill="none" /><g fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.211 11.106L9.737 7.868A1.2 1.2 0 0 0 8 8.942v6.116a1.2 1.2 0 0 0 1.737 1.074l6.474-3.238a1 1 0 0 0 0-1.788"/><circle cx="12" cy="12" r="9" /></g>
                    </svg>${translateLang[currentLang].ourBlog.videosBtn}
                </a>
                <a href="#" class="filter-btn flex gap-1 font-bold text-base leading-[160%] text-[#9A9CA5] py-2 px-5 border border-[#ffffff] hover:text-[#FF3F3A] hover:border-[#FF3F3A] rounded transition-all duration-500" data-type="Podcast">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="mt-1"><path d="M0 0h24v24H0z" fill="none" /><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="1.5"><path d="M16 6.429C16 4.535 14.21 3 12 3S8 4.535 8 6.429v5.142C8 13.465 9.79 15 12 15s4-1.535 4-3.429z"/>
                    <path d="M5 11a7 7 0 1 0 14 0m-7 7v3m-4 0h8"/></g>
                    </svg>${translateLang[currentLang].ourBlog.podcastsBtn}
                </a>
            </div>
            <div class="sm:flex sm:gap-5 sm:items-center">
                <div>
                    <h5 class="font-bold text-base leading-[160%] text-[#424551] whitespace-nowrap">${translateLang[currentLang].ourBlog.blogCategory}</h5>
                </div>
                <select name="select" class="font-normal text-base leading-[160%] text-[#424551] border border-[#D7DADD] rounded py-2 px-4 hover:text-[#FF3F3A] hover:border-[#FF3F3A] outline-none w-full sm:w-auto mb-5 sm:mb-0">
                    <option value="All articles" aria-describedby="All articles">${translateLang[currentLang].ourBlog.allArticles}</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Development">Development</option>
                    <option value="Design">Design</option>
                    <option value="Manegement">Management</option>
                    <option value="HR & Recruting">HR & Recruting</option>
                </select>
                <div class="flex w-full relative">
                    <input class="font-normal text-base text-[#424551] border border-[#D7DADD] rounded py-2 px-4 hover:placeholder-[#FF3F3A] hover:border-[#FF3F3A] w-full lg:w-auto" type="text" placeholder="${translateLang[currentLang].ourBlog.searchBlog}"/>
                    <svg class="absolute right-4 top-3" xmlns="http://www.w3.org/2000/svg"
                    width="1em" height="1em" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <div id="blogCardlar" class='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'></div>
    <p class="mx-auto text-center mt-16 font-semibold text-base leading-[160%] text-[#424551] hover:text-red-700">${translateLang[currentLang].ourBlog.loader}</p>
</div>`;
const blogCardlar = document.querySelector("#blogCardlar");
function hammaBlog(posts) {
    blogCardlar.innerHTML = posts
        .map((post) => {
            let classes = "";

            if (post.id === 4) {
                classes = "sm:col-span-2";
            }
            return `
<div class="${classes}">
    <div class="w-full rounded relative md:mb-4 overflow-hidden">
        <a href="./blog/blog.html" class="inline-block w-full h-full overflow-hidden rounded">
            <img src="${post.img}" class="w-full h-full object-cover rounded group-hover:scale-110 transition-all duration-300"/>
            <div class="py-[1px] px-2 bg-white rounded flex items-center gap-1 absolute top-3 left-3">
                <img src="${post.en.type === "Podcast" ? "../../Image/HomePagePhoto/microphone.svg" : post.en.type === "Article" ? "../../Image/HomePagePhoto/article.svg" : "../../Image/HomePagePhoto/videoType.svg"}"/>
                <span>${post[currentLang].type}</span>
            </div>
        </a>
    </div>
    <div>
        <div class="flex flex-wrap gap-2 mb-2">
            <span class="flex items-center font-bold text-[14px] text-[#787A80]">${post[currentLang].category}
                <span class="inline-block w-[1px] h-3 bg-[#787A80] rounded-[1px] ml-3"></span>
            </span>
            <div class="flex items-center gap-2">
                <img src="../../Image/HomePagePhoto/Calendar.svg" />
                <span class="flex items-center whitespace-nowrap font-bold text-sm text-[#787A80]">${post[currentLang].date}
                    <span class="inline-block w-[1px] h-3 bg-[#787A80] rounded-[1px] ml-3"></span>
                </span>
            </div>
            <span class="flex items-center gap-2 whitespace-nowrap font-bold text-sm text-[#787A80]"><img src="../../Image/HomePagePhoto/Clock.svg"/>${post[currentLang].duration} </span>
        </div>
        <div>
            <a href="#" class="font-bold text-xl leading-[100%] md:leading-[150%] text-[#1E212C] hover:text-[#ff3f3a] transition-all duration-300">${post[currentLang].title}</a>
            <p class="line-clamp-2 font-normal text-base leading-[160%] text-[#424551]  mb-3">${post[currentLang].description}</p>
            <a href="../../feed/blogs/blog/blog.html" class="font-bold text-base leading-[160%] text-[#1E212C] hover:text-[#ff3f3a] transition-all duration-300 flex items-center gap-2 hover:gap-4">${post[currentLang].action}
                <img src="../../Image/HomePagePhoto/right.svg"/>
            </a>
        </div>
    </div>
</div>`;
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
const subscribe = document.querySelector("#subscribe");
subscribe.innerHTML = `
 <div class="w-full max-w-[1340px] mx-auto px-5">
    <div class="mx-auto items-center pb-10 md:pb-5 md:flex md:justify-between">
        <div class="mx-auto md:px-5">
            <img class="mx-auto" src="../../Image/blogs-photo/illustration (2).png"/>
        </div>
        <div class="mt-5 md:mt-0">
            <h1 class="mx-auto w-full md:w-auto font-black text-[22px] md:text-[32px] leading-[130%] text-[#1E212C] max-w-[600px] mb-5 lg:mb-12 text-center md:text-left">
            ${translateLang[currentLang].subscribe.subTitle}</h1>
            <div class="mx-auto items-center">
                <form action="#" class="flex gap-4 mx-auto">
                    <input type="email" placeholder="${translateLang[currentLang].subscribe.placeholder}" class="px-3 py-2 border border-[#D7DADD] rounded w-full hover:border-[#F75E05]"/>
                    <button class="w-full max-w-32 py-2 bg-[#F75E05] text-white font-bold text-base rounded hover:bg-[#FF3F3A] transition">${translateLang[currentLang].subscribe.subButton}</button>
                </form>

                <label class="flex items-center gap-2 mt-4 cursor-pointer">
                    <input type="checkbox" class="w-4 h-4 accent-[#F75E05] rounded"/>
                    <span class="text-[#424551] text-base">
                    ${translateLang[currentLang].subscribe.checkbox}
                    </span>
                </label>
            </div>
        </div>
    </div>
</div>`;
// subscribe end

// footer start
const footer = document.querySelector("#footer");
footer.innerHTML = `
<div class="bg-[#1E212C] pt-[50px] pb-10 lg:pt-20 lg:pb-16">
    <div class="w-full max-w-[1340px] mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-y-8 gap-x-6">
        <div class="flex flex-col lg:col-span-3 sm:col-span-1 order-1 lg:order-1">
            <a href="./index.html"><img src="../../Image/HomePagePhoto/footerlogo.svg"/></a>
            <p class="font-normal text-[12px] leading-[150%] text-white opacity-60 max-w-70 line-clamp-5 mt-6 mb-9">${translateLang[currentLang].footer.footerDescription}</p>
            <div class="flex items-center gap-5 mb-4">
                <a href="https://facebook.com/" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="text-[#A5A6AB] hover:text-white transition-all duration-300">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="currentColor" d="M14.2 2.875A4.625 4.625 0 0 0 9.575 7.5v2.575H7.1c-.124 0-.225.1-.225.225v3.4c0 .124.1.225.225.225h2.475V20.9c0 .124.1.225.225.225h3.4c.124 0 .225-.1.225-.225v-6.975h2.497c.103 0 .193-.07.218-.17l.85-3.4a.225.225 0 0 0-.218-.28h-3.347V7.5a.775.775 0 0 1 .775-.775h2.6c.124 0 .225-.1.225-.225V3.1c0-.124-.1-.225-.225-.225z" />
                    </svg>
                </a>
                <a href="https://x.com/" aria-label="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="text-[#A5A6AB] hover:text-white transition-all duration-300">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23" />
                    </svg>
                </a>
                <a href="https://youtube.com/" aria-label="YouTube">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="text-[#A5A6AB] hover:text-white transition-all duration-300">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="currentColor" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73" />
                    </svg>
                </a>
                <a href="https://t.me/" aria-label="Telegram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="text-[#A5A6AB] hover:text-white transition-all duration-300">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="currentColor" d="m21.936 5.17l-3.03 14.185c-.226.999-.806 1.224-1.644.773l-4.545-3.352l-2.225 2.127c-.225.226-.451.452-.967.452l.355-4.675l8.478-7.704c.354-.355-.097-.484-.548-.193l-10.541 6.64l-4.546-1.386c-.999-.322-.999-1 .226-1.45L20.614 3.72c.87-.258 1.612.194 1.322 1.45" />
                    </svg>
                </a>
                <a href="https://instagram.com/" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="text-[#A5A6AB] hover:text-white transition-all duration-300">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
                    </svg>
                </a>
                <a href="https://linkedin.com/" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="text-[#A5A6AB] hover:text-white transition-all duration-300">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z" />
                    </svg>
                </a>
            </div>
        </div>
        <div class="lg:col-span-2 sm:col-span-2 order-1 sm:order-4 lg:order-2">
            <h3 class="font-bold text-base leading-[150%] tracking-[1px] mb- text-white">${translateLang[currentLang].footer.siteMap}</h3>
            <div class="flex gap-6 sm:flex-row flex-col lg:flex-col lg:gap-2">
                <a href="/feed/about/about.html" class="font-normal text-base leading-[160%] text-[#A5A6AB] hover:text-white transition-all duration-300">${translateLang[currentLang].header.navAbout}</a>
                <a href="/feed/courses/courses.html" class="font-normal text-base leading-[160%] text-[#A5A6AB] hover:text-white transition-all duration-300">${translateLang[currentLang].header.navCourses}</a>
                <a href="/feed/events/events.html" class="font-normal text-base leading-[160%] text-[#A5A6AB] hover:text-white transition-all duration-300">${translateLang[currentLang].header.navEvents}</a>
                <a href="/feed/blogs/blogs.html" class="font-normal text-base leading-[160%] text-[#A5A6AB] hover:text-white transition-all duration-300">${translateLang[currentLang].header.navBlog}</a>
                <a href="/feed/contacts/contacts.html" class="font-normal text-base leading-[160%] text-[#A5A6AB] hover:text-white transition-all duration-300">${translateLang[currentLang].header.navContacts}</a>
            </div>
        </div>
        <div class="lg:col-span-2 sm:col-span-2 order-2 sm:order-5 lg:order-3">
            <h3 class="font-bold text-base leading-[150%] tracking-[1px] mb-3 text-white">${translateLang[currentLang].footer.courses.toUpperCase()}</h3>
            <div class="flex gap-6 sm:flex-row flex-col lg:flex-col lg:gap-2">
                <a href="#!" class="font-normal text-base leading-[160%] text-[#A5A6AB] hover:text-white transition-all duration-300">${translateLang[currentLang].footer.marketing}</a>
                <a href="#!" class="font-normal text-base leading-[160%] text-[#A5A6AB] hover:text-white transition-all duration-300">${translateLang[currentLang].footer.management}</a>
                <a href="#!" class="font-normal text-base leading-[160%] text-[#A5A6AB] hover:text-white transition-all duration-300">${translateLang[currentLang].footer.hrRecruting}</a>
                <a href="#!" class="font-normal text-base leading-[160%] text-[#A5A6AB] hover:text-white transition-all duration-300">${translateLang[currentLang].footer.design}</a>
                <a href="#!" class="font-normal text-base leading-[160%] text-[#A5A6AB] hover:text-white transition-all duration-300">${translateLang[currentLang].footer.development}</a>
            </div>
        </div>
        <div class="lg:col-span-2 sm:col-span-1 order-3 sm:order-3 lg:order-4">
            <h3 class="font-bold text-base leading-[150%] tracking-[1px] mb-3 text-white">${translateLang[currentLang].footer.contactUs}</h3>
            <div class="flex flex-col gap-2">
                <a href="tel:(405) 555-0128" class="font-normal text-base leading-[160%] text-[#A5A6AB] hover:text-white transition-all duration-300 group flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" />
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2m-4 0h4m-4 0v1m4-1v1m0 0a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v0m4 0h-4m2 10.008" />
                    </svg>(405) 555-0128
                </a>
                <a href="mailto:hello@createx.com" class="font-normal text-base leading-[160%] text-[#A5A6AB] hover:text-white transition-all duration-300 group flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" />
                        <path fill="currentColor" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM12 12.116L4 6.885v10.5q0 .269.173.442t.443.173h14.769q.269 0 .442-.173t.173-.443v-10.5zM12 11l7.692-5H4.308zM4 6.885V6v11.385q0 .269.173.442t.443.173H4z" />
                    </svg>hello@createx.com
                 </a>
            </div>
        </div>
        <div class="lg:col-span-3 sm:col-span-1 order-4 sm:order-2 lg:order-5">
            <h3 class="font-bold text-base leading-[150%] tracking-[1px] mb-3 text-white">${translateLang[currentLang].footer.signUpNewsLatter}</h3>
            <form>
                <div class="flex items-center justify-end bg-[#393C46] border border-[#FFFFFF33] px-3 py-2.5 rounded focus-within:border-[#ff3f3a] focus-within:bg-white transition-all duration-300">
                    <input type="email" placeholder="${translateLang[currentLang].footer.signUpNewsLatterPlaceholder}" class="flex-1 pr-3 bg-transparent font-normal text-[12px] leading-[150%] text-white focus:text-black placeholder:text-[#A5A6AB]">
                    <img src="../../Image/HomePagePhoto/footerRight.svg" class="w-4 h-4"/>
                </div>
                <p class="mt-3 font-normal text-[10px] leading-[150%] text-white opacity-60 max-w-[290px] line-clamp-2">${translateLang[currentLang].footer.signUpSubscribe}</p>
            </form>
        </div>
    </div>
</div>
<div class="bg-[#292C37] py-[18px]">
    <div class="w-full max-w-[1340px] mx-auto px-5 flex items-center justify-between">
        <p class="font-normal text-[12px] leading-[150%] text-white">&copy; ${translateLang[currentLang].footer.copyRight}. ${translateLang[currentLang].footer.madeWith}</p>
        <div>
            <button id="goToTopBtn" class="font-bold text-[14px] leading-[150%] text-white">${translateLang[currentLang].footer.backtoTop}</button>
        </div>
    </div>
</div>`;
const goToTopBtn = document.querySelector("#goToTopBtn");
goToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
// footer end
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
