osc(75, 0.01, 1.4)
  .rotate(0, 0.1)
  .mult(
    noise(1, 0.1, 99)
      .modulate(osc(6))
      .rotate(0, -0.1)
      .modulateScale(osc(13, 0.01, 9)),
    1
  )
  .color(2.83, 0.91, 0.39)
  .modulateKaleid(osc(50, 0.05).kaleid(1).modulateRotate(noise(6)))
  .out(o0);
