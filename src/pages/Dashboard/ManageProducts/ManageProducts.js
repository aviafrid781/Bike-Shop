import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageProducts = () => {
    const [manageProducts, setManageProducts] = useState([]);

    useEffect(() => {
        fetch("https://fathomless-bastion-71123.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setManageProducts(data))
    }, [])


    const handelDelete = (id) => {
        const url = `https://fathomless-bastion-71123.herokuapp.com/products/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert('deleted Succesfull')
                    const remainigProducts = manageProducts.filter(mg => mg._id !== id)
                    setManageProducts(remainigProducts)
                }
            })
    }


    return (
        <div className="manageProducts-container" >
            <h3>Manage All Products</h3>
            {
                manageProducts.map(mg => <Table striped bordered hover className="table-light" >
                    <thead>
                        <tr collapseOnSelect expand="lg">

                            <th>Brand Name</th>
                            <th>Model Name</th>
                            <th> Price</th>

                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td>{mg.name}</td>
                            <td>{mg.model}</td>
                            <td>{mg.price}</td>

                            <td><button onClick={() => handelDelete(mg._id)} type="button" class="btn btn-danger btn-sm">Delete</button></td>
                        </tr>

                    </tbody>
                </Table>)
            }
        </div>
    );
};

export default ManageProducts;