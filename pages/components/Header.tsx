const Header = () => {
    const handleClick = (evt, path) => {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
            tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(path).style.display = "block";
        evt.currentTarget.className += " active";
    }
    return (
        <div>
            <header role="banner" id="qbootstrap-header" className="hidden-xs navbar-sticky">
                <div className="container">
                <nav className="navbar navbar-default">
                    <div className="navbar-header">
                        {/* <!-- Mobile Toggle Menu Button --> */}
                        <a href="#" className="js-qbootstrap-nav-toggle qbootstrap-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
                        <div className="navbar-brand">Wedding</div> 
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="active"><a href="#" data-nav-section="home"><span>Home</span></a></li>
                        <li><a href="#" data-nav-section="married"><span>Getting Married</span></a></li>
                        {/* <li><a href="#" data-nav-section="groom-bride"><span>Groom &amp; Bride</span></a></li> */}
                        <li><a href="#" data-nav-section="when-where"><span>Save The Date</span></a></li>
                        <li><a href="#" data-nav-section="norek"><span>Give A Gift</span></a></li>
                        <li><a href="#" data-nav-section="rsvp"><span>RSVP</span></a></li>
                        <li><a href="#" data-nav-section="gallery"><span>Gallery</span></a></li>
                    </ul>
                    </div>
                </nav>
            </div>
            </header>

            {/* <!-- Mobile -->
            <!-- Bottom Navbar --> */}
            <nav className="navbar navbar-dark bg-dark navbar-expand d-md-none d-lg-none d-xl-none fixed-bottom border-top mb-0 pl-0 pr-0"
            style={{minHeight: "55px"}}>
                <ul className="navbar-nav nav-justified w-100 m-0">
                    <li className="nav-item" id="defaultOpen">
                        <a onClick={(e) => handleClick(e, 'Home')} className="nav-link mb-xs-0">
                            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-house" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                            </svg>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a onClick={(e) => handleClick(e, 'Married')} className="nav-link mb-xs-0">
                            <span>Getting</span>
                        </a>
                    </li>
                    {/* <li className="nav-item">
                        <a onClick={(e) => handleClick(e, 'Groombride')} className="nav-link mb-xs-0">
                            <span>Groom</span>
                        </a>
                    </li> */}
                    <li className="nav-item text-truncate ">
                        <a onClick={(e) => handleClick(e, 'Whenwhere')} className="nav-link mb-xs-0 text-truncate">
                            <span>Save date</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a onClick={(e) => handleClick(e, 'Norek')} className="nav-link mb-xs-0">
                            <span>Give</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a onClick={(e) => handleClick(e, 'Rsvp')} className="nav-link mb-xs-0">
                            <span>RSVP</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a onClick={(e) => handleClick(e, 'Gallery')} className="nav-link mb-xs-0">
                            <span>Gallery</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;