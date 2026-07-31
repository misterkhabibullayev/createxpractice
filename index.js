import { allBlogPosts } from "./AllBlogPosts.js";
import { allCourses } from "./AllCourses.js";
import { allEvents } from "./AllEvents.js";
console.log(allCourses);
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
        playShowreel: "Play showreel",
        heroSectionH1: "Enjoy studying with Createx Online Courses",
        exploreCourses: "Explore courses",
        studentGraduet: "Students graduated",
        commlatedCourses: "Completed courses",
        qualifiedTutors: "Qualified tutors",
        experienceYears: "Years of experience",
        whoweare: "Who we are",
        whyCreateX: "Why Createx?",
        why1: "A fermentum in morbi pretium aliquam adipiscing donec tempus.",
        why2: "Vulputate placerat amet pulvinar lorem nisl.",
        why3: "Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.",
        why4: "Etiam duis lobortis in fames ultrices commodo nibh.",
        why5: "Tincidunt sagittis neque sem ac eget.",
        why6: "Ultricies amet justo et eget quisque purus vulputate dapibus tortor.",
        moreAboutUs: "More about us",
        readytolearn: "Ready to learn?",
        featuredCourses: "Featured Courses",
        viewAllCourses: "View all courses",
        ourbenefits: "Our benefits",
        thatshowwedoit: "That’s how we do it",
        experiencedTutors: "Experienced Tutors",
        feedbackSupports: "Feedback & Support",
        onlineLibrary: "24/7 Online Library",
        community: "Community",
        ourevents: "Our Events",
        lecturesWorkshop: "Lectures & workshops",
        doyouwatnmore: "Do you want more?",
        exploreAllEvents: "Explore all events",
        createXCertificate: "Createx Certificate",
        createXCertificateH1: "Your expertise will be confirmed",
        createXCertificateP:
            "We are accredited by international professional organizations and institutes:",
        bestTutorsHere: "Best tutors are all here",
        meetOurTema: "Meet our team",
        testimonials: "TESTIMONIALS",
        whatOurStudentsSay: "What our students say",
        ourBlog: "Our blog",
        latestPosts: "Latest posts",
        goBlog: "Go to blog",
        dontmiss: "Don’t miss anything",
        subscribeTitle: "Subscribe to the Createx School announcements",
        subscribePlaceholder: "Your working email",
        subscribe: "Subscribe",
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
        playShowreel: "Смотреть шоурил",
        heroSectionH1:
            "Получайте удовольствие от обучения на онлайн-курсах Createx",
        exploreCourses: "Изучить курсы",
        studentGraduet: "Выпускников",
        commlatedCourses: "Пройденных курсов",
        qualifiedTutors: "Квалифицированных преподавателей",
        experienceYears: "Лет опыта",
        whoweare: "Кто мы",
        whyCreateX: "Почему Createx?",
        why1: "Вы получаете самые актуальные практические знания от экспертов рынка.",
        why2: "Индивидуальный подход к каждому студенту и менторская поддержка на протяжении всего курса.",
        why3: "Пожизненный доступ к учебным материалам и лекциям в режиме 24/7.",
        why4: "Реальные кейсы и практические домашние задания для закрепления теории.",
        why5: "Международный сертификат после успешного окончания обучения.",
        why6: "Возможность прохождения стажировки и трудоустройства в топовые компании.",
        moreAboutUs: "Подробнее о нас",
        readytolearn: "Готовы учиться?",
        featuredCourses: "Рекомендуемые курсы",
        viewAllCourses: "Посмотреть все курсы",
        ourbenefits: "Наши преимущества",
        thatshowwedoit: "Вот как мы это делаем",
        experiencedTutors: "Опытные преподаватели",
        feedbackSupports: "Обратная связь и поддержка",
        onlineLibrary: "Онлайн-библиотека 24/7",
        community: "Сообщество",
        ourevents: "Наши мероприятия",
        lecturesWorkshop: "Лекции и воркшопы",
        doyouwatnmore: "Хотите большего?",
        exploreAllEvents: "Изучить все мероприятия",
        createXCertificate: "Сертификат Createx",
        createXCertificateH1: "Ваш профессионализм будет подтвержден",
        createXCertificateP:
            "Мы аккредитованы международными профессиональными организациями и институтами:",
        bestTutorsHere: "Все лучшие преподаватели здесь",
        meetOurTema: "Встречайте нашу команду",
        testimonials: "ОТЗЫВЫ",
        whatOurStudentsSay: "Что говорят наши студенты",
        ourBlog: "Наш блог",
        latestPosts: "Последние публикации",
        goBlog: "Перейти в блог",
        dontmiss: "Ничего не упустите",
        subscribeTitle: "Подпишитесь на анонсы школы Createx",
        subscribePlaceholder: "Ваша рабочая эл. почта",
        subscribe: "Подписаться",
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
        playShowreel: "Shou-rolikni ko'rish",
        heroSectionH1: "Createx Online Kurslari bilan o'qishdan zavqlaning",
        exploreCourses: "Kurslarni o'rganish",
        studentGraduet: "Bitirgan talabalar",
        commlatedCourses: "Tugallangan kurslar",
        qualifiedTutors: "Malakali o'qituvchilar",
        experienceYears: "Yillik tajriba",
        whoweare: "Biz kimmiz",
        whyCreateX: "Nega aynan Createx?",
        why1: "Eng so'nggi va dolzarb amaliy bilimlarni bozor ekspertlaridan o'rganasiz.",
        why2: "Har bir talabaga individual yondashuv va dars davomida mentorlik ko'magi.",
        why3: "O'quv materiallari va ma'ruzalarga 24/7 rejimida umrbod kirish imkoniyati.",
        why4: "Nazariyani mustahkamlovchi real keyslar va amaliy uy vazifalari.",
        why5: "Kursni muvaffaqiyatli tugatgandan so'ng xalqaro darajadagi sertifikat.",
        why6: "Eng yaxshi kompaniyalarda amaliyot o'tash va ishga joylashish imkoniyati.",
        moreAboutUs: "Biz haqimizda batafsil",
        readytolearn: "O'rganishga tayyormisiz?",
        featuredCourses: "Saralangan Kurslar",
        viewAllCourses: "Barcha kurslarni ko'rish",
        ourbenefits: "Bizning afzalliklarimiz",
        thatshowwedoit: "Biz buni mana shunday bajaramiz",
        experiencedTutors: "Tajribali O'qituvchilar",
        feedbackSupports: "Aloqa va Qo'llab-quvvatlash",
        onlineLibrary: "24/7 Onlayn Kutubxona",
        community: "Hamjamiyat",
        ourevents: "Bizning Tadbirlarimiz",
        lecturesWorkshop: "Ma'ruzalar va seminarlar",
        doyouwatnmore: "Yana ko'proq bilishni xohlaysizmi?",
        exploreAllEvents: "Barcha tadbirlarni ko'rish",
        createXCertificate: "Createx Sertifikati",
        createXCertificateH1: "Sizning tajribangiz tasdiqlanadi",
        createXCertificateP:
            "Biz xalqaro professional tashkilotlar va institutlar tomonidan akkreditatsiyadan o'tganmiz:",
        bestTutorsHere: "Eng yaxshi o'qituvchilar shu yerda",
        meetOurTema: "Jamoamiz bilan tanishing",
        testimonials: "FIKRLAR",
        whatOurStudentsSay: "Talabalarimiz nima deyishadi",
        ourBlog: "Bizning blog",
        latestPosts: "So'nggi postlar",
        goBlog: "Blogga o'tish",
        dontmiss: "Hech narsani o'tkazib yubormang",
        subscribeTitle: "Createx maktabi e'lonlariga obuna bo'ling",
        subscribePlaceholder: "Sizning ishchi elektron pochtangiz",
        subscribe: "Obuna bo'lish",
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
                        src="./Image/HomePagePhoto/logo.svg"
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
                        src="./Image/HomePagePhoto/Profile.svg"
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

