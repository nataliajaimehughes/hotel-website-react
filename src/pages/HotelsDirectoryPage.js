import { Container } from 'reactstrap';
import HotelsList from '../features/hotels/HotelsList';
import SubHeader from '../components/SubHeader';

const HotelsDirectoryPage = () => {
    return (
        <Container>
            <SubHeader current='Directory' />
            <HotelsList />
        </Container>
    );
};

export default HotelsDirectoryPage;
