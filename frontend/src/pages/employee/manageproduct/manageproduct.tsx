import React, { CSSProperties, useEffect, useState } from "react";
import { UserOutlined, DashboardOutlined,BorderOuterOutlined , CopyOutlined,PlusOutlined,InboxOutlined,ShoppingCartOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import { Breadcrumb, Button, Card, Col, Input, Layout, List, Menu, Modal, Row, Select, Space, message, theme } from "antd";
import logo from "../../../assets/Tmocho.jpg";
import { JSX } from "react/jsx-runtime";
import  Navbar  from '../../../component/navbar'
import  Headerbarlogo  from '../../../component/headbarlogo'
import { CreateProduct, DeleteProductByID, GetProduct } from "../../../services/http_product";
import { ProductInterface } from "../../../interfaces/IProduct";
import  iconic_box2 from '../../../assets/update_icon 1.svg'

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}


const items: MenuItem[] = [
];

function Manageproduct(){

  
  const page = localStorage.getItem("page");
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const setCurrentPage = (val: string) => {
    localStorage.setItem("page", val);
  };

  const [messageApi, contextHolder] = message.useMessage();
  const [product, setProduct] = useState<ProductInterface[]>([])
  const getProducts = async () => {
    let res = await GetProduct();
    if (res) {
      setProduct(res);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const navigate = useNavigate();

  const data = Array.isArray(product) ? product.map((product) => ({
    ProductType: 	product.ProductType,
      Name: 			product.Name,
      Photo: 			product.Photo,
      Price:      product.Cost,
      ID:         product.ID,
      Color:       product.Color,
      Quantity:      product.Quantity,
      Details:      product.Details,
      Sentfrom :      product.Sentfrom,
  })) : [];

    // Model
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState<String>();
  const [deleteId, setDeleteId] = useState<Number>();
  const handleOk = async () => {
    setConfirmLoading(true);
    let res = await DeleteProductByID(deleteId);
    if (res) {
      setOpen(false);
      messageApi.open({
        type: "success",
        content: "ลบข้อมูลสำเร็จ",
      });
      getProducts();
    } else {
      setOpen(false);
      messageApi.open({
        type: "error",
        content: "เกิดข้อผิดพลาด !",
      });
    }
    setConfirmLoading(false);
  };

  const showModal = (val: ProductInterface) => {
    setModalText(
      `คุณต้องการลบข้อมูลผู้ใช้ "${val.Name} จำนวนทั้งหมด ${val.Quantity}" หรือไม่ ?`
    );
    setDeleteId(val.ID);
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };


  const Card_st2: CSSProperties = {
        
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0px 4px 4px #00000040',
    height: '274px',
    width: '1098px',
    marginTop: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    transition: 'box-shadow 5s ease-in-out', 
};
  
  return (
      <>
      <Headerbarlogo/>
      <Navbar/>
      <Layout style={{ minHeight: "120vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={{ color: '#003D06', backgroundColor: '#D9E2D9'  }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop:'100px',
              marginBottom: 20,
            }}
          >
          </div>
          <Menu
            theme="light"
            defaultSelectedKeys={[page ? page : "dashboard"]}
            mode="inline"
            style={{ color: '#003D06', backgroundColor: '#D9E2D9'  }}
          >
            <Menu.Item key="dashboard" onClick={() => setCurrentPage("dashboard")}>
              
                <UserOutlined />
                <span >Employee</span>
              
            </Menu.Item>
            <Menu.Item key="Productmanagement" onClick={() => setCurrentPage("Productmanagement")} style={{ marginTop: '30px' }}>
              <Link to="/product_management">
                <BorderOuterOutlined />
                <span>Product Management</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="Ordermanagement" onClick={() => setCurrentPage("Ordermanagement")} >
              <Link to="/Order_management">
                <CopyOutlined />
                <span >Order Management</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="Addproduct" onClick={() => setCurrentPage("Addproduct")} >
              <Link to="/productadd">
                <PlusOutlined />
                <span >ADD PRODUCT</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Row>
        </Row>
        <Row>
      {Array.isArray(product) ? (
          <List
            grid={{ gutter: 10, column: 1 }}
            dataSource={data}
            renderItem={(item) => (
              <List.Item>  
                <Card style={Card_st2}>
                  <Row>
                  <img
                          src={iconic_box2}
                          style={{
                              top: '5%',
                              left: '2%',
                              objectFit: 'cover',
                              position: 'fixed',

                          }}
                      />
                  <Col className="fonttextBoxtow">Torhinozorus</Col>
                  </Row>
                  <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={4}>
                        
                        <img
                        src={item.Photo}
                        style={{
                            width: '112.75px',
                            height: '143.12px',
                            borderRadius: '10px',
                            objectFit: 'cover',
                            position: 'fixed',
                            marginTop:  '40px',
                        }}
                        />
                        
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={4}>
                        <Row className="fonttextBoxtowTexth1">{item.Name}</Row>
                        <Row className="fonttextBoxtowTexth2">Color {item.Color}</Row>
                        <Row className="fonttextBoxtowTexth3">Quantity {item.Quantity}</Row>
                        <Row className="fonttextBoxtowTexth3">- {item.Details}</Row>
                        
                    </Col>

                    <Col xs={24} sm={24} md={24} lg={24} xl={16}>
                        <Card style={{ border: 'none' }}>
                            <Row className="fonttextBoxtowTexthstatus2">{item.Price} ฿</Row>
                            <Row className="fonttextBoxtowTexthstatus3">Send from {item.Sentfrom}</Row>
                            <Row>
                                <Card
                                style={{
                                    width: '0px', // ปรับความยาวตามที่ต้องการ
                                    marginLeft: '72%' ,
                                    height: '0px', 
                                    marginTop: '5%',
                                    fontSize: '16px',
                                    border: '0',
                                }}>                                 
                                </Card>
                            </Row>

                            
                                <Row >
                                  <Row justify="end">
                                    <Col style={{ marginTop: "40px" , marginLeft: "10%"}}>
                                            
                                            <Space>
                                                <Button onClick={() =>  navigate(`/product/${item.ID}`)} type="primary" htmlType="button" style={{ marginLeft: "480px", backgroundColor: '#003D06' }}
                                                // <Button  onClick={() =>  navigate(`/customer/edit/${record.ID}`)} shape="circle" icon={<EditOutlined />} size={"large"} />
                                                icon={<ShoppingCartOutlined />}>
                                                แก้ไข
                                                </Button>
                                                <Button
                                                type="primary"
                                                onClick={() => showModal(item)}
                                                style={{ marginRight: "220px", backgroundColor: '#FF8787', justifyContent: 'flex-end' }}
                                                
                                                >
                                                ลบ
                                                </Button>
                                            </Space>
                                            
                                    </Col>
                                  </Row>
                                </Row>
                            
                        </Card>
                    </Col>
                </Row>

                </Card> 
                <Modal
                title="ลบข้อมูล ?"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
              >
                <p>{modalText}</p>
              </Modal>
              </List.Item>
              
            )}
          />
        ) : (
          <p>No products available.</p>
        )}
        </Row>
      </Layout>

      </>
  );
};

export default  Manageproduct;


