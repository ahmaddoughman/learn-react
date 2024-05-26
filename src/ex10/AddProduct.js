import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function AddProduct(){

   let navigate = useNavigate()

   const [formInputs, setFormInput] = useState({
    title:"",
    price:""
   })

    function handleAdd(e){
        e.preventDefault();

        fetch('https://fakestoreapi.com/products',{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
              },
            body:JSON.stringify(
                {
                    title : formInputs.title,
                    price: formInputs.price,
                }
            ),
        }).then((res) => res.json())
           .then((data) => console.log(data));
        

        navigate('/product')
    }

    return(
        <>
            <form className="mt-4">

                <div className="mb-3 ">
                    <label htmlFor="Title" className="form-label">Title</label>
                    <input type="text" className="form-control" onChange={(event) => {
                        setFormInput({ ...formInputs, title: event.target.value });
                    }} id="Title" aria-describedby="emailHelp"/>
                  
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="number" className="form-control" onChange={(event) => {
                        setFormInput({ ...formInputs, price: event.target.value });
                    }}id="price"/>
                </div>
                
                <button type="button" className="btn btn-primary" onClick={handleAdd}>Submit</button>
            </form>
        </>
    );
}