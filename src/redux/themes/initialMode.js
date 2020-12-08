function getInitialMode() {
  const isReturningUser = "dark" in localStorage;
  const savedMode = JSON.parse(localStorage.getItem("dark"));
  if (isReturningUser) {
    if (savedMode) {
      document.body.classList.add("dark");
    }
    return savedMode;
  } else {
    return false;
  }
}
export default getInitialMode;
