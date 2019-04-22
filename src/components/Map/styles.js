import styled, { css } from 'styled-components/native'
import { Platform } from 'react-native'
export const LocationBox = styled.View`
    background: #6D3BD2;
    shadow-color: #000;
    shadow-offset: 0 0;
    shadow-opacity: 0.1;
    elevation: 1;
    border: 1px solid #ddd;
    border-radius: 25;
    flex-direction: row;

    ${Platform.select({
        ios: css`
            margin-top: 20px;
        `,
        android: css`
            margin-top: 20px;
            margin-left: 10px;
        `
    })}
`;

export const LocationText = styled.Text`
    margin: 8px 10px;
    font-size:14px;
    color: #fff;
`;

export const LocationTimeBox = styled.Text`
    background: #512c9e;
    padding: 3px 8px;
`;
export const LocationTimeText = styled.Text`
    margin: 8px 10px;
    text-align: center;
    font-size:12px;
    color: #fff;
`;

export const LocationTimeTextSmall = styled.Text`
    margin: 8px 10px;
    text-align: center;
    font-size:10px;
    color: #fff;
`;
export const Back = styled.TouchableOpacity`
    position: absolute;
    top: ${Platform.select({ios: 60, android:40})};
    left: 20px;
`;

