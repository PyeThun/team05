import React, { CSSProperties } from 'react';
import payment from '../../../assets/payment.png'

const footerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  height: '200px',
  backgroundColor: '#f5f5f5',
  marginLeft: 'auto',
  marginRight: 'auto',
  justifyContent: 'space-between',
  color: '000',
  alignItems: 'center',
  padding: '20px', // ปรับ padding เพื่อให้ Responsive
};

const containerStyle: React.CSSProperties = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap', // ใช้ flex-wrap เพื่อให้ responsive
};

const sectionStyle: React.CSSProperties = {
  margin: '0 10px', // ปรับ margin ตามต้องการ
};

const firstSectionStyle: React.CSSProperties = {
  flex: '0 0 100%', // ให้ section นี้เต็มรอบ
  ...sectionStyle,
};

const thirdSectionStyle: React.CSSProperties = {
  flex: '0 0 48%', // ให้ section นี้เล็กลงเมื่อหน้าจอเล็กลง
  ...sectionStyle,
};


const Footer =()=>{
    return(
        <>
            <div style={footerStyle}>
              <div style={containerStyle}>
                <div style={firstSectionStyle}>
                <h2 style={{color:'#003D06'}}>Torhinozorus</h2>
                <p style={{color:'#003D06', textAlign: 'left',marginLeft:'86px',marginTop:'-12px'}}>
                    เลือกซื้อแฟชั่นออนไลน์ต้อง  <br/>
                    Torhinozorus <br/>
                    ของถูก ของดี ต้อง YeeTou</p>

                <svg className='brand-icon'
                    style={{position: 'absolute',
                            marginTop: '-90px',
                            marginLeft: '20px',
                            minWidth: '50px', 
                            minHeight: '0px'}}
                    width="50" height="48" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M43.9081 31.0726L42.0499 18.9275C41.6725 16.461 39.5619 14.6403 37.0803 14.6403H10.5103C8.02858 14.6403 5.91799 16.461 5.5406 18.9276L2.05955 41.6801C1.59095 44.7429 3.94757 47.505 7.02928 47.505H23.7953" stroke="#003D06" stroke-width="3.79209" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M28.8232 42.4489L36.3655 50.0331L48.9361 37.3928" stroke="#003D06" stroke-width="3.79209" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M28.8235 7.05612C28.8235 4.2637 26.5724 2 23.7953 2C21.0182 2 18.7671 4.2637 18.7671 7.05612" stroke="#003D06" stroke-width="3.79209" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
          
            <div style={thirdSectionStyle}>
                <p style={{color:'#003D06',fontSize:'16px',
                          fontWeight: '500',marginTop:'20px'}}>
                    Department</p>
                <ul style={{ color: '#003D06', textAlign: 'left', marginLeft: 'px', listStyleType: 'disc' ,marginTop:'-12px'}}>
                    <li>Shirts</li>
                    <li>Pants</li>
                    <li>Shoes</li>
                    <li>Hat</li>
                    <li>Dresses</li>
                    <li>Skirts</li>
                </ul>
            </div>

          <div style={thirdSectionStyle}>
            <p style={{color:'#003D06',fontSize:'16px',fontWeight: '500',
                        marginTop:'20px'}}>
                            About us</p>
            <ul style={{ color: '#003D06', textAlign: 'left',  listStyleType: 'disc',marginTop:'-12px' }}>
              <li>About Shopcart</li>
              <li>Careers</li>
              <li>News & Blog</li>
              <li>Help</li>
              <li>Press Center</li>
              <li>Shop By Location</li>
              <li>Shopcart Brands</li>
              <li>Affiliate & Partners</li>
            </ul>
          </div>

          <div style={sectionStyle}>
          <p style={{color:'#003D06',fontSize:'16px',fontWeight: '500',marginTop:'20px'}}>Payment</p>
            <img height={100}
              width={220}
              src={payment}
            />
          </div>

          <div style={thirdSectionStyle}>
          <p style={{color:'#003D06',fontSize:'16px',fontWeight: '500',marginTop:'20px'}}>Help</p>
            <ul style={{ color: '#003D06', textAlign: 'left', listStyleType: 'disc',marginTop:'-12px' }}>
              <li>Shopcart Helpt</li>
              <li>Returns</li>
              <li>Track Orders</li>
              <li>Contact Us</li>
              <li>Feedback</li>
              <li>Security & Fraud</li>
            </ul>
          </div>
        </div>
      </div>
        </>
    )
};
export default Footer;