function Footer() {
  return (
    <>
      {navigator.language === "cs-CZ" ? (
        <footer>
          <p className="copyright-shit">&copy; xD HonzoRaptorův web 2023 - {new Date().getFullYear()}</p>
          <p>Něco na tomhle webu nesedí? <a href="https://github.com/Honzoraptor31415/Portfolio">Oprav to na  Githubu.</a></p>
        </footer>
      ) : (
        <footer>
          <p className="copyright-shit">&copy; xD Honzoraptor's website 2023 - {new Date().getFullYear()}</p>
          <p>Any bugs on this website? <a href="https://github.com/Honzoraptor31415/Portfolio">Fix them on Github.</a></p>
        </footer>
      )}
    </>
  )
}

export default Footer