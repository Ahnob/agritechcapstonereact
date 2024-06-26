import "./TeamMember.css";

function TeamMember({ image, name, role }) {
  return (
    <div className="teamCards">
      <div className="teamCard">
        <div className="image-container">
          <img src={image} alt="" className="teamImg" />
        </div>
        <p className="teamName">{name}</p>
        <p className="teamRole">{role}</p>
      </div>
    </div>
  );
}

export default TeamMember;
