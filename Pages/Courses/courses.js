import { allCourses } from "../../AllCourses.js";
import { locale } from "./locale.js";

const currentLang = "en";

// ====================== ONLINE COURSES SECTION ======================
function updateOnlineCourseHeader() {
    const onlineCourseObject = locale[currentLang].onlineCourse.intro;

    const badge = document.getElementById("online-course-badge");
    const title = document.getElementById("online-course-title");

    badge.innerHTML = onlineCourseObject.badge;
    title.innerHTML = onlineCourseObject.title;
}
updateOnlineCourseHeader();

function createSelectedCats() {
    const categoriesSelectedObject =
        locale[currentLang].onlineCourse.categoriesSelected;
    const selectedCatArr = Object.values(categoriesSelectedObject);
    // console.log(selectedCatArr);

    const selectCategory = document.getElementById("categories");

    let html = "";

    Object.entries(categoriesSelectedObject).forEach(([key, value]) => {
        html += `
             <a
                class="category py-2 px-4 border border-transparent whitespace-nowrap hover:font-bold hover:text-[#000000] transtion-color duration-300 ease-in-out rounded-md"
                href="#"
                data-category="${key}"
                >${value}<span></span>
            </a>
            `;
    });

    selectCategory.innerHTML = html;
}
createSelectedCats();

function eachCardDynamic() {
    const tutorsObject = locale[currentLang].onlineCourse.tutors;
    

    const tutors = document.getElementById("tutors");

    let html = "";

    allCourses.forEach((card) => {
        html += `
                                        <div
                            data-category="${card[currentLang].category}"
                            class="person group flex flex-col h-full shadow-lg hover:shadow-xl rounded transition-shadow duration-100"
                        >
                            <div class="w-full overflow-hidden">
                                <a href="./course/course.html" class="block w-full">
                                    <img
                                        src="${card.curatorTitleImg}"
                                        alt=""
                                        class="w-full h-auto align-middle transition-transform duration-300 ease-in-out will-change-transform group-hover:scale-[1.08] cursor-pointer"
                                    />
                                </a>
                            </div>
                            <div
                                class="flex flex-col flex-1 p-6 gap-5 sm:px-6 sm:pt-6 sm:pb-[1px] md:w-full"
                            >
                                <a
                                    class="self-start font-normal text-sm leading-[1.5] text-[#fefefe] px-2 py-[1px] bg-[${card.backColor}] rounded"
                                >
                                    ${card[currentLang].category}
                                </a>
                                <a
                                    class="inline-block w-auto min-h-[25px] font-bold text-xl leading-[1.5] text-[#1E212C] sm:max-w-[200px] border-black md:max-w-none md:w-full lg:min-h-[60px] lg:max-w-full hover:text-red-500 transition-colors duration-500 ease-in-out cursor-pointer"
                                    >${card[currentLang].courseTitle}</a
                                >

                                <p
                                    class="mt-auto font-bold text-red-500 leading-[1.5] sm:pb-6 sm:pt-2"
                                >
                                    $${card.coursePrice}
                                    <span
                                        class="leading-[1.5] text-[#787A80] border-l border-l-gray-300 pl-1"
                                        >${card[currentLang].curator}</span
                                    >
                                </p>
                            </div>
                        </div>
            
            `;
    });

    tutors.innerHTML = html;
}
eachCardDynamic();

function selectCategory() {
    const categories = document.querySelectorAll(".category");
    const people = document.querySelectorAll(".person");

    categories.forEach((category) => {
        category.addEventListener("click", (e) => {
            e.preventDefault();

            // active vaxti
            categories.forEach((category) => {
                category.classList.remove("border-red-500", "text-red-500");
                category.classList.add("border-transparent");
            });

            category.classList.remove("border-transparent");
            category.classList.add("border-red-500", "text-red-500");

            const selected = category.dataset.category;
            console.log("selected:", selected);

            people.forEach((person) => {
                person.classList.toggle(
                    "hidden",
                    selected !== "all" && person.dataset.category !== selected,
                );
            });
        });
    });
}
selectCategory();

