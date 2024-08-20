export function makeBackground(k) {
  k.add([
    k.rect(k.width(), k.height()),
    k.color(k.Color.fromHex("#d7f2f7"))
  ]);
}

export function computeRank(score) {
  if (score > 200) {
    return "Unbelievable";
  }

  if (score > 100) {
    return "Mind Blowing";
  }

  if (score > 50) {
    return "Superb";
  }

  if (score > 30) {
    return "Excellent";
  }

  if (score > 20) {
    return "Good";
  }

  if (score > 10) {
    return "Better";
  }

  if (score > 2) {
    return "Too Less";
  }

  return "Nothing";
}