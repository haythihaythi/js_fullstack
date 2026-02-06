import { Outlet } from "react-router";
//RootLayout ထဲမှာ <Outlet /> ရှိရမယ်
//outlet mhr child routes ty ka lr replace
function RootLayout() {
  return (
    <>
      <div className="bg-sky-300">Navigation Menu</div>
      
      <Outlet /> 
      

      <div className="bg-sky-300">Footer Menu</div>
    </>
  );
}

export default RootLayout;