// hero Section
const heroSection = document.querySelector("#heroSection");
heroSection.innerHTML = `
    <div class=" w-full max-w-[1340px] mx-auto px-5">
        <div
            class="flex flex-col-reverse items-center gap-8 lg:flex lg:flex-row lg:justify-between lg:items-center lg:mb-[40px]"
        >
            <div>
                <div
                    class="flex justify-center items-center lg:flex lg:items-center lg:justify-start gap-[16px]"
                >
                    <a
                        href="#!"
                        class="w-[52px] h-[52px] bg-[#FF3F3A] rounded-full flex justify-center items-center hover:ring-[16px] hover:ring-[#FEC8C0] transition-all duration-300"
                    >
                        <img
                            src="./Image/HomePagePhoto/mdi--play.svg"
                            alt="video play icon"
                        />
                    </a>
                    <span
                        class="font-[Lato] font-bold text-[14px] leading-[150%] text-[#1E212C]"
                    >${translateData[currentLang].playShowreel}</span>
                </div>
                <h1
                    class="w-full text-center lg:text-start text-[40px] lg:max-w-[500px] font-[Lato] font-black xl:text-[64px] leading-[130%] tracking-[1px] mt-[24px] mb-[60px]"
                >
                    ${translateData[currentLang].heroSectionH1}
                </h1>
                <div
                    class="flex flex-col items-center justify-center md:flex-row md:justify-center lg:justify-start gap-[24px]"
                >
                    <a
                        href="./Pages/About/about.html"
                        class="py-1 px-[40px] font-[Lato] font-normal text-[16px] leading-8 tracking-[0.5px] text-[#F75E05] border-[1px] border-[#F75E05] rounded-[4px] hover:bg-[#F75E05] hover:text-white transition-all duration-300 hover:shadow-[0px_4px_4px_0px_#F75E0580]"
                    >${translateData[currentLang].navAbout}</a>
                    <a
                        href="./Pages/Courses/courses.html"
                        class="py-1 px-[40px] font-[Lato] font-normal text-[16px] leading-8 tracking-[0.5px] text-white border-[1px] border-[#F75E05] rounded-[4px] bg-[#F75E05] transition-all duration-300 hover:shadow-[0px_4px_4px_0px_#F75E0580]"
                    >${translateData[currentLang].exploreCourses}</a>
                </div>
            </div>
            <div>
                <img
                    src="./Image/HomePagePhoto/hero-section-image.svg"
                    alt="hero section image"
                />
            </div>
        </div>
        <div class="hidden lg:flex items-center justify-between">
            <div
                class="flex flex-col xl:flex-row items-center gap-3"
            >
                <h1
                    class="font-[Lato] font-black text-[46px] text-[#1E212C] leading-[130%]"
                >
                    1200
                </h1>
                <p
                    class="font-[Lato] font-normal text-[16px] leading-[160%] text-[#1E212C]"
                >
                    ${translateData[currentLang].studentGraduet}
                </p>
            </div>
            <div class="w-2 h-2 bg-[#FF3F3A] rounded-full"></div>
            <div
                class="flex flex-col xl:flex-row items-center gap-3"
            >
                <h1
                    class="font-[Lato] font-black text-[46px] text-[#1E212C] leading-[130%]"
                >
                    84
                </h1>
                <p
                    class="font-[Lato] font-normal text-[16px] leading-[160%] text-[#1E212C]"
                >
                    ${translateData[currentLang].commlatedCourses}
                </p>
            </div>
            <div class="w-2 h-2 bg-[#FF3F3A] rounded-full"></div>
            <div
                class="flex flex-col xl:flex-row items-center gap-3"
            >
                <h1
                    class="font-[Lato] font-black text-[46px] text-[#1E212C] leading-[130%]"
                >
                    61
                </h1>
                <p
                    class="font-[Lato] font-normal text-[16px] leading-[160%] text-[#1E212C]"
                >
                    ${translateData[currentLang].qualifiedTutors}
                </p>
            </div>
            <div class="w-2 h-2 bg-[#FF3F3A] rounded-full"></div>
            <div
                class="flex flex-col xl:flex-row items-center gap-3"
            >
                <h1
                    class="font-[Lato] font-black text-[46px] text-[#1E212C] leading-[130%]"
                >
                    5
                </h1>
                <p
                    class="font-[Lato] font-normal text-[16px] leading-[160%] text-[#1E212C]"
                >
                    ${translateData[currentLang].experienceYears}
                </p>
            </div>
        </div>
    </div>
`;
// hero Section end

// whoweare Section
const whoweare = document.querySelector("#whoweare");
whoweare.innerHTML = `
    <div
        class=" w-full max-w-[1340px] mx-auto px-5 my-[180px] flex flex-col gap-[30px] md:flex-row md:justify-between"
    >
        <div class="w-full md:w-[50%] h-[50%]">
            <img
                src="./Image/HomePagePhoto/whoweare.svg"
                alt="who we are image"
                class="w-full h-full object-cover"
            />
        </div>
        <div class="w-full md:w-[40%]">
            <div class="mb-[40px]">
                <h6
                    class="font-[Lato] font-bold text-[16px] text-[#1E212C] leading-[150%] tracking-[1px] mb-[8px]"
                >
                    ${translateData[currentLang].whoweare.toUpperCase()}
                </h6>
                <h1
                    class="font-[Lato] font-black text-[46px] text-[#1E212C] leading-[130%]"
                >
                    ${translateData[currentLang].whyCreateX}
                </h1>
            </div>
            <ul
                class="flex flex-col gap-[12px] max-w-[400px] mb-[48px]"
            >
                <li
                    class="flex items-start gap-[16px] font-[Lato] font-normal text-[16px] leading-[160%]"
                >
                    <img
                        src="./Image/HomePagePhoto/galochka.svg"
                        alt="check icon"
                        class="h-full mt-2"
                    />
                    ${translateData[currentLang].why1}
                </li>
                <li
                    class="flex items-start gap-[16px] font-[Lato] font-normal text-[16px] leading-[160%]"
                >
                    <img
                        src="./Image/HomePagePhoto/galochka.svg"
                        alt="check icon"
                        class="h-full mt-2"
                    />
                    ${translateData[currentLang].why2}
                </li>
                <li
                    class="flex items-start gap-[16px] font-[Lato] font-normal text-[16px] leading-[160%]"
                >
                    <img
                        src="./Image/HomePagePhoto/galochka.svg"
                        alt="check icon"
                        class="h-full mt-2"
                    />
                    ${translateData[currentLang].why3}
                </li>
                <li
                    class="flex items-start gap-[16px] font-[Lato] font-normal text-[16px] leading-[160%]"
                >
                    <img
                        src="./Image/HomePagePhoto/galochka.svg"
                        alt="check icon"
                        class="h-full mt-2"
                    />
                    ${translateData[currentLang].why4}
                </li>
                <li
                    class="flex items-start gap-[16px] font-[Lato] font-normal text-[16px] leading-[160%]"
                >
                    <img
                        src="./Image/HomePagePhoto/galochka.svg"
                        alt="check icon"
                        class="h-full mt-2"
                    />
                    ${translateData[currentLang].why5}
                </li>
                <li
                    class="flex items-start gap-[16px] font-[Lato] font-normal text-[16px] leading-[160%]"
                >
                    <img
                        src="./Image/HomePagePhoto/galochka.svg"
                        alt="check icon"
                        class="h-full mt-2"
                    />
                    ${translateData[currentLang].why6}
                </li>
            </ul>

            <div>
                <a
                    href="./Pages/About/about.html"
                    class="inline-block py-2 px-[32px] font-[Lato] font-normal text-[16px] leading-8 tracking-[0.5px] text-white border-[1px] border-[#F75E05] rounded-[4px] bg-[#F75E05] transition-all duration-300 hover:shadow-[0px_4px_4px_0px_#F75E0580]"
                >
                    ${translateData[currentLang].moreAboutUs}
                </a>
            </div>
        </div>
    </div>
`;
// whoweare Section end

