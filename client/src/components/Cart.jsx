import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

export default function Cart() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <div className="position-relative" onClick={handleShow}>
        <span className="fs-4 cursor">CART</span>
        <span className="position-absolute top-25 start-100 translate-middle badge rounded-pill bg-danger">
          0
        </span>
      </div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        backdrop="static"
      >
        <Offcanvas.Header>
          <Offcanvas.Title>
            <div>
              <MdOutlineArrowBackIosNew
                onClick={handleClose}
                className="cursor"
              />
              <h1>Cart</h1>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body></Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
