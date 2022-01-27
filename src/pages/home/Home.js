import styles from "./Home.module.css";
import InfoCard from "../../components/infoCard/InfoCard";
import Image from "react-bootstrap/Image";

import infoImage1 from "../../images/future-software-development.png";
import infoImage2 from "../../images/software-development.jpg";
import infoImage3 from "../../images/Top-6-Software-Development-Methodologies.jpg";
import banner from "../../images/banner.jpg";
import Wrapper from "../../components/wrapper/Wrapper";

function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.banner}>
                <div className={styles.bannerWrapper}>
                    <Image className={styles.bannerImg} s src={banner} />
                </div>
            </div>
            <Wrapper>
                <section className={`${styles.intro} `}>
                    <div className={styles.title}>Welcome</div>
                    <div className={styles.content}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi optio nulla soluta sequi consectetur deleniti quidem,
                        earum blanditiis dignissimos dolore officiis fuga ipsum beatae, excepturi voluptate voluptatum aspernatur dicta
                        omnis?
                    </div>
                </section>
                <section className={styles.infoCards}>
                    <InfoCard
                        title="Lorem ipsum"
                        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam alias nihil hic doloremque quam perferendis
                            consequatur cum aspernatur, dolorem incidunt fugiat voluptatem cumque modi ex velit dolorum, consequuntur
                            delectus impedit?"
                        button="Click for more info"
                        img={infoImage1}
                        buttonHref="/not-added"
                    />
                    <InfoCard
                        title="Lorem ipsum"
                        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam alias nihil hic doloremque quam perferendis
                            consequatur cum aspernatur, dolorem incidunt fugiat voluptatem cumque modi ex velit dolorum, consequuntur
                            delectus impedit?"
                        button="Click for more info"
                        img={infoImage2}
                        buttonHref="/not-added"
                    />
                    <InfoCard
                        title="Lorem ipsum"
                        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam alias nihil hic doloremque quam perferendis
                            consequatur cum aspernatur, dolorem incidunt fugiat voluptatem cumque modi ex velit dolorum, consequuntur
                            delectus impedit?"
                        button="Click for more info"
                        img={infoImage3}
                        buttonHref="/not-added"
                    />
                </section>
            </Wrapper>
        </div>
    );
}

export default Home;
