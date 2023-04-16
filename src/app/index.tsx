import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { AppContainer } from "../AppContainer";
import { store, persistor } from "../redux/store";
import { AppRouter } from "./route";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppContainer>
                    <AppRouter />
                </AppContainer>
            </PersistGate>
        </Provider>
    )
}

export default App;