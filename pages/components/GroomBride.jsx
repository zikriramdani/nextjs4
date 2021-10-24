import { LazyLoadImage } from 'react-lazy-load-image-component';

const GroomBridePage = () => {
    return (
        <div id="Groombride" className="tabcontent content-hidden-xs">
            <div id="qbootstrap-groom-bride" data-section="groom-bride">
                <div className="container">
                    <div className="row animate-box">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="col-md-12 text-center section-heading svg-sm-2 colored">
                                <img src="/images/flaticon/svg/002-wedding-couple.svg" className="svg" alt="" />
                                <h2>Groom &amp; Bride</h2>
                                <p>
                                    Pernikahan adalah ibadah, dan setiap ibadah bermuara pada cinta-Nya sebagai tujuan. Sudah sewajarnya setiap upaya meraih cinta-Nya dilakukan dengan sukacita.		
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="couple groom text-center animate-box">
                                <LazyLoadImage
                                effect="blur"
                                alt=""
                                src="images/bride.jpg" className="img-responsive" // use normal <img> attributes as props
                                />
                                {/* <img src="images/bride.jpg" className="img-responsive" alt="" /> */}
                                <div className="desc">
                                    <h2>Vivi Febriyani A</h2>
                                    {/* <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda vero totam eum, necessitatibus reprehenderit nisi, ratione neque aspernatur sapiente minus? Omnis neque labore distinctio aspernatur esse impedit laboriosam, veritatis dolorem!</p> --> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="couple bride text-center animate-box mb-xs-5">
                                <LazyLoadImage
                                effect="blur"
                                alt=""
                                src="/images/groom.jpg" className="img-responsive" // use normal <img> attributes as props
                                />
                                {/* <img src="/images/groom.jpg" className="img-responsive" alt="" /> */}
                                <div className="desc">
                                    <h2>Zikri Ramdani</h2>
                                    {/* <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda vero totam eum, necessitatibus reprehenderit nisi, ratione neque aspernatur sapiente minus? Omnis neque labore distinctio aspernatur esse impedit laboriosam, veritatis dolorem!</p> --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroomBridePage;