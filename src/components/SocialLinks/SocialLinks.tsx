const SocialLinks  = () => {
  return (
    <div className="d-flex flex-column gap-3">
      <h2 className="title">Ми у соц. мережах</h2>

      <div className="d-flex gap-3 flex-column flex-md-row">
        <a
          href="twitter.com/stripe"
          className="d-flex gap-3 p-2 text-decoration-none fw-medium Main__link"
        >
          <div className="icon icon--twiter"></div>
          twitter.com/stripe
        </a>

        <a
          href="facebook.com/StripeHQ"
          className="d-flex gap-3 p-2 text-decoration-none fw-medium Main__link"
        >
          <div className="icon icon--facebook"></div>
          facebook.com/StripeHQ
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
