import { TrophyFilled, SafetyCertificateFilled, GiftFilled, StarFilled } from '@ant-design/icons';
import Image from 'next/image';
const Index = () => {
    return (
        <>
            <h1 className="container-fluid p-5 bg-primary text-white text-center">SolusiPintar</h1>
            <section id="features">
                <h1>Lorem Ipsum</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div class="feature-base">
                    <div class="feature-box">
                        <i><SafetyCertificateFilled /></i>
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div class="feature-box">
                        <i><TrophyFilled /></i>
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div class="feature-box">
                        <i><GiftFilled /></i>
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </section>

            <section id="course">
                <h1>Lorem Ipsum</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div class="course-box">
                    <div class="courses">
                        <Image className="img" src="/courses/c1.jpg" width={400} height={400} />
                        <div class="details">
                            <span>Lorem Ipsum is simply dummy</span>
                            <h6>Lorem Ipsum</h6>
                            <div class="star">
                                <i><StarFilled /></i>
                                <i><StarFilled /></i>
                                <i><StarFilled /></i>
                                <i><StarFilled /></i>
                                <span>(123)</span>
                            </div>
                        </div>
                        <div class="cost">FREE</div>
                    </div>

                    <div class="courses">
                        <Image className="img" src="/courses/c2.jpg" width={400} height={400} />
                        <div class="details">
                            <span>Lorem Ipsum is simply dummy</span>
                            <h6>Lorem Ipsum</h6>
                            <div class="star">
                                <i><StarFilled /></i>
                                <i><StarFilled /></i>
                                <i><StarFilled /></i>
                                <i><StarFilled /></i>
                                <span>(123)</span>
                            </div>
                        </div>
                        <div class="cost">FREE</div>
                    </div>

                    <div class="courses">
                        <Image className="img" src="/courses/c3.jpg" width={400} height={400} />
                        <div class="details">
                            <span>Lorem Ipsum is simply dummy</span>
                            <h6>Lorem Ipsum</h6>
                            <div class="star">
                                <i><StarFilled /></i>
                                <i><StarFilled /></i>
                                <i><StarFilled /></i>
                                <i><StarFilled /></i>
                                <span>(123)</span>
                            </div>
                        </div>
                        <div class="cost">FREE</div>
                    </div>

                    <div class="courses">
                        <Image className="img" src="/courses/c4.jpg" width={400} height={400} />
                        <div class="details">
                            <span>Lorem Ipsum is simply dummy</span>
                            <h6>Lorem Ipsum</h6>
                            <div class="star">
                                <i><StarFilled /></i>
                                <i><StarFilled /></i>
                                <i><StarFilled /></i>
                                <i><StarFilled /></i>
                                <span>(123)</span>
                            </div>
                        </div>
                        <div class="cost">FREE</div>
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


        </>
    );
};

export default Index;