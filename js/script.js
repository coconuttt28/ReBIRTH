// navbar rwd list
/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
// footer_list rwd
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// 彈出式登入
function customizeWindowEvent() {
    var popup_window = document.getElementById("window-container");

    popup_window.style.display = "flex";

    window.onclick = function close(e) {
        if (e.target == popup_window) {
            popup_window.style.display = "none";
        }
    };
}

$(".message a").click(function () {
    $("form").animate({ height: "toggle", opacity: "toggle" }, "fast");
});

// 關閉彈出式登入
function closeForm() {
    document.getElementById("window-container").style.display = "none";
}

// banner
$(function () {
    $('.carousel-item-banner').eq(0).addClass('active');
    var total = $('.carousel-item-banner').length;
    var current = 0;
    var autoSlideInterval;

    function startAutoSlide() {
        autoSlideInterval = setInterval(autoSlide, 5000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    function autoSlide() {
        var next = current + 1;
        if (next >= total) {
            next = 0;
        }
        setSlide(current, next);
        current = next;
    }

    function setSlide(prev, next) {
        $('.carousel-item-banner').eq(prev).removeClass('active');
        $('.carousel-item-banner').eq(next).addClass('active');
    }

    // 開始自動輪播
    startAutoSlide();

    $('#moveRight').on('click', function () {
        var next = current + 1;
        if (next >= total) {
            next = 0;
        }
        setSlide(current, next);
        current = next;
        stopAutoSlide();
        startAutoSlide();
    });

    $('#moveLeft').on('click', function () {
        var prev = current - 1;
        if (prev < 0) {
            prev = total - 1;
        }
        setSlide(current, prev);
        current = prev;
        stopAutoSlide();
        startAutoSlide();
    });
});


// feature
const spaceHolder = document.querySelector('.space-holder');
const horizontal = document.querySelector('.horizontal');
spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

function calcDynamicHeight(ref) {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const objectWidth = ref.scrollWidth;
    return objectWidth - vw + vh + 330;
}

window.addEventListener('scroll', () => {
    const sticky = document.querySelector('.sticky');
    horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
});

window.addEventListener('resize', () => {
    spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
});

// bestseller
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("bestseller_tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("bestSeller_tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
// 預設開啟
document.getElementById("defaultOpen").click();

// Idea btn
function changeColor(button) {
    var accordionBody = button.parentElement.nextElementSibling;
    accordionBody.classList.toggle("active-accordion");
}
// Idea bg
$(window).scroll(function (e) {
    parallax();
});

function parallax() {
    var scrolled = $(window).scrollTop();
    $('.giftIdeas_bg').css('top', -(scrolled * 0.05) + 'px');
}

// 客戶案例左右切換
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 993,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 577,
            settings: {
                slidesToShow: 3,
            }
        }
    ]
});

// 表單-電話限制
function formatPhoneNumber(input) {
    var phoneNumber = input.value.replace(/\D/g, ''); // 移除非數字的文字
    var formattedPhoneNumber = '';

    if (phoneNumber.length > 0) {
        formattedPhoneNumber = phoneNumber.slice(0, 4); // 取前4個數字
        if (phoneNumber.length > 4) {
            formattedPhoneNumber += '-' + phoneNumber.slice(4, 7); // 添加-字和接下来的3個數字
            if (phoneNumber.length > 7) {
                formattedPhoneNumber += '-' + phoneNumber.slice(7, 10); // 添加-字和接下来的3個數字
            }
        }
    }

    input.value = formattedPhoneNumber;
}

// // 等待頁面加載完成
// window.addEventListener('load', function () {
//     // 將滾動位置重置到頂部
//     window.scrollTo(0, 0);
// });

// gotop
let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

document.addEventListener('DOMContentLoaded', function () {
    const goTopButton = document.querySelector('[data-action="gotop"]');
    const windowViewPortHeight = 0; // 一滾動就出現gotop
    let isRequestingAnimationFrame = false;

    if (!goTopButton) {
        return;
    }

    goTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', function () {
        if (!isRequestingAnimationFrame) {
            requestAnimationFrame(filterGoTopButtonVisibility);
            isRequestingAnimationFrame = true;
        }
    });

    function filterGoTopButtonVisibility(timestamp) {
        let windowPageYOffset = window.pageYOffset || document.documentElement.scrollTop;
        if (windowPageYOffset > windowViewPortHeight) {
            goTopButton.classList.add('show');
            isRequestingAnimationFrame = false;
        } else {
            goTopButton.classList.remove('show');
            requestAnimationFrame(filterGoTopButtonVisibility);
        }
    }
})

// giftideas偽元素動畫
document.addEventListener('DOMContentLoaded', function () {
    const giftIdeasSection = document.getElementById('giftIdeas');
    const extendAfterElement = document.querySelector('.getInTouch_h2::after');
    const extendBeforeElement = document.querySelector('.getInTouch_h2::before');
    let isAnimationStarted = false;

    window.addEventListener('scroll', function () {
        if (!isAnimationStarted && isElementInView(giftIdeasSection)) {
            extendAfterElement.style.animationPlayState = 'running';
            extendBeforeElement.style.animationPlayState = 'running';
            isAnimationStarted = true;
        }
    });

    function isElementInView(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});


Swal.fire({
    text: "本網站為練習作品，非正式官方網站，資訊均非正式內容。若網站中有表單填寫，僅此示意，並無任何後台功能，不會對外蒐集個人資料，特此申明。",
    icon: "info"
  });