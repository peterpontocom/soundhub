export function AllMusic(pros: num, photo, artistName, title, time, like) {
  return (
    <div className="container-music d-flex justify-content-between align-items-center text-gray fw-medium">
      <div className="artistName d-flex gap-3 align-items-center">
        <span>{pros.num}</span>
        <span>
          <img
            src={pros.photo}
            alt="music_cover"
            width={50}
            className="rounded-2"
          />
        </span>
        <span>{pros.artistName}</span>
      </div>
      <div className="title">
        <span>{pros.title}</span>
      </div>
      <div className="like-time d-flex gap-5">
        <span>{pros.time}</span>
        <span className="btn-like">{pros.like}</span>
      </div>
      <div className="dots flex-row">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  )
}
