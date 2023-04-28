import "../styles/currentmusic.css"
import icon from "../assets/icon/profile.jpg"

function singer() {
  var singername = " Imagine Dragons " 
  return singername
}

export function CurrentMusic() {
  return (
    <section className="currentMusicSection">
      <header className="d-flex justify-content-between align-items-center">
        <div className="location text-gray">SoundHub/ Artist/ Archive</div>
        <div className="user d-flex gap-3">
          <img
            src={icon}
            alt="foto de perfil"
            width={30}
            className="rounded-circle"
          />
          <div className="d-flex align-items-center gap-3 username">
            <span className="text-light"> Peter Pontocom</span>
            <span className="pontinho-verde"></span>
          </div>
        </div>
      </header>
      <div className="artist text-light">
        <span className="text-gray text-uppercase">Artist</span>
        <div className="artist-content">
          <span className="artist-name">
            {singer()}
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check"
                viewBox="0 0 16 16"
              >
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
              </svg>
            </i>
          </span>
          <div>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-play-fill"
                viewBox="0 0 16 16"
              >
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
              </svg>{" "}
              <span>Play</span>
            </a>{" "}
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check-all"
                viewBox="0 0 16 16"
              >
                <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
              </svg>{" "}
              <span>Following</span>
            </a>
          </div>
        </div>
      </div>
      <footer>
        <menu>
          <nav>
            <ul>
              <li>
                <a href="#">Popular</a>
              </li>
              <li>
                <a href="#">Tracks</a>
              </li>
              <li>
                <a href="#">Selilar</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">100M Followers</a>
              </li>
              <li>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-headphones"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5z" />
                  </svg>
                  {" 105,697.80 listenings "}
                </a>
              </li>
            </ul>
          </nav>
        </menu>
      </footer>
    </section>
  )
}
