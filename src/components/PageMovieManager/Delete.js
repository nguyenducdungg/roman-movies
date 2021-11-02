import React, { useState } from "react";
import { Button, Modal, Alert } from "react-bootstrap";

import { Link, useHistory } from "react-router-dom";
import axios from "../axios";
import { Loading } from "../Loading";
import "./index.css";
import {
  RetweetOutlined,
  StopOutlined,
  CloseCircleOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import { notification } from "antd";

function Delete(props) {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    history.push("/");
  }
  const idMovieDelete = props.data._id;

  const [err, setErr] = useState(null);
  const [isSucceeded, setIsSucceeded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const openNotificationDeleteSuccess = (message, description, color) => {
    notification.open({
      message: message,
      description: description,

      icon: <RetweetOutlined style={{ color: color }} />,
    });
  };
  const openNotificationFail = (message, description, color) => {
    notification.open({
      message: message,
      description: description,

      icon: <StopOutlined style={{ color: color }} />,
    });
  };
  const openNotificationWarning = (message, description, color) => {
    notification.open({
      message: message,
      description: description,

      icon: <WarningOutlined style={{ color: color }} />,
    });
  };
  const handleDelete = async () => {
    setLoading(true);
    setIsSucceeded(false);
    setShow(false);
    try {
      await axios.delete("/deletemovie/" + idMovieDelete, {
        headers: {
          accept: "application/json",
          token: `${user.token}`,
        },
      });
      setIsSucceeded(true);
      openNotificationDeleteSuccess(
        "Phim đã được xóa thành công!",
        ``,
        "#389e0d"
      );
      props.actionRef.current.reload();
    } catch (err) {
      openNotificationWarning("Xóa không thành công!", "", "#f81d22");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button className="m-1" variant="danger" onClick={handleShow}>
        Xóa
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Xóa phim</Modal.Title>
        </Modal.Header>
        {loading ? (
          <Loading text="Đang xóa phim..."></Loading>
        ) : (
          <>
            {err && <Alert variant="danger">{err}</Alert>}

            <Modal.Body>
              Bạn có chắc chắn xóa phim "{props.data.moviename}" khỏi danh sách!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Đóng
              </Button>
              <Button variant="primary" onClick={handleDelete}>
                Đồng ý
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </>
  );
}
export default Delete;
