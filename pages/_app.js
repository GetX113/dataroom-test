import { createWrapper } from 'next-redux-wrapper';
import { Provider } from 'react-redux'
import store from '../store/store'
import '../styles/globals.css'
import App, { Container } from "next/app";

class MyApp extends App {
  render() {
  const { Component, pageProps } = this.props;
  return (<div>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </div>)
    
  }
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
