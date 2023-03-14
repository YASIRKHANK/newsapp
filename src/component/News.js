import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import Spiner from '../Spiner';


export class News extends Component {
// article= [
//     {
//     "source": {
//       "id": null,
//       "name": "MacRumors"
//       },
//       "author": "Tim Hardwick",
//       "title": "Standard iPhone 15 Models to Lack ProMotion and Always-On Display Features",
//       "description": "Apple's standard iPhone 15 models will not be equipped with an LPTO display, suggesting that the devices will continue to lack ProMotion support and an always-on display option like Apple's Pro models have. \n\n\n\n\n\nLast year's iPhone 14 Pro and Pro Max models u…",
//       "url": "https://www.macrumors.com/2023/03/07/iphone-15-no-promotion-always-on-display/",
//       "urlToImage": "https://images.macrumors.com/t/dQZq21dmJHx3YkK_MZNHsVFt7Zo=/1920x/article-new/2023/01/iPhone-15-General-Mock-Feature.jpg",
//       "publishedAt": "2023-03-07T10:10:23Z",
//       "content": "Apple's standard iPhone 15 models will not be equipped with an LPTO display, suggesting that the devices will continue to lack ProMotion support and an always-on display option like Apple's Pro model… [+2356 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Slashdot.org"
//       },
//       "author": "BeauHD",
//       "title": "Fitbit Is Removing Many Community-Focused Features",
//       "description": "Google-owned Fitbit is removing several community-focused features on March 27, including Challenges and open groups. Christine Persaud writes via XDA Developers reports: For me, challenges were one of Fitbit's main strengths. You could strap a fitness tracke…",
//       "url": "https://tech.slashdot.org/story/23/03/06/2245200/fitbit-is-removing-many-community-focused-features",
//       "urlToImage": "https://a.fsdn.com/sd/topics/topicgoogle_fb.gif",
//       "publishedAt": "2023-03-07T00:45:00Z",
//       "content": "For me, challenges were one of Fitbit's main strengths. You could strap a fitness tracker or smartwatch to your wrist, set up an account, and chances are at least a handful of your contacts were also… [+1199 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "heise online"
//       },
//       "author": "Dorothee Wiegand",
//       "title": "heise+ | DeepL, LanguageTool und Co: Vier KI-gestützte Textverbesserer im Test",
//       "description": "KI-Helfer wollen Füllwörter und Wortwiederholungen aufspüren und vermurkste Formulierungen ersetzen. Wir haben festgestellt: Das klappt oft, aber nicht immer.",
//       "url": "https://www.heise.de/tests/DeepL-LanguageTool-und-Co-Vier-KI-gestuetzte-Textverbesserer-im-Test-7530372.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
//       "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/7/0/9/6/7/4/ct0723sw_textve_124331_dwi_online-39848f1f40f53002.jpg",
//       "publishedAt": "2023-03-07T08:30:00Z",
//       "content": "Inhaltsverzeichnis\r\nIm Editorfenster herrscht gähnende Leere, im Kopf kreisen die immer gleichen Formulierungen, mal tippt man eine davon verzweifelt ein nur um sie gleich wieder zu löschen. Von Schü… [+3845 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "heise online"
//       },
//       "author": "Christian Liebel",
//       "title": "Blazor WebAssembly: So nutzen Sie PWA-Schnittstellen in C#",
//       "description": "Web-Platform-APIs erlauben Zugriff auf das lokale Dateisystem oder die Zwischenablage. Zur bequemen Nutzung der Schnittstellen in C# stehen NuGet-Pakete bereit.",
//       "url": "https://www.heise.de/blog/Blazor-WebAssembly-So-nutzen-Sie-PWA-Schnittstellen-in-C-7520799.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
//       "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/7/0/4/5/6/7/api-512ec475f6f8faed.jpeg",
//       "publishedAt": "2023-03-07T09:18:00Z",
//       "content": "Inhaltsverzeichnis\r\nProgressive Web Apps (PWA) sind ein webbasiertes Anwendungsmodell. Einmal implementiert lassen sie sich überall dort ausführen, wo ein halbwegs moderner Webbrowser zur Verfügung s… [+5367 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "9to5Mac"
//       },
//       "author": "Filipe Espósito",
//       "title": "Popular ‘Untitled Goose Game’ for macOS rejected twice by Apple’s Mac App Store",
//       "description": "Apple has been putting some efforts recently to show that the company cares about games, especially when it comes to the Mac. However, the company’s real-life practices show that a lot of things still need to change if it really wants to make the Mac a gaming…",
//       "url": "https://9to5mac.com/2023/03/06/untitled-goose-game-rejected-apple-mac-app-store/",
//       "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/03/Untitled-Goose-Game.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
//       "publishedAt": "2023-03-07T02:16:33Z",
//       "content": "Apple has been putting some efforts recently to show that the company cares about games, especially when it comes to the Mac. However, the company’s real-life practices show that a lot of things stil… [+2967 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Genbeta.com"
//       },
//       "author": "Marcos Merino",
//       "title": "El origen del atajo que más nos salva la vida en los PC fue un misterio mucho tiempo: esta es la historia de la función 'Deshacer'",
//       "description": "Has metido la pata. Has borrado algo que no debías en Microsoft Word, o quizá has aplicado una pincelada en el sitio incorrecto en Adobe Photoshop; o puede que hayas movido incorrectamente un bloque de código en Visual Studio Code. Tranquilo, respira y que no…",
//       "url": "https://www.genbeta.com/a-fondo/origen-atajo-que-nos-salva-vida-pc-fue-desconocido-mucho-tiempo-esta-historia-funcion-deshacer",
//       "urlToImage": "https://i.blogs.es/491158/ctrlz/840_560.jpeg",
//       "publishedAt": "2023-03-07T08:29:51Z",
//       "content": "Has metido la pata. Has borrado algo que no debías en Microsoft Word, o quizá has aplicado una pincelada en el sitio incorrecto en Adobe Photoshop; o puede que hayas movido incorrectamente un bloque … [+3723 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "AppleInsider"
//       },
//       "author": "news@appleinsider.com (Wesley Hilliard)",
//       "title": "Conflicting rumors battle over 15\" MacBook Air release date",
//       "description": "A new rumor confusingly suggests either a much later release for the 15-inch MacBook Air than expected, or a far-earlier Apple Silicon M3 release than previously predicted.A 15-inch MacBook Air is expected to be announcedRumors surrounding a larger MacBook Ai…",
//       "url": "https://appleinsider.com/articles/23/03/07/conflicting-rumors-battle-over-15-inch-macbook-air-timing",
//       "urlToImage": "https://photos5.appleinsider.com/gallery/53343-106990-15MBA-compare-2-xl.jpg",
//       "publishedAt": "2023-03-07T01:35:03Z",
//       "content": "A 15-inch MacBook Air is expected to be announced\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nA new rumor confusingly suggests either a much later rel… [+3057 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Gizmodo.jp"
//       },
//       "author": "湯木進悟",
//       "title": "M3搭載のiMac、今夏にも製造開始の模様",
//       "description": "The Vergeは、BloombergのMark Gurman記者からの最新リークとして、新たな3nm製造プロセスのM3チップを搭載する、カラフルな24インチのiMacが最終開発段階にあり、Appleによる製造テストを受けていると報じました。",
//       "url": "https://www.gizmodo.jp/2023/03/m3-imac-summer.html",
//       "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2023/03/07/2023-02-14imk00.jpg?w=1280&h=630&f=jpg",
//       "publishedAt": "2023-03-07T08:00:00Z",
//       "content": "AppleM124iMac\r\nM2M3\r\nM3\r\nThe VergeBloombergMark Gurman3nmM324iMacApple\r\n6\r\n6WWDCAppleM3\r\niMacM3\r\nSource: The Verge"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Journal du geek"
//       },
//       "author": "Arthur Nicolle",
//       "title": "Avec Silo, Apple tient probablement la meilleure série de 2023",
//       "description": "Voici enfin venue l'adaptation des romans éponymes de Hugh Howey qui promet déjà d'être une série post-apocalyptique de haut vol.\nAvec Silo, Apple tient probablement la meilleure série de 2023",
//       "url": "https://www.journaldugeek.com/2023/03/07/avec-silo-apple-tient-probablement-la-meilleure-serie-de-2023/",
//       "urlToImage": "https://www.journaldugeek.com/content/uploads/2023/03/silo-serie-capture-ecran-apple-tv.jpg",
//       "publishedAt": "2023-03-07T09:30:53Z",
//       "content": "Voici enfin venue l'adaptation des romans éponymes de Hugh Howey qui promet déjà d'être une série post-apocalyptique de haut vol.Décidément, cette année promet d’être un grand cru en matière de série… [+2141 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Applesfera.com"
//       },
//       "author": "David Bernal Raspall",
//       "title": "¿Errores con el Siri Remote en el Apple TV? Llega la solución",
//       "description": "El Apple TV se ha convertido en una de las formas más cómodas de disfrutar de contenido multimedia en casa. Este pequeño dispositivo se conecta al televisor y nos permite acceder a todo un mundo de contenido, desde películas y series hasta deportes y noticias…",
//       "url": "https://www.applesfera.com/apple-tv/errores-siri-remote-apple-tv-llega-solucion",
//       "urlToImage": "https://i.blogs.es/6d9da0/hero/840_560.jpeg",
//       "publishedAt": "2023-03-07T07:53:11Z",
//       "content": "El Apple TV se ha convertido en una de las formas más cómodas de disfrutar de contenido multimedia en casa. Este pequeño dispositivo se conecta al televisor y nos permite acceder a todo un mundo de c… [+1926 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Applesfera.com"
//       },
//       "author": "David Bernal Raspall",
//       "title": "El chip M3 es inminente. Una filtración lo coloca en estos tres nuevos Mac",
//       "description": "El mundo de la tecnología se ha mantenido expectante ante la llegada del chip M3 de Apple. Desde hace tiempo se ha estado hablando de su posible lanzamiento y finalmente parece que las filtraciones confirman su inminente llegada. Este chip promete ser uno de …",
//       "url": "https://www.applesfera.com/rumores/m3-inminente-filtracion-coloca-estos-tres-nuevos-mac",
//       "urlToImage": "https://i.blogs.es/dc0d20/hero/840_560.jpeg",
//       "publishedAt": "2023-03-07T07:31:33Z",
//       "content": "El mundo de la tecnología se ha mantenido expectante ante la llegada del chip M3 de Apple. Desde hace tiempo se ha estado hablando de su posible lanzamiento y finalmente parece que las filtraciones c… [+2348 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Applesfera.com"
//       },
//       "author": "Miguel López",
//       "title": "Espectacular tráiler de la serie que quiere destronar a 'The Last of Us': Apple TV+ ya tiene su gran distopía apocalíptica para 2023",
//       "description": "Apple TV+ cree que aún no hay suficientes series de ciencia-ficción en su catálogo, y es es una gran noticia. La compañía de Cupertino ha anunciado recientemente 'Silo', una nueva serie con la que busca mostrar un relato distópico de un futuro muy, muy desale…",
//       "url": "https://www.applesfera.com/servicios-apple/espectacular-trailer-serie-que-quiere-destronar-a-the-last-of-us-apple-tv-tiene-su-gran-distopia-apocaliptica-para-2023",
//       "urlToImage": "https://i.blogs.es/353c31/silo/840_560.jpeg",
//       "publishedAt": "2023-03-07T09:10:26Z",
//       "content": "Apple TV+ cree que aún no hay suficientes series de ciencia-ficción en su catálogo, y es es una gran noticia. La compañía de Cupertino ha anunciado recientemente 'Silo', una nueva serie con la que bu… [+1413 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "The A.V. Club"
//       },
//       "author": "Matt Schimkowitz",
//       "title": "Jason Sudeikis says the end is nigh for Ted Lasso, but \"we've set the table\" for spin-offs",
//       "description": "Two weeks before the premiere of Ted Lasso’s final season, Jason Sudeikis is flapping his mustache about the conclusion of his breakout Apple TV+ comedy. Moreover, he prepares viewers to say goodbye to the scrappy football club that won the hearts of people a…",
//       "url": "https://www.avclub.com/the-end-is-nigh-for-ted-lasso-but-table-is-set-for-spin-1850195477",
//       "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/36be5f6fb8d0aae059c3d34e2cae00b8.png",
//       "publishedAt": "2023-03-07T01:59:00Z",
//       "content": "Two weeks before the premiere of Ted Lassos final season, Jason Sudeikis is flapping his mustache about the conclusion of his breakout Apple TV+ comedy. Moreover, he prepares viewers to say goodbye t… [+1653 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Golem.de"
//       },
//       "author": "Andreas Donath",
//       "title": "Siri Remote: Apple-TV-Fernbedienungsproblem mit TVOS 16.3.3 behoben",
//       "description": "Apple hat mit TVOS 16.3.3 nach mehreren Wochen eine Lösung für die Siri-Remote-Verbindungsprobleme vorgestellt. (Apple TV, Apple)",
//       "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fsiri-remote-apple-tv-fernbedienungsproblem-mit-tvos-16-3-3-behoben-2303-172424.html&referer=https%3A%2F%2Ft.co%2F67ce082032",
//       "urlToImage": null,
//       "publishedAt": "2023-03-07T06:28:02Z",
//       "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Xataka Android"
//       },
//       "author": "Iván Ramírez",
//       "title": "Realme C55: la invasión de la isla dinámica en Android comienza en este gama de entrada con \"mini cápsula\"",
//       "description": "Realme acaba de presentar el Realme C55 como su nuevo móvil de gama de entrada. Normalmente el sucesor del sencillo Realme C35 del año pasado no causaría demasiada expectación, pero el Realme C55  tiene un nuevo as en la manga: su propia versión de la isla di…",
//       "url": "https://www.xatakandroid.com/moviles-android/realme-c55-caracteristicas-precio-ficha-tecnica",
//       "urlToImage": "https://i.blogs.es/d4f763/realmec55/840_560.jpeg",
//       "publishedAt": "2023-03-07T08:00:35Z",
//       "content": "Realme acaba de presentar el Realme C55 como su nuevo móvil de gama de entrada. Normalmente el sucesor del sencillo Realme C35 del año pasado no causaría demasiada expectación, pero el Realme C55  ti… [+2504 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "HYPEBEAST"
//       },
//       "author": "info@hypebeast.com (Hypebeast)",
//       "title": "Jason Suedeikis Suggests That 'Ted Lasso' Could End With Season Three",
//       "description": "Jason Sudeikis remains to be tight-lipped about the end of Ted Lasso, although he did hint that the Apple TV+ show's upcoming third season may be its last.In a recent interview with Deadline, the co-creator and star revealed that they are waiting to see what …",
//       "url": "https://hypebeast.com/2023/3/jason-sudeikis-suggests-ted-lasso-ending-season-three",
//       "urlToImage": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F03%2Fjason-sudeikis-suggests-ted-lasso-ending-season-three-tw.jpg?w=960&cbr=1&q=90&fit=max",
//       "publishedAt": "2023-03-07T08:38:11Z",
//       "content": "Jason Sudeikis remains to be tight-lipped about the end of Ted Lasso, although he did hint that the Apple TV+ show’s upcoming third season may be its last.\r\nIn a recent interview with Deadline, the c… [+1792 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Presse-citron"
//       },
//       "author": "Setra",
//       "title": "Un nouvel iPhone “imminent”, à la couleur inédite",
//       "description": "Vous allez peut-être adorer le nouveau coloris de l’iPhone 14.",
//       "url": "https://www.presse-citron.net/un-nouvel-iphone-imminent-a-la-couleur-inedite/",
//       "urlToImage": "https://www.presse-citron.net/app/uploads/2022/09/iphone-14-plus-hands-on.jpg",
//       "publishedAt": "2023-03-07T07:52:30Z",
//       "content": "<ul><li>Apple préparerait une annonce concernant liPhone</li><li>Pas de nouveau modèle, mais la firme pourrait très prochainement annoncer un nouveau coloris</li><li>Pour 2023, Apple pourrait lever l… [+2957 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Presse-citron"
//       },
//       "author": "Jean-Yves Alric",
//       "title": "ChatGPT arrive dans la barre des menus des Mac (et c’est gratuit)",
//       "description": "Une nouvelle application baptisée MacGPT porte l’interface de ChatGPT sur Mac. On vous explique comment l’utiliser.",
//       "url": "https://www.presse-citron.net/chatgpt-arrive-dans-la-barre-des-menus-des-mac-et-cest-gratuit/",
//       "urlToImage": "https://www.presse-citron.net/app/uploads/2023/02/ChatGPT-OpenAI-IA-intelligence-artificielle-min.jpg",
//       "publishedAt": "2023-03-07T09:30:09Z",
//       "content": "<ul><li>MacGPT, une appli gratuite, arrive sur Mac</li><li>Elle permet dutiliser lIA directement dans la barre des menus en haut de lécran</li><li>Un outil dédié aux Apple Watch vient également de vo… [+2332 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Presse-citron"
//       },
//       "author": "Jean-Yves Alric",
//       "title": "Silo : 3 choses à savoir sur la série événement d’Apple",
//       "description": "Silo, la nouvelle fiction d’Apple TV+, a été présentée dans une première bande-annonce",
//       "url": "https://www.presse-citron.net/silo-3-choses-a-savoir-sur-la-serie-evenement-dapple/",
//       "urlToImage": "https://www.presse-citron.net/app/uploads/2023/03/Silo.jpg",
//       "publishedAt": "2023-03-07T08:30:22Z",
//       "content": "<ul><li>Silo sera lancé le 5 mai 2023 sur Apple TV+</li><li>Cette série de science-fiction est adaptée dun livre best-seller qui a marqué les esprits</li><li>Son casting sannonce impressionnant et le… [+2479 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "HYPEBEAST"
//       },
//       "author": "info@hypebeast.com (Hypebeast)",
//       "title": "Nothing Teases the Launch of the New ear (2)",
//       "description": "Nothing has teased its next wireless earbuds, the ear (2), set to debut mid-March. The futuristic tech brand has announced its next product, the sequel to the Nothing ear (1) wireless earbuds. The company took to Twitter to tease fans of the upcoming product …",
//       "url": "https://hypebeast.com/2023/3/nothing-ear-2-launch-teaser",
//       "urlToImage": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F03%2Fnothing-ear-2-launch-teaser-tw.jpg?w=960&cbr=1&q=90&fit=max",
//       "publishedAt": "2023-03-07T03:45:22Z",
//       "content": "Nothing has teased its next wireless earbuds, the ear (2), set to debut mid-March. \r\nThe futuristic tech brand has announced its next product, the sequel to the Nothing ear (1) wireless earbuds. The … [+1263 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Faz.net"
//       },
//       "author": "Benjamin Fischer",
//       "title": "Spotify und Co: Wie die Welt des Musikstreamings funktioniert",
//       "description": "Spotify und Co. zahlen Milliarden an die Musikbranche. Bloß: Wie werden sie verteilt? Ein Blick auf die komplizierten Wege der Gelder, Abhängigkeiten und Änderungsvorschläge.",
//       "url": "https://www.faz.net/aktuell/wirtschaft/digitec/spotify-und-co-wie-die-welt-des-musikstreamings-funktioniert-18725270.html",
//       "urlToImage": "https://media0.faz.net/ppmedia/aktuell/wirtschaft/2316412986/1.8726124/facebook_teaser_fplus/the-weeknd-bei-der-super-bowl.jpg",
//       "publishedAt": "2023-03-07T09:32:54Z",
//       "content": "Das Streaming hat die Musikindustrie gerettet: Es gibt zahllose Überschriften und Zitate dieser Art. Gleichzeitig tobt seit Jahren eine Debatte über die Verteilung und die Höhe der Ausschüttungen. Au… [+921 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "iMore"
//       },
//       "author": "Tammy Rogers",
//       "title": "The 13-inch MacBook Pro could get a big processor boost in 2023",
//       "description": "The MacBook Pro 13-inch could be getting a big upgrade, despite the age of its chassis.",
//       "url": "https://www.imore.com/mac/macbook/the-13-inch-macbook-pro-could-get-a-big-processor-boost-in-2023",
//       "urlToImage": "https://cdn.mos.cms.futurecdn.net/AeufhCHVuBDpN2pF5vMm3D-1200-80.jpg",
//       "publishedAt": "2023-03-07T09:41:46Z",
//       "content": "7 years ago, the MacBook Pro received a redesign featuring a fresh chassis, a new keyboard, and the controversial touch bar in place of the function row. Now, almost a decade later, the design is sti… [+1470 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "iMore"
//       },
//       "author": "Stephen Warwick",
//       "title": "Apple's new 15-inch MacBook Air and 13-inch will both get major M3 processor upgrade",
//       "description": "A new report says that both of Apple's new MacBook Air models, a 13-inch and 15-inch, will feature a massive processor upgrade in the form of M3.",
//       "url": "https://www.imore.com/mac/macbook/apples-new-15-inch-macbook-air-and-13-inch-will-both-get-major-m3-processor-upgrade",
//       "urlToImage": "https://cdn.mos.cms.futurecdn.net/PBRTyUuBfUTQy3PhmXZ4vj-1200-80.jpg",
//       "publishedAt": "2023-03-07T09:42:26Z",
//       "content": "A huge new report on Apple's upcoming 15-inch MacBook Air claims that both the larger device and a refreshed 13-inch model will get an M3 chip, delivering a huge performance boost on the previous mod… [+2517 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Espinof.com"
//       },
//       "author": "Albertini",
//       "title": "\"Es el fin de la historia que queríamos contar\": Jason Sudeikis asegura que no hay planes para una temporada 4 de la excelente 'Ted Lasso'",
//       "description": "A poco más de una semana de que recibamos de nuevo a los chicos del Richmond AFC, el futuro de 'Ted Lasso', la excelente comedia de Apple TV+, parece cada vez más cercano a la despedida tras estos próximos doce episodios. Así lo han ido sugiriendo diversos ac…",
//       "url": "https://www.espinof.com/series-de-ficcion/fin-historia-que-queriamos-contar-jason-sudeikis-asegura-que-no-hay-planes-para-temporada-4-excelente-ted-lasso",
//       "urlToImage": "https://i.blogs.es/77d4cb/ted_lasso_photo_021201/840_560.jpeg",
//       "publishedAt": "2023-03-07T10:00:41Z",
//       "content": "A poco más de una semana de que recibamos de nuevo a los chicos del Richmond AFC, el futuro de 'Ted Lasso', la excelente comedia de Apple TV+, parece cada vez más cercano a la despedida tras estos pr… [+1966 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "CNET"
//       },
//       "author": "Sarah Lord （CNET News） 翻訳校正： 編集部",
//       "title": "アップル、「M3」チップを2023年の新型「iMac」と「MacBook Air」に搭載か",
//       "description": "アップルはM3搭載「MacBook Air」を6月に発表した後、M3搭載「iMac」を年内に発表する可能性があるという。",
//       "url": "https://japan.cnet.com/article/35200918/",
//       "urlToImage": "https://japan.cnet.com/storage/2023/03/07/528ed00a5659f57df8a966ff1b9526e8/t/640/480/d/product-background-light-blue-stars-blue-yellow-lines-3_1280x960.jpg",
//       "publishedAt": "2023-03-07T00:37:00Z",
//       "content": "AppleM3BloombergMark Gurman35Power OnAppleM3MacBook Air6M3iMac\r\nApple6Worldwide Developers ConferenceWWDC13MacBook AirM3AppleGurmanAppleMac5nm3nm\r\nM3iMac2023M32024iPad ProiPad ProAppleEL\r\nApple\r\nBloo… [+130 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Les Numériques"
//       },
//       "author": "Louis Paillat",
//       "title": "Test Casque nomade Tour One M2 : JBL entre dans la cour des grands",
//       "description": "Le Tour One M2 est la deuxième itération du casque haut de gamme de JBL. Il embarque toutes les technologies dernier cri du fabricant américain : réduction de bruit adaptative, audio spatial, Smart Talk…",
//       "url": "https://www.lesnumeriques.com/casque-nomade/jbl-tour-one-m2-p70671/test.html",
//       "urlToImage": "https://cdn.lesnumeriques.com/optim/test/20/207676/acd0d840-casque-nomade-jbl-tour-one-m2__1200_630__0-163-3000-1738_wtmk.jpg",
//       "publishedAt": "2023-03-07T07:00:00Z",
//       "content": "Le Tour One M2 est la deuxième itération du casque haut de gamme de JBL. Il embarque toutes les technologies dernier cri du fabricant américain : réduction de bruit adaptative, audio spatial, Smart T… [+11390 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Playpcesor.com"
//       },
//       "author": "Esor Huang",
//       "title": "測試 ChatPDF 用 AI 整理 PDF 論文摘要、註明來源與回答重點問題",
//       "description": "在 ChatGPT、 Midjourney 等 AI 內容生成工具大熱，加上前幾天 OpenAI 開放 API 功能後，許多工具串接 AI 功能來實現不只是問答，而是更多圖文影音內容的自動創造。我自己比較專注在文字內容、想法規劃的部份， 而今天要介紹的「 ChatPDF 」就是...",
//       "url": "https://www.playpcesor.com/2023/03/chatpdf-ai-pdf.html",
//       "urlToImage": "https://blogger.googleusercontent.com/img/a/AVvXsEjE3Ix7cYSVu2YSxkFrdrvSm336SFN4pu_zO9TEbcKm4Jqbp0HKHNOX5cooVIQ8z-PVOl-pqkf1JqBpKS4Owp5tDFBIHGNpCV1e95bobqhwPXGNANDTHeLfpfN7BPITB1kLr3vLeRXvgrQXP2VO6BBEa-yvva5e8PJI9rl9KEaCnIJukar0lNQ=w1200-h630-p-k-no-nu",
//       "publishedAt": "2023-03-07T03:08:00Z",
//       "content": "在 ChatGPT、 Midjourney 等 AI 內容生成工具大熱，加上前幾天 OpenAI 開放 API 功能後，許多工具串接 AI 功能來實現不只是問答，而是更多圖文影音內容的自動創造。我自己比較專注在文字內容、想法規劃的部份，而今天要介紹的「 ChatPDF 」就是在這個趨勢下針對論文、書籍內容的一個 AI 整理工具。\r\n首先，「 ChatPDF 」的用途正如它的名稱，讓我們利用 Ch… [+2558 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Caschys Blog"
//       },
//       "author": "André Westphal",
//       "title": "WhatsApp Beta für iOS 23.5.0.71: Vorbereitung von Gruppen mit Verfallsdatum",
//       "description": "WhatsApp hat für Apple iOS die neue Beta-Version 23.5.0.71 ins Rennen geschickt, bei TestFlight aber auch noch als Build 23.5.0 (453135348) ausgewiesen. Dabei lässt sich hinter den Kulissen ein Ausblick auf eine geplante Neuerung erkennen, die spannend sein k…",
//       "url": "https://stadt-bremerhaven.de/whatsapp-beta-fuer-ios-23-5-0-71-vorbereitung-von-gruppen-mit-verfallsdatum/",
//       "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2018/07/WhatsApp-logo.jpg",
//       "publishedAt": "2023-03-07T09:00:59Z",
//       "content": "WhatsApp hat für Apple iOS die neue Beta-Version 23.5.0.71 ins Rennen geschickt, bei TestFlight aber auch noch als Build 23.5.0 (453135348) ausgewiesen. Dabei lässt sich hinter den Kulissen ein Ausbl… [+2204 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Caschys Blog"
//       },
//       "author": "caschy",
//       "title": "Telekom: Treuebonus für Festnetzkunden, die auch Mobilfunkkunden werden",
//       "description": "Die Telekom geht am 4. April mit einer neuen Aktion an den Start. Das Ganze nennt sich Treuebonus und richtet sich an lang­jäh­rige Fest­netz- und Inter­net­kunden. Wer schon einen Festnetzanschluss hat, der bekommt beispielsweise beim Abschluss eines Mobilfu…",
//       "url": "https://stadt-bremerhaven.de/telekom-treuebonus-fuer-festnetzkunden-die-auch-mobilfunkkunden-werden/",
//       "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2022/05/Deutsche-Telekom-Logo-1.jpg",
//       "publishedAt": "2023-03-07T09:30:14Z",
//       "content": "Die Telekom geht am 4. April mit einer neuen Aktion an den Start. Das Ganze nennt sich Treuebonus und richtet sich an lang­jäh­rige Fest­netz- und Inter­net­kunden. Wer schon einen Festnetzanschluss … [+3673 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Caschys Blog"
//       },
//       "author": "Felix Frank",
//       "title": "Homey Bridge: Smart-Home-Zentrale für 69 Euro ab sofort in Europa verfügbar",
//       "description": "Bereits im September 2021 hatte der niederländische Hersteller Athom mit der Homey Bridge eine neue Smart-Home-Zentrale vorgestellt. Diese stellt nicht den offiziellen Nachfolger für den Homey Pro dar, dafür wird man in diesem Jahr noch einen neuen Homey Pro …",
//       "url": "https://stadt-bremerhaven.de/homey-bridge-smart-home-zentrale-fuer-69-euro-ab-sofort-in-europa-verfuegbar/",
//       "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2021/09/homey_.webp",
//       "publishedAt": "2023-03-07T05:30:12Z",
//       "content": "Bereits im September 2021 hatte der niederländische Hersteller Athom mit der Homey Bridge eine neue Smart-Home-Zentrale vorgestellt. Diese stellt nicht den offiziellen Nachfolger für den Homey Pro da… [+4912 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "IndieWire"
//       },
//       "author": "Christian Zilko",
//       "title": "Scorsese and DiCaprio’s ‘Devil in the White City’ Series No Longer Moving Forward at Hulu",
//       "description": "The cancellation follows the news that Keanu Reeves and Todd Field exited the project. Producers plan to shop the show to other networks.",
//       "url": "https://www.indiewire.com/2023/03/devil-in-the-white-city-scrapped-hulu-1234816602/",
//       "urlToImage": "https://www.indiewire.com/wp-content/uploads/2023/03/Screen-Shot-2023-03-06-at-5.31.45-PM.png?w=780",
//       "publishedAt": "2023-03-07T01:50:56Z",
//       "content": "After a lengthy pre-production process that saw a revolving door of talent join and then exit the project, Martin Scorsese and Leonardo DiCaprio’s “Devil in the White City” series is no longer moving… [+2005 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Frandroid"
//       },
//       "author": "Titouan Gourlin",
//       "title": "MacBook Air M3, Tesla en longs trajets et la Pixel Watch – Tech’spresso",
//       "description": "Vous n’avez pas eu le temps de suivre l’actualité hier ? Voici ce qui a marqué le lundi 6 mars 2023. Pour ne manquer aucune actualité, pensez à vous inscrire à la newsletter Frandroid.",
//       "url": "https://www.frandroid.com/actualites-generales/1629011_macbook-air-m3-tesla-en-longs-trajets-et-la-pixel-watch-techspresso",
//       "urlToImage": "https://images.frandroid.com/wp-content/uploads/2023/02/apple-macbook-pro-16-m2-max-test-2-scaled.jpg",
//       "publishedAt": "2023-03-07T06:03:32Z",
//       "content": "Vous navez pas eu le temps de suivre lactualité hier? Voici ce qui a marqué le lundi 6 mars 2023. Pour ne manquer aucune actualité, pensez à vous inscrire à la newsletter Frandroid.\r\nSource : Chloé P… [+1154 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Wwwhatsnew.com"
//       },
//       "author": "Miriam Schuager",
//       "title": "Microsoft ya permite que uses Outlook para Mac de forma gratuita",
//       "description": "Ya puedes usar Outlook en Mac de forma gratuita, sin necesidad de pasar por una suscripción a Microsoft 365. Así lo anunció el equipo de Microsoft, junto con algunas novedades que los usuarios encontrarán en la versión de Outlook para Mac cuando lo descarguen…",
//       "url": "https://wwwhatsnew.com/2023/03/07/microsoft-ya-permite-que-uses-outlook-para-mac-de-forma-gratuita/",
//       "urlToImage": "https://wwwhatsnew.com/wp-content/uploads/2023/03/Outlook-para-Mac.jpg",
//       "publishedAt": "2023-03-07T07:00:47Z",
//       "content": "Ya puedes usar Outlook en Mac de forma gratuita, sin necesidad de pasar por una suscripción a Microsoft 365.\r\nAsí lo anunció el equipo de Microsoft, junto con algunas novedades que los usuarios encon… [+1647 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Lifehacker.ru"
//       },
//       "author": "Виктор Подволоцкий",
//       "title": "Вышел тизер сериала «Бункер» о постапокалиптическом будущем под землёй",
//       "description": "Грандиозная антиутопия от Apple.",
//       "url": "https://lifehacker.ru/tizer-seriala-bunker/",
//       "urlToImage": "https://cdn.lifehacker.ru/wp-content/uploads/2023/03/serie-4_1678169971-1280x640.jpg",
//       "publishedAt": "2023-03-07T06:23:14Z",
//       "content": "YouTube «» (Silo). Apple TV+ , .\r\n , , .\r\n («»). , , (« ») .\r\n 5 ."
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Lifehacker.ru"
//       },
//       "author": "Виктор Подволоцкий",
//       "title": "Microsoft сделала Outlook для Mac полностью бесплатным",
//       "description": "Для любых учётных записей.",
//       "url": "https://lifehacker.ru/microsoft-sdelala-outlook-mac-besplatnym/",
//       "urlToImage": "https://cdn.lifehacker.ru/wp-content/uploads/2023/03/Outlook_for_Mac_headpic-kopiya_1678171482-1280x640.jpg",
//       "publishedAt": "2023-03-07T06:46:41Z",
//       "content": "7 Microsoft Outlook Mac . Apple Microsoft 365 Office.\r\nOutlook Mac Outlook.com, Gmail, iCloud, Yahoo IMAP. 2020 Microsoft macOS, .\r\nOutlook Mac M1 M2 macOS . , iOS, iPhone , Mac."
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Srad.jp"
//       },
//       "author": "nagazou",
//       "title": "エレコム、USB対応製品の表記をガイドライン準拠に変更へ",
//       "description": "エレコムは3月1日、同社のUSB対応製品に関して規格の表記を変更すると発表した。2022年9月30日に改訂された改定ガイドラインに則った形に修正される。同社では2023年発売の製品から、製品パッケージおよび製品ホームページにおいて正式表記（新表記）を適用する。製品自体に関しては仕様の変更はないとしている（AKIBA PC Hotline!、エレコム）。 \n\nあるAnonymous Coward 曰く、USB3.0、USB3.1(Gen1)、USB3.2(Gen1)は、USB 5Gbpsになる。USB3.1(Gen…",
//       "url": "https://hardware.srad.jp/story/23/03/06/1448254/",
//       "urlToImage": "https://srad.jp/static/topics/hardware_64.png",
//       "publishedAt": "2023-03-07T05:04:00Z",
//       "content": "USB3.0USB3.1(Gen1)USB3.2(Gen1)USB 5GbpsUSB3.1(Gen2)USB3.2(Gen 1x2)USB3.2(Gen2)USB 10GbpsUSB3.2(Gen 2x2)USB 20GbpsUSB4(Version 1)USB 40Gbps\r\nUSB3.110GBbpsGen15GbpsUSB 3.220GbpsGen15Gbps"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Ifanr.com"
//       },
//       "author": "何, 嘉昕",
//       "title": "早报 | 小米汽车预计明年上半年量产/iPhone 14 新颜色或今明推出/华为辟谣出售手机业务",
//       "description": "京东「百亿补贴」商品确认不支持价保\n钉钉收购协同办公厂商我来#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。\n爱范儿 |\n原文链接 ·\n查看评论 ·\n新浪微博",
//       "url": "https://www.ifanr.com/1538108",
//       "urlToImage": "https://s3.ifanr.com/wp-content/uploads/2023/03/2-8.jpg",
//       "publishedAt": "2023-03-07T00:31:13Z",
//       "content": "<ul><li></li><li></li><li></li><li> ChatGPT </li><li></li><li></li><li></li><li> AI </li><li></li><li> P7i </li><li> iPhone 14 </li><li> MacBook M3 </li><li> FM 7.0 </li><li>GoodNotes </li><li> 2 3 <… [+1105 chars]"
//       },
//     {
//     "source": {
//       "id": "al-jazeera-english",
//       "name": "Al Jazeera English"
//       },
//       "author": "Amy Chew",
//       "title": "Southeast Asia the ‘new China’ for supply chains: business group",
//       "description": "ASEAN Business Advisory Council chairperson Arsjad Rasjid says region should be 'supply chain of the world'.",
//       "url": "https://www.aljazeera.com/economy/2023/3/7/southeast-asia-the-new-china-for-supply-chains-business-group",
//       "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/03/Arsjad-Rasjid-and-colleague.jpg?resize=1920%2C1440",
//       "publishedAt": "2023-03-07T04:02:10Z",
//       "content": "Kuala Lumpur, Malaysia Southeast Asia is the new China and should be the centre of the global supply chain, the head of an influential regional business body has said.\r\nIn an interview, Arsjad Rasjid… [+4089 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "GSMArena.com"
//       },
//       "author": "Michail",
//       "title": "Counterpoint: Apple dominates top-ten best selling smartphones list for 2022",
//       "description": "2022 was a great year for Apple and its iPhone lineup as per the latest Counterpoint Research report which outlines the top ten best-selling phones of last year. Eight of the top ten devices came from Apple’s camp with the iPhone 13 garnering the top spot wit…",
//       "url": "https://www.gsmarena.com/counterpoint_apple_dominates_topten_best_selling_smartphones_list_for_2022-news-57804.php",
//       "urlToImage": "https://fdn.gsmarena.com/imgroot/news/23/03/counterpoint-apple-dominates-top-ten-best-sellers-2022/-952x498w6/gsmarena_000.jpg",
//       "publishedAt": "2023-03-07T08:40:01Z",
//       "content": "2022 was a great year for Apple and its iPhone lineup as per the latest Counterpoint Research report which outlines the top ten best-selling phones of last year. Eight of the top ten devices came fro… [+1106 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "GSMArena.com"
//       },
//       "author": "Vlad",
//       "title": "New iPhone 14 color is apparently imminent",
//       "description": "Last week a rumor claimed Apple is readying a new color option for the iPhone 14 and iPhone 14 Plus, which would come around one year after the company released new green versions for the iPhone 13 and iPhone 13 mini. That launch took place on March 8, last y…",
//       "url": "https://www.gsmarena.com/new_iphone_14_color_is_apparently_imminent-news-57800.php",
//       "urlToImage": "https://fdn.gsmarena.com/imgroot/news/23/03/iphone-14-yellow-imminent/-952x498w6/gsmarena_000.jpg",
//       "publishedAt": "2023-03-07T00:59:01Z",
//       "content": "Last week a rumor claimed Apple is readying a new color option for the iPhone 14 and iPhone 14 Plus, which would come around one year after the company released new green versions for the iPhone 13 a… [+1170 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Motley Fool"
//       },
//       "author": "newsfeedback@fool.com (Dani Cook)",
//       "title": "2 Stocks to Invest in Virtual Reality",
//       "description": "These companies are building the future of virtual reality, and now is a great time to invest in the burgeoning market.",
//       "url": "https://www.fool.com/investing/2023/03/07/2-stocks-to-invest-in-virtual-reality/",
//       "urlToImage": "https://g.foolcdn.com/editorial/images/723260/virtual-reality-headset-oculus.jpg",
//       "publishedAt": "2023-03-07T10:00:00Z",
//       "content": "Virtual reality (VR) has shown up in a number of devices and iterations since the early 1990s. However, recent advances in the technology have only just made it possible for VR to fulfill the experie… [+3717 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Deadline"
//       },
//       "author": "Rosy Cordero",
//       "title": "Jason Sudeikis Says ‘Ted Lasso’ Season 3 “Is The End Of This Story We Wanted To Tell”; Addresses Potential Spinoffs",
//       "description": "Jason Sudeikis teases his journey as the character Ted Lasso in the self-titled comedy series from Apple is coming to an end with Season 3. “I mean, there’s always Cameo, right?” Sudeikis tells Deadline when asked if Season 3 will be the end of Ted Lasso. “Th…",
//       "url": "https://deadline.com/2023/03/jason-sudeikis-ted-lasso-season-3-spoilers-series-finale-spinoffs-1235280998/",
//       "urlToImage": "https://deadline.com/wp-content/uploads/2023/03/Ted_Lasso_Photo_021203.jpg?w=1024",
//       "publishedAt": "2023-03-07T00:49:32Z",
//       "content": "Jason Sudeikis teases his journey as the character Ted Lasso in the self-titled comedy series from Apple is coming to an end with Season 3.\r\n“I mean, there’s always Cameo, right?” Sudeikis tells Dead… [+1285 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Deadline"
//       },
//       "author": "Armando Tinoco",
//       "title": "‘Scream 6’ Directors Are Hopeful For ‘Scream 7’ “Whether We’re Involved Or Not”",
//       "description": "Ghostface has moved out of Woodsboro and traveled cross country to terrorize New York City in Scream VI. The beloved horror franchise has been scaring audiences since 1996 and the directors of the latest installment are hopeful Scream VII and more films will …",
//       "url": "https://deadline.com/2023/03/scream-6-directors-hopeful-scream-7-future-film-franchise-1235281159/",
//       "urlToImage": "https://deadline.com/wp-content/uploads/2023/03/scream-premiere.jpg?w=1024",
//       "publishedAt": "2023-03-07T03:36:04Z",
//       "content": "Ghostface has moved out of Woodsboro and traveled cross country to terrorize New York City in Scream VI. The beloved horror franchise has been scaring audiences since 1996 and the directors of the la… [+1360 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Marketingdirecto.com"
//       },
//       "author": "Patricia Aguado",
//       "title": "Equativ anuncia la incorporación de Bridgepoint como su nuevo accionista mayoritario",
//       "description": "El inversor de capital privado enfocado en mercado medio acelerará el desarrollo de la única alternativa publicitaria independiente a los gigantes tecnológicos Google, Amazon, Facebook, Apple y Microsoft (GAFAM), apoyando la Open Web\nLa entrada Equativ anunci…",
//       "url": "https://www.marketingdirecto.com/marketing-general/tendencias/equativ-anuncia-incorporacion-bridgepoint-nuevo-accionista",
//       "urlToImage": "https://www.marketingdirecto.com/wp-content/uploads/2023/03/Equativ-y-Bridgepoint-1.jpg",
//       "publishedAt": "2023-03-07T08:52:39Z",
//       "content": "El inversor de capital privado enfocado en mercado medio acelerará el desarrollo de la única alternativa publicitaria independiente a los gigantes tecnológicos Google, Amazon, Facebook, Apple y Micro… [+4526 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Andro4all.com"
//       },
//       "author": "Damián García",
//       "title": "Samsung Galaxy Tab S9: la renovación de las tabletas Android más 'premium' ya está en cocina",
//       "description": "Probablemente no será pronto cuando necesitemos actualizar nuestra guía de compra de tablets Samsung, y es que el gigante surcoreano no parece presto por ahora a actualizar unas Galaxy Tab S8 que todavía cuentan con recorrido en el mercado, máxime sabiendo qu…",
//       "url": "https://andro4all.com/tablets/samsung-galaxy-tab-s9-la-renovacion-de-las-tabletas-android-mas-premium-ya-esta-en-cocina",
//       "urlToImage": "https://andro4all.com/hero/2022/03/Samsung-Galaxy-Tab-S8-frontal-con-S-Pen.jpg?width=1200",
//       "publishedAt": "2023-03-07T02:01:51Z",
//       "content": "Esta es la Samsung Galaxy Tab S8, con su popular lápiz óptico S-Pen dibujando en Samsung Notes.\r\nProbablemente no será pronto cuando necesitemos actualizar nuestra guía de compra de tablets Samsung, … [+2696 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Andro4all.com"
//       },
//       "author": "JuanMi Guirado",
//       "title": "Precio imbatible: el Amazfit GTR 3 Pro Limited Edition puede ser tuyo por 135 euros",
//       "description": "La edición más especial de este Amazfit GTR 3 Pro llega a su precio más bajo, y con diferencia. Gracias a los múltiples cupones descuento que tenemos disponibles en AliExpress podremos conseguir esta Limited Edition del reloj de Amazfit por solo 229,90 . Es u…",
//       "url": "https://andro4all.com/ofertas/precio-imbatible-el-amazfit-gtr-3-pro-puede-ser-tuyo-por-135-euros-en-su-edicion-limitada",
//       "urlToImage": "https://andro4all.com/hero/2023/03/amazfit-gtr-3-pro-edicion-limitada.jpg?width=1200",
//       "publishedAt": "2023-03-07T07:30:19Z",
//       "content": "El Amazfit GTR 3 Pro es un reloj con aspecto clásico y con toda la última tecnología integrada.\r\nLa edición más especial de este Amazfit GTR 3 Pro llega a su precio más bajo, y con diferencia. Gracia… [+4579 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Clubic"
//       },
//       "author": "/auteur/369778-thibaut-keutchayan.html",
//       "title": "Des films, des séries : Free lance un nouveau service exclusivement réservé aux abonnés Freebox",
//       "description": "Free continue d'enrichir son offre pour ses clients Freebox, et notamment ceux qui apprécient le cinéma.",
//       "url": "https://www.clubic.com/connexion-internet/fai-free-box-freebox/actualite-459906-des-films-des-series-free-lance-un-nouveau-service-exclusivement-reserve-aux-abonnes-freebox.html",
//       "urlToImage": "https://pic.clubic.com/v1/images/2086059/raw",
//       "publishedAt": "2023-03-07T09:55:00Z",
//       "content": "Free continue d'enrichir son offre pour ses clients Freebox, et notamment ceux qui apprécient le cinéma. \r\nAvec plus de 300 films et séries ajoutés sans surcoût dans OQEE by Free, Free passe la secon… [+2555 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Impress.co.jp"
//       },
//       "author": null,
//       "title": "【Mac Info】Mac/Windowsで画像生成AI「Stable Diffusion」を手軽に使ってみよう！",
//       "description": "2022年にStability AIがオープンソースで公開した「Stable Diffusion」は、ディープラーニング(深層学習)によって入力したテキストから画像を自動作成する画像生成AIです。当初Macで利用するには自らセットアップして実行環境を構築する必要がありましたが、現在はStable Diffusionを組み込んだアプリがたくさんリリースされ、誰もが簡単に利用できます。その中でもまず一番に試してみたいのが、Macで動作する「DiffusionBee」というアプリ。ここではDiffusionBeeの基本…",
//       "url": "https://pc.watch.impress.co.jp/docs/column/macinfo/1483801.html",
//       "urlToImage": "https://pc.watch.impress.co.jp/img/pcw/list/1483/801/image12.png",
//       "publishedAt": "2023-03-07T03:05:40Z",
//       "content": "2022Stability AIStable Diffusion()AIMacStable DiffusionMacDiffusionBeeDiffusionBee \r\nAI\r\n Stable DiffusionMacDiffusionBee \r\n 1 \r\n DiffusionBeeAIMacGB \r\n MacDiffusionBeeApple SiliconIntelCPUMac(Intel … [+312 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Appbank.net"
//       },
//       "author": "テクノロジー記事班",
//       "title": "iPhone 14の〝新色〟がリーク",
//       "description": "「iPhone 14」にまもなく新色が登場すると、経済紙記者のマーク・ガーマン氏がリークしています。 *Category:テクノロジー Technology *Source：9to5Mac(1) ,(2) ,@markg […]",
//       "url": "https://www.appbank.net/2023/03/07/technology/2417801.php",
//       "urlToImage": "https://www.appbank.net/wp-content/uploads/2023/03/2023-0307-iPhone-newcolor-thumb2-1.jpeg",
//       "publishedAt": "2023-03-07T09:48:48Z",
//       "content": "iPhone 14\r\n*Category:\r\n Technology *Source9to5Mac(1) ,(2) ,@markgurman\r\nAppleiPhone 14Twitter\r\nNearly a year to the day after the announcement of the green iPhone 13, a new iPhone 14 color is indeed … [+408 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Ijunkie.com"
//       },
//       "author": "Dave Johnson",
//       "title": "New MacBook Air Models Could Ship with M3 Chips",
//       "description": "A recent report suggests that Apple is working on a new-generation 13- and 15-inch MacBook Air that could be powered by the M3 chip.   Rumors of a forthcoming next-generation MacBook Air have become common online, which is unsurprising. The prospect of a 13-i…",
//       "url": "https://ijunkie.com/new-macbook-air-models-could-ship-with-m3-chips/",
//       "urlToImage": "https://ijunkie.com/wp-content/uploads/2022/12/M2-MacBook-Air-KV-scaled.jpeg",
//       "publishedAt": "2023-03-07T09:24:04Z",
//       "content": "New MacBook Air Models Could Ship with M3 Chips\r\nA recent report suggests that Apple is working on a new-generation 13- and 15-inch MacBook Air that could be powered by the M3 chip.  \r\nRumors of a fo… [+1665 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "mindbodygreen.com"
//       },
//       "author": "Devon Barrow",
//       "title": "5 Beneficial Juices That Might Be Missing From Your Wellness Routine",
//       "description": "Whatever self-care solution you need, there's a juice for that!",
//       "url": "https://www.mindbodygreen.com/articles/5-beneficial-juices-that-might-be-missing-from-your-wellness-routine",
//       "urlToImage": "https://mindbodygreen-res.cloudinary.com/image/upload/c_fill,w_2000,h_1200,g_auto,fl_lossy,f_jpg/org/jjkd3bwrqleq7cd75.jpg",
//       "publishedAt": "2023-03-07T08:00:00Z",
//       "content": "Maybe youre dealing with sleepless nights, seeking immune support, or simply taking a proactive approach to your health Theres a unique juice that can help. R.W. Knudsens premium juices offer a full … [+3720 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "DIE WELT"
//       },
//       "author": "WELT",
//       "title": "Johannes Paul II. soll mehrere Missbrauchsfälle vertuscht haben",
//       "description": "Sexuelle Gewalt innerhalb der katholischen Kirche wurde jahrzehntelang verharmlost, verheimlicht und nicht aufgeklärt. Laut Recherchen eines Journalisten soll auch Johannes Paul II. vor seiner Papstwahl von Pädophilie-Fällen gewusst und nichts unternommen hab…",
//       "url": "https://www.welt.de/vermischtes/kriminalitaet/article244125723/Papst-Johannes-Paul-II-vertuschte-sexuellen-Missbrauch-in-katholischer-Kirche.html",
//       "urlToImage": "https://img.welt.de/img/vermischtes/kriminalitaet/mobile244126097/9771351247-ci16x9-w1200/Pope-John-Paul-II-Visit-To-Ireland-In-1979.jpg",
//       "publishedAt": "2023-03-07T07:12:00Z",
//       "content": "Der verstorbene Papst Johannes Paul II. soll einem polnischen Medienbericht zufolge vor seiner Papstwahl Missbrauchsfälle in der katholischen Kirche Polens vertuscht haben. In seiner Zeit als Kardina… [+2092 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "DIE WELT"
//       },
//       "author": "WELT",
//       "title": "Das sind die 7 wohl süßesten Meerestiere der Welt",
//       "description": "Nicht alles, was in den Ozeanen lebt, ist unbedingt angsteinflößend. Tauchen wir also in die Welt der possierlichsten Meerestierchen ein. Manche haben die süßesten Kulleraugen – aber kennst du auch den scheuen Pancake-Oktopus oder den Mini-Meeresengel?",
//       "url": "https://www.welt.de/kmpkt/article243792907/Das-sind-die-wohl-7-suessesten-Meerestiere-der-Welt.html",
//       "urlToImage": "https://img.welt.de/img/incoming/mobile244013005/8661351617-ci16x9-w1200/Young-Neoclinus-Okazakii.jpg",
//       "publishedAt": "2023-03-07T08:21:00Z",
//       "content": "Die Ozeane unserer Erde beherbergen eine unglaubliche Vielfalt an Lebensformen von winzigen Planktonorganismen bis hin zu riesigen Walen. Und nicht alle Meeresbewohner sind bedrohlich oder sehen scha… [+3885 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "DIE WELT"
//       },
//       "author": "WELT",
//       "title": "Britischer Ausschuss warnt vor Engpässen in westlichen Waffendepots",
//       "description": "„Russlands Angriff auf die Ukraine sollte für den Westen ein Weckruf sein“, warnt der Vorsitzende des britischen Verteidigungsausschusses, Tobias Ellwood. Derweil hat die Ukraine 307 Kinder aus den von Russland besetzten Gebieten zurückgeholt. Mehr im Livetic…",
//       "url": "https://www.welt.de/politik/ausland/article244140923/Ukraine-News-Britischer-Ausschuss-warnt-vor-Engpaessen-in-westlichen-Waffendepots.html",
//       "urlToImage": "https://img.welt.de/img/newsticker/dpa_nt/afxline/topthemen/mobile244135043/8461353707-ci16x9-w1200/Ukraine-Krieg-Bachmut.jpg",
//       "publishedAt": "2023-03-07T04:43:09Z",
//       "content": "Angesichts stetiger Waffenlieferungen westlicher Länder an die Ukraine warnt der Verteidigungsausschuss des britischen Parlaments vor einer zu starken Ausdünnung der eigenen Munitionsreserven. Großbr… [+7038 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Techbang.com"
//       },
//       "author": "cnBeta",
//       "title": "據傳Apple Watch Series X和SE 3將在明年推出，螢幕變得更大",
//       "description": "據傳Apple Watch\"Series X\"和SE 3將在明年推出 配備更大的螢幕\n根據技術研究公司Omdia的分析師David Hsieh上週分享的研究，蘋果計畫在2024年發佈所謂的\"Apple Watch Series X\"和第三代Apple Watch SE型號，並配備更大的螢幕。Hsieh在他的研究報告中稱，Series X將有1.89英吋和2.04英吋的螢幕尺寸選擇，根據錶殼尺寸的不同，這將比Apple Watch Series 8大5%到10%。\n這些測量值適用於長方形顯示面板，但由於Apple …",
//       "url": "https://www.techbang.com/posts/103880-the-apple-watch-series-x-and-se-3-are-rumored-to-be-available",
//       "urlToImage": "https://cdn1.techbang.com/system/excerpt_images/103880/original/3adcbdb10919ce7656d255793170001b.jpg?1675928487",
//       "publishedAt": "2023-03-07T02:30:00Z",
//       "content": "OmdiaDavid Hsieh2024\"Apple Watch Series X\"Apple Watch SEHsiehSeries X1.892.04Apple Watch Series 85%10%\r\nApple Watch\r\n\"Apple Watch Series X\"iPhone XHsieh\"X\"Apple WatchApple Watch2014920154\r\nApple Watc… [+160 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Basicthinking.de"
//       },
//       "author": "Sponsor [Anzeige]",
//       "title": "Ausgaben im Unternehmen zentral verwalten: Wie funktioniert’s?",
//       "description": "Je größer ein Unternehmen wird, desto mehr Ausgaben müssen auch verwaltet werden. Um nicht den Überblick zu verlieren, gibt es Wallester Business. Wir stellen dir die intelligente Lösung für Unternehmen vor. Was ist Wallester Business? Wallester Business ist …",
//       "url": "https://www.basicthinking.de/blog/2023/03/07/wallester-business/",
//       "urlToImage": "https://www.basicthinking.de/blog/wp-content/uploads/2023/02/2048x1152.jpg",
//       "publishedAt": "2023-03-07T10:00:28Z",
//       "content": "Je größer ein Unternehmen wird, desto mehr Ausgaben müssen auch verwaltet werden. Um nicht den Überblick zu verlieren, gibt es Wallester Business. Wir stellen dir die intelligente Lösung für Unterneh… [+4276 chars]"
//       },
//     {
//     "source": {
//       "id": "marca",
//       "name": "Marca"
//       },
//       "author": "GERARDO LUNA",
//       "title": "Casillas bromea con la visita al Camp Nou: \"Conmigo no cuentes, no lo piso\"",
//       "description": "En la Kings League InfoJobs siempre tenemos show y más aún en estos programas donde se juntan casi todos los presidentes de los equipos. Esta vez los protagonistas son, una vez más",
//       "url": "https://www.marca.com/videojuegos/kings-league/2023/03/07/64068d06e2704e74078b45ef.html",
//       "urlToImage": "https://ak.uecdn.es/p/110/thumbnail/entry_id/0_4sd97zb9/width/657/type/2/bgcolor/000000/0_4sd97zb9.jpg",
//       "publishedAt": "2023-03-07T01:31:49Z",
//       "content": "En la Kings League InfoJobs siempre tenemos show y más aún en estos programas donde se juntan casi todos los presidentes de los equipos. Esta vez los protagonistas son, una vez más, Iker Casillas y G… [+2233 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Free.com.tw"
//       },
//       "author": "Pseric",
//       "title": "舊電腦也能安裝 Windows 11！Tiny11 精簡版讓你輕鬆瘦身安裝",
//       "description": "使用者應該都很習慣從 Microsoft 微軟官網下載 Windows ISO 光碟映像檔，一來安全、可靠，不 ... 閱讀全文 »\n這篇文章 舊電腦也能安裝 Windows 11！Tiny11 精簡版讓你輕鬆瘦身安裝 最早出現在 免費資源網路社群 ，請追蹤 Google 新聞、Facebook、Twitter 或 RSS feed 獲取更多科技新知及免費資源相關介紹教學。",
//       "url": "https://free.com.tw/?p=96154",
//       "urlToImage": "https://free.com.tw/wp-content/uploads/2023/02/tiny11-01.jpg",
//       "publishedAt": "2023-03-07T02:00:00Z",
//       "content": "diy13 / 123rf stock photos\r\nMicrosoft Windows ISO Windows Hasleo Windows ISO Downloader Microsoft Windows 10 / Windows 11 UUP dump\r\n Windows Windows 11 \r\nTiny11 Windows 11 NTDEV Tiny10 Tiny11 Windows… [+528 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Ascii.jp"
//       },
//       "author": "ASCII",
//       "title": "Apple、国際女性デーに向けiPhoneとApple Watchを用いた月経周期の記録や、女性ならではの疾病研究の取り組みを紹介",
//       "description": "Appleは国際女性デーに向けて公開した記事として、iPhoneとApple Watchを用いた女性の月経周期の記録や、月経不順などからわかる子宮内膜症などへの研究の取り組みを紹介。",
//       "url": "https://weekly.ascii.jp/elem/000/004/127/4127561/",
//       "urlToImage": "https://ascii.jp/img/2023/03/07/3503346/l/e459eb15af46f9c2.jpg",
//       "publishedAt": "2023-03-07T05:00:00Z",
//       "content": "Apple32Apple Women’s Health Study\r\n38AppleT .H.ChanNIEHSPCOS\r\nApple Women's Health StudyApple ResearchiPhoneApple Watch\r\nApple Watch\r\niOS 16watchOS 9612PDF\r\nApple Watch Series 8Apple Watch Ultra"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Ascii.jp"
//       },
//       "author": "ASCII",
//       "title": "マイクロソフト「Outlook for Mac」を無償化、Microsoft 365アカウント不要",
//       "description": "マイクロソフトは3月6日、スケジュール管理とメール機能を備えたmacOS版アプリ「Outlook for Mac」を無償化すると発表した。今後はMicrosoft 365のサブスクリプションやライセンスは不要となる。",
//       "url": "https://weekly.ascii.jp/elem/000/004/127/4127586/",
//       "urlToImage": "https://ascii.jp/img/2023/03/07/3503547/l/203e6fe076663368.png",
//       "publishedAt": "2023-03-07T05:30:00Z",
//       "content": "36macOSOutlook for MacMicrosoft 365\r\nOutlook for Mac\r\nOutlook.comGmailiCloudIMAP\r\nOutlook for MacMicrosoft 365Microsoft 365\r\nApple Silicon\r\nOutlook for MacApple SiliconM1M2MacOutlook\r\niPhoneiPadMacHa… [+68 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Ascii.jp"
//       },
//       "author": "ASCII",
//       "title": "スマホRPG『エンゲージ・キル』メインストーリー第3章が追加！新武器姿の葵がピックアップに登場",
//       "description": "2023年3月7日、スクウェア・エニックスは新作スマートフォンゲーム『Engage Kill（エンゲージ・キル）』にて、メインストーリーの第3章を追加したと発表。",
//       "url": "https://weekly.ascii.jp/elem/000/004/127/4127660/",
//       "urlToImage": "https://ascii.jp/img/2023/03/07/3503917/l/f738d42178423582.jpg",
//       "publishedAt": "2023-03-07T10:20:00Z",
//       "content": "3 \r\n37Engage Kill3 3\r\n3\r\n3 \r\n3\r\n3 natalis dies788-2 HARD3145\r\n3\r\n3CV \r\n3\r\n20233716 3 3\r\n121134\r\nHARD1.5HARD7-17-28-18-22\r\n2023371632145920233716328459\r\n78\r\nLvLv4050\r\nLv1016\r\n3\r\n2023371633 \r\n320233171… [+404 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "The Guardian"
//       },
//       "author": "Josh Taylor",
//       "title": "TikTok bans on Australian government-issued phones should be extended to other apps, experts say",
//       "description": "Researchers say federal departments should not only focus on Chinese-owned TikTok, as other apps also collect a lot of user data<ul><li>Get our morning and afternoon news emails, free app or daily news podcast</li></ul>Federal department bans on using TikTok …",
//       "url": "https://www.theguardian.com/technology/2023/mar/07/tiktok-bans-on-australian-government-issued-phones-should-be-extended-to-other-apps-experts-say",
//       "urlToImage": "https://i.guim.co.uk/img/media/6fea2d235532b03fa8cd3ed441e6187053bb560f/0_202_6946_4170/master/6946.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=89b374fb8d9d69423ca38f3d7f4c5ea6",
//       "publishedAt": "2023-03-07T06:53:54Z",
//       "content": "Federal department bans on using TikTok on Australian government-issued phones are sensible but should also apply to other social media apps, experts say.\r\nA growing number of Australian government a… [+3953 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Hdblog.it"
//       },
//       "author": "HDblog.it",
//       "title": "Outlook è gratis su macOS: abbonamento a Microsoft 365 non più necessario",
//       "description": "L'app è stata ottimizzata per Apple Silicon.",
//       "url": "https://www.hdblog.it/smartphone/articoli/n567218/outlook-gratis-macos-microsoft-download-novita/",
//       "urlToImage": "https://hd2.tudocdn.net/1084937?w=1920",
//       "publishedAt": "2023-03-07T07:32:00Z",
//       "content": "Outlook diventa gratuita su Mac: l'app può essere ora scaricata dall'App Store (link a fondo articolo) senza pagare nulla e senza l'obbligo di un abbonamento o di una licenza Microsoft 365, così come… [+1979 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Hdblog.it"
//       },
//       "author": "HDblog.it",
//       "title": "Apple rilascia tvOS 16.3.3 e un update di sicurezza per le beta di iOS e macOS",
//       "description": "Apple ha reso disponibile agli sviluppatori un secondo \"Rapid Security Response\"",
//       "url": "https://www.hdblog.it/apple/articoli/n567212/apple-rilascia-tvos-aggiornamento-sicurezza/",
//       "urlToImage": "https://hd2.tudocdn.net/1035682?w=1920",
//       "publishedAt": "2023-03-07T06:30:00Z",
//       "content": "A distanza di una settimana dal rilascio della seconda beta di iOS 16.4 e di macOS 13.3, Apple ha reso disponibile agli sviluppatori un secondo \"Rapid Security Response\", il quarto da quando questa f… [+1619 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Techinsider.ru"
//       },
//       "author": "Ирина Слепухина",
//       "title": "Что делать, если AirPods не подключаются к устройству: инструкция",
//       "description": "Обычно проблем с подключением AirPods к любым устройствам не возникает, особенно если вы пытаетесь настроить сопряжение с другими продуктами Apple. Однако исключения все же бывают, поэтому мы рассказываем, что делать, если не получается подключить беспроводны…",
//       "url": "https://www.techinsider.ru/gadgets/821773-chto-delat-esli-airpods-ne-podklyuchayutsya-k-ustroystvu-instrukciya/",
//       "urlToImage": "https://images.techinsider.ru/upload/img_cache/402/402855be82e54e9baed039d08fa5524d_ce_1920x1280x0x0_cropped_1200x628.jpg",
//       "publishedAt": "2023-03-07T08:35:00Z",
//       "content": ", -    AirPods    Bluetooth.  :\r\n<ol><li> ;</li><li>Bluetooth   ;</li><li>  AirPods / ;</li><li>   ;</li><li> ;</li><li>AirPods   ;</li><li> AirPods .</li></ol>\r\n  ,   .\r\niPhone  AirPods,   ,   , (  … [+1437 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Iphoneitalia.com"
//       },
//       "author": "Giuseppe Migliorino",
//       "title": "iPhone 14 in giallo, il lancio è imminente",
//       "description": "Nuove conferme sulla colorazione in giallo per gli iPhone 14. \nLink all'articolo originale: iPhone 14 in giallo, il lancio è imminente",
//       "url": "https://www.iphoneitalia.com/805801/quando-iphone-14-giallo-gurman",
//       "urlToImage": "https://static.iphoneitalia.com/wp-content/uploads/2023/03/iphone-14-giallo-1.jpg",
//       "publishedAt": "2023-03-07T07:04:02Z",
//       "content": "Secondo Mark Gurman di Bloomberg, l’annuncio di Apple su una nuova colorazione in giallo degli iPhone 14 è “imminente”.\r\nIn un recente tweet, Gurman ha confermato quanto vociferato nei giorni scorsi … [+892 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Longreads.com"
//       },
//       "author": "Maria Zorn",
//       "title": "All True At Once",
//       "description": "You made a fool of the words “feminine” and “masculine” — you were neither, you were both.",
//       "url": "http://longreads.com/2023/03/07/all-true-at-once-ms-pacman-loss-gender-grief/",
//       "urlToImage": "https://i0.wp.com/longreads.com/wp-content/uploads/2023/02/Maria-Zorn-Pac-Man-essay.png?fit=2400%2C1400&ssl=1",
//       "publishedAt": "2023-03-07T10:00:00Z",
//       "content": "Maria Zorn | Longreads | March 7, 2023 | 3,373 words (12 minutes)\r\nIn middle school, I would hide behind a giant oleander bush when it was time for the bus to leave for track and field meets and then… [+18223 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Tinhte.vn"
//       },
//       "author": "giahuy0308@outlook.com (Pnghuy), Pnghuy",
//       "title": "BOE giành được hợp đồng sản xuất tấm nền OLED cho iPhone SE 4 mà không phải Samsung hay LG?",
//       "description": "Theo thông tin rò rỉ từ The Elec, Apple sẽ tiếp tục hợp tác với BOE trong việc cung cấp tấm nền màn hình cho iPhone SE thế hệ tiếp theo (4th gen) và tin đồn cho biết có thể iPhone SE 4 sẽ dùng tấm nền OLED, thay vì LCD như iPhone SE 3 hiện tại.",
//       "url": "https://tinhte.vn/thread/boe-gianh-duoc-hop-dong-san-xuat-tam-nen-oled-cho-iphone-se-4-ma-khong-phai-samsung-hay-lg.3642007/",
//       "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2023/03/6351477_Cover_boe_sanxuat_tamnenoled-iPhoneSE4_tinhte.jpg",
//       "publishedAt": "2023-03-07T08:45:28Z",
//       "content": "Theo thông tin rò r t The Elec, Apple s tip tc hp tác vi BOE trong vic cung cp tm nn màn hình cho iPhone SE th h tip theo (4th gen) và tin n cho bit có th iPhone SE 4 s dùng tm nn OLED, thay vì LCD n… [+1846 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Neowin"
//       },
//       "author": "Justin Luna",
//       "title": "Want to access ChatGPT faster on your Apple devices? There are apps for that",
//       "description": "ChatGPT has become wildly popular since it was released last year. If you have an Apple device like a Mac or Apple Watch and want to access ChatGPT faster, developers have created an app for you. Read more...",
//       "url": "https://www.neowin.net/news/want-to-access-chatgpt-faster-on-your-apple-devices-there-are-apps-for-that/",
//       "urlToImage": "https://cdn.neowin.com/news/images/uploaded/2023/03/1678154379_ultraeventlandscape_story.jpg",
//       "publishedAt": "2023-03-07T02:16:01Z",
//       "content": "via watchGPT\r\nChatGPT, OpenAI's artificial intelligence-powered conversational chatbot, has taken the world by storm since it was released back in November of last year. It can answer questions and a… [+1782 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Sspai.com"
//       },
//       "author": "会飞的三羊店长",
//       "title": "当我做家务时我在想什么",
//       "description": "家务是人类和生活的必要摩擦，如果少了这些摩擦，可能「生活」的实感就会像从冰面上滑过一样掠过记忆。查看全文",
//       "url": "https://sspai.com/post/78265",
//       "urlToImage": "https://cdn.sspai.com/2023/3/7/article/bd685484-95c9-c00c-fc7a-4d6d7be37e69.jpg",
//       "publishedAt": "2023-03-07T03:31:44Z",
//       "content": "Matrix \r\nMatrix Matrix \r\n2022 \r\nTyding Up\r\n×××\r\nNetflix Tyding Up\r\ncreate maintain maintain \r\n6 1 \r\n2022 2022 SONY XPERIA 5 IIiPad Air 3iPhone 8256GiPhone 8 Android App iOS Apple Watch \r\n iPad Air 3 … [+114 chars]"
//       },
//     {
//     "source": {
//       "id": "google-news",
//       "name": "Google News"
//       },
//       "author": null,
//       "title": "Stock futures are flat as Wall Street awaits Fed Chair Powell's comments: Live updates - CNBC",
//       "description": "<ol><li>Stock futures are flat as Wall Street awaits Fed Chair Powell's comments: Live updates  CNBC\r\n</li><li>Stock market news today: Stocks pare gains, finish mixed to start busy week  Yahoo Finance\r\n</li><li>Dow closes higher Monday to notch four-day win …",
//       "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiRGh0dHBzOi8vd3d3LmNuYmMuY29tLzIwMjMvMDMvMDYvc3RvY2stbWFya2V0LXRvZGF5LWxpdmUtdXBkYXRlcy5odG1s0gFIaHR0cHM6Ly93d3cuY25iYy5jb20vYW1wLzIwMjMvMDMvMDYvc3RvY2stbWFya2V0LXRvZGF5LWxpdmUtdXBkYXRlcy5odG1s?oc%3D5&gl=FR&hl=en-US&pc=n&src=1",
//       "urlToImage": null,
//       "publishedAt": "2023-03-07T00:00:00Z",
//       "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Everything-everywhere.com"
//       },
//       "author": "Gary Arndt",
//       "title": "The Siege of Baghdad",
//       "description": "Podcast Transcript In the year 1258, two of the greatest empires in world history collided. For one, it was yet another in an incredible string of conquests. For the other, it resulted in its downfall and the destruction of one of the world’s greatest centers…",
//       "url": "https://everything-everywhere.com/the-siege-of-baghdad/",
//       "urlToImage": "https://photos.smugmug.com/Other/n-hRFP2/Podcast-Images/i-pbRDn4P/0/b4b2ef0c/L/The%201258%20Siege%20of%20Baghdad-L.png",
//       "publishedAt": "2023-03-07T08:05:53Z",
//       "content": "Subscribe Apple | Google | Spotify | Amazon | Player.FM | TuneInCastbox | Stitcher | Podcast Republic | RSS | Patreon\r\nIn the year 1258, two of the greatest empires in world history collided.\r\nFor on… [+11702 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Tinhte.vn"
//       },
//       "author": "peacewalker215@yahoo.com (P.W), P.W",
//       "title": "Các nhà mạng châu Âu đề xuất Netflix trả chi phí băng thông, đang bị phản đối dữ dội",
//       "description": "Ý tưởng của phía các nhà mạng đến từ châu Âu đang đề xuất, các dịch vụ trực tuyến sẽ trả tiền cho các nhà mạng viễn thông hoạt động tại châu Âu để trợ giúp chi phí vận hành cơ sở hạ tầng mạng của họ. Thông tin này đã được Greg Peters…",
//       "url": "https://tinhte.vn/thread/cac-nha-mang-chau-au-de-xuat-netflix-tra-chi-phi-bang-thong-dang-bi-phan-doi-du-doi.3641776/",
//       "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2023/03/6350873_Cover_Netflix.jpg",
//       "publishedAt": "2023-03-07T01:30:07Z",
//       "content": "D liu ca Sandvine cho thy, gn na tng lu lng mng internet toàn cu là phc v nhng dch v trc tuyn ca Facebook, Amazon, Google, Apple, Netflix và Microsoft. Cng là tng lu lng mng internet, 65% tng traffic… [+1695 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Spidersweb.pl"
//       },
//       "author": "przemyslaw.pajak@gmail.com (Przemysław Pająk)",
//       "title": "Jaki smartfon wybierają młodzi ludzie z generacji Z? No, nie zgadniesz",
//       "description": "To jest zaskakujące tylko na pierwszy rzut oka, co za chwilę postaram się udowodnić. iPhone jest aktualnie najczęściej wybieranym smartfonem przez młodych ludzi z generacji Z. I to nie tylko w USA, lecz na całym świecie, włącznie z Azją.\nOkoło 52 proc. konsum…",
//       "url": "https://spidersweb.pl/2023/03/jaki-smartfon-generacja-z-iphone-samsung.html",
//       "urlToImage": "https://ocs-pl.oktawave.com/v1/AUTH_2887234e-384a-4873-8bc5-405211db13a2/spidersweb/2021/08/galaxy-z-flip-3-po-co-skladany-smartfon-4.jpg",
//       "publishedAt": "2023-03-07T09:14:03Z",
//       "content": "W Stanach Zjednoczonych, gdzie iPhone króluje od dawna, a 77 proc. rynku smartfonów klasy premium kontrolowane jest przez Apple'a. Z tego ponad 55 proc. to konsumenci modzi (16 - 29 lat), którzy wybi… [+453 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Azofreeware.com"
//       },
//       "author": "阿榮™",
//       "title": "EaseUS MobiUnlock 3.1.7 中文版 - iPhone忘記密碼螢幕解鎖工具",
//       "description": "iPhone忘記密碼螢幕解鎖工具 - EaseUS MobiUnlock，iOS裝置密碼解鎖工具，透過「解鎖螢幕密碼」功能，可以移除iPhone、iPad、iPod中的4、6位數密碼、Touch ID或Face ID，藉由「解鎖Apple ID」，能夠移除Apple ID與iCloud帳戶，也具備解鎖螢幕使用時間的密碼，以及移除iTunes備份加密的功能，使用「iOS密碼管理工具」，讓你安全的瀏覽、還原和匯出儲存在iOS裝置中的密碼。（阿榮福利味）\n\n下載連結→ https://www.azofreeware.c…",
//       "url": "https://www.azofreeware.com/2023/03/easeus-mobiunlock.html",
//       "urlToImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnMOUfUicDRnJHKRsIfZ8anYRIRQbZtIGPYX0Tpfrn8asnNetwgt_Vom4oKrxjtrJAYgiBYv47uJVrWMjsm0DZA8X65oTv27aGjvlQq4UK1N_LXf92wfioaei5u5Xa9CN0E_jGxNEWqGOw9eTcBtiZq_vOAekuxWw-26-hrq5MkuZVs2z9qKk/w1200-h630-p-k-no-nu/EaseUS_MobiUnlock_20230307_01.png",
//       "publishedAt": "2023-03-07T07:59:00Z",
//       "content": "iPhone - EaseUS MobiUnlock，iOS，「」，iPhone、iPad、iPod4、6、Touch IDFace ID，「Apple ID」，Apple IDiCloud，，iTunes，「iOS」，、iOS。（）→ https://www.azofreeware.com/p/easeus-mobiunlock.html\r\n：EaseUS：：（）：Windows、macOS：… [+213 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Daily Beast"
//       },
//       "author": "The Daily Beast",
//       "title": "Capitol Police Officers Could Be the Key to Nailing Trump",
//       "description": "Photo Illustration by Thomas Levinson/The Daily Beast/Reuters\r\nIt might take a little while longer, but, according to Daily Beast investigations reporter Jose Pagliery, on this episode of The New Abnormal podcast, we may be moving closer to former President T…",
//       "url": "https://www.thedailybeast.com/capitol-police-officers-could-be-the-key-to-nailing-trump",
//       "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1678162178/230306-TNA-trump-capitol-police-tease_memwit",
//       "publishedAt": "2023-03-07T09:00:03Z",
//       "content": "It might take a little while longer, but, according to Daily Beast investigations reporter Jose Pagliery, on this episode of The New Abnormal podcast, we may be moving closer to former President Trum… [+1852 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Daily Beast"
//       },
//       "author": "Matt Wilstein",
//       "title": "How Ike Barinholtz Is Using Comedy to ‘Knock Down’ Bigotry in ‘History of the World, Part II’",
//       "description": "Greg Gayne / Hulu\r\nIt’s taken just over a decade for Ike Barinholtz to fully make it in Hollywood, with starring roles in big films like Blockers and high-profile streaming shows like The Afterparty. Now, with History of the World, Part II, he’s returning to …",
//       "url": "https://www.thedailybeast.com/ike-barinholtz-picks-up-where-mel-brooks-left-off",
//       "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1502,w_2673,x_326,y_25/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1678144595/230304-Wilstein-Ike_Barinholtz-tease_yolsze",
//       "publishedAt": "2023-03-07T09:01:58Z",
//       "content": "Its taken just over a decade for Ike Barinholtz to fully make it in Hollywood, with starring roles in big films like Blockers and high-profile streaming shows like The Afterparty. Now, with History o… [+10361 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Elespanol.com"
//       },
//       "author": "C�sar Rebolledo",
//       "title": "FREE FIRE | Códigos de hoy martes 7 de marzo de 2023 - Recompensas gratis",
//       "description": "<!--cache-->Estos son todos los códigos gratis de Garena Free Fire que podrás canjear hoy, martes 7 de marzo de 2023. Consigue recompensas como skins, diamantes y mucho más.<!--aa--->El éxito para móviles Android e iOS, Garena Free Fire, ha recibido nuevos có…",
//       "url": "https://vandal.elespanol.com/noticia/1350760560/free-fire-codigos-de-hoy-martes-7-de-marzo-de-2023-recompensas-gratis/",
//       "urlToImage": "https://media.vandal.net/i/ivandal/1200x630/3-2023/20233791501_1.jpg",
//       "publishedAt": "2023-03-07T08:02:00Z",
//       "content": "El xito para mviles Android e iOS, Garena Free Fire, ha recibido nuevos cdigos diarios para hoy martes 7 de marzo de 2023. Los jugadores pueden canjear estos cdigos para recibir recompensas variadas … [+2486 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Taisy0.com"
//       },
//       "author": "taisy0",
//       "title": "Appleの整備済み商品情報 2023/3/7 ｰ iMac 24インチ多数追加",
//       "description": "本日、Appleのお得な整備済み製品が多数追加されていますので、良かったらどうぞ。 整備済み商品とは初期不良などがあった商品をAppleが修理し、販売している商品で1年間の保証付きなので新品と変わらず、安く購入でき、現在 ...",
//       "url": "https://taisy0.com/2023/03/07/169343.html",
//       "urlToImage": "https://taisy0.com/wp-content/uploads/2022/03/applestoreicon2022.jpg",
//       "publishedAt": "2023-03-07T03:33:24Z",
//       "content": "Apple\r\nApple1()\r\nMacBook Pro 13 M1 8CPU8GPU126,280MacBook Pro 13 M1 8CPU8GPU144,980MacBook Pro 13 M1 8CPU8GPU219,780MacBook Pro 13 M2 8CPU10GPU160,900MacBook Pro 13 M2 8CPU10GPU186,100MacBook Pro 13 … [+2457 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Macitynet.it"
//       },
//       "author": "Mauro Notarianni",
//       "title": "Scissione di Apple TV plus vince due Writers Guild Awards",
//       "description": "Continua l’incetta di premi per Severance, in Italia Scissione la serie di Apple TV+ ottiene due prestigiosi premi Writers Guild Awards\n- su macitynet.it Scissione di Apple TV plus vince due Writers Guild Awards",
//       "url": "https://www.macitynet.it/?p=1211230",
//       "urlToImage": "https://www.macitynet.it/wp-content/uploads/2022/12/Apple-TV-Severance.jpg",
//       "publishedAt": "2023-03-07T10:19:09Z",
//       "content": "Le votazioni per gli Oscar stanno per concludersi e in occasione degli WGA Awards, i premi della Writers Guild Association, il sindacato degli sceneggiatori di Hollywood che spesso si allinea con l’A… [+1845 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Macitynet.it"
//       },
//       "author": "Mauro Notarianni",
//       "title": "Apple prepara nuovi MacBook Air e MacBook Pro con chip M3",
//       "description": "Nuove conferme sull'uso del chip M3 nei MacBook Pro e nel MacBoo Air.\n- su macitynet.it Apple prepara nuovi MacBook Air e MacBook Pro con chip M3",
//       "url": "https://www.macitynet.it/apple-prepara-nuovi-macbook-air-e-macbook-pro-con-chip-m3/",
//       "urlToImage": "https://www.macitynet.it/wp-content/uploads/2022/06/MacBookAir2022-2.jpg",
//       "publishedAt": "2023-03-07T06:29:06Z",
//       "content": "I futuri MacBook Air da 13″ e 15″ integreranno il chip M3. L’indiscrezione era già circolata pochi giorni addietro e ora è corroborata dal sito statunitense 9to5Mac, secondo il quale Apple sta prepar… [+1397 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Macitynet.it"
//       },
//       "author": "Daniele Piccinelli",
//       "title": "iPhone 14, il nuovo colore è questione di ore",
//       "description": "Non è una certezza ma quasi: nel giro di poche ore Apple annuncerà il nuovo colore di iPhone 14 incluso il sospetto numero uno\n- su macitynet.it iPhone 14, il nuovo colore è questione di ore",
//       "url": "https://www.macitynet.it/iphone-14-nuovo-colore/",
//       "urlToImage": "https://www.macitynet.it/wp-content/uploads/2022/09/Apple-phone-14-watch-8-lancio-negozi-4.jpg",
//       "publishedAt": "2023-03-07T07:59:55Z",
//       "content": "Da alcuni giorni circolano anticipazioni sui preparativi di Apple per introdurre iPhone 14 in un nuovo colore, che secondo un post non verificabile su Weibo dovrebbe essere il giallo: ora arriva la c… [+1623 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Macitynet.it"
//       },
//       "author": "Pubblicità",
//       "title": "Offerte Amazon 7 marzo fino al 67% su Apple, Anker, Samsung, ESR, UGREEN",
//       "description": "In sconto caricatori wireless, schede di memoria, cover, mouse, navigatori, tablet, cavi e molto altro\n- su macitynet.it Offerte Amazon 7 marzo fino al 67% su Apple, Anker, Samsung, ESR, UGREEN",
//       "url": "https://www.macitynet.it/offerte-amazon-7-marzo-fino-al-67-su-apple-anker-samsung-esr-ugreen/",
//       "urlToImage": "https://www.macitynet.it/wp-content/uploads/2018/04/amazonlista2.jpg",
//       "publishedAt": "2023-03-07T07:29:04Z",
//       "content": "Quelle che trovate elencate in questa pagina sono le offerte su Amazon valide nel momento in cui scriviamo.\r\nSono ancora in sconto:\r\nE pure:\r\nNon dimenticate infine:\r\n<ul><li>Promozione No-Iva di Ama… [+9680 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Macitynet.it"
//       },
//       "author": "Mauro Notarianni",
//       "title": "ChatGPT, per Satya Nadella gli assistenti vocali sono stupidi come sassi",
//       "description": "Ora che Microsoft ha ChatGPT e AI, il CEO Satya Nadella spara a zero su Cortana, Alexa, Siri e assistenti vocali, tutti «stupidi come sassi»\n- su macitynet.it ChatGPT, per Satya Nadella gli assistenti vocali sono stupidi come sassi",
//       "url": "https://www.macitynet.it/chatgpt-satya-nadella-assistenti-vocali-stupidi-come-sassi/",
//       "urlToImage": "https://www.macitynet.it/wp-content/uploads/2023/03/robot-intelligenza-artificiale-retro-vintage-oled.jpg",
//       "publishedAt": "2023-03-07T09:29:12Z",
//       "content": "Il successo di ChatGPT e affini – chatbot basate su intelligenza artificiale AI e machine learning specializzate nella conversazione – fanno impallidire Siri, Alexa, Cortana e compagnia bella: senza … [+3178 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Macitynet.it"
//       },
//       "author": "Mauro Notarianni",
//       "title": "La data di lancio di Windows 12",
//       "description": "Microsoft è al lavoro su Windows 12. La data provabile di rilascio.\n- su macitynet.it La data di lancio di Windows 12",
//       "url": "https://www.macitynet.it/data-di-lancio-di-windows-12-2024/",
//       "urlToImage": "https://www.macitynet.it/wp-content/uploads/2023/03/TastoWindows.jpg",
//       "publishedAt": "2023-03-07T06:59:48Z",
//       "content": "Windows 12 potrebbe arrivare già il prossimo anno. A riferirlo sono più fonti, tutte concordi nel confermare che una nuova versione del sistema operativo Microsoft dovrebbe arrivare nel 2024.\r\nIn un … [+1549 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Macitynet.it"
//       },
//       "author": "Pubblicità",
//       "title": "Caricabatterie 67W con HUB, prezzo dimezzato con coupon, solo 44,99€",
//       "description": "Su Amazon piove un coupon per un caricabatterie da 67W con integrato HUB Hdmi e USB-C perfetto per iPad, Mac e iPhone. Costa solo 44,99€\n- su macitynet.it Caricabatterie 67W con HUB, prezzo dimezzato con coupon, solo 44,99€",
//       "url": "https://www.macitynet.it/sconto-caricabatterie-con-hub-integrato/",
//       "urlToImage": "https://www.macitynet.it/wp-content/uploads/2023/03/hub-e-caricabatterie-baseus.jpg",
//       "publishedAt": "2023-03-07T09:44:42Z",
//       "content": "Il caricabatterie perfetto per MacBook Air, iPad e iPhone esiste ed è regalato. Si tratta del Baseus 67W che grazie ad un coupon pagate metà del suo prezzo: 44,99 invece che 89,99.\r\nQuello che chiami… [+2456 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Hwupgrade.it"
//       },
//       "author": null,
//       "title": "Arriva laggiornamento tvOS 16.3.3 per Apple TV che risolve il problema al telecomando",
//       "description": "Apple ha rilasciato un aggiornamento extra per il suo tvOS permettendo a chi aveva problemi di disconnessione con il Siri Remote di risolverli ed utilizzare il telecomando finalmente senza alcun problema. Ecco come aggiornare la Apple TV.",
//       "url": "https://www.hwupgrade.it/news/apple/arriva-l-aggiornamento-tvos-1633-per-apple-tv-che-risolve-il-problema-al-telecomando_114692.html",
//       "urlToImage": "https://www.hwupgrade.it/i/n/AppleTVUpdate_720.jpg",
//       "publishedAt": "2023-03-07T07:36:12Z",
//       "content": "Apple rilascia un importante aggiornamento extra per il sistema operativo tvOS delle Apple TV. L'update permette a chi aveva problemi di disconnessione con il Siri Remote di risolverli ed utilizzare … [+1502 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Hwupgrade.it"
//       },
//       "author": null,
//       "title": "Amazon sfida la concorrenza: Samsung Galaxy Week, Amazfit GTR 3 119, SSD da 2TB a 109, TV 4K, droni, warehouse, tablet e PC a prezzi mai visti",
//       "description": "Che inizio settimana, su Amazon! Ci sono prezzi veramente ok su molti prodotti Samsung, ma anche per droni, smartphone, TV, PC portatili, SSD e altri articoli stiamo assistendo a tagli di prezzi veramente incredibili. Eccoli!",
//       "url": "https://www.hwupgrade.it/news/multimedia/amazon-sfida-la-concorrenza-samsung-galaxy-week-amazfit-gtr-3-119-ssd-da-2tb-a-109-tv-4k-droni-warehouse-tablet-e-pc-a-prezzi-mai-visti_114686.html",
//       "urlToImage": "https://www.hwupgrade.it/i/n/ama_wow_3_720.jpg",
//       "publishedAt": "2023-03-07T07:28:33Z",
//       "content": "Attenzione: è la Samsung Galaxy Week! Tanti prodotti Samsung in offerta e \r\nli trovate tutti qui.\r\nAmazfit GTR 3 e GTS 3 oggi sono in super sconto, 119 rispetto ai normali 149!\r\nUno dei droni più r… [+8782 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Sspai.com"
//       },
//       "author": "少数派编辑部",
//       "title": "派早报：Twitter 再次遭遇大面积故障，Edge 引入 VSR 视频超分辨率技术等",
//       "description": "Outlook for Mac 转为免费，网易 LOFTER 回应 AI 绘画训练集质疑等查看全文",
//       "url": "https://sspai.com/post/78677",
//       "urlToImage": "https://cdn.sspai.com/2023/3/7/article/14e71ac8-e881-dd55-1f8b-b3cc074f86ba.png",
//       "publishedAt": "2023-03-07T01:06:41Z",
//       "content": "Twitter \r\n 3 6 Twitter API Twitter\r\nCEO Elon Musk API Twitter \r\nEdge VSR \r\n Canary Microsoft Edge AI Video Super ResolutionVSR\r\nGPU Nvidia RTX 20/30/40 AMD RX5700 - RX7800 GPU 720p 192 PlayReady Wide… [+477 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Hwupgrade.it"
//       },
//       "author": null,
//       "title": "Microsoft: Outlook per Mac ora è gratis! Ecco come e dove scaricarlo",
//       "description": "Microsoft ha deciso di rilasciare in modo del tutto gratuito il suo client di posta elettronica Outlook per Mac. Una novità visto che tutti gli utenti potranno scaricarlo ed utilizzarlo senza dover pagare nemmeno un centesimo. Ecco dove scaricarlo.",
//       "url": "https://www.hwupgrade.it/news/apple/microsoft-outlook-per-mac-ora-e-gratis-ecco-come-e-dove-scaricarlo_114697.html",
//       "urlToImage": "https://www.hwupgrade.it/i/n/OutlookMac_720.jpg",
//       "publishedAt": "2023-03-07T08:36:55Z",
//       "content": "Microsoft ha deciso di rilasciare in modo del tutto gratuito il suo client di posta elettronica Outlook per Mac. Una novità visto che tutti gli utenti potranno scaricarlo ed utilizzarlo senza dover p… [+1313 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Hwupgrade.it"
//       },
//       "author": null,
//       "title": "Robot e AI: una startup ha mostrato i suoi primi prototipi di robot umanoide",
//       "description": "Figure è nata pochi mesi fa, a settembre, e grazie al suo staff stellare sta facendo passi da gigante, al punto di aver già mostrato i suoi primi prototipi.",
//       "url": "https://www.hwupgrade.it/news/scienza-tecnologia/robot-e-ai-una-startup-ha-mostrato-i-suoi-primi-prototipi-di-robot-umanoide_114684.html",
//       "urlToImage": "https://www.hwupgrade.it/i/n/Figure-wal.jpg",
//       "publishedAt": "2023-03-07T08:31:01Z",
//       "content": "Una delle immancabili presenze in qualsiasi film ambientato nel futuro sono loro: i robot.\r\nAiutanti affascinanti, dalle sembianze umane, amici o nemici a seconda dei casi, hanno plasmato talmente ta… [+1869 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Sapo.pt"
//       },
//       "author": "Pedro Simões",
//       "title": "E o Windows? Microsoft tornou o Outlook gratuito para utilização no macOS",
//       "description": "A Microsoft sempre tratou o macOS de forma especial e tratou de ter o seu software presente neste sistema da Apple. Agora dá mais um passo importante e passa a oferecer o Outlook para...",
//       "url": "https://pplware.sapo.pt/apple/mac/e-o-windows-microsoft-tornou-o-outlook-gratuito-para-utilizacao-no-macos/",
//       "urlToImage": "https://pplware.sapo.pt/wp-content/uploads/2023/03/outlook_for_mac_1.jpg",
//       "publishedAt": "2023-03-07T09:00:16Z",
//       "content": "A Microsoft sempre tratou o macOS de forma especial e tratou de ter o seu software presente neste sistema da Apple. Agora dá mais um passo importante e passa a oferecer o Outlook para ser usado por q… [+1672 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Sapo.pt"
//       },
//       "author": "Vítor M.",
//       "title": "O iPhone tem um truque de controlo de volume que os utilizadores não estão a usar",
//       "description": "Podemos pensar que dominamos as funcionalidades do iOS. Mas, na verdade, há muitas coisas que desconhecemos, ou pelo menos não usamos no nosso iPhone porque não nos lembramos de o fazer. Por exemplo, sabia...",
//       "url": "https://pplware.sapo.pt/apple/o-iphone-tem-um-truque-de-controlo-de-volume-que-os-utilizadores-nao-estao-a-usar/",
//       "urlToImage": "https://pplware.sapo.pt/wp-content/uploads/2023/03/volume_ecra_iphone00.jpg",
//       "publishedAt": "2023-03-07T09:30:47Z",
//       "content": "Podemos pensar que dominamos as funcionalidades do iOS. Mas, na verdade, há muitas coisas que desconhecemos, ou pelo menos não usamos no nosso iPhone porque não nos lembramos de o fazer. Por exemplo,… [+2842 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Macotakara.jp"
//       },
//       "author": "danbo",
//       "title": "Apple、Apple TV 4K (第3世代)用tvOSアップデート「tvOS 16.3.3」を配布開始",
//       "description": "tvOS 16\r\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- テキスト -->\n\nAppleが、Apple TV 4K (第3世代)用の一般＞ソフトウェアをアップデート経由で「tvOS 16.3.3」の配布を開始しています。",
//       "url": "https://www.macotakara.jp/etc/tvOS/entry-44423.html",
//       "urlToImage": "https://www.macotakara.jp/archives/001/201609/eda112e07c44b38df0b4b9767f00bca9e9d3d36e61172a4bf4e36e63e76a0127.png",
//       "publishedAt": "2023-03-07T00:51:18Z",
//       "content": "tvOS 16\r\nAppleApple TV 4K (3)tvOS 16.3.3"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Macotakara.jp"
//       },
//       "author": "danbo",
//       "title": "Macの整備済商品 商品追加（2023/3/07）",
//       "description": "<!-- テキスト -->\n\nApple.com/jpが、Apple認定の整備済製品で、Mac整備済み製品として、商品の追加を行っています。\n\n30,000円以上購入でオリコApple ショッピングローンが24回払いまで金利０%で利用出来ます。\n\nペイディあと払いプランApple専用は利用できません。\n\n整備品情報はメールマガジンでもお知らせしています。\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- テキスト -->\n\n<ul>\n<li>Mac…",
//       "url": "https://www.macotakara.jp/sale/entry-44426.html",
//       "urlToImage": "https://www.macotakara.jp/archives/001/201611/967f68ad126f6660df6e966620cee83ec6e6e41f1f5e79695d29f60b077cd258.jpg",
//       "publishedAt": "2023-03-07T05:13:12Z",
//       "content": "Apple.com/jpAppleMac\r\n30,000Apple 24%\r\nApple\r\n<ul><li>Mac mini (M1, 2020)/M1/16GB/2TBSSD/10Ethernet196,800</li><li>Mac mini (M1, 2020)/M1/16GB/1TBSSD137,800</li><li>Mac mini (M1, 2020)/M1/16GB/256GBS… [+7241 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "MacGeneration"
//       },
//       "author": "Mickaël Bazoge",
//       "title": "Les futurs MacBook Air 13/15'' et MacBook Pro 13'' auraient une puce M3",
//       "description": "Le MacBook Air pourrait bien devenir une gamme de nouveau ! En plus d'un modèle de 13 pouces, Apple y joindrait une version de 15 pouces, comme la rumeur insistante l'a annoncé ces derniers mois. D'après 9to5Mac, ces nouveaux portables (noms de code J513 et J…",
//       "url": "https://www.macg.co/mac/2023/03/les-futurs-macbook-air-1315-et-macbook-pro-13-auraient-une-puce-m3-135253",
//       "urlToImage": "https://cdn.mgig.fr/2023/03/mga-133c2d12-w375-w1500-w750_accroche.jpg",
//       "publishedAt": "2023-03-07T05:58:00Z",
//       "content": "Le MacBook Air pourrait bien devenir une gamme de nouveau ! En plus d'un modèle de 13 pouces, Apple y joindrait une version de 15 pouces, comme la rumeur insistante l'a annoncé ces derniers mois. D'a… [+995 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Iphones.ru"
//       },
//       "author": "Артём Баусов",
//       "title": "Apple работает над MacBook Air 13 и 15 дюймов с топовыми процессорами M3",
//       "description": "А также над новым MacBook Pro.",
//       "url": "https://www.iphones.ru/iNotes/apple-rabotaet-nad-macbook-air-13-i-15-dyuymov-s-topovymi-processorami-m3-03-07-2023",
//       "urlToImage": "https://www.iphones.ru/wp-content/plugins/wonderm00ns-simple-facebook-open-graph-tags/fbimg.php?img=https%3A%2F%2Fwww.iphones.ru%2Fwp-content%2Fuploads%2F2023%2F03%2FIMG_8972.jpeg",
//       "publishedAt": "2023-03-07T05:42:04Z",
//       "content": "9to5Mac , Apple MacBook Air: 13 15 .\r\n, 13- «» J513, M3. MacBook Air 15 , J515.\r\n , MacBook Pro (J504), . M3, , M3 Pro/M3 Max.\r\n , . , , , . [9to5]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "MacGeneration"
//       },
//       "author": "Félix Cattafesta",
//       "title": "Mac App Store : la vérification des apps est tellement confuse qu'elle décourage les développeurs",
//       "description": "Quoi qu'en dise Apple, le Mac n'est pas vraiment une terre de joueurs. Les gros titres sur le Mac App Store se comptent sur les doigts de la main, et rares sont les sorties Steam finissant sur la boutique intégrée à macOS. Le tri à l'entrée est visiblement co…",
//       "url": "https://www.macg.co/services/2023/03/mac-app-store-la-verification-des-apps-est-tellement-confuse-quelle-decourage-les-developpeurs-135257",
//       "urlToImage": "https://cdn.mgig.fr/2023/03/mga-78924111-w375-w1500-w750_accroche.jpg",
//       "publishedAt": "2023-03-07T09:27:21Z",
//       "content": "Quoi qu'en dise Apple, le Mac n'est pas vraiment une terre de joueurs. Les gros titres sur le Mac App Store se comptent sur les doigts de la main, et rares sont les sorties Steam finissant sur la bou… [+2421 chars]"
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Gori.me"
//       },
//       "author": "g.O.R.i",
//       "title": "Studio Displayの在庫復活、Mac miniがお買い得。Mac整備済商品の最新情報（2023年3月7日更新）",
//       "description": "通常価格よりも15％オフで購入できる、Apple公式サイトのMac整備済製品が更新されている！記事執筆時点の掲載商品一覧およびその価格（税込）を紹介する！ 【解説】Mac/iPadが通常価格の15％オフ！Apple認定の整備済商品は新品同様の中古でお買い得 本日はM1 Mac miniやStudio…\nThe post Studio Displayの在庫復活、Mac miniがお買い得。Mac整備済商品の最新情報（2023年3月7日更新） first appeared on ゴリミー. 【もっと読む】",
//       "url": "https://gori.me/sale/apple-refurbished/146675",
//       "urlToImage": "https://gori.me/uploads/2023/03/Mac-Refurbished-model-2023-03-07-800x321.jpg",
//       "publishedAt": "2023-03-07T03:30:14Z",
//       "content": ""
//       },
//     {
//     "source": {
//       "id": null,
//       "name": "Expansion.com"
//       },
//       "author": "expansion.com",
//       "title": "La Primera de Expansión sobre Ferrovial, Indra, El Corte Inglés, Abengoa y Elon Musk",
//       "description": "En cuanto a la agenda del día, estaremos atentos al Consejo de Ministros que tiene previsto aprobar el anteproyecto de Ley de Representación Paritaria de mujres y hombres en órgano",
//       "url": "https://www.expansion.com/podcasts/2023/03/07/6406d586e5fdeaae438b465b.html",
//       "urlToImage": "https://phantom-expansion.unidadeditorial.es/63adb6e7d0658f3371edcd9aa1bc82a4/f/jpg/assets/multimedia/imagenes/2023/03/07/16781688692748.jpg",
//       "publishedAt": "2023-03-07T06:40:33Z",
//       "content": "Este martes seguimos hablando de Ferrovial y que podría doblar su tamaño en Estados Unidos. Además, Roberto Casado, corresponsal económico de EXPANSIÓN, nos hablará sobre el resquicio de la Ley antio… [+698 chars]"
//       }
//       ]
constructor (){
    super();
    this.state={
        article:[],
        loading : false,
         page:1
    }
}

