import { allBlogPosts } from "../../AllBlogPosts.js";
window.addEventListener("DOMContentLoaded", () => {
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
            },
            heroSection: {
                hero_name: "ABOUT US",
                heroTitle: "Createx Online School",
                heroText:
                    "Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts.",
                heroP: "We provide relevant approaches to online learning, internships and employment in the largest companies in the country. Our educational programs help you get a new specialty from scratch. During your studies, we will help you find a job. Check the courses and online events that we organise.",
                explore_button: "Explore events",
                browse_button: "Browse courses",
            },
            section2: {
                watchVideo: "Watch Video",
                desc1: "students graduated",
                desc2: "completed courses",
                desc3: "qualified tutors",
                desc4: "years of experience",
            },
            section3: {
                section3_name: "WE ALWAYS STAND FOR",
                section3_title: "Our core values",
                section3_card1_title: "Structured Approach",
                section3_card1_text:
                    "Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.",
                section3_card2_title: "Professional Feedbacks",
                section3_card2_text:
                    "Culpa nostrud commodo ea consequat reprehenderit aliquip. ",
                section3_card3_title: "Efficiency",
                section3_card3_text:
                    "Viverra scelerisque consequat net. Adipisicing esse consequat. ",
                section3_card4_title: "Flexible Shedule",
                section3_card4_text:
                    "Aute eiusmod dolore dolore deserunt veniam ad deserunt. ",
            },
            section4: {
                section4_name: "OUR MAIN DIRECTIONS",
                section4_title: "What do we teach",
                marketing_button: "Marketing",
                management_button: "Management",
                recruting_button: "HR & Recruting",
                design_button: "Design",
                development_button: "Development",
                check_button: "Check courses",
                section4_card_text:
                    "Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.",
                section4_last_card: "New studying program coming soon...",
            },
            section5: {
                section5_name: "STUDYING PROCESS",
                section5_title: "That’s how we do it",
                step: "STEP",
                step1_title: "Watching online video lectures",
                step1_text:
                    "Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl, imperdiet gravida massa neque.",
                step2_title: "Passing test",
                step2_text:
                    "Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet, sollicitudin egestas laoreet etiam. ",
                step3_title: "Curator’s feedback",
                step3_text:
                    "Eget amet, enim pharetra leo egestas nisi, odio imperdiet facilisis. Aliquet orci varius volutpat egestas facilisi lobortis. ",
                step4_title: "Corrections if needed",
                step4_text:
                    "Non tempor pulvinar tincidunt aliquam. Placerat ultricies malesuada dui auctor.",
            },
            section6: {
                section6_name: "BEST TUTORS ARE ALL HERE",
                section6_title: "Meet our team",
                dianne: "Dianne Russell",
                dianne_job: "Founder and CEO",
                jerome: "Jerome Bell",
                jerome_job: "Founder and Program Director",
                kristin: "Kristin Watson",
                kristin_job: "Marketer, Curator of Marketing Course",
                marvin: "Marvin McKinney",
                marvin_job: "PM, Curator of Management Course",
                leslie: "Leslie Alexander Li",
                leslie_job: "Curator of HR & Recruting Course",
                murphy: "Kathryn Murphy",
                murphy_job: "Analyst and Marketing specialist",
                brooklyn: "Brooklyn Simmons",
                brooklyn_job: "Curator of Development Course",
                cody: "Cody Fisher",
                cody_job: "UX Designer, Curator of Design Course",
            },
            section7: {
                section7_name: "TESTIMONIALS",
                section7_title: "What our students say",
                comment:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.",
                elenor: "Eleanor Pena",
                elenors: "Position, Course",
            },
            section8: {
                section8_name: "BEST JOBS FOR YOU",
                section8_title: "Our students work here",
                ourBlog: "OUR BLOG",
                latestPosts: "Latest posts",
                goBlog: "Go to blog",
                marketing: "Marketing",
                management: "Management",
                design: "Design",
                september: "September",
                august: "August",
                min: "min",
                section8_card1_title:
                    "What is traffic arbitrage and does it really make money?",
                section8_card1_text:
                    "Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...",
                listen: "Listen",
                watch: "Watch",
                read: "Read",
                section8_card2_title:
                    "What to do and who to talk to if you want to get feedback on the product",
                section8_card2_text:
                    "Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus...",
                section8_card3_title:
                    "Should you choose a creative profession if you are attracted to creativity?",
                section8_card3_text:
                    "Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...",
                podcast: "Podcast",
                video: "Video",
                article: "Article",
            },
            section9: {
                dontmiss: "DON`T MISS ANYTHING",
                subscribeTitle: "Subscribe to the Createx School announcements",
                subscribePlaceholder: "Your working email",
                subscribe_button: "Subscribe",
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
            },
            heroSection: {
                hero_name: "BIZ HAQIMIZDA",
                heroTitle: "Createx Onlayn Maktabi",
                heroText:
                    "Createx Onlayn Maktabi onlayn ta'lim sohasidagi yetakchilardan biridir. Bizda bozorning yetakchi mutaxassislari tomonidan yaratilgan ko'plab kurslar va dasturlar mavjud.",
                heroP: "Biz onlayn ta'lim, amaliyot va mamlakatning yirik kompaniyalarida ishga joylashish uchun zamonaviy yondashuvlarni taklif qilamiz. Ta'lim dasturlarimiz sizga yangi kasbni noldan o'rganishga yordam beradi. O'qish davomida ish topishingizga ham ko'maklashamiz. Biz tashkil etadigan kurslar va onlayn tadbirlarni ko'rib chiqing.",
                explore_button: "Tadbirlarni ko'rish",
                browse_button: "Kurslarni ko'rish",
            },
            section2: {
                watchVideo: "Videoni ko'rish",
                desc1: "bitiruvchi talabalar",
                desc2: "yakunlangan kurslar",
                desc3: "malakali ustozlar",
                desc4: "yillik tajriba",
            },
            section3: {
                section3_name: "BIZ DOIMO QADRIYATLARIMIZGA SODIQMIZ",
                section3_title: "Asosiy qadriyatlarimiz",
                section3_card1_title: "Tizimli yondashuv",
                section3_card1_text:
                    "Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.",
                section3_card2_title: "Professional fikr-mulohazalar",
                section3_card2_text:
                    "Culpa nostrud commodo ea consequat reprehenderit aliquip.",
                section3_card3_title: "Samaradorlik",
                section3_card3_text:
                    "Viverra scelerisque consequat net. Adipisicing esse consequat.",
                section3_card4_title: "Moslashuvchan jadval",
                section3_card4_text:
                    "Aute eiusmod dolore dolore deserunt veniam ad deserunt.",
            },
            section4: {
                section4_name: "ASOSIY YO'NALISHLARIMIZ",
                section4_title: "Nimalarni o'rgatamiz",
                marketing_button: "Marketing",
                management_button: "Menejment",
                recruting_button: "HR va Rekruting",
                design_button: "Dizayn",
                development_button: "Dasturlash",
                check_button: "Kurslarni ko'rish",
                section4_card_text:
                    "Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.",
                section4_last_card: "Yangi o'quv dasturi tez orada...",
            },
            section5: {
                section5_name: "TA'LIM JARAYONI",
                section5_title: "Biz qanday ishlaymiz",
                step: "BOSQICH",
                step1_title: "Onlayn video darslarni tomosha qilish",
                step1_text:
                    "Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl, imperdiet gravida massa neque.",
                step2_title: "Test topshirish",
                step2_text:
                    "Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus.",
                step3_title: "Kurator fikr-mulohazasi",
                step3_text:
                    "Eget amet, enim pharetra leo egestas nisi, odio imperdiet facilisis.",
                step4_title: "Kerak bo'lsa tuzatishlar kiritish",
                step4_text:
                    "Non tempor pulvinar tincidunt aliquam. Placerat ultricies malesuada dui auctor.",
            },
            section6: {
                section6_name: "ENG YAXSHI USTOZLAR SHU YERDA",
                section6_title: "Jamoamiz bilan tanishing",
                dianne: "Dianne Russell",
                dianne_job: "Asoschi va Bosh direktor",
                jerome: "Jerome Bell",
                jerome_job: "Asoschi va Dastur direktori",
                kristin: "Kristin Watson",
                kristin_job: "Marketolog, Marketing kursi kuratori",
                marvin: "Marvin McKinney",
                marvin_job: "Loyiha menejeri, Menejment kursi kuratori",
                leslie: "Leslie Alexander Li",
                leslie_job: "HR va Rekruting kursi kuratori",
                murphy: "Kathryn Murphy",
                murphy_job: "Analitik va Marketing mutaxassisi",
                brooklyn: "Brooklyn Simmons",
                brooklyn_job: "Dasturlash kursi kuratori",
                cody: "Cody Fisher",
                cody_job: "UX Dizayner, Dizayn kursi kuratori",
            },
            section7: {
                section7_name: "FIKR-MULOHAZALAR",
                section7_title: "Talabalarimiz nima deydi",
                comment:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet.",
                elenor: "Eleanor Pena",
                elenors: "Lavozim, Kurs",
            },
            section8: {
                section8_name: "SIZ UCHUN ENG YAXSHI ISHLAR",
                section8_title: "Talabalarimiz shu yerda ishlaydi",
                ourBlog: "BIZNING BLOG",
                latestPosts: "So'nggi maqolalar",
                goBlog: "Blogga o'tish",
                marketing: "Marketing",
                management: "Menejment",
                design: "Dizayn",
                september: "Sentabr",
                august: "Avgust",
                min: "daq",
                section8_card1_title:
                    "Trafik arbitraji nima va u haqiqatan ham daromad keltiradimi?",
                section8_card1_text:
                    "Pharetra, ullamcorper iaculis viverra parturient sed id sed.",
                listen: "Tinglash",
                watch: "Ko'rish",
                read: "O'qish",
                section8_card2_title:
                    "Mahsulot bo'yicha fikr olishni istasangiz nima qilish kerak?",
                section8_card2_text:
                    "Neque a, senectus consectetur odio in aliquet nec eu.",
                section8_card3_title:
                    "Ijodkorlikka qiziqsangiz, ijodiy kasbni tanlash kerakmi?",
                section8_card3_text:
                    "Curabitur nisl tincidunt eros venenatis vestibulum.",
                podcast: "Podkast",
                video: "Video",
                article: "Maqola",
            },
            section9: {
                dontmiss: "HECH NARSANI O'TKAZIB YUBORMANG",
                subscribeTitle: "Createx School yangiliklariga obuna bo'ling",
                subscribePlaceholder: "Ishchi emailingiz",
                subscribe_button: "Obuna bo'lish",
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
            },
            heroSection: {
                hero_name: "О НАС",
                heroTitle: "Онлайн-школа Createx",
                heroText:
                    "Онлайн-школа Createx — один из лидеров в сфере онлайн-обучения. У нас есть множество курсов и программ от ведущих экспертов рынка.",
                heroP: "Мы предлагаем современные подходы к онлайн-обучению, стажировкам и трудоустройству в крупнейших компаниях страны. Наши образовательные программы помогут вам освоить новую профессию с нуля. Во время обучения мы также поможем вам найти работу. Ознакомьтесь с нашими курсами и онлайн-мероприятиями.",
                explore_button: "Посмотреть мероприятия",
                browse_button: "Просмотреть курсы",
            },
            section2: {
                watchVideo: "Смотреть видео",
                desc1: "выпускников",
                desc2: "завершённых курсов",
                desc3: "квалифицированных преподавателей",
                desc4: "лет опыта",
            },
            section3: {
                section3_name: "НАШИ ОСНОВНЫЕ ЦЕННОСТИ",
                section3_title: "Наши ценности",
                section3_card1_title: "Структурный подход",
                section3_card1_text:
                    "Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.",
                section3_card2_title: "Профессиональная обратная связь",
                section3_card2_text:
                    "Culpa nostrud commodo ea consequat reprehenderit aliquip.",
                section3_card3_title: "Эффективность",
                section3_card3_text:
                    "Viverra scelerisque consequat net. Adipisicing esse consequat.",
                section3_card4_title: "Гибкий график",
                section3_card4_text:
                    "Aute eiusmod dolore dolore deserunt veniam ad deserunt.",
            },
            section4: {
                section4_name: "НАШИ ОСНОВНЫЕ НАПРАВЛЕНИЯ",
                section4_title: "Чему мы обучаем",
                marketing_button: "Маркетинг",
                management_button: "Менеджмент",
                recruting_button: "HR и Рекрутинг",
                design_button: "Дизайн",
                development_button: "Разработка",
                check_button: "Посмотреть курсы",
                section4_card_text:
                    "Odio posuere netus quisque faucibus lectus arcu donec.",
                section4_last_card: "Новая программа обучения скоро...",
            },
            section5: {
                section5_name: "ПРОЦЕСС ОБУЧЕНИЯ",
                section5_title: "Вот как это происходит",
                step: "ШАГ",
                step1_title: "Просмотр онлайн-видеолекций",
                step1_text:
                    "Aliquam turpis viverra quam sit interdum blandit posuere pellentesque.",
                step2_title: "Прохождение тестов",
                step2_text: "Facilisis pellentesque quis accumsan ultricies.",
                step3_title: "Обратная связь от куратора",
                step3_text: "Eget amet, enim pharetra leo egestas nisi.",
                step4_title: "Исправления при необходимости",
                step4_text: "Non tempor pulvinar tincidunt aliquam.",
            },
            section6: {
                section6_name: "ЛУЧШИЕ ПРЕПОДАВАТЕЛИ ЗДЕСЬ",
                section6_title: "Познакомьтесь с нашей командой",
                dianne: "Dianne Russell",
                dianne_job: "Основатель и Генеральный директор",
                jerome: "Jerome Bell",
                jerome_job: "Основатель и Директор программы",
                kristin: "Kristin Watson",
                kristin_job: "Маркетолог, куратор курса по маркетингу",
                marvin: "Marvin McKinney",
                marvin_job: "PM, куратор курса по менеджменту",
                leslie: "Leslie Alexander Li",
                leslie_job: "Куратор курса HR и Рекрутинга",
                murphy: "Kathryn Murphy",
                murphy_job: "Аналитик и специалист по маркетингу",
                brooklyn: "Brooklyn Simmons",
                brooklyn_job: "Куратор курса по разработке",
                cody: "Cody Fisher",
                cody_job: "UX-дизайнер, куратор курса по дизайну",
            },
            section7: {
                section7_name: "ОТЗЫВЫ",
                section7_title: "Что говорят наши студенты",
                comment:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                elenor: "Eleanor Pena",
                elenors: "Должность, Курс",
            },
            section8: {
                section8_name: "ЛУЧШИЕ ВАКАНСИИ ДЛЯ ВАС",
                section8_title: "Наши студенты работают здесь",
                ourBlog: "Наш блог",
                latestPosts: "Последние статьи",
                goBlog: "Перейти в блог",
                marketing: "Маркетинг",
                management: "Менеджмент",
                design: "Дизайн",
                september: "Сентябрь",
                august: "Август",
                min: "мин",
                section8_card1_title:
                    "Что такое арбитраж трафика и действительно ли он приносит деньги?",
                section8_card1_text:
                    "Pharetra, ullamcorper iaculis viverra parturient sed id sed.",
                listen: "Слушать",
                watch: "Смотреть",
                read: "Читать",
                section8_card2_title:
                    "Что делать и к кому обратиться, если вы хотите получить отзыв о продукте?",
                section8_card2_text:
                    "Neque a, senectus consectetur odio in aliquet nec eu.",
                section8_card3_title:
                    "Стоит ли выбирать творческую профессию, если вас привлекает творчество?",
                section8_card3_text:
                    "Curabitur nisl tincidunt eros venenatis vestibulum.",
                podcast: "Подкаст",
                video: "Видео",
                article: "Статья",
            },
            section9: {
                dontmiss: "НЕ ПРОПУСТИТЕ НИЧЕГО",
                subscribeTitle: "Подпишитесь на новости школы Createx",
                subscribePlaceholder: "Ваш рабочий email",
                subscribe_button: "Подписаться",
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
    // header
    function headerMainFunc() {
        const headerMain = document.querySelector("#headerMain");
        headerMain.innerHTML = `
    <div
        class=" w-full max-w-[1340px] mx-auto px-5 flex justify-between items-center py-5 relative"
    >
        <div class="flex items-center gap-7 md:gap-10">
            <div class="">
                <a href="../../index.html">
                    <img
                        src="../../Image/HomePagePhoto/logo.svg"
                        alt="logo image"
                    />
                </a>
            </div>
            <nav class="hidden lg:flex items-center gap-4 xl:gap-8">
                <a
                    href="../../feed/about/about.html"
                    class="font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateLang[currentLang].header.navAbout}</a>
                <a
                    href="../../feed/courses/courses.html"
                    class="font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateLang[currentLang].header.navCourses}</a>
                <a
                    href="../../feed/events/events.html"
                    class="font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateLang[currentLang].header.navEvents}</a>
                <a
                    href="../../feed/blogs/blogs.html"
                    class="font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateLang[currentLang].header.navBlog}</a>
                <a
                    href="../../feed/contacts/contacts.html"
                    class="font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateLang[currentLang].header.navContacts}</a>
            </nav>
        </div>
        <div class="flex items-center gap-3 md:gap-4">
            <div class="flex items-center gap-3 md:gap-4">
                <a
                    href="../../feed/contacts/contacts.html"
                    class="font-[Lato] font-bold text-[12px] leading-8 tracking-[0.5px] text-white bg-gradient-to-r from-[#FF3F3A] to-[#F75E05] px-5 rounded-[4px] hidden sm:inline-block hover:bg-gradient-to-l hover:from-[#F75E05] hover:to-[#FF3F3A]"
                >
                    ${translateLang[currentLang].header.getConsultation}
                </a>
                <div class="relative">
                    <button
                        class="loginModalBtn hidden lg:flex gap-2 items-center font-[Lato] font-bold text-3 lg:text-2 lg:leading-4 text-gray-800"
                    >
                        <img
                            src="../../Image/HomePagePhoto/Profile.svg"
                            alt="profile icon"
                            class="hidden xl:block"
                        />
                        ${translateLang[currentLang].header.loginRegister}
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
        <div id="burgerModal" class="absolute top-full left-0 px-5 w-full flex lg:hidden overflow-hidden transition-all duration-300 origin-top" style="transform: rotateX(90deg);">
            <nav class="flex flex-col bg-white w-full">
                <a
                    href="../../feed/about/about.html"
                    class="block w-full px-4 py-2 font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateLang[currentLang].header.navAbout}</a>
                <a
                    href="../../feed/courses/courses.html"
                    class="inline-block w-full px-4 py-2 font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateLang[currentLang].header.navCourses}</a>
                <a
                    href="../../feed/events/events.html"
                    class="inline-block w-full px-4 py-2 font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateLang[currentLang].header.navEvents}</a>
                <a
                    href="../../feed/blogs/blogs.html"
                    class="inline-block w-full px-4 py-2 font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateLang[currentLang].header.navBlog}</a>
                <a
                    href="../../feed/contacts/contacts.html"
                    class="inline-block w-full px-4 py-2 font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateLang[currentLang].header.navContacts}</a>
                <button
                    class="loginModalBtn flex lg:hidden gap-2 items-center w-full px-4 py-2 font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >
                    <img
                        src="../../Image/HomePagePhoto/Profile.svg"
                        alt="profile icon"
                        class="block"
                    />
                    ${translateLang[currentLang].header.loginRegister}
                </button>
                <div class="">
                    <a
                        href="../../feed/contacts/contacts.html"
                        class="font-[Lato] font-bold text-[12px] leading-8 tracking-[0.5px] text-white bg-gradient-to-r from-[#FF3F3A] to-[#F75E05] px-5 rounded-[4px] inline-block mx-4 my-2 sm:hidden hover:bg-gradient-to-l hover:from-[#F75E05] hover:to-[#FF3F3A]"
                    >
                        ${translateLang[currentLang].header.getConsultation}
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
                    <h1 id="signInUpTitle" class="text-center font-[Lato] font-bold text-[28px] leading-[150%] text-[#1E212C]">${translateLang[currentLang].header.signIn}</h1>
                    <p class="text-center font-[Lato] font-normal text-[14px] leading-[150%] text-[#787A80]">${translateLang[currentLang].header.signInP}</p>
                </div>
                <form class="flex flex-col gap-5 px-6">
                    <div id="fullNameDiv" class="hidden flex-col">
                        <label for="fullNameInput" class="font-[Lato] font-normal text-[14px] leading-[150%] text-[#424551] mb-2">${translateLang[currentLang].header.fullName}</label>
                        <input type="text" id="emailInput" placeholder="${translateLang[currentLang].header.yourFullName}" class="px-4 py-[13px] outline-none border border-[#D7DADD] focus:border-[#FF3F3A] focus:shadow-[0_0_8px_rgba(255,63,58,0.4)] rounded-[4px] font-[Lato] font-normal text-[16px] leading-[160%] text-black placeholder:text-[#9A9CA5]">
                    </div>
                    <div class="flex flex-col ">
                        <label for="emailInput" class="font-[Lato] font-normal text-[14px] leading-[150%] text-[#424551] mb-2">${translateLang[currentLang].header.email}</label>
                        <input type="text" id="emailInput" placeholder="${translateLang[currentLang].header.yourEmailAddress}" class="px-4 py-[13px] outline-none border border-[#D7DADD] focus:border-[#FF3F3A] focus:shadow-[0_0_8px_rgba(255,63,58,0.4)] rounded-[4px] font-[Lato] font-normal text-[16px] leading-[160%] text-black placeholder:text-[#9A9CA5]">
                    </div>
                    <div>
                        <label for="passwordInput" class="font-[Lato] font-normal text-[14px] leading-[150%] text-[#424551]">${translateLang[currentLang].header.password}</label>
                        <div class="relative w-full mt-2">
                            <input 
                                type="password" 
                                id="passwordInput"
                                placeholder="${translateLang[currentLang].header.passwordPlaceholder}"
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
                        <label for="emailInput" class="font-[Lato] font-normal text-[14px] leading-[150%] text-[#424551]">${translateLang[currentLang].header.confirmPassword}</label>
                        <div class="relative w-full mt-2">
                            <input 
                                type="password" 
                                id="confirmPasswordInput"
                                placeholder="${translateLang[currentLang].header.confirmPasswordPlaceholder}"
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
                            <span class="font-[Lato] font-normal text-[16px] leading-[160%] text-[#424551] select-none">${translateLang[currentLang].header.rememberMe}</span>
                        </label>
                        <div>
                            <a href="#!" class="font-[Lato] font-normal text-[14px] leading-[150%] text-[#FF3F3A] ">${translateLang[currentLang].header.forgotPassword}</a>
                        </div>
                    </div>
                    <div>
                        <button id="submitBtn" type="submit" class="w-full py-3 px-8 font-[Lato] font-bold text-[14px] tracking-[0.5px] text-white rounded-[4px] bg-gradient-to-r from-[#FF3F3A] to-[#F75E05] hover:bg-gradient-to-l hover:from-[#F75E05] hover:to-[#FF3F3A] hover:shadow-[0px_10px_20px_0px_rgba(255,63,58,0.35)] transition-all duration-300">
                            ${translateLang[currentLang].header.signIn}
                        </button>
                    </div>
                    <div class="flex items-center gap-1">
                        <p id="donthaveP" class="font-[Lato] font-normal text-[14px] leading-[150%] text-[#424551]">${translateLang[currentLang].header.dontHaveAnAccount}</p>
                        <button id="signInUp" type="button" class="font-[Lato] font-normal text-[14px] leading-[150%] text-[#FF3F3A]">${translateLang[currentLang].header.signUp}</button>
                    </div>
                </form>
                <div class="my-6 w-full h-[1px] bg-[#E5E8ED]"></div>
                <div class="px-6 flex flex-col items-center">
                    <p>${translateLang[currentLang].header.orSignInWith}</p>
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
                    signInUpTitle.innerHTML =
                        translateLang[currentLang].header.signUp;
                    signInP.innerHTML =
                        translateLang[currentLang].header.signUpP ||
                        translateLang[currentLang].header.signInP;

                    fullNameDiv.classList.replace("hidden", "flex");
                    confirmPasswordDiv.classList.replace("hidden", "block");
                    rememberDiv.classList.add("hidden");

                    submitBtn.innerHTML =
                        translateLang[currentLang].header.signUp;
                    donthaveP.innerHTML =
                        translateLang[currentLang].header.alreadyAnAccount;
                    signInUp.innerHTML =
                        translateLang[currentLang].header.signIn;
                } else {
                    signInUpTitle.innerHTML =
                        translateLang[currentLang].header.signIn;
                    signInP.innerHTML =
                        translateLang[currentLang].header.signInP;

                    fullNameDiv.classList.replace("flex", "hidden");
                    confirmPasswordDiv.classList.replace("block", "hidden");
                    rememberDiv.classList.remove("hidden");

                    submitBtn.innerHTML =
                        translateLang[currentLang].header.signIn;
                    donthaveP.innerHTML =
                        translateLang[currentLang].header.dontHaveAnAccount;
                    signInUp.innerHTML =
                        translateLang[currentLang].header.signUp;
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
                <img
                    src="${translateLang[targetLang].header.flag}"
                    alt="language button icon"
                />
                <span class="text-white text-[12px]">${translateLang[targetLang].header.langTitle}</span>
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
            src="${translateLang[currentLang].header.flag}"
            alt="language button icon"
        />
        <span class="downSpan transition-all duration-300">
            <img
                src="../../Image/HomePagePhoto/icon-park-solid--down-one.svg"
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

    // header end

    // heroSection start
    const hero = document.querySelector("#hero");
    hero.innerHTML = `
  <div class="w-full max-w-[1340px] mx-auto px-5 flex flex-col-reverse text-center items-center mt-20 mb-10 md:text-left md:flex md:flex-row md:justify-between md:items-start md:mb-14 lg:mt-34 lg:mb-24">
    <div>
        <h6 class="text-[#1E212C] font-bold text-base leading-[150%]">
            ${translateLang[currentLang].heroSection.hero_name}</h6>
        <h1 class="text-[#1E212C] font-bold text-2xl leading-[130%] sm:text-3xl lg:font-black lg:text-4xl">${translateLang[currentLang].heroSection.heroTitle}</h1>
        <h5 class="text-[#1E212C] font-bold text-base leading-[130%] mb-3 sm:leading-[150%] md:max-w-sm md:mt-7 md:mb-4 lg:text-xl lg:max-w-xl lg:mt-10 lg:mb-6">
             ${translateLang[currentLang].heroSection.heroText}</h5>
        <p class="text-[#424551] font-normal mb-5 leading-[130%] text-sm md:max-w-lg md:mb-8 lg:text-base lg:leading-[150%] lg:max-w-2xl lg:mb-14">
            ${translateLang[currentLang].heroSection.heroP}
        </p>
        <div class="flex flex-col items-center gap-[10px] sm:flex-row sm:mx-auto sm:mb-7 ml-0 sm:ml-32 md:ml-0">
            <a href="../Events/events.html">
                <button class="text-[#F75E05] border border-[#FF3F3A] hover:text-[white] hover:bg-[#FF3F3A] rounded-md transition-all duration-500 font-semibold leading-[40px] px-16 sm:px-[30px] lg:px-[40px]">
                    ${translateLang[currentLang].heroSection.explore_button}</button>
            </a>
            <a href="../Courses/courses.html">
                <button class="text-[#FFFFFF] bg-[#F75E05] border border-[#FF3F3A] hover:text-[#F75E05] hover:bg-[white] rounded-md transition-all duration-500 font-semibold leading-[40px] px-16 sm:px-[30px] lg:px-[40px]" >
                    ${translateLang[currentLang].heroSection.browse_button}</button>
            </a>
        </div>
    </div>
    <div>
        <img class="w-full object-contain mb-5 lg:max-w-[460px]"
             src="../../Image/aboutUs-photo/about.section1.img.png"/>
    </div>
</div>`;
    // heroSection end

    // section2 start
    const section2 = document.querySelector("#section2");
    section2.innerHTML = `
<div class="mx-auto flex flex-col items-center mb-7 md:flex-row md:gap-4 md:items-center">
    <a href="#" class="w-[52px] h-[52px] bg-[#FF3F3A] rounded-full flex justify-center items-center hover:ring-[16px] hover:ring-[#FEC8C0] transition-all duration-300">
        <img src="../../Image/aboutUs-photo/about.section2Video.img.png"/></a>
    <span>${translateLang[currentLang].section2.watchVideo}</span>
</div>
<div class="flex flex-col gap-6 items-center md:flex-row md:gap-14">
    <div>
        <img class="w-full object-contain"
             src="../../Image/aboutUs-photo/about.section2.img.png"/>
    </div>
    <div>
        <div class="flex gap-2 items-center md:mb-3 md:gap-4">
            <h1 class="text-[#FF3F3A] leading-[130%] text-2xl font-extrabold  sm:text-4xl lg:font-black lg:text-5xl">1200 </h1>
            <p class="text-[#1E212C] leading-[130%] font-semibold text-base lg:font-bold lg:text-lg">${translateLang[currentLang].section2.desc1}</p>
        </div>
        <div class="flex gap-2 items-center md:mb-3 md:gap-4">
            <h1 class="text-[#FF3F3A] leading-[130%] font-extrabold text-2xl sm:text-4xl lg:font-black lg:text-5xl">84</h1>
            <p class="text-[#1E212C] leading-[130%] font-semibold text-base lg:font-bold lg:text-lg">${translateLang[currentLang].section2.desc2}</p>
        </div>
        <div class="flex gap-2 items-center md:mb-3 md:gap-4">
            <h1 class="text-[#FF3F3A] font-extrabold leading-[130%] text-2xl sm:text-4xl lg:font-black lg:text-5xl" >16</h1>
            <p class="text-[#1E212C] leading-[130%] font-semibold text-base lg:font-bold lg:text-lg">${translateLang[currentLang].section2.desc3}</p>
        </div>
        <div class="flex gap-2 items-center md:mb-3 md:gap-4">
            <h1 class="text-[#FF3F3A] leading-[130%] font-extrabold text-2xl sm:text-4xl lg:font-black lg:text-5xl">5</h1>
            <p class="text-[#1E212C] leading-[130%] font-semibold text-base lg:font-bold lg:text-lg">${translateLang[currentLang].section2.desc4}</p>
        </div>
    </div>
</div>`;
    // section2 end

    // section3 start
    const section3 = document.querySelector("#section3");
    section3.innerHTML = `
 <div class="mx-auto items-center text-center mb-8 md:mb-8">
    <h6 class="text-[#1E212C] font-bold text-base leading-[150%]">
        ${translateLang[currentLang].section3.section3_name}</h6>
    <h1 class="text-[#1E212C] font-extrabold leading-[130%] text-2xl sm:text-3xl lg:font-black lg:text-4xl">${translateLang[currentLang].section3.section3_title}</h1>
</div>
<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 justify-between lg:grid-cols-4">
        <!-- birinchi -->
    <div class="mx-auto items-center text-center transition-all duration-300 hover:scale-105 sm:flex sm:flex-row sm:justify-between sm:ml-5 md:ml-10 lg:ml-0">
        <div>
            <img class="mb-3 mx-auto" src="../../Image/aboutUs-photo/about.section3.structure.svg"/>
            <h5 class="text-base font-bold leading-[150%] text-[#1E212C]">
                ${translateLang[currentLang].section3.section3_card1_title}</h5>
            <p class="text-base font-normal leading-[140%] text-[#787A80] w-full max-w-64">${translateLang[currentLang].section3.section3_card1_text}</p>
        </div>
        <div class="sm:border-r sm:border-grey-700 sm:h-36 sm:ml-12 lg:ml-4"></div>
    </div>
         <!-- ikkinchi -->
    <div class="mx-auto items-center text-center transition-all duration-300 hover:scale-105 lg:flex lg:flex-row">
        <div>
            <img class="mb-3 mx-auto" src="../../Image/aboutUs-photo/about.section3.chat.svg"/>
            <h5 class="text-base font-bold leading-[150%] text-[#1E212C]">
                ${translateLang[currentLang].section3.section3_card2_title}</h5>
            <p class="text-base font-normal leading-[140%] text-[#787A80] w-full max-w-64">${translateLang[currentLang].section3.section3_card2_text}</p>
        </div>
        <div class="lg:border-r lg:border-grey-700 lg:h-36 lg:ml-4"></div>
    </div>
        <!-- uchinchi -->
    <div class="mx-auto items-center text-center transition-all duration-300 hover:scale-105 sm:flex sm:flex-row sm:justify-between sm:ml-5 md:ml-10 lg:ml-0">
        <div>
            <img class="mb-3 mx-auto" src="../../Image/aboutUs-photo/about.section3.target.svg"/>
            <h5 class="text-base font-bold leading-[150%] text-[#1E212C]">
                ${translateLang[currentLang].section3.section3_card3_title}</h5>
            <p class="text-base font-normal leading-[140%] text-[#787A80] w-full max-w-64">${translateLang[currentLang].section3.section3_card3_text}</p>
        </div>
        <div class="sm:border-r sm:border-grey-700 sm:h-36 sm:ml-12 lg:ml-4"></div>
    </div>
        <!-- tortinchi -->
    <div class="mx-auto items-center text-center transition-all duration-300 hover:scale-105">
        <img class="mb-3 mx-auto" src="../../Image/aboutUs-photo/about.section3.calendar.svg"/>
        <h5 class="text-base font-bold leading-[150%] text-[#1E212C]">
            ${translateLang[currentLang].section3.section3_card4_title}</h5>
        <p class="text-base font-normal leading-[140%] text-[#787A80] w-full max-w-64">
            ${translateLang[currentLang].section3.section3_card4_text}</p>
    </div>
</div>`;
    // section3 end

    // our main direction start///////////////////////////////////////////////////
    const ourMainDirection = document.querySelector("#ourMainDirection");
    ourMainDirection.innerHTML = `
<div class="mx-auto items-center text-center mb-8 md:mb-8">
    <h6 class="text-[#1E212C] font-bold text-base leading-[150%]">
        ${translateLang[currentLang].section4.section4_name}</h6>
    <h1 class="text-[#1E212C] font-extrabold leading-[130%] text-2xl sm:text-3xl lg:font-black lg:text-4xl">${translateLang[currentLang].section4.section4_title}</h1>
</div>
<div class="grid grid-cols-1 gap-5 px-5 sm:px-0 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3">
         <!-- birinchi -->
    <div class="transition-all duration-300 hover:scale-105 mx-auto">
        <img class="w-full object-contain mx-auto"
             src="../../Image/aboutUs-photo/about.section4.card1.png"/>
        <div class="px-3 py-3 sm:px-6 sm:py-6 border border-[#E5E8ED]">
            <button class="bg-[#03CEA4] text-[#FFFFFF] hover:bg-[#ffffff] hover:text-[#03CEA4]  hover:border font-semibold text-base leading-[160%] rounded-[4px] px-2 mb-2 sm:mb-5">${translateLang[currentLang].section4.marketing_button}</button>
            <p class="font-normal text-base leading-[130%] text-[#424551] mb-2 sm:mb-5 sm:leading-[160%]">${translateLang[currentLang].section4.section4_card_text}</p>
            <a href="../Courses/courses.html" class="flex gap-3 items-center">
                <button class="font-semibold text-base leading-[160%] text-[#1E212C] hover:text-red-500">${translateLang[currentLang].section4.check_button}</button>
                <img src="../../Image/aboutUs-photo/about.section4.strelka.svg"/></a>
        </div>
    </div>
            <!-- ikkinchi -->
    <div class="transition-all duration-300 hover:scale-105 mx-auto">
        <img class="w-full object-contain mx-auto" 
             src="../../Image/aboutUs-photo/about.section4.card2.png"/>
        <div class="px-3 py-3 sm:px-6 sm:py-6 border border-[#E5E8ED]">
            <button class="bg-[#5A87FC] text-[#FFFFFF] hover:bg-[#ffffff] hover:text-[#5A87FC] hover:border font-semibold text-base leading-[160%] rounded-[4px] px-2 mb-2 sm:mb-5">${translateLang[currentLang].section4.management_button}</button>
            <p class="font-normal text-base leading-[130%] text-[#424551] mb-2 sm:mb-5 sm:leading-[160%]">${translateLang[currentLang].section4.section4_card_text}</p>
            <a href="../Courses/courses.html" class="flex gap-3 items-center">
                <button class="font-semibold text-base leading-[160%] text-[#1E212C] hover:text-red-500">${translateLang[currentLang].section4.check_button}</button>
                <img src="../../Image/aboutUs-photo/about.section4.strelka.svg"/></a>
        </div>
    </div>
            <!-- uchinchi -->
    <div class="transition-all duration-300 hover:scale-105 mx-auto">
        <img class="w-full object-contain mx-auto" 
             src="../../Image/aboutUs-photo/about.section4.card3.png"/>
        <div class="px-3 py-3 sm:px-6 sm:py-6 border border-[#E5E8ED]">
            <button class="bg-[#F89828] text-[#FFFFFF] hover:bg-[#ffffff] hover:text-[#F89828] hover:border font-semibold text-base leading-[160%] rounded-[4px] px-2 mb-2 sm:mb-5">${translateLang[currentLang].section4.recruting_button}</button>
            <p class="font-normal text-base leading-[130%] text-[#424551] mb-2 sm:mb-5 sm:leading-[160%]">${translateLang[currentLang].section4.section4_card_text}</p>
            <a href="../Courses/courses.html" class="flex gap-3 items-center">
                <button class="font-semibold text-base leading-[160%] text-[#1E212C] hover:text-red-500">${translateLang[currentLang].section4.check_button}</button>
                <img src="../../Image/aboutUs-photo/about.section4.strelka.svg"/></a>
        </div>
    </div>
            <!-- tortinchi -->
    <div class="transition-all duration-300 hover:scale-105 mx-auto">
        <img class="w-full object-contain mx-auto"
             src="../../Image/aboutUs-photo/about.section4.card4.png"/>
        <div class="px-3 py-3 sm:px-6 sm:py-6 border border-[#E5E8ED]">
            <button class="bg-[#F52F6E] text-[#FFFFFF] hover:bg-[#ffffff] hover:text-[#F52F6E] hover:border font-semibold text-base leading-[160%] rounded-[4px] px-2 mb-2 sm:mb-5">${translateLang[currentLang].section4.design_button}</button>
            <p class="font-normal text-base leading-[130%] text-[#424551] mb-2 sm:mb-5 sm:leading-[160%]">${translateLang[currentLang].section4.section4_card_text}</p>
            <a href="../Courses/courses.html" class="flex gap-3 items-center">
                <button class="font-semibold text-base leading-[160%] text-[#1E212C] hover:text-red-500">${translateLang[currentLang].section4.check_button}</button>
                <img src="../../Image/aboutUs-photo/about.section4.strelka.svg"/></a>
        </div>
    </div>
        <!-- beshinchi -->
    <div class="transition-all duration-300 hover:scale-105 mx-auto">
        <img class="w-full object-contain mx-auto"
            src="../../Image/aboutUs-photo/about.section4.card5.png"/>
        <div class="px-3 py-3 sm:px-6 sm:py-6 border border-[#E5E8ED]">
            <button class="bg-[#7772F1] text-[#FFFFFF] hover:bg-[#ffffff] hover:text-[#7772F1] hover:border font-semibold text-base leading-[160%] rounded-[4px] px-2 mb-2 sm:mb-5">${translateLang[currentLang].section4.development_button}</button>
            <p class="font-normal text-base leading-[130%] text-[#424551] mb-2 sm:mb-5 sm:leading-[160%]">${translateLang[currentLang].section4.section4_card_text}</p>
            <a href="../Courses/courses.html" class="flex gap-3 items-center">
                <button class="font-semibold text-base leading-[160%] text-[#1E212C] hover:text-red-500">${translateLang[currentLang].section4.check_button}</button>
                <img src="../../Image/aboutUs-photo/about.section4.strelka.svg"/></a>
        </div>
    </div>
            <!-- oltinchi -->
    <div class="bg-[#F4F5F6] mx-auto items-center text-center w-full h-auto transition-all      duration-300 hover:scale-105">
        <p class="mx-auto font-semibold text-sm md:text-xl leading-[150%] max-w-60 py-14 text-[#424551] sm:mt-40 sm:py-0">${translateLang[currentLang].section4.section4_last_card}</p>
    </div>
</div>`;
    // our main direction end

    // studying process start//////////////////////////////////////////////////////////////////////
    const process = [
        {
            step: `${translateLang[currentLang].section5.step} 1`,
            stepTitle: translateLang[currentLang].section5.step1_title,
            stepText: translateLang[currentLang].section5.step1_text,
        },
        {
            step: `${translateLang[currentLang].section5.step} 2`,
            stepTitle: translateLang[currentLang].section5.step2_title,
            stepText: translateLang[currentLang].section5.step2_text,
        },
        {
            step: `${translateLang[currentLang].section5.step} 3`,
            stepTitle: translateLang[currentLang].section5.step3_title,
            stepText: translateLang[currentLang].section5.step3_text,
        },
        {
            step: `${translateLang[currentLang].section5.step} 4`,
            stepTitle: translateLang[currentLang].section5.step4_title,
            stepText: translateLang[currentLang].section5.step4_text,
        },
    ];

    const newProcess = process
        .map(
            (item) => `
<div class="relative flex gap-6 pb-5">
    <div class="w-2 h-2 rounded-full mt-2 bg-[#FF3F3A] shrink-0"></div>
    <div>
        <span class="text-xs text-[#787A80] font-black leading-[150%]" >${item.step}</span>
        <h3 class="text-xl font-bold leading-[150%] text-[#1E212C]">${item.stepTitle}</h3>
        <p class="text-[#787A80] font-normal text-base leading-[160%]">${item.stepText}</p>
    </div>
</div>`,
        )
        .join("");

    const studyingProcess = document.querySelector("#studyingProcess");
    studyingProcess.innerHTML = `
 <div>
    <div class="mb-5 md:mb-10">
        <h6 class="text-[#1E212C] font-bold text-base leading-[150%]" >
            ${translateLang[currentLang].section5.section5_name}</h6>
        <h1 class="text-[#1E212C] font-bold text-2xl leading-[130%] sm:text-3xl lg:font-black lg:text-4xl">${translateLang[currentLang].section5.section5_title}</h1>
    </div>
    <div class="relative">
        <div class="absolute left-1 top-2 bottom-2 border bg-[#9A9CA5]" ></div>
        ${newProcess}
    </div>
</div>
<div>
    <img class="w-full object-contain max-h-[500px] mb-5 md:mb-0" 
        src="../../Image/aboutUs-photo/illustration.png"/>
</div>`;
    // studying process end///////////////////////////////////////////////////////////////////////////

    // best tutors start/////////////////////////////////////////////////////////////////////////////
    const tutors = [
        {
            image: "../../Image/aboutUs-photo/person1.png",
            name: translateLang[currentLang].section6.jerome,
            job: translateLang[currentLang].section6.jerome_job,
        },
        {
            image: "../../Image/aboutUs-photo/person7.png",
            name: translateLang[currentLang].section6.kristin,
            job: translateLang[currentLang].section6.kristin_job,
        },
        {
            image: "../../Image/aboutUs-photo/person2.png",
            name: translateLang[currentLang].section6.marvin,
            job: translateLang[currentLang].section6.marvin_job,
        },
        {
            image: "../../Image/aboutUs-photo/person3.png",
            name: translateLang[currentLang].section6.leslie,
            job: translateLang[currentLang].section6.leslie_job,
        },
        {
            image: "../../Image/aboutUs-photo/person4.png",
            name: translateLang[currentLang].section6.murphy,
            job: translateLang[currentLang].section6.murphy_job,
        },
        {
            image: "../../Image/aboutUs-photo/person5.png",
            name: translateLang[currentLang].section6.brooklyn,
            job: translateLang[currentLang].section6.brooklyn_job,
        },
        {
            image: "../../Image/aboutUs-photo/person6.png",
            name: translateLang[currentLang].section6.cody,
            job: translateLang[currentLang].section6.cody_job,
        },
        {
            image: "../../Image/aboutUs-photo/person1.png",
            name: translateLang[currentLang].section6.jerome,
            job: translateLang[currentLang].section6.jerome_job,
        },
    ];

    const peopleCards = tutors
        .map(
            (person) => `
<div class="group w-auto">
    <div class="bg-[#FFCF2D] rounded-md">
        <div class="relative overflow-hidden rounded">
            <img src="${person.image}" class="w-full object-contain px-2 pt-2 md:px-5 md:pt-5"/>
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
            </div>
            <div class="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <a href="#"><img src="../../Image/aboutUs-photo/1.svg"></a>
                <a href="#"><img src="../../Image/aboutUs-photo/2.svg"></a>
                <a href="#"><img src="../../Image/aboutUs-photo/Linked-In.svg"></a>
            </div>
        </div>
    </div>
    <div class="text-center mt-2">
        <h3 class="font-medium text-xs md:font-semibold md:text-lg text-[#424551]">
            ${person.name}</h3>
        <p class="text-xs md:text-base text-[#787A80]">${person.job}</p>
    </div>
</div>`,
        )
        .join("");
    const bestTutors = document.querySelector("#bestTutors");
    bestTutors.innerHTML = `
<div class="mx-auto text-center mb-8">
    <h6 class="text-[#1E212C] font-bold text-base leading-[150%]">${translateLang[currentLang].section6.section6_name}</h6>
    <h1 class="text-[#1E212C] font-extrabold leading-[130%] text-2xl sm:text-3xl  lg:font-black lg:text-4xl">${translateLang[currentLang].section6.section6_title}</h1>
</div>
<div class="grid grid-cols-2 gap-5 md:grid-cols-4">${peopleCards}</div>`;
    // best tutors end/////////////////////////////////////////////////////////////////////////////////

    // testimonials start
    const testimonials = document.querySelector("#testimonials");
    testimonials.innerHTML = `
 <div class="w-full max-w-[1340px] mx-auto px-5">
    <div class="mx-auto items-center text-center mb-5 md:mb-8">
        <h6 class="text-[#1E212C] font-bold text-base leading-[150%]">
         ${translateLang[currentLang].section7.section7_name}</h6>
        <h1 class="text-[#1E212C] font-extrabold leading-[130%] text-2xl sm:text-3xl lg:font-black lg:text-4xl">${translateLang[currentLang].section7.section7_title}</h1>
    </div>
    <div class="md:py-6">
        <div class="relative flex justify-between items-center">
            <!-- Prev -->
            <div class="swiper-button-prev !left-0 active:text-[#FFFFFF] text-[#424551] after:!w-6 !h-6"></div>
            <div class="swiper w-full max-w-lg lg:max-w-4xl overflow-hidden">
                <div class="swiper-wrapper">
                    <div class="swiper-slide w-auto mx-auto bg-[#FFFFFF] p-5 lg:p-10 rounded shadow-lg">
                        <div class="flex gap-3 md:gap-6">
                            <img class="w-5 h-5 md:w-7 md:h-7"
                                 src="../../Image/aboutUs-photo/braces.svg" />
                            <div>
                                <p class="text-[#424551] text-sm leading-5">
                                    ${translateLang[currentLang].section7.comment}</p>
                                <div class="flex items-center gap-4 mt-5">
                                    <img src="../../Image/aboutUs-photo/commentor-img2.png"
                                        class="w-16 h-16 rounded-full"/>
                                    <div>
                                        <h3 class="font-bold">
                                            ${translateLang[currentLang].section7.elenor}</h3>
                                        <p class="text-gray-500 text-sm">
                                            ${translateLang[currentLang].section7.elenors}</p>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
                                    <!-- Ikkinchi slide -->
                    <div class="swiper-slide w-auto mx-auto bg-[#FFFFFF] p-5 lg:p-10 rounded shadow-lg">
                        <div class="flex gap-3 md:gap-6">
                            <img class="w-5  h-5 md:w-7 md:h-7"
                                    src="../../Image/aboutUs-photo/braces.svg" />
                            <div>
                                <p class="text-[#424551] text-sm leading-5">
                                 ${translateLang[currentLang].section7.comment}</p>
                                <div class="flex items-center gap-4 mt-5">
                                    <img src="../../Image/aboutUs-photo/commentor-img1.jpg"
                                         class="w-16 h-16 rounded-full"/>
                                    <div>
                                        <h3 class="font-bold">Courtney Alexander</h3>
                                        <p class="text-gray-500 text-sm">
                                           ${translateLang[currentLang].section7.elenors}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Next -->
            <div class="swiper-button-next !right-0 -mr-5 active:text-[#FFFFFF] text-[#424551] after:!w-6 !h-6"></div>
        </div> 
    </div>
</div>`;

    const swiper = new Swiper(".swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
        },
    });
    // testimonials end

    // BEST JOBS START////////////////////////////////////////////////////////////////////////////////
    const images = [
        {
            image: "https://createx.createx.studio/assets/img/online-courses/logo/albatron.svg",
        },
        {
            image: "https://createx.createx.studio/assets/img/online-courses/logo/orbis.svg",
        },
        {
            image: "https://createx.createx.studio/assets/img/online-courses/logo/rain-x.svg",
        },
        {
            image: "https://createx.createx.studio/assets/img/online-courses/logo/curtis.svg",
        },
        {
            image: "https://createx.createx.studio/assets/img/online-courses/logo/tesla.svg",
        },
        {
            image: "https://createx.createx.studio/assets/img/online-courses/logo/bassett-furniture.svg",
        },
        {
            image: "https://createx.createx.studio/assets/img/online-courses/logo/lotte-g.svg",
        },
        {
            image: "https://createx.createx.studio/assets/img/online-courses/logo/lotte-g.svg",
        },
        {
            image: "https://createx.createx.studio/assets/img/online-courses/logo/x-rite.svg",
        },
        {
            image: "https://createx.createx.studio/assets/img/online-courses/logo/wisecat.svg",
        },
        {
            image: "https://createx.createx.studio/assets/img/online-courses/logo/gabor.svg",
        },
        {
            image: "https://createx.createx.studio/assets/img/online-courses/logo/exxon.svg",
        },
    ];
    const imageCards = images
        .map(
            (item) => `
<img src="${item.image}" 
     class="mx-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"/>`,
        )
        .join("");

    const bestJobs = document.querySelector("#bestJobs");
    bestJobs.innerHTML = `
<div class="w-full max-w-[1340px] mx-auto px-5">
    <div class="mx-auto items-center text-center mb-5 md:mb-8">
        <h6 class="text-[#1E212C] font-bold text-base leading-[150%]">
        ${translateLang[currentLang].section8.section8_name}</h6>
        <h1 class="text-[#1E212C] font-extrabold text-xl sm:leading-[130%] sm:text-3xl lg:font-black lg:text-4xl">${translateLang[currentLang].section8.section8_title}</h1>
    </div>
    <div class="grid grid-cols-4 gap-4 md:grid-cols-6 md:gap-6">${imageCards}</div>
</div>`;
    // best jobs end/////////////////////////////////////////////////////////////////////

    // our blog start
    const ourBlog = document.querySelector("#ourBlog");
    ourBlog.innerHTML = `
<div class="w-full max-w-[1340px] mx-auto px-5">
    <div class="mx-auto mb-5 md:mb-10">
        <h6 class="text-[#1E212C] font-bold text-base leading-[150%]">
            ${translateLang[currentLang].section8.ourBlog}</h6>
        <div class="flex justify-between items-center">
            <h1 class="text-[#1E212C] font-extrabold text-xl sm:leading-[130%] sm:text-3xl lg:font-black lg:text-4xl">${translateLang[currentLang].section8.latestPosts}</h1>
            <a href="../Blogs/blogs.html">
                <button class="bg-[#F75E05] text-white px-4 md:py-2 md:px-7 rounded hover:bg-white hover:text-[#F75E05] hover:border border-[#F75E05]" >
                  ${translateLang[currentLang].section8.goBlog}</button>
            </a>
        </div>
    </div>

    <div class="swiper swiper3">
        <div class="swiper-wrapper">
            ${allBlogPosts
                .slice(0, 3)
                .map((post) => {
                    return `
            <div class="swiper-slide group">
                <div class="w-full h-auto rounded-[4px] relative mb-4 overflow-hidden">
                    <a href="#!" class="inline-block w-full h-full overflow-hidden rounded">
                        <img src="${post.img}" class="w-full h-full object-cover rounded group-hover:scale-110 transition-all duration-300"/>
                        <div class="py-[1px] px-2 bg-white rounded flex items-center gap-1 absolute top-3 left-3">
                            <img src="${post.en.type === "Podcast" ? "../../Image/HomePagePhoto/microphone.svg" : post.en.type === "Article" ? "../../Image/HomePagePhoto/article.svg" : "../../Image/HomePagePhoto/videoType.svg"}"/>
                            <span>${post[currentLang].type}</span>
                        </div>
                    </a>
                </div>
                <div>
                    <div class="flex flex-wrap gap-3 mb-2">
                        <span class="flex items-center font-bold text-sm leading-[150%] text-[#787A80]">${post[currentLang].category} 
                            <span class="inline-block w-[1px] h-3 bg-[#787A80] rounded-[1px] ml-3"></span></span>
                        <div class="flex items-center gap-2">
                            <img src="../../Image/HomePagePhoto/Calendar.svg" />
                            <span class="flex items-center whitespace-nowrap font-bold text-sm leading-[150%] text-[#787A80]">${post[currentLang].date}
                                <span class="inline-block w-[1px] h-3 bg-[#787A80] rounded-[1px] ml-3"></span>
                            </span>
                        </div>
                        <span class="flex items-center gap-2 whitespace-nowrap font-bold text-sm leading-[150%] text-[#787A80]">
                            <img src="../../Image/HomePagePhoto/Clock.svg"/>
                                ${post[currentLang].duration} </span>
                    </div>
                    <div>
                        <a href="#" class="font-bold text-xl leading-[150%] text-[#1E212C] hover:text-[#ff3f3a] transition-all duration-300">${post[currentLang].title}</a>
                        <p class="line-clamp-2 font-normal text-base leading-[160%] text-[#424551] mt-2 mb-4">${post[currentLang].description}</p>
                        <a href="/feed/blogs/blogs.html" class="font-bold text-base leading-[160%] text-[#1E212C] hover:text-[#ff3f3a] transition-all duration-300 flex items-center gap-2 hover:gap-4">${post[currentLang].action} 
                            <img src="../../Image/HomePagePhoto/right.svg" /></a>
                    </div>
                </div>
            </div>`;
                })
                .join(" ")}
            </div>
            <div class="customPaginat flex items-center justify-center gap-3 mt-10 [&>.swiper-pagination-bullet]:!w-8 [&>.swiper-pagination-bullet]:!h-1 [&>.swiper-pagination-bullet]:!bg-[#B3B7BC] [&>.swiper-pagination-bullet]:!opacity-100 [&>.swiper-pagination-bullet]:!rounded-full [&>.swiper-pagination-bullet]:!m-0 [&>.swiper-pagination-bullet]:transition-all [&>.swiper-pagination-bullet]:duration-300 [&>.swiper-pagination-bullet.swiper-pagination-bullet-active]:!bg-[#424551]">  
            </div>
        </div>
    </div>
</div>`;
    var swiperr = new Swiper(".swiper3", {
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
    // our blog end

    //  Subscribe Section start
    const subscribe = document.querySelector("#subscribe");
    subscribe.innerHTML = `
<div class="w-full max-w-[1300px] mx-auto px-5 flex flex-col items-center justify-center py-10 sm:py-20">
    <div class="flex flex-col items-center text-center mb-10">
        <h6 class="text-[#1E212C] font-bold text-base leading-[150%]">
            ${translateLang[currentLang].section9.dontmiss}</h6>
        <h1 class="text-[#1E212C] font-extrabold text-xl sm:leading-[130%] sm:text-3xl lg:font-black lg:text-4xl">${translateLang[currentLang].section9.subscribeTitle}</h1>
    </div>
    <div class="w-full text-center">
        <form action="#" class="flex items-center justify-center gap-2 sm:gap-5 w-full max-w-[600px] mx-auto">
            <input class="px-4 py-2.5 w-full md:max-w-[268px] lg:max-w-[320px] xl:max-w-[400px] rounded" type="email"
                placeholder="${translateLang[currentLang].section9.subscribePlaceholder}"/>
            <button class="bg-[#FF3F3A] w-full md:w-auto text-white font-bold leading-[43px] px-5 rounded">
            ${translateLang[currentLang].section9.subscribe_button}</button>
        </form>
    </div>
</div>`;
    // Subscribe Section end

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
                    <input type="email" placeholder="${translateLang[currentLang].footer.signUpNewsLatterPlaceholder}" class="flex-1 pr-3 bg-transparent font-normal text-[12px] leading-[150%] text-white focus:text-black outline-none placeholder:text-[#A5A6AB]">
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
