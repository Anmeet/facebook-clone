import React from 'react';
import './StoryReel.css';
import Story from './Story';

const StoryReel = props => {
  return (
    <div className='StoryReel'>
      <Story
        image='amit_story.jpg'
        profileSrc='amit.jpg'
        title='Amit Bhandari'
      />
      <Story
        image='https://scontent.fsyd4-1.fna.fbcdn.net/v/t31.0-8/1496008_10202400389685739_323522803344368771_o.jpg?_nc_cat=100&_nc_sid=174925&_nc_ohc=aJVngq-9IMMAX-5FJJ0&_nc_ht=scontent.fsyd4-1.fna&oh=3ca2e1cae31f6917a947667090b33e7b&oe=5F8E912E'
        profileSrc='https://scontent.fsyd4-1.fna.fbcdn.net/v/t31.0-8/14876683_10206158720921671_1317267933821538322_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=7aMl0_XvBRkAX_BPeEL&_nc_ht=scontent.fsyd4-1.fna&oh=5eb7a0675b2917004624189d74809327&oe=5F8F67D0'
        title='Aman Bhattu'
      />
      <Story
        image='https://scontent.fsyd4-1.fna.fbcdn.net/v/t1.0-9/15741321_984723301628379_1477531149041910388_n.jpg?_nc_cat=102&_nc_sid=19026a&_nc_ohc=EeZ3Q0M3DrgAX8J3Vko&_nc_ht=scontent.fsyd4-1.fna&oh=d7c51984f91a3d2c7e678d4591a49fe8&oe=5F8E231A'
        profileSrc='https://scontent.fsyd4-1.fna.fbcdn.net/v/t1.0-9/119548494_2895571463876877_7984871884034775177_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=OlSkIt4LsSoAX-LYGdO&_nc_ht=scontent.fsyd4-1.fna&oh=9866636e90468de475e0f5b7097b5424&oe=5F8EEB0A'
        title='Depace Shrestha'
      />
      <Story
        image='https://scontent.fsyd4-1.fna.fbcdn.net/v/t1.0-9/12923166_1069734986379958_8409446750174487410_n.jpg?_nc_cat=102&_nc_sid=a4a2d7&_nc_ohc=6PPVazHHn80AX8fhMyy&_nc_ht=scontent.fsyd4-1.fna&oh=191a36186e8fc396d7feb2a5af138435&oe=5F8F08AC'
        profileSrc='https://scontent.fsyd4-1.fna.fbcdn.net/v/t1.0-9/10547503_769004326453027_3747798835040822580_n.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=90-2uIdlHs4AX8Q_zp9&_nc_ht=scontent.fsyd4-1.fna&oh=db226dbe417afb1a4ea1754e38c8cbaf&oe=5F8F4451'
        title='Shasank Ghimire'
      />
      <Story
        image='https://avatars3.githubusercontent.com/u/13010390?s=400&u=4a82521c5378de53c784c90aec96da7721e7dbd6&v=4'
        profileSrc='https://avatars3.githubusercontent.com/u/13010390?s=400&u=4a82521c5378de53c784c90aec96da7721e7dbd6&v=4'
        title='Sudin Shrestha'
      />
    </div>
  );
};

export default StoryReel;
