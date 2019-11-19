import React from 'react'
import Swal from 'sweetalert2'
import notFound from '../../assets/img/404.jpg';

const Notfound = () => {

    console.log(notFound);

    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
    })

    return (
        <div className="container">
            <img src={notFound} alt="Not Found" class="centerImage"/>;
        </div>
    )
}
export default Notfound