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

const MengundangPage = () => {
  const router = useRouter();
  const query = router.query = queryString.parse(router.asPath.split(/\?/)[1]); // Destructuring our router object
  const name = query['name'];
  // console.log('asd', query)
  
  return (
    <div>
      <Head>
        <title>Wedding Vivi & Zikri</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Wedding Vivi dan Zikri" />
        <meta name="author" content="Zikri Ramdani" />
        <link rel="icon" href="/images/flaticon/svg/003-luxury.svg" />

        {/* Facebook and Twitter integration */}
        <meta property="og:site_name" content="Wedding Vivi & Zikri"/>
        <meta property="og:title" content="Wedding Vivi & Zikri"/>
        <meta property="og:description" content="Cipondoh, Kota Tangerang"/>
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/vue-js-271d9.appspot.com/o/testingarena%2Fno-image.jpg?alt=media"/>
        <meta property="og:url" content="https://zikriramdani.github.io/wedding2"/>

        <meta name="twitter:title" content="Wedding Vivi & Zikri" />
        <meta property="og:description" content="Cipondoh, Kota Tangerang"/>
        <meta name="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/vue-js-271d9.appspot.com/o/testingarena%2Fno-image.jpg?alt=media" />
        <meta name="twitter:url" content="https://zikriramdani.github.io/wedding2" />
        <meta name="twitter:card" content="Card" />

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

        
      </Head>

      {/* <!-- Modernizr JS --> */}
      <Script type="text/javascript" src="js/modernizr-2.6.2.min.js"></Script>
      {/* <!-- FOR IE9 below -->
      <!--[if lt IE 9]> */}
      <Script type="text/javascript" src="js/respond.min.js"></Script>
      {/* <![endif]--> */}

      <BeriHadiah />
      <Musik />
      <Header/>
      <HomePage />
      <MarriedPage />
      <GroomBridePage />
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
      <Script type="text/javascript" src="/js/jquery.min.js"></Script>
      {/* <!-- jQuery Easing --> */}
      <Script src="/js/jquery.easing.1.3.js"></Script>
      {/* <!-- Bootstrap --> */}
      <Script src="/js/bootstrap.min.js"></Script>
      {/* <!-- Waypoints --> */}
      <Script src="/js/jquery.waypoints.min.js"></Script>
      {/* <!-- YTPlayer --> */}
      <Script src="/js/jquery.mb.YTPlayer.min.js"></Script>
      {/* <!-- Flexslider --> */}
      <Script src="/js/jquery.flexslider-min.js"></Script>
      {/* <!-- Owl Carousel --> */}
      <Script src="/js/owl.carousel.min.js"></Script>
      {/* <!-- Parallax --> */}
      <Script src="/js/jquery.stellar.min.js"></Script>
      {/* <!-- Magnific Popup --> */}
      <Script src="/js/jquery.magnific-popup.min.js"></Script>
      <Script src="/js/magnific-popup-options.js"></Script>
      {/* <!-- Main JS (Do not remove) --> */}
      <Script src="/js/main.js"></Script>

      <Script src="/js/sticky.js"></Script>
      <Script src="/js/popup.js"></Script>
      <Script src="/js/audio.js"></Script>

    </div>
  )
}

export default MengundangPage;