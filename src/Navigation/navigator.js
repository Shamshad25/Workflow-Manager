// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import AppNavigator from './appNavigator';
// import AuthNavigator from './auth-navigator';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '../redux/slices/authSlice';

// const AppRoute = () => {

//     const [isLoggedIn, setIsLoggedIn] = React.useState(true);

//     return (
//         <NavigationContainer>
//             {/* Conditional stack navigator rendering based on login state */}

//             {
//                 isLoggedIn ? <AuthNavigator /> : <AppNavigator />
//             }
//         </NavigationContainer>
//     )
// }

// export default AppRoute;