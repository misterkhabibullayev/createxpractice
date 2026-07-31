const translateData = {
    en: {
        langTitle: "EN",
        flag: "Image/HomePagePhoto/twemoji--flag-united-states.svg",
        navAbout: "About Us",
        navCourses: "Courses",
        navEvents: "Events",
        navBlog: "Blog",
        navContacts: "Contacts",
        getConsultation: "Get consultation",
        loginRegister: "Log in / Register",
        
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
    ru: {
        langTitle: "RU",
        flag: "Image/HomePagePhoto/twemoji--flag-russia.svg",
        navAbout: "О нас",
        navCourses: "Курсы",
        navEvents: "Мероприятия",
        navBlog: "Блог",
        navContacts: "Контакты",
        getConsultation: "Получить консультацию",
        loginRegister: "Войти / Зарегистрироваться",
        
        footerDescription:
            "Онлайн-школа Createx — лидер в сфере онлайн-обучения. У нас представлено множество курсов и программ от ведущих экспертов рынка. Мы предлагаем актуальные подходы к онлайн-обучению, стажировкам и трудоустройству в крупнейших компаниях страны.",
        siteMap: "КАРТА САЙТА",
        courses: "КУРСЫ",
        marketing: "Маркетинг",
        management: "Менеджмент",
        hrRecruting: "HR и Рекрутинг",
        design: "Дизайн",
        development: "Разработка",
        contactUs: "СВЯЗАТЬСЯ С НАМИ",
        signUpNewsLatter: "ПОДПИШИТЕСЬ НА НАШУ РАССЫЛКУ",
        signUpNewsLatterPlaceholder: "Адрес эл. почты",
        signUpSubscribe:
            "*Подпишитесь на нашу рассылку, чтобы получать сообщения и самые свежие обновления от SEO-агентства Createx.",
        copyRight: "Все права защищены.",
        madeWith: "Разработано в Limon IT",
        backtoTop: "Наверх",
    },
    uz: {
        langTitle: "UZ",
        flag: "Image/HomePagePhoto/twemoji--flag-uzbekistan.svg",
        navAbout: "Biz haqimizda",
        navCourses: "Kurslar",
        navEvents: "Tadbirlar",
        navBlog: "Blog",
        navContacts: "Kontaktlar",
        getConsultation: "Konsultatsiya olish",
        loginRegister: "Kirish / Ro'yxatdan o'tish",
        footerDescription:
            "Createx Online School — onlayn ta'lim sohasida yetakchi hisoblanadi. Bizda bozorning yetakchi ekspertlaridan ko'plab kurslar va dasturlar mavjud. Biz mamlakatning eng yirik kompaniyalarida onlayn ta'lim, amaliyot va ishga joylashish uchun eng dolzarb yondashuvlarni taqdim etamiz.",
        siteMap: "SAYT XARITASI",
        courses: "KURSLAR",
        marketing: "Marketing",
        management: "Menejment",
        hrRecruting: "HR va Rekruting",
        design: "Dizayn",
        development: "Dasturlash",
        contactUs: "BIZ BILAN ALOQA",
        signUpNewsLatter: "YANGILIKLARIMIZGA OBUNA BO'LING",
        signUpNewsLatterPlaceholder: "Elektron pochta manzili",
        signUpSubscribe:
            "*Createx SEO agentligidan xabarlar va eng so'nggi yangiliklarni olish uchun xabarnomamizga obuna bo'ling.",
        copyRight: "Barcha huquqlar himoyalangan.",
        madeWith: "Limon IT tomonidan yaratildi",
        backtoTop: "Tepaga qaytish",
    },
};
let currentLang = localStorage.getItem("selectedLang") || "en";

// header
const headerMain = document.querySelector("#headerMain");
headerMain.innerHTML = `
    <div
        class=" w-full max-w-[1340px] mx-auto px-5 flex justify-between items-center py-5 relative"
    >
        <div class="flex items-center gap-7 md:gap-10">
            <div class="">
                <a href="#">
                    <img
                        src="../../../Image/HomePagePhoto/logo.svg"
                        alt="logo image"
                    />
                </a>
            </div>
            <nav class="hidden lg:flex items-center gap-4 xl:gap-8">
                <a
                    href="./Pages/About/about.html"
                    class="font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateData[currentLang].navAbout}</a>
                <a
                    href="./Pages/Courses/courses.html"
                    class="font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateData[currentLang].navCourses}</a>
                <a
                    href="./Pages/Events/events.html"
                    class="font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateData[currentLang].navEvents}</a>
                <a
                    href="./Pages/Blogs/blogs.html"
                    class="font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateData[currentLang].navBlog}</a>
                <a
                    href="./Pages/Contacts/contacts.html"
                    class="font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateData[currentLang].navContacts}</a>
            </nav>
        </div>
        <div class="flex items-center gap-3 md:gap-4">
            <div class="flex items-center gap-3 md:gap-4">
                <a
                    href="./Pages/Contacts/contacts.html"
                    class="font-[Lato] font-bold text-[12px] leading-8 tracking-[0.5px] text-white bg-gradient-to-r from-[#FF3F3A] to-[#F75E05] px-5 rounded-[4px] hidden sm:inline-block hover:bg-gradient-to-l hover:from-[#F75E05] hover:to-[#FF3F3A]"
                >
                    ${translateData[currentLang].getConsultation}
                </a>
                <a
                    href="#!"
                    class="hidden lg:flex gap-2 items-center font-[Lato] font-bold text-3 lg:text-2 lg:leading-4 text-gray-800"
                >
                    <img
                        src="./Image/HomePagePhoto/Profile.svg"
                        alt="profile icon"
                        class="hidden xl:block"
                    />
                    ${translateData[currentLang].loginRegister}
                </a>
            </div>
            <div class=" relative">
                <button
                    class=" flex items-center gap-1 px-2 rounded-[20px]"
                    id="langBtn"
                ></button>

                <div
                    class="bg-[#F75E05] flex-col items-center gap-1.5 py-1.5 rounded-[10px] absolute top-[30px] w-full hidden"
                    id="langModal"
                ></div>
            </div>
            <button id="burgerBtn" class="relative flex flex-col items-end justify-center gap-[6px] lg:hidden w-[30px] h-[30px]">
                <span id="burgerSpan1" class="w-[30px] h-[4px] rounded-full bg-[#424551] transition-all duration-300 origin-center"></span>
                <span id="burgerSpan2" class="w-[23px] h-[4px] rounded-full bg-[#424551] transition-all duration-300 origin-center"></span>
            </button>
            
        </div>
        <div id="burgerModal" class="absolute top-full left-0 px-5 w-full flex lg:hidden overflow-hidden transition-all duration-300 origin-top [transform:rotateX(90deg)]">
            <nav class="flex flex-col bg-white w-full">
                <a
                    href="./Pages/About/about.html"
                    class="block w-full px-4 py-2 font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateData[currentLang].navAbout}</a>
                <a
                    href="./Pages/Courses/courses.html"
                    class="inline-block w-full px-4 py-2 font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateData[currentLang].navCourses}</a>
                <a
                    href="./Pages/Events/events.html"
                    class="inline-block w-full px-4 py-2 font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateData[currentLang].navEvents}</a>
                <a
                    href="./Pages/Blogs/blogs.html"
                    class="inline-block w-full px-4 py-2 font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateData[currentLang].navBlog}</a>
                <a
                    href="./Pages/Contacts/contacts.html"
                    class="inline-block w-full px-4 py-2 font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateData[currentLang].navContacts}</a>
                <a
                    href="#!"
                    class="flex lg:hidden gap-2 items-center w-full px-4 py-2 font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >
                    <img
                        src="/Image/HomePagePhoto/Profile.svg"
                        alt="profile icon"
                        class="block"
                    />
                    ${translateData[currentLang].loginRegister}
                </a>
                <div class="">
                    <a
                        href="./Pages/Contacts/contacts.html"
                        class="font-[Lato] font-bold text-[12px] leading-8 tracking-[0.5px] text-white bg-gradient-to-r from-[#FF3F3A] to-[#F75E05] px-5 rounded-[4px] inline-block mx-4 my-2 sm:hidden hover:bg-gradient-to-l hover:from-[#F75E05] hover:to-[#FF3F3A]"
                    >
                        ${translateData[currentLang].getConsultation}
                    </a>
                </div>
            </nav>
        </div>
    </div>
`;
const burgerBtn = document.querySelector("#burgerBtn");
const burgerSpan1 = document.querySelector("#burgerSpan1");
const burgerSpan2 = document.querySelector("#burgerSpan2");
const burgerModal = document.querySelector("#burgerModal");
burgerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    burgerSpan1.classList.toggle("translate-y-[5px]");
    burgerSpan1.classList.toggle("rotate-45");
    burgerSpan2.classList.toggle("-translate-y-[5px]");
    burgerSpan2.classList.toggle("w-[30px]");
    burgerSpan2.classList.toggle("-rotate-45");
    burgerModal.classList.toggle("[transform:rotateX(90deg)]");
});
document.addEventListener("click", () => {
    burgerSpan1.classList.remove("translate-y-[5px]", "rotate-45");
    burgerSpan2.classList.remove(
        "-translate-y-[5px]",
        "-rotate-45",
        "w-[30px]",
    );
    burgerModal.classList.add("[transform:rotateX(90deg)]");
});
// header end