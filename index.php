<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Laravel-Mix</title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="author">
    <meta name="image" content="./images/logo.png">
    <!-- Favicon -->
    <link rel="icon" href="">
    <link rel="shortcut icon" href="">
    <!-- OG Tags -->
    <!--	<meta property="og:title" content="">-->
    <!--	<meta property="og:description" content=''>-->
    <!--	<meta property="og:type" content="article">-->
    <!--	<meta property="og:image" content="">-->
    <!--	<meta property="og:site_name" content="TEST">-->

    <link rel="canonical" href="https://example.com">

    <!-- Использование внешних русурсов -->
    <link rel="preconnect" href="//fonts.gstatic.com">
    <link rel="preconnect" href="//cdnjs.cloudflare.com">
    <link rel="preconnect" href="//google-analytics.com">

    <meta name="msapplication-TileImage" content="./images/">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="theme-color" content="#ffffff">

    <meta name="apple-mobile-web-app-title" content="название">
    <meta name="apple-mobile-web-app-capable" content="yes">

    <meta name="format-detection" content="telephone=no">
    <meta name="format-detection" content="address=no">

    <!-- Main CSS -->
    <link rel="stylesheet" href="public/css/app.css">

</head>

<body>
<div class="wrapper">
    <header class="header">
        <div class="container">
            <div class="header__nav">
                <a href="index.html" class="header__logo">
                    <svg width="179" height="45" viewBox="0 0 560 147" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M93.1 3.09998V3.29998C119.2 11.8 138 36.3 138 65.2C138 101.1 108.9 130.2 73 130.2C37.1 130.2 8 101.1 8 65.2C8 36.3 26.8 11.8 52.9 3.29998V3.09998C22.3 11.9 0 39.9 0 73.3C0 113.6 32.7 146.3 73 146.3C113.3 146.3 146 113.6 146 73.3C145.9 39.9 123.6 11.9 93.1 3.09998Z"
                              fill="url(#paint0_linear)"/>
                        <path d="M93.1 3.29999V31.3C108.7 38.8 119.4 54.7 119.4 73.2C119.4 98.9 98.6 119.7 72.9 119.7C47.2 119.7 26.4 98.9 26.4 73.2C26.4 54.7 37.2 38.8 52.7 31.3V3.29999C26.6 11.8 7.8 36.3 7.8 65.2C7.8 101.1 36.9 130.2 72.8 130.2C108.7 130.2 137.8 101.1 137.8 65.2C138 36.3 119.2 11.8 93.1 3.29999Z"
                              fill="url(#paint1_linear)"/>
                        <path d="M93.1 3.29999V31.3C108.7 38.8 119.4 54.7 119.4 73.2C119.4 98.9 98.6 119.7 72.9 119.7C47.2 119.7 26.4 98.9 26.4 73.2C26.4 54.7 37.2 38.8 52.7 31.3V3.29999C26.6 11.8 7.8 36.3 7.8 65.2C7.8 101.1 36.9 130.2 72.8 130.2C108.7 130.2 137.8 101.1 137.8 65.2C138 36.3 119.2 11.8 93.1 3.29999Z"
                              fill="url(#paint2_linear)"/>
                        <path d="M93.1 3.09998V3.29998C119.2 11.8 138 36.3 138 65.2C138 101.1 108.9 130.2 73 130.2C37.1 130.2 8 101.1 8 65.2C8 36.3 26.8 11.8 52.9 3.29998V3.09998C22.3 11.9 0 39.9 0 73.3C0 113.6 32.7 146.3 73 146.3C113.3 146.3 146 113.6 146 73.3C145.9 39.9 123.6 11.9 93.1 3.09998Z"
                              fill="url(#paint3_radial)"/>
                        <path d="M93.1 3.20001V31.2C108.7 38.7 119.4 54.6 119.4 73.1C119.4 98.8 98.6 119.6 72.9 119.6C47.2 119.6 26.4 98.8 26.4 73.1C26.4 54.6 37.2 38.7 52.7 31.2V3.20001C26.8 11.6 7.89999 36.1 7.89999 65C7.89999 100.9 37 130 72.9 130C108.8 130 137.9 100.9 137.9 65C138 36.1 119.2 11.6 93.1 3.20001Z"
                              fill="url(#paint4_radial)"/>
                        <path d="M73 0C68.5 0 64 0.5 59.8 1.4V61.7C64 62.5 68.4 63 73 63C77.5 63 82 62.5 86.2 61.6V1.4C81.9 0.5 77.5 0 73 0Z"
                              fill="#FF9F32"/>
                        <g opacity="0.5">
                            <path opacity="0.5"
                                  d="M49.8 3.90001C50 3.80001 50.2 3.70001 50.4 3.70001C50.2 3.80001 50 3.80001 49.8 3.90001Z"
                                  fill="white"/>
                            <path opacity="0.5"
                                  d="M96.1 3.90001C95.9 3.80001 95.7 3.70001 95.5 3.70001C95.7 3.80001 95.9 3.80001 96.1 3.90001Z"
                                  fill="white"/>
                            <path opacity="0.5"
                                  d="M125.7 26.3C118.3 16.3 108.5 8.79999 97.2 4.29999C121.1 13.9 138.1 37.3 138.1 64.7C138.1 64.8 138.1 64.8 138.1 64.9C138.1 65 138.1 65.1 138.1 65.2C138.1 101.1 109 130.2 73.1 130.2C37.2 130.2 8.1 101.1 8.1 65.2C8.1 65.1 8.1 65 8.1 64.9C8.1 64.8 8.1 64.8 8.1 64.7C8.1 37.3 25 13.9 49 4.29999C37.6 8.79999 27.8 16.4 20.5 26.3C11.9 37.6 7.5 51.1 7.5 65.2C7.5 82.7 14.3 99.1 26.7 111.5C39 123.9 55.5 130.7 73 130.7C90.5 130.7 106.9 123.9 119.3 111.5C131.7 99.1 138.5 82.7 138.5 65.2C138.5 51.1 134 37.6 125.7 26.3Z"
                                  fill="white"/>
                        </g>
                        <path d="M560 59.7C560 48.5 550.9 39.5 539.8 39.5H510.4C504.8 39.5 499.8 41.7 496.2 45.4V26.4C496.2 24.7 494.9 23.4 493.2 23.4C491.5 23.4 490.2 24.7 490.2 26.4V59.6V98.3C490.2 100 491.5 101.3 493.2 101.3C494.9 101.3 496.2 100 496.2 98.3V60C496.2 51.9 502.8 45.4 510.8 45.4H539.4C547.5 45.4 554 51.9 554 60L554.1 98.5C554.1 100.2 555.4 101.5 557.1 101.5C558.8 101.5 560.1 100.2 560.1 98.5L560 59.7Z"
                              fill="#646464"/>
                        <path d="M165.6 58.5C165.6 63.4 169.6 67.4 174.5 67.4H215C223.1 67.4 229.6 73.9 229.6 82V86.7C229.6 94.8 223.1 101.3 215 101.3H174.2C166.2 101.3 159.6 94.8 159.6 86.8V86.7C159.6 86.3 159.7 86 159.8 85.6C160.2 84.5 161.3 83.7 162.6 83.7C164.3 83.7 165.6 85 165.6 86.7C165.7 91.5 169.6 95.4 174.5 95.4H214.7C219.6 95.4 223.6 91.4 223.6 86.5V82.3C223.6 77.4 219.6 73.4 214.7 73.4H174.2C166.1 73.4 159.6 66.9 159.6 58.8V54C159.6 45.9 166.1 39.4 174.2 39.4H215C223 39.4 229.6 45.9 229.6 53.9V54C229.6 54.4 229.5 54.7 229.4 55.1C229 56.2 227.9 57 226.6 57C224.9 57 223.6 55.7 223.6 54C223.5 49.2 219.6 45.3 214.7 45.3H174.5C169.6 45.3 165.6 49.3 165.6 54.2V58.5Z"
                              fill="#646464"/>
                        <path d="M355.6 98.4C355.6 100.1 354.3 101.4 352.6 101.4C350.9 101.4 349.6 100.1 349.6 98.4V42.4C349.6 40.7 350.9 39.4 352.6 39.4C354.3 39.4 355.6 40.7 355.6 42.4V98.4Z"
                              fill="#646464"/>
                        <path d="M352.6 23.4C354.257 23.4 355.6 22.0569 355.6 20.4C355.6 18.7432 354.257 17.4 352.6 17.4C350.943 17.4 349.6 18.7432 349.6 20.4C349.6 22.0569 350.943 23.4 352.6 23.4Z"
                              fill="#646464"/>
                        <path d="M402.2 95.4H385.3C377.2 95.4 370.7 88.9 370.7 80.8V45.4H402.2C403.9 45.4 405.2 44.1 405.2 42.4C405.2 40.7 403.9 39.4 402.2 39.4H370.7V20.4C370.7 18.7 369.4 17.4 367.7 17.4C366 17.4 364.7 18.7 364.7 20.4V81.2C364.7 92.4 373.8 101.4 384.9 101.4H402.1C403.8 101.4 405.1 100.1 405.1 98.4C405.2 96.8 403.8 95.4 402.2 95.4Z"
                              fill="#646464"/>
                        <path d="M310.4 99.8C311.2 101.3 313 101.9 314.4 101.1C315 100.8 315.4 100.3 315.7 99.8C315.8 99.7 315.7 99.8 315.7 99.8L341.2 43.8C342 42.3 341.4 40.5 339.9 39.8C338.4 39 336.6 39.6 335.9 41.1L315.1 88C314.7 88.7 314 89.2 313.1 89.2C312.2 89.2 311.5 88.7 311.1 88L290.3 41C290.3 41 290.3 41.1 290.3 41C290 40.5 289.6 40 289 39.7C287.5 38.9 285.7 39.5 285 41L264 88C263.6 88.7 262.9 89.2 262 89.2C261.1 89.2 260.4 88.7 260 88L239.2 41C238.4 39.5 236.6 38.9 235.2 39.7C233.7 40.5 233.1 42.3 233.9 43.7L259.4 99.7C260.2 101.2 262 101.8 263.4 101C264 100.7 264.4 100.2 264.7 99.7C264.8 99.6 264.7 99.7 264.7 99.7L285.5 53.9C285.9 53.2 286.6 51.7 287.5 51.7C288.4 51.7 289.1 53.2 289.5 53.9L310.4 99.8Z"
                              fill="#646464"/>
                        <path d="M418.2 60C418.2 51.9 424.7 45.4 432.8 45.4H461.4C468.9 45.4 475.1 51 475.9 58.3V58.5C475.9 60.2 477.2 61.5 478.9 61.5C480.6 61.5 481.9 60.1 481.9 58.5V58.4C481.2 47.8 472.4 39.5 461.7 39.5H432.3C421.1 39.5 412.1 48.6 412.1 59.7V81.2C412.1 92.4 421.2 101.4 432.3 101.4H461.7C472.4 101.4 481.2 93.1 481.9 82.5V82.4C481.9 80.7 480.6 79.4 478.9 79.4C477.2 79.4 475.9 80.8 475.9 82.4V82.6C475 89.9 468.9 95.5 461.4 95.5H432.8C424.7 95.5 418.2 89 418.2 80.9V60Z"
                              fill="#646464"/>
                        <path d="M362.6 127.5H355.3C353 127.5 351.5 127.1 350.5 126.2C349.6 125.3 349.1 123.8 349.1 121.6V116.8C349.1 114.6 349.6 113 350.5 112.1C351.4 111.2 353 110.7 355.2 110.7H362.5C366.5 110.7 368.5 112.3 368.5 115.5H366.8C366.8 114.5 366.5 113.7 365.9 113.3C365.2 112.7 364.1 112.5 362.5 112.5H355.2C353.5 112.5 352.3 112.8 351.7 113.4C351.1 114 350.8 115.2 350.8 116.9V121.7C350.8 123.3 351.1 124.5 351.7 125.1C352.3 125.7 353.5 126 355.2 126H362.5C364.1 126 365.2 125.8 365.8 125.3C366.5 124.8 366.8 124 366.8 123H368.5C368.5 124.6 368 125.8 367.1 126.6C366.3 127.1 364.7 127.5 362.6 127.5Z"
                              fill="#999999"/>
                        <path d="M383.1 120.6V127.4H381.4V110.8H393.4C395.4 110.8 396.9 111.2 397.9 112.1C398.8 112.9 399.2 114 399.2 115.5C399.2 116.6 399 117.5 398.5 118.2C398.2 118.6 397.6 119.1 396.9 119.5C397.5 119.6 398 120 398.3 120.6C398.7 121.3 398.9 122.3 398.9 123.4V127.3H397.2V123.2C397.2 122.2 397 121.5 396.6 121.1C396.2 120.7 395.5 120.5 394.6 120.5H383.1V120.6ZM383.1 112.5V118.9H393.9C395.1 118.9 395.9 118.6 396.5 118.1C397.1 117.5 397.5 116.6 397.5 115.2C397.5 114.4 397.2 113.7 396.6 113.2C396 112.7 395.1 112.4 394.1 112.4H383.1V112.5Z"
                              fill="#999999"/>
                        <path d="M411.7 127.4V110.7H426.5V112.4H413.5V117.9H426.2V119.6H413.5V125.7H426.5V127.4H411.7Z"
                              fill="#999999"/>
                        <path d="M439.9 127.4H438L446.6 110.7H449.2L457.8 127.4H455.8L453.7 123.2H442L439.9 127.4ZM442.9 121.5H452.8L447.9 111.9L442.9 121.5Z"
                              fill="#999999"/>
                        <path d="M468.4 110.7H486.4V112.4H478.3V127.4H476.6V112.4H468.5V110.7H468.4Z" fill="#999999"/>
                        <path d="M500.8 127.4H499.1V110.7H500.8V127.4Z" fill="#999999"/>
                        <path d="M533.1 110.7L524.1 127.4H522.3L513.4 110.7H515.4L523.1 125.5H523.5L531.2 110.7H533.1Z"
                              fill="#999999"/>
                        <path d="M544.7 127.4V110.7H559.5V112.4H546.5V117.9H559.2V119.6H546.5V125.7H559.5V127.4H544.7Z"
                              fill="#999999"/>
                        <defs>
                            <linearGradient id="paint0_linear" x1="72.9712" y1="146.232" x2="72.9712" y2="3.11127"
                                            gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FF9F32"/>
                                <stop offset="1" stop-color="#FF7400"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear" x1="72.9712" y1="3.32129" x2="72.9712" y2="130.217"
                                            gradientUnits="userSpaceOnUse">
                                <stop offset="0.5" stop-color="#FF9F32"/>
                                <stop offset="1" stop-color="#FF7400"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear" x1="72.9712" y1="3.32129" x2="72.9712" y2="130.217"
                                            gradientUnits="userSpaceOnUse">
                                <stop offset="0.5" stop-color="#FF9F32"/>
                                <stop offset="1" stop-color="#FF7400"/>
                            </linearGradient>
                            <radialGradient id="paint3_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                            gradientTransform="translate(72.9712 74.6718) scale(72.2693)">
                                <stop offset="0.75" stop-color="#FF800E" stop-opacity="0.5"/>
                                <stop offset="1" stop-color="#FF7400" stop-opacity="0"/>
                            </radialGradient>
                            <radialGradient id="paint4_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                            gradientTransform="translate(72.9715 66.6011) scale(64.2477)">
                                <stop offset="0.4" stop-color="#FF7400" stop-opacity="0.5"/>
                                <stop offset="0.9" stop-color="#FF7F0D" stop-opacity="0"/>
                            </radialGradient>
                        </defs>
                    </svg>
                </a>
                <nav class="header-nav">
                    <ul class="header__menu">
                        <li class="header__menu-item active"><a href="index.html">Home</a></li>
                        <li class="header__menu-item"><a href="#services">Services</a></li>
                        <li class="header__menu-item"><a href="#about">About Us</a></li>
                        <li class="header__menu-item"><a href="#contacts">Contact</a></li>
                    </ul>
                </nav>
                <div class="barsContainer">
                    <div class="bars">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="nav-overlay"></div>
                </div>
            </div>
        </div>
    </header>
    <main class="main">
        <section>
            <div class="container">
                <div class="row">
                    <h2>Title</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, odit!</p>
                </div>
            </div>
        </section>
        <!--End of the  -->
        <!-- -->
        <section>
            <div class="container">
                <div class="row">
                </div>
            </div>
        </section>
        <!--End of the  -->
    </main>
    <footer>
        <h2>This is footer!!</h2>
    </footer>
    <script src="public/js/app.js"></script>
</div>
</body>

</html>