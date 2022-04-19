import { ProviderAuth } from '@hooks/useAuth';
import { ProviderError } from '@hooks/useErrorLogin';
import MainLayout from '@layout/MainLayout';
import '@styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ProviderAuth>
        <ProviderError>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ProviderError>
      </ProviderAuth>
    </>
  );
}

export default MyApp;
