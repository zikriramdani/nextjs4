import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import Head from 'next/head';
import { useRouter,  } from 'next/router';
import queryString from "query-string";

import BeriHadiah from './components/BeriHadiah';
import Musik from "./components/Musik";
import Header from "./components/Header";
import HomePage from "./components/Home";
import MarriedPage from "./components/Married";
import GroomBridePage from './components/GroomBride';
import WhenwherePage from './components/Whenwhere';
import NorekPage from './components/Norek';
import RsvpPage from './components/Rsvp';
import GalleryPage from './components/Gallery';
import Footer from './components/Footer';

import ModalMengundangPage from './components/ModalMengundang';
import ModalProtokolPage from './components/ModalProtokol';

import manifest from '../public/manifest.json';

const MengundangPage = () => {
  const router = useRouter();
  const [url, setUrl] = useState('');
  const [dom, setDom] = useState('');
  // const query = router.query = queryString.parse(router.asPath.split(/\?/)[1]); // Destructuring our router object

  useEffect(() => {
    var domain = document.location.origin;
    var currentUrl = window. location. href;
    setUrl(currentUrl);
    setDom(domain);

    if(router) {
      const manifestElement = document.getElementById("manifest");
      const manifestString = JSON.stringify({
        ...manifest,
        start_url: currentUrl,
        "icons": [
          {
            "src": domain + "/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": domain + "/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
          },
          {
            "src": domain + "/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": domain + "/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ]
      });
      // console.log('asd', currentUrl)
      manifestElement?.setAttribute(
        "href",
        "data:application/json;charset=utf-8," + encodeURIComponent(manifestString)
      );
    }
  }, [router]);

  // console.log('asda', dom + "/images/vividanzikri/IMG_9740-min.png")
  
  return (
    <div>
      <Head>
        <title>Wedding Vivi & Zikri</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Facebook and Twitter integration */}
        <meta name="keywords" content="Wedding Vivi dan Zikri" />
        <meta name="author" content="Zikri Ramdani" />
        <meta property="og:site_name" content="Wedding Vivi & Zikri"/>
        <meta property="og:title" content="Wedding Vivi & Zikri"/>
        <meta property="og:image" content={dom + "/images/vividanzikri/IMG_9740-min.jpg"} />
        <meta property="og:description" content="Gg. Sadar 1, Kec. Cipondoh, Kota Tangerang"/>
        {/* <meta name="url" property="og:url" content={url} /> */}
        {/* <meta property="og:image:secure_url" content={dom + "/images/vividanzikri/IMG_9740-min.jpg"} />  */}

        <meta name="twitter:title" content="Wedding Vivi & Zikri" />
        <meta name="twitter:image" content={dom + "/images/vividanzikri/IMG_9740-min.jpg"} />
        <meta name="twitter:card" content={dom + "/images/vividanzikri/IMG_9740-min.jpg"} />
        {/* <meta name="twitter:url" content={url} /> */}
        {/* <meta name="twitter:image:secure_url" content={dom + "/images/vividanzikri/IMG_9740-min.jpg"} />  */}

        <link rel="icon" href={dom + "/images/flaticon/svg/003-luxury.svg"} />
        <link id="manifest" rel="manifest" crossOrigin="use-credentials" />

        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,600,400italic,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Clicker+Script" rel="stylesheet" />

        {/* <!-- Animate.css --> */}
        <link rel="stylesheet" href="/css/animate.css" />
        {/* <!-- Icomoon Icon Fonts--> */}
        <link rel="stylesheet" href="/css/icomoon.css" />
        {/* <!-- Simple Line Icons --> */}
        <link rel="stylesheet" href="/css/simple-line-icons.css" />
        {/* <!-- Owl Carousel --> */}
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
        {/* <!-- Magnific popup  --> */}
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        {/* <!-- Bootstrap  --> */}
        <link rel="stylesheet" href="/css/bootstrap.css" />
        
        <link rel="stylesheet" href="/css/style.css" />

        {/* <!-- Modernizr JS --> */}
        {/* <Script type="text/javascript" src="js/modernizr-2.6.2.min.js" strategy="beforeInteractive"></Script> */}
        {/* <!-- FOR IE9 below -->
        <!--[if lt IE 9]> */}
        {/* <Script type="text/javascript" src="js/respond.min.js" strategy="beforeInteractive"></Script> */}
        {/* <![endif]--> */}
      </Head>
      {/* <!-- Modernizr JS --> */}
      <Script type="text/javascript" src="js/modernizr-2.6.2.min.js" strategy="beforeInteractive"></Script>
      {/* <!-- FOR IE9 below -->
      <!--[if lt IE 9]> */}
      <Script type="text/javascript" src="js/respond.min.js" strategy="beforeInteractive"></Script>
      {/* <![endif]--> */}

      <BeriHadiah />
      <Musik />
      <Header/>
      <HomePage />
      <MarriedPage />
      {/* <GroomBridePage /> */}
      <WhenwherePage />
      <NorekPage />
      <RsvpPage />
      <GalleryPage />
      <Footer />

      {/* <!-- Modal --> */}
      {/* {name ? ( */}
      <ModalMengundangPage />
      <ModalProtokolPage />
      

      {/* <!-- jQuery --> */}
      <Script type="text/javascript" src="/js/jquery.min.js" strategy="beforeInteractive"></Script>
      {/* <!-- jQuery Easing --> */}
      <Script type="text/javascript" src="/js/jquery.easing.1.3.js" strategy="beforeInteractive"></Script>
      {/* <!-- Bootstrap --> */}
      <Script type="text/javascript" src="/js/bootstrap.min.js" strategy="beforeInteractive"></Script>
      {/* <!-- Waypoints --> */}
      <Script type="text/javascript" src="/js/jquery.waypoints.min.js" strategy="beforeInteractive"></Script>
      {/* <!-- YTPlayer --> */}
      <Script type="text/javascript" src="/js/jquery.mb.YTPlayer.min.js" strategy="beforeInteractive"></Script>
      {/* <!-- Flexslider --> */}
      <Script type="text/javascript" src="/js/jquery.flexslider-min.js" strategy="beforeInteractive"></Script>
      {/* <!-- Owl Carousel --> */}
      <Script type="text/javascript" src="/js/owl.carousel.min.js" strategy="beforeInteractive"></Script>
      {/* <!-- Parallax --> */}
      <Script type="text/javascript" src="/js/jquery.stellar.min.js" strategy="beforeInteractive"></Script>
      {/* <!-- Magnific Popup --> */}
      <Script type="text/javascript" src="/js/jquery.magnific-popup.min.js" strategy="beforeInteractive"></Script>
      <Script type="text/javascript" src="/js/magnific-popup-options.js" strategy="beforeInteractive"></Script>
      {/* <!-- Main JS (Do not remove) --> */}
      <Script type="text/javascript" src="/js/main.js" strategy="beforeInteractive"></Script>

      <Script type="text/javascript" src="/js/sticky.js" strategy="beforeInteractive"></Script>
      <Script type="text/javascript" src="/js/popup.js" strategy="beforeInteractive"></Script>
      <Script type="text/javascript" src="/js/audio.js" strategy="beforeInteractive"></Script>

    </div>
  )
}

export default MengundangPage;