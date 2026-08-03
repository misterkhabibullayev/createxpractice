import { allEvents } from "../../../AllEvents.js";

window.addEventListener("DOMContentLoaded", () => {
    const locale = {
        en: {
            hero: {
                info: {
                    badge: "Online lecture",
                    title: "Formation of the organizational structure of the company in the face of uncertainty",
                },

                decoration: {
                    dec1: "../../../Image/course-images/hero/arrow-right.png",
                    dec2: "../../../Image/course-images/hero/circles.png",
                    dec3: "../../../Image/course-images/hero/dots.png",
                    dec4: "../../../Image/course-images/hero/up.png",
                },
            },
            talkAbout: {
                intro: "We will talk about:",
            },
            benefits: {
                intro: {
                    badge: "For whom?",
                    title: "Who will benefit from the event:",
                },
                coreBenefit: [
                    {
                        icon: "../../../Image/course-images/aboutTheCourse/check.png",
                        these: "Specialists with more than 1 year of active work experience",
                    },
                    {
                        icon: "../../../Image/course-images/aboutTheCourse/check.png",
                        these: "Mobile app designers who want to improve their skills in solving business problems, creating and testing human-centered interfaces",
                    },
                    {
                        icon: "../../../Image/course-images/aboutTheCourse/check.png",
                        these: "Professional designers who want to feel more confident in UX",
                    },
                ],
            },
            subscribeNoSkip: {
                image: "../../../Image/eventSingle/illustration.png",
                intro: {
                    title: "Don’t want to miss the best events? Subscribe to our newsletter!",
                },
                input: {
                    inpPlaceholder: "Your working email",
                    button: "Subscribe",
                    button: "Subscribe",
                    agreement:
                        "I agree to receive communications from Createx Online School",
                },
            },
        },
    };

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
            testimonials: "Testimonials",
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

    function updateHeader() {
        const headerMain = document.querySelector("#headerMain");
        headerMain.innerHTML = `
    <div
        class="w-full max-w-[1300px] mx-auto px-5 flex justify-between items-center py-5"
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
                    href="../../About/about.html""
                    class="font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300 whitespace-nowrap"
                >${translateData[currentLang].navAbout}</a>
                <a
                    href="../../Courses/courses.html"
                    class="font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateData[currentLang].navCourses}</a>
                <a
                    href="../../Events/events.html"
                    class="font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateData[currentLang].navEvents}</a>
                <a
                    href="../../Blog/events.html"
                    class="font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateData[currentLang].navBlog}</a>
                <a
                    href="../../Contacts/events.html"
                    class="font-[Lato] font-bold text-[16px] leading-[160%] text-[#424551] hover:text-[#FF3F3A] transition-all duration-300"
                >${translateData[currentLang].navContacts}</a>
            </nav>
        </div>
        <div class="flex items-center gap-3 md:gap-4">
            <div class="flex items-center gap-3 md:gap-4">
                <a
                    href="./Pages/Contacts/contacts.html"
                    class="font-[Lato] font-bold text-[12px] py-3 leading-4 tracking-[0.5px] text-white bg-gradient-to-r from-[#FF3F3A] to-[#F75E05] px-5 lg:px-3 rounded-[4px] hidden sm:inline-block hover:bg-gradient-to-l hover:from-[#F75E05] hover:to-[#FF3F3A]"
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
                    src="../../../Image/HomePagePhoto/stash--burger-classic-light.svg"
                    alt="burger icon"
                />
            </button>
        </div>
    </div>
`;
    }
    updateHeader();

    // *************** Hero section ***************
    const heroContainer = document.getElementById("hero-container");
    function updateHero() {
        const heroData = locale[currentLang].hero.info;
        const heroDecorationData = locale[currentLang].hero.decoration;

        const badge = document.getElementById("hero-badge");
        const title = document.getElementById("hero-title");
        badge.className =
            "text-center text-[#FF3F3A] font-bold uppercase leading-[150%] tracking-[1px] mb-3 pt-[120px]";
        title.className =
            "font-black text-[#1E212C] text-3xl md:text-4xl xl:text-5xl text-center xl:leading-[130%] pb-[120px] selection:bg-[#F5A99F] selection:text-black";

        badge.innerHTML = heroData.badge;
        title.innerHTML = heroData.title;

        heroContainer.appendChild(badge);
        heroContainer.appendChild(title);
    }
    updateHero();
    // *************** Hero section ***************

    // *************** TALK ABOUT SECTION ***************
    const TALKABOUT = document.getElementById("TALKABOUT");
    function updateTalkAbout() {
        const eventWithId0 = allEvents.find((event) => event.id === 0);

        const talkAboutContent = document.createElement("div");
        talkAboutContent.className = "flex flex-col md:flex-row";
        talkAboutContent.classList.add("talkAbout-content");
        TALKABOUT.appendChild(talkAboutContent);

        let talkAboutHTML = "";
        talkAboutHTML += `
            <div class='px-4 w-full md:max-w-[400px] lg:max-w-[550px] xl:max-w-[600px]'>
                    <h2 class='text-3xl pb-0 md:text-4xl lg:text-5xl font-black md:pb-4 mb-6'>${eventWithId0.whatwilltalkabout[currentLang].title}</h2>


                    <div class='flex flex-col gap-3 md:max-w-[450px] xl:max-w-full'> 
                        ${eventWithId0.whatwilltalkabout[currentLang].themes
                            .map(
                                (event) => `
                            <div class='program-button flex items-center gap-2 xl:gap-3 text-[rgb(255,63,58)]'>
                                   
                                    <button class='minusBtn max-[580px]:self-start relative w-[18px] h-[18px] flex-shrink-0 '>
                                        <span class="absolute top-1/2 left-0 -translate-y-1/2 w-[18px] h-[2px] bg-[rgb(255,63,58)]"></span>

                                        <span class="vertical absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[18px] bg-[rgb(255,63,58)]"></ span>

                                    </button>
                                    

                                    <p class='w-full text-xl text-[rgb(255,63,58)]'>${event.theme} <span class='button-line-text text-black ml-2 font-bold'>${event.themeTitle}</span></p>
                            
                            </div>

                            <div class='program-description overflow-hidden max-h-0 md:pl-[21px] md:text-start lg:max-w-[414px] xl:max-w-[560px] pl-[42px] mb-5 transition-all duration-500 ease-in-out'>
                                    <p>${event.description}</p>
                            </div>

                        `,
                            )
                            .join(" ")}
                    </div>

                </div>
      `;
        talkAboutContent.innerHTML = talkAboutHTML;

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
        }
        lessonFunction();

        function updateDates() {
            const talkAboutContent =
                document.querySelector(".talkAbout-content");
            const dates = document.createElement("div");
            dates.className = "flex-1";
            let datesHTML = "";

            talkAboutContent.appendChild(dates);

            const eventWithId0 = allEvents.find((event) => event.id === 0);

            datesHTML = `
        <div id="dates-container" class="dates-container flex flex-col h-fit   md:mx-[15px] p-6 shadow-2xl max-[992px]:w-full max-[992px]:ml-[0px] min-[992px]:ml-[80px] lg:max-w-[350px] xl:max-w-[505px] lg:ml-[80px] xl:ml-[105px]">
           <div class='w-full px-2 pt-4 mb-4'>
           <h6 class='font-bold tracking-[1px] uppercase'>${eventWithId0.eventAbout[currentLang].timeTitle}</h6>
           <div class="flex items-center max-[947px]:flex max-[947px]:flex-col max-[947px]:items-start text-[rgb(255,63,58)] text-2xl font-bold mb-2">
          <h4 class="mr-1">August,</h4>
           <p>${eventWithId0.eventAbout[currentLang].talkStartTime} - ${eventWithId0.eventAbout[currentLang].talkEndTime}</p>
           </div>

           <p class='text-[rgb(66,69,81)]'>${eventWithId0.eventAbout[currentLang].timeDescription}</p>
           </div>

          <div class='px-2 pt-4 mb-4'>
           <h6 class='font-bold tracking-[1px] uppercase'>${eventWithId0.eventAbout[currentLang].priceTitle}</h6>

           <p class='text-2xl text-[rgb(255,63,58)] font-bold mb-2'>${eventWithId0.eventAbout[currentLang].price}</p>
           <p class='text-[rgb(66,69,81)]'>${eventWithId0.eventAbout[currentLang].priceDescription}</p>
           </div>

           <div>
              <a class="text-[rgb(255,63,58)] font-bold underline uppercase leading-[21px]">${eventWithId0.eventAbout[currentLang].eventOn}</a>
           </div>
           
            <div class='text-center px-2 pt-6 mb-4'>
            <button class='w-full px-8 py-2.5 bg-gradient-to-r from-[#FF3F3A] hover:shadow-xl to-[#F75E05] text-white rounded shadow-lg shadow-[#FF3F3A]/40 transition-all duration-300 hover:shadow-[#FF3F3A]/50'>${eventWithId0.eventAbout[currentLang].joinEvent}</button>
            </div>
        </div>
      `;

            dates.innerHTML = datesHTML;
        }
        updateDates();
    }
    updateTalkAbout();

    // *************** SPEAKER SECTION ***************
    function updateSpeaker() {
        const eventWithId0 = allEvents.find((event) => event.id === 0);

        const SPEAKER = document.createElement("div");
        SPEAKER.className =
            "w-full max-w-[1340px] mx-auto px-5 pt-[92px] pb-[48px]";
        TALKABOUT.appendChild(SPEAKER);

        // Tutor part is here starts ↓
        SPEAKER.className =
            "SPEAKER flex flex-col-reverse items-stretch sm:flex-row mt-[96px] pb-[48px] sm:justify-between";

        const tutorImageContainer = document.createElement("div");
        tutorImageContainer.className = "w-full sm:w-[45%]";
        const tutorImage = document.createElement("img");
        tutorImage.className = "w-full h-full object-cover";
        tutorImage.src = eventWithId0.tutorAbout.img;
        tutorImage.alt = "Course Tutor image";

        tutorImageContainer.appendChild(tutorImage);
        SPEAKER.appendChild(tutorImageContainer);

        //
        const speakerCourseInfo = document.createElement("div");
        speakerCourseInfo.className = "w-full sm:w-[50%]";
        const tutorInfoBadge = document.createElement("h6");
        tutorInfoBadge.textContent =
            eventWithId0.tutorAbout[currentLang].subtitle;
        tutorInfoBadge.className =
            "mb-2 text-[rgb(30,33,44)] uppercase font-bold mt-[30px]";

        const tutorName = document.createElement("h1");
        tutorName.className =
            "mb-4 text-3xl lg:text-4xl xl:text-5xl font-bold ";
        tutorName.textContent = eventWithId0.tutorAbout[currentLang].name;

        const tutorProfession = document.createElement("p");
        tutorProfession.className = "pb-2 mb-6 text-xl ";
        tutorProfession.textContent =
            eventWithId0.tutorAbout[currentLang].jobTitle;

        const aboutCourse = document.createElement("p");
        aboutCourse.className = "text-[rgb(66,69,81)] pb-4 mb-6 w-full";
        aboutCourse.textContent =
            eventWithId0.tutorAbout[currentLang].description;

        // const speakerDescription = document.createElement('p');
        // speakerDescription.textContent = eventWithId0.tutorAbout[currentLang].description;

        const socialMediaHTML = `
        <div class='flex items-center gap-4'>
              ${Object.values(eventWithId0.tutorAbout.socialLinks)
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

        const courseInfoRateCoursesStudentsContainer =
            document.createElement("div");
        courseInfoRateCoursesStudentsContainer.className =
            "pb-2 mb-4 md:pb-4 md:mb-4 flex gap-4";

        let speakerCollaboration = "";

        Object.values(eventWithId0.tutorAbout.partners).forEach((info) => {
            const svg = info.svg.replace(
                "<svg",
                `<svg class="w-[105px] h-[50px] max-[760px]:w-[52px] max-[760px]:h-[25px] block"`,
            );

            speakerCollaboration += `
            <div class="w-[105px] h-[50px] max-[760px]:w-[52px] max-[760px]:h-[25px] flex           items-center justify-center overflow-visible">
                     <a class="${info.hoverColor} cursor-pointer">
                         ${svg}
                     </a>
            </div>
    `;
        });

        speakerCourseInfo.appendChild(tutorInfoBadge);
        speakerCourseInfo.appendChild(tutorName);
        speakerCourseInfo.appendChild(tutorProfession);
        speakerCourseInfo.appendChild(aboutCourse);
        courseInfoRateCoursesStudentsContainer.insertAdjacentHTML(
            "beforeend",
            speakerCollaboration,
        );
        speakerCourseInfo.appendChild(courseInfoRateCoursesStudentsContainer);
        SPEAKER.appendChild(speakerCourseInfo);
        speakerCourseInfo.insertAdjacentHTML("beforeend", socialMediaHTML);

        TALKABOUT.appendChild(SPEAKER);
    }
    updateSpeaker();
    // *************** SPEAKER SECTION ***************

    // *************** Who benefits section ***************
    function updateBenefit() {
        const eventWithId0 = allEvents.find((event) => event.id === 0);
        const benefitData = locale[currentLang].benefits;

        const BENEFITS = document.createElement("div");
        BENEFITS.classList.add("BENEFITS");
        BENEFITS.className = "pt-[96px]";
        TALKABOUT.appendChild(BENEFITS);

        console.log(TALKABOUT);

        const badge = document.createElement("h6");
        badge.innerHTML = benefitData.intro.badge;
        badge.className =
            "font-bold uppercase text-[rgb(30,33,44)] mb-2 pl-[15px]";
        BENEFITS.appendChild(badge);

        const benefitsContent = document.createElement("div");
        benefitsContent.className =
            "benefit-content flex flex-col md:flex-row md:items-start";
        BENEFITS.appendChild(benefitsContent);

        let benefitHTML = "";

        benefitHTML += `
            <div class='px-[15px]'>
                
                <h1 class='text-[rgb(30,33,44)] font-black text-3xl lg:text-5xl mb-4'>${benefitData.intro.title}</h1>
           
            </div>

            <div class='each-benefits-container md:ml-[65px] lg:80px xl:ml-[105px] px-[15px]'>
                ${benefitData.coreBenefit
                    .map(
                        (info) => `
                        <div class='flex items-start'>
                            <div class="w-4 h-4 mr-4 mt-2">
                                <img class='w-full h-full object-cover' src="${info.icon}"/>
                            </div>

                            <div class='flex-1 mb-2'>
                                <p class='pb-1'>${info.these}</p>
                            </div>
                        </div>

                    `,
                    )
                    .join(" ")}
            </div>
        
        `;

        benefitsContent.innerHTML = benefitHTML;
    }
    updateBenefit();
    // *************** Who benefits section ***************

    // *************** Subscribe section ***************
    function updateSubscribe() {
        const subscribeNoSkipData = locale[currentLang].subscribeNoSkip;

        const subscribeNoSkip = document.createElement("div");
        subscribeNoSkip.className = "subscribeNoSkip mt-[96px]";
        TALKABOUT.appendChild(subscribeNoSkip);

        let subscribeNoSkipHTML = "";
        subscribeNoSkipHTML += ` 
        <div class='bg-[#F5A99F]  rounded-lg'>
            <div class="flex flex-col md:flex-row border-2 border-black items-center justify-between px-[15px] py-12">

                <div class="max-[992px]:w-[35%] min-[992px]:ml-[50px] w-[30%]">
                    <img src="${subscribeNoSkipData.image}"/>
                </div>

                <div class='flex flex-col  max-[992px]:w-[60%] min-[992px]:w-[50%] items-start justify-between'> 
                        <h2 class='max-w-[552px] mb-6  text-3xl font-black text-[rgb(30,33,44)] leading-[41.6px]'>${subscribeNoSkipData.intro.title}</h2>

                        <div class="mb-6 flex items-center gap-6 w-full">
                           <input
                           class="max-w-[364px] w-full outline-none px-4 py-2.5 text-[0.875rem] border-gray-300 border-[1px] rounded text-[#424551] transition-all duration-300  focus:border-red-400/80"
                           placeholder="${subscribeNoSkipData.input.inpPlaceholder}"/>

                           <button class=" text-sm rounded py-2.5 px-8 bg-gradient-to-l from-[#F75E05] to-[#FF3F3A] text-white">${subscribeNoSkipData.input.button}</button> 
                        </div>
                        
                        <label class="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" class="w-5 h-5 accent-[rgb(255,63,58)] border-red-300 rounded-full cursor-pointer transition duration-200"
                        />
                            <span class="text-gray-700">${subscribeNoSkipData.input.agreement}</span>
                        </label>
                   
                </div>
            </div>    
        `;

        subscribeNoSkip.innerHTML = subscribeNoSkipHTML;
    }
    updateSubscribe();
    // *************** Subscribe section ***************
});
