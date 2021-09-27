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
            <div className="modal-heading mb-3">{heading}</div>
            <div className="modal-text mb-3">{content}</div>
            <div className="modal-tags">
              <i className="fas fa-tags"></i> {tags}
            </div>
          </div>
        </Modal.Body>
        {(webLink !== "None" || srcLink !== "None") && (
          <Modal.Footer className="d-block text-left ml-3 pt-3 pb-3">
            {webLink !== "None" && (
              <a
                className="footer-content"
                href={webLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            )}

            <a
              className="footer-content"
              href={srcLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          </Modal.Footer>
        )}
      </Modal>
    </>,
    document.getElementById("modal-container")
  );
}
