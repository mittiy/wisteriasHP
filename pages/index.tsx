import type { NextPage } from 'next';
import MyCarousel from './component/MyCarousel';
import VideoComponent from './component/VideoComponent';
import { MantineProvider } from '@mantine/core';
import { MyAppHeader } from './component/Header';
import { Image } from '@mantine/core';

const About: NextPage = () => {
  return (
    <div>
      <div>
        <MyAppHeader />
      </div>
      <Image src="Wisterias Cover.png" alt="Image 1"/>
        {/* トップ画像の高さを調整するために、heightプロパティを使用 */}
      <div>

            <h1>About Page1</h1>
            <div style={{  maxWidth: '1000px', margin: 'auto' }}>
              <MyCarousel/>
            </div>
      </div>
    </div>
  );
};

export default About;
