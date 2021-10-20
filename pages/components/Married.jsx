const MarriedPage = () => {
    return (
        <div id="Married" className="tabcontent content-hidden-xs">
            <div id="qbootstrap-couple" className="qbootstrap-section-gray" data-section="married">
                <div className="container">
                    <div className="row animate-box">
                        <div className="col-md-8 col-md-offset-2 animate-box">
                            <div className="col-md-12 text-center section-heading svg-sm colored">
                                <img src="images/flaticon/svg/005-two.svg" className="svg" alt=""
                                style={{marginBottom: 0}} />
                                <h2 style={{marginTop: 0}}>Mempelai</h2>
                                <strong>Assalamualaikum Warahmatullahi Wabarakatuh</strong>
                                <p>Dengan memohon Ridho serta Rahmat Allah SWT, kami bermaksud menyelenggarakan Resepsi Pernikahan putra-putri kami:</p>
                            </div>
                        </div>
                    </div>
                    <div className="row animate-box"
                    style={{marginBottom: "3rem"}}>
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <div className="col-md-5 col-sm-5 col-xs-5 nopadding">
                                <img src="/images/bride.jpg" className="img-responsive" alt="" />
                                <h3>Vivi Febriyani A</h3>
                                <small>
                                    Putri pertama dari Bapak ...
                                </small>
                                {/* <span>Bride</span> */}
                            </div>
                            <div className="col-md-2 col-sm-2 col-xs-2 nopadding">
                                <h2 className="amp-center">
                                    <img src="/images/flaticon/svg/003-luxury.svg" className="svg img-responsive" alt="" />
                                </h2>
                            </div>
                            <div className="col-md-5 col-sm-5 col-xs-5 nopadding">
                                <img src="/images/groom.jpg" className="img-responsive" alt="" />
                                <h3>Zikri Ramdani</h3>
                                <small>
                                    Putra kedua dari Bapak ...
                                </small>
                                {/* <span>Groom</span> */}
                            </div>
                        </div>
                    </div>
                    <div className="row animate-box">
                        <div className="col-md-8 col-md-offset-2 animate-box">
                            <div className="col-md-12 text-center section-heading svg-sm colored">
                                <p>
                                    Pernikahan adalah ibadah, dan setiap ibadah bermuara pada cinta-Nya sebagai tujuan. Sudah sewajarnya setiap upaya meraih cinta-Nya dilakukan dengan sukacita.		
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MarriedPage;