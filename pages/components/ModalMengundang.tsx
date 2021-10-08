import React, { useState, useEffect } from 'react';
import { useRouter,  } from 'next/router';
import queryString from "query-string";

const ModalMengundangPage = () => {
    const router = useRouter();
    const query = router.query = queryString.parse(router.asPath.split(/\?/)[1]); // Destructuring our router object
    const name = query['name'];

    return (
        <div
            className="modal fade"
            id="staticBackdrop"
            tab-index="-1"
            aria-labelledby="ModalMengundangLabel"
            >
            <div className="modal-dialog modal-fullscreen">
                {name ? (
                    <div className="modal-content"
                    style={{backgroundColor: "#00000085", height: "100%"}}>
                        <div className="modal-header text-center text-white">
                            <h3 className="text-white"
                            style={{fontFamily: "sans-serif"}}>
                                Wedding
                            </h3>
                            <h4 className="text-white"
                            style={{fontFamily: "sans-serif"}}>
                                Vivi Febriyani A & Zikri Ramdani
                            </h4>
                        </div>
                        <div className="modal-body text-white"
                        style={{
                            justifyContent: "center",
                            display: "flex",
                            height: "calc(100% - 255px)"
                        }}>
                            <div className="row protokol-center">
                                <div className="col-xs-12">
                                    <div className="text-center">
                                        <small>
                                            Turut Mengundang :
                                        </small>
                                        <br/>
                                        <h2 className="mb-0 text-white text-capitalize"
                                        style={{fontFamily: "sans-serif"}}>
                                            {name}
                                        </h2>
                                        Di
                                        <br/>
                                        Tempat
                                        <br/><br/>
                                        <button type="button" className="btn btn-primary" data-target="#staticBackdrop" data-dismiss="modal">
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
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer w-100"
                        style={{textAlign: "center" , position: "fixed", bottom: 0}}>
                        <button type="button" className="btn btn-primary" data-dismiss="modal">
                            Baik, saya mengerti
                        </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ModalMengundangPage;