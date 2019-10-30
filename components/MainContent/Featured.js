import { featuredStyles } from "../../styles/Featured";

function Featured(props) {
  return (
    <React.Fragment>
      <div className='featured-container'>
        <img src={props.image} />
      </div>

      <style jsx>{featuredStyles}</style>
    </React.Fragment>
  );
}

export default Featured;
