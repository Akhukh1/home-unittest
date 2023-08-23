export default function healthType(gamer) {
  let result = '';
  if (gamer.health < 15) {
    result = 'critical';
  } else if (gamer.health < 50) {
    result = 'wounded';
  } else {
    result = 'healthy';
  }
  return result;
}