// featured Courses Section
const featuredCoursesSection = document.querySelector(
    "#featuredCoursesSection",
);
featuredCoursesSection.innerHTML = `
    <div class=" w-full max-w-[1340px] mx-auto px-5">
        <div>
            <span class="font-[Lato] font-bold text-[16px] leading-[150%] tracking-[1px] text-[#1E212C] mb-2">${translateData[currentLang].readytolearn.toUpperCase()}</span>
        </div>
        <div class="flex justify-between items-center mb-11">
            <h1 class="font-[Lato] font-black text-[30px] md:text-[46px] leading-[130%] text-[#1E212C]">${translateData[currentLang].featuredCourses}</h1>
            <a href="./Pages/Courses/courses.html" class="hidden md:block px-[40px] font-[Lato] font-bold text-[16px] leading-[52px] tracking-[0.5px] text-[#F75E05] border border-[#F75E05] rounded-[4px] hover:bg-[#FF3F3A] hover:text-white transition-all duration-300">${translateData[currentLang].viewAllCourses}</a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            ${allCourses
                .slice(0, 6)
                .map((item) => {
                    const currentLangData = item[currentLang];
                    return `
                    <a href="Pages/Courses/course/course.html" class="w-full md:flex  rounded-[4px] overflow-hidden">
                        <div class="w-full aspect-video md:w-1/3 md:aspect-square">
                            <img
                                src='${item.curatorTitleImg}'
                                alt='curator images'
                                class="w-full h-full object-cover"
                            />
                        </div>
                        <div class="p-[32px] border border-[#E5E8ED] flex-1">
                            <span class="bg-[${item.backColor}] text-white px-2 font-[Lato] font-normal text-[14px] leading-[150%] rounded-[4px]">${currentLangData.category}</span>
                            <h1 class="w-full font-[Lato] font-bold text-5 leading-[150%] text-[#1E212C] my-4">${currentLangData.courseTitle}</h1>
                            <div class="flex items-center gap-2">
                                <span class="text-[#FF4242] font-[Lato] font-bold text-[18px] leading-[150%]">$${item.coursePrice}</span>
                                <p class="font-[Lato] font-normal text-[18px] leading-[150%] text-[#787A80]">| ${currentLangData.curator}</p>
                            </div>
                        </div>
                    </a>
                `;
                })
                .join(" ")}
        </div>
    </div>
`;
// featured Courses Section end

// ourBenefits Setion
const ourBenefits = document.querySelector("#ourBenefits");

const benefitsData = {
    experiend: {
        img: "Image/HomePagePhoto/benefit1.svg",
        en: {
            title: "Only practicing tutors",
            description:
                "Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.",
        },
        ru: {
            title: "Только практикующие репетиторы",
            description:
                "На нашей платформе преподают только специалисты с реальным опытом и активной практикой. Изучайте теорию вместе с практикой, получайте точные ответы на интересующие вас вопросы и эффективно повышайте свой уровень знаний.",
        },
        uz: {
            title: "Faqat amaliyotchi repetitorlar",
            description:
                "Bizning platformamizda faqat real tajribaga ega bo'lgan va o'z sohasida faoliyat yuritayotgan mutaxassislar dars berishadi. Nazariya va amaliyotni birgalikda o'rganing, o'zlaringizni qiziqtirgan barcha savollarga aniq javoblar oling hamda bilimingizni samarali oshiring.",
        },
    },
    feedBack: {
        img: "Image/HomePagePhoto/benefit2.svg",
        en: {
            title: "Always in touch, ready to support",
            description:
                "Faucibus erat massa elementum nec fermentum augue. Ante pellentesque dis et malesuada mauris, faucibus est et a. Gravida malesuada ut varius eu pretium vitae eu. Volutpat nullam posuere eget felis at dui neque. Neque vitae, pulvinar donec integer lacus, fermentum, faucibus. Lorem porttitor hendrerit vel interdum arcu arcu mollis massa. Velit nulla felis ornare elit a platea malesuada.",
        },
        ru: {
            title: "Всегда на связи, готовы поддержать",
            description:
                "По любым вопросам или трудностям, возникшим в процессе обучения, вы всегда можете обратиться в нашу службу поддержки. Мы готовы оперативно помочь вам, чтобы ваше обучение проходило непрерывно и максимально эффективно.",
        },
        uz: {
            title: "Har doim aloqadamiz, qo'llab-quvvatlashga tayyormiz",
            description:
                "O'quv jarayonida yuzaga kelgan har qanday savol yoki muammo bo'yicha bizning qo'llab-quvvatlash jamoamizga murojaat qilishingiz mumkin. Biz sizga tezkor yordam berishga va o'qishingizni uzluksiz hamda samarali davom ettirishingizga har doim tayyormiz.",
        },
    },
    onlineLib: {
        img: "Image/HomePagePhoto/benefit3.svg",
        en: {
            title: "The most carefully selected materials",
            description:
                "Senectus magnis diam tellus nibh elit ac ac. Elit eget faucibus urna, feugiat arcu mattis viverra tempor id. Vivamus nunc quam donec non amet nulla etiam ullamcorper posuere. Venenatis commodo molestie eleifend nulla faucibus in. In sed felis adipiscing pharetra, etiam. Molestie euismod consectetur eu sed. Sit magnis sed sed ipsum vulputate pellentesque nullam faucibus.",
        },
        ru: {
            title: "Самые тщательно отобранные материалы",
            description:
                "Наши учебные программы и материалы тщательно отобраны экспертами отрасли. Без лишней «воды» — мы предоставляем только самые актуальные, необходимые и применимые на практике знания.",
        },
        uz: {
            title: "Eng sinchiklab tanlab olingan materiallar",
            description:
                "Bizning o'quv dasturlarimiz va darsliklarimiz soha mutaxassislari tomonidan puxta saralab olingan. Ortqiqcha ma'lumotlarsiz, faqat eng zarur, zamonaviy va amaliyotda qo'llaniladigan sifatli bilimlar bilan ta'minlaymiz.",
        },
    },
    comunity: {
        img: "Image/HomePagePhoto/benefit4.svg",
        en: {
            title: "Student communication",
            description:
                "Eu placerat magna elementum nulla egestas id. Non sit enim tortor massa id tristique vel tincidunt sit. Tellus, ridiculus dictum purus nibh sed bibendum. In eleifend ac convallis convallis lectus. Urna semper ac non eros, donec accumsan egestas ipsum. Arcu at morbi.",
        },
        ru: {
            title: "Общение между студентами",
            description:
                "Активное общение между студентами и преподавателями помогает лучше усваивать материал. Делитесь опытом, задавайте вопросы и развивайтесь вместе в сообществе единомышленников.",
        },
        uz: {
            title: "O'quvchilar bilan muloqot",
            description:
                "O'quvchilarimiz va repetitorlar o'rtasidagi faol muloqot bilamlarni yanada mustahkamlashga yordam beradi. Tajriba almashing, savollar bering va hamfikrlar jamiyatida birgalikda rivojlaning.",
        },
    },
};
ourBenefits.innerHTML = `
    <div class=" w-full max-w-[1340px] mx-auto px-5">
        <div class="flex flex-col md:items-center gap-2 mb-[60px]">
            <span class="font-[Lato] font-bold text-[16px] leading-[150%] tracking-[1px] text-[#1E212C]">${translateData[currentLang].ourbenefits.toUpperCase()}</span>
            <h1 class="font-[Lato] font-black text-[28px] sm:text-[36px] md:text-[46px] leading-[130%] text-[#1E212C]">${translateData[currentLang].thatshowwedoit}</h1>
        </div>
        <div class="w-full grid grid-cols-2 gap-4 pb-4 lg:pb-0 lg:grid lg:grid-cols-4 scrollbar-hide">
            <button class="w-full flex items-center justify-center gap-2 py-2.5 rounded-[4px] transition-all duration-300 border border-[#FF3F3A]" id="exTutorBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="text-[#FF3F3A]" id="benefitSVG1">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" />
                </svg>
                <span class="font-[Lato] font-bold text-[16px] leading-[160%] text-[#FF3F3A]" id="benefitSpan1">${translateData[currentLang].experiencedTutors}</span>
            </button>
            <button class="w-full flex items-center justify-center gap-2 py-2.5 rounded-[4px] transition-all duration-300" id="feedSupBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="text-[#9A9CA5]" id="benefitSVG2">
	                <path d="M0 0h24v24H0z" fill="none" />
	                <path fill="currentColor" d="M5 9v12H1V9zm4 12a2 2 0 0 1-2-2V9c0-.55.22-1.05.59-1.41L14.17 1l1.06 1.06c.27.27.44.64.44 1.05l-.03.32L14.69 8H21a2 2 0 0 1 2 2v2c0 .26-.05.5-.14.73l-3.02 7.05C19.54 20.5 18.83 21 18 21zm0-2h9.03L21 12v-2h-8.79l1.13-5.32L9 9.03z" />
                </svg>
                <span class="font-[Lato] font-bold text-[16px] leading-[160%] text-[#9A9CA5]" id="benefitSpan2">${translateData[currentLang].feedbackSupports}</span>
            </button>
            <button class="w-full flex items-center justify-center gap-2 py-2.5 rounded-[4px] transition-all duration-300" id="onlineLibBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="text-[#9A9CA5]" id="benefitSVG3">
	                <path d="M0 0h24v24H0z" fill="none" />
	                <path fill="currentColor" d="m6 8l6 3l6-3l-6-3zm6.489-4.884l7.993 4.076c.486.248.661.81.391 1.257a.97.97 0 0 1-.39.359l-7.994 4.076a1.09 1.09 0 0 1-.978 0L3.518 8.808c-.486-.248-.661-.81-.391-1.257a.97.97 0 0 1 .39-.359l7.994-4.076c.304-.155.674-.155.978 0m0 13.766a1.07 1.07 0 0 1-.978 0l-7.993-4.147c-.486-.252-.661-.824-.391-1.278a1 1 0 0 1 .39-.365a.82.82 0 0 1 .755 0l7.24 3.755c.303.158.673.158.977 0l7.239-3.755a.82.82 0 0 1 .754 0c.486.252.661.824.391 1.278a1 1 0 0 1-.39.365zm0 4a1.07 1.07 0 0 1-.978 0l-7.993-4.147c-.486-.252-.661-.824-.391-1.278a1 1 0 0 1 .39-.365a.82.82 0 0 1 .755 0l7.24 3.755c.303.158.673.158.977 0l7.239-3.755a.82.82 0 0 1 .754 0c.486.252.661.824.391 1.278a1 1 0 0 1-.39.365z" />
                </svg>
                <span class="font-[Lato] font-bold text-[16px] leading-[160%] text-[#9A9CA5]" id="benefitSpan3">${translateData[currentLang].onlineLibrary}</span>
            </button>
            <button class="w-full flex items-center justify-center gap-2 py-2.5 rounded-[4px] transition-all duration-300" id="comunityBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" class="text-[#9A9CA5]" id="benefitSVG4">
	                <path d="M0 0h256v256H0z" fill="none" />
	                <path fill="currentColor" d="M128 24a104 104 0 0 0-91.82 152.88l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35A104 104 0 1 0 128 24m0 192a87.87 87.87 0 0 1-44.06-11.81a8 8 0 0 0-6.54-.67L40 216l12.47-37.4a8 8 0 0 0-.66-6.54A88 88 0 1 1 128 216" />
                </svg>
                <span class="font-[Lato] font-bold text-[16px] leading-[160%] text-[#9A9CA5]" id="benefitSpan4">${translateData[currentLang].community}</span>
            </button>
        </div>
        <div class="flex flex-col-reverse gap-10 md:flex-row md:justify-between md:items-center mt-[60px]">
            <div class="w-full md:w-1/2">
                <h1 id="benefitDataH1" class="font-[Lato] font-black text-[32px] leading-[130%] text-[#1E212C] max-w-[495px] mb-[24px] transition-all duration-300"></h1>
                <p id="benefitDataP" class="font-[Lato] font-normal text-[16px] leading-[160%] text-[#424551] max-w-[495px] transition-all duration-300"></p>
            </div>
            <div id="benefitDataImg" class="w-full md:w-1/2 transition-all duration-300">
            </div>
        </div>
    </div>
`;

