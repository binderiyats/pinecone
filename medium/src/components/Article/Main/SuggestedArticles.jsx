export default function SuggestedArticles() {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="suggested-articles">
        <div className="d-flex justify-content-around">
          <img
            src="https://miro.medium.com/focal/112/112/50/50/1*IPZF1hcDWwpPqOz2vL7NxQ.png"
            width={"20px"}
            style={{ borderRadius: "10px" }}
            alt=""
          />
          <div className="suggested-author">Kurtis Pykes</div>
          <div className="suggested-author">in The Startup</div>
        </div>
      </div>
      <img
        src="https://miro.medium.com/focal/112/112/50/50/1*IPZF1hcDWwpPqOz2vL7NxQ.png"
        width={"56px"}
      />
    </div>
  );
}
