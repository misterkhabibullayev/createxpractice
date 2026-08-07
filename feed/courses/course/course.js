import { allCourses } from "../../../AllCourses.js";

window.addEventListener("DOMContentLoaded", () => {
    const currentLang = localStorage.getItem("selectedLang");
    document.body.setAttribute("lang", currentLang);

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
                        image: "../../../Image/courses-photo/slider-image/image.png",
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
            flag: "/Image/HomePagePhoto/twemoji--flag-united-states.svg",
            navAbout: "About Us",
            navCourses: "Courses",
            navEvents: "Events",
            navBlog: "Blog",
            navContacts: "Contacts",
            getConsultation: "Get consultation",
            loginRegister: "Log in / Register",
            signIn: "Sign in",
            signInP:
                "Sign in to your account using email and password provided during registration.",
            email: "Email",
            yourEmailAddress: "Your working email",
            password: "Password",
            passwordPlaceholder: "Your password",
            rememberMe: "Remember me",
            forgotPassword: "Forgot password?",
            dontHaveAnAccount: "Don't have an account?",
            orSignInWith: "Or sign in with",
            signUp: "Sign up",
            fullName: "Full name",
            yourFullName: "Your full name",
            confirmPassword: "Confirm Password",
            confirmPasswordPlaceholder: "Confirm password",
            alreadyAnAccount: "Already have an account?",
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
            flag: "/Image/HomePagePhoto/twemoji--flag-russia.svg",
            navAbout: "О нас",
            navCourses: "Курсы",
            navEvents: "Мероприятия",
            navBlog: "Блог",
            navContacts: "Контакты",
            getConsultation: "Получить консультацию",
            loginRegister: "Войти / Зарегистрироваться",
            signIn: "Войти",
            signInP:
                "Войдите в свой аккаунт, используя email и пароль, указанные при регистрации.",
            email: "Email",
            yourEmailAddress: "Ваш рабочий email",
            password: "Пароль",
            passwordPlaceholder: "Ваш пароль",
            rememberMe: "Запомнить меня",
            forgotPassword: "Забыли пароль?",
            dontHaveAnAccount: "Нет аккаунта?",
            orSignInWith: "Или войдите с помощью",
            signUp: "Зарегистрироваться",
            fullName: "Полное имя",
            yourFullName: "Ваше полное имя",
            confirmPassword: "Подтвердите пароль",
            confirmPasswordPlaceholder: "Подтверждение пароля",
            alreadyAnAccount: "Уже есть аккаунт?",
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
            flag: "/Image/HomePagePhoto/twemoji--flag-uzbekistan.svg",
            navAbout: "Biz haqimizda",
            navCourses: "Kurslar",
            navEvents: "Tadbirlar",
            navBlog: "Blog",
            navContacts: "Kontaktlar",
            getConsultation: "Konsultatsiya olish",
            loginRegister: "Kirish / Ro'yxatdan o'tish",
            signIn: "Kirish",
            signInP:
                "Ro'yxatdan o'tish paytida ko'rsatilgan email va parol yordamida hisobingizga kiring.",
            email: "Email",
            yourEmailAddress: "Ishlayotgan emailingiz",
            password: "Parol",
            passwordPlaceholder: "Sizning parolingiz",
            rememberMe: "Meni eslab qol",
            forgotPassword: "Parolni unutdingizmi?",
            dontHaveAnAccount: "Hisobingiz yo'qmi?",
            orSignInWith: "Yoki ushbu usulda kiring",
            signUp: "Ro'yxatdan o'tish",
            fullName: "To'liq ism-sharif",
            yourFullName: "Ism va familiyangiz",
            confirmPassword: "Parolni tasdiqlang",
            confirmPasswordPlaceholder: "Parolni tasdiqlang",
            alreadyAnAccount: "Allaqachon hisobingiz bormi?",
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

    function headerMainFunc() {
        const headerMain = document.querySelector("#headerMain");
        headerMain.innerHTML = `
    <div
        class=" w-full max-w-[1340px] mx-auto px-5 flex justify-between items-center py-5 relative"
    >
        <div class="flex items-center gap-7 md:gap-10">
            <div class="">
                <a href="/index.html">
                    <img
                        src="/Image/HomePagePhoto/logo.svg"
                        alt="logo image"
                    />
                </a>
            </div>
            <nav class="hidden lg:flex items-center gap-4 xl:gap-8">
                <a
                    href="/feed/about/about.html"
                    class="font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateData[currentLang].navAbout}</a>
                <a
                    href="/feed/courses/courses.html"
                    class="font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateData[currentLang].navCourses}</a>
                <a
                    href="/feed/events/events.html"
                    class="font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateData[currentLang].navEvents}</a>
                <a
                    href="/feed/blogs/blogs.html"
                    class="font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateData[currentLang].navBlog}</a>
                <a
                    href="/feed/contacts/contacts.html"
                    class="font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateData[currentLang].navContacts}</a>
            </nav>
        </div>
        <div class="flex items-center gap-3 md:gap-4">
            <div class="flex items-center gap-3 md:gap-4">
                <a
                    href="/feed/contacts/contacts.html"
                    class="font-[Lato] font-bold text-[12px] leading-8 tracking-[0.5px] text-white bg-gradient-to-r from-[#FF3F3A] to-[#F75E05] px-5 rounded-[4px] hidden sm:inline-block hover:bg-gradient-to-l hover:from-[#F75E05] hover:to-[#FF3F3A]"
                >
                    ${translateData[currentLang].getConsultation}
                </a>
                <div class="relative">
                    <button
                        class="loginModalBtn hidden lg:flex gap-2 items-center font-[Lato] font-bold text-3 lg:text-2 lg:leading-4 text-gray-800"
                    >
                        <img
                            src="/Image/HomePagePhoto/Profile.svg"
                            alt="profile icon"
                            class="hidden xl:block"
                        />
                        ${translateData[currentLang].loginRegister}
                    </button>
                </div>
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
        <div id="burgerModal" class="absolute top-full left-0 z-20 px-5 w-full flex lg:hidden overflow-hidden transition-all duration-300 origin-top" style="transform: rotateX(90deg);">
            <nav class="flex flex-col bg-white w-full">
                <a
                    href="/feed/about/about.html"
                    class="block w-full px-4 py-2 font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateData[currentLang].navAbout}</a>
                <a
                    href="/feed/courses/courses.html"
                    class="inline-block w-full px-4 py-2 font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateData[currentLang].navCourses}</a>
                <a
                    href="/feed/events/events.html"
                    class="inline-block w-full px-4 py-2 font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateData[currentLang].navEvents}</a>
                <a
                    href="/feed/blogs/blogs.html"
                    class="inline-block w-full px-4 py-2 font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateData[currentLang].navBlog}</a>
                <a
                    href="/feed/contacts/contacts.html"
                    class="inline-block w-full px-4 py-2 font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateData[currentLang].navContacts}</a>
                <button
                    class="loginModalBtn flex lg:hidden gap-2 items-center w-full px-4 py-2 font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >
                    <img
                        src="/Image/HomePagePhoto/Profile.svg"
                        alt="profile icon"
                        class="block"
                    />
                    ${translateData[currentLang].loginRegister}
                </button>
                <div class="">
                    <a
                        href="/feed/contacts/contacts.html"
                        class="font-[Lato] font-bold text-[12px] leading-8 tracking-[0.5px] text-white bg-gradient-to-r from-[#FF3F3A] to-[#F75E05] px-5 rounded-[4px] inline-block mx-4 my-2 sm:hidden hover:bg-gradient-to-l hover:from-[#F75E05] hover:to-[#FF3F3A]"
                    >
                        ${translateData[currentLang].getConsultation}
                    </a>
                </div>
            </nav>
        </div>
    </div>
    <div id="loginModal" class="absolute z-20 top-0 left-0 w-full h-screen bg-[#1E212C90] hidden items-start justify-center overflow-y-auto py-10">
        <div class="w-full sm:w-[500px] bg-white py-6 mx-6 border border-[#E5E8ED] rounded-[4px] ">
            <div class="flex items-center justify-end px-6">
                <button id="closeBtn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="text-[#787A80] hover:text-[#1E212C] transition-all duration-300">
	                    <path d="M0 0h24v24H0z" fill="none" />
	                    <path fill="currentColor" d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4" />
                    </svg>
                </button>
            </div>
            <div class="">
                <div class="flex flex-col items-center px-6 gap-6 mb-6">
                    <h1 id="signInUpTitle" class="text-center font-[Lato] font-bold text-[28px] leading-[150%] text-[#1E212C]">${translateData[currentLang].signIn}</h1>
                    <p class="text-center font-[Lato] font-normal text-[14px] leading-[150%] text-[#787A80]">${translateData[currentLang].signInP}</p>
                </div>
                <form class="flex flex-col gap-5 px-6">
                    <div id="fullNameDiv" class="hidden flex-col">
                        <label for="fullNameInput" class="font-[Lato] font-normal text-[14px] leading-[150%] text-[#424551] mb-2">${translateData[currentLang].fullName}</label>
                        <input type="text" id="emailInput" placeholder="${translateData[currentLang].yourFullName}" class="px-4 py-[13px] outline-none border border-[#D7DADD] focus:border-[#FF3F3A] focus:shadow-[0_0_8px_rgba(255,63,58,0.4)] rounded-[4px] font-[Lato] font-normal text-[16px] leading-[160%] text-black placeholder:text-[#9A9CA5]">
                    </div>
                    <div class="flex flex-col ">
                        <label for="emailInput" class="font-[Lato] font-normal text-[14px] leading-[150%] text-[#424551] mb-2">${translateData[currentLang].email}</label>
                        <input type="text" id="emailInput" placeholder="${translateData[currentLang].yourEmailAddress}" class="px-4 py-[13px] outline-none border border-[#D7DADD] focus:border-[#FF3F3A] focus:shadow-[0_0_8px_rgba(255,63,58,0.4)] rounded-[4px] font-[Lato] font-normal text-[16px] leading-[160%] text-black placeholder:text-[#9A9CA5]">
                    </div>
                    <div>
                        <label for="passwordInput" class="font-[Lato] font-normal text-[14px] leading-[150%] text-[#424551]">${translateData[currentLang].password}</label>
                        <div class="relative w-full mt-2">
                            <input 
                                type="password" 
                                id="passwordInput"
                                placeholder="${translateData[currentLang].passwordPlaceholder}"
                                class="w-full px-4 py-[13px] outline-none border border-[#D7DADD] focus:border-[#FF3F3A] focus:shadow-[0_0_8px_rgba(255,63,58,0.4)] rounded-[4px] font-[Lato] font-normal text-[16px] leading-[160%] text-black placeholder:text-[#9A9CA5]"
                            />

                            <button 
                                type="button" 
                                onclick="
                                    const input = document.getElementById('passwordInput');
                                    const eyeOpen = this.querySelector('.eye-open');
                                    const eyeClosed = this.querySelector('.eye-closed');
                                    const isPassword = input.type === 'password';
        
                                    input.type = isPassword ? 'text' : 'password';
                                    eyeOpen.classList.toggle('hidden', isPassword);
                                    eyeClosed.classList.toggle('hidden', !isPassword);
                                "
                                class="absolute right-4 top-1/2 -translate-y-1/2 text-[#1E212C] hover:text-[#FF3F3A] transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" class="eye-open block">
	                                <path d="M0 0h32v32H0z" fill="none" />
                                    <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2">
		                                <path d="M29 16c0 3-5.82 9-13 9S3 19 3 16s5.82-9 13-9s13 6 13 9Z" />
		                                <path d="M21 16a5 5 0 1 1-10 0a5 5 0 0 1 10 0Z" />
	                                </g>
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="eye-closed hidden">
	                                <path d="M0 0h24v24H0z" fill="none" />
	                                <path fill="currentColor" fill-rule="evenodd" d="M1.606 6.08a1 1 0 0 1 1.313.526L2 7l.92-.394v-.001l.003.009l.021.045l.094.194c.086.172.219.424.4.729a13.4 13.4 0 0 0 1.67 2.237a12 12 0 0 0 .59.592C7.18 11.8 9.251 13 12 13a8.7 8.7 0 0 0 3.22-.602c1.227-.483 2.254-1.21 3.096-1.998a13 13 0 0 0 2.733-3.725l.027-.058l.005-.011a1 1 0 0 1 1.838.788L22 7l.92.394l-.003.005l-.004.008l-.011.026l-.04.087a14 14 0 0 1-.741 1.348a15.4 15.4 0 0 1-1.711 2.256l.797.797a1 1 0 0 1-1.414 1.415l-.84-.84a12 12 0 0 1-1.897 1.256l.782 1.202a1 1 0 1 1-1.676 1.091l-.986-1.514c-.679.208-1.404.355-2.176.424V16.5a1 1 0 0 1-2 0v-1.544c-.775-.07-1.5-.217-2.177-.425l-.985 1.514a1 1 0 0 1-1.676-1.09l.782-1.203c-.7-.37-1.332-.8-1.897-1.257l-.84.84a1 1 0 0 1-1.414-1.414l.797-.797a15.4 15.4 0 0 1-1.87-2.519a14 14 0 0 1-.591-1.107l-.033-.072l-.01-.021l-.002-.007l-.001-.002v-.001C1.08 7.395 1.08 7.394 2 7l-.919.395a1 1 0 0 1 .525-1.314" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div id="confirmPasswordDiv" class="hidden">
                        <label for="emailInput" class="font-[Lato] font-normal text-[14px] leading-[150%] text-[#424551]">${translateData[currentLang].confirmPassword}</label>
                        <div class="relative w-full mt-2">
                            <input 
                                type="password" 
                                id="confirmPasswordInput"
                                placeholder="${translateData[currentLang].confirmPasswordPlaceholder}"
                                class="w-full px-4 py-[13px] outline-none border border-[#D7DADD] focus:border-[#FF3F3A] focus:shadow-[0_0_8px_rgba(255,63,58,0.4)] rounded-[4px] font-[Lato] font-normal text-[16px] leading-[160%] text-black placeholder:text-[#9A9CA5]"
                            />

                            <button 
                                type="button" 
                                onclick="
                                    const input = document.getElementById('passwordInput');
                                    const eyeOpen = this.querySelector('.eye-open');
                                    const eyeClosed = this.querySelector('.eye-closed');
                                    const isPassword = input.type === 'password';
        
                                    input.type = isPassword ? 'text' : 'password';
                                    eyeOpen.classList.toggle('hidden', isPassword);
                                    eyeClosed.classList.toggle('hidden', !isPassword);
                                "
                                class="absolute right-4 top-1/2 -translate-y-1/2 text-[#1E212C] hover:text-[#FF3F3A] transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" class="eye-open block">
	                                <path d="M0 0h32v32H0z" fill="none" />
                                    <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2">
		                                <path d="M29 16c0 3-5.82 9-13 9S3 19 3 16s5.82-9 13-9s13 6 13 9Z" />
		                                <path d="M21 16a5 5 0 1 1-10 0a5 5 0 0 1 10 0Z" />
	                                </g>
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="eye-closed hidden">
	                                <path d="M0 0h24v24H0z" fill="none" />
	                                <path fill="currentColor" fill-rule="evenodd" d="M1.606 6.08a1 1 0 0 1 1.313.526L2 7l.92-.394v-.001l.003.009l.021.045l.094.194c.086.172.219.424.4.729a13.4 13.4 0 0 0 1.67 2.237a12 12 0 0 0 .59.592C7.18 11.8 9.251 13 12 13a8.7 8.7 0 0 0 3.22-.602c1.227-.483 2.254-1.21 3.096-1.998a13 13 0 0 0 2.733-3.725l.027-.058l.005-.011a1 1 0 0 1 1.838.788L22 7l.92.394l-.003.005l-.004.008l-.011.026l-.04.087a14 14 0 0 1-.741 1.348a15.4 15.4 0 0 1-1.711 2.256l.797.797a1 1 0 0 1-1.414 1.415l-.84-.84a12 12 0 0 1-1.897 1.256l.782 1.202a1 1 0 1 1-1.676 1.091l-.986-1.514c-.679.208-1.404.355-2.176.424V16.5a1 1 0 0 1-2 0v-1.544c-.775-.07-1.5-.217-2.177-.425l-.985 1.514a1 1 0 0 1-1.676-1.09l.782-1.203c-.7-.37-1.332-.8-1.897-1.257l-.84.84a1 1 0 0 1-1.414-1.414l.797-.797a15.4 15.4 0 0 1-1.87-2.519a14 14 0 0 1-.591-1.107l-.033-.072l-.01-.021l-.002-.007l-.001-.002v-.001C1.08 7.395 1.08 7.394 2 7l-.919.395a1 1 0 0 1 .525-1.314" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div id="rememberDiv" class="flex items-center justify-between">
                        <label class="flex items-center gap-2.5 cursor-pointer">
                            <input 
                            type="checkbox" 
                            class="w-4 h-4 mt-0.5 accent-[#ff4e2a] rounded cursor-pointer shrink-0"
                        >
                            <span class="font-[Lato] font-normal text-[16px] leading-[160%] text-[#424551] select-none">${translateData[currentLang].rememberMe}</span>
                        </label>
                        <div>
                            <a href="#!" class="font-[Lato] font-normal text-[14px] leading-[150%] text-[#FF3F3A] ">${translateData[currentLang].forgotPassword}</a>
                        </div>
                    </div>
                    <div>
                        <button id="submitBtn" type="submit" class="w-full py-3 px-8 font-[Lato] font-bold text-[14px] tracking-[0.5px] text-white rounded-[4px] bg-gradient-to-r from-[#FF3F3A] to-[#F75E05] hover:bg-gradient-to-l hover:from-[#F75E05] hover:to-[#FF3F3A] hover:shadow-[0px_10px_20px_0px_rgba(255,63,58,0.35)] transition-all duration-300">
                            ${translateData[currentLang].signIn}
                        </button>
                    </div>
                    <div class="flex items-center gap-1">
                        <p id="donthaveP" class="font-[Lato] font-normal text-[14px] leading-[150%] text-[#424551]">${translateData[currentLang].dontHaveAnAccount}</p>
                        <button id="signInUp" type="button" class="font-[Lato] font-normal text-[14px] leading-[150%] text-[#FF3F3A]">${translateData[currentLang].signUp}</button>
                    </div>
                </form>
                <div class="my-6 w-full h-[1px] bg-[#E5E8ED]"></div>
                <div class="px-6 flex flex-col items-center">
                    <p>${translateData[currentLang].orSignInWith}</p>
                    <div class="flex items-center gap-3 py-4">
                        <a href="#!">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="text-[#787A80] hover:text-[#FF3F3A] transition-all duration-300">
	                            <path d="M0 0h24v24H0z" fill="none" />
	                            <path fill="currentColor" d="M14.2 2.875A4.625 4.625 0 0 0 9.575 7.5v2.575H7.1c-.124 0-.225.1-.225.225v3.4c0 .124.1.225.225.225h2.475V20.9c0 .124.1.225.225.225h3.4c.124 0 .225-.1.225-.225v-6.975h2.497c.103 0 .193-.07.218-.17l.85-3.4a.225.225 0 0 0-.218-.28h-3.347V7.5a.775.775 0 0 1 .775-.775h2.6c.124 0 .225-.1.225-.225V3.1c0-.124-.1-.225-.225-.225z" />
                            </svg>
                        </a>
                        <a href="#!">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="text-[#787A80] hover:text-[#FF3F3A] transition-all duration-300">
	                            <path d="M0 0h24v24H0z" fill="none" />
	                            <path fill="currentColor" d="M21.8 10H12v4h5.65A5.996 5.996 0 0 1 6 12c0-3.315 2.685-6 6-6c1.655 0 3.155.67 4.245 1.755l2.83-2.83a9.97 9.97 0 0 0-7.07-2.93C6.475 2 2 6.475 2 12s4.475 10 10 10s10-4.475 10-10c0-.685-.07-1.355-.2-2" />
                            </svg>
                        </a>
                        <a href="#!">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="text-[#787A80] hover:text-[#FF3F3A] transition-all duration-300">
	                            <path d="M0 0h24v24H0z" fill="none" />
	                            <path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23" />
                            </svg>
                        </a>
                        <a href="#!">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" class="text-[#787A80] hover:text-[#FF3F3A] transition-all duration-300">
	                            <path d="M0 0h16v16H0z" fill="none" />
	                            <path fill="currentColor" d="M3.44 4.89c.8 0 1.44-.65 1.44-1.44s-.65-1.44-1.44-1.44S2 2.66 2 3.45s.65 1.44 1.44 1.44m2.81 1.09V14h2.48v-3.96c0-1.05.2-2.06 1.49-2.06s1.29 1.2 1.29 2.12V14H14V9.6c0-2.16-.46-3.82-2.98-3.82c-1.21 0-2.02.66-2.35 1.29h-.03v-1.1H6.26Zm-4.05 0h2.49V14H2.2z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

        function loginSignFunc() {
            const loginModalBtns = document.querySelectorAll(".loginModalBtn");
            const loginModal = document.querySelector("#loginModal");
            const closeBtn = document.querySelector("#closeBtn");
            if (loginModalBtns.length > 0 && loginModal) {
                loginModalBtns.forEach((btn) => {
                    btn.addEventListener("click", () => {
                        document.body.classList.add("overflow-y-hidden");
                        loginModal.classList.add("flex");
                        loginModal.classList.remove("hidden");
                    });
                });
            }
            if (closeBtn && loginModal) {
                closeBtn.addEventListener("click", () => {
                    document.body.classList.remove("overflow-y-hidden");
                    loginModal.classList.add("hidden");
                    loginModal.classList.remove("flex");
                });
            }
            if (loginModal) {
                loginModal.addEventListener("click", (e) => {
                    if (e.target === e.currentTarget) {
                        document.body.classList.remove("overflow-y-hidden");
                        loginModal.classList.add("hidden");
                        loginModal.classList.remove("flex");
                    }
                });
            }

            const signInUp = document.querySelector("#signInUp");
            const signInUpTitle = document.querySelector("#signInUpTitle");
            const signInP = document.querySelector("#loginModal p"); // Description text
            const fullNameDiv = document.querySelector("#fullNameDiv");
            const confirmPasswordDiv = document.querySelector(
                "#confirmPasswordDiv",
            );
            const rememberDiv = document.querySelector("#rememberDiv");
            const submitBtn = document.querySelector("#submitBtn");
            const donthaveP = document.querySelector("#donthaveP");

            let isSignUp = false;

            signInUp.addEventListener("click", () => {
                isSignUp = !isSignUp;

                if (isSignUp) {
                    signInUpTitle.innerHTML = translateData[currentLang].signUp;
                    signInP.innerHTML =
                        translateData[currentLang].signUpP ||
                        translateData[currentLang].signInP;

                    fullNameDiv.classList.replace("hidden", "flex");
                    confirmPasswordDiv.classList.replace("hidden", "block");
                    rememberDiv.classList.add("hidden");

                    submitBtn.innerHTML = translateData[currentLang].signUp;
                    donthaveP.innerHTML =
                        translateData[currentLang].alreadyAnAccount;
                    signInUp.innerHTML = translateData[currentLang].signIn;
                } else {
                    signInUpTitle.innerHTML = translateData[currentLang].signIn;
                    signInP.innerHTML = translateData[currentLang].signInP;

                    fullNameDiv.classList.replace("flex", "hidden");
                    confirmPasswordDiv.classList.replace("block", "hidden");
                    rememberDiv.classList.remove("hidden");

                    submitBtn.innerHTML = translateData[currentLang].signIn;
                    donthaveP.innerHTML =
                        translateData[currentLang].dontHaveAnAccount;
                    signInUp.innerHTML = translateData[currentLang].signUp;
                }
            });
        }
        loginSignFunc();

        function burgerBtnFunc() {
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
                if (burgerModal.style.transform === "rotateX(0deg)") {
                    burgerModal.style.transform = "rotateX(90deg)";
                } else {
                    burgerModal.style.transform = "rotateX(0deg)";
                }
            });
            document.addEventListener("click", () => {
                burgerSpan1.classList.remove("translate-y-[5px]", "rotate-45");
                burgerSpan2.classList.remove(
                    "-translate-y-[5px]",
                    "-rotate-45",
                    "w-[30px]",
                );
                burgerModal.style.transform = "rotateX(90deg)";
            });
        }
        burgerBtnFunc();

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
                src="/Image/HomePagePhoto/icon-park-solid--down-one.svg"
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
    }
    headerMainFunc();

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
          

        <div id="dates-container" class="dates-container flex flex-col h-fit md:mx-[15px] p-6 shadow-2xl  md:max-w-[335px] lg:max-w-[350px] xl:max-w-[505px]">
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
            "aboutTheCourse-tutor flex flex-col-reverse sm:flex-row mt-[96px] pb-[48px]";

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
            console.log(minusBtns);
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

    // *************** Footer ***************
    function footer() {
        console.log("working");

        const footer = document.querySelector("#footer");

        footer.innerHTML = `
    <div class="bg-[#1E212C] pt-[50px] pb-[40px] lg:pt-[80px] lg:pb-[60px]">
        <div class="w-full max-w-[1340px] mx-auto px-5 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-y-8 gap-x-6">
            <div class="flex flex-col lg:col-span-3 sm:col-span-1 col-span-2 order-1 lg:order-1">
                <a href="./index.html">
                    <img src="/Image/HomePagePhoto/footerlogo.svg" alt="footer logo" class="" />
                </a>
                <p class="font-[Lato] font-normal text-[12px] leading-[150%] text-white opacity-60 max-w-full line-clamp-5 mt-[24px] mb-[38px]">${translateData[currentLang].footerDescription}</p>
                <div class="flex items-center gap-5 mb-4 flex-wrap">
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
                    <a href="/feed/about/about.html" class="font-[Lato] font-normal text-[16px] leading-[160%] text-[#A5A6AB] hover:text-white transition-all duration-300">${translateData[currentLang].navAbout}</a>
                    <a href="/feed/courses/courses.html" class="font-[Lato] font-normal text-[16px] leading-[160%] text-[#A5A6AB] hover:text-white transition-all duration-300">${translateData[currentLang].navCourses}</a>
                    <a href="/feed/events/events.html" class="font-[Lato] font-normal text-[16px] leading-[160%] text-[#A5A6AB] hover:text-white transition-all duration-300">${translateData[currentLang].navEvents}</a>
                    <a href="/feed/blogs/blogs.html" class="font-[Lato] font-normal text-[16px] leading-[160%] text-[#A5A6AB] hover:text-white transition-all duration-300">${translateData[currentLang].navBlog}</a>
                    <a href="/feed/contacts/contacts.html" class="font-[Lato] font-normal text-[16px] leading-[160%] text-[#A5A6AB] hover:text-white transition-all duration-300">${translateData[currentLang].navContacts}</a>
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
                    <p class="mt-[12px] font-[Lato] font-normal text-[10px] leading-[150%] text-white opacity-60 max-w-[290px] line-clamp-2">${translateData[currentLang].signUpSubscribe}</p>
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
    }
    footer();
    // *************** Footer ***************

    const loader = document.querySelector("#loader");

    if (loader) {
        setTimeout(() => {
            loader.classList.add("opacity-0", "pointer-events-none");

            setTimeout(() => {
                loader.classList.add("hidden");
            }, 1000);
        }, 1000);
    }
});
