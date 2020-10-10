import React, { useEffect } from 'react';
import { Container, LoadignIcon } from  './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import BarberLogo from '../../assets/barber.svg';

export default () => {
    const navigation = useNavigation();

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if(token){
                //Validar o token
                
            } else{
                navigation.navigate('SignIn')
            }
        }
        checkToken();
    }, []);
    return(
        <Container>
            <BarberLogo width="100%" height="160" />
            <LoadignIcon size="large" color="#FFFFFF" />
        </Container>
    );
}