function Homepage() {
  return (
    <div className="homepage">
      <img src="/avatar-jessica.jpeg" alt="profile-picture" />
      <h2>Jessica Randall</h2>
      <h4 className="location">London, United Kingdom</h4>
      <p>"Front-end developer and avid reader."</p>

      <div className="social-links">
        <button>Github</button>
        <button>Frontend Mentor</button>
        <button>Linkedin</button>
        <button>Twitter</button>
        <button>Instagram</button>
      </div>
    </div>
  );
}

export default Homepage;
