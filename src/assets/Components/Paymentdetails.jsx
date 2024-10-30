import React from 'react'
import { Button } from '@material-tailwind/react';

function Paymentdetails({fn,caritems,total}) {

    

  
  return (
    <div>
        <div className="w-full ">
            <h1 className="text-center md:ml-10 md:mr-9 mt-8 text-3xl text-blue-700  font-semibold border-b-2  border-black ">
              PRICE DETAILS
            </h1>
            <div className="flex  flex-col justify-center items-center  w-full">
              {caritems.map((item, index) => {
                const total = 0;
                return (
                  <div
                    key={index}
                    className=" w-[62vh]  h-[20vh] border-2 flex justify-center items-center mt-16  "
                  >
                    <div className="w-[100%] h-[15vh]">
                      <img src={item.productid.image} alt="" />
                    </div>
                    <div className="w-[50vh] h-[15vh] ml-2 ">
                      <h1>{item.productid.title}</h1>
                      <h1>{item.quantity}</h1>
                      <h1 className="text-red-800">Price:{item.price}</h1>
                      <h1 className="text-red-800">
                        {" "}
                        <h1 className="text-red-900">
                          Total: {item.productid.price * item.quantity}
                        </h1>
                      </h1>
                      
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-10">
              <h1 className="text-blue-700">
                Grand total: <span className="text-red-900">{total}</span>{" "}
              </h1>

              <Button
                className="bg-green-800 mt-5"
                onClick={
                  fn
                  // navigate("https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-7PY957092E321040X", {
                  //   state: { grandtotal, cartnew },
                  // });
                }
              >
                PAY
              </Button>
            </div>
          </div>
        
    </div>
  )
}

export default Paymentdetails