import { TrophyFilled, SafetyCertificateFilled, GiftFilled } from '@ant-design/icons';
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


        </>
    );
};

export default Index;