import PropTypes from "prop-types";
import { options } from "./constants";
import "../main.css";
import { Loader } from "lucide-react";
export const Card = ({
  image,
  title,
  backgroundColor,
  padding,
  size = "sm",
  glassEffect,
  headingIcon,
  onPrevClick,
  onNextClick,
}) => {
  const styles = {
    image: {
      width: size === "sm" ? "300px" : size === "md" ? "400px" : "500px",
      height: "auto",
      borderRadius: 10,
      border: "1px solid rgba(255, 255, 255, 0.5)",
      backdropFilter: "blur(10px)",
    },
    card: {
      background: glassEffect ? "rgba(255, 255, 255, 0.1)" : backgroundColor,
      borderRadius: 10 ,
      padding: padding,
      width: size === "sm" ? "300px" : size === "md" ? "400px" : "500px",
      backdropFilter: glassEffect ? "blur(10px)" : "none",
      boxShadow: glassEffect ? "0 8px 32px 0 rgba(31, 38, 135, 0.37)" : "none",
      border: glassEffect ? "1px solid rgba(255, 255, 255, 0.18)" : "none",
    },
    title: {
      fontSize: "13px",
      fontWeight: "200",
      fontFamily: "Inter",
    },
    subtitle: {
      fontSize: "16px",
      fontWeight: "200",
      fontFamily: "Inter",
    },
    body: {
      fontSize: "16px",
      fontWeight: "200",
      fontFamily: "Inter",
    },
    bottom: {
      fontSize: "16px",
      fontWeight: "200",
      fontFamily: "Inter",
    },
  };

  const buttonStyles = {
    background: 'transparent',
    border: '1px solid rgba(255, 255, 255, 0.5)',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '200',
    fontFamily: 'Inter',
    cursor: 'pointer',
  };

  return (
    <div style={styles.card}>
      {image && <img src={image} alt="Card" style={styles.image} />}
      <div style={{padding: "10px", display: "flex", flexDirection: "row", alignItems: "center", gap: "10px"}}>
        {headingIcon ?? <Loader size={13} />}
        <h1 style={styles.title}>{title}</h1>
        <div style={{marginLeft: 'auto'}}>
          <button style={buttonStyles} onClick={onPrevClick}>←</button>
          <button style={{...buttonStyles, marginLeft: '5px'}} onClick={onNextClick}>→</button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  headingIcon: PropTypes.string,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
  glassEffect: PropTypes.bool,
  onPrevClick: PropTypes.func,
  onNextClick: PropTypes.func,
};

export default Card;
