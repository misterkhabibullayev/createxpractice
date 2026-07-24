import { allCourses } from "../../../AllCourses.js";

window.addEventListener("DOMContentLoaded", () => {
    const currentLang = localStorage.getItem("selectedLang");

    const locale = {
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
        },
    };

    // header
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
        const heroData = locale[currentLang].hero.info;
        const heroDecorationData = locale[currentLang].hero.decoration;

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
    console.log(aboutTheCourse);

    function updateAboutTheCourseTop() {
        const aboutTheCourseData = locale[currentLang].aboutTheCourse;

        const courseWithId0 = allCourses.find((c) => c.id === 0);

        const aboutTheCourseTop = document.createElement("div");
        aboutTheCourseTop.className =
            "flex flex-col md:flex-row md:justify-between";
        let html = "";

        html += `
        <div class="flex flex-col md:px-[15px]">
        <h1 class='font-black text-3xl lg:text-4xl xl:text-5xl xl:leading-[57.5px] pb-4 mb-6'>${aboutTheCourseData.intro.title}</h1>
        <p class='text-[rgb(66,69,81)] md:max-w-[335px] lg:max-w-[470px] xl:max-w-[600px] mb-12'>${courseWithId0[currentLang].courseDescription}</p>

        <div class='sm:mb-[30px]'> 
        <h3 class='text-[28px] font-bold mb-6'>${aboutTheCourseData.intro.willBeLearned}</h3>

        <div> 
            
            ${Object.values(courseWithId0[currentLang].willBeLearn)
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
           <p class='text-2xl text-[rgb(255,63,58)] font-bold mb-2'>${courseWithId0[currentLang].coursesStartedDate} - ${courseWithId0[currentLang].coursesEndedDate}</p>
           <p class='text-[rgb(66,69,81)]'>${courseWithId0[currentLang].coursesDescription}</p>
           </div>

            <div class='px-2 pt-4 mb-4'>
           <h6 class='font-bold tracking-[1px] uppercase'>${aboutTheCourseData.datesPart.duration}</h6>
           <p class='text-2xl text-[rgb(255,63,58)] font-bold mb-2'>${courseWithId0[currentLang].coursesDurationMonth} - ${courseWithId0[currentLang].coursesDurationLesson}</p>
           <p class='text-[rgb(66,69,81)]'>${courseWithId0[currentLang].coursesDurationDescription}</p>
           </div>

             <div class='px-2 pt-4 mb-4'>
           <h6 class='font-bold tracking-[1px] uppercase'>${aboutTheCourseData.datesPart.price}</h6>
           <p class='text-2xl text-[rgb(255,63,58)] font-bold mb-2'>${courseWithId0.coursePrice} ${courseWithId0[currentLang].coursesPerMonth}</p>
           <p class='text-[rgb(66,69,81)]'>${courseWithId0[currentLang].coursesPerMonthDescription}</p>
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

    // About THE COURSE TUTOR

    function updateAboutTheCourseTutor() {
        const aboutTheCourseData = locale[currentLang].aboutTheCourse;
        const courseWithId0 = allCourses.find((c) => c.id === 0);

        // Tutor part is here starts ↓
        const aboutTheCourseTutor = document.createElement("div");
        aboutTheCourseTutor.className =
            "aboutTheCourse-tutor flex flex-col-reverse sm:flex-row mt-[96px] pb-[48px] ";

        const tutorImageContainer = document.createElement("div");
        tutorImageContainer.className =
            "max-w-full max-h-full mt-10 sm:max-w-[200px] sm:max-h-[230px] md:max-w-[243px] md:max-h-[295px] lg:max-w-[343px] lg:max-h-[426px] xl:max-w-[463px] xl:max-h-[606px] flex-shrink-0 overflow-hidden";
        const tutorImage = document.createElement("img");
        tutorImage.className = "w-full h-full object-cover";
        tutorImage.src = courseWithId0.curatorTitleImg;
        tutorImage.alt = "Course Tutor image";

        tutorImageContainer.appendChild(tutorImage);
        aboutTheCourseTutor.appendChild(tutorImageContainer);
        aboutTheCourse.appendChild(aboutTheCourseTutor);

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
        tutorName.textContent = courseWithId0.curator.curatorName;

        const tutorProfession = document.createElement("p");
        tutorProfession.className = "pb-2 mb-6 text-xl ";
        tutorProfession.textContent = courseWithId0.curator[currentLang].jobs;

        const courseInfoRateCoursesStudentsContainer =
            document.createElement("div");
        courseInfoRateCoursesStudentsContainer.className =
            "pb-2 mb-4 md:pb-4 md:mb-4";

        let tutorLessonInfoHtml = "";

        courseWithId0.curator.courseLessonInfo.forEach((info) => {
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
            courseWithId0.curator[currentLang].aboutCurator;

        const socialMediaHTML = `
        <div class='flex items-center gap-4'>
              ${courseWithId0.curator.socialLinks
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

    // About THE COURSE Main Steps
    function updateMainSteps() {
        const aboutTheCourseData =
            locale[currentLang].aboutTheCourse.mainStepsPart;

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
                console.log(
                    (track.style.transform = `translateX(-${stepSize * currentSlide}px)`),
                );
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
        const earlyBirdsData = locale[currentLang].earlyBirds;

        const earlyBirdsContent = document.createElement("div");
        earlyBirdsContent.className = "";
        earlyBirds.appendChild(earlyBirdsContent);

        let earlyBirdsContentHTML = "";
        earlyBirdsContentHTML += `
        <div class='discount__text__inputs__container px-12 py-2'> 
        <div class=' BIGG'>

        <div class='flex justify-between'> 
            <div>
                <h2 class='text-3xl font-black text-[rgb(30,33,44)] leading-[41.6px] '>${earlyBirdsData.title}</h2>
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



      
            <form class='flex gap-10 mt-10'> 
            <div class='flex flex-col'>
               <label for='user-name'>${earlyBirdsData.inputsInfo.input1}</label>
               <input type="text" id='user-name' name='name' placeholder="${earlyBirdsData.inputsInfo.inputPlaceholder1}">
            </div>

            <div class='flex flex-col'>
                <label for='user-email'>${earlyBirdsData.inputsInfo.input2}</label>
                <input type="email" id='user-email' name='email' placeholder="${earlyBirdsData.inputsInfo.inputPlaceholder2}">
             </div>

            <div class='flex flex-col'>
                <label for='user-phone'>${earlyBirdsData.inputsInfo.input3}</label>
                <input type="tel" id='user-phone' name='phone' placeholder="${earlyBirdsData.inputsInfo.inputPlaceholder3}">
             </div>
               
            <button type='submit'>${earlyBirdsData.inputsInfo.button}</button>
        
            </form>
      </div>
        `;

        earlyBirdsContent.innerHTML = earlyBirdsContentHTML;
        console.log(earlyBirds);
    }
    updateEarlyBirds();
    // *************** EARLY BIRDS section ***************
});
