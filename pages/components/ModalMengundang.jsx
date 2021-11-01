
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
                        <div className="modal-header text-center text-white">
                            <h3 className="text-white"
                            style={{fontFamily: "sans-serif"}}>
                                Wedding Invitation
                            </h3>
                            {/* <h4 className="text-white"
                            style={{fontFamily: "sans-serif"}}>
                                Vivi Febriyani A & Zikri Ramdani
                            </h4> */}
                        </div>
                        <div className="modal-body text-white"
                        style={{
                            justifyContent: "center",
                            display: "flex",
                            height: "calc(100% - 25%)" //"100%"
                            // height: "calc(100% - 255px)"
                        }}>
                            <div className="row protokol-center">
                                <div className="col-xs-12">
                                    <div className="text-center">
                                        <small>
                                            Kepada Yth. Bapak/Ibu/Saudara/i
                                        </small>
                                        <br/>
                                        <h2 className="text-white text-capitalize"
                                        style={{fontFamily: "sans-serif"}}>
                                            {name}
                                        </h2>
                                        {/* <h2 className="typewrite text-white text-capitalize" data-period="10000" data-type={`[ "${name}" ]`}
                                        style={{fontFamily: "sans-serif"}}></h2> */}
                                        <small style={{fontSize: "65%"}}>
                                            Mohon Maaf Apabila Ada Kesalahan Penulisan Nama / gelar
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
                        <div className="modal-body text-white"
                        style={{
                            justifyContent: "center",
                            display: "flex",
                            height: "calc(100% - 25%)" //"100%"
                            // height: "calc(100% - 255px)"
                        }}>
                            <div className="row protokol-center">
                                <div className="col-xs-12">
                                    <div className="text-center">
                                        <h2 className="text-white"
                                        style={{fontFamily: "sans-serif"}}>
                                            Wedding Invitation
                                        </h2>
                                        <br/>
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
                )}
            </div>
        </div>
    )
}

export default ModalMengundangPage;