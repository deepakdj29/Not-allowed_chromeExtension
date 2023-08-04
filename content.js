let theImg = [
    "https://blogvault.net/wp-content/uploads/2020/10/Fixed-Sorry-you-are-not-allowed-to-access-this-page-2048x1195.png",
    "https://assets.wpdeveloper.com/2022/08/image.png",
    "https://mllj2j8xvfl0.i.optimole.com/cb:jC7e.37109/w:1024/h:726/q:90/f:avif/https://themeisle.com/blog/wp-content/uploads/2022/06/sorry-you-are-not-allowed-to-access-this-page-error.png",
    "https://m.media-amazon.com/images/I/61YHqvyCOeL._SL1467_.jpg",
    "https://i.ytimg.com/vi/uIBNvmFE9Gk/maxresdefault.jpg",
    "https://st4.depositphotos.com/7819052/38371/v/600/depositphotos_383719894-stock-illustration-inserted-red-color-sticker-label.jpg",
    "https://media.istockphoto.com/id/1387105129/vector/megaphone-icon-with-speech-bubble-in-word-unavailable-on-white-background.jpg?s=612x612&w=0&k=20&c=Kyv-oNdEwA5GpnJO24RdRHohnH1wPz-f3G1bqTpqcTg=",
    "https://birthmonopoly.com/bmp/wp-content/uploads/2014/06/WEB-Featured-Image-Radio.png"
];

const imgs = document.getElementsByTagName("img")

for (let i = 0; i < imgs.length; i++) {

    const randomImg = Math.floor(Math.random() * theImg.length)
    imgs[i].src = theImg[randomImg]


    

}

const heading = document.getElementsByTagName("yt-formatted-string")

for (let i = 0; i < heading.length; i++) {

    heading[i].innerText = "Chlaa Jaa Chup Chapp";
}
