import React from 'react';

const FoodItem = () => {
    return (
        <div>
            <h2 className='text-center text-5xl font-bold mt-32 mb-10'>OUR <span className='bg-orange-500 text-white px-2 py-1 rounded-lg'>FAVORITE</span> FOOD DISHES</h2>
            <div className='grid md:grid-cols-3 p-10 gap-10'>
                <div className='rounded shadow-md'>
                    <img className='rounded' src=" https://i.ibb.co/XVn6CVf/Margherita-Pizza.jpg" alt="" />
                    <div className='p-5'>
                    <span className="indicator-item badge badge-primary">new</span>
                        <h2 className='text-3xl mb-2 text-orange-500'>Margherita Pizza</h2>
                        <p>Margherita pizza is a classic Neapolitan pizza made with a thin crust, tomato sauce, fresh mozzarella cheese, and basil leaves. It was named after Queen Margherita of Savoy, who visited Naples in 1889 and fell in love with this simple yet delicious pizza.</p>
                    </div>
                </div>
                <div className='rounded shadow-md'>
                    <img className='rounded w-full' src=" https://i.ibb.co/x8DDq74/Antipasto-Platter.jpg" alt="" />
                    <div className='p-5'>
                        <h2 className='text-3xl mb-2 text-orange-500'>Seafood </h2>
                        <p> This creamy rice dish is cooked slowly with broth until it reaches a smooth, velvety texture. Traditional risotto often includes ingredients like saffron, mushrooms, seafood, or vegetables, providing a delicious and comforting meal.</p>
                    </div>
                </div>
                <div className='rounded shadow-md'>
                    
                    <img className='rounded h-[280px] w-full' src=" https://i.ibb.co/f8mZxvj/g2-jpg.webp" alt="" />
                    <div className='p-5'>
                        <span className="indicator-item badge badge-primary">new</span>
                        <h2 className='text-3xl mb-2 text-orange-500'>Risotto</h2>
                        <p>Italy's extensive coastline contributes to a vibrant seafood tradition. Popular dishes include spaghetti alle vongole (spaghetti with clams), calamari, grilled fish, or seafood stew like cioppino.</p>
                    </div>
                </div>
                <div className='rounded shadow-md'>
                    <img className='rounded' src=" https://i.ibb.co/74CTDrK/pasta-e-fagioli-95155-1.jpg" alt="" />
                    <div className='p-5'>
                        <h2 className='text-3xl mb-2 text-orange-500'>Pasta</h2>
                        <p>Pasta is a staple of Italian cuisine and comes in numerous shapes and sizes, such as spaghetti, fettuccine, penne, and ravioli. It is typically made from durum wheat and can be paired with various sauces like marinara, Bolognese, carbonara, or pesto.</p>
                    </div>
                </div>
                <div className='rounded shadow-md'>
                    <img className='rounded h-[260px] w-full' src=" https://i.ibb.co/WKfg6ML/Risotto.jpg" alt="" />
                    <div className='p-5'>
                        <h2 className='text-3xl mb-2 text-orange-500'>Tiramisu</h2>
                        <p>Tiramisu is a popular Italian dessert made with layers of ladyfingers soaked in coffee and liqueur, alternating with a creamy mixture of mascarpone cheese, eggs, and sugar. It is often dusted with cocoa powder.</p>
                    </div>
                </div>
                <div className='rounded shadow-md'>
                    <img className='rounded w-full' src="https://i.ibb.co/RcYS7jX/Spaghetti-alla-Carbonara.jpg" alt="" />
                    <div className='p-5'>
                    <span className="indicator-item badge badge-primary">new</span>
                        <h2 className='text-3xl mb-2 text-orange-500'>Bruschetta</h2>
                        <p>Bruschetta consists of toasted bread slices rubbed with garlic, topped with fresh tomatoes, basil, olive oil, and sometimes mozzarella or other ingredients. It is a popular antipasto (appetizer) in Italian cuisine.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;