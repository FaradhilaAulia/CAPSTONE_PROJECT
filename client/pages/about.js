import Image from 'next/image';

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
              <Image className="img" src="/profile/fachriza.jpeg" width={200} height={200} />
              <h6>Fachriza Adrian</h6>
              <span> Universitas Sumatera Utara </span>
            </div>
            <div>
              <Image className="img" src="/profile/dhila.jpeg" width={200} height={200} />
              <h6>Faradhila Aulia </h6>
              <span> Universitas Sumatera Utara </span>
            </div>
            <div>
              <Image className="img" src="/profile/atha.jpeg" width={200} height={200} />
              <h6>Atha Maulana</h6>
              <span> Universitas Sumatera Utara </span>
            </div>
            <div>
              <Image className="img" src="/profile/najwa.jpg" width={200} height={200} />
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
