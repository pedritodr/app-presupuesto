/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import PresupuestoState from './src/context/presupuesto/PresupuestoState';
import PresupuestoScreem from './src/screens/PresupuestoScreem';

function App(): JSX.Element {
  return (
    <PresupuestoState>
      <PresupuestoScreem />
    </PresupuestoState>
  );
}

export default App;
