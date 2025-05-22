'use client';
import './style.scss';
import { useContext, useRef, useState,useMemo } from 'react';
import { CartContext } from '@/cart/add/cart';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

const CheckoutPage = () => {
  const [selectedMethod, setSelectedMethod] = useState('pickup');
  const { cartItems, calculateTotalPrice, clearCart } = useContext(CartContext);
  const totalPrice = useMemo(() => calculateTotalPrice(), [cartItems]);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    lastName: '',
    phoneNumber: '',
    city: '',
    streetAddress: '',
  });

  
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Введите имя';
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Введите номер телефона';
    } else if (formData.phoneNumber.replace(/\D/g, '').length < 11) {
      newErrors.phoneNumber = 'Некорректный номер телефона';
    }

    if (selectedMethod === 'delivery') {
      if (!formData.city.trim()) {
        newErrors.city = 'Введите город';
      }

      if (!formData.streetAddress.trim()) {
        newErrors.streetAddress = 'Введите адрес';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    let isValid = true;
    if (name === 'lastName' || name === 'city') {
      isValid = /^[а-яА-ЯёЁ\s-]*$/.test(value);
    } else if (name === 'streetAddress') {
      isValid = /^[а-яА-ЯёЁ0-9\s-]*$/.test(value);
    }
  
    if (isValid) {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const handlePhoneChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      phoneNumber: value,
    }));
    if (errors.phoneNumber) {
      setErrors((prev) => ({
        ...prev,
        phoneNumber: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const totalPrice = calculateTotalPrice();
      const message = `
Заказ с сайта iqos-iluma.com

Имя: ${formData.lastName}   
Телефон: ${formData.phoneNumber}

Способ доставки: ${selectedMethod === 'delivery' ? 'Доставка' : 'Самовывоз'}
${selectedMethod === 'delivery' ? `Город: ${formData.city}\nАдрес: ${formData.streetAddress}` : ''}

Корзина:
${cartItems
    .map(
        (item) =>
            `- ${item.name} (${item.type || 'обычный'}) x${item.quantity}: ${item.price} ₽`
        )
        .join('\n')}

Общая сумма: ${totalPrice} ₽
      `;

      try {
        const response = await fetch(
          'https://api.telegram.org/bot7364548522:AAEaH4P_aouLZevPDigO7gsWx5b0LlpEBVU/sendMessage',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              chat_id: '-1002155675591',
              text: message,
              parse_mode: 'Markdown',
            }),
          }
        );

        if (response.ok) {
          console.log('Сообщение успешно отправлено в Telegram!');
          alert('Ваш заказ был отправлен!\nВ ближайшее время с вами свяжется наш менеджер.');
          window.location.href = '/';
          clearCart()
        } else {
          console.error('Ошибка при отправке сообщения в Telegram');
        }
      } catch (error) {
        console.error('Ошибка при подключении к Telegram API', error);
      }
    }
  };

  const handleExternalSubmit = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };

  return (
    <div className="checkout-page">
      <div className="checkout-form">
        <h1>Оформление заказа</h1>
        <form onSubmit={handleSubmit} ref={formRef}>
          <div className="checkout-name">
            <h4>Контактные данные</h4>
            <input
              type="text"   
              name="lastName"
              placeholder="Ваше имя"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            {errors.lastName && <p className="error" style={{color:'red'}}>{errors.lastName}</p>}

            <PhoneInput
              country={'ru'}
              value={formData.phoneNumber}
              onChange={handlePhoneChange}
              disableDropdown={true}
              onlyCountries={['ru']}
              inputStyle={{
                width: '100%',
                fontSize: '16px',
                padding: '10px 20px',
                fontFamily:'inherit'
              }}
               placeholder="Введите номер телефона"
            />
            {errors.phoneNumber && (
              <p className="error" style={{color:'red'}}>{errors.phoneNumber}</p>
            )}
          </div>

          <div className="checkout-delivery">
            <h4>Способ доставки</h4>
            <div className="checkout-delivery-method">
              <button
                type="button"
                className={selectedMethod === 'pickup' ? 'active' : ''}
                onClick={() => setSelectedMethod('pickup')}
              >
                Самовывоз
              </button>
              {totalPrice < 3600 ?(
                    <button
                    type="button"
                    className={selectedMethod}
                    disabled
                  >
                    Доставка<br></br><span style={{fontSize: '14px', color: 'rgb(198, 58, 58)'}}>от 3600 руб.</span>
                  </button>
              ):(
                <button
                  type="button"
                  className={selectedMethod === 'delivery' ? 'active' : ''}
                  onClick={() => setSelectedMethod('delivery')}
                >
                  Доставка
                </button>
              )}
              
            </div>

            {selectedMethod === 'delivery' && (
              <div className="checkout-delivery-address">
                <input
                  type="text"
                  name="city"
                  placeholder="Город"
                  value={formData.city}
                  onChange={handleInputChange}
              
                />
                {errors.city && <p className="error" style={{color:'red'}}>{errors.city}</p>}

                <input
                  type="text"
                  name="streetAddress"
                  placeholder="Номер дома и название улицы"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                
                />
                {errors.streetAddress && (
                  <p className="error" style={{color:'red'}}>{errors.streetAddress}</p>
                )}
              </div>
            )}

            {selectedMethod === 'pickup' && (
              <div className="checkout-delivery-pickup">
                <p>
                  Забирать заказ по адресу:
                  <br />
                  г.Москва - ул. Римского-Корсакова, 11, корп 8
                Ориентир: Пункт OZON
                </p>
              </div>
            )}
          </div>
        </form>
      </div>

      <div className="checkout-table">
        <h4>Ваша корзина</h4>
        {cartItems.length > 0 ? (
          <div>
            <ul className="cart-list">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-info">
                    <div className="cart-item-name">
                      <p>{item.name}</p>
                      {item.type === 'default' ? '' : <p>({item.type})</p>}
                    </div>
                    <div className="price">
                      <p>Количество: {item.quantity}</p>
                      <p>Цена: {item.price} ₽</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="checkout-total">
              <p>Итого:</p>
              <p>{calculateTotalPrice()} ₽</p>
            </div>
            <button onClick={handleExternalSubmit}>Оформить заказ</button>
          </div>
        ) : (
          <div>
            <h5 style={{ textAlign: 'center', marginTop: '30%' }}>Корзина пуста</h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
