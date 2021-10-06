import seattle from "./photos/seattle_video.jpg";
import { Link } from "react-router-dom";
function MyPod() {
  return (
    <div>
      <body>
        <h1>Welcome to myPod</h1>
        <p>
          Welcome to the place to show off your iPod, wherever you might be.
          Wanna join the fun? All you need is any iPod from the early classic
          iPod to the latest iPod Nano, the smallest iPod Shuffle to the largest
          iPod Video, and a digital camera. Just take a snapshot of your iPod in
          your favorite location and we'll be glad to post it on myPod. So, what
          are you waiting for?
        </p>
        <h2>Seattle, Washington</h2>
        <p>
          Me and my iPod in Seattle! You can see the Space Needle. You can't see
          the 628 coffee shops.
        </p>
        <p>
          <img src={seattle} />
          <Link to="something/foo.html">Something</Link>
        </p>
      </body>
    </div>
  );
}

export default MyPod;
