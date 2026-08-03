import { allCourses } from "../../../AllCourses.js";

window.addEventListener("DOMContentLoaded", () => {
    const currentLang = localStorage.getItem("selectedLang");

    const params = new URLSearchParams(window.location.search);
    const courseId = params.get("id");

    const localeCourse = {
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
                intro: {
                    title: "About the course",
                    willBeLearned: "You will learn:",
                    icon: "../../../Image/course-images/aboutTheCourse/check.png",
                },
                datesPart: {
                    dates: "Dates",
                    duration: "Duration",
                    price: "Price",
                    button: "Join the course",
                },
                tutorInfo: {
                    badge: "Course curator",
                    lessonIcons: [
                        {
                            icon: "../../../Image/course-images/tutor-info/Star.png",
                        },
                        {
                            icon: "../../../Image/course-images/tutor-info/Play.png",
                        },
                        {
                            icon: "../../../Image/course-images/tutor-info/Profile.png",
                        },
                    ],
                },
                mainStepsPart: {
                    intro: {
                        badge: "Main steps",
                        title: "Online learning process",
                    },
                    carousel: [
                        {
                            number: "01",
                            title: "Watching online video lectures",
                            text: "Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.",
                        },
                        {
                            number: "02",
                            title: "Passing test",
                            text: "Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim ad tempor est ea.",
                        },
                        {
                            number: "03",
                            title: "Curator’s feedback",
                            text: "Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore dolore et ad et veniam ad deserunt.",
                        },
                        {
                            number: "04",
                            title: "Corrections if needed",
                            text: "Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.",
                        },
                    ],
                },
            },
            earlyBirds: {
                title: "20% discount for early birds!",

                inputsInfo: {
                    input1: "Full Name",
                    inputPlaceholder1: "Your full name",

                    input2: "Email",
                    inputPlaceholder2: "Your working email",

                    input3: "Phone",
                    inputPlaceholder3: "Your phone number",

                    button: "Join the course",
                },

                dates: [
                    {
                        howMany: 0,
                        period: "Days",
                    },
                    {
                        howMany: 0,
                        period: "Hours",
                    },
                    {
                        howMany: 0,
                        period: "Mins",
                    },
                    {
                        howMany: 0,
                        period: "SecM",
                    },
                ],
            },
            benefits: {
                intro: {
                    badge: "For whom?",
                    title: "Who will benefit from the course:",
                },
            },
            program: {
                intro: {
                    badge: "Course program",
                    title: "What will you learn",
                },
                imagePart: {
                    image: "../../../Image/program/illustration.png",
                },
            },
            testimonials: {
                intro: {
                    badge: "TESTIMONIALS",
                    title: "What our students say",
                },

                comment: [
                    {
                        opinion:
                            "Suleyman's online course is an absolute game-changer! The material is presented in a very clear, structured way, and the practical assignments help you master the concepts quickly. He is an incredibly supportive tutor who always answers questions promptly. I highly recommend this course to everyone",
                        image: "../../../Image/courses-photo/slider-image/image.png",
                        braces: "../../../Image/courses-photo/slider-image/braces.png",
                        name: "Eleanor Pena",
                        completedCourse: "Position, Course",
                    },

                    {
                        opinion:
                            "Suleyman's online course is an absolute game-changer! The material is presented in a very clear, structured way, and the practical assignments help you master the concepts quickly. He is an incredibly supportive tutor who always answers questions promptly. I highly recommend this course to everyone",
                        image: "../../Image/courses-photo/slider-image/image.png",
                        braces: "../../../Image/courses-photo/slider-image/braces.png",
                        name: "Eleanor Pena",
                        completedCourse: "Position, Course",
                    },
                ],
            },
            registration: {
                imagePart: {
                    image: "../../../Image/course-images/registration/illustration.png",
                },
                intro: {
                    description: "Leave a request now and get 20% off!",
                    title: "Register for the course",

                    inputsInfo: [
                        {
                            input: "Full Name",
                            inputPlaceholder: "Your full name",
                        },

                        {
                            input: "Email",
                            inputPlaceholder: "Your working email",
                        },

                        {
                            input: "Phone",
                            inputPlaceholder: "Your phone number",
                        },
                    ],
                    regButton: {
                        button: "Join the course",
                    },
                },
            },
            recommendation: {
                intro: {
                    badge: "Check other courses",
                    title: "You may also like",
                },
                more: {
                    title: "Do you want more?",
                    button: "View all courses",
                },
            },
        },
        ru: {
            hero: {
                info: {
                    badge: "курс",
                    title: "Пользовательский опыт. Принципы человеко-ориентированного дизайна",
                },

                decoration: {
                    dec1: "../../../Image/course-images/hero/arrow-right.png",
                    dec2: "../../../Image/course-images/hero/circles.png",
                    dec3: "../../../Image/course-images/hero/dots.png",
                    dec4: "../../../Image/course-images/hero/up.png",
                },
            },

            aboutTheCourse: {
                intro: {
                    title: "О курсе",
                    willBeLearned: "Вы изучите:",
                    icon: "../../../Image/course-images/aboutTheCourse/check.png",
                },

                datesPart: {
                    dates: "Даты",
                    duration: "Продолжительность",
                    price: "Цена",
                    button: "Присоединиться к курсу",
                },

                tutorInfo: {
                    badge: "Куратор курса",

                    lessonIcons: [
                        {
                            icon: "../../../Image/course-images/tutor-info/Star.png",
                        },
                        {
                            icon: "../../../Image/course-images/tutor-info/Play.png",
                        },
                        {
                            icon: "../../../Image/course-images/tutor-info/Profile.png",
                        },
                    ],
                },

                mainStepsPart: {
                    intro: {
                        badge: "Основные этапы",
                        title: "Процесс онлайн-обучения",
                    },

                    carousel: [
                        {
                            number: "01",
                            title: "Просмотр онлайн-видеолекций",
                            text: "Изучайте материалы курса через структурированные видеоуроки и практические задания.",
                        },
                        {
                            number: "02",
                            title: "Прохождение теста",
                            text: "Проверяйте свои знания и закрепляйте полученные навыки с помощью тестирования.",
                        },
                        {
                            number: "03",
                            title: "Обратная связь от куратора",
                            text: "Получайте рекомендации и поддержку от опытного преподавателя.",
                        },
                        {
                            number: "04",
                            title: "Исправления при необходимости",
                            text: "Работайте над ошибками и улучшайте свои результаты.",
                        },
                    ],
                },
            },

            earlyBirds: {
                title: "Скидка 20% для ранних участников!",

                inputsInfo: {
                    input1: "Полное имя",
                    inputPlaceholder1: "Ваше полное имя",

                    input2: "Email",
                    inputPlaceholder2: "Ваш рабочий email",

                    input3: "Телефон",
                    inputPlaceholder3: "Ваш номер телефона",

                    button: "Присоединиться к курсу",
                },

                dates: [
                    {
                        howMany: 0,
                        period: "Дней",
                    },
                    {
                        howMany: 0,
                        period: "Часов",
                    },
                    {
                        howMany: 0,
                        period: "Минут",
                    },
                    {
                        howMany: 0,
                        period: "Секунд",
                    },
                ],
            },

            benefits: {
                intro: {
                    badge: "Для кого?",
                    title: "Кому подойдет этот курс:",
                },
            },

            program: {
                intro: {
                    badge: "Программа курса",
                    title: "Чему вы научитесь",
                },

                imagePart: {
                    image: "../../../Image/program/illustration.png",
                },
            },

            testimonials: {
                intro: {
                    badge: "ОТЗЫВЫ",
                    title: "Что говорят наши студенты",
                },

                comment: [
                    {
                        opinion:
                            "Онлайн-курс Сулеймана полностью изменил мой подход к обучению! Материал представлен очень понятно и структурировано, а практические задания помогают быстро освоить новые знания. Он всегда поддерживает студентов и быстро отвечает на вопросы. Я рекомендую этот курс всем.",

                        image: "../../../Image/courses-photo/slider-image/image.png",

                        braces: "../../../Image/courses-photo/slider-image/braces.png",

                        name: "Eleanor Pena",

                        completedCourse: "Должность, Курс",
                    },

                    {
                        opinion:
                            "Онлайн-курс Сулеймана полностью изменил мой подход к обучению! Материал представлен очень понятно и структурировано, а практические задания помогают быстро освоить новые знания. Он всегда поддерживает студентов и быстро отвечает на вопросы. Я рекомендую этот курс всем.",

                        image: "../../Image/courses-photo/slider-image/image.png",

                        braces: "../../../Image/courses-photo/slider-image/braces.png",

                        name: "Eleanor Pena",

                        completedCourse: "Должность, Курс",
                    },
                ],
            },

            registration: {
                imagePart: {
                    image: "../../../Image/course-images/registration/illustration.png",
                },

                intro: {
                    description:
                        "Оставьте заявку сейчас и получите скидку 20%!",
                    title: "Регистрация на курс",

                    inputsInfo: [
                        {
                            input: "Полное имя",
                            inputPlaceholder: "Ваше полное имя",
                        },
                        {
                            input: "Email",
                            inputPlaceholder: "Ваш рабочий email",
                        },
                        {
                            input: "Телефон",
                            inputPlaceholder: "Ваш номер телефона",
                        },
                    ],

                    regButton: {
                        button: "Присоединиться к курсу",
                    },
                },
            },

            recommendation: {
                intro: {
                    badge: "Посмотрите другие курсы",
                    title: "Вам также может понравиться",
                },

                more: {
                    title: "Хотите больше?",
                    button: "Посмотреть все курсы",
                },
            },
        },
     uz: {
    hero: {
        info: {
            badge: "kurs",
            title: "Foydalanuvchi tajribasi. Inson markazli dizayn tamoyillari",
        },

        decoration: {
            dec1: "../../../Image/course-images/hero/arrow-right.png",
            dec2: "../../../Image/course-images/hero/circles.png",
            dec3: "../../../Image/course-images/hero/dots.png",
            dec4: "../../../Image/course-images/hero/up.png",
        },
    },

    aboutTheCourse: {
        intro: {
            title: "Kurs haqida",
            willBeLearned: "Siz o'rganasiz:",
            icon: "../../../Image/course-images/aboutTheCourse/check.png",
        },

        datesPart: {
            dates: "Sanalar",
            duration: "Davomiyligi",
            price: "Narxi",
            button: "Kursga qo'shilish",
        },

        tutorInfo: {
            badge: "Kurs kuratori",

            lessonIcons: [
                {
                    icon: "../../../Image/course-images/tutor-info/Star.png",
                },
                {
                    icon: "../../../Image/course-images/tutor-info/Play.png",
                },
                {
                    icon: "../../../Image/course-images/tutor-info/Profile.png",
                },
            ],
        },

        mainStepsPart: {
            intro: {
                badge: "Asosiy bosqichlar",
                title: "Onlayn ta'lim jarayoni",
            },

            carousel: [
                {
                    number: "01",
                    title: "Onlayn video darslarni ko'rish",
                    text: "Kurs materiallarini tushunarli video darslar va amaliy topshiriqlar orqali o'rganing.",
                },

                {
                    number: "02",
                    title: "Test topshirish",
                    text: "Bilimlaringizni tekshiring va o'rgangan bilimlaringizni testlar orqali mustahkamlang.",
                },

                {
                    number: "03",
                    title: "Kurator fikri",
                    text: "Tajribali ustozdan tavsiyalar va yordam oling.",
                },

                {
                    number: "04",
                    title: "Kerak bo'lsa tuzatishlar",
                    text: "Xatolar ustida ishlang va natijalaringizni yaxshilang.",
                },
            ],
        },
    },

    earlyBirds: {
        title: "Dastlabki qatnashuvchilar uchun 20% chegirma!",

        inputsInfo: {
            input1: "To'liq ism",
            inputPlaceholder1: "To'liq ismingiz",

            input2: "Email",
            inputPlaceholder2: "Ishchi emailingiz",

            input3: "Telefon",
            inputPlaceholder3: "Telefon raqamingiz",

            button: "Kursga qo'shilish",
        },

        dates: [
            {
                howMany: 0,
                period: "Kun",
            },
            {
                howMany: 0,
                period: "Soat",
            },
            {
                howMany: 0,
                period: "Daqiqa",
            },
            {
                howMany: 0,
                period: "Soniya",
            },
        ],
    },

    benefits: {
        intro: {
            badge: "Kimlar uchun?",
            title: "Kurs kimlarga foydali:",
        },
    },

    program: {
        intro: {
            badge: "Kurs dasturi",
            title: "Siz nimalarni o'rganasiz",
        },

        imagePart: {
            image: "../../../Image/program/illustration.png",
        },
    },

    testimonials: {
        intro: {
            badge: "FIKRLAR",
            title: "Talabalarimiz nima deydi",
        },

        comment: [
            {
                opinion:
                    "Suleymanning onlayn kursi haqiqiy o'zgarish olib keladi! Materiallar juda tushunarli va tartibli tarzda berilgan, amaliy topshiriqlar esa bilimlarni tez o'zlashtirishga yordam beradi. U doimo talabalarni qo'llab-quvvatlaydi va savollarga tez javob beradi. Ushbu kursni hammaga tavsiya qilaman.",

                image: "../../../Image/courses-photo/slider-image/image.png",

                braces: "../../../Image/courses-photo/slider-image/braces.png",

                name: "Eleanor Pena",

                completedCourse: "Lavozim, Kurs",
            },

            {
                opinion:
                    "Suleymanning onlayn kursi haqiqiy o'zgarish olib keladi! Materiallar juda tushunarli va tartibli tarzda berilgan, amaliy topshiriqlar esa bilimlarni tez o'zlashtirishga yordam beradi. U doimo talabalarni qo'llab-quvvatlaydi va savollarga tez javob beradi. Ushbu kursni hammaga tavsiya qilaman.",

                image: "../../Image/courses-photo/slider-image/image.png",

                braces: "../../../Image/courses-photo/slider-image/braces.png",

                name: "Eleanor Pena",

                completedCourse: "Lavozim, Kurs",
            },
        ],
    },

    registration: {
        imagePart: {
            image: "../../../Image/course-images/registration/illustration.png",
        },

        intro: {
            description:
                "Hozir ariza qoldiring va 20% chegirmaga ega bo'ling!",

            title: "Kursga ro'yxatdan o'tish",

            inputsInfo: [
                {
                    input: "To'liq ism",
                    inputPlaceholder: "To'liq ismingiz",
                },

                {
                    input: "Email",
                    inputPlaceholder: "Ishchi emailingiz",
                },

                {
                    input: "Telefon",
                    inputPlaceholder: "Telefon raqamingiz",
                },
            ],

            regButton: {
                button: "Kursga qo'shilish",
            },
        },
    },

    recommendation: {
        intro: {
            badge: "Boshqa kurslarni ko'ring",
            title: "Sizga ham yoqishi mumkin",
        },

        more: {
            title: "Ko'proq xohlaysizmi?",
            button: "Barcha kurslarni ko'rish",
        },
    },
},
    };


    const translateData = {
        en: {
            langTitle: "EN",
            flag: "../../../Image/HomePagePhoto/twemoji--flag-united-states.svg",
            navAbout: "About Us",
            navCourses: "Courses",
            navEvents: "Events",
            navBlog: "Blog",
            navContacts: "Contacts",
            getConsultation: "Get consultation",
            loginRegister: "Log in / Register",
        },
        ru: {
            langTitle: "RU",
            flag: "../../../Image/HomePagePhoto/twemoji--flag-russia.svg",
            navAbout: "О нас",
            navCourses: "Курсы",
            navEvents: "Мероприятия",
            navBlog: "Блог",
            navContacts: "Контакты",
            getConsultation: "Получить консультацию",
            loginRegister: "Войти / Зарегистрироваться",
        },
        uz: {
            langTitle: "UZ",
            flag: "../../../Image/HomePagePhoto/twemoji--flag-uzbekistan.svg",
            navAbout: "Biz haqimizda",
            navCourses: "Kurslar",
            navEvents: "Tadbirlar",
            navBlog: "Blog",
            navContacts: "Kontaktlar",
            getConsultation: "Konsultatsiya olish",
            loginRegister: "Kirish / Ro'yxatdan o'tish",
        },
    };

    function headerEngine() {
        const headerMain = document.querySelector("#headerMain");
        headerMain.innerHTML = `
    <div
        class="container mx-auto px-5 md:px-10 lg:px-20 flex justify-between items-center py-5"
    >
        <div class="flex items-center gap-7 md:gap-10">
            <div class="">
                <a href="../../../index.html">
                    <img
                        src="../../../Image/HomePagePhoto/logo.svg"
                        alt="logo image"
                    />
                </a>
            </div>
            <nav class="hidden lg:flex items-center gap-4 xl:gap-8">
                <a
                    href="../../../Pages/About/about.html"
                    class="font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateData[currentLang].navAbout}</a>
                <a
                    href="../../../Pages/Courses/courses.html"
                    class="font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateData[currentLang].navCourses}</a>
                <a
                    href="../../../Pages/Events/events.html"
                    class="font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateData[currentLang].navEvents}</a>
                <a
                    href="../../../Pages/Blogs/blogs.html"
                    class="font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateData[currentLang].navBlog}</a>
                <a
                    href="../../../Pages/Contacts/contacts.html"
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
                        src="../../../Image/HomePagePhoto/Profile.svg"
                        alt="profile icon"
                        class="hidden xl:block"
                    />
                    ${translateData[currentLang].loginRegister}
                </a>
            </div>
            <div class="hidden min-[300px]:block relative">
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
                    src="../../../Image/HomePagePhoto/stash--burger-classic-light.svg"
                    alt="burger icon"
                />
            </button>
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
                src="../../../Image/HomePagePhoto/icon-park-solid--down-one.svg"
                alt="down icon"
            />
        </span>
    `;
        }

        langBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            console.log("til tugmasi bosildi");
            const downSpan = document.querySelector(".downSpan");
            if (langModal.classList.contains("hidden")) {
                langModal.classList.remove("hidden");
                langModal.classList.add("flex");
            } else {
                langModal.classList.remove("flex");
                langModal.classList.add("hidden");
            }
            downSpan.classList.toggle("rotate-180");
        });
        document.addEventListener("click", () => {
            langModal.classList.add("hidden");
            langModal.classList.remove("flex");
            const downSpan = document.querySelector(".downSpan");
            if (downSpan) downSpan.classList.remove("rotate-180");
        });
        updateLangModal();
    }
    headerEngine();
    // header end

    // *************** Hero section ***************
    const heroContainer = document.getElementById("hero-container");

    function updateHero() {
        const heroData = localeCourse[currentLang].hero.info;
        const heroDecorationData = localeCourse[currentLang].hero.decoration;

        const badge = document.getElementById("hero-badge");
        const title = document.getElementById("hero-title");
        badge.className =
            "text-center text-[#FF3F3A] font-bold uppercase leading-[150%] tracking-[1px] mb-3 pt-[120px]";
        title.className =
            "font-black text-[#1E212C] text-3xl md:text-4xl xl:text-5xl text-center xl:leading-[130%] pb-[120px]";

        badge.innerHTML = heroData.badge;
        title.innerHTML = heroData.title;

        heroContainer.appendChild(badge);
        heroContainer.appendChild(title);
    }
    updateHero();
    // *************** Hero section ***************

    // *************** About the course section ***************
    const aboutTheCourse = document.getElementById("aboutTheCourse");

    function updateAboutTheCourseTop() {
        const aboutTheCourseData = localeCourse[currentLang].aboutTheCourse;

        const selectedCourse = allCourses.find((course) => {
            return course.id === Number(courseId);
        });

        const aboutTheCourseTop = document.createElement("div");
        aboutTheCourseTop.className =
            "flex flex-col md:flex-row md:justify-between";
        let html = "";

        html += `
        <div class="flex flex-col md:px-[15px]">
        <h1 class='font-black text-3xl lg:text-4xl xl:text-5xl xl:leading-[57.5px] pb-4 mb-6'>${aboutTheCourseData.intro.title}</h1>
        <p class='text-[rgb(66,69,81)] md:max-w-[335px] lg:max-w-[470px] xl:max-w-[600px] mb-12'>${selectedCourse[currentLang].courseDescription}</p>

        <div class='sm:mb-[30px]'> 
        <h3 class='text-[28px] font-bold mb-6'>${aboutTheCourseData.intro.willBeLearned}</h3>

        <div> 
            
            ${Object.values(selectedCourse[currentLang].willBeLearn)
                .map((each) => {
                    return `
              <div class='flex items-center gap-2'>
                      <div>
                            <img src="${aboutTheCourseData.intro.icon}" alt="ckeck icon"/> 
                      </div>
                       <p class='w-full mb-2 text-[rgb(66,69,81)]'>${each}</p>
                      </div>
              `;
                })
                .join(" ")}
           
        </div>

        </div>
        </div>
          

        <div id="dates-container" class="border-2 border-black dates-container flex flex-col h-fit md:mx-[15px] p-6 shadow-2xl  md:max-w-[335px] lg:max-w-[350px] xl:max-w-[505px]">
           <div class='px-2 pt-4 mb-4'>
           <h6 class='font-bold tracking-[1px] uppercase'>${aboutTheCourseData.datesPart.dates}</h6>
           <p class='text-2xl text-[rgb(255,63,58)] font-bold mb-2'>${selectedCourse[currentLang].coursesStartedDate} - ${selectedCourse[currentLang].coursesEndedDate}</p>
           <p class='text-[rgb(66,69,81)]'>${selectedCourse[currentLang].coursesDescription}</p>
           </div>

            <div class='px-2 pt-4 mb-4'>
           <h6 class='font-bold tracking-[1px] uppercase'>${aboutTheCourseData.datesPart.duration}</h6>
           <p class='text-2xl text-[rgb(255,63,58)] font-bold mb-2'>${selectedCourse[currentLang].coursesDurationMonth} - ${selectedCourse[currentLang].coursesDurationLesson}</p>
           <p class='text-[rgb(66,69,81)]'>${selectedCourse[currentLang].coursesDurationDescription}</p>
           </div>

             <div class='px-2 pt-4 mb-4'>
           <h6 class='font-bold tracking-[1px] uppercase'>${aboutTheCourseData.datesPart.price}</h6>
           <p class='text-2xl text-[rgb(255,63,58)] font-bold mb-2'>${selectedCourse.coursePrice} ${selectedCourse[currentLang].coursesPerMonth}</p>
           <p class='text-[rgb(66,69,81)]'>${selectedCourse[currentLang].coursesPerMonthDescription}</p>
           </div>
           
            <div class='text-center px-2 pt-6 mb-4'>
            <button class='w-full px-8 py-2.5 bg-gradient-to-r from-[#FF3F3A] hover:shadow-xl to-[#F75E05] text-white rounded shadow-lg shadow-[#FF3F3A]/40 transition-all duration-300 hover:shadow-[#FF3F3A]/50'>${aboutTheCourseData.datesPart.button}</button>
            </div>
        </div>
      `;
        aboutTheCourseTop.innerHTML = html;

        aboutTheCourse.appendChild(aboutTheCourseTop);
    }
    updateAboutTheCourseTop();
    // *************** About the course section ***************

    // *************** Tutor section ***************
    const tutorSection = document.getElementById("tutor-container");
    function updateAboutTheCourseTutor() {
        const selectedCourse = allCourses.find((course) => {
            return course.id === Number(courseId);
        });

        const aboutTheCourseData = localeCourse[currentLang].aboutTheCourse;

        // Tutor part is here starts ↓
        const aboutTheCourseTutor = document.createElement("div");
        aboutTheCourseTutor.className =
            "aboutTheCourse-tutor flex flex-col-reverse sm:flex-row mt-[96px] pb-[48px] ";

        const tutorImageContainer = document.createElement("div");
        tutorImageContainer.className =
            "max-w-full max-h-full mt-10 sm:max-w-[200px] sm:max-h-[230px] md:max-w-[243px] md:max-h-[295px] lg:max-w-[343px] lg:max-h-[426px] xl:max-w-[463px] xl:max-h-[606px] flex-shrink-0 overflow-hidden";
        const tutorImage = document.createElement("img");
        tutorImage.className = "w-full h-full object-cover";
        tutorImage.src = selectedCourse.curatorTitleImg;
        tutorImage.alt = "Course Tutor image";

        tutorImageContainer.appendChild(tutorImage);
        aboutTheCourseTutor.appendChild(tutorImageContainer);
        tutorSection.appendChild(aboutTheCourseTutor);

        const tutorCourseInfo = document.createElement("div");
        tutorCourseInfo.className =
            "md:w-full lg:ml-[105px] px-4 max-w-[600px]";
        const tutorInfoBadge = document.createElement("h6");
        tutorInfoBadge.textContent = aboutTheCourseData.tutorInfo.badge;
        tutorInfoBadge.className =
            "mb-2 text-[rgb(30,33,44)] uppercase font-bold";

        const tutorName = document.createElement("h1");
        tutorName.className =
            "mb-4 text-3xl lg:text-4xl xl:text-5xl font-bold ";
        tutorName.textContent = selectedCourse.curator.curatorName;

        const tutorProfession = document.createElement("p");
        tutorProfession.className = "pb-2 mb-6 text-xl ";
        tutorProfession.textContent = selectedCourse.curator[currentLang].jobs;

        const courseInfoRateCoursesStudentsContainer =
            document.createElement("div");
        courseInfoRateCoursesStudentsContainer.className =
            "pb-2 mb-4 md:pb-4 md:mb-4";

        let tutorLessonInfoHtml = "";

        selectedCourse.curator.courseLessonInfo.forEach((info) => {
            tutorLessonInfoHtml += `
                <div class='flex flex-col'>
                  <div class='flex items-center gap-2 pb-[0.25rem]'>
                      <div><img src='${info.lessonIcon}'/></div>
                      <div>
                      <p class='font-bold text-[rgb(66,69,81)]'>${info.lessonInfo}</p>
                      </div>
                  </div>
                   
                </div>
      `;
        });

        const aboutCourse = document.createElement("p");
        aboutCourse.className =
            "text-[rgb(66,69,81)] pb-4 mb-6 w-full sm:max-w-[330px] md:max-w-full  lg:max-w-[476px]";
        aboutCourse.textContent =
            selectedCourse.curator[currentLang].aboutCurator;

        const socialMediaHTML = `
        <div class='flex items-center gap-4'>
              ${selectedCourse.curator.socialLinks
                  .map(
                      (media) => `
                <a
                  href="${media.link}"
                  target="_blank"
                  class='text-gray-400 transition-colors duration-200 ${media.hoverColor}'>
                  ${media.svg}</a>
                `,
                  )
                  .join(" ")}
        </div>
      `;

        tutorCourseInfo.appendChild(tutorInfoBadge);
        tutorCourseInfo.appendChild(tutorName);
        tutorCourseInfo.appendChild(tutorProfession);
        courseInfoRateCoursesStudentsContainer.insertAdjacentHTML(
            "beforeend",
            tutorLessonInfoHtml,
        );
        tutorCourseInfo.appendChild(courseInfoRateCoursesStudentsContainer);
        tutorCourseInfo.appendChild(aboutCourse);
        tutorCourseInfo.insertAdjacentHTML("beforeend", socialMediaHTML);

        aboutTheCourseTutor.appendChild(tutorCourseInfo);
    }
    updateAboutTheCourseTutor();
    // *************** Tutor section ***************

    // About THE COURSE Main Steps
    function updateMainSteps() {
        const aboutTheCourseData =
            localeCourse[currentLang].aboutTheCourse.mainStepsPart;

        const courseWithId0 = allCourses.find((c) => c.id === 0);

        const mainStepsContainer = document.createElement("div");

        mainStepsContainer.className = "mainSteps-container pt-[96px]";

        const mainStepsHTML = `
          <h6 class='font-700 uppercase mb-2 text-center'>${aboutTheCourseData.intro.badge}</h6>
          <h2 class='text-3xl pb-4 mb-6 font-black text-center md:text-[2.875em]'>${aboutTheCourseData.intro.title}</h2>

        <div class='slider-container flex items-start viewport max-[992px]:max-w-[1255px] overflow-hidden'>

         <div class="track flex gap-4 transition-transform duration-500 ease-out"> 


            ${aboutTheCourseData.carousel
                .map(
                    (eachCarousel) => `
                <div class='slide-card flex-none w-1/4 pt-2  max-[640px]:w-full sm:w-1/2  md:w-1/3 desktop992:w-1/4' id="slide-${eachCarousel.number}">
                  <div class='flex items-center mb-4'>
                    <div class='flex items-center justify-center w-[84px] h-[84px] hover:bg-red-200 rounded-full transtion-bg duration-500 hover:ring-[12px] hover:ring-[#fff4f3]'>
                    <span class=' text-[2.875rem] font-black text-[#ffdedc] hover:text-[rgb(212,104,101)] transtion duration-300'>${eachCarousel.number}</span> 
                    </div>

                      <span class="relative step-line w-full h-[.0625rem] bg-[linear-gradient(90deg,_#dadbdd,_#dadbdd_67%,_transparent_75%,_transparent_100%)] bg-[length:.625rem_.0625rem] flex-1"></span>  

                  </div>
                  
                  <div class='flex flex-col'>
                    <h3 class='text-xl font-bold text-[rgb(30,33,44)] mb-2 xl:whitespace-nowrap'>${eachCarousel.title}</h3>    
                    <p class='text-[#787a80] '>${eachCarousel.text}</p>    
                  </div>  
            </div>  
                `,
                )
                .join(" ")} 
                </div> 
        </div>
      `;

        aboutTheCourse.appendChild(mainStepsContainer);
        mainStepsContainer.innerHTML = mainStepsHTML;
        const sliderContainer =
            mainStepsContainer.querySelector(".slider-container");

        const track = mainStepsContainer.querySelector(".track");

        const nodeListCards =
            mainStepsContainer.querySelectorAll(".slide-card");

        function sliderEngine() {
            let currentSlide = 0;

            let length = nodeListCards.length;

            function getVisibleCards() {
                const width = window.innerWidth;

                if (width < 640) {
                    return 1;
                } else if (width < 768) {
                    return 2;
                } else if (width < 992) {
                    return 3;
                } else {
                    return 4;
                }
            }

            const visibleCards = getVisibleCards();
            const totalSlides = length - visibleCards;

            function updatePosition() {
                const cardsWidth =
                    nodeListCards[0].getBoundingClientRect().width;
                const gap = 16;
                const stepSize = cardsWidth + gap;
                track.style.transform = `translateX(-${stepSize * currentSlide}px)`;
            }

            function createIndicators() {
                const oldIndicators =
                    mainStepsContainer.querySelector(".indicators");
                if (oldIndicators) oldIndicators.remove();

                const visibleCards = getVisibleCards();
                const maxPositions = length - visibleCards + 1;

                if (maxPositions <= 1) return;

                const indicatorsContainer = document.createElement("div");
                indicatorsContainer.className =
                    "indicators flex justify-center gap-2 mt-12";

                // Create an array to keep track of indicator elements
                const indicatorButtons = [];

                // Helper function to handle active/inactive styles
                function updateIndicatorStyles() {
                    indicatorButtons.forEach((btn, index) => {
                        if (index === currentSlide) {
                            btn.classList.add("bg-gray-800");
                            btn.classList.remove("bg-gray-300");
                        } else {
                            btn.classList.add("bg-gray-300");
                            btn.classList.remove("bg-gray-800");
                        }
                    });
                }

                for (let i = 0; i < maxPositions; i++) {
                    const indicator = document.createElement("button");
                    indicator.className =
                        "w-12 h-1 rounded cursor-pointer transition-colors duration-300";

                    // Remove the duplicate append statement from your original code
                    indicatorsContainer.append(indicator);
                    indicatorButtons.push(indicator);

                    indicator.addEventListener("click", () => {
                        currentSlide = i;
                        updatePosition();
                        updateIndicatorStyles(); // Updates the visual active state on click
                    });
                }

                // Set initial active state colors
                updateIndicatorStyles();

                sliderContainer.after(indicatorsContainer);
                return indicatorsContainer;
            }

            createIndicators();
            updatePosition();

            window.addEventListener("resize", () => {
                const visibleCards = getVisibleCards();
                // Safety check: ensure current slide index doesn't overshoot new boundaries
                if (currentSlide > length - visibleCards) {
                    currentSlide = Math.max(0, length - visibleCards);
                }
                createIndicators();
                updatePosition();
            });
        }

        sliderEngine();
    }
    updateMainSteps();
    // *************** About the course section ***************

    // *************** EARLY BIRDS section ***************
    const earlyBirds = document.getElementById("early-birds");

    function updateEarlyBirds() {
        const earlyBirdsData = localeCourse[currentLang].earlyBirds;

        const earlyBirdsContent = document.createElement("div");
        earlyBirdsContent.className = "";
        earlyBirds.appendChild(earlyBirdsContent);

        let earlyBirdsContentHTML = "";
        earlyBirdsContentHTML += `
        <div class='discount__text__inputs__container desktop992:px-12 py-2'> 
        <div class=' BIGG'>

        <div class='flex flex-col items-center md:flex-row md:justify-between'> 
            <div>
                <h2 class='mb-6 lg:whitespace-nowrap text-3xl font-black text-[rgb(30,33,44)] leading-[41.6px] '>${earlyBirdsData.title}</h2>
            </div>

                <div class='flex gap-4'>
                ${earlyBirdsData.dates
                    .map(
                        (date) => `
                    <div>
                        <div class='flex flex-col'>
                            <span>${date.howMany}</span>
                            <span>${date.period}</span>
                        </div>
                    
                    </div>
                    `,
                    )
                    .join(" ")}
                </div>

            </div>

        </div>



      
            <form class='grid max-[576px]:grid-cols-1 grid-cols-2 desktop992:grid-cols-4 items-center mt-10'> 
            <div class='min-[576px]:px-[15px]'>
                    <div class='flex flex-col mb-6 pt-6 relative z-0'> 
                        <label for='user-name' class='absolute top-0 left-0 mb-2'>${earlyBirdsData.inputsInfo.input1}</label>
                        <input
                        class='w-full outline-none px-4 py-2.5 text-[0.875rem] border-gray-300 border-[1px] rounded text-[#424551] transition-all duration-300  focus:border-red-400/80'
                        type="text" id='user-name' name='name' placeholder="${earlyBirdsData.inputsInfo.inputPlaceholder1}">
                    </div>
            </div>

            <div class='min-[576px]:px-[15px]'>
                    <div class='flex flex-col mb-6 pt-6 relative z-0'> 
                        <label for='user-email' class='absolute top-0 left-0 mb-2'>${earlyBirdsData.inputsInfo.input2}</label>
                        <input
                        class='w-full outline-none px-4 py-2.5 text-[0.875rem] border-gray-300 border-[1px] rounded text-[#424551] transition-all duration-300  focus:border-red-400/80'
                        type="email" id='user-email' name='email' placeholder="${earlyBirdsData.inputsInfo.inputPlaceholder2}">
                    </div>
            </div>

            <div class='min-[576px]:px-[15px]'>
                    <div class='flex flex-col mb-6 pt-6 relative z-0'> 
                        <label for='user-phone' class='absolute top-0 left-0 mb-2'>${earlyBirdsData.inputsInfo.input3}</label>
                        <input
                        class='w-full outline-none px-4 py-2.5 text-[0.875rem] border-gray-300 border-[1px] rounded text-[#424551] transition-all duration-300  focus:border-red-400/80'
                        type="tel" id='user-phone' name='phone' placeholder="${earlyBirdsData.inputsInfo.inputPlaceholder3}">
                    </div>
            </div>
               
                      <div class='min-[576px]:px-[15px]'>
                    <div class='flex flex-col mb-6 pt-6 relative z-0'> 
                    <button type='submit' class='w-full text-sm rounded py-2.5 bg-gradient-to-l from-[#F75E05] to-[#FF3F3A] text-white'>${earlyBirdsData.inputsInfo.button}</button>
                    </div>
            </div>

        `;

        earlyBirdsContent.innerHTML = earlyBirdsContentHTML;
    }
    updateEarlyBirds();

    // *************** Benefits section ***************
    const BENEFITS = document.getElementById("BENEFITS");

    function updateBenefits() {
        const selectedCourse = allCourses.find((course) => {
            return course.id === Number(courseId);
        });

        const aboutTheCourseData =
            localeCourse[currentLang].aboutTheCourse.intro.icon;

        const benefitData = localeCourse[currentLang].benefits;

        const benefitsContainer = document.createElement("div");
        benefitsContainer.className =
            "container mx-auto px-5 md:px-10 lg:px-20 mt-[96px]";
        BENEFITS.appendChild(benefitsContainer);

        const benefitsContent = document.createElement("div");
        benefitsContent.className =
            "benefit-content flex flex-col md:flex-row md:items-start";
        benefitsContainer.appendChild(benefitsContent);

        let benefitHTML = ``;

        benefitHTML += `
            <div class='px-[15px]'>
                <h6 class='font-bold uppercase text-[rgb(30,33,44)] mb-2'>${benefitData.intro.badge}</h6>
                <h1 class='text-[rgb(30,33,44)] font-black text-3xl lg:text-5xl mb-4'>${benefitData.intro.title}</h1>
           
            </div>
            <div class='each-benefits-container md:ml-[65px] lg:80px xl:ml-[105px] px-[15px]'>
                ${Object.values(selectedCourse[currentLang].forWhom)
                    .map(
                        (info) => `
                        <div class='flex items-start'>
                            <div class="w-4 h-4 mr-4 mt-2">
                                <img class='w-full h-full object-cover' src="${aboutTheCourseData}"/>
                            </div>

                            <div class='flex-1 mb-2'>
                                <p class='pb-1'>${info}</p>
                            </div>
                        </div>

                    `,
                    )
                    .join(" ")}
            </div>
        
        `;

        benefitsContent.innerHTML = benefitHTML;
    }
    updateBenefits();
    // *************** Benefits section ***************

    // *************** Program section ***************
    const PROGRAM = document.getElementById("PROGRAM");
    function updateProgram() {
        const programData = localeCourse[currentLang].program;
        const courseWithId0 = allCourses.find((c) => c.id === 0);

        const programContainer = document.createElement("div");
        programContainer.className =
            "container mx-auto px-5 md:px-10 lg:px-20 mt-[96px]";
        PROGRAM.appendChild(programContainer);

        const programContent = document.createElement("div");
        programContent.className = "flex flex-col items-center md:flex-row";
        programContainer.appendChild(programContent);

        let programHTML = "";
        programHTML += `
            
                <div class='px-4 w-full'>
                    <h6 class='uppercase font-bold text-[rgb(30,33,44)] mb-2'>${programData.intro.badge}</h6>
                    <h2 class='text-3xl pb-0 md:text-4xl lg:text-5xl font-black md:pb-4 mb-6'>${programData.intro.title}</h2>


                    

                    <div class='flex flex-col gap-3 md:max-w-[450px] xl:max-w-full'> 
                        ${Object.values(courseWithId0[currentLang].courseLesson)
                            .map(
                                (less) => `
                            <div class='program-button flex items-center gap-2 xl:gap-3 text-[rgb(255,63,58)]'>
                                   
                                    <button class='minusBtn max-[580px]:self-start relative w-[18px] h-[18px] flex-shrink-0 '>
                                        <span class="absolute top-1/2 left-0 -translate-y-1/2 w-[18px] h-[2px] bg-[rgb(255,63,58)]"></span>

                                        <span class="vertical absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[18px] bg-[rgb(255,63,58)]"></ span>

                                    </button>
                                    

                                    <p class='w-full text-xl text-[rgb(255,63,58)]'>${less.lesson} <span class='button-line-text text-black ml-2 font-bold'>${less.title}</span></p>
                            
                            </div>

                            <div class='program-description overflow-hidden max-h-0 md:pl-[21px] md:text-start lg:max-w-[414px] xl:max-w-[560px] pl-[42px] mb-5 transition-all duration-500 ease-in-out'>
                                    <p>${less.description}</p>
                            </div>

                        `,
                            )
                            .join(" ")}
                    </div>



                </div>


                <div class='md:ml-[0px] md:max-w-[440px] md:max-h-[493px] lg:ml-[80px] xl:ml-[105px] lg:max-w-[375px] lg:max-h-[420px] max-w-[495px] max-h-[554px]'>
                    <img class='w-full h-full object-cover' src="${programData.imagePart.image}"/>
                </div>

        `;
        programContent.innerHTML = programHTML;

        function lessonFunction() {
           
            const minusBtns = document.querySelectorAll(".minusBtn");

            minusBtns.forEach((minus) => {
                const parent = minus.parentElement;
                const description = parent.nextElementSibling;
                const verticalBtn = minus.lastElementChild;

                minus.addEventListener("click", () => {
                    const wasOpen = description.classList.contains("max-h-96");

                    // here i am closing ALL BUTTONS BEFORE OPENING A BUTTON WITH FOR EACH inside button event
                    minusBtns.forEach((btn) => {
                        const parent = btn.parentElement;
                        const description = parent.nextElementSibling;
                        const verticalBtn = btn.lastElementChild;

                        description.classList.remove("max-h-96");
                        description.classList.add("max-h-0");
                        verticalBtn.classList.remove("hidden");
                    });

                    if (!wasOpen) {
                        description.classList.remove("max-h-0");
                        description.classList.add("max-h-96");
                        verticalBtn.classList.add("hidden");
                    }
                });
            });
             console.log(minusBtns)
        }
        lessonFunction();
    }
    updateProgram();
    // *************** Program section ***************

    // *************** Testimonials Section ***************
    function testimonialHeader() {
        const intro = localeCourse[currentLang].testimonials.intro;

        const badge = document.getElementById("testimonials-badge");
        const description = document.getElementById("testimonials-description");

        badge.innerHTML = intro.badge;
        description.innerHTML = intro.title;
    }

    testimonialHeader();

    function createSliderCards() {
        const sliderContainer = document.getElementById("slider-container");

        const commentData = localeCourse[currentLang].testimonials.comment;

        let html = "";
        commentData.forEach((com) => {
            html += `
            <div
                                    class="relative p-6 flex flex-col items-start h-auto sm:items-center lg:items-start testimonial-itself w-full shrink-0 bg-white sm:p-6 my-6 md:p-10 rounded"
                                >
                                    <div class="absolute left-[20px] md:left-6 lg:left-5 xl:left-10">
                                        <img
                                            src="${com.braces}"
                                            alt="justIcon"
                                        />
                                    </div>

                                    

                                    <p
                                        class="pl-10 text-sm sm:text-base sm:pl-10 sm:max-w-full md:text-lg md:max-w-full  lg:text-xl lg:max-w-[900px] w-full lg:pl-10 xl:pl-14"
                                        id="testimonials-opinion"
                                    >
                                        ${com.opinion}
                                    </p>

                                    <div class="ml-[40px] sm:ml-0 lg:ml-10 flex items-start gap-5 mt-6 jusify-itself-start">
                                        <div>
                                            <img
                                                src="${com.image}"
                                                alt=""
                                            />
                                        </div>
                                        <div>
                                            <p>${com.name}</p>
                                            <p>${com.completedCourse}</p>
                                        </div>
                                    </div>
                                </div>
            `;
        });
        sliderContainer.innerHTML = html;
    }
    createSliderCards();

    function sliderEngine() {
        const sliderContainer = document.getElementById("slider-container");
        const nextBtn = document.getElementById("nextBtn");
        const prevBtn = document.getElementById("prevBtn");

        const cards = document.querySelectorAll(".testimonial-itself");
        if (cards.length === 0) return;

        let currentIndex = 0;

        function goToSlide(index) {
            currentIndex = index;
            updatePosition();
        }

        function updatePosition() {
            const cardWidth = cards[0].offsetWidth;
            console.log(cardWidth);

            const gap = 8;

            const stepSize = cards[1].offsetLeft - cards[0].offsetLeft;

            sliderContainer.style.transform = `translateX(-${stepSize * currentIndex}px)`;
            sliderContainer.style.transition = "transform 0.5s ease-in-out";

            const indicators = document.querySelectorAll(".indicator");
            indicators.forEach((i) => {
                i.classList.remove("bg-[#424551]");
                i.classList.add("bg-gray-300");
            });

            indicators[currentIndex].classList.add("bg-[#424551]");
            indicators[currentIndex].classList.remove("bg-gray-300");
        }

        nextBtn.addEventListener("click", () => {
            const visibleCards = 1;
            const maxIndex = cards.length - visibleCards;

            if (currentIndex < maxIndex) {
                goToSlide(currentIndex + 1);
            } else {
                goToSlide(0);
            }
            updatePosition();
        });

        prevBtn.addEventListener("click", () => {
            const visibleCards = window.innerWidth < 768 ? 1 : 2;

            const maxIndex = cards.length - visibleCards;

            if (currentIndex > 0) {
                goToSlide(currentIndex - 1);
            } else {
                goToSlide(maxIndex);
            }
            updatePosition();
        });

        const indicatorContainer =
            document.getElementById("indicatorContainer");

        createIndicators(cards, indicatorContainer, goToSlide);
    }
    sliderEngine();

    // indicators
    function createIndicators(cards, indicatorContainer, goToSlide) {
        cards.forEach((card, index) => {
            const indicator = document.createElement("div");
            indicator.className =
                "indicator w-8 h-[3px] rounded-full bg-gray-300 cursor-pointer";
            indicatorContainer.appendChild(indicator);

            indicator.addEventListener("click", () => {
                goToSlide(index);
            });
        });

        const indicators = document.querySelectorAll(".indicator");

        indicators[0].classList.remove("bg-gray-300");
        indicators[0].classList.add("bg-[#424551]");
    }
    //   *************** Testimonials Section ***************

    // *************** Registration Section ***************
    const REGISTRATION = document.getElementById("REGISTRATION");
    function updateRegistration() {
        const registrationData = localeCourse[currentLang].registration;

        const registrationContainer = document.createElement("div");
        registrationContainer.className =
            "container mx-auto px-[15px] md:px-10 lg:px-20 mt-[96px] pb-12";
        REGISTRATION.appendChild(registrationContainer);

        const registrationContent = document.createElement("div");
        registrationContent.className = "flex flex-col-reverse md:flex-row";

        let registrationHTML = "";

        registrationHTML += `
        <div class='px-4 max-w-[700px] max-h-[500px] md:max-w-[463px] md:max-h-[313px]'>
            <img class='w-full h-full object-fit' src="${registrationData.imagePart.image}"/>
        </div>

        <div class="class='px-4 md:ml-[0px] lg:max-w-[400px] lg:ml-[80px] xl:ml-[105px]">
            <h6 class='font-bold text-[rgb(30,33,44)] uppercase mb-2'>${registrationData.intro.description}</h6>
            <h1 class='text-5xl font-black pb-2 mb-12  xl:whitespace-nowrap'>${registrationData.intro.title}</h1>

            <form>
               ${registrationData.intro.inputsInfo
                   .map(
                       (input) => `
                    <div class='flex flex-col mb-6'>
                        <label class='cursor-pointer mb-2 text-[rgb(66,69,81)]' for='user-${input.inputPlaceholder}'>${input.input}</label>
                        <input id="user-${input.inputPlaceholder}" class="w-full outline-none px-4 py-2.5 text-[0.875rem] border-gray-300 border-[1px] rounded text-[#424551] transition-all duration-300  focus:border-red-400/80" placeholder="${input.inputPlaceholder}"/>
                     </div>

                `,
                   )
                   .join(" ")}
                   
                   <div class='flex items-center justify-center w-full mb-6'> 
                    <button class='flex flex-col mb-6 pt-6 relative z-0'> 
                    <button type='submit' class='w-full text-sm rounded py-2.5 bg-gradient-to-l from-[#F75E05] to-[#FF3F3A] text-white'>${registrationData.intro.regButton.button}</button>
                   </div>

            </form>
        </div>
        `;

        registrationContent.innerHTML = registrationHTML;
        registrationContainer.appendChild(registrationContent);
    }
    updateRegistration();
    // *************** Registration Section ***************

    // *************** RECOMMENDATION Section ***************
    const RECOMMENDATION = document.getElementById("RECOMMENDATION");

    function updateRecommendationSec() {
        const recommendationData = localeCourse[currentLang].recommendation;
        console.log(RECOMMENDATION);

        const recommendationContainer = document.createElement("div");
        recommendationContainer.className =
            "container mx-auto px-5 md:px-10 pt-[48px]";
        RECOMMENDATION.appendChild(recommendationContainer);

        const recommendationContent = document.createElement("div");
        let recommendationHTML = "";

        recommendationHTML += `
        <div class='flex justify-between items-center'>
                <div>
                    <h3 class='text-[rgb(30,33,44)] uppercase mb-2 '>${recommendationData.intro.badge}</h3>
                    <h2 class="text-[rgb(30,33,44))] text-4xl font-black pb-2 mb-6">${recommendationData.intro.title}</h2>
                </div>
                
                <div class="flex gap-2">
                    <button class="custom-swiper-prevBtn w-10 h-10 rounded-full md:flex md:items-center md:justify-center bg-transparent text-black cursor-pointer hover:bg-[#FF3F3A] hover:text-white transition-colors duration-300 active:scale-105 select-none">←</button>

                    <button class="custom-swiper-nextBtn w-10 h-10 rounded-full bg-transparent text-black cursor-pointer hover:bg-[#FF3F3A] hover:text-white transition-colors duration-300 active:scale-105 select-none">→</button>
                </div>
        </div>

          <!-- Swiper -->
    <div class="swiper mySwiper">
      <div class="swiper-wrapper pb-10 mb-12">
      ${allCourses
          .slice(0, 6)
          .map((each) => {
              return `
            <div class="swiper-slide flex group md:flex md:flex-col lg:flex-row  h-full">
            <a href="./course.html?id=${each.id}" class='aspect-square max-w-[214px] md:aspect-video md:max-w-full lg:flex-shrink-lg lg:aspect-square lg:max-w-[214px]'>
            <img class='w-full h-full object-cover rounded-l' src="${each.curatorTitleImg}"/>
            </a>

            <div class='flex flex-col  items-start flex-1 shadow-lg transition-shadow duration-300 group-hover:shadow-xl border-[rgb(229,232,237)] border-[1px] rounded p-[30px]'>
                <span class='mb-4 px-4 py-1 text-white rounded bg-[${each.backColor}] inline-block'>${each[currentLang].category}</span>
                <h5 class='line-clamp-2 font-bold text-xl text-[rgb(30,33,44)] transition-colors duration-300  group-hover:text-red-500 py-1 mb-4'>${each.curator[currentLang].jobs}</h5>
                <div class='mt-auto'>
                    <span class='text-red-500 font-bold'>$${each.coursePrice} | <span class="text-[rgb(120,122,128)]">${each.curator.curatorName}</span></span>
                </div>
            </div>
        </div>

          `;
          })
          .join(" ")}
      </div>


      <div class="flex justify-center gap-6 mb-6 max-[576px]:flex-col">
          <h4 class="max-[576px]:text-center font-bold text-3xl">${recommendationData.more.title}</h4>
          <button class="text-sm rounded py-2.5 px-10 bg-gradient-to-l from-[#F75E05] to-[#FF3F3A] text-white">${recommendationData.more.button}</button>
      </div>
  
    </div>
    
        
   
        
        `;
        recommendationContent.innerHTML = recommendationHTML;
        recommendationContainer.appendChild(recommendationContent);

        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".custom-swiper-nextBtn",
                prevEl: ".custom-swiper-prevBtn",
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
            },
        });
    }
    updateRecommendationSec();
    // *************** RECOMMENDATION Section ***************
});
