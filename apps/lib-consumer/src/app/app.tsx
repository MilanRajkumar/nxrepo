// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import {CommonUi} from '@lib-consumer/common-ui'

export function App() {
  return (
    <>
      {/* <NxWelcome title="lib-consumer" /> */}
      {/* <div /> */}
      <CommonUi/>
    </>
  );
}

export default App;
