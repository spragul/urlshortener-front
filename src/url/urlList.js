import { AppState } from "../provider/provider";
import Sidebar from "../sidebar/sidebar";


export function TableList() {
   
    const{tabledata}=AppState();


    return (
        <Sidebar>
        <div style={{height:"auto",backgroundColor:"aqua"}}>
            <h1>LIST OF LINKS</h1>
            <table class="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">S.NO</th>
                        <th scope="col">ID</th>
                        <th scope="col">NEW LINK</th>
                        <th scope="col">OLD LINK</th>
                        <th>CREATE TIME</th>
                    </tr>
                </thead>
                {tabledata.map((data,index)=>
                <tbody>
                    <tr key={index+1}>
                        <th scope="row">{index+1}</th>
                        <tr>{data._id}</tr>
                        <td>https://urlshortener-3bwd.onrender.com/url/{data.shortId}</td>
                        <td>{data.redirectURL}</td>
                        <td>{data.createdAt}</td>
                    </tr>
                </tbody>
)}
            </table>

        </div>
        </Sidebar>
    )
}
