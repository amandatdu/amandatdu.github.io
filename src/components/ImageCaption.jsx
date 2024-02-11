import "./ImageCaption.css";

export const ImageCaption = ({ caption, src, alt }) => {
    return (
        <div className="imageCaption">
            <img src={src} alt={alt} />
            <h3>{caption}</h3>
        </div>
    );
};
