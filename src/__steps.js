/* 
Basic Router Setup Steps:::=>
1. npm install react-router-dom
2. bellow App(){ const router = createBrowserRouter([{path:...,loader:...,element:...}])
3. under return add <RouterProvider router={router}></RouterProvider>
4. create components based on needs
5. create Main layout with some common parts and one changing part based on route
6. set Main layout under Main.js with <Header></Header> and <Outlet></Outlet> component
7. set links or routes on the Header component
*/

/* 
Handle cart::
1. create function handleAddToCart with parameter (id or whole object) in Home.js below useLoaderData() and console log it to check.
2. pass the function as props like handleAddToCart={handleAddToCart}.
3. receive this props in which component button is added and inside button write onClick={() => handleAddToCart(tshirt)}.
4. To add items in cart declare a state above the function handleAddToCart like 'const [cart,setCart]=useState([initial value])
5. inside handleAddToCart write following to set the cart::
        const newCart = [...cart, tshirts];
        setCart(newCart)
6. in Cart component write cart={cart} to send ths as props and in Cart.js receive this props
7. to see all items name in cart >>
                        in Cart.js write 
                        {
                            cart.map(tshirt => <p
                            key={tshirt.id}
                            >
                                {tshirt.name}
                            </p>)
                        }
8. to prevent duplicate items in cart write following inside handleAddToCart function in Home.js >>>
 const exists = cart.find(tShirt => tShirt.id === tshirts.id);
        if (exists) {
            alert('already added')
        }
        else {
            
            const newCart = [...cart, tshirts];
            setCart(newCart)
        }
9. to remove any item from cart add click handler in Home.js like>>>
const handleRemoveItemFromCart = tshirts => {
        // console.log(tshirts)
        const remainingItemInCart = cart.filter(tshirt => tshirt.id !== tshirts.id);
        setCart(remainingItemInCart)
    }
10. send above function as props from Home.js's Cart component then receive that in Cart.js and add the function inside the X button.
*/

/* 
Conditional Rendering Steps and Methods>>>>
1. use element in a variable and the use if-else to set the value.
2. using ternary operator 'condition ? true value : false value.
3. using && operator (if condition is true, display something).
4. using || operator (if condition is false, display something).
*/