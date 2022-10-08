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