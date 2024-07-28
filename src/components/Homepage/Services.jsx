import { services } from '@/lip/services';
import React from 'react';
import ServiceCard from '../Cards/ServiceCard';

const Services = () => {
    console.log(services)
    return (
        <div className='grid grid-cols-3 gap-7'>
            {
                services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
            }
        </div>
    );
};

export default Services;