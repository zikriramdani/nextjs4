import React, { useState, useEffect } from 'react';
import { useRouter,  } from 'next/router';
import queryString from "query-string";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ModalProtokolPage = () => {
    const router = useRouter();
    const query = router.query = queryString.parse(router.asPath.split(/\?/)[1]); // Destructuring our router object
    const name = query['name'];

    const [names, setName] = useState(name);
    
    return (
        <div
            className="modal fade"
            id="ModalProtokol"
            role="dialog"
            tab-index="-1"
            aria-labelledby="ModalProtokolLabel"
            aria-hidden="true"
            >
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content"
                style={{backgroundColor: "#00000085", height: "100%"}}>
                    <div className="modal-header text-center text-white">
                        <h3 className="text-white"
                        style={{fontFamily: "sans-serif"}}>
                            Protokol Kesehatan
                        </h3>
                        <small>Untuk mematuhi himbauan pemerintah dalam pencegahan penyebaran Covid-19, maka diharapkan Bapak/Ibu/Saudara/i tamu undangan untuk:</small>
                    </div>
                    <div className="modal-body text-white">
                        <div className="row protokol-center"
                        style={{marginTop: "1rem"}}>
                            <div className="col-md-7 col-xs-12">
                                <div style={{marginBottom: "2rem"}}>
                                    <LazyLoadImage
                                    className="w-100" 
                                    effect="blur"
                                    src="/images/kesehatan/prokes.97366c1.jpg"
                                    style={{borderRadius: "5px"}} alt="Wedding Vivi & Zikri" // use normal <img> attributes as props
                                    />
                                    {/* <img src="/images/kesehatan/prokes.97366c1.jpg" className="w-100" 
                                    style={{borderRadius: "5px"}} alt="Wedding Vivi & Zikri" /> */}
                                </div>
                                <div className="text-center">
                                    <small>
                                    Terima kasih atas pengertian Bapak/Ibu/Saudara/i, semoga dengan melakukan protokol kesehatan di atas, kita semua dapat terjaga dari Covid-19.
                                    </small>
                                </div>
                                <br/>
                                <div className="text-center">
                                    <button type="button" className="btn btn-primary" data-dismiss="modal">
                                        Baik, saya mengerti
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="modal-footer w-100"
                    style={{textAlign: "center" , position: "fixed", bottom: 0}}>
                    <button type="button" className="btn btn-primary" data-dismiss="modal">
                        Baik, saya mengerti
                    </button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ModalProtokolPage;