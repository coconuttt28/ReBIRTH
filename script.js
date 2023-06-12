
// const bannerItems = document.querySelectorAll('.banner_list_item');
// const bannerTexts = document.querySelectorAll('.banner_text');
// const guideButtons = document.querySelectorAll('.guide_button');
// const progressBars = document.querySelectorAll('.progress_bar');

// // 定義當前顯示的banner索引
// let currentIndex = 0;

// // 顯示當前banner的內容和進度條
// function showCurrentBanner() {
//     bannerItems.forEach((item, index) => {
//         if (index === currentIndex) {
//             item.classList.add('active');
//             bannerTexts[index].textContent = '中文內容';
//             guideButtons[index].style.display = 'block';
//         } else {
//             item.classList.remove('active');
//             bannerTexts[index].textContent = 'English Text';
//             guideButtons[index].style.display = 'none';
//         }
//     });
// }

// // 更新進度條的值
// function updateProgressBar() {
//     progressBars.forEach((bar, index) => {
//         if (index === currentIndex) {
//             bar.value = 100;
//         } else {
//             bar.value = 0;
//         }
//     });
// }

// // 切換至下一個banner
// function showNextBanner() {
//     currentIndex++;
//     if (currentIndex >= bannerItems.length) {
//         currentIndex = 0;
//     }
//     showCurrentBanner();
//     updateProgressBar();
// }

// // 每個banner設置點擊事件
// bannerItems.forEach((item, index) => {
//     item.addEventListener('click', () => {
//         currentIndex = index;
//         showCurrentBanner();
//         updateProgressBar();
//     });
// });

// // 初始化第一個banner的內容和進度條
// showCurrentBanner();
// updateProgressBar();

// // 設置定時器，每隔一段時間切換至下一個banner
// setInterval(showNextBanner, 3000);



// 熱門商品切換
// $(".responsive").slick({
//     dots: true,
//     infinite: false,
//     speed: 300,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 infinite: true,
//                 dots: true
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }
//     ]
// });

// $('.bestseller_item').slick({
//     infinite: true,
//     slidesToShow: 4, // Shows a three slides at a time
//     slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
//     arrows: true, // Adds arrows to sides of slider
//     //dots: true // Adds the dots on the bottom
// });

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
    focusOnSelect: true
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

// gotop隨背景修改顏色
// const body = document.querySelector('body');
// const backgroundColor = getComputedStyle(body).backgroundColor;

// 根據背景修改不同顏色的gotop
// const btnGotop = document.querySelector('.btn-gotop');

// if (backgroundColor === 'rgb(255, 252, 245)') {
//     btnGotop.classList.add('light-background');
// } else if (backgroundColor === 'rgb(68, 82, 81)') {
//     btnGotop.classList.add('dark-background');
// }
