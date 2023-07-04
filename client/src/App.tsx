import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from 'apollo-link-context';
import Users from './components/Users';
import Landing from './components/Landing';
import Signup from './pages/Signup';
import Login from './pages/Login';
import IsAuthenticated from './components/isAuthenticated';

const httpLink = new HttpLink({ uri: 'http://localhost:4000' });
const authLink = setContext(async (req, { headers }) => {
  const token = localStorage.getItem('token');

  return {
    ...headers,
    headers: {
      Authorization: token ? `Bearer ${token}` : null,
    },
  };
});

const link = authLink.concat(httpLink as any);
const client = new ApolloClient({
  link: link as any,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route
            path='/users'
            element={
              <IsAuthenticated>
                <Users />
              </IsAuthenticated>
            }
          />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
