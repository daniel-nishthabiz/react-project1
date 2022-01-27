import Navbar from "../../components/navbar/Navbar";
import styles from "./Layout.module.css";
import Footer from "../../components/footer/Footer";
import Marquee from "../marquee/Marquee";
import { useEffect, useRef, useState } from "react";
import PopupChat from "../popupChat/PopupChat";

const Layout = ({ children }) => {
    const navRef = useRef(null);
    const marqueeRef = useRef(null);
    const [headerHeight, setNavHeight] = useState(0);
    const [marqueeHeight, setMarqueeHeight] = useState(0);

    useEffect(() => {
        if (navRef?.current?.clientHeight) {
            setNavHeight(navRef?.current?.clientHeight);
        }
    }, [navRef?.current?.clientHeight]);

    useEffect(() => {
        if (marqueeRef?.current?.clientHeight) {
            setMarqueeHeight(marqueeRef?.current?.clientHeight);
        }
    }, [marqueeRef?.current?.clientHeight]);

    return (
        <>
            <Navbar ref={navRef} />
            <div
                style={{
                    // Make footer always at the bottom of the page
                    // This adjusts the height based on the nav and marquee height since
                    // Neither have a static height set and could change based on the text
                    // size, this is how i work around that.
                    minHeight: `calc(100vh - var(--footer-height) - ${headerHeight}px - ${marqueeHeight}px`,
                }}
                className={styles.contentWrapper}
            >
                {children}
            </div>
            <PopupChat />
            <Marquee
                ref={marqueeRef}
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, adipisci temporibus rem laboriosam voluptate dolores a reprehenderit quae voluptatum, ea tempore officia ipsam in natus quis autem dignissimos maxime? Laboriosam."
            />
            <Footer />
        </>
    );
};

export default Layout;
