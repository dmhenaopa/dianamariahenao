import { useEffect, Fragment, useState } from "react";


function App() {
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
    */
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

export default App;


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