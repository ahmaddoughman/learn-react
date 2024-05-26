import { useDispatch, useSelector } from "react-redux";
// import { deposite, withdraw } from "./store/actions/bank-actions";
import Products from "./Products";
import { deposite, withdraw } from "./reactToolKit1/slices/bank-slice";


export default function Ex11Main(){

    const state = useSelector(state => state.bank);
    const dispatch = useDispatch();

    console.log(state);

    return(
        <>
        <p>bank account balance {state} </p>
        <button onClick={() => dispatch(withdraw(100))}>withdraw</button>
        <button onClick={() => dispatch(deposite(100))}>deposite</button>

        <Products/>
        </>
    );
}