import React, { useMemo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Cubby } from './models/Cubby';
import { RealmContext } from './models';

import { CubbyManager } from './components/CubbyManager';

const Stack = createNativeStackNavigator();

const { useQuery } = RealmContext;

export const App = () => {
  const result = useQuery(Cubby);

  const cubbies = useMemo(() => result.sorted('name'), [result]);

  return (
    // <CubbyManager cubbies={cubbies} />
    <Stack.Navigator>
      <Stack.Screen
        name="Cubby Manager"
        component={CubbyManager} // TODO: Figure out how to pass .tsx component here
        options={{ title: 'Welcome' }}
        initialParams={{ cubby: cubbies }}
      />
      {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
    </Stack.Navigator>
  )
};
