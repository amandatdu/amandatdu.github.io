import { HeartSVG } from "../assets/HeartSVG";
import "./Footer.css";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__title">
                <h3>
                    <i>thanks for taking a look! *̥˚✧</i>
                </h3>
            </div>
            <div className="footer__message color--strawberry">
                Like what you see? well you're in luck – I'd love to chat
                and work together!
            </div>
            <div className="footer__contact color--vanilla-chocolate">
                <div>☆ amandatdu22@gmail.com</div>
                <div>☆ linkedin.com/atdu </div>
            </div>
            <p className="footer__credits">
                Made with ❤ by Amanda Du - HUGE s/o to Selina Li ( ´ ▽ ` ).｡ｏ♡
            </p>
            <HeartSVG
                className="pinkToFade"
                style={{
                    left: "auto",
                    margin: 0,
                    height: "405px",
                }}
            />
        </div>
    );
};
