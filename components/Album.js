function Album(props) {
  return (
    <React.Fragment>
      <div className="album-container">
        <img src={props.image} />
        <span>{props.name}</span>
      </div>
      <style jsx>{`
        .album-container {
          margin: 5px;
        }

        .album-container span {
          color: #b3b3b3;
          padding-top: 10px;
          font-size: 12px;
          font-weight: 900;
        }

        .album-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </React.Fragment>
  );
}

export default Album;
