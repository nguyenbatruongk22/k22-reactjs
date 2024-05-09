import React, { Component } from 'react'

export default class NbtProductList extends Component {
    render() {
        let { renderProducts } = this.props;
        console.log("Products:", renderProducts);
        let fnstatus = (param) => {
            if (param == 1) {
                return 'Active';
            }
            return 'NonActive';
        }
        let elemenProducts = renderProducts.map((item, index) => {
            return ( <
                >
                <
                tr key = { index } >
                <
                td > { item.id } < /td> <
                td > { item.title } < /td> { /*<td>{item.status==1?'Active':'NonActive'}</td> */ } <
                td > { fnstatus(item.status) } <
                /td> <
                /tr> <
                />  
            )
        })

        return ( <
            div >
            <
            h2 > Danh sach san pham < /h2> <
            table className = 'table table-bordered' >
            <
            thead >
            <
            tr >
            <
            th > ID < /th> <
            th > Title < /th> <
            th > status < /th> <
            /tr> <
            /thead> <
            tbody > { elemenProducts } <
            /tbody> <
            /table> <
            /div>
        )
    }
}