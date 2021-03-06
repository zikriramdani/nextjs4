const Rsvp = () => {
    const handleClick = () => {
        window.open('https://bit.ly/3uT2Vi2', "_blank")
    }
    
    return (
        <div id="Rsvp" className="tabcontent content-hidden-xs">
            {/* <div id="qbootstrap-started" className="qbootstrap-bg" data-section="rsvp" data-stellar-background-ratio="0.5" style={{backgroundImage: "url(/images/cover_bg_1.jpg)", padding: "5em 0"}}> */}
            <div id="qbootstrap-started" className="rsvp" data-section="rsvp" data-stellar-background-ratio="0.5" style={{backgroundImage: "url(/images/vividanzikri/IMG_9722-min.png)", padding: "5em 0"}}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row animate-box">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="col-md-12 text-center section-heading svg-sm colored">
                                <img src="images/flaticon/svg/005-two.svg" className="svg" alt="Wedding Vivi & Zikri" />
                                <h2>RSVP</h2>
                                <div className="row">
                                <div className="col-md-10 col-md-offset-1 subtext">
                                    <p className="text-white">
                                        Ucapan Selamat & Do'a <br/>untuk Vivi Febriyani A & Zikri Ramdani
                                    </p>
                                    <small className="text-white">
                                        Merupakan suatu kehormatan dan kebahagiaan bagi kami,
                                        Apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do'a & restu kepada kedua mempelai.
                                    </small>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="row animate-box">
                        <div className="col-md-10 col-md-offset-1 mb-xs-5">
                            <div className="text-white">
                                <button className="btn btn-default btn-block"
                                style={{padding: "8px", fontSize: "14px"}}
                                onClick={handleClick}>
                                Silahkan isi form <a href="https://bit.ly/3uT2Vi2" target="_blank"
                                style={{color: "#000", textDecoration: "underline"}} rel="noreferrer">
                                    <b>(Klik disini)</b>
                                </a>
                                <br/>(Anda akan dialihkan ke google form)
                                </button>
                            </div>
                            {/* <form className="form-inline" action="" method="POST">
                                <div className="col-md-6 col-sm-6">
                                    <div className="form-group">
                                        <label className="sr-only">Full Name</label>
                                        <input type="name" className="form-control" id="name" placeholder="Nama Anda*" required />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <div className="form-group">
                                        <label className="sr-only">No Hp</label>
                                        <input type="tel" className="form-control" id="no_hp" placeholder="No.Handphone Anda*" required />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group"
                                    style={{background: "rgba(255, 255, 255, 0.2)",padding: "15px", borderRadius: "4px", color: "#cacdcb"}}>
                                        <label>Maukah Anda hadir?</label><br/>
                                        <input type="radio" name="menghadiri" value="Ya, saya akan berada di sana" />
                                        <span>Ya, saya akan berada di sana</span><br/>
                                        <input type="radio" name="menghadiri" value="Maaf, saya tidak bisa datang" />
                                        <span>Maaf, saya tidak bisa datang</span>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label className="sr-only">Ucapan</label>
                                        <textarea name="ucapan" className="form-control" placeholder="Ucapan" required></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-4">
                                    <button type="submit" className="btn btn-default btn-block">Submit</button>
                                </div>
                            </form> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rsvp;