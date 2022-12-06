const About = () => {
    return (
        <>
            <h1 className="container-fluid p-5 bg-primary text-white text-center">SolusiPintar</h1>
            <section id="about">
                <div className="team">
                    <h3>Our team</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, laborum!</p>

                    <div className="tim">
                        <div>
                            <img src="./public/fachriza.jpeg" />
                            <h6>Fachriza Adrian</h6>
                            <span> Universitas Sumatera Utara </span>
                        </div>
                        <div>
                            <img src="./public/dhila.jpeg" />
                            <h6>Faradhila Aulia </h6>
                            <span> Universitas Sumatera Utara </span>
                        </div>
                        <div>
                            <img src="./public/Atha.jpeg" />
                            <h6>Atha Maulana</h6>
                            <span> Universitas Sumatera Utara </span>
                        </div>
                        <div>
                            <img src="./public/najwa.jpeg" />
                            <h6>Najwa Syiba</h6>
                            <span> Unversitas Andalas </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;