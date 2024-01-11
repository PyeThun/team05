import type { MenuProps } from 'antd';
import { Button,Flex,Input,Dropdown, Layout } from 'antd';
import './Style.css'
import { Link } from 'react-router-dom';
const { Header } = Layout;
const CategoryItems: MenuProps['items'] = [
    {
      label: '1st category',
      key: '1',
      style:{color: '#003D06',fontSize:'14px'},
    },
    {
      label: '2nd category',
      key: '2',
      style:{color: '#003D06',fontSize:'14px'},
    },
    {
      label: '3rd category',
      key: '3',
      style:{color: '#003D06',fontSize:'14px'},
    },
  ];
  const AccoutItems: MenuProps['items'] = [
    {
      label: <a href="/EditProfile">Edit profile</a>,
      key: '1',
      style:{color: '#003D06',fontSize:'12px'},

    },
    {
        label: <a href="/Cart">My Cart</a>,
      key: '2',
      style:{color: '#003D06',fontSize:'12px'},
    },
    {
        label: <a href="/Wishlist">My Wishlist</a>,
      key: '3',
      style:{color: '#003D06',fontSize:'12px'},
    },
    {
        label: <a href="/Purchase">My Purchase</a>,
      key: '4',
      style:{color: '#003D06',fontSize:'12px'},
    },
    {
        label: <a href="/">LogOut</a>,
      key: '5',
      style:{color: '#003D06',fontSize:'12px'},
    },
];

