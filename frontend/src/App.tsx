import {QueryClient, QueryClientProvider} from "react-query";
// TODO: remove devtools
import {ReactQueryDevtools} from 'react-query/devtools';

import Navbar from "./components/Navbar";
import Table from "./components/Table";

import "./index.css";

const queryClient = new QueryClient();

const App = () => (
  <div>
    <Navbar />
    <div className="w-full p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Policies</h1>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <Table />
      </QueryClientProvider>
    </div>
  </div>
);

export default App;