let currentBenefitBtn = "experiend";
const exTutorBtn = document.querySelector("#exTutorBtn");
const feedSupBtn = document.querySelector("#feedSupBtn");
const onlineLibBtn = document.querySelector("#onlineLibBtn");
const comunityBtn = document.querySelector("#comunityBtn");

function renderBenefit() {
    const benefitDataH1 = document.querySelector("#benefitDataH1");
    const benefitDataP = document.querySelector("#benefitDataP");
    const benefitDataImg = document.querySelector("#benefitDataImg");

    const currentBen = benefitsData[currentBenefitBtn][currentLang];
    const currentBenImg = benefitsData[currentBenefitBtn].img;
    if (benefitDataH1) benefitDataH1.textContent = currentBen.title;
    if (benefitDataP) benefitDataP.textContent = currentBen.description;
    if (benefitDataImg) {
        benefitDataImg.innerHTML = `<img src="${currentBenImg}" alt="${currentBen.title}"/>`;
    }
}

const benefitSVG1 = document.querySelector("#benefitSVG1");
const benefitSVG2 = document.querySelector("#benefitSVG2");
const benefitSVG3 = document.querySelector("#benefitSVG3");
const benefitSVG4 = document.querySelector("#benefitSVG4");
const benefitSpan1 = document.querySelector("#benefitSpan1");
const benefitSpan2 = document.querySelector("#benefitSpan2");
const benefitSpan3 = document.querySelector("#benefitSpan3");
const benefitSpan4 = document.querySelector("#benefitSpan4");
const benefitItems = [
    { btn: exTutorBtn, svg: benefitSVG1, span: benefitSpan1, key: "experiend" },
    { btn: feedSupBtn, svg: benefitSVG2, span: benefitSpan2, key: "feedBack" },
    {
        btn: onlineLibBtn,
        svg: benefitSVG3,
        span: benefitSpan3,
        key: "onlineLib",
    },
    { btn: comunityBtn, svg: benefitSVG4, span: benefitSpan4, key: "comunity" },
];

function setActiveTab(selectedKey) {
    currentBenefitBtn = selectedKey;

    benefitItems.forEach((item) => {
        const isActive = item.key === selectedKey;

        item.btn?.classList.toggle("border", isActive);
        item.btn?.classList.toggle("border-[#FF3F3A]", isActive);

        item.svg?.classList.toggle("text-[#FF3F3A]", isActive);
        item.span?.classList.toggle("text-[#FF3F3A]", isActive);
    });

    renderBenefit();
}

benefitItems.forEach((item) => {
    item.btn?.classList.add(
        "w-full",
        "flex",
        "items-center",
        "justify-center",
        "gap-2",
        "py-2.5",
        "rounded-[4px]",
        "transition-all",
        "duration-300",
    );
    item.svg?.classList.add("text-[#9A9CA5]", "transition-all", "duration-300");
    item.span?.classList.add(
        "text-[#9A9CA5]",
        "transition-all",
        "duration-300",
    );

    item.btn?.addEventListener("click", () => setActiveTab(item.key));
});
renderBenefit();
// ourBenefits Setion end

