// import React, { useEffect, useMemo, useState } from 'react';
// import { Container, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router';
// import { SelectColumnFilter } from '../Filters';
// import TableContainer from '../TableContainer';
// import HomeProductItem from '../components/HomeProductItem';

// const ProductTable = () => {

//     const [data, setData] = useState([]);

//     useEffect(() => {
//         fetch("http://localhost:8080/products")
//             .then((res) => res.json())
//             .then((res) => {
//                 setData(res);
//             }); // asynchronous function
//     }, []);

//     const renderRowSubComponent = (row) => {
//         const {
//             id: id,
//             name: name,
//             price: price,
//             image: image,
//             description: description
//         } = row.original;
//         return (
//             <div style={{ width: '18rem', margin: '0 auto' }}>
//                 <HomeProductItem key={row.id} products={row.original} />
//                 {/* <Button variant="primary" onClick={navigate("/EditCategory/" + id)}>edit</Button> */}
//             </div>
//         );
//     };

//     const columns = useMemo(
//         () => [
//             {
//                 Header: () => null,
//                 id: 'expander', // 'id' is required
//                 Cell: ({ row }) => (
//                     <span {...row.getToggleRowExpandedProps()}>
//                         {row.isExpanded ? '👇' : '👉'}
//                     </span>
//                 ),
//             },

//             {
//                 Header: 'Category',
//                 accessor: 'id',
//                 disableSortBy: true,
//                 Filter: SelectColumnFilter,
//                 filter: 'equals',
//             },
//             {
//                 Header: 'Product Name',
//                 accessor: 'name',
//             },

//             {
//                 Header: 'Price',
//                 accessor: 'price',
//             },
//             {
//                 Header: 'description',
//                 accessor: 'description',
//             },
//         ],
//         []
//     );

//     return (
//         <Container style={{ marginTop: 50 }}>
//             <TableContainer
//                 columns={columns}
//                 data={data}
//                 defaultExpanded={renderRowSubComponent}
//                 renderRowSubComponent={renderRowSubComponent}
//             />
//         </Container>
//     );
// };

// export default ProductTable;