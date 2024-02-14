import { useSelector } from 'react-redux';
import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectHotelById } from '../features/hotels/hotelsSlice';
import HotelDetail from '../features/hotels/HotelDetail';
import CommentsList from '../features/comments/CommentsList';
import SubHeader from '../components/SubHeader';

const HotelDetailPage = () => {
    const { hotelId } = useParams();
    const hotel = useSelector(selectHotelById(hotelId));
    console.log('hotel', hotel);

    return (
        <Container>
            <SubHeader current={hotel.name} detail={true} />
            <Row>
                <HotelDetail hotel={hotel} />
                <CommentsList hotelId={hotelId} />
            </Row>
        </Container>
    );
};

export default HotelDetailPage;
