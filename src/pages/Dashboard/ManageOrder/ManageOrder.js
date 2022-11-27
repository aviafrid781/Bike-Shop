import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';




const ManageOrder = () => {
    const [manageOrders, setManageOrders] = useState([]);

    useEffect(() => {
        fetch("https://bike-shops-server-2wvg.vercel.app/orders")
            .then(res => res.json())
            .then(data => setManageOrders(data))
    }, [])


    const handelDelete = (id) => {
        const url = `https://bike-shops-server-2wvg.vercel.app/orders/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert('deleted Succesfull')
                    const orders = manageOrders.filter(mg => mg._id !== id)
                    setManageOrders(orders)
                }
            })
    }
    return (
        <div className="manageOrder-container" >
            <h3>Manage All Orders</h3>
            {
                manageOrders.map(mg =>



                    <Table striped bordered hover className="table-light" >
                        <thead>
                            <tr collapseOnSelect expand="lg">
                                {/* <th>#</th> */}
                                <th>User name</th>
                                <th>Email</th>
                                <th>Order Name</th>
                                <th>Total Cost</th>
                                <th>Phone Number</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{mg.user}</td>
                                <td>{mg.email}</td>
                                <td>{mg.name}</td>
                                <td>{mg.price}</td>
                                <td>{mg.number}</td>
                                <td>{mg.address}</td>
                                <td><button onClick={() => handelDelete(mg._id)} type="button" class="btn btn-danger btn-sm">Delete</button></td>
                            </tr>

                        </tbody>
                    </Table>


                )
            }
        </div >
    );
};

export default ManageOrder;