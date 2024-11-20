import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './SuperCoin.css'; // Opcional: crie um arquivo CSS para estilos

const SuperCoin = () => {
    // Inicialize o estado de superCoins
    const [superCoins, setSuperCoins] = useState(0);

    // Use o useSelector para acessar os itens do carrinho no Redux
    const cartItems = useSelector(state => state.cart.cartItems);

    // Calcule o valor total do carrinho
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    // Atualize o estado de superCoins sempre que o totalAmount mudar
    useEffect(() => {
        if (totalAmount >= 100 && totalAmount < 200) {
            setSuperCoins(10);
        } else if (totalAmount >= 200 && totalAmount < 300) {
            setSuperCoins(20);
        } else if (totalAmount >= 300) {
            setSuperCoins(30);
        } else {
            setSuperCoins(0);
        }
    }, [totalAmount]);

    // Retorno do JSX
    return (
        <div className="super-coins" style={{ textAlign: 'center' }}>
            <h2 className="super-coins-title">Super Coins</h2>
            <p className="super-coins-info">You will earn {superCoins} super coins with this purchase.</p>
        </div>
    );
};

export default SuperCoin;