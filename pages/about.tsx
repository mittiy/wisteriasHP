import type { NextPage } from 'next';
import MyCarousel from './component/MyCarousel';
import VideoComponent from './component/VideoComponent';
import { MantineProvider } from '@mantine/core';
import { MyAppHeader } from './component/Header';

const About: NextPage = () => {
  return (
    <div>
      <div>
        <MyAppHeader />
      </div>
      <div>
        {/* ビデオを背景として配置 */}
        <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
          <video autoPlay muted loop style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: '0', left: '0' }}>
            <source src="HPtopAnimation.mp4" type="video/mp4"/>
            {/* ビデオがサポートされていない場合の代替コンテンツ */}
            Your browser does not support the video tag.
          </video>

          
          {/* ビデオ上のコンテンツ */}

        </div>
            <h1>About Page1</h1>
            <div style={{  maxWidth: '1200px', margin: 'auto' }}>
              <MyCarousel/>
            </div>
      </div>
    </div>
  );
};

export default About;
