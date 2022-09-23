import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { InputField } from '../../components/InputField';
import { useAppContext } from '../../contexts/app';
import { frontApi } from '../../libs/frontApi';
import styles from '../../styles/Login.module.css';
import { Tenant } from '../../types/Tenant';

const Login = (data: Props) => {
  const { tenant, setTenant } = useAppContext();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setTenant(data.tenant);
  }, [])

  const handleSubmit = () => {

  }

  const handleSignUp = () => {
    router.push(`/${data.tenant.slug}/signup`);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Login | {data.tenant.name}</title>
      </Head>

      <Header
        color={data.tenant.mainColor}
        backHref={`/${data.tenant.slug}`}
      />

      <div className={styles.header}>{data.tenant.name}</div>

      <div
        className={styles.subtitle}
        style={{ borderBottomColor: data.tenant.mainColor }}
      >
        Use suas credenciais para realizar o login.
      </div>
      <div className={styles.line}></div>

      <div className={styles.formArea}>

        <div className={styles.inputArea}>
          <InputField
            color={data.tenant.mainColor}
            placeholder="E-mail"
            value={email}
            onChange={setEmail}
          />
        </div>

        <div className={styles.inputArea}>
          <InputField
            color={data.tenant.mainColor}
            placeholder="Senha"
            value={password}
            onChange={setPassword}
            password
          />
        </div>

        <div className={styles.inputArea}>
          <Button
            color={data.tenant.mainColor}
            label="Login"
            onClick={handleSubmit}
            fill
          />
        </div>

      </div>

      <div
        className={styles.forgetArea}
        style={{ borderBottomColor: data.tenant.mainColor }}
      >
        Esqueceu sua senha?
        <Link href={`/${data.tenant.slug}/forget`}>
          <a style={{ color: data.tenant.mainColor }}>
            Clique aqui
          </a>
        </Link>
      </div>
      <div className={styles.line}></div>

      <div className={styles.signUpArea}>
        <Button
          color={data.tenant.mainColor}
          label="Quero me cadastrar"
          onClick={handleSignUp}
        />
      </div>
    </div>
  );
}

export default Login

type Props = {
  tenant: Tenant
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug } = context.query;
  const api = frontApi();

  const tenant = await api.getTenant(tenantSlug as string);
  if (!tenant) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      tenant
    }
  }
}