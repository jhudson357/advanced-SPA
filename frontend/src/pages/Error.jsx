import MainNavigation from "../components/MainNavigation"

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <div>
        <h1>An error occured!</h1>
        <p>Could not find this page.</p>
      </div>
    </>
  )
}

export default ErrorPage
