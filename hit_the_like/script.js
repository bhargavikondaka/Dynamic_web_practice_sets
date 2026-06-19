let isImageLiked = false;

function onClickLikeButton() {
    if (isImageLiked === false) {
        document.getElementById("likeButton").style.backgroundColor = "#0967d2";
        document.getElementById("likeIcon").style.color = "#0967d2";
        document.getElementById("puppyImage").src = "https://images.openai.com/static-rsc-4/cIqF0Gzqy-tKb5P6mMK2o6fydvyjK_3MQADLlqZCun4LhYa8vSANS4o0DocPe7NwpnVImbl188bCaWlWsMAPL6LvbFSR1lEKH5qv9V2EmVCHsQmt1qkb2om0UacN-HNZesY81ES6BtBDiVrtIfcGW6lpGRXSOjLLsD5P9qq8RiQRE5WxYPG0IFVgdNl8oJZd?purpose=fullsize";
        document.getElementById("likeButton").style.color = "#ffffff";
        document.getElementById("likeButton").textContent = "Tap to Unlike";
        isImageLiked = true;
    } else {
        document.getElementById("likeButton").style.backgroundColor = "#cbd2d9";
        document.getElementById("likeIcon").style.color = "#cbd2d9";
        document.getElementById("puppyImage").src = "https://images.openai.com/static-rsc-4/FZzTxpZS0iCEV5Bvc2I2wrOsvBAJ8eT0ZhF5Ia8SJ0YjSlZXXJuTt3HW3sWAiYqNHl1vJNkWTc88eu6PtupECxP2-ln4BNTKlv2BkfG3SLGbezfZ-dQ8GBnuwN4y5HkCVSBJhOgNxj3FQkHLPLaoO5GWUKaaXLjjwKroYpe6FypHo5g9L758yKIeadZJxGXF?purpose=fullsize";
        document.getElementById("likeButton").style.color = "#005fc5";
        document.getElementById("likeButton").textContent = "Tap to Like";
        isImageLiked = false;
    }
}