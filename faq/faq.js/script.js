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

Swal.fire({
    text: "本網站為練習作品，非正式官方網站，資訊均非正式內容。若網站中有表單填寫，僅此示意，並無任何後台功能，不會對外蒐集個人資料，特此申明。",
    icon: "info"
  });