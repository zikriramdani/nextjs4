const Musik = () => {
    return (
        <div className="musik">
            <audio id="myAudio" loop autoPlay>
                <source src="https://jadinikah.site/wp-content/uploads/2021/08/Pamungkas-To-The-Bone-Reff.mp3" type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
            <button className="btn-musik paused"></button>
        </div>
    )
}

export default Musik;