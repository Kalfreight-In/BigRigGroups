import React from 'react';  
export default function Mapnew() {
  return (
    <>
      <div id="mainnewmap" className='mt-28 flex md:ml-16 ml-0'> 
        <div
          id="innermainnewmap"
          className="flex lg:flex-row flex-col justify-start "
        >
          <div id="firstnewmap">
            {/* <h1 className="text-5xl font-bold text-Heading ml-20 pt-8 mb-4">
              Where we work
            </h1> */}
            <img
              src="https://raw.githubusercontent.com/Kalfreight-In/BigRigGroups/main/src/assets/Images/newmapimage.png"
              alt=""
              className="border-black border-r pr-4 max-w-full  h-auto"
            />
          </div>

          <div id="secondnewmap" className="2xl:mt-28 mt-2 2xl:ml-16 ml-0 leading-9">
            <h1 className="text-4xl font-semibold text-Heading px-12">Location</h1>

            <div id="list" className="mt-8 font-medium xl:ml-6 ml-0 w-max">
              <ul className='px-12'>
                <a
                  href="https://www.google.com/maps/place/15083+Valley+Blvd,+Fontana,+CA+92335,+USA/@34.0693237,-117.4780847,17z/data=!3m1!4b1!4m5!3m4!1s0x80c34b41ac34562d:0x6e84801266440fc5!8m2!3d34.0693237!4d-117.475896"
                  target="_blank"
                >
                  <li className='hover:text-Lightblue'>&#9679; &nbsp; Fontana CA 92335</li>
                </a>
                <a
                  href="https://www.google.com/maps/place/11184+Almond+Ave,+Fontana,+CA+92337,+USA/@34.0508997,-117.4959756,17z/data=!3m1!4b1!4m5!3m4!1s0x80c34b2dcd2e248f:0x1e725243a0a60dd8!8m2!3d34.0508997!4d-117.4937869"
                  target="_blank"
                >
                  <li className='hover:text-Lightblue'>&#9679; &nbsp; Fontana CA 92337</li>
                </a>
                <a
                  href="https://www.google.com/maps/place/Kal+Trailers+%26+Leasing,+Tires,+Kal+Partz/@32.7525584,-97.0554258,17z/data=!4m9!1m2!2m1!1sb,+600+109th+St,+Arlington,+TX+76011,+USA!3m5!1s0x864e87a1adfa9395:0xa6c1a29fe22014b5!8m2!3d32.7522842!4d-97.0533732!15sCiliLCA2MDAgMTA5dGggU3QsIEFybGluZ3RvbiwgVFggNzYwMTEsIFVTQZIBEWxvZ2lzdGljc19zZXJ2aWNl"
                  target="_blank"
                >
                  <li className='hover:text-Lightblue'>&#9679; &nbsp; Arlington TX 76011</li>
                </a>
                <a
                  href="https://www.google.com/maps/place/10156+Live+Oak+Ave,+Fontana,+CA+92335,+USA/@34.0685144,-117.4825613,17z/data=!3m1!4b1!4m5!3m4!1s0x80c34b3fc6e50489:0xde8aefe027f7319!8m2!3d34.0685144!4d-117.4803726"
                  target="_blank"
                >
                  <li className='hover:text-Lightblue'>&#9679; &nbsp;  Fontana CA 92335</li>
                </a>
                <a
                  href="https://www.google.com/maps/place/2025+English+Ave,+Indianapolis,+IN+46201,+USA/@39.7591968,-86.1289827,17z/data=!3m1!4b1!4m5!3m4!1s0x886b507bb4588c77:0xd0b2698ed1a53b6d!8m2!3d39.7591968!4d-86.126794"
                  target="_blank"
                >
                  <li className='hover:text-Lightblue'>&#9679; &nbsp; Indianapolis IN 46201</li>
                </a>
                <a
                  href="https://www.google.com/maps/place/15+Frontage+Rd,+Asbury,+NJ+08802,+USA/@40.6414871,-74.9932845,17z/data=!3m1!4b1!4m5!3m4!1s0x89c475135348f553:0xe4a6f37f018d1695!8m2!3d40.6414871!4d-74.9910958"
                  target="_blank"
                >
                  <li className='hover:text-Lightblue'>&#9679; &nbsp;  Hampton NJ 08827</li>
                </a>
                <a
                  href="https://www.google.com/maps/place/3435+Jonesboro+Rd+SE,+Atlanta,+GA+30354,+USA/@33.6608207,-84.3749728,17z/data=!3m1!4b1!4m13!1m7!3m6!1s0x88f4fdf304d4cbb7:0xf1f5c6fa319c16be!2s3435+Jonesboro+Rd+SE,+Atlanta,+GA+30354,+USA!3b1!8m2!3d33.6608207!4d-84.3727841!3m4!1s0x88f4fdf304d4cbb7:0xf1f5c6fa319c16be!8m2!3d33.6608207!4d-84.3727841"
                  target="_blank"
                >
                  <li className='hover:text-Lightblue'>&#9679; &nbsp;  Atlanta GA 30354</li>
                </a>
                {}
                <a
                  href="https://www.google.com/maps/place/1080+W+Henri+De+Tonti+Blvd,+Springdale,+AR+72762,+USA/@36.1781444,-94.2546425,17z/data=!4m5!3m4!1s0x87c972b7967b5855:0xc59619ee1ceb2cc0!8m2!3d36.1781444!4d-94.2520823"
                  target="_blank"
                >
                  <li className='hover:text-Lightblue'>&#9679; &nbsp; Springdale AR 72762</li>
                </a>
                <a
                  href="https://www.google.com/maps/place/17100+S+Harlan+Rd,+Lathrop,+CA+95330,+USA/@37.8056626,-121.2968426,17z/data=!4m5!3m4!1s0x80901562ee55acd9:0x6e5659d42b7cd177!8m2!3d37.8058491!4d-121.2951796"
                  target="_blank"
                >
                  <li className='hover:text-Lightblue'>&#9679; &nbsp;  Lathrop CA 95330</li>
                </a>
                <a
                  href="https://www.google.com/maps/place/3401+Sillect+Ave,+Bakersfield,+CA+93308,+USA/@35.3911406,-119.0399986,17z/data=!3m1!4b1!4m5!3m4!1s0x80ea69dc654356ff:0xc71b91138884aaf6!8m2!3d35.3911406!4d-119.0378099"
                  target="_blank"
                >
                  <li className='hover:text-Lightblue'>&#9679; &nbsp; Bakersfield CA 93308</li>
                </a>
                <a
                  href="https://www.google.com/maps/place/1225+Riverside+Rd,+Abbotsford,+BC+V2S+7P1,+Canada/@49.0243446,-122.27483,17z/data=!4m5!3m4!1s0x54844ae9d00fadc1:0xd47fb33380922fab!8m2!3d49.0243728!4d-122.2726413"
                  target="_blank"
                >
                  <li className='hover:text-Lightblue'>&#9679; &nbsp; Abbotsford BC V2S 7P1</li>
                </a>
                <a
                  href="https://www.google.com/maps/place/160+Industrial+St,+San+Marcos,+CA+92078,+USA/@33.136296,-117.1602352,17z/data=!3m1!4b1!4m5!3m4!1s0x80db8ab3b9f18c1b:0x6b10250b71a8172e!8m2!3d33.136296!4d-117.1580465"
                  target="_blank"
                >
                  <li className='hover:text-Lightblue'>&#9679; &nbsp; San Marcos CA 92078 </li>
                </a>
                <a
                  href="https://www.google.com/maps/place/11090+Almond+Ave,+Fontana,+CA+92337,+USA/@34.0521505,-117.4959756,17z/data=!3m1!4b1!4m5!3m4!1s0x80c34b2e7d99f65f:0x4c7b2a802289255c!8m2!3d34.0521461!4d-117.4937869"
                  target="_blank"
                >
                  <li className='hover:text-Lightblue'>&#9679; &nbsp; Fontana CA 92337</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
