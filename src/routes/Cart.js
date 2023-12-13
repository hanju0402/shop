import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeCount, changeName } from "../store";

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
                        [...cart].map((item, index) => (
                            <tr key={item.id}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.count}</td>
                            <td>
                                <button onClick={() => {
                                    dispatch(changeCount(index))
                                }}>+</button>
                            </td>
                        </tr>
                        ))
                    }
                    
                </tbody>
            </Table>
        </div>
    );
}
