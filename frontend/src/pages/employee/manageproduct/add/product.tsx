import React, { useState, useEffect } from "react";
import {
  Space,
  Button,
  Col,
  Row,
  Divider,
  Form,
  Input,
  Card,
  message,
  Upload,
  Select,
  Modal,
  InputNumber,
  
  
} from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import  Navbar  from '../../../../component/navbar'
import  Headerbarlogo  from '../../../../component/headbarlogo'
import { InboxOutlined } from '@ant-design/icons';
import TextArea from "antd/es/input/TextArea";
//import 'antd/dist/antd.css';
import "./style.css";
import { ProductTypeInterface } from "../../../../interfaces/ProductType";
import { ProductInterface } from "../../../../interfaces/IProduct";
import { CreateProduct, GetProductType } from "../../../../services/http_product";
import { ImageUpload } from "../../../../interfaces/IUpload";

const { Option } = Select;

const ProductAdd = () => {

  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [producttype, setProductType] = useState<ProductTypeInterface[]>([])
  const [profile, setProfile] = useState<ImageUpload>()
  const [photo, setPhoto] = useState<ImageUpload>()

  const [form] = Form.useForm();
  const onFinish = async (values: ProductInterface) => {
    console.log('Form values:', values);
    values.Profile = profile?.thumbUrl;
    values.Photo = photo?.thumbUrl;
  console.log(values.Photo); // แสดงค่าทั้งหมดที่ได้จากฟอร์มใน console log
  let res = await CreateProduct(values);
  if (res.status) {
    messageApi.open({
      type: "success",
      content: "บันทึกข้อมูลสำเร็จ",
    });
    setTimeout(function () {
      navigate("/manageproduct");
    }, 2000);
  } else {
    messageApi.open({
      type: "error",
      content: "บันทึกข้อมูลไม่สำเร็จ",
    });
  }
};

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  setProfile(e?.fileList[0])
  return e?.fileList;
};

const normFile2 = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  setPhoto(e?.fileList[0])
  return e?.fileList;
};
      
  const getProductType = async () => {
    let res = await GetProductType();
    if (res) {
      setProductType(res);
    }
  };

  useEffect(() => {
    getProductType();
  }, []);


  const onFinishFailed = (errorInfo: any) => {
     console.log('Errors:', errorInfo);
  };
 
  


  
  return (
    <div>
    {contextHolder}
    <Headerbarlogo/>
    <Navbar/>

     <Form
       form={form}
       onFinish={onFinish}
       onFinishFailed={onFinishFailed}
       
     >
      <Card style={{
                      margin: '20px'
                  }}>
                    <h1 >
                        ADD PRODUCT 
                    </h1>

      <Row gutter={16}>
        
        
        <Col xs={24} sm={24} md={12} lg={24} xl={8} >
            <li style={{ marginBottom: '16px'}}>
            UploadPhoto
            </li>
            {/* <Form.Item
                label="รูป"
                name="Profile"
                valuePropName="fileList"
                getValueFromEvent={normFile}
              
              >
                <Upload maxCount={1} multiple={false} listType="picture-card">
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>อัพโหลด</div>
                  </div>
                </Upload>
              </Form.Item> */}
            <Form.Item
            label=""
              name="Photo"
              valuePropName="fileList"
              getValueFromEvent={normFile2}
            >
              <Upload maxCount={1} multiple={false} listType="picture-card">
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>อัพโหลด</div>
                </div>
              </Upload>
            </Form.Item>
        </Col>
        
        
        <Col xs={24} sm={24} md={24} lg={24} xl={16}>
       
        
          <Form.Item
            
            name="Name"
            rules={[{ required: true, message: 'Please input the product name!' }]}
          >
            <Input placeholder="Product name"  style={{ backgroundColor: '#D9E2D9', fontSize: '20px', height: '60px' }} />
          </Form.Item>
      
          

          <Form.Item
            name="Cost"
            rules={[{ required: true, message: 'Please input the product cost!' }]}
          >
            <InputNumber placeholder="Product Cost" style={{ backgroundColor: '#D9E2D9', fontSize: '20px', height: '60px' , width:'50%'}} />
          </Form.Item>

          <Form.Item
            name="Quantity"
            rules={[{ required: true, message: 'Please input the product quantity!' }]}
          >
            <InputNumber placeholder="Product quantity" style={{ backgroundColor: '#D9E2D9', fontSize: '20px', height: '60px' , width:'50%'}} />
          </Form.Item>
          
          <Form.Item
            name="Color"
            rules={[{ required: true, message: 'Please input the product color!' }]}
          >
            <Input placeholder="Product color" style={{ backgroundColor: '#D9E2D9', fontSize: '20px', height: '60px' , width:'100%'}} />
          </Form.Item>
    
          <Form.Item
            name="Brand"
            rules={[{ required: true, message: 'Please input the product brand!' }]}
          >
            <Input  placeholder="Product brand"  style={{ backgroundColor: '#D9E2D9', fontSize: '20px', height: '60px' }}/>
          </Form.Item>
    
          <Form.Item
            name="ProductTypeID"
            rules={[{ required: true, message: 'Please select the product type!' }]}
          >
            <Select
              allowClear
              placeholder="ProductTypeID"
              style={{ color: '#D9E2D9', fontSize: '60px', height: '60px' }}
              dropdownStyle={{ backgroundColor: '#D9E2D9' }}
            >
              {producttype.map((item) => (
                    <Option  value={item.ID} key={item.ID}>{item.Name}</Option>
              ))}
            </Select>
          </Form.Item>
          
          <Form.Item
            //  label="Sent from"
            name="Sentfrom"
            rules={[{ required: true, message: 'Please input the sending location!' }]}
          >
            <Input placeholder="Sent from"  style={{ backgroundColor: '#D9E2D9', fontSize: '20px', height: '60px' }}/>
          </Form.Item>

          
       
       </Col>
       </Row>


       <Row >
       <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <Divider/>
        <Form.Item 
          // label="TextArea"
          name="Details"
          rules={[{ required: true, message: 'Please input the sending location!' }]}
          >
            
            
            <TextArea rows={10} placeholder="detail" style={{ backgroundColor: '#D9E2D9' , width: '100%',fontSize: '20px'}} />
          </Form.Item>

        </Col>    
        </Row>
        <Row justify="end">
          <Col style={{ marginTop: "40px" }}>
                <Form.Item>
                  <Space>
                    <Button
                      type="primary"
                      htmlType="button"
                      style={{ marginRight: "10px", backgroundColor: '#5A8242' }}
                      onClick={() => navigate('/Productmanagement')}
                    >
                      ยกเลิก
                    </Button>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ marginRight: "10px", backgroundColor: '#003D06', justifyContent: 'flex-end' }}
                      icon={<PlusOutlined />}
                    >
                      ยืนยัน
                    </Button>
                  </Space>
                </Form.Item>
          </Col>
        </Row>
      
 
      </Card>
      </Form>
      
      </div>
  );
 };

 export default ProductAdd;
