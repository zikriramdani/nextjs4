if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return a[s]||(e=new Promise((async e=>{if("document"in self){const a=document.createElement("script");a.src=s,document.head.appendChild(a),a.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!a[s])throw new Error(`Module ${s} didn’t register its module`);return a[s]}))},e=(e,a)=>{Promise.all(e.map(s)).then((s=>a(1===s.length?s[0]:s)))},a={require:Promise.resolve(e)};self.define=(e,i,c)=>{a[e]||(a[e]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+e.slice(1)};return Promise.all(i.map((e=>{switch(e){case"exports":return a;case"module":return r;default:return s(e)}}))).then((s=>{const e=c(...s);return a.default||(a.default=e),a}))})))}}define("./sw.js",["./workbox-cd88a36a"],(function(s){"use strict";importScripts(),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/AddServiceWorker.js",revision:"1ca9ab4f3eef6ef52a2db934d97733cd"},{url:"/_next/static/_SYPQkWWVLcw8c7AI43Fs/_buildManifest.js",revision:"_SYPQkWWVLcw8c7AI43Fs"},{url:"/_next/static/_SYPQkWWVLcw8c7AI43Fs/_ssgManifest.js",revision:"_SYPQkWWVLcw8c7AI43Fs"},{url:"/_next/static/chunks/455-a5e993863c02ba222df7.js",revision:"_SYPQkWWVLcw8c7AI43Fs"},{url:"/_next/static/chunks/487-323d928af0794d4c99d5.js",revision:"_SYPQkWWVLcw8c7AI43Fs"},{url:"/_next/static/chunks/b637e9a5-a2e24fbd690d770dc8c5.js",revision:"_SYPQkWWVLcw8c7AI43Fs"},{url:"/_next/static/chunks/framework-b97a0ed4f13ff8397343.js",revision:"_SYPQkWWVLcw8c7AI43Fs"},{url:"/_next/static/chunks/main-faa91f25280b556f8a69.js",revision:"_SYPQkWWVLcw8c7AI43Fs"},{url:"/_next/static/chunks/pages/%5Bmengundang%5D-2a875f3efd839049adc8.js",revision:"_SYPQkWWVLcw8c7AI43Fs"},{url:"/_next/static/chunks/pages/%5Bmengundang%5DOld-283a6da4c7fa16f3b28c.js",revision:"_SYPQkWWVLcw8c7AI43Fs"},{url:"/_next/static/chunks/pages/_app-56246130af5b0ae0060c.js",revision:"_SYPQkWWVLcw8c7AI43Fs"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"_SYPQkWWVLcw8c7AI43Fs"},{url:"/_next/static/chunks/pages/components/BeriHadiah-665ea3771ac95dadef66.js",revision:"_SYPQkWWVLcw8c7AI43Fs"},{url:"/_next/static/chunks/pages/components/Footer-9ec882c51256ce250f15.js",revision:"_SYPQkWWVLcw8c7AI43Fs"},{url:"/_next/static/chunks/pages/components/Gallery-339a396b470a624b17ef.js",revision:"_SYPQkWWVLcw8c7AI43Fs"},{url:"/_next/static/chunks/pages/components/GroomBride-96d6f39eed5bd6062b46.js",revision:"_SYPQkWWVLcw8c7AI43Fs"},{url:"/_next/static/chunks/pages/components/Header-0be68067c23736a733c5.js",revision:"_SYPQkWWVLcw8c7AI43Fs"},{url:"/_next/static/chunks/pages/components/Home-7628c10aded0b8439a51.js",revision:"_SYPQkWWVLcw8c7AI43Fs"},{url:"/_next/static/chunks/pages/components/Married-de65b992074e999a2bde.js",revision:"_SYPQkWWVLcw8c7AI43Fs"},{url:"/_next/static/chunks/pages/components/ModalMengundang-ec4101fb9be8826e660a.js",revision:"_SYPQkWWVLcw8c7AI43Fs"},{url:"/_next/static/chunks/pages/components/ModalProtokol-e4b65327a1d762f016d7.js",revision:"_SYPQkWWVLcw8c7AI43Fs"},{url:"/_next/static/chunks/pages/components/Musik-348635dad95a9ac69e23.js",revision:"_SYPQkWWVLcw8c7AI43Fs"},{url:"/_next/static/chunks/pages/components/Norek-31e7408d66671a6a24b9.js",revision:"_SYPQkWWVLcw8c7AI43Fs"},{url:"/_next/static/chunks/pages/components/Rsvp-a01e5668b06f39126e98.js",revision:"_SYPQkWWVLcw8c7AI43Fs"},{url:"/_next/static/chunks/pages/components/Whenwhere-fb5c219e41bb0aa500e0.js",revision:"_SYPQkWWVLcw8c7AI43Fs"},{url:"/_next/static/chunks/pages/index-545e4a78ff310edecaac.js",revision:"_SYPQkWWVLcw8c7AI43Fs"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"_SYPQkWWVLcw8c7AI43Fs"},{url:"/_next/static/chunks/webpack-f47d69457824065d04c3.js",revision:"_SYPQkWWVLcw8c7AI43Fs"},{url:"/_next/static/css/7815b70ba5811b33069b.css",revision:"_SYPQkWWVLcw8c7AI43Fs"},{url:"/audio/ofel.mp3",revision:"509b535466a4007f9971c2651820433d"},{url:"/calender/Wedding Vivi & Zikri_vividanzikri@gmail.com.ics",revision:"7abaf3839c499c86d492df2322cac9b5"},{url:"/css/animate.css",revision:"6cea915825f29b8436f0ccf6e053e3d2"},{url:"/css/bootstrap.css",revision:"593ecfc02fcbb03fb2ef19a6ae87c058"},{url:"/css/bootstrap.css.map",revision:"ead4345340b6e5c5c8211822afed27c0"},{url:"/css/flexslider.css",revision:"8dbe05a4a59d1999c0612edc20b1048e"},{url:"/css/icomoon.css",revision:"0bc9e041e23e8794d3e53fca1669183e"},{url:"/css/magnific-popup.css",revision:"bfc851a5bf981194410ca3c673da8321"},{url:"/css/owl.carousel.min.css",revision:"4d9c37258b236aa87290e13d8efd98c1"},{url:"/css/owl.theme.default.min.css",revision:"cb887a4a64ec4945ce5197c7210d031c"},{url:"/css/simple-line-icons.css",revision:"7999ab0852b844053cb22d87d3cb0883"},{url:"/css/style.css",revision:"0a63fa41b75c399780bee9887d242fc5"},{url:"/css/style.css.map",revision:"1925e1cfdbfeced9a6fe492c87bd5a10"},{url:"/fonts/bootstrap/glyphicons-halflings-regular.eot",revision:"f4769f9bdb7466be65088239c12046d1"},{url:"/fonts/bootstrap/glyphicons-halflings-regular.svg",revision:"89889688147bd7575d6327160d64e760"},{url:"/fonts/bootstrap/glyphicons-halflings-regular.ttf",revision:"e18bbf611f2a2e43afc071aa2f4e1512"},{url:"/fonts/bootstrap/glyphicons-halflings-regular.woff",revision:"fa2772327f55d8198301fdb8bcfc8158"},{url:"/fonts/bootstrap/glyphicons-halflings-regular.woff2",revision:"448c34a56d699c29117adc64c43affeb"},{url:"/fonts/icomoon/icomoon.eot",revision:"efcb15857675f317a3a01330539a9b44"},{url:"/fonts/icomoon/icomoon.svg",revision:"4a8a5bc587d3d5f1a583d6850a5cc9da"},{url:"/fonts/icomoon/icomoon.ttf",revision:"6102bb09aa1ca590aeffaf0bf7fbe796"},{url:"/fonts/icomoon/icomoon.woff",revision:"fba8bc5f1acc7a05e58b516c38e7f051"},{url:"/fonts/simple-line-icons/Simple-Line-Icons.eot",revision:"dacd16c9a3d2cb61b472a35979015bf3"},{url:"/fonts/simple-line-icons/Simple-Line-Icons.svg",revision:"00ce23caac2c875bcc6db8e4afe5c532"},{url:"/fonts/simple-line-icons/Simple-Line-Icons.ttf",revision:"b2892aa62b0fb2c21c8d7700e2ef6e56"},{url:"/fonts/simple-line-icons/Simple-Line-Icons.woff",revision:"0bbfc705e37a927ce2ae72b749b3154d"},{url:"/fonts/simple-line-icons/Simple-Line-Icons.woff2",revision:"6ac7320f709ffd2784b4a861e5b60395"},{url:"/icon-192x192.png",revision:"1f57e11fee86565b7785f1c264e1ba89"},{url:"/icon-256x256.png",revision:"260775b4dfd3f7fdea135ff9f98a3232"},{url:"/icon-384x384.png",revision:"38cf2ac9067729816ae910215aebd1bc"},{url:"/icon-512x512.png",revision:"b9a8076dbc6f86eddaf30eeec311665a"},{url:"/images/blog-1.jpg",revision:"ea028fda9f17e7c20fe276e64e79b8a4"},{url:"/images/blog-2.jpg",revision:"c86b2dbdf80e8215d18c88b31be287e4"},{url:"/images/blog-3.jpg",revision:"4f4b8593978d2b241a010e3abfb69f9a"},{url:"/images/blog-4.jpg",revision:"9b1691268cb9f5196fe12b414a5d630e"},{url:"/images/bride.jpg",revision:"40e4635175f7d4ee92111847f0bf97bb"},{url:"/images/bridesmaid-1.jpg",revision:"edee5031176c930d5a446d0de0d86764"},{url:"/images/bridesmaid-2.jpg",revision:"d871f19f96a8525ef5cdddbce95562e5"},{url:"/images/bridesmaid-3.jpg",revision:"4f32918375024920202fd16c50f1dbfe"},{url:"/images/bridesmaid-4.jpg",revision:"3cdcd3e7094d81c271bedc18f8cae695"},{url:"/images/couple-1.jpg",revision:"f34cba45d1ba4895ec7dac7e8a788204"},{url:"/images/couple-2.jpg",revision:"603cc74b570030c963458d223a940614"},{url:"/images/couple-3.jpg",revision:"4e1c8faec866e19d249df3570e9e4637"},{url:"/images/couple-4.jpg",revision:"faab72004224a7849de428881b06c463"},{url:"/images/cover_bg_1.jpg",revision:"106a7a97fc40c8c3bbc592554d38310d"},{url:"/images/cover_bg_2.jpg",revision:"45d6399751e34912a3c28567e4db922f"},{url:"/images/cover_bg_3.jpg",revision:"8f9f22fe2d1696810ff87e4629b99a05"},{url:"/images/flaticon/backup.txt",revision:"98dbe7a1ddfbbf6d846bd068b24ca3e5"},{url:"/images/flaticon/license/license.pdf",revision:"b01d795887750193bf4ca1a0585440fb"},{url:"/images/flaticon/svg/001-party.svg",revision:"f660eb687cccb82a04fc5bdd01d2d29c"},{url:"/images/flaticon/svg/002-wedding-couple.svg",revision:"877e5b350b8f8c7ce9c3303646cad508"},{url:"/images/flaticon/svg/003-luxury.svg",revision:"bf48912304d360435684bafc7e743bbd"},{url:"/images/flaticon/svg/004-nature.svg",revision:"e68b755a7c0788f7c29a9a11653c9d4d"},{url:"/images/flaticon/svg/005-two.svg",revision:"292dab48b4f2fa132246b97bb70c7956"},{url:"/images/flaticon/svg/006-flower-bell-outline-design-variant-with-vines-and-leaves.svg",revision:"20291f20165c83c5377c7c6dbea880e8"},{url:"/images/gallery-1.jpg",revision:"2f997baf9e22d2060122db8c1c2e9038"},{url:"/images/gallery-10.jpg",revision:"09b7c6df7531ecbb5b8862b932f6a758"},{url:"/images/gallery-2.jpg",revision:"e52dc80efe70f0ad4873dfda859549ed"},{url:"/images/gallery-3.jpg",revision:"a157c25976d6eb8f636ddda736483c8a"},{url:"/images/gallery-4.jpg",revision:"3f2bbc3a2fc1e354d07d68f6b92fab4a"},{url:"/images/gallery-5.jpg",revision:"b1a116b316a0909ccf225a7a45c4f223"},{url:"/images/gallery-6.jpg",revision:"ebbb512bf6615fdb8f8a59505933323e"},{url:"/images/gallery-7.jpg",revision:"9260e2b3c7fb0e42a85e469022ff96ac"},{url:"/images/gallery-8.jpg",revision:"9b1691268cb9f5196fe12b414a5d630e"},{url:"/images/gallery-9.jpg",revision:"ea028fda9f17e7c20fe276e64e79b8a4"},{url:"/images/groom-men-1.jpg",revision:"8833a494c38f62203b00179ea626f431"},{url:"/images/groom-men-2.jpg",revision:"76e44e76b7bced8bc1d01cf18b10cdd5"},{url:"/images/groom-men-3.jpg",revision:"6d514bc6109a141fc842f09cd86b22bf"},{url:"/images/groom-men-4.jpg",revision:"d3b73eea7fa3b064dcd62dbd0aa7dde4"},{url:"/images/groom.jpg",revision:"358c7d18cac314af920fd98d373ed86e"},{url:"/images/kesehatan/404_ This page could not be found.html",revision:"3ec25fdd1cd469d921a5080eaea1a6b9"},{url:"/images/kesehatan/404_ This page could not be found_files/_app.js",revision:"02c7ba2e8657d609300993215cd4ae81"},{url:"/images/kesehatan/404_ This page could not be found_files/_buildManifest.js",revision:"b88b55a2406cc626f6b18ac0ab101cf7"},{url:"/images/kesehatan/404_ This page could not be found_files/_error.js",revision:"0566fc8a39b40152c83add9a27a68c37"},{url:"/images/kesehatan/404_ This page could not be found_files/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/images/kesehatan/404_ This page could not be found_files/main.js",revision:"0b17cd46d0934a055770e351bc086663"},{url:"/images/kesehatan/404_ This page could not be found_files/polyfills.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/images/kesehatan/404_ This page could not be found_files/react-refresh.js",revision:"14741839958b5e33cd9ba3d1dbaad917"},{url:"/images/kesehatan/404_ This page could not be found_files/webpack.js",revision:"d4a2a50e2081961964b7feb1e82d889b"},{url:"/images/kesehatan/prokes.97366c1.jpg",revision:"d803bff27f71d1a1fa47e318af7e6602"},{url:"/images/norekvivi.jpg",revision:"1a4caa95237f32bd4b9bfd0b7af26de6"},{url:"/images/norekzikri.jpeg",revision:"366cea88a8747387678635846c533016"},{url:"/images/wed-ceremony.jpg",revision:"887eaeffa7bf30d95b24163b439ef033"},{url:"/images/wed-party.jpg",revision:"871e69a91cfcf446320ca36681d908d1"},{url:"/js/audio.js",revision:"139fafa53e4d3ff278ec9a305d97dbd4"},{url:"/js/bootstrap.min.js",revision:"4becdc9104623e891fbb9d38bba01be4"},{url:"/js/jquery.easing.1.3.js",revision:"2cb90c06cfc2084e0e11ca2b8a10f6c9"},{url:"/js/jquery.flexslider-min.js",revision:"d22c7a166ed20731c48d2f36ff1334ad"},{url:"/js/jquery.magnific-popup.min.js",revision:"d9267d6dda814fd767e1df7bfbe7eb57"},{url:"/js/jquery.mb.YTPlayer.min.js",revision:"3b32bdb61fd4bea8610549dae0e95ff2"},{url:"/js/jquery.min.js",revision:"4a356126b9573eb7bd1e9a7494737410"},{url:"/js/jquery.stellar.min.js",revision:"257c1e014bfdf359297cf2a80440a0ba"},{url:"/js/jquery.waypoints.min.js",revision:"28ef3dc306be44a30ec0d0ffe2bee109"},{url:"/js/magnific-popup-options.js",revision:"dff6a284a8ab2e228307c7b5f6d443dd"},{url:"/js/main.js",revision:"99ab42617b7fd77644af0ffd6a1dd4d1"},{url:"/js/modernizr-2.6.2.min.js",revision:"c3076c3133684f1acfb50014a2aa0876"},{url:"/js/owl.carousel.min.js",revision:"ffaa3c82ad2c6e216e68aca44746e1be"},{url:"/js/popup.js",revision:"98c4890046973dd121d5dd48f1a93ebc"},{url:"/js/respond.min.js",revision:"fda355038387a38685fb8213c2c2374b"},{url:"/js/sticky.js",revision:"1ea07e8554f899847379cd264f924d71"},{url:"/manifest.json",revision:"3035b429365aea35c8254a8939d2f0ad"},{url:"/sass/_bootstrap-compass.scss",revision:"3fec975e3405c6cd99c01b83edb1905f"},{url:"/sass/_bootstrap-mincer.scss",revision:"557a9bb02214d35a8499dd61dbb389ac"},{url:"/sass/_bootstrap-sprockets.scss",revision:"1d4a4a20542be73f7e8d259e031e49e3"},{url:"/sass/bootstrap.scss",revision:"d6fac1c283279ea33708c8afa54819cb"},{url:"/sass/bootstrap/_alerts.scss",revision:"c0e5396555dd4c70b9eeb314e4c4613d"},{url:"/sass/bootstrap/_badges.scss",revision:"9384c5f60cf095ad09dc43173622d046"},{url:"/sass/bootstrap/_breadcrumbs.scss",revision:"24c93808be39b840a66e95bf3fe89ed2"},{url:"/sass/bootstrap/_button-groups.scss",revision:"c9b67b57469dd74683a72e2f3734e529"},{url:"/sass/bootstrap/_buttons.scss",revision:"bb2fcb0a7f0cc6cbed09db8928c614a9"},{url:"/sass/bootstrap/_carousel.scss",revision:"548234e87f62fd8658d4ecdeca4fabb4"},{url:"/sass/bootstrap/_close.scss",revision:"247ef4c02f54f5bf898da8e4f6c88bd0"},{url:"/sass/bootstrap/_code.scss",revision:"280e44d4762299678f52c56c6df4ffc2"},{url:"/sass/bootstrap/_component-animations.scss",revision:"8c17107ac86a36d4b05a20c47d08dee9"},{url:"/sass/bootstrap/_dropdowns.scss",revision:"203f075b01f47b0675428e8d42f194fe"},{url:"/sass/bootstrap/_forms.scss",revision:"644e6fba1d70fda0f3b38e4a0d6c0cd4"},{url:"/sass/bootstrap/_glyphicons.scss",revision:"592530a38e0c16407c22609c63a505ff"},{url:"/sass/bootstrap/_grid.scss",revision:"ba7b4a2579c7f061a982830877a1c60d"},{url:"/sass/bootstrap/_input-groups.scss",revision:"e595dc91de881fc8e145627e85ba41e8"},{url:"/sass/bootstrap/_jumbotron.scss",revision:"2de0acd5f3f5ae5529e1f64d6fd8c94a"},{url:"/sass/bootstrap/_labels.scss",revision:"d103671ba8c96f743916990bdf40d3b4"},{url:"/sass/bootstrap/_list-group.scss",revision:"e514ae19883f5a3ad417d812a549dc3a"},{url:"/sass/bootstrap/_media.scss",revision:"91aa028d54785b36583c19020bba9f00"},{url:"/sass/bootstrap/_mixins.scss",revision:"df2dad555f64d993e27d45568b4cef39"},{url:"/sass/bootstrap/_modals.scss",revision:"7a24ee151c07b51ba75fcf1c33b1118e"},{url:"/sass/bootstrap/_navbar.scss",revision:"58acd058e729f304d7f69eed3448186c"},{url:"/sass/bootstrap/_navs.scss",revision:"89b073405d01e045f89dba5cb3e49946"},{url:"/sass/bootstrap/_normalize.scss",revision:"a81f00910a701c842ede4f497c191c80"},{url:"/sass/bootstrap/_pager.scss",revision:"fb95dee91745bec12cdd44c4542530f5"},{url:"/sass/bootstrap/_pagination.scss",revision:"179ed0f98ff9c131aaaadd73f51381a8"},{url:"/sass/bootstrap/_panels.scss",revision:"e4650d16f8900eeede19116f076e9df0"},{url:"/sass/bootstrap/_popovers.scss",revision:"6a03a7bd7f506bb33b2dc107c194428e"},{url:"/sass/bootstrap/_print.scss",revision:"b6fef93d5689af1a0467c8fc8e9959d9"},{url:"/sass/bootstrap/_progress-bars.scss",revision:"53de2fdfeb4c0fd4d6b4f323a507bc23"},{url:"/sass/bootstrap/_responsive-embed.scss",revision:"2c7057d9a90998866bf84c1112caf631"},{url:"/sass/bootstrap/_responsive-utilities.scss",revision:"67525c35b349ba0f509ba98e5500f83b"},{url:"/sass/bootstrap/_scaffolding.scss",revision:"c5fe3cc31e1bfcf1fa79ac2b0888b731"},{url:"/sass/bootstrap/_tables.scss",revision:"c91111e9d3f5d22ede57db4758f10b57"},{url:"/sass/bootstrap/_theme.scss",revision:"71b5847e9a9ca349480f932cf61aa1ed"},{url:"/sass/bootstrap/_thumbnails.scss",revision:"dd5e0a8f79dc6a539c38e05f14121c88"},{url:"/sass/bootstrap/_tooltip.scss",revision:"1fa68e95761bca93773df135f5b7bc5f"},{url:"/sass/bootstrap/_type.scss",revision:"1a80f6a3899de7cfb3d554cfdce18753"},{url:"/sass/bootstrap/_utilities.scss",revision:"7e020f996c50afd24453a871098cbda1"},{url:"/sass/bootstrap/_variables.scss",revision:"5a639bfa27039003b080d74834afff25"},{url:"/sass/bootstrap/_wells.scss",revision:"3577874a42c6fe920129f07eabca106a"},{url:"/sass/bootstrap/mixins/_alerts.scss",revision:"058b36cec876e55731f05b7cf0e43a3e"},{url:"/sass/bootstrap/mixins/_background-variant.scss",revision:"a392e0874a78c4a86db7b19654f4c591"},{url:"/sass/bootstrap/mixins/_border-radius.scss",revision:"88e9a7b563aa11357d7bfc114708b139"},{url:"/sass/bootstrap/mixins/_buttons.scss",revision:"9308e147a58312a6d3e7d5ad7b47950d"},{url:"/sass/bootstrap/mixins/_center-block.scss",revision:"f284d54e569eba55aba017e4807b0820"},{url:"/sass/bootstrap/mixins/_clearfix.scss",revision:"6fc90025fc80e49fd10100ee8c689c1d"},{url:"/sass/bootstrap/mixins/_forms.scss",revision:"8e74e8e7145cb98df17a275f800ea089"},{url:"/sass/bootstrap/mixins/_gradients.scss",revision:"c256e096c556db2471dd3c6c1516074c"},{url:"/sass/bootstrap/mixins/_grid-framework.scss",revision:"c01cf53ad0c2700e4571691810e4674c"},{url:"/sass/bootstrap/mixins/_grid.scss",revision:"828243f1ad7096f947e726b748200cf1"},{url:"/sass/bootstrap/mixins/_hide-text.scss",revision:"418c58bf3ee53cf5f50f96c691d5f7c1"},{url:"/sass/bootstrap/mixins/_image.scss",revision:"1c7ab3b18895dad2de80f0dd11d13577"},{url:"/sass/bootstrap/mixins/_labels.scss",revision:"80f2187ccdda40c712cd2dbfb8d7a405"},{url:"/sass/bootstrap/mixins/_list-group.scss",revision:"55c07e91ca263fe6adf74c2dd0d96a39"},{url:"/sass/bootstrap/mixins/_nav-divider.scss",revision:"d9d1e810eff80b30acc3a03bf346820f"},{url:"/sass/bootstrap/mixins/_nav-vertical-align.scss",revision:"5cbd9ed72043e13491d9584c6bed5b1c"},{url:"/sass/bootstrap/mixins/_opacity.scss",revision:"39a203bc3a8cd9f7b13ac7608074a6af"},{url:"/sass/bootstrap/mixins/_pagination.scss",revision:"34784d1e98ba522b0f47c72fa69c4f62"},{url:"/sass/bootstrap/mixins/_panels.scss",revision:"b1038d1728d6b1af90add852cecc7d5d"},{url:"/sass/bootstrap/mixins/_progress-bar.scss",revision:"dd436b8aad1c620e630f6bbbbe373c88"},{url:"/sass/bootstrap/mixins/_reset-filter.scss",revision:"d2eb7cc1c9a267efed34fedabec65a9f"},{url:"/sass/bootstrap/mixins/_reset-text.scss",revision:"86e9bbc6877d6ff51ec6dbfc1a8e4034"},{url:"/sass/bootstrap/mixins/_resize.scss",revision:"a377ab0a14e899c6433cd29c2e14a978"},{url:"/sass/bootstrap/mixins/_responsive-visibility.scss",revision:"4af4d79bbc3b9ee602cb584c23019fc5"},{url:"/sass/bootstrap/mixins/_size.scss",revision:"6de6854a356f52a6fa7f939c87f137d0"},{url:"/sass/bootstrap/mixins/_tab-focus.scss",revision:"2dab79127e3b0e124855d44007df87da"},{url:"/sass/bootstrap/mixins/_table-row.scss",revision:"1ae5e672aaea920528aab0739d2ed229"},{url:"/sass/bootstrap/mixins/_text-emphasis.scss",revision:"854502c2432fb098fb556666c69350b0"},{url:"/sass/bootstrap/mixins/_text-overflow.scss",revision:"0bb73f191da9ea556ddab98d304cbaed"},{url:"/sass/bootstrap/mixins/_vendor-prefixes.scss",revision:"f2fb38a149f47dc26fc28904b8425d62"},{url:"/sass/style.scss",revision:"29c51b6d5ab77834dbd2ec16bb00bbf2"},{url:"/screencapture.png",revision:"9999338fd7b7e966e094221d623c2d2f"},{url:"/service-worker.js",revision:"7d5c09faef85401033fb3e8a8e0d06c0"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),s.cleanupOutdatedCaches(),s.registerRoute("/",new s.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:s,response:e,event:a,state:i})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new s.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new s.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new s.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/image\?url=.+$/i,new s.StaleWhileRevalidate({cacheName:"next-image",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:mp3|wav|ogg)$/i,new s.CacheFirst({cacheName:"static-audio-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:mp4)$/i,new s.CacheFirst({cacheName:"static-video-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:js)$/i,new s.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:css|less)$/i,new s.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new s.StaleWhileRevalidate({cacheName:"next-data",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:json|xml|csv)$/i,new s.NetworkFirst({cacheName:"static-data-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;const e=s.pathname;return!e.startsWith("/api/auth/")&&!!e.startsWith("/api/")}),new s.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;return!s.pathname.startsWith("/api/")}),new s.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>!(self.origin===s.origin)),new s.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
