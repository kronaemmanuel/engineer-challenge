import {QueryClient, QueryClientProvider} from "react-query";
// TODO: remove devtools
import {ReactQueryDevtools} from 'react-query/devtools';

import Navbar from "./Navbar";
import Header from "./Header";
import Table from "./Table";

import "./index.css";

const queryClient = new QueryClient();

const App = () => (
  <div>
    <Navbar />
    <div className="w-full p-8">
      <Header />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <Table />
      </QueryClientProvider>
    </div>
  </div>
);

export default App;
