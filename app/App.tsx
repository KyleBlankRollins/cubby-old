import React, { useMemo } from 'react';

import { Cubby } from './models/Cubby';
import { RealmContext } from './models';
import { Text, View } from 'react-native';

import { CubbyManager } from './components/CubbyManager';

const { useQuery } = RealmContext;

export const App = () => {
  const result = useQuery(Cubby);

  const cubbies = useMemo(() => result.sorted('name'), [result]);

  return (
    <CubbyManager cubbies={cubbies} />
  )
};
