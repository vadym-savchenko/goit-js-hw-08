import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME = 'videoplayer-current-time';

player.on('timeupdate', throttle(handleTimePlayer, 1000));

function handleTimePlayer(event) {
  localStorage.setItem(CURRENT_TIME, event.seconds);
}

const currentTime = localStorage.getItem(CURRENT_TIME)
  ? localStorage.getItem(CURRENT_TIME)
  : 0;

player.setCurrentTime(Number(currentTime));