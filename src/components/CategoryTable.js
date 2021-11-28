/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useMemo, useState } from 'react';
import '../components/styles.css';
import { Container, Button } from 'react-bootstrap';
import { SelectColumnFilter } from '../Filters';
import TableContainer from '../TableContainer';
import { useNavigate } from 'react-router';

const categoryTable = () => {

    const navigate = useNavigate();

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/categories")
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            }); // asynchronous function
    }, []);

    const renderRowSubComponent = (row) => {
        const {
            id: id,
            name: name
        } = row.original;
        return (
            <div style={{ width: '18rem', margin: '0 auto' }}>
                <Button variant="primary" onClick={navigate("/EditCategory/" + id)}>edit</Button>
            </div>
        );
    };

    const columns = useMemo(
        () => [
            {
                Header: () => null,
                id: 'expander', // 'id' is required
                Cell: ({ row }) => (
                    <span {...row.getToggleRowExpandedProps()}>
                        {row.isExpanded ? '👇' : '👉'}
                    </span>
                ),
            },
            {
                Header: '#',
                accessor: 'id',
                disableSortBy: true,
                Filter: SelectColumnFilter,
                filter: 'equals',
            },
            {
                Header: 'Category',
                accessor: 'name',
            },
        ],
        []
    );

    return (
        <Container style={{ marginTop: 50 }}>
            <TableContainer
                columns={columns}
                data={data}
                renderRowSubComponent={renderRowSubComponent}
            />
        </Container>
    );
};
export default categoryTable;