const Header2 = () =>{
    return(
        <>
        <Layout>
        <Header style={{ display: 'flex', alignItems: 'center',background: '#FFFF' ,height:'80px'}}>

        <svg className='brand-icon'
            style={{marginLeft:'50px', 
                    minWidth: '50px', 
                    minHeight: '48px'}}
            width="50" height="48" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M43.9081 31.0726L42.0499 18.9275C41.6725 16.461 39.5619 14.6403 37.0803 14.6403H10.5103C8.02858 14.6403 5.91799 16.461 5.5406 18.9276L2.05955 41.6801C1.59095 44.7429 3.94757 47.505 7.02928 47.505H23.7953" stroke="#003D06" stroke-width="3.79209" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M28.8232 42.4489L36.3655 50.0331L48.9361 37.3928" stroke="#003D06" stroke-width="3.79209" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M28.8235 7.05612C28.8235 4.2637 26.5724 2 23.7953 2C21.0182 2 18.7671 4.2637 18.7671 7.05612" stroke="#003D06" stroke-width="3.79209" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <Link to="/">
            <span className='Nameofbrand'>Torhinozorus</span>
        </Link>

        <Dropdown  menu={{ items:CategoryItems }}>
        <a onClick={(e) => e.preventDefault()}>
        <div className='Category'>
            Category
            <svg className='Cate-icon'
                style={{ position: 'absolute',}} 
                width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="18.3137" height="20.7967" transform="translate(0.620361)" fill="white"/>
                <path d="M9.77709 1.94971C8.30561 1.94971 6.86718 2.44521 5.64369 3.37356C4.4202 4.30191 3.4666 5.62141 2.90349 7.1652C2.34038 8.70899 2.19305 10.4077 2.48012 12.0466C2.76719 13.6855 3.47577 15.1909 4.51627 16.3725C5.55676 17.554 6.88243 18.3587 8.32563 18.6847C9.76883 19.0107 11.2648 18.8434 12.6242 18.2039C13.9837 17.5644 15.1456 16.4816 15.9632 15.0922C16.7807 13.7028 17.217 12.0694 17.217 10.3984C17.2149 8.15837 16.4304 6.01079 15.0356 4.42687C13.6408 2.84296 11.7496 1.95207 9.77709 1.94971ZM9.77709 17.5472C8.53199 17.5472 7.31485 17.128 6.27959 16.3424C5.24433 15.5569 4.43745 14.4404 3.96097 13.1341C3.48449 11.8278 3.35982 10.3904 3.60273 9.00369C3.84563 7.61695 4.44521 6.34314 5.32562 5.34335C6.20604 4.34357 7.32776 3.6627 8.54893 3.38686C9.7701 3.11102 11.0359 3.25259 12.1862 3.79368C13.3365 4.33476 14.3197 5.25104 15.0115 6.42667C15.7032 7.60229 16.0724 8.98445 16.0724 10.3984C16.0705 12.2937 15.4067 14.1108 14.2265 15.451C13.0463 16.7912 11.4461 17.5451 9.77709 17.5472ZM13.0435 8.63877C13.0967 8.69913 13.1389 8.7708 13.1677 8.8497C13.1965 8.9286 13.2113 9.01316 13.2113 9.09857C13.2113 9.18398 13.1965 9.26855 13.1677 9.34744C13.1389 9.42634 13.0967 9.49801 13.0435 9.55837L10.182 12.8079C10.1288 12.8683 10.0657 12.9162 9.99624 12.9489C9.92677 12.9816 9.8523 12.9985 9.77709 12.9985C9.70188 12.9985 9.62741 12.9816 9.55793 12.9489C9.48845 12.9162 9.42533 12.8683 9.37218 12.8079L6.51067 9.55837C6.40329 9.43643 6.34296 9.27103 6.34296 9.09857C6.34296 8.92611 6.40329 8.76072 6.51067 8.63877C6.61806 8.51682 6.76371 8.44831 6.91558 8.44831C7.06745 8.44831 7.21309 8.51682 7.32048 8.63877L9.77709 11.4293L12.2337 8.63877C12.2868 8.57834 12.35 8.53041 12.4194 8.4977C12.4889 8.465 12.5634 8.44816 12.6386 8.44816C12.7138 8.44816 12.7883 8.465 12.8578 8.4977C12.9272 8.53041 12.9903 8.57834 13.0435 8.63877Z" fill="#003D06"/>
            </svg>
        </div>
        </a>
        </Dropdown>
        <Input className='Search-icon'
                style={{ minWidth: '120px', 
                         minHeight: '21px'}}
                
                placeholder="search for products,brands and shops" />
        
        <Flex gap="small" wrap="wrap">
            <Button className = "Search-button" type="primary">{'SEARCH'}</Button>
        </Flex>
        
       
        <div className='Haccount' style={{  marginLeft: '60px' }}>
            <svg style={{ minWidth: '22px', 
                            minHeight: '22px',
                            marginLeft: '20px',
                            marginTop:'20px'}}
                        width="26" height="26" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0873 10.5C13.0692 10.5 15.4859 8.1498 15.4859 5.25C15.4859 2.3502 13.0692 0 10.0873 0C7.10544 0 4.68872 2.3502 4.68872 5.25C4.68872 8.1498 7.10544 10.5 10.0873 10.5ZM13.8663 11.8125H13.162C12.2257 12.2309 11.1839 12.4688 10.0873 12.4688C8.99073 12.4688 7.95319 12.2309 7.01265 11.8125H6.3083C3.1788 11.8125 0.639771 14.2816 0.639771 17.325V19.0312C0.639771 20.1182 1.54657 21 2.66425 21H17.5104C18.6281 21 19.5349 20.1182 19.5349 19.0312V17.325C19.5349 14.2816 16.9958 11.8125 13.8663 11.8125Z" fill="#003D06"/>
            </svg>
            <Dropdown  menu={{ items:AccoutItems }}>
            <a onClick={(e) => e.preventDefault()}>
            <span className='Haccount-text'>
                Account
            </span>
            </a>
        </Dropdown>
        </div>
        

        <Link to = "/Cart">
        <div className='Hcart'
                style={{ minWidth: '22px', 
                        minHeight: '22px',
                        marginLeft: '140px',
                        marginTop:'16px'}}>
            <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.36743 4.14786C1.36743 3.38427 1.97964 2.76526 2.73484 2.76526C4.95662 2.76526 6.92913 4.20276 7.63172 6.33395L7.82264 6.91307L24.6544 6.91307C25.5513 6.91304 26.3141 6.91302 26.9313 6.96877C27.5739 7.02681 28.2162 7.1552 28.8032 7.51567C29.6272 8.02169 30.2487 8.80501 30.5584 9.72813C30.7791 10.3857 30.7637 11.0476 30.6804 11.6943C30.6003 12.3157 30.4348 13.0686 30.2402 13.9538L29.8215 15.859C29.6236 16.7598 29.4588 17.5095 29.2771 18.1181C29.0869 18.7549 28.8532 19.3292 28.4737 19.8543C27.9031 20.6438 27.1357 21.2662 26.2498 21.6581C25.6605 21.9187 25.0554 22.0249 24.3993 22.0744C23.7723 22.1218 23.0128 22.1217 22.1002 22.1217H14.8199C13.9073 22.1217 13.1478 22.1218 12.5208 22.0744C11.8647 22.0249 11.2595 21.9187 10.6703 21.6581C9.78433 21.2662 9.01696 20.6438 8.4464 19.8543C8.06693 19.3292 7.83313 18.7549 7.643 18.1181C7.46128 17.5095 7.29654 16.7599 7.09859 15.8591L5.51752 8.66523L5.03725 7.20839C4.7069 6.20635 3.77947 5.53047 2.73484 5.53047C1.97964 5.53047 1.36743 4.91146 1.36743 4.14786ZM8.5417 9.67828L9.75743 15.2099C9.96901 16.1726 10.1124 16.8208 10.2611 17.319C10.4048 17.8 10.5277 18.0474 10.6545 18.2228C10.9398 18.6175 11.3235 18.9287 11.7664 19.1247C11.9633 19.2118 12.2288 19.2795 12.7244 19.3169C13.2376 19.3556 13.8945 19.3565 14.8699 19.3565H22.0502C23.0255 19.3565 23.6825 19.3556 24.1957 19.3169C24.6913 19.2795 24.9568 19.2118 25.1536 19.1247C25.5966 18.9287 25.9803 18.6175 26.2656 18.2228C26.3924 18.0474 26.5153 17.8 26.659 17.319C26.8077 16.8208 26.9511 16.1726 27.1626 15.2099L27.5575 13.4135C27.7687 12.4525 27.9061 11.8211 27.9685 11.337C28.0294 10.8646 27.9939 10.6919 27.9686 10.6166C27.8654 10.3089 27.6582 10.0478 27.3836 9.87915C27.3164 9.83789 27.1574 9.76541 26.688 9.72302C26.2071 9.67958 25.5677 9.67828 24.5941 9.67828H8.5417Z" fill="#003D06"/>
                <path d="M15.0415 26.2695C15.0415 27.7967 13.8171 29.0348 12.3067 29.0348C10.7963 29.0348 9.57188 27.7967 9.57188 26.2695C9.57188 24.7424 10.7963 23.5043 12.3067 23.5043C13.8171 23.5043 15.0415 24.7424 15.0415 26.2695Z" fill="#003D06"/>
                <path d="M24.6134 29.0348C26.1238 29.0348 27.3482 27.7967 27.3482 26.2695C27.3482 24.7424 26.1238 23.5043 24.6134 23.5043C23.103 23.5043 21.8786 24.7424 21.8786 26.2695C21.8786 27.7967 23.103 29.0348 24.6134 29.0348Z" fill="#003D06"/>
            </svg>
          <span className='Hcart-text'>Cart</span>
        </div>
        </Link>


        </Header>
        </Layout>
        

        </>
    )
};
export default Header2;