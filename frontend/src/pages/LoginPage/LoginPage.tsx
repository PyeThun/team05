import { Layout } from "antd";
import Header1 from "../../component/PakComponent/Header/Header1";
import Footer from "../../component/PakComponent/Footer/Footer";
import './Style.css'
const { Header, Sider, Content } = Layout;

export default function LoginPage(){
    return(
        <>
        <Layout>
            <Header1/>
            <Content
          style={{
            padding: 24,
            margin: 0,
            background: '#F8FFF8',
          }}
        >
            <h2 style={{color:'#003D06',alignItems: 'center',textAlign: 'center',fontFamily: "Inter",}}>
                Welcome! Please Login to see our Product!
            </h2>

        </Content>
        <Footer/>
        </Layout>
        </>
    )
}