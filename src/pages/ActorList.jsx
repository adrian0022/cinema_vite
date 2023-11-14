import placeholder from "@images/placeholder.jpg";

const ActorList = ({ actors }) => {
  return (
    <div className="actors-section content-wrapper">
      {actors
        ? actors.map((actor) => {
            return (
              <div className="actor" key={actor.credit_id}>
                <img
                  src={
                    actor?.profile_path
                      ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                      : placeholder
                  }
                  alt=""
                />
                <p>{actor.original_name}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default ActorList;
