Swal.fire({
    text: "本網站為練習作品，非正式官方網站，資訊均非正式內容。若網站中有表單填寫，僅此示意，並無任何後台功能，不會對外蒐集個人資料，特此申明。",
    icon: "info"
  });
  
$(document).ready(function () {
    function handleImageChange(imagePath) {
        $(".custom_block_4").attr("src", imagePath);
    }

    let selectPink = false; 
    let selectPack = ""; 

    function getImagePath() {
        
        if ($('#pink_FL').is(':checked')) {
            selectPink = true;
        } else {
            selectPink = false;
        }

        if (selectPink) {
            if (selectPack === "white") {
                return "./images/FL6_PK_WT.png";
            } else {
                return "./images/FL6_PK_BG.png";
            }
        } else {
            if (selectPack === "white") {
                return "./images/FL6_BG_WT.png";
            } else {
                return "./images/FL6_BG.jpg";
            }
        }
    }

    $("#white, #beige,#white_FL, #pink_FL").click(function () {
        if ($(this).val() !== "") {
           
            selectPack = $(this).val();
        }
        let imagePath = getImagePath();
        handleImageChange(imagePath);
    });
});

