import React from "react";
import "./PreviewBox.css";

interface Props {
  animation: string;
  duration: string;
  delay: string;
  iteration: string;
  easing: string;
  direction: string;
}

const PreviewBox: React.FC<Props> = ({
  animation,
  duration,
  delay,
  iteration,
  easing,
  direction,
}) => {
  const style: React.CSSProperties = {
    animationName: animation,
    animationDuration: duration,
    animationDelay: delay,
    animationIterationCount: iteration,
    animationTimingFunction: easing,
    animationDirection: direction,
  };

  return (
    <div className="preview-container">
      <div className="preview-box" style={style}>
        Animate Me!
      </div>
    </div>
  );
};

export default PreviewBox;
