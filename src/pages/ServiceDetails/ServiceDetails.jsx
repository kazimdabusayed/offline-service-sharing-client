import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLoaderData, useParams } from 'react-router-dom';
import axios from 'axios';

const ServiceDetails = () => {

    const { user } = useContext(AuthContext);
	const email = user?.email;
    console.log(email);

	const service = useLoaderData();
	const {
		_id,
		serviceName,
		area,
		price,
		servicePhoto,
		providerName,
		providerImage,
		description,
	} = service;

	const handleAddBook = () => {
		const cartNewProduct = {
			email,
			name,
			brandName,
			type,
			rating,
			price,
			photo,
		};
		// add to book
		axios
			.post("http://localhost:5000/api/v1/book")
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					Swal.fire({
						title: "Success!",
						text: "Product Added To Cart Succssfully",
						icon: "success",
						confirmButtonText: "Ok",
					});
				}
			});
	};

    return (
        <div>
            {serviceName}
        </div>
    );
};

export default ServiceDetails;