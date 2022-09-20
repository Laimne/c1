import { useEffect, useState } from 'react';
import axios from 'axios';

function LeftJoin() {


    const [telefonai, setTelefonai] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3003/get-it/telefonai')
            .then(res => setTelefonai(res.data));
    })

    return (
        <ul className="trees">
            <h2>LeftJoin</h2>

            {telefonai.map(tel => <li>Tel{telefonai.phone} Klienot_id{tel.client_id}</li>)}
        </ul>

    );
}

export default LeftJoin;