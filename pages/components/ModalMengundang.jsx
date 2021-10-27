
import React, { useState, useEffect } from 'react';
import { useRouter,  } from 'next/router';
import queryString from "query-string";
import * as $ from "jquery";
const ModalMengundangPage = () => {
    const router = useRouter();
    const query = router.query = queryString.parse(router.asPath.split(/\?/)[1]); // Destructuring our router object
    const name = query['name'];

    const handleModal = () => {
        const abcd = window.$;
        abcd('#staticBackdrop').modal('hide');
    };

    return (
        <div
            className="modal fade"
            id="staticBackdrop"
            role="dialog"
            tab-index="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
            >
            <div className="modal-dialog modal-fullscreen">
                {name ? (
                    <div className="modal-content"
                    style={{backgroundColor: "#00000085", height: "100%"}}>
                        {/* <div className="modal-header text-center text-white">
                            <h3 className="text-white"
                            style={{fontFamily: "sans-serif"}}>
                                Wedding
                            </h3>
                            <h4 className="text-white"
                            style={{fontFamily: "sans-serif"}}>
                                Vivi Febriyani A & Zikri Ramdani
                            </h4>
                        </div> */}
                        <div className="modal-body text-white"
                        style={{
                            justifyContent: "center",
                            display: "flex",
                            height: "100%"
                            // height: "calc(100% - 255px)"
                        }}>
                            <div className="row protokol-center">
                                <div className="col-xs-12">
                                    <div className="text-center">
                                        <small>
                                            Kepada Yth. Bapak/Ibu/Saudara/i
                                        </small>
                                        <br/>
                                        {/* <h2 className="text-white text-capitalize"
                                        style={{fontFamily: "sans-serif"}}>
                                            {name}
                                        </h2> */}
                                        <h2 class="typewrite text-white text-capitalize" data-period="2000" data-type={`[ "${name}" ]`}
                                        style={{fontFamily: "sans-serif"}}></h2>
                                        <small style={{fontSize: "65%"}}>
                                            Mohon maaf apabila ada kesalahan dalam penulisan nama atau gelar
                                        </small>
                                        <br/><br/><br/>
                                        <p className="mb-0" style={{lineHeight: "1.2"}}>
                                            <small>
                                                Tanpa Mengurangi Rasa Hormat,
                                                <br/>
                                                Kami Mengundang Anda Untuk Berhadir Di Acara Pernikahan Kami.
                                            </small>
                                        </p>
                                        <br/><br/>
                                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#ModalProtokol"
                                        onClick={(e) => handleModal()}>
                                            Buka Undangan
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
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
                                        <img src="images/kesehatan/prokes.97366c1.jpg" className="w-100" 
                                        style={{borderRadius: "5px"}} />
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
                )}
            </div>
        </div>
    )
}

export default ModalMengundangPage;