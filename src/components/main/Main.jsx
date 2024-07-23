import React, { useState, useRef } from 'react';
import './main.css';
import { Link } from 'react-router-dom';
import fenty from '../../assets/video/FENTY.mp4';
import mastiempoMobImg from '../../assets/images/mastiempomob.webp';
import mastiempoLaptop from '../../assets/images/mastiempo.avif';
import MainSlider from './MainSlider';
import palermo from '../../assets/images/palermo.avif';
import footbal from '../../assets/images/footbal.jpeg';
import riri from '../../assets/images/riri.avif';
import speedcat from '../../assets/images/speedcat.avif';

const Main = () => {
  const videoRef = useRef(null);

  const [isTextOpen, setIsTextOpen] = useState(true);
  const [isClosedText, setIsClosedText] = useState(false);

  const handleVideoEnded = () => {
    videoRef.current.play();
  };

  const handleOpenText = () => {
    setIsTextOpen(false);
    setIsClosedText(true);
  };

  const handleClosedText = () => {
    setIsClosedText(false);
    setIsTextOpen(true);
  };

  return (
    <div>
      <div className="main__video">
        <video
          ref={videoRef}
          className="video"
          controls
          src={fenty}
          autoPlay
          muted
          onEnded={handleVideoEnded}
        ></video>
      </div>
      <div className="main__forever-faster">
        <div className="main__forever-faster_title">
          <p>Forever. Faster.</p>
        </div>
        <div className="main__forever-faster_text">
          <p>See the game like we do</p>
        </div>
        <div className="main__forever-faster_links">
          <div className="main__forever-faster_link">
            <Link className="main__forever-faster_link-btn">
              Shop running shoes
            </Link>
          </div>
          <div className="main__forever-faster_link">
            <Link className="main__forever-faster_link-btn">
              Explore running
            </Link>
          </div>
        </div>
      </div>
      <div className="main__mastiempo-laptop">
        <div className="main__mastiempo-laptop_img">
          <img src={mastiempoLaptop} alt="mas tiempo" />
        </div>
        <div className="main__mastiempo-laptop_container">
          <div className="main__mastiempo-laptop_title">
            <p>Puma x más tiempo</p>
          </div>
          <div className="main__mastiempo-laptop_text">
            <p>Nothing about the dove</p>
          </div>
          <div className="main__mastiempo-laptop_btn">
            <Link className="main__mastiempo-laptop_btn-link">Shop now</Link>
          </div>
        </div>
      </div>
      <div className="main__mastiempo-mob">
        <div className="main__mastiempo-mob_img">
          <img src={mastiempoMobImg} alt="mas tiempo" />
        </div>
        <div className="main__mastiempo-mob_title">
          <p>Puma x más tiempo</p>
        </div>
        <div className="main__mastiempo-mob_text">
          <p>Nothing about the dove</p>
        </div>
        <div className="main__mastiempo-mob_btn">
          <Link className="main__mastiempo-mob_btn-link">Shop now</Link>
        </div>
      </div>
      <div className="main__promo">
        <div className="main__promo-title">
          <p>Up to 50% off + up to 20% extra</p>
        </div>
        <div className="main__promo-text">
          <p>
            Get EXTRA 20% OFF selected styles on orders over 90 € in the End of
            Summer Sale. Use code:
          </p>
        </div>
        <div className="main__promo-coupon">
          <p>EXTRA</p>
        </div>
        <div className="main__promo-btn1">
          <Link className="main__promo-btn-link">Shop now</Link>
        </div>
        <div className="main__promo-btn2">
          <Link className="main__promo-btn-link">Shop all sales</Link>
        </div>
        <div className="main__promo-terms">
          <p>Promo terms</p>
        </div>
      </div>
      <div>
        <MainSlider />
      </div>
      <div className="main__latest-drops">
        <div className="main__latest-drops_title">
          <p>Latest Drops</p>
        </div>
        <div className="main__latest-drops_items">
          <div className="main__latest-drops_items-item">
            <div className="main__latest-drops_items-item_img">
              <img src={palermo} alt="pic" />
            </div>
            <div className="main__latest-drops_items-item_title">
              <p>Palermo</p>
            </div>
            <div className="main__latest-drops_items-item_text">
              <p>Rewrite the classics</p>
            </div>
            <Link className="main__latest-drops_items-item_link">Shop now</Link>
          </div>
          <div className="main__latest-drops_items-item">
            <div className="main__latest-drops_items-item_img">
              <img src={footbal} alt="pic" />
            </div>
            <div className="main__latest-drops_items-item_title">
              <p>Winning formula</p>
            </div>
            <div className="main__latest-drops_items-item_text">
              <p>Ultra, future & king</p>
            </div>
            <Link className="main__latest-drops_items-item_link">Shop now</Link>
          </div>
          <div className="main__latest-drops_items-item">
            <div className="main__latest-drops_items-item_img">
              <img src={riri} alt="pic" />
            </div>
            <div className="main__latest-drops_items-item_title">
              <p>Fenty x puma</p>
            </div>
            <div className="main__latest-drops_items-item_text">
              <p>The creeper phatty in session</p>
            </div>
            <Link className="main__latest-drops_items-item_link">Shop now</Link>
          </div>
          <div className="main__latest-drops_items-item">
            <div className="main__latest-drops_items-item_img">
              <img src={speedcat} alt="pic" />
            </div>
            <div className="main__latest-drops_items-item_title">
              <p>Speedcat</p>
            </div>
            <div className="main__latest-drops_items-item_text">
              <p>High-speed style</p>
            </div>
            <Link className="main__latest-drops_items-item_link">Shop now</Link>
          </div>
        </div>
      </div>
      <div className="main__text-to-open">
        <div className="main__text-to-open_title">
          <p>Puma - clothing, shoes and accessories</p>
        </div>
        {isTextOpen && (
          <div className="main__text-to-open_open-text">
            <p>
              Welcome to PUMA - the Fastest Sports Brand in the World. We’re not
              just fast. We’re brave. We’re confident. We’re determined. We’re
              joyful. We are all the elements that make a sports person truly
              excellent. And you are too! When you kit up with the best gear out
              there, you’re committing to giving it your all...
              <span onClick={handleOpenText}>Read more</span>
            </p>
          </div>
        )}
        {isClosedText && (
          <div className="main__text-to-open_closed-text">
            <p className="main__text-to-open_closed-text-all">
              <span>Welcome to PUMA</span> - the Fastest Sports Brand in the
              World.
            </p>
            <p className="main__text-to-open_closed-text-all">
              We’re not just fast. We’re brave. We’re confident. We’re
              determined. We’re joyful. We are all the elements that make a
              sports person truly excellent. And you are too! When you kit up
              with the best gear out there, you’re committing to giving it your
              all – on the track, on the pitch, in the pool and on the court.
              PUMA provides athletes with everything they need to play sport,
              whether that’s professionally, semi-professionally or for fun in
              your local league. PUMA’s strong heritage and credibility in
              football and motorsports makes us your trusted partner when
              searching <span>for apparel and shoes</span> that allow you to
              perform. As Andre De Grasse puts it: “I always think that, I am
              Forever. Faster.”
            </p>
            <p className="main__text-to-open_closed-text-all">
              <span>Since 1948</span>, we have created game-changing moments in
              sport and have become an important teammate to legendary athletes
              and teams. We collaborate with the world’s most iconic players and
              teams and strive to inspire, innovate and give you the edge. When
              you choose PUMA clothes and shoes, you choose cutting-edge
              technology. You choose respect for human rights and recycled
              materials. You choose style and comfort. You choose style and
              swagger.
            </p>
            <p className="main__text-to-open_closed-text-all">
              PUMA goes further than achieving impressive financial stats and
              strives to be a leader in their approach to
              <span>sustainability</span>. PUMA openly accepts the
              responsibility of leading the way to a better world and backs this
              up with an honest approach. PUMA believes in integrating
              sustainability into every aspect of product manufacture to make it
              easier for everyone to help save the planet and reduce our impact
              on the world we love. After all, there’s only one forever – let’s
              make it better.
            </p>
            <p className="main__text-to-open_closed-text-all">
              Team sport is loved in every corner of the world and PUMA is right
              there with you, whether you love to follow, watch or play the
              game. We stand on the same playing field as the fastest athletes
              on the planet, and you can too because sport has the power to
              transform and empower us.
            </p>
            <span
              onClick={handleClosedText}
              className="main__text-to-open_closed-text-btn"
            >
              Read less
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
