const HomePage = () => {
    return (
        <div id="Home" className="tabcontent">
            <div className="qbootstrap-hero" data-section="home">
                <div className="qbootstrap-overlay"></div>
                <div className="qbootstrap-cover text-center" data-stellar-background-ratio="0.5" style={{backgroundImage: "url(images/cover_bg_3.jpg)"}}>
                    <div className="display-t">
                        <div className="display-tc">
                            <div className="container">
                                <div className="col-md-10 col-md-offset-1">
                                    <div className="animate-box svg-sm colored">
                                        <img src="/images/flaticon/svg/004-nature.svg" className="svg" alt="" />
                                        <h1 className="holder"><span>The Wedding of</span></h1>
                                        <h2>
                                            Vivi Febriyani A <br/>&amp;<br/> Zikri Ramdani
                                        </h2>
                                        {/* <p>00.00.0000</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;