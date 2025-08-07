import React from "react";
import { Form, Row, Col } from "react-bootstrap";

interface Props {
  animation: string;
  duration: string;
  delay: string;
  iteration: string;
  easing: string;
  direction: string;
  onChange: (field: string, value: string) => void;
}

const AnimationForm: React.FC<Props> = ({
  animation,
  duration,
  delay,
  iteration,
  easing,
  direction,
  onChange,
}) => {
  return (
    <Form className="mb-4">
      <Row>
        <Col md={4}>
          <Form.Group>
            <Form.Label className="text-white mt-3">Animation Type</Form.Label>
            <Form.Select
              value={animation}
              onChange={(e) => onChange("animation", e.target.value)}
              className="bg-gray-700 border-gray-600 focus:ring-purple-500"
            >
              {[
                "bounce",
                "fade",
                "slide",
                "zoom",
                "rotate",
                "flip",
                "wobble",
                "shake",
                "pulse",
                "spin3d",
                "flip3d",
              ].map((a) => (
                <option key={a} value={a} className="bg-gray-700">
                  {a.charAt(0).toUpperCase() + a.slice(1)}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Label className="text-white mt-3">Duration (s)</Form.Label>
            <Form.Control
              type="text"
              value={duration}
              onChange={(e) => onChange("duration", e.target.value)}
              placeholder="e.g. 2s"
              className="bg-gray-700 border-gray-600 focus:ring-purple-500"
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Label className="text-white mt-3">Delay (s)</Form.Label>
            <Form.Control
              type="text"
              value={delay}
              onChange={(e) => onChange("delay", e.target.value)}
              placeholder="e.g. 0.5s"
              className="bg-gray-700 border-gray-600 focus:ring-purple-500"
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Label className="text-white mt-3">Iterations</Form.Label>
            <Form.Control
              type="text"
              value={iteration}
              onChange={(e) => onChange("iteration", e.target.value)}
              placeholder="e.g. infinite or 1"
              className="bg-gray-700 border-gray-600 focus:ring-purple-500"
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Label className="text-white mt-3">Easing</Form.Label>
            <Form.Select
              value={easing}
              onChange={(e) => onChange("easing", e.target.value)}
              className="bg-gray-700 border-gray-600 focus:ring-purple-500"
            >
              {["ease", "linear", "ease-in", "ease-out", "ease-in-out"].map(
                (option) => (
                  <option key={option} value={option} className="bg-gray-700">
                    {option}
                  </option>
                )
              )}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Label className="text-white mt-3">Direction</Form.Label>
            <Form.Select
              value={direction}
              onChange={(e) => onChange("direction", e.target.value)}
              className="bg-gray-700 border-gray-600 focus:ring-purple-500"
            >
              {["normal", "reverse", "alternate", "alternate-reverse"].map(
                (dir) => (
                  <option key={dir} value={dir} className="bg-gray-700">
                    {dir}
                  </option>
                )
              )}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default AnimationForm;
