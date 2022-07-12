import image from "../../assets/portfolio.png";
import background from "../../assets/photo.avif";
function ProfilePhoto() {
  return (
    <div>
      <header>
        {" "}
        <img
          src={background}
          alt="background"
          style={{ width: "100%",height:'400px' }}
        />{" "}
      </header>
      <div style={{ textAlign: "center" }}>
        <img
          src={image}
          height={400}
          width={400}
          style={{
            boxShadow: "0px 0px 20px #ffff7c",
            borderRadius: "50%",
            marginTop: "-100px",
          }}
          alt="photoprofile"
        />
      </div>
    </div>
  );
}

export default ProfilePhoto;