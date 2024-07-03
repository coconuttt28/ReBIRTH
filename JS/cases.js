$(document).ready(function () {
  // Initialize slick carousel
  $(".responsive").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1625,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      }
    ],
  });

  let textList = [
    "Dreams of Herbs 香草夢境｜白玫瑰、棉花、鈴蘭｜尺寸: 28cm \n \n新北林先生: \n很滿意成品，與網路上沒有色差，太太收到禮物也超喜歡，感謝店員協助，服務超讚的！",
    "Butterfly Kisses 蝴蝶之吻｜玫瑰、滿天星、銀菊｜尺寸: 30cm \n \n台北王先生: \n花朵顏色鮮艷，質感也很好，包裝非常精致，送給女朋友，她好開心，給你們一個讚！",
    "Sweet Serenity 甜蜜寧靜｜粉玫瑰、白雛菊、松葉｜尺寸: 25cm \n \n高雄陳先生: \n感謝你們按照我特別的要求制作了一束獨特的永生花束，收到時真的驚喜又感動！",
    "Oath of the Rose 瑰麗誓約｜粉玫瑰、金魚草｜尺寸: 35cm \n \n台南江小姐: \n收到訂製永生花束，花朵保持得非常好，而且包裝精美，感謝你們的用心和貼心服務！",
    "Garden of Dreams 夢幻花園｜玫瑰、棉花、鈴蘭｜尺寸: 28cm \n \n嘉義張小姐: \n訂購的永生花束準時送到了，配送員還特別親切地確認地址，非常感謝你們的準時配送！",
    "Rose Garden 玫瑰花園｜粉玫瑰、滿天星｜尺寸: 30cm \n \n台中李先生: \n你們的永生花束很漂亮，大家都在問我是在哪訂購的，我會推薦你們的！",
  ];

  // Add active class to the first slide initially and show the comment
  let firstSlide = $('.slick-slide[data-slick-index="0"]');
  firstSlide.addClass("active");
  firstSlide.find("p").text(textList[0]).show();

  // Add event listener for afterChange to add active class
  $(".responsive").on("afterChange", function (event, slick, currentSlide) {
    let currentElement = slick.$slides.eq(currentSlide);
    let currentText = textList[currentSlide];
    $(".slick-slide").removeClass("active");
    currentElement.addClass("active");
    currentElement.find("p").text(currentText).show();
  });

  // Add event listener for beforeChange to clear active class and hide comment
  $(".responsive").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      let currentElement = slick.$slides.eq(currentSlide);
      currentElement.removeClass("active");
      currentElement.find("p").hide();
    }
  );
});
