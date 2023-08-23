export default function healthType(gamer) {
  let result = '';
  if (gamer.health < 15) {
    result = 'critical';
  } else if (gamer.health < 50) {
    result = 'wounded';
  } else if (gamer.health < 100) {
    result = 'healthy';
  }
  return result;
}
