import "./ImageCaption.css";

export const ImageCaption = ({ caption, src, isVideo, alt, style }) => {
    return (
        <div className="imageCaption">
           {isVideo ? (<video autoPlay muted loop style={style}>
               <source
                   src={src}
                   type="video/mp4"
               />
               Your browser does not support HTML video.
           </video>):
            <img src={src} alt={alt} />}
            <h3>{caption}</h3>
        </div>
    );
};
