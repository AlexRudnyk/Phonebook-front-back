import { Layout } from './layout/Layout';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ContactsView } from '../views/contactsView/ContactsView';
import RegistrationView from 'views/RegistrationView';
import LoginView from 'views/LoginView';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { RestrictedRoute } from './restricredRoute/RestrictedRoute';
import { PrivateRoute } from './privateRoute/PrivateRoute';
import { Container } from './App.styled';

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PrivateRoute component={ContactsView} redirectTo="/login" />
              }
            />
            <Route
              path="registration"
              element={
                <RestrictedRoute component={RegistrationView} redirectTo="/" />
              }
            />
            <Route
              path="login"
              element={<RestrictedRoute component={LoginView} redirectTo="/" />}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Container>
    )
  );
}
