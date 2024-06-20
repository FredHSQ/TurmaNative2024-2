import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { Cart } from '../../Pages/Cart';
import { Shop } from '../../Pages/Shop';
import { Skill } from '../../Pages/Skills';
import CartIcon from '../../assets/icons/cartIcon.png';
import ShopIcon from '../../assets/icons/shopIcon.png';
import SkillsIcon from '../../assets/icons/skillsIcon.png';

const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList = {
    Skill: undefined,
    Shop: undefined,
    Cart: undefined
}

export function BottomTabRoutes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: '#000', paddingBottom: 2 },
                tabBarActiveTintColor: '#FFF',
                tabBarInactiveTintColor: '#aaa'
            }}

        >
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => {
                        return <Image
                            resizeMode='contain'
                            source={SkillsIcon}
                            style={{ tintColor: color, width: 30 }}
                        />
                    }
                }}
                name="Skill"
                component={Skill}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => {
                        return <Image
                            resizeMode='contain'
                            source={ShopIcon}
                            style={{ tintColor: color, width: 30 }}
                        />
                    }
                }}
                name="Shop"
                component={Shop}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => {
                        return <Image
                            resizeMode='contain'
                            source={CartIcon}
                            style={{ tintColor: color, width: 30 }}
                        />
                    }
                }}
                name="Cart"
                component={Cart}
            />
        </Tab.Navigator>
    );
}