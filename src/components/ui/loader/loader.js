import React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "./loader.module.css";
function CircularProgressWithLabel(props) {
  return (
    <div className={styles.mainDiv}>
      <CircularProgress
        variant="static"
        {...props}
        color="inherit"
        size="5rem"
      />
      <div className={styles.innerDiv}>
        <h6>{`${Math.round(props.value)}%`}</h6>
      </div>
    </div>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function CircularStatic() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 1 : prevProgress + 5
      );
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}
