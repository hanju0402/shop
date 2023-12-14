import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeCount, removeProduct } from "../store/cartSlice";


export default function Cart() {

let cart = useSelector((state) => state.cart
)

let user = useSelector((state) => state.user
)
console.log(user);
let dispatch = useDispatch();

    return (
        <div>

            {user.name}의 장바구니
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        [...cart].map((prod, index) => (
                            <tr key={prod.id}>
                            <td>{index+1}</td>
                            <td>{prod.name}</td>
                            <td>{prod.count}</td>
                            <td>
                                <button onClick={() => {
                                    dispatch(changeCount(prod.id))
                                }}>+</button>{" "}
                                <button onClick={() => {
                                    dispatch(removeProduct(prod.id))
                                }}>-</button>
                            </td>
                        </tr>
                        ))
                    }
                    
                </tbody>
            </Table>
        </div>
    );
}
