import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import Singin from '../pages/Singin'
import Mega from '../pages/Mega'
import Quina from '../pages/Quina'
import Ajuda from '../pages/Ajuda'

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Singin"
                component={Singin}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Mega"
                component={Mega}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Quina"
                component={Quina}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Ajuda"
                component={Ajuda}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}