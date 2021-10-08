const ModalProtokolPage = () => {
    return (
        <div
            className="modal fade"
            id="ModalProtokol"
            tab-index="-1"
            aria-labelledby="staticBackdropLabel"
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
                                <img src="images/kesehatan/prokes.97366c1.jpg" className="w-100" 
                                style={{borderRadius: "5px"}} alt="Wedding Vivi & Zikri" />
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
            </div>
        </div>
    )
}

export default ModalProtokolPage;