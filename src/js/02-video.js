
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const TIME_KEY = 'videoplayer-current-time';

const onTimeUpdate = (event) => localStorage.setItem(TIME_KEY, JSON.stringify(event.seconds));

player.on('timeupdate', throttle(onTimeUpdate, 1000));

const currentTime = JSON.parse(localStorage.getItem(TIME_KEY));

player.setCurrentTime(currentTime);