// ====================== ONLINE COURSES SECTION ======================

//  ====================== TESTIMONIALS SECTION ======================
function testimonialHeader() {
    const intro = locale[currentLang].testimonials.intro;

    const badge = document.getElementById("testimonials-badge");
    const description = document.getElementById("testimonials-description");

    badge.innerHTML = intro.badge;
    description.innerHTML = intro.title;
}

testimonialHeader();

function createSliderCards() {
    const sliderContainer = document.getElementById("slider-container");

    const commentData = locale[currentLang].testimonials.comment;

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

    const indicatorContainer = document.getElementById("indicatorContainer");

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

//  ====================== TESTIMONIALS SECTION ======================

//  ====================== Sertificate Section ======================
function updateCertificateText() {
    const sertificateData = locale[currentLang].sertificate.intro;
    const sertificateLogoData =
        locale[currentLang].sertificate.intro.ourCollaborations;

    const badge = document.getElementById("sertificate-badge");
    const title = document.getElementById("sertificate-title");
    const description = document.getElementById("sertificate-description");

    badge.className =
        "font- bold leading-[150%] tracking-[1px] uppercase text-[#1E212C]";
    title.className =
        "font-black max-[575px]:text-[33px] sm:text-[40px] leading-tight lg:leading-[60px] sm:text-[29px]  md:leading-tight md:text-[32px] text-[#1E212C] mt-2 mb-6";
    description.className =
        "max-[575px]:leading-tight max-[575px]:text-base sm:leading-[160%] text-[#424551] sm:max-w-[312px] lg:max-w-[390px] mb-8";

    badge.innerHTML = sertificateData.badge;
    title.innerHTML = sertificateData.title;
    description.innerHTML = sertificateData.description;

    const collaborationLogos = document.getElementById("our-collaborations");
    let html = "";
    sertificateLogoData.forEach((logo) => {
        html += `
            <div>
            <img src="${logo.image}" alt="international institute logos"/>
            </div>
            `;
    });
    collaborationLogos.innerHTML = html;
}
updateCertificateText();

function updateSertificatePart() {
    const sertificatePart = document.getElementById("certificaPart");

    if (!sertificatePart) return;

    const sertificatePhotoData =
        locale[currentLang].sertificate.sertificateImagePart.image;

    sertificatePart.innerHTML = "";

    sertificatePart.className = "w-full h-full sm:px-4";

    const serImg = document.createElement("img");
    serImg.src = sertificatePhotoData;
    serImg.alt = "Certificate photo";
    serImg.className = "w-full h-full object-cover md:object-contain";

    sertificatePart.appendChild(serImg);
}
updateSertificatePart();
//  ====================== Sertificate Section======================

//  ====================== Subscribe Section ======================
function updateSubscribe() {
    const subscribeData = locale[currentLang].subscribe.intro;
    const subscribeDataEmail = locale[currentLang].subscribe.email;

    const badge = document.getElementById("subscribe-badge");
    const title = document.getElementById("subscribe-title");

    badge.innerHTML = subscribeData.badge;
    title.innerHTML = subscribeData.title;

    const inputContainer = document.getElementById("inputContainer");
    const inputForm = document.createElement("form");

    inputContainer.innerHTML = "";

    const emailInput = document.createElement("input");
    emailInput.placeholder = subscribeDataEmail.placeholder;

    const button = document.createElement("button");
    button.innerHTML = subscribeDataEmail.button;
    button.className =
        "bg-[#FF3F3A] text-white font-bold leading-[43px] tracikng-[0.5px] px-5 sm:px-10 rounded";

    inputForm.appendChild(emailInput);
    inputForm.appendChild(button);
    inputContainer.appendChild(inputForm);

    inputForm.className =
        "flex items-center justify-center gap-2 sm:gap-8 w-full max-w-[600px] mx-auto";

    emailInput.className =
        "px-4 py-2.5 w-full md:max-w-[268px] lg:max-w-[320px] xl:max-w-[400px] rounded justify-itself-center";
    inputContainer.className = "pb-[180px] w-full text-center";
}

updateSubscribe();

//  ====================== Subscribe Section ======================

// ****************** FOOTER ******************
const footerContainer = document.getElementById("footer-content");
console.log(footerContainer);
function logoPart() {
    const footerData = locale[currentLang].footer.intro;

    const logoPart = document.createElement("div");
    logoPart.className = "flex flex-col items-center px-[15px]";
    const containerLogo = document.createElement("div");
    containerLogo.className = "mb-6";
    const logo = document.createElement("img");
    logo.src = footerData.logo;

    footerContainer.appendChild(logoPart);
    logoPart.appendChild(containerLogo);
    containerLogo.appendChild(logo);

    const text = document.createElement("p");
    text.innerHTML = footerData.text;
    text.className =
        "text-xs text-[rgb(255,255,255)] leading-[18px] opacity-60 pb-4 max-w-[285px] pb-4 mb-6";

    logoPart.appendChild(text);

    const containerSocialMedia = document.createElement("div");
    logoPart.appendChild(containerSocialMedia);
    containerSocialMedia.className = "flex items-center gap-4";

    const socialMediaObj = locale[currentLang].footer.intro.socialMedia;
    let html = "";

    socialMediaObj.forEach((platform, index) => {
        html += `
                <div class="eachMediaContainer${index} w-10 h-10 sm:w-5 sm:h-5">
                 <img src="${platform.media}" class='h-full w-full object-contain'/> 
                </div>
            `;
    });

    containerSocialMedia.innerHTML = html;
}
logoPart();

function siteMapText() {
    const siteMapData = locale[currentLang].footer.siteMapPart;

    const siteMapContainer = document.createElement("div");
    siteMapContainer.className =
        "px-[15px] flex flex-col items-center justify-center";
    footerContainer.appendChild(siteMapContainer);

    const title = document.createElement("h5");
    title.className = "font-bold text-white mb-2";
    title.textContent = siteMapData.title;
    siteMapContainer.appendChild(title);

    const ul = document.createElement("ul");
    ul.className = "text-white opacity-60";

    const links = [
        { text: siteMapData.aboutUS, href: "/about" },
        { text: siteMapData.courses, href: "/courses" },
        { text: siteMapData.events, href: "/events" },
        { text: siteMapData.blog, href: "/blog" },
        { text: siteMapData.contacts, href: "/contacts" },
    ];

    links.forEach((link) => {
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.textContent = link.text;
        a.href = link.href;
        a.className = "hover:underline text-white";

        li.appendChild(a);
        ul.appendChild(li);
    });
    siteMapContainer.appendChild(ul);
}
siteMapText();

function coursesPart() {
    const coursesData = locale[currentLang].footer.coursesPart;
    console.log(coursesData);
    const coursesPart = document.createElement("div");
    coursesPart.className = "px-[15px]";
    footerContainer.appendChild(coursesPart);

    const elements = [
        { text: coursesData.title, isTitle: true },
        { text: coursesData.marketing },
        { text: coursesData.management },
        { text: coursesData.hrRecruting },
        { text: coursesData.design },
        { text: coursesData.development },
    ];

    elements.forEach((each) => {
        if (!each.text) return;

        if (each.isTitle) {
            const title = document.createElement("h5");
            title.className = "font-bold text-white mb-2";
            title.textContent = each.text;
            coursesPart.appendChild(title);
        } else {
            const div = document.createElement("div");
            const a = document.createElement("a");

            a.textContent = each.text;
            a.href = "/courses";
            a.classList = "text-white opacity-60 hover:underline block py-1";

            div.appendChild(a);
            coursesPart.appendChild(div);
        }
    });
}
coursesPart();

function contactUsPart() {
    const contactUsData = locale[currentLang].footer.contactUsPart.info;
    const contactUsDataTitle = locale[currentLang].footer.contactUsPart.title;

    // console.log(contactUsData);

    const contactUsPartContainer = document.createElement("div");
    contactUsPartContainer.className = "px-[15px]";
    footerContainer.appendChild(contactUsPartContainer);

    let html = `
                <h3 class="text-white max-[992px]:mb-0 max-[992px]:pb-0 lg:mb-2 lg:pb-1 leading-[24px] tracking-[1px] ">
                    ${contactUsDataTitle}
                </h3>
              `;

    contactUsData.forEach((item) => {
        html += `
            <div class="flex items-center gap-2"> 
            <img  src="${item.icon}"/>
            <a href="${item.info}" class='text-white opacity-60 hover:opacity-100 transition-opacity'>${item.info}</a href="${item.info}">
            </div>
            `;
    });

    contactUsPartContainer.innerHTML = html;
}
contactUsPart();

function signUpPart() {
    const signUpData = locale[currentLang].footer.signUpPart;
    const signUpPartContiner = document.createElement("div");
    signUpPartContiner.className =
        "max-w-[286px] w-full flex flex-col px-[15px] ";
    footerContainer.appendChild(signUpPartContiner);

    const title = document.createElement("p");
    title.innerHTML = signUpData.title;
    title.className =
        "font-bold text-white leading-[24px] mb-2 pb-1 xl:whitespace-nowrap";
    signUpPartContiner.appendChild(title);

    const inputForm = document.createElement("form");
    inputForm.className =
        "flex items-center bg-[#393C46] rounded px-4 py-2.5 pb-1 mb-2";
    signUpPartContiner.appendChild(inputForm);

    const input = document.createElement("input");
    input.placeholder = signUpData.placeholder;
    input.className = "outline-none bg-[#393C46] text-[#B0B1B5] max-w-[100px]";
    inputForm.appendChild(input);

    const arrowRight = document.createElement("p");
    arrowRight.innerHTML = "→";
    arrowRight.className = "text-2xl text-white ml-auto";
    inputForm.appendChild(arrowRight);

    const textEnd = document.createElement("p");
    textEnd.innerHTML = signUpData.text;
    textEnd.className = "text-white text-xs mt-1 max-w-[260px]";
    signUpPartContiner.appendChild(textEnd);
}
signUpPart();

function footerCopyright() {
    const copyrightPart = document.getElementById("copyrightPart");
    const copyrightDate = locale[currentLang].footer.copyrightPart;

    const copyrightTextContainer = document.createElement("div");
    copyrightTextContainer.className =
        "flex flex-col gap-5 sm:flex-row items-center justify-between py-5 ";

    const leftPartContainer = document.createElement("div");
    leftPartContainer.className = "flex items-center text-white";

    const copyrightTextPart1 = document.createElement("p");
    const copyrightTextLoveIcon = document.createElement("img");
    const copyrightTextPart2 = document.createElement("a");
    copyrightTextPart2.className = "underline";
    copyrightTextPart2.href = "https://createx.studio/";
    copyrightTextPart2.target = "_blank";

    copyrightTextPart1.innerHTML = copyrightDate.copyright;
    copyrightTextLoveIcon.src = copyrightDate.icon;
    copyrightTextPart2.innerHTML = copyrightDate.copyrightRemaining;

    leftPartContainer.append(
        copyrightTextPart1,
        copyrightTextLoveIcon,
        copyrightTextPart2,
    );
    copyrightTextContainer.appendChild(leftPartContainer);
    const goToTopText = document.createElement("p");

    const rightSideContainer = document.createElement("div");
    rightSideContainer.className = "flex items-center gap-3";
    copyrightTextContainer.appendChild(rightSideContainer);

    goToTopText.innerHTML = copyrightDate.goToTop;
    goToTopText.className = "text-white";

    const redButton = document.createElement("button");
    redButton.innerHTML = copyrightDate.button;
    redButton.className =
        "flex items-center justify-center  bg-[#ff3f3a] text-white py-1 px-3 rounded text-xl active:bg-[#ff1a14]";

    redButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });

    copyrightPart.appendChild(copyrightTextContainer);
    copyrightTextContainer.appendChild(goToTopText);
    copyrightTextContainer.appendChild(redButton);

    rightSideContainer.append(goToTopText, redButton);

    // console.log(copyrightTextContainer);
}
footerCopyright();
// ****************** FOOTER ******************
