import React, { useRef, useState } from 'react';
import Swal from 'sweetalert2'

const Norek = (e) => {
    const myFunctionV = (e) => {
        navigator.clipboard.writeText('5485415316')
        Swal.fire({
            title: 'BCA 5485415316 a/n Vivi Febriyani A',
            text: 'No rekening berhasil dicopy',
            icon: 'success'
        })
    };

    const myFunctionZ= (e) => {
        navigator.clipboard.writeText('8015234527')
        Swal.fire({
            title: 'BCA 8015234527 a/n Zikri Ramdani',
            text: 'No rekening berhasil dicopy',
            icon: 'success'
        })
    };
    return (
        <div id="Norek" className="tabcontent content-hidden-xs"> 
            <div id="qbootstrap-couple" className="qbootstrap-bg" data-section="norek" data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row animate-box">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="col-md-12 text-center section-heading svg-sm colored mb-0 pb-0">
                                <img src="images/flaticon/svg/005-two.svg" className="svg" alt="Wedding Vivi & Zikri"
                                style={{marginBottom: 0}} />
                                <h2 style={{marginTop: 0}}>Give A Gift</h2>
                                <div className="row">
                                <div className="col-md-10 col-md-offset-1 subtext">
                                    <p>
                                        Tanpa mengurangi rasa hormat, jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
                                    </p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="row animate-box row-bottom-padded-md">
                        <div className="col-md-6 col-xs-12 text-center animate-box mb-xs-5">
                            <div className="subtext">
                                <img src="images/norekzikri.jpeg" width="200" alt="Wedding Vivi & Zikri" style={{borderRadius: 0}} />
                                <p>
                                    Silahkan transfer ke rekening<br/>
                                    <b>BCA 5485415316 a/n Vivi Febriyani A</b>
                                    <br/>
                                    <button className="btn btn-primary btn-sm" onClick={(e) => myFunctionV(e)}
                                    style={{marginTop: "5px"}}>Copy No Rek</button>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12 text-center animate-box">
                            <img src="images/norekzikri.jpeg" width="200" alt="Wedding Vivi & Zikri" style={{borderRadius: 0}} />
                            <div className="subtext">
                                <p>
                                    Silahkan transfer ke rekening
                                    <br/>
                                    <b>BCA 8015234527 a/n Zikri Ramdani</b>
                                    <br/>
                                    <button className="btn btn-primary btn-sm" onClick={(e) => myFunctionZ(e)}
                                    style={{marginTop: "5px"}}>
                                        Copy No Rek
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row animate-box">
                        <div className="col-md-10 col-md-offset-1 mb-xs-5">
                            <div className="text-white">
                                <button className="btn btn-default btn-block">
                                Silahkan Konfirmasi <a href="https://bit.ly/3iMKEOJ" target="_blank"
                                style={{color: "#000", textDecoration: "underline"}}>
                                    <b>disini</b>
                                </a> (Anda akan dialihkan ke google form)
                                </button>
                            </div>
                            {/* <form className="form-inline">
                                <div className="col-md-3 col-sm-3">
                                    <div className="form-group">
                                        <label className="sr-only">Name</label>
                                        <input type="name" className="form-control" id="name" placeholder="Nama Anda*" required />
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-3">
                                    <div className="form-group">
                                        <label className="sr-only">Inisial</label>
                                        <input type="text" className="form-control" id="inisial" placeholder="Contoh : Teman SD*" required />
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-3">
                                    <div className="form-group">
                                        <label className="sr-only">File</label>
                                        <input type="file" className="form-control w-100" id="file" />
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-3">
                                    <button type="submit" className="btn btn-primary w-100"
                                    style={{padding: "15px"}}>Konfirmasi</button>
                                </div>
                            </form> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Norek;