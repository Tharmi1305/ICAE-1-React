export default function Cart({c}) {
    const total = c.reduce((sum,item) => sum + item.qty*item.price, 0)

    return (
        <div className="table-container">
            <h4 className="card-title">Cart</h4>
            <table>
                <thead>

                    <td>Product</td>
                    <td>QTY</td>
                    <td>Price</td>

                </thead>
                {
                        <tbody>
                            {
                                c.map(
                                    (item) => (
                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td>{item.qty}</td>
                                            <td>{item.qty * item.price}</td>
                                        </tr>
                                    )
                                )
                            }
                        </tbody>
                }
                <tr>
                    <td >Grand Total : </td>
                    <td colSpan={2}>{total}</td>
                </tr>
            </table>
           
        </div>
    );
}