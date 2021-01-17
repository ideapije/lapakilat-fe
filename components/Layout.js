import Head from 'next/head'

export const Layout = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-gray-200 space-y-2">
      <Head>
        <title>{title || ''}{` | ${process.env.NEXT_PUBLIC_ENV_APP_NAME}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='sm:max-w-xl sm:mx-auto'>
        <main className='sm:max-w-xl sm:mx-auto bg-white shadow-md'>
          <div className='min-h-screen p-6'>
            {children}
          </div>
        </main>
        <footer className='sticky bottom-0 text-center p-3 border bg-white'>
          &copy;&nbsp;{process.env.NEXT_PUBLIC_ENV_APP_NAME}
        </footer>
      </div>
    </div>
  )
}