// ourEvents Section
const ourEvents = document.querySelector("#ourEvents");
ourEvents.innerHTML = `
    <div class=" w-full max-w-[1340px] mx-auto px-5">
        <div class="mb-[60px] md:flex md:flex-col md:items-center md:gap-2">
            <span class="font-[Lato] font-bold text-[16px] leading-[150%] text-[#1E212C]">${translateData[currentLang].ourevents.toUpperCase()}</span>
            <h1 class="font-[Lato] font-black text-[46px] leading-[130%] text-[#1E212C]">${translateData[currentLang].lecturesWorkshop}</h1>
        </div>
        <div class="grid grid-cols-1 gap-6">
            ${allEvents
                .slice(0, 3)
                .map((item) => {
                    return `
                <div class="w-full bg-white px-6 py-3 md:px-10 md:py-8 flex flex-col md:flex-row md:items-center md:gap-10">
                    <div class="w-full md:w-auto flex items-center gap-5 mb-[12px]">
                        <p class="font-[Lato] font-black text-[48px] leading-[130%] text-[#FF3F3A]">
                            ${item.previewListGrid.date < 10 ? `0${item.previewListGrid.date}` : item.previewListGrid.date}
                        </p>
                        <div class="flex flex-col gap-1">
                            <p class="font-[Lato] font-bold text-[20px] leading-[150%] text-[#1E212C]">${item.previewListGrid[currentLang].month}</p>
                            <p class="font-[Lato] font-normal text-[16px] leading-[160%] text-[#787A80]">${item.previewListGrid.startTime} - ${item.previewListGrid.endTime}</p>
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between md:items-center md:flex-1 md:gap-10">
                        <div>
                            <a href="./Pages/Events/event.html" class="inline-block flex-shrink-0 font-[Lato] font-bold text-[20px] leading-[150%] text-[#1E212C] pb-[8px]">
                                ${item.previewListGrid[currentLang].previewTitle}
                            </a>
                            <p class="font-[Lato] font-normal text-[16px] leading-[150%] text-[#1E212C]">
                                ${item.previewListGrid[currentLang].category}
                            </p>
                        </div>
                        <div class="mt-5 md:mt-0 py-2">
                            <a
                                href="./Pages/Events/event.html"
                                class="inline-block w-full md:w-auto text-center py-1 px-[32px] font-[Lato] font-normal text-[16px] leading-8 tracking-[0.5px] text-[#F75E05] border-[1px] border-[#F75E05] rounded-[4px] bg-transparent  transition-all duration-300 hover:shadow-[0px_4px_4px_0px_#F75E0580] hover:bg-[#F75E05] hover:text-white whitespace-nowrap">
                                ${item.previewListGrid[currentLang].viewMore}
                            </a>
                        </div> 
                    </div> 
                </div>
            `;
                })
                .join(" ")}
        </div>
        <div class="mt-[60px] flex justify-center">
            <div class="flex items-center gap-10">
                <p class="font-[Lato] font-bold text-[28px] leading-[150%] text-[#1E212C]">
                    ${translateData[currentLang].doyouwatnmore}
                </p>
                <a href="./Pages/Events/events.html" class="inline-block py-2 px-[32px] font-[Lato] font-normal text-[16px] leading-8 tracking-[0.5px] text-white border-[1px] border-[#F75E05] rounded-[4px] bg-[#F75E05] transition-all duration-300 hover:shadow-[0px_4px_4px_0px_#F75E0580]">
                    ${translateData[currentLang].exploreAllEvents}
                </a>
            </div>
            <div>
        </div>
    </div>
    <div class="absolute top-[-10%] right-0 opacity-20 rotate-[-90deg]">
        <img src="Image/HomePagePhoto/circles (1).svg" alt="circles decoration" />
    </div>
    <div class="absolute bottom-0 left-0">
        <img src="Image/HomePagePhoto/dots (1).svg" alt="dots decoration" />
    </div>
`;
// our Events Section end

// certificates Section
const creatXCertificateSection = document.querySelector("#creatXCertificate");
creatXCertificateSection.innerHTML = `
    <div class=" w-full max-w-[1340px] mx-auto px-5 lg:flex lg:justify-between lg:items-start">
        <div class="mb-[16px]">
            <div>
                <span class="font-[Lato] font-bold text-[16px] leading-[150%] tracking-[1px] text-[#1E212C] mb-[8px]">
                    ${translateData[currentLang].createXCertificate.toUpperCase()}
                </span>
            </div>
            <div>
                <h1 class="font-[Lato] font-black text-[26px] w-full md:text-[36px] lg:text-[46px] leading-[130%] text-[#1E212C] mb-[18px] md:max-w-[400px]">
                    ${translateData[currentLang].createXCertificateH1}
                </h1>
                <p class="font-[Lato] font-normal text-[16px] w-full md:max-w-[400px] leading-[160%] text-[#424551]">
                    ${translateData[currentLang].createXCertificateP}
                </p>
            </div>
            <div class="flex items-center gap-10 mt-[32px]">
                <a href="#!" class="w-[105px] h-[50px] inline-block">
                    <img src="./Image/HomePagePhoto/certificat-section-img-1.svg" alt="certificate image" class="w-full h-full object-cover" />
                </a>
                <a href="#!" class="w-[105px] h-[50px] inline-block">
                    <img src="./Image/HomePagePhoto/certificat-section-img-2.svg" alt="certificate image" class="w-full h-full object-cover" />
                </a>
                <a href="#!" class="w-[105px] h-[50px] inline-block">
                    <img src="./Image/HomePagePhoto/certificat-section-img-3.svg" alt="certificate image" class="w-full h-full object-cover" />
                </a>
            </div>
        </div>
        <div class="w-full h-auto lg:w-[60%]">
            <img src="./Image/HomePagePhoto/certificate.jpg" alt="certificate image" class="w-full h-full object-cover z-10 shadow-lg rounded" />
        </div>
    </div>
`;
// certificates Section end

// bestTutors Section
const bestTutors = document.querySelector("#bestTutors");
bestTutors.innerHTML = `
    <div class=" w-full max-w-[1340px] mx-auto px-5">
        <div>
            <span class="font-[Lato] font-bold text-[16px] leading-[150%] tracking-[1px] text-[#1E212C] mb-2">
                ${translateData[currentLang].bestTutorsHere.toUpperCase()}
            </span>
        </div>
        <div class="flex justify-between items-center mb-[60px]">
            <h1 class="font-[Lato] font-black text-[30px] md:text-[46px] leading-[130%] text-[#1E212C]">
                ${translateData[currentLang].meetOurTema}
            </h1>
            <div class="flex items-center gap-3">
                <button class="custom-prev-btn w-[48px] h-[48px] flex items-center justify-center rounded-full hover:bg-[#FF3F3A] transition-all duration-300 group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" class="rotate-180 text-[#424551] group-hover:text-[#FFFFFF] transition-all duration-300">
	                    <path d="M0 0h16v16H0z" fill="none" />
	                    <path fill="currentColor" fill-rule="evenodd" d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8" clip-rule="evenodd" />
                    </svg>
                </button>
                <button class="custom-next-btn w-[48px] h-[48px] flex items-center justify-center rounded-full hover:bg-[#FF3F3A] transition-all duration-300 group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" class="text-[#424551] group-hover:text-[#FFFFFF] transition-all duration-300">
	                    <path d="M0 0h16v16H0z" fill="none" />
                        <path fill="currentColor" fill-rule="evenodd" d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
        <div class="w-full h-full swiper mySwiper">
            <div class="swiper-wrapper">
            ${allCourses
                .map((item) => {
                    return `
                <div class="w-full swiper-slide text-center">
                    <div class="w-full aspect-[3/4] mb-4 overflow-hidden">
                        <img src="${item.curatorTitleImg}" alt="tutor image" class="w-full h-full object-cover" />
                    </div>
                    <div class="flex-1">
                        <h3 class="font-[Lato] font-bold text-[20px] leading-[150%] text-[#424551]">${item[currentLang].curator}</h3>
                        <p class="font-[Lato] font-normal text-[16px] leading-[160%] text-[#787A80]">${item.curator[currentLang].jobs}</p>
                    </div>
                </div>
            `;
                })
                .join(" ")}
            </div>
        </div>
    </div>
`;
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".custom-next-btn",
        prevEl: ".custom-prev-btn",
    },
    breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 20 },
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 25 },
        1024: { slidesPerView: 4, spaceBetween: 30 },
    },
});
// bestTutors Section end

// testimonials Section
export const testimonialsData = [
    {
        id: 1,
        authorImage: `
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='#9CA3AF'
                class='w-full h-full object-cover rounded-full bg-gray-200 p-2'
            >
                 
                <path
                    fill-rule='evenodd'
                    d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.6-7.812-1.7a.75.75 0 01-.437-.695z'
                    clip-rule='evenodd'
                /> 
            </svg>
        `,
        comment:
            "Learning from Ibrohimjon Khabibullayev has been a game-changer for my career. His structured approach to complex frontend concepts, hands-on mentorship, and endless support made web development truly enjoyable and accessible. He doesn't just teach code—he inspires you to think like a real engineer!",
        en: {
            authorName: "Eleanor Pena",
            position: "Frontend Developer",
            course: "Web Development Course",
        },
        uz: {
            authorName: "Eleanor Pena",
            position: "Frontend Dasturchi",
            course: "Veb Dasturlash Kursi",
        },
        ru: {
            authorName: "Элеанор Пена",
            position: "Frontend-разработчик",
            course: "Курс веб-разработки",
        },
    },
    {
        id: 2,
        authorImage: `
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='#9CA3AF'
                class='w-full h-full object-cover rounded-full bg-gray-200 p-2'
            >
                 
                <path
                    fill-rule='evenodd'
                    d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.6-7.812-1.7a.75.75 0 01-.437-.695z'
                    clip-rule='evenodd'
                /> 
            </svg>
        `,
        comment:
            "Ibrohimjon is an outstanding mentor with an exceptional talent for breaking down intricate JavaScript and UI architectures into crystal-clear lessons. Thanks to his real-world project guidance, I gained the confidence to tackle high-level production challenges.",
        en: {
            authorName: "Guy Hawkins",
            position: "UI/UX Designer",
            course: "Interface Design Masterclass",
        },
        uz: {
            authorName: "Gay Hokins",
            position: "UI/UX Dizayner",
            course: "Interfeys Dizayni Masterklassi",
        },
        ru: {
            authorName: "Гай Хокинс",
            position: "UI/UX-дизайнер",
            course: "Мастер-класс по дизайну интерфейсов",
        },
    },
    {
        id: 3,
        authorImage: `
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='#9CA3AF'
                class='w-full h-full object-cover rounded-full bg-gray-200 p-2'
            >
                 
                <path
                    fill-rule='evenodd'
                    d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.6-7.812-1.7a.75.75 0 01-.437-.695z'
                    clip-rule='evenodd'
                /> 
            </svg>
        `,
        comment:
            "Working on projects alongside Ibrohimjon Khabibullayev showed me what true professionalism looks like. His deep knowledge of modern frontend frameworks and clean coding standards helped our entire team level up significantly.",
        en: {
            authorName: "Kristin Watson",
            position: "Software Engineer",
            course: "Advanced JavaScript Course",
        },
        uz: {
            authorName: "Kristin Uotson",
            position: "Dasturiy Ta'minot Muhandisi",
            course: "Murakkab JavaScript Kursi",
        },
        ru: {
            authorName: "Кристин Уотсон",
            position: "Инженер программного обеспечения",
            course: "Продвинутый курс JavaScript",
        },
    },
    {
        id: 4,
        authorImage: `
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='#9CA3AF'
                class='w-full h-full object-cover rounded-full bg-gray-200 p-2'
            >
                 
                <path
                    fill-rule='evenodd'
                    d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.6-7.812-1.7a.75.75 0 01-.437-.695z'
                    clip-rule='evenodd'
                /> 
            </svg>
        `,
        comment:
            "If you want to master frontend development with modern standards, Ibrohimjon is the mentor you need. His attention to code quality, performance optimization, and responsive design is second to none. Truly grateful for his guidance!",
        en: {
            authorName: "Cody Fisher",
            position: "Full Stack Student",
            course: "Web Application Development",
        },
        uz: {
            authorName: "Kodi Fisher",
            position: "Full Stack Talabasi",
            course: "Veb Ilova Ishlab Chiqish",
        },
        ru: {
            authorName: "Коди Фишер",
            position: "Студент Full Stack",
            course: "Разработка веб-приложений",
        },
    },
];
const testimonials = document.querySelector("#testimonials");
testimonials.innerHTML = `
    <div class='w-full max-w-[1300px] mx-auto px-5'>
         
        <div class='flex flex-col items-center gap-2'>
             
            <span class='font-[Lato] font-bold text-[16px] leading-[150%] tracking-[1px] text-[#1E212C]'>
                ${translateData[currentLang].testimonials.toUpperCase()}
            </span> 
            <h1 class='font-[Lato] font-black text-[26px] md:text-[36px] lg:text-[46px] leading-[130%] text-[#1E212C]'>
                ${translateData[currentLang].whatOurStudentsSay}
            </h1> 
        </div> 
        <div class='relative py-[60px]'>
             
            <div class='swiper testimonials-swiper flex items-center justify-center overflow-hidden mx-0 lg:mx-32'>
                 
                <div class='swiper-wrapper'>
                     
                    ${testimonialsData
                        .map((item) => {
                            return `
                                <div class='swiper-slide transition-all duration-300 px-[50px] md:px-[70px] lg:px-[104px] py-[20px] md:py-[40px] lg:py-[64px] bg-white flex items-start gap-[30px] rounded-[4px]'>
                                     
                                    <div class='w-[28px] h-[20px] flex items-start justify-center'>
                                         
                                        <img
                                            src='Image/HomePagePhoto/quote.svg'
                                            alt='quote img'
                                            class='w-full h-full object-cover'
                                        /> 
                                    </div> 
                                    <div class='flex-1'>
                                         
                                        <h2 class='font-[Lato] font-normal text-[20px] leading-[150%] text-[#424551] mb-[24px]'>
                                            ${item.comment}
                                        </h2> 
                                        <div class='flex flex-col md:flex-row items-center gap-[20px]'>
                                             
                                            <div class='w-[72px] h-[72px] rounded-full overflow-hidden'>
                                                 
                                                ${item.authorImage} 
                                            </div> 
                                            <div class='flex-1'>
                                                 
                                                <h4 class='font-[Lato] font-bold text-[16px] leading-[160%] text-[#1E212C] text-center md:text-left mb-[4px]'>
                                                    ${
                                                        item[currentLang]
                                                            .authorName
                                                    }
                                                </h4> 
                                                <p class='font-[Lato] font-normal text-[14px] leading-[150%] text-[#787A80] text-center md:text-left'>
                                                    ${item[currentLang].position}
                                                    , $
                                                    {item[currentLang].course}
                                                </p> 
                                            </div> 
                                        </div> 
                                    </div> 
                                </div>
                            `;
                        })
                        .join(" ")} 
                </div> 
            </div> 
            <button class='hidden lg:flex testimonials-prev-btn absolute left-0 z-[2] top-1/2 -translate-y-1/2 w-[48px] h-[48px] items-center justify-center rounded-full hover:bg-[#FF3F3A] transition-all duration-300 group'>
                 
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 16 16'
                    class='rotate-180 text-[#424551] group-hover:text-[#FFFFFF] transition-all duration-300'
                >
                     
                    <path d='M0 0h16v16H0z' fill='none' /> 
                    <path
                        fill='currentColor'
                        fill-rule='evenodd'
                        d='M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8'
                        clip-rule='evenodd'
                    /> 
                </svg> 
            </button> 
            <button class='hidden lg:flex testimonials-next-btn absolute right-0 z-[2] top-1/2 -translate-y-1/2 w-[48px] h-[48px] items-center justify-center rounded-full hover:bg-[#FF3F3A] transition-all duration-300 group'>
                 
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 16 16'
                    class='text-[#424551] group-hover:text-[#FFFFFF] transition-all duration-300'
                >
                     
                    <path d='M0 0h16v16H0z' fill='none' /> 
                    <path
                        fill='currentColor'
                        fill-rule='evenodd'
                        d='M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8'
                        clip-rule='evenodd'
                    /> 
                </svg> 
            </button> 
            <div class='testimonials-pagination absolute bottom-0 flex justify-center gap-3 [&>.swiper-pagination-bullet]:!w-8 [&>.swiper-pagination-bullet]:!h-1 [&>.swiper-pagination-bullet]:!bg-[#B3B7BC] [&>.swiper-pagination-bullet]:!opacity-100 [&>.swiper-pagination-bullet]:!rounded-full [&>.swiper-pagination-bullet]:!m-0 [&>.swiper-pagination-bullet]:transition-all [&>.swiper-pagination-bullet]:duration-300 [&>.swiper-pagination-bullet.swiper-pagination-bullet-active]:!bg-[#424551]'></div> 
        </div> 
    </div>
`;
var swiper1 = new Swiper(".testimonials-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: { el: ".testimonials-pagination", clickable: true },
    navigation: {
        nextEl: ".testimonials-next-btn",
        prevEl: ".testimonials-prev-btn",
    },
});
// testimonials Section end

