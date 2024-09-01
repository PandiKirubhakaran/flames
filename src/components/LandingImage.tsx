import FlamesImg from "../assets/flamesImg.png";
import classes from "../pages/Flames.module.css";

const LandingImage = () => {
  return (
    <img
      src={FlamesImg}
      alt="Flames Image"
      className={classes.image} 
    />
  );
};

export default LandingImage;
