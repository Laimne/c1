import { useEffect, useState } from 'react';
import axios from 'axios';

function InnerJoin() {

    // const [clients, setClients] = useState([]);
    const [telefonai, setTelefonai] = useState([])

    // useEffect(() => {
    //     axios.get('http://localhost:3003/get-it/inner-join')
    //     .then(res => setClients(res.data));
    // })

    
    useEffect(() => {
        axios.get('http://localhost:3003/telefonai')
        .then(res => setTelefonai(res.data));
    })

    return (
        <ul className="trees">
            <h2>InnerJoin</h2>
        {/* {
            clients.map(c => <li className="tree-row">
                <span>ID: {c.id} </span>
                <span>{c.name}</span>
                <span>ID: {c.pid} </span>
                <span>{c.phone}</span>
            </li>)
        } */}
        {telefonai.map(tel => <li>TEL {tel.phone} Klienot id {tel.client_id}</li>)}
        </ul>
    );
}

export default InnerJoin;