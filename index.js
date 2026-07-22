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
        class="container mx-auto px-5 md:px-10 lg:px-20 flex justify-between items-center py-5"
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
                    class="font-[Lato] font-bold text-[12px] lg:py-1 md:leading-6 lg:leading-4 tracking-[0.5px] text-white bg-gradient-to-r from-[#FF3F3A] to-[#F75E05] px-5 lg:px-3 rounded-[4px] hidden sm:inline-block hover:bg-gradient-to-l hover:from-[#F75E05] hover:to-[#FF3F3A]"
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
            <button class="block lg:hidden">
                <img
                    src="./Image/HomePagePhoto/stash--burger-classic-light.svg"
                    alt="burger icon"
                />
            </button>
        </div>
    </div>
`;
// header end

// hero Section
const heroSection = document.querySelector("#heroSection");
heroSection.innerHTML = `
    <div class="container mx-auto px-5 md:px-10 lg:px-20">
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
                    class="w-full text-center md:text-start text-[40px] lg:max-w-[500px] font-[Lato] font-black xl:text-[64px] leading-[130%] tracking-[1px] mt-[24px] mb-[60px]"
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
        class="container mx-auto px-5 md:px-10 lg:px-20 my-[180px] flex flex-col gap-[30px] md:flex-row md:justify-between"
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
    <div class="container mx-auto px-5 md:px-10 lg:px-20">
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
    <div class="container mx-auto px-5 md:px-10 lg:px-20">
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
    <div class="container mx-auto px-5 md:px-10 lg:px-20">
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
`;

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
