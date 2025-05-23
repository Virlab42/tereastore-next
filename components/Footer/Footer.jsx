import './Footer.scss'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../Header/Ilumalogo2.svg'

export default function Footer(){
    return(
        <>
            <footer>
                <div className='logo-footer'>
                    <Image src={logo} alt='ilumastorelogo' width={90} height={90} />
                    <h3>TereaStore</h3>
                </div>
                <div className='menu-footer'>
                    <div className='links'>
                        <Link href={'/products'}>Каталог</Link>
                        <Link href={'/contacts'}>Контакты</Link>
                        <Link href={'/sales'}>Акции</Link>
                        <Link href='/#popular'>Популярное</Link>
                    </div>
                    <div className='adress'>
                        <p>ул. Римского-Корсакова, 11, корп 8<br></br>Ориентир: Пункт "OZON"</p>
                    </div>
                </div>
                <div className='contacts-footer'>
                    <div className='footer-tel'>
                        <a href='tel:+7 (995) 153-80-19'>+7 (995) 153-80-19</a>
                        <p>С 10:00 до 23:00, без выходных</p>
                    </div>
                    <div className='links-contacts'>
                        <a href='https://t.me/+tXZ1x8yraKUzNWEy'>
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5 0C7.84 0 0 7.84 0 17.5C0 27.16 7.84 35 17.5 35C27.16 35 35 27.16 35 17.5C35 7.84 27.16 0 17.5 0ZM25.62 11.9C25.3575 14.665 24.22 21.385 23.6425 24.4825C23.3975 25.795 22.9075 26.2325 22.4525 26.285C21.4375 26.3725 20.6675 25.62 19.6875 24.9725C18.1475 23.9575 17.2725 23.3275 15.785 22.3475C14.0525 21.21 15.1725 20.58 16.17 19.565C16.4325 19.3025 20.9125 15.225 21 14.8575C21.0121 14.8018 21.0105 14.744 20.9953 14.6892C20.98 14.6342 20.9516 14.5839 20.9125 14.5425C20.8075 14.455 20.6675 14.49 20.545 14.5075C20.3875 14.5425 17.9375 16.17 13.16 19.39C12.46 19.8625 11.83 20.1075 11.27 20.09C10.64 20.0725 9.45 19.74 8.5575 19.4425C7.455 19.0925 6.5975 18.9 6.6675 18.2875C6.7025 17.9725 7.14 17.6575 7.9625 17.325C13.0725 15.1025 16.4675 13.6325 18.165 12.9325C23.03 10.9025 24.0275 10.5525 24.6925 10.5525C24.8325 10.5525 25.165 10.5875 25.375 10.7625C25.55 10.9025 25.6025 11.095 25.62 11.235C25.6025 11.34 25.6375 11.655 25.62 11.9Z" fill="white"/>
                            </svg>
                        </a>
                        <a href='https://api.whatsapp.com/send/?phone=79951538019&text=Здравствуйте%21+Хочу+оформить+заказ&type=phone_number&app_absent=0'>
                            <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32.0034 8.10903C26.8361 -0.003317 16.2546 -2.40698 8.07114 2.62569C0.0854929 7.65835 -2.48573 18.6251 2.68145 26.7124L3.10174 27.3634L1.37111 33.9233L7.84863 32.1707L8.49145 32.5964C11.2852 34.1237 14.3262 35 17.3423 35C20.5812 35 23.8199 34.1237 26.6136 32.3711C34.5993 27.113 36.9727 16.3717 32.0034 8.05897V8.10903ZM27.4789 24.9848C26.6136 26.2868 25.5259 27.1631 24.0178 27.3884C23.1525 27.3884 22.0645 27.8141 17.7627 26.0864C14.1036 24.3338 11.0627 21.4794 8.91174 18.1994C7.62612 16.6721 6.95859 14.694 6.76081 12.7161C6.76081 10.9634 7.40361 9.43606 8.49145 8.33439C8.91174 7.90873 9.35676 7.68339 9.77705 7.68339H10.8649C11.2852 7.68339 11.7302 7.68339 11.9527 8.55973C12.373 9.6614 13.4608 12.2904 13.4608 12.5158C13.6834 12.7411 13.5845 14.4186 12.5955 15.3701C12.0516 15.996 11.9527 16.0211 12.1752 16.4717C13.0405 17.7737 14.1284 19.1008 15.1914 20.2024C16.4771 21.3042 17.7875 22.1805 19.2956 22.8315C19.7159 23.0568 20.1609 23.0568 20.3833 22.6061C20.606 22.1805 21.669 21.0788 22.1141 20.6281C22.5343 20.2024 22.7569 20.2024 23.2019 20.4028L26.6632 22.1554C27.0834 22.3808 27.5285 22.5811 27.751 22.8064C27.9734 23.4574 27.9734 24.3338 27.5285 24.9848H27.4789Z" fill="white"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}