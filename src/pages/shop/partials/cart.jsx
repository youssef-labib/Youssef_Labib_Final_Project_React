import React from 'react';
import { useCart } from '../../../context/CartContext';
import { IoMdClose } from "react-icons/io";
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";
import Images from '../../../constant/images';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();
    const { 
        cartItems, 
        isCartOpen, 
        toggleCart, 
        removeFromCart, 
        updateQuantity,
        getTotalPrice
    } = useCart();

    const handleCheckout = () => {
        toggleCart();
        navigate('/');
    };

    if (!isCartOpen) return null;

    return (
        <>
            <div 
                className="fixed inset-0 bg-black opacity-50 z-40"
                onClick={toggleCart}
            />

            <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 transform transition-transform duration-300 ease-in-out flex flex-col">

                <div className="flex items-center justify-between px-6 py-4 border-b">
                    <h2 className="text-xl font-medium">Your Cart ({cartItems.length})</h2>
                    <button onClick={toggleCart} className="text-2xl hover:text-[#e65540] transition-colors">
                        <IoMdClose />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-4">
                    {cartItems.length === 0 ? (
                        <p className="text-center text-gray-500">Your cart is empty</p>
                    ) : (
                        <div className="space-y-6">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex gap-4 border-b pb-4">
                                    <img 
                                        src={Images[item.image]} 
                                        alt={item.name} 
                                        className="w-24 h-32 object-cover"
                                    />
                                    <div className="flex-1">
                                        <div className="flex justify-between">
                                            <h3 className="text-[15px] text-gray-600 hover:text-black transition-colors">
                                                {item.name}
                                            </h3>
                                            <button 
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-gray-400 hover:text-[#e65540] transition-colors"
                                            >
                                                <IoMdClose />
                                            </button>
                                        </div>
                                        <div className="mt-2 flex items-center gap-2">
                                            <button 
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="text-gray-600 hover:text-[#e65540] transition-colors"
                                            >
                                                <IoRemoveSharp />
                                            </button>
                                            <span className="w-8 text-center">{item.quantity}</span>
                                            <button 
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="text-gray-600 hover:text-[#e65540] transition-colors"
                                            >
                                                <IoAddSharp />
                                            </button>
                                        </div>
                                        <div className="mt-2 flex gap-2">
                                            {item.oldPrice && (
                                                <p className="text-[15px] text-gray-400 line-through">
                                                    ${(item.oldPrice * item.quantity).toFixed(2)}
                                                </p>
                                            )}
                                            <p className="text-[15px] text-gray-600">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="border-t px-6 py-4 space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-medium">Total:</span>
                        <span className="text-lg text-[#e65540]">${getTotalPrice().toFixed(2)}</span>
                    </div>
                    <button 
                        className="w-full py-3 bg-black text-white text-sm font-medium tracking-wider hover:bg-[#e65540] transition-colors duration-300 rounded-md"
                        onClick={handleCheckout}
                    >
                        PROCEED TO CHECKOUT
                    </button>
                </div>
            </div>
        </>
    );
};

export default Cart; 