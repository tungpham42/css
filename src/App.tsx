import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import AnimationForm from "./components/AnimationForm";
import PreviewBox from "./components/PreviewBox";
import MainBrandLogo from "./components/MainBrandLogo";

function App() {
  const [animation, setAnimation] = useState("bounce");
  const [duration, setDuration] = useState("2s");
  const [delay, setDelay] = useState("0s");
  const [iteration, setIteration] = useState("infinite");
  const [easing, setEasing] = useState("ease");
  const [direction, setDirection] = useState("normal");

  const handleChange = (field: string, value: string) => {
    switch (field) {
      case "animation":
        setAnimation(value);
        break;
      case "duration":
        setDuration(value);
        break;
      case "delay":
        setDelay(value);
        break;
      case "iteration":
        setIteration(value);
        break;
      case "easing":
        setEasing(value);
        break;
      case "direction":
        setDirection(value);
        break;
    }
  };
  const keyframesMap: Record<string, string> = {
    bounce: `
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
    animation-timing-function: ease-in-out;
  }
  50% {
    transform: translateY(-30px);
    animation-timing-function: ease-in-out;
  }
}`,
    fade: `
@keyframes fade {
  from { opacity: 0; }
  to { opacity: 1; }
}`,
    slide: `
@keyframes slide {
  from { transform: translateX(-100px); }
  to { transform: translateX(0); }
}`,
    zoom: `
@keyframes zoom {
  from { transform: scale(0.5); }
  to { transform: scale(1); }
}`,
    rotate: `
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}`,
    flip: `
@keyframes flip {
  0% { transform: perspective(400px) rotateY(0deg); }
  100% { transform: perspective(400px) rotateY(180deg); }
}`,
    wobble: `
@keyframes wobble {
  0%, 100% { transform: translateX(0%); }
  15% { transform: translateX(-25%) rotate(-5deg); }
  30% { transform: translateX(20%) rotate(3deg); }
  45% { transform: translateX(-15%) rotate(-3deg); }
  60% { transform: translateX(10%) rotate(2deg); }
  75% { transform: translateX(-5%) rotate(-1deg); }
}`,
    shake: `
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
}`,
    pulse: `
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}`,
    spin3d: `
@keyframes spin3d {
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
}`,
    flip3d: `
@keyframes flip3d {
  0% { transform: rotateX(0deg); }
  100% { transform: rotateX(180deg); }
}`,
  };

  const cssCode = `
.preview-box {
  animation-name: ${animation};
  animation-duration: ${duration};
  animation-delay: ${delay};
  animation-iteration-count: ${iteration};
  animation-timing-function: ${easing};
  animation-direction: ${direction};
}
${keyframesMap[animation] || ""}
`.trim();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cssCode);
    alert("CSS code copied!");
  };

  return (
    <Container className="my-4">
      <MainBrandLogo
        logoSrc="/soft-logo.webp"
        mainDomain="soft.io.vn"
        dismissible={false}
        altText="Logo Soft"
      />
      <h2 className="text-center mb-4 text-white">🎨 CSS Animations Maker</h2>
      <AnimationForm
        animation={animation}
        duration={duration}
        delay={delay}
        iteration={iteration}
        easing={easing}
        direction={direction}
        onChange={handleChange}
      />

      <PreviewBox
        animation={animation}
        duration={duration}
        delay={delay}
        iteration={iteration}
        easing={easing}
        direction={direction}
      />

      <div className="mt-4">
        <h5>Generated CSS:</h5>
        <pre className="bg-light p-3 border">{cssCode}</pre>
        <Button variant="primary" onClick={copyToClipboard}>
          <FontAwesomeIcon icon={faCopy} /> Copy CSS
        </Button>
      </div>
    </Container>
  );
}

export default App;
