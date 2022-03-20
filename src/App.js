import { useEffect, Fragment, useState } from "react";


function App() {
    /*const [users, setUsers] = useState([]);

    const url = 'https://jsonplaceholder.typicode.com/users';
    const fetchData = (apiUrl) => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => setUsers(data[0]))
            .catch(error => console.log(error))
    };

    useEffect(()=> {
        fetchData(url);
    }, [])*/

    
    //¡ESTA ES LA FORMA BUENA!
    /*const url = 'https://jsonplaceholder.typicode.com/users';
    const [users, setUsers] = useState(); // Hook que almacena los usuarios
    const fetchApi = async () => { // Función que pide los usuarios
        const response = await fetch(url)
        const responseJSON = await response.json()
        setUsers(responseJSON)
    }

    useEffect(()=> { //Ejecuta la función al inicio
        fetchApi()
    }, [])

    return(
        <Fragment>
            <div>Traer datos de APIs en React
                <ul>
                    { !users ? 'Cargando': 
                    users.map((users,index) => {
                        return <li>{users.name}</li>
                    })}
                </ul>
            </div>
            
        </Fragment>
    );*/


    const url = "https://96c09234-55c7-4941-ab82-ba36bd7b3e61.mock.pstmn.io/api/v1/user/";
    const [users, setUsers] = useState();

    const fetchApi = async () => { // Función que pide los usuarios
        const response = await fetch(url)
        const responseJSON = await response.json()
        setUsers(responseJSON)
        console.log(responseJSON)
    }

    useEffect(()=> { //Ejecuta la función al inicio
        fetchApi()
    }, [])

    return(
        <Fragment>
            <div>Traer datos de APIs en React
                <ul>
                    { !users ? 'Cargando': 
                    users.map((users,index) => {
                        return <li>{users}</li>
                    })}
                </ul>
            </div>
            
        </Fragment>
    );
}

export default App;