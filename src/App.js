import React, { useState, Fragment } from "react";
import { ReadOnlyRow } from "./components/ReadOnlyRow";
import './App.css';
import data from './mock.data.json';
import { EditableRow } from "./components/EditableRow";


function App() {

    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
        id:'',
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        company: '',
        subscription_id: ''
    });

    const [editFormData, setEditFormData] = useState({
        id:'',
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        company: '',
        subscription_id: ''
    });

    const [editContactId, setEditContactId] = useState(null);

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newContact = {
            id: addFormData.id,
            first_name: addFormData.first_name,
            last_name: addFormData.last_name,
            phone_number: addFormData.phone_number,
            email: addFormData.email,
            company: addFormData.company,
            subscription_id: addFormData.subscription_id
        };

        const newContacts = [...contacts, newContact]
        setContacts(newContacts);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            id: editContactId,//editFormData.id, //DIFERENTE id: editContactId,
            first_name: editFormData.first_name,
            last_name: editFormData.last_name,
            phone_number: editFormData.phone_number,
            email: editFormData.email,
            company: editFormData.company,
            subscription_id: editFormData.subscription_id
        };

        const newContacts = [...contacts];
        const index = contacts.findIndex((contact) => contact.id === editContactId);
        newContacts[index] = editedContact;
        setContacts(newContacts);
        setEditContactId(null);
    }

    const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id);

        const formValues = {
            id: contact.id,
            first_name: contact.first_name,
            last_name: contact.last_name,
            phone_number: contact.phone_number,
            email: contact.email,
            company: contact.company,
            subscription_id: contact.subscription_id
        }

        setEditFormData(formValues);
    }

    const handleCancelClick = () => {
        setEditContactId(null);
    }

    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];

        const index = contacts.findIndex((contact) => contact.id === contactId);
        newContacts.splice(index, 1);
        setContacts(newContacts);
    }

    return(
        <div className="app-container">
            <form onSubmit={handleEditFormSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>ID Usuario</th>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th>Teléfono</th>
                            <th>Correo electrónico</th>
                            <th>Empresa</th>
                            <th>ID Producto</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => (
                            <Fragment>
                                { editContactId === contact.id ?
                                   (<EditableRow 
                                        editFormData={editFormData} 
                                        handleEditFormChange={handleEditFormChange}
                                        handleCancelClick={handleCancelClick}
                                    />) :
                                    (<ReadOnlyRow
                                        contact={contact} 
                                        handleEditClick={handleEditClick}
                                        handleDeleteClick={handleDeleteClick}
                                    />)
                                }
                            </Fragment>
                        ))}
                    </tbody>
                </table>
            </form>
            <div className='newUser'>
                <h2>Nuevo usuario</h2>
                <form onSubmit={handleAddFormSubmit}>
                    <input 
                        type='text' 
                        name='id' 
                        required='required' 
                        placeholder='Id'
                        onChange={handleAddFormChange}
                    />
                    <input 
                        type='text' 
                        name='first_name' 
                        required='required' 
                        placeholder='Nombre'
                        onChange={handleAddFormChange}
                    />
                    <input 
                        type='text' 
                        name='last_name' 
                        required='required' 
                        placeholder='Apellidos'
                        onChange={handleAddFormChange}
                    />
                    <input 
                        type='text' 
                        name='phone_number' 
                        required='required' 
                        placeholder='Número telefónico'
                        onChange={handleAddFormChange}
                    />
                    <input 
                        type='text' 
                        name='email' 
                        required='required' 
                        placeholder='Correo electrónico'
                        onChange={handleAddFormChange}
                    />
                    <input 
                        type='text' 
                        name='company' 
                        required='required' 
                        placeholder='Nombre empresa'
                        onChange={handleAddFormChange}
                    />
                    <input 
                        type='text' 
                        name='subscription_id' 
                        required='required' 
                        placeholder='Id de suscripción'
                        onChange={handleAddFormChange}
                    />
                    <button type='submit'>Ingresar información</button>
                </form>
            </div>
        </div>
    );
}

export default App;





    /*
    // Del lado del admin:
    // Buscar los productos a los que esta subscrito el usuario
    // Que pueda descargar los archivos
    // Que pueda actualizar la información de los archivos
    // Que pueda asignar permisos a los archivos a los usuarios
    // Que pueda eliminar 
    
    const blueprintUrl = 'https://jsonplaceholder.typicode.com';

    /*Url para personalizar de acuerdo al servicio que se requiera 
        /api/v1/admin
        /api/v1/user
        /api/v1/subscription
    const completeUrl= blueprintUrl + '';

    const completeUrl= blueprintUrl + '/users';

    const [users, setUsers] = useState();

    const fetchApi = async () => { // Función que pide los usuarios
        const response = await fetch(completeUrl)
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
                    { !users ? 'Cargando...': 
                    users.map((users, index) => {
                        return <li>{users.name}</li>
                    })}
                </ul>
            </div>
            
        </Fragment>
    );
}



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

 //Busqueda de texto
/* function forEach(node, callback) {
    Array.prototype.forEach.call(node.childNodes, callback);
}

function searchText(container, search) {

    var total = 0;
    var reg = new RegExp("(" + search + ")", "gi");

    var cleanAllSearchSpans = function (parentNode) {
        forEach(parentNode, function (node) {
            if (node.nodeType === 1) {
                if (
                    node.nodeName === "SPAN" &&
                    node.dataset.search === "true"
                ) {
                    parentNode.replaceChild(
                        document.createTextNode(node.innerText),
                        node
                    );
                } else {
                    cleanAllSearchSpans(node);
                }
            }
        });
    };

    var highlightSearchInNode = function (parentNode, search) {
        forEach(parentNode, function (node) {
            if (node.nodeType === 1) {
                highlightSearchInNode(node, search);
            } else if (
                node.nodeType === 3 &&
                reg.test(node.nodeValue)
            ) {
                var matches = node.nodeValue.match(reg);
                var span = document.createElement("span");
                span.dataset.search = "true";
                span.innerHTML = node.nodeValue.replace(reg, "$1");
                parentNode.replaceChild(span, node);
                total += matches.length;
            }
        });
    };

    cleanAllSearchSpans(container);
    // Normalizar el contenedor para eliminar los nodos hermanos de tipo Text
    container.normalize();
    highlightSearchInNode(container, search);

    return total;
} */


//Ejemplo descarga de archivos
/* $(function () {
	function downloadLink(id) {
    	var ajaxOptions = {
    		url: 'http://httpbin.org/status/' + id
        };
        
        var res = $.ajax(ajaxOptions);
        
        function onAjaxDone(data) {
          
        		location.href = 'http://httpbin.org/bytes/1024';
        }
        
        function onAjaxFail() {
        	alert('Bad ID');
        }
        
        res
        	.done(onAjaxDone)
            .fail(onAjaxFail)
        ;
    }
    
	function onDownloadLinkClick(e) {
    	e.preventDefault();
        var $this = $(this);
        var id = $this.data('id');
        downloadLink(id);
    }
    
	$('.download-link').on('click', onDownloadLinkClick);
});


<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

<a href="#" data-id="200" class="download-link">Good ID</a>
<a href="#" data-id="400" class="download-link">Bad ID</a>


o

<a href="http://localhost/file.xml" download="file.xml">descargar</a>*/