import { Modal } from "react-bootstrap";
import React from "react";
import { createPortal } from "react-dom";

export default function ProjectModal({
  onClose,
  heading,
  content,
  img,
  webLink,
  srcLink,
  tags,
}) {
  return createPortal(
    <>
      <Modal show={true} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <img className="modal-img" src={img} alt="modal image" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container ml-3">
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
