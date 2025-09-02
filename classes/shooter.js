import Rectangle from './entities/rectangle.js'
import Projectile from './entities/projectile.js'

export default class Shooter extends Rectangle {
  static HEIGHT = 15;
  static WIDTH = 100;
  static COLOR = "white"
  static MISSILE_RADIUS = 10;
  static MISSILE_SPEED = 5;
  static MISSILE_COLOR = "blue";
  constructor(game) {
    super(game, game.width / 2, game.height - 10, Shooter.WIDTH, Shooter.HEIGHT, Shooter.COLOR)
  }
  shoot(x) {
    var projectile = new Projectile(this.game, x, this.y - Shooter.HEIGHT, Shooter.MISSILE_RADIUS, Shooter.MISSILE_SPEED, Shooter.MISSILE_COLOR)
    return projectile;
  }
}
