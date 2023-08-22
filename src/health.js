export default function healthType(gamer) {
  let result = '';
  if (gamer.health > 50 && gamer.health < 100) {
    result = 'healthy';
  }
  return result;
}