// ourBlog Section
const ourBlog = document.querySelector("#ourBlog");
ourBlog.innerHTML = `
    <div class="w-full max-w-[1340px] mx-auto px-5">
        <div>
            <span class="font-[Lato] font-bold text-[16px] leading-[150%] tracking-[1px] text-[#1E212C] mb-2">${translateData[currentLang].ourBlog.toUpperCase()}</span>
        </div>
        <div class="flex justify-between items-center mb-11">
            <h1 class="font-[Lato] font-black text-[30px] md:text-[46px] leading-[130%] text-[#1E212C]">${translateData[currentLang].latestPosts}</h1>
            <a href="./Pages/Courses/courses.html" class="hidden md:block px-[40px] font-[Lato] font-bold text-[16px] leading-[52px] tracking-[0.5px] text-[#F75E05] border border-[#F75E05] rounded-[4px] hover:bg-[#FF3F3A] hover:text-white transition-all duration-300">${translateData[currentLang].goBlog}</a>
        </div>
        <div class="swiper swiper3">
            <div class="swiper-wrapper">
                ${allBlogPosts
                    .slice(0, 3)
                    .map((post) => {
                        return `
                    <div class="swiper-slide group">
                        <div class="w-full h-auto rounded-[4px] relative mb-4 overflow-hidden">
                            <a href="#!" class="inline-block w-full h-full overflow-hidden rounded-[4px]">
                                <img src="${post.img}" alt="post img" class="w-full h-full object-cover rounded group-hover:scale-110 transition-all duration-300"/>
                                <div class="py-[1px] px-[8px] bg-white rounded-[4px] flex items-center gap-[4px] absolute top-3 left-3">
                                    <img src="${post.en.type === "Podcast" ? "Image/HomePagePhoto/microphone.svg" : post.en.type === "Article" ? "Image/HomePagePhoto/article.svg" : "Image/HomePagePhoto/videoType.svg"}" />
                                    <span>${post[currentLang].type}</span>
                                </div>
                            </a>
                        </div>
                        <div>
                            <div class="flex flex-wrap gap-3 mb-2">
                                <span class="flex items-center font-[Lato] font-bold text-[14px] leading-[150%] text-[#787A80]">${post[currentLang].category} 
                                <span class="inline-block w-[1px] h-3 bg-[#787A80] rounded-[1px] ml-3"></span></span>
                                <div class="flex items-center gap-2">
                                    <img src="Image/HomePagePhoto/Calendar.svg" />
                                    <span class="flex items-center whitespace-nowrap font-[Lato] font-bold text-[14px] leading-[150%] text-[#787A80]">${post[currentLang].date}
                                    <span class="inline-block w-[1px] h-3 bg-[#787A80] rounded-[1px] ml-3"></span></span>
                                </div>
                                <span class="flex items-center gap-2 whitespace-nowrap font-[Lato] font-bold text-[14px] leading-[150%] text-[#787A80]">
                                    <img src="Image/HomePagePhoto/Clock.svg" class=""/>
                                    ${post[currentLang].duration}
                                </span>
                            </div>
                            <div class="">
                                <a href="#" class="font-[Lato] font-bold text-[20px] leading-[150%] text-[#1E212C] hover:text-[#ff3f3a] transition-all duration-300">${post[currentLang].title}</a>
                                <p class="line-clamp-2 font-[Lato] font-normal text-[16px] leading-[160%] text-[#424551] mt-2 mb-4">${post[currentLang].description}</p>
                                <a href="#" class="font-[Lato] font-bold text-[16px] leading-[160%] text-[#1E212C] hover:text-[#ff3f3a] transition-all duration-300 flex items-center gap-2 hover:gap-4">
                                    ${post[currentLang].action} 
                                    <img src="Image/HomePagePhoto/right.svg" />
                                </a>
                            </div>
                        </div>
                    </div>
                `;
                    })
                    .join(" ")}
            </div>
            <div class="customPaginat flex items-center justify-center gap-3 mt-10 [&>.swiper-pagination-bullet]:!w-8 [&>.swiper-pagination-bullet]:!h-1 [&>.swiper-pagination-bullet]:!bg-[#B3B7BC] [&>.swiper-pagination-bullet]:!opacity-100 [&>.swiper-pagination-bullet]:!rounded-full [&>.swiper-pagination-bullet]:!m-0 [&>.swiper-pagination-bullet]:transition-all [&>.swiper-pagination-bullet]:duration-300 [&>.swiper-pagination-bullet.swiper-pagination-bullet-active]:!bg-[#424551]">
                
            </div>
        </div>

    </div>
`;
var swiper = new Swiper(".swiper3", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".customPaginat",
        clickable: true,
    },
    breakpoints: {
        590: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
    },
});
// ourBlog Section end

// <<<<<<< HEAD// >>>>>>> 881d6a4392fade75368e33de69e89d04eb2a3126
// subscribeSection
const subscribeSection = document.querySelector("#subscribeSection");
subscribeSection.innerHTML = `
    <div class="px-5">
        <div class="flex flex-col gap-2 mb-[60px]">
            <span class="font-[Lato] font-bold text-[16px] leading-[150%] tracking-[1px] text-[#1E212C] text-center">${translateData[currentLang].dontmiss.toUpperCase()}</span>
            <h1 class="font-[Lato] font-black text-[26px] md:text-[36px] lg:text-[46px] leading-[150%] tracking-[1px] text-[#1E212C] text-center max-w-[900px]">${translateData[currentLang].subscribeTitle}</h1>
        </div>
        <div class="">
            <form class="flex flex-col items-center justify-center md:flex-row gap-[24px]">
                <input type="text" placeholder="${translateData[currentLang].subscribePlaceholder}" class="py-[13px] px-[16px] bg-[#FFFFFF] border border-[#D7DADD] rounded-[4px] min-w-full md:min-w-[422px] font-[Lato] font-normal text-[16px] leading-[160%] text-black focus:border-[#FF3F3A] outline-none transition-all duration-300 placeholder:text-[#9A9CA5]">
                <button type="submit" class="min-w-full md:min-w-0 bg-gradient-to-r from-[#FF3F3A] to-[#F75E05] px-10 font-[Lato] font-bold text-[16px] leading-[52px] rounded-[4px] text-white whitespace-nowrap">${translateData[currentLang].subscribe}</button>
            </form>
        </div>
    </div>
`;
// subscribeSection end

