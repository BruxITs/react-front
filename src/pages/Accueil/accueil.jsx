import styles from "../../style";
import { CTA, Footer, Stats, Testimonials } from "../../components";

const Acccueil = () => (
    <>
  
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />

        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </div>
    </>
);


export default Acccueil;
