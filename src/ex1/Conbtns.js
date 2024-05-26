import "./Style.css"
import Mybtns from "./Mybtns";

export default function Conbtns(){
    return(
        <div className={"bnts"}>
          <div className={"containbtns"}>
            <Mybtns title="hello" />
            <Mybtns title="2bts">
              <div>second</div>
            </Mybtns>
            
            
          </div>
        </div>
    );
}