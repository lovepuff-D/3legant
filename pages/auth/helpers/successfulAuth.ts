export default () => {
    sessionStorage.setItem('isAuth', 'true')
    setTimeout(() => {
        navigateTo('/', { replace: true })
    }, 1500);
}
