import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { getCategories } from "../api/api";

export default function Menu() {
  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getCategories()
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  }, []);

  return (
    <>
      <span className="fs-4 cursor" onClick={handleShow}>
        MENU
      </span>
      <Modal show={show} onHide={handleClose} backdrop="static" fullscreen>
        <Modal.Header className="bgModal">
          <Modal.Title className="w-100">
            <div className="d-flex align-item-center gap-4">
              <Link to="/" onClick={handleClose} className="flex-grow-1">
                <h1 className="text-danger heading">Footshop</h1>
              </Link>
              <span className="fs-4 cursor fw-light">SEARCH</span>
              <span className="fs-4 cursor fw-light" onClick={handleClose}>
                CLOSE
              </span>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bgModal">
            {error&& <p>{error.message}</p>}
          {categories.map((category) => (
            <NavLink
              key={category._id}
              to={`/products/category/${category.name}`}
              className={({ isActive }) => (isActive ? "text-danger" : "")}
              onClick={handleClose}
            >
              <h1 className="display-3 hover-link">{category.name}</h1>
            </NavLink>
          ))}
        </Modal.Body>
      </Modal>
          
    </>
  );
}
