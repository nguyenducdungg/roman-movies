import React, { useRef } from 'react';

import { useParams, Link, useHistory } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import enUS from 'antd/lib/locale/en_US';
import axios from "../axios";
import { notification } from 'antd';
import { Container, Modal, Button, Form, Row, Col, Alert, Nav } from "react-bootstrap";
import { CheckCircleOutlined, StopOutlined, CloseCircleOutlined } from '@ant-design/icons';
import ProTable, { viVNIntl } from '@ant-design/pro-table';

export default () => {
    const actionRef = useRef();
    const user = JSON.parse(localStorage.getItem("user"));
    const openNotificationSuccessApprove = (message, description, color) => {
        notification.open({
            message: message,
            description: description,
            icon: <CheckCircleOutlined style={{ color: color }} />,
        });
    };
    const openNotificationFail = (message, description, color) => {
        notification.open({
            message: message,
            description: description,

            icon: <StopOutlined style={{ color: color }} />,
        });
    };
    const columns = [
        {
            title: 'role',
            dataIndex: 'role',
        },
        {
            title: '_id',
            dataIndex: '_id',
        },
        {
            title: 'username',
            dataIndex: 'username',

        },
        {
            title: 'email',
            dataIndex: 'email',

        },

        {
            width: 150,
            render: (_, record) => {
                return (

                    <div>
                        {record.role !== "admin" && <Button variant="danger" onClick={async () => {
                            let response = await fetch(`https://apiwebmovie.herokuapp.com/deleteuser/${record._id}`, {
                                method: "PUT",
                                headers: {

                                    "token": `${user.token}`
                                }
                            })
                            let result = await response.status;

                            if (result == 200) {
                                openNotificationSuccessApprove("Đã xóa người dùng", "", '#389e0d')
                                setTimeout(() => {
                                    actionRef.current.reload();
                                }, 1000)
                            } else {
                                openNotificationFail("Xóa không thành công", "", '#f81d22')
                            }

                        }}>
                            Xóa
                        </Button>}

                    </div>
                )
            }
        }

    ];


    return (
        <div style={{ height: 'fit-content' }}>
            <Container className=" pt-3  d-flex justify-content-between" >
                <Nav className="backToAdmin">
                    <Link as={Link} to="/"><i className="fas fa-hand-point-left"> Back to Admin</i></Link>
                </Nav>
            </Container>
            <h1 className="text-center pt-2" style={{ fontSize: 50 }}>Danh sách Người dùng</h1>
            <ConfigProvider locale={enUS}>
                <ProTable
                    columns={columns}
                    actionRef={actionRef}
                    request={async (params, sorter, filter) => {

                        const response = await axios.get("/getuser", {

                            headers: {
                                "token": `${user.token}`
                            }
                        });
                        console.log(response);
                        return response;
                    }}
                    rowKey="_id"
                    pagination={{

                        pageSize: 10
                    }}
                    search={false}
                    editable={false}
                />
            </ConfigProvider>

        </div>
    );
};