<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Разработка сайтов, десктопных приложений и веб-анимации">
    <meta property="og:description" content="Разработка сайтов, десктопных приложений и веб-анимации">
    <meta name="yandex-verification" content="cf64e599556197ce" />

    <link rel="icon" href="./assets/favicon.ico" type="image/x-icon">


    <title>Crypto-Systems</title>

    <!-- Fonts -->

    <link rel="stylesheet" href="{{ asset('css/app.css') }}?v=1.2&display=swap" media="none"
        onload="if(media!='all')media='all'">
    <!-- <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css"> -->

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Scrollmagic -->
    <!-- <script async src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"></script>
    <script async src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"></script> -->
    <!-- Yandex.Metrika counter -->
    <script type="text/javascript">
        (function (m, e, t, r, i, k, a) {
            m[i] = m[i] || function () {
                (m[i].a = m[i].a || []).push(arguments)
            };
            m[i].l = 1 * new Date();
            k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode
                .insertBefore(k, a)
        })
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(66827806, "init", {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true
        });

    </script>
    <noscript>
        <div><img src="https://mc.yandex.ru/watch/66827806" style="position:absolute; left:-9999px;" alt="" /></div>
    </noscript>
    <!-- /Yandex.Metrika counter -->
</head>

<body>
    <div id="app">
        <app></app>
    </div>
    <script src="{{ asset('js/app.js') }}" defer></script>
</body>

</html>
