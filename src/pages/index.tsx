import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Layout from '../components/Layout'

const Home: NextPage = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <button className="bg-primary-medium text-red-500">
        {t('Home.Button')}
      </button>
    </Layout>
  )
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})
export default Home
