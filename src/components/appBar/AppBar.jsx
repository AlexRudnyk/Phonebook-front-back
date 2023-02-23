import { AppWrapper, AppTitle } from './AppBar.styled';
import { AuthNav } from 'components/authNav/AuthNav';
import { UserMenu } from 'components/userMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <AppWrapper>
        <AppTitle>Phonebook</AppTitle>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </AppWrapper>
    </>
  );
};
