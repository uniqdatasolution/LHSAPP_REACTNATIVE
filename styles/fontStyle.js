import {Platform} from "react-native";

export default {
  WorkSansBold: Platform.OS === 'ios' ? 'WorkSans-Bold' : 'WorkSans-Bold',
  WorkSansBlack: Platform.OS === 'ios' ? 'WorkSans-Black' : 'WorkSans-Black',
  WorkSansRegular: Platform.OS === 'ios' ? 'WorkSans-Regular' : 'WorkSans-Regular',
  OpenSansRegular: Platform.OS === 'ios' ? 'OpenSans-Regular' : 'OpenSans-Regular',
  OpenSansBold: Platform.OS === 'ios' ? 'OpenSans-Bold' : 'OpenSans-Bold',
  OpenSansLight: Platform.OS === 'ios' ? 'OpenSans-Light' : 'OpenSans-Light',
};

 