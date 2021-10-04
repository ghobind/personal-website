import "./Modal.css";
import { Modal } from "react-bootstrap";
import React from "react";
import { createPortal } from "react-dom";
import Carousel from "react-bootstrap/Carousel";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
// import InnerImageZoom from "react-inner-image-zoom";

export default function ProjectModal({
  onClose,
  heading,
  content,
  img,
  carouselImages,
  webLink,
  srcLink,
  wireframeLink,
  tags,
}) {
  return createPortal(
    <>
      <Modal
        show={true}
        onHide={onClose}
        dialogClassName="my-modal"
        centered
        id="modal"
      >
        <Modal.Header closeButton className="modal-header">
          <Modal.Title className="modal-title text-center">
            {carouselImages.length !== 0 && (
              <Carousel
                className="modal-carousel"
                controls={false}
                indicators={true}
                interval={null}
              >
                {carouselImages.map((image, index) => {
                  return (
                    <Carousel.Item key={index}>
                      <img
                        className="modal-img"
                        src={image}
                        alt="modal carousel"
                      />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            )}
            {carouselImages.length === 0 && (
              <img className="modal-img" src={img} alt="main" />
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container pl-3">
            <div className="modal-heading mb-2 mt-3">{heading}</div>
            <div className="modal-tags mb-2">
              <i className="fas fa-tags mb-2"></i> {tags}
            </div>
            <div className="modal-text mb-3">{content}</div>
          </div>
        </Modal.Body>
        {(webLink !== "None" ||
          srcLink !== "None" ||
          wireframeLink !== "None") && (
          <Modal.Footer className="d-block text-left ml-3 pt-3 pb-3">
            {webLink !== "None" && (
              <a
                className="footer-content mr-4"
                href={webLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            )}
            {srcLink !== "None" && (
              <a
                className="footer-content mr-4"
                href={srcLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            )}
            {wireframeLink !== "None" && (
              <a
                className="footer-content mr-4"
                href={wireframeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Wireframe
              </a>
            )}
          </Modal.Footer>
        )}
      </Modal>
    </>,
    document.getElementById("modal-container")
  );
}