// footer
const footer = document.querySelector("#footer");
footer.innerHTML = `
    <div class="bg-[#1E212C] pt-[50px] pb-[40px] lg:pt-[80px] lg:pb-[60px]">
        <div class="w-full max-w-[1340px] mx-auto px-5 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-y-8 gap-x-6">
            <div class="flex flex-col lg:col-span-3 sm:col-span-1 col-span-2 order-1 lg:order-1">
                <a href="./index.html">
                    <img src="Image/HomePagePhoto/footerlogo.svg" alt="footer logo" class="" />
                </a>
                <p class="font-[Lato] font-normal text-[12px] leading-[150%] text-white opacity-60 max-w-full line-clamp-5 mt-[24px] mb-[38px]">${translateData[currentLang].footerDescription}</p>
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
                <h3 class="font-[Lato] font-bold text-[16px] leading-[150%] tracking-[1px] mb-[12px] text-white">${translateData[currentLang].siteMap.toUpperCase()}</h3>
                <div class="flex gap-6 sm:flex-row flex-col lg:flex-col lg:gap-2">
                    <a href="Pages/About/about.html" class="font-[Lato] font-normal text-[16px] leading-[160%] text-[#A5A6AB] hover:text-white transition-all duration-300">${translateData[currentLang].navAbout}</a>
                    <a href="Pages/Courses/courses.html" class="font-[Lato] font-normal text-[16px] leading-[160%] text-[#A5A6AB] hover:text-white transition-all duration-300">${translateData[currentLang].navCourses}</a>
                    <a href="Pages/Events/events.html" class="font-[Lato] font-normal text-[16px] leading-[160%] text-[#A5A6AB] hover:text-white transition-all duration-300">${translateData[currentLang].navEvents}</a>
                    <a href="Pages/Blogs/blogs.html" class="font-[Lato] font-normal text-[16px] leading-[160%] text-[#A5A6AB] hover:text-white transition-all duration-300">${translateData[currentLang].navBlog}</a>
                    <a href="Pages/Contacts/contacts.html" class="font-[Lato] font-normal text-[16px] leading-[160%] text-[#A5A6AB] hover:text-white transition-all duration-300">${translateData[currentLang].navContacts}</a>
                </div>
            </div>
            <div class="lg:col-span-2 sm:col-span-2 order-2 sm:order-5 lg:order-3">
                <h3 class="font-[Lato] font-bold text-[16px] leading-[150%] tracking-[1px] mb-[12px] text-white">${translateData[currentLang].courses.toUpperCase()}</h3>
                <div class="flex gap-6 sm:flex-row flex-col lg:flex-col lg:gap-2">
                    <a href="#!" class="font-[Lato] font-normal text-[16px] leading-[160%] text-[#A5A6AB] hover:text-white transition-all duration-300">${translateData[currentLang].marketing}</a>
                    <a href="#!" class="font-[Lato] font-normal text-[16px] leading-[160%] text-[#A5A6AB] hover:text-white transition-all duration-300">${translateData[currentLang].management}</a>
                    <a href="#!" class="font-[Lato] font-normal text-[16px] leading-[160%] text-[#A5A6AB] hover:text-white transition-all duration-300">${translateData[currentLang].hrRecruting}</a>
                    <a href="#!" class="font-[Lato] font-normal text-[16px] leading-[160%] text-[#A5A6AB] hover:text-white transition-all duration-300">${translateData[currentLang].design}</a>
                    <a href="#!" class="font-[Lato] font-normal text-[16px] leading-[160%] text-[#A5A6AB] hover:text-white transition-all duration-300">${translateData[currentLang].development}</a>
                </div>
            </div>
            <div class="lg:col-span-2 sm:col-span-1 col-span-2 order-3 sm:order-3 lg:order-4">
                <h3 class="font-[Lato] font-bold text-[16px] leading-[150%] tracking-[1px] mb-[12px] text-white">${translateData[currentLang].contactUs.toUpperCase()}</h3>
                <div class="flex flex-col gap-2">
                    <a href="tel:(405) 555-0128" class="font-[Lato] font-normal text-[16px] leading-[160%] text-[#A5A6AB] hover:text-white transition-all duration-300 group flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2m-4 0h4m-4 0v1m4-1v1m0 0a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v0m4 0h-4m2 10.008" />
                        </svg>
                        (405) 555-0128
                    </a>
                    <a href="mailto:hello@createx.com" class="font-[Lato] font-normal text-[16px] leading-[160%] text-[#A5A6AB] hover:text-white transition-all duration-300 group flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="currentColor" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM12 12.116L4 6.885v10.5q0 .269.173.442t.443.173h14.769q.269 0 .442-.173t.173-.443v-10.5zM12 11l7.692-5H4.308zM4 6.885V6v11.385q0 .269.173.442t.443.173H4z" />
                        </svg>
                        hello@createx.com
                    </a>
                </div>
            </div>
            <div class="lg:col-span-3 col-span-2 sm:col-span-1 order-4 sm:order-2 lg:order-5">
                <h3 class="font-[Lato] font-bold text-[16px] leading-[150%] tracking-[1px] mb-[12px] text-white">${translateData[currentLang].signUpNewsLatter.toUpperCase()}</h3>
                <form>
                    <div class="flex items-center justify-end bg-[#393C46] border border-[#FFFFFF33] px-3 py-2.5 rounded-[4px] focus-within:border-[#ff3f3a] focus-within:bg-white transition-all duration-300">
                        <input type="email" placeholder="${translateData[currentLang].signUpNewsLatterPlaceholder}" class="flex-1 pr-3 bg-transparent font-[Lato] font-normal text-[12px] leading-[150%] text-white focus:text-black outline-none placeholder:text-[#A5A6AB]">
                        <img src="Image/HomePagePhoto/footerRight.svg" class="w-4 h-4"/>
                    </div>
                    <p class="mt-[12px] font-[Lato] font-normal text-[10px] leading-[150%] text-white opacity-60 max-w-[290px] line-clamp-2">${translateData.en.signUpSubscribe}</p>
                </form>
            </div>
        </div>
    </div>
    <div class="bg-[#292C37] py-[18px]">
        <div class="w-full max-w-[1340px] mx-auto px-5 flex items-center justify-between">
            <p class="font-[Lato] font-normal text-[12px] leading-[150%] text-white">&copy; ${translateData[currentLang].copyRight}. ${translateData[currentLang].madeWith}</p>
            <div>
                <button id="goToTopBtn" class="font-[Lato] font-bold text-[14px] leading-[150%] text-white">${translateData[currentLang].backtoTop}</button>
            </div>
        </div>
    </div>
`;
const goToTopBtn = document.querySelector("#goToTopBtn");
goToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
// footer end

// >>>>>>> 428266ee9c97b7ca953ea5a86dcb57b7b3cb0cef
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 300) {
        header.classList.add(
            "fixed",
            "top-0",
            "left-0",
            "bg-white",
            "shadow-[0px_8px_8px_0px_rgba(0,0,0,0.1)]",
            "z-10",
        );
        header.classList.remove("absolute", "bg-transparent");
    } else {
        header.classList.remove(
            "fixed",
            "top-0",
            "left-0",
            "bg-white",
            "shadow-[0px_8px_8px_0px_rgba(0,0,0,0.1)]",
            "z-10",
        );
        header.classList.add("absolute", "bg-transparent");
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

    Object.keys(translateData).forEach((langKey) => {
        if (langKey !== currentLang) {
            const targetLang = langKey;

            const langModalOption = document.createElement("button");
            langModalOption.className =
                "w-full flex items-center justify-center gap-1.5 group hover:bg-[#FF3F3A] rounded transition-all duration-300";
            langModalOption.innerHTML = `
                <img
                    src="${translateData[targetLang].flag}"
                    alt="language button icon"
                />
                <span class="text-white text-[12px]">${translateData[targetLang].langTitle}</span>
            `;

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
        <img
            src="${translateData[currentLang].flag}"
            alt="language button icon"
        />
        <span class="downSpan transition-all duration-300">
            <img
                src="./Image/HomePagePhoto/icon-park-solid--down-one.svg"
                alt="down icon"
            />
        </span>
    `;
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
