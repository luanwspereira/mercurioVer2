import {createStackNavigator, createAppContainer} from 'react-navigation';
import Map from '../src/components/Map';
import PontosInfo from '../src/components/PontosInfo';
import Details from '../src/components/Details';


const StackNav = createStackNavigator({
    Main: Map,
    PontosPage: PontosInfo,
    DetailsPage: Details,
}, {
    defaultNavigationOptions:{
        header: null,
    },
    
});

const App = createAppContainer(StackNav);

export default App;