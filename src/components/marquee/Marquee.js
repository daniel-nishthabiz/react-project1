import { useCallback, useEffect, useRef, useState, forwardRef } from "react";
import styles from "./Marquee.module.css";

const Marquee = forwardRef(({ text, speed = 100 }, marqueeRef) => {
    const textRef = useRef(null);
    const [isMounted, setIsMounted] = useState(false);
    const [textStyle, setTextStyle] = useState({});

    const timeout = useRef(null);

    const resetMarquee = useCallback(async () => {
        clearTimeout(timeout.current);
        timeout.current = null;
        setTextStyle({
            transition: `transform 0s linear`,
            transform: `translateX(${window.innerWidth}px)`,
        });
        // Small delay
        await new Promise((res) => setTimeout(res, 1000));
        const time = textRef.current.clientWidth / speed;
        setTextStyle({
            transition: `transform ${time}s linear`,
            transform: `translateX(-${textRef.current.clientWidth}px)`,
        });
        timeout.current = setTimeout(() => resetMarquee(), time * 1000);
    }, [speed]);

    useEffect(() => {
        setIsMounted(true);
        return () => {
            setIsMounted(false);
        };
    }, []);

    useEffect(() => {
        if (isMounted && textRef?.current?.clientWidth) {
            const len = textRef.current.clientWidth;
            const tim = len / speed;
            timeout.current = setTimeout(() => resetMarquee(), tim * 1000);
            setTextStyle({
                transform: isMounted ? `translateX(-${len}px)` : "",
                transition: `transform ${tim}s linear`,
            });
        }
    }, [isMounted, textRef?.current?.clientWidth, speed, resetMarquee]);

    return (
        <section ref={marqueeRef} className={styles.marquee}>
            <p ref={textRef} className={styles.marqueeText} style={textStyle}>
                {text}
            </p>
        </section>
    );
});

export default Marquee;
