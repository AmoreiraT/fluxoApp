import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-native-paper';
import { InputField } from './src/shared/components/InputField';
import { NeumorphicButton } from './src/shared/components/NeumorphicButton';
import { ThemeProvider } from './src/themes';

const App: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');

  return (
    <Provider>
      <ThemeProvider>
        <View style={{ padding: 16 }}>
          <InputField
            label="Email"
            value={email}
            onChange={setEmail}
            type="text"
          />
          <InputField
            label="Senha"
            value={pass}
            onChange={setPass}
            type="password"
          />
          <NeumorphicButton title="Entrar" onPress={() => { }} />
        </View>
      </ThemeProvider>
    </Provider>
  );
};

export default App;