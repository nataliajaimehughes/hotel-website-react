import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import HotelCard from './HotelCard';
import { selectAllHotels } from './hotelsSlice';

const HotelsList = () => {
    const hotels = useSelector(selectAllHotels);
    console.log('hotels:', hotels);

    return (
        <Row className='ms-auto'>
            {hotels.map((hotel) => {
                return (
                    <Col md='5' className='m-4' key={hotel.id}>
                        <HotelCard hotel={hotel} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default HotelsList;
