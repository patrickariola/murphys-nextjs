'use client';



export default function Footer() {
  return (
    <footer className="footer fixed">
      <div className="container">
        <div className="row pt-3 pb-3">
          <div className="col">
            <strong>Lunch</strong>
            <hr />
            <p>Monday - Friday: 11:00am - 2:30pm</p>
            <p>Saturday - Sunday: Not open</p>
          </div>
          <div className="col">
            <strong>Bar</strong>
            <hr />
            <p>Monday - Friday: 11:00am to closing</p>
            <p>Saturday - Sunday: Not open</p>
          </div>
          <div className="col">
            <strong>Dinner</strong>
            <hr />
            <p>Monday - Friday: 5:00pm - 9:00pm</p>
            <p>Saturday - Sunday: Not open</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
