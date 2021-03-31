import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {Dimensions, PixelRatio} from "react-native";
const {width, height} = Dimensions.get('window');

export default class ManageFont{
    static getSize(size){
        return RFValue(size, 600);
    }
}

const widthToDp = number => {
    let givenNumber = typeof number === 'number'? number : parseFloat(number);
    return PixelRatio.roundToNearestPixel((width * givenNumber) / 100)

}



// const getFontSize = (size) => {
//     return (
//      RFValue(size)
//     );
// }
//
// export default getFontSize;
