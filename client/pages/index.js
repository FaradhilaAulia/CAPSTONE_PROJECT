import { TrophyFilled, SafetyCertificateFilled, GiftFilled, StarFilled } from '@ant-design/icons';
import Image from 'next/image';
const Index = () => {
    return (
        <>
            <header>
                <div className="pageatas">
                    <div className="logo">
                        <Image className="img" src="/profile/SOLUSIPINTAR.png" width={400} height={300} />
                    </div>
                    <h1>SOLUSIPINTAR</h1>
                    <h3>Solusi Pintar menyediakan kemudahan untuk teman-teman <br />
                        para penyandang disabilitas untuk bisa menikmati <br />
                        pendidikan tanpa kekurangan apapun.</h3>
                </div>
                <div className="gambarsamping">
                    <Image className="img" src="/profile/samping.png" width={600} height={600} />
                </div>
            </header>

            <section id="features">
                <h1>Lorem Ipsum</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="feature-base">
                    <div className="feature-box">
                        <i><SafetyCertificateFilled /></i>
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="feature-box">
                        <i><TrophyFilled /></i>
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="feature-box">
                        <i><GiftFilled /></i>
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </section>

            <section id="course">
                <h1>Lorem Ipsum</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="course-box">
                    <div className="courses">
                        <Image className="img" src="/courses/c1.jpg" width={400} height={400} />
                        <div className="details">
                            <span>Lorem Ipsum is simply dummy</span>
                            <h6>Lorem Ipsum</h6>
                            <div className="star">
                                <i><StarFilled /></i>
                                <i><StarFilled /></i>
                                <i><StarFilled /></i>
                                <i><StarFilled /></i>
                                <span>(123)</span>
                            </div>
                        </div>
                        <div className="cost">FREE</div>
                    </div>

                    <div className="courses">
                        <Image className="img" src="/courses/c2.jpg" width={400} height={400} />
                        <div className="details">
                            <span>Lorem Ipsum is simply dummy</span>
                            <h6>Lorem Ipsum</h6>
                            <div className="star">
                                <i><StarFilled /></i>
                                <i><StarFilled /></i>
                                <i><StarFilled /></i>
                                <i><StarFilled /></i>
                                <span>(123)</span>
                            </div>
                        </div>
                        <div className="cost">FREE</div>
                    </div>

                    <div className="courses">
                        <Image className="img" src="/courses/c3.jpg" width={400} height={400} />
                        <div className="details">
                            <span>Lorem Ipsum is simply dummy</span>
                            <h6>Lorem Ipsum</h6>
                            <div className="star">
                                <i><StarFilled /></i>
                                <i><StarFilled /></i>
                                <i><StarFilled /></i>
                                <i><StarFilled /></i>
                                <span>(123)</span>
                            </div>
                        </div>
                        <div className="cost">FREE</div>
                    </div>

                    <div className="courses">
                        <Image className="img" src="/courses/c4.jpg" width={400} height={400} />
                        <div className="details">
                            <span>Lorem Ipsum is simply dummy</span>
                            <h6>Lorem Ipsum</h6>
                            <div className="star">
                                <i><StarFilled /></i>
                                <i><StarFilled /></i>
                                <i><StarFilled /></i>
                                <i><StarFilled /></i>
                                <span>(123)</span>
                            </div>
                        </div>
                        <div className="cost">FREE</div>
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

            <section className="contact-us">
                <h5>Contact us</h5>
                <div className="link-item">
                    <a href="" target="_blank">
                        <span>Join our Discord community</span>
                    </a>
                </div>
                <div className="link-item">
                    <a href="" target="_blank">
                        <span>Send us on Gmail</span>
                    </a>
                </div>
            </section>


        </>
    );
};


export default Index;