  async   componentDidMount(){
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9d685a50dcc745e4bc6676a1117c4761&page=1&pageSize=${this.props.pageSize}`;
  this.setState({loading:true});
  let data = await fetch(url)
  let parsedData = await data.json(data)
  console.log(parsedData)
  // this.setState({article:parsedData.article,totalResults:parsedData.totalResults,loading:false})
}

handlePrevioustClick =async ()=> {
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9d685a50dcc745e4bc6676a1117c4761&page=${ this.state.page -1}&pageSize=${this.props.pageSize}`;
  this.setState({loading:true});
  let data = await fetch(url)
  let parsedData = await data.json(data)
  console.log(parsedData);
  this.state({
   page: this.state.page-1,
   article:parsedData.article,loading:false

  })
}

handleNextClick =async ()=> {
  if(!(this.state.page +1 > Math.ceil(this.state.totalResults/20))){
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9d685a50dcc745e4bc6676a1117c4761&page=${ this.state.page +1}&pageSize=${this.props.pageSize}`;
  this.setState({loading:true});
  let data = await fetch(url)
  let parsedData = await data.json(data)
  this.state({
   page:this.state.page +1,
   article:parsedData.article,loading:false

  })
}

}

  render() {
    return (
      <div className='container my-4'>
        <h2 className=' text-center mb-4'>Monkey-Headlines</h2> 
       {/* { this.state.loading && <Spiner/> }  */}
        <div className='row'>
        {this.state.article.map((element)=>{ //here i put ! but then data not show in screen fix it
         return <div className="col-md-4 mb-4" key={element.url}>
        <NewsItem title={element.title?element.title.slice(0,9):""} description={element.description?element.description.slice(0,250):""} imgurl={element.urlToImage} newsurl={element.url}/>

        </div>
          })}

          <div className='container my-2 d-flex justify-content-between'>
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}> &larr; previous</button>
          <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>next &rarr;</button>
          </div>

        </div>
      </div>
    )
  }
}

export default News
