import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const AllServices = () => {

    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
		fetch("http://localhost:5000/api/v1/services")
			.then((res) => res.json())
			.then((data) => setAllServices(data));
	}, []);

    return (
		<div className="mt-8">
			<div className="text-center">
				<h3 className="text-3xl text-orange-600">Our Services</h3>
				<h2 className="text-xs">
					the majority have suffered alteration in some form, by
					injected humour, or randomised <br /> words which don&apos;t
					look even slightly believable.{" "}
				</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{allServices.map((service) => (
					<ServiceCard
						key={service._id}
						service={service}
					></ServiceCard>
				))}
			</div>
		</div>
	);
};

export default AllServices;