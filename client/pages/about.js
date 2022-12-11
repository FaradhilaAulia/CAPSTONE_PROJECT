import Image from 'next/image';
import Head from 'next/head';



const About = () => {
  return (
    <>
    <Head>
    <meta name="dicoding:email" content="dhilatanjung@gmail.com" />
        <title>About</title>
      </Head>
      <section id="about">
        <section className="aboutus">
          <div className="content">
            <Image className="img" src="/profile/SOLUSIPINTAR.png" width={600} height={600} />
            <div className="text">
              <h1>About Us</h1>
              <h5>Welcoming Solusi Pintar on US!!</h5>
              <p>Solusi Pintar adalah sebuah website yang memberikan kesempatan untuk para penyandang disabilitas
                dapat merasakan betapa mudah dan hebatnya menggunakan pembelajaran melalui platform website.
                Dimana website ini akan memuat berbagai pembelajaran yang mampu memberikan performa baik kepada seluruh
                teman-teman yang membutuhkan. Selamat mencoba website kami, gunakan sensasi barunya!. </p>
            </div>
          </div>
        </section>

        <div className="team">
          <h3>Our team</h3>
          <p>Inilah kami, dibalik website yang sedang kalian jalankan ada ide dan pembuatan yang dikerjakan oleh kami.</p